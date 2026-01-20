export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/content', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  routeRules: { '/': { prerender: true }, '/posts/**': { prerender: true } },
  compatibilityDate: '2025-01-15',
  nitro: { preset: 'cloudflare', prerender: { crawlLinks: true } },
  eslint: {
    config: { stylistic: { commaDangle: 'never', braceStyle: '1tbs' } }
  },
  icon: { serverBundle: 'remote' }
})
