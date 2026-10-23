import posts from '#posts'

export default defineEventHandler((event) => {
  const path = `/posts/${getRouterParam(event, 'slug')}`.toLowerCase()
  const post = posts.find(post => post.path === path)
  if (!post) throw createError({ statusCode: 404, statusMessage: 'Post not found' })
  return post
})
