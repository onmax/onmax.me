export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/ui', '@nuxt/content', '@nuxt/icon', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // Source lives in /app (pages, components, app.vue, etc.)
  srcDir: 'app/',
  routeRules: {
    '/': { prerender: true },
    '/posts/**': { prerender: true },
    '/hire': { prerender: true }
  },
  compatibilityDate: '2025-01-15',
  nitro: { prerender: { crawlLinks: true } },
  hub: { db: 'sqlite' },
  eslint: {
    config: { stylistic: { commaDangle: 'never', braceStyle: '1tbs' } }
  },
  icon: { serverBundle: 'remote' },
  image: {
    provider: 'ipx',
    quality: 80,
    format: ['webp', 'avif'],
    domains: ['onmax.me']
  }
})
