import cms from 'vite-hub/content/presets/cms'
import { defineContent, documents } from 'vite-hub/content'
import { z } from 'zod'

// Posts stay Markdown files in content/posts on main. The Console edits them on the vitehub/content branch and a
// publish commits them to main, which redeploys the site and renders them again at build time (modules/posts).
const posts = documents({
  path: 'content/posts/*.md',
  label: 'Posts',
  fields: {
    title: z.string().min(1),
    description: z.string().optional(),
    publishedAt: z.iso.date().optional(),
    image: z.string().optional()
  },
  // Nuxt Content lowercased paths, and modules/posts keeps them that way
  url: ({ id }) => `/posts/${id.toLowerCase()}`,
  // The comark blocks posts use, so the Console's rich editor keeps them instead of turning read-only
  components: {
    carousel: { label: 'Carousel', props: { title: { type: 'string' } } },
    compare: { label: 'Before/after' },
    screenshot: {
      label: 'Screenshot',
      props: { src: { type: 'string' }, alt: { type: 'string' }, viewport: { type: 'string' }, href: { type: 'string' } }
    },
    annotation: {
      label: 'Annotation',
      props: {
        x: { type: 'number' },
        y: { type: 'number' },
        w: { type: 'number' },
        h: { type: 'number' },
        color: { type: 'string' },
        mark: { type: 'string' },
        side: { type: 'string' }
      }
    }
  }
})

export const content = defineContent({
  extends: [cms, { repo: 'onmax/onmax.me', branch: 'main' }],
  collections: { posts },
  // Only Maxi reaches the Console: Cloudflare Access guards it on the Worker, and it passes no user (null)
  authorize: () => true
})
