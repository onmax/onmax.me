import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  database: { type: 'd1', bindingName: 'DB' },
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishedAt: z.date().optional()
      })
    })
  }
})
