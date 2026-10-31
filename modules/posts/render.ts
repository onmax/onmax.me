// Renders content/posts/*.md to HTML with Comark at build time, so the Worker ships HTML strings and no parser or Shiki.
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { renderHtmlFromDocument } from '@comark/html'
import shiki from '@comark/html/plugins/shiki'
import { parseMarkdown } from 'comark'
import comarkUi from 'comark-ui/html'
import githubDark from 'shiki/themes/github-dark.mjs'
import githubLight from 'shiki/themes/github-light.mjs'

export interface Post {
  path: string
  title: string
  description?: string
  publishedAt?: string
  // Shown under the title in the post's OG image; posts without one get the default OG design
  cover?: string
  html: string
  scripts: string[]
}

// Every comark-ui block, minus the plugins that restyle plain Markdown the posts already have: app/assets/css/main.css
// styles the article text (typeset), code keeps the site's own Shiki output (code), and @mentions, link favicons and
// heading anchors stay plain (chips, github references, links).
const ui = () => comarkUi({ typeset: false, chips: false, code: false, links: false, github: { references: false } })
const { components } = ui()
const plugins = () => [shiki({ themes: { light: githubLight, dark: githubDark } }), ...ui().plugins]

// Comark's runtimes (zoom, carousel, annotate's copy button) come inline as <script> tags, which v-html never runs.
// They're pulled out here and the page adds them to its head; each one starts once per page and ignores a second run.
const splitScripts = (html: string) => {
  const scripts: string[] = []
  const body = html.replace(/<script>([\s\S]*?)<\/script>/g, (_, code: string) => {
    scripts.push(code)
    return ''
  })
  return { body, scripts }
}

const date = (value: unknown) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : typeof value === 'string' ? value : undefined

export async function renderPost(source: string, slug: string): Promise<Post> {
  const document = await parseMarkdown(source, { plugins: plugins() })
  const { title, description, publishedAt, cover } = document.frontmatter as Record<string, unknown>
  if (typeof title !== 'string') throw new Error(`content/posts/${slug}.md needs a title in its frontmatter.`)
  const issues = (document.meta as { issues?: string[] }).issues ?? []
  if (issues.length) throw new Error(`content/posts/${slug}.md:\n${issues.join('\n')}`)
  const { body, scripts } = splitScripts(await renderHtmlFromDocument(document, { components }))
  return {
    // Nuxt Content lowercased paths, so old links such as /posts/the-evolution-of-nimiq-ui keep working
    path: `/posts/${slug.toLowerCase()}`,
    title,
    description: typeof description === 'string' ? description : undefined,
    publishedAt: date(publishedAt),
    cover: typeof cover === 'string' ? cover : undefined,
    html: body,
    scripts
  }
}

export async function renderPosts(dir: string): Promise<Post[]> {
  const files = (await readdir(dir)).filter(file => file.endsWith('.md'))
  const posts = await Promise.all(
    files.map(async file => renderPost(await readFile(join(dir, file), 'utf8'), file.slice(0, -3)))
  )
  return posts.sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))
}
