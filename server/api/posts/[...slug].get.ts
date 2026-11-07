import { createError, defineEventHandler, getRouterParam } from 'nuxt/server'
import posts from '#posts'

export default defineEventHandler((event) => {
  const path = `/posts/${getRouterParam(event, 'slug')}`.toLowerCase()
  const post = posts.find(post => post.path === path)
  if (!post) throw createError({ status: 404, statusText: 'Post not found' })
  return post
})
