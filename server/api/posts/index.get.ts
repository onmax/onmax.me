import posts from '#posts'

export default defineEventHandler(() =>
  posts.map(({ html: _html, scripts: _scripts, ...meta }) => meta)
)
