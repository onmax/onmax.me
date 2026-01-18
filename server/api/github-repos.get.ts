interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  pushed_at: string
  stargazers_count: number
  language: string | null
  fork: boolean
}

export default defineCachedEventHandler(async () => {
  const repos = await $fetch<GitHubRepo[]>('https://api.github.com/users/onmax/repos', {
    query: { per_page: 100, sort: 'pushed' }
  })

  const now = Date.now()
  const DAY = 86400000
  const filtered = repos.filter(r => !r.fork)

  return {
    current: filtered.filter(r => now - new Date(r.pushed_at).getTime() < 30 * DAY),
    recent: filtered.filter(r => {
      const age = now - new Date(r.pushed_at).getTime()
      return age >= 30 * DAY && age < 90 * DAY
    }),
    archive: filtered.filter(r => now - new Date(r.pushed_at).getTime() >= 90 * DAY)
  }
}, { maxAge: 60 * 60 * 24, swr: true })
