export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/ui', '@nuxt/content', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  routeRules: { '/': { prerender: true }, '/posts/**': { prerender: true } },
  compatibilityDate: '2025-01-15',
  hub: { db: { dialect: 'sqlite', driver: 'd1', connection: { databaseId: '5a113631-37db-48a6-8520-e93358d2889d' } } },
  nitro: { prerender: { crawlLinks: true } },
  eslint: {
    config: { stylistic: { commaDangle: 'never', braceStyle: '1tbs' } }
  },
  icon: { serverBundle: 'remote' }
})
