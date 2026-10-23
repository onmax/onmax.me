import { addServerTemplate, addTypeTemplate, createResolver, defineNuxtModule } from '@nuxt/kit'
import { renderPosts } from './render'

// Posts are Markdown in content/posts, rendered with Comark when the app builds and served as `#posts` to the
// server routes. Editing a post restarts the dev server so it renders again.
export default defineNuxtModule({
  meta: { name: 'posts' },
  setup(_, nuxt) {
    const dir = createResolver(nuxt.options.rootDir).resolve('content/posts')
    nuxt.options.watch.push(dir)

    addServerTemplate({
      filename: '#posts',
      getContents: async () => `export default ${JSON.stringify(await renderPosts(dir))}`
    })

    addTypeTemplate({
      filename: 'types/posts.d.ts',
      getContents: () => `declare module '#posts' {
  const posts: import(${JSON.stringify(createResolver(import.meta.url).resolve('./render'))}).Post[]
  export default posts
}`
    }, { nitro: true, nuxt: true })
  }
})
