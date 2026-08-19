export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/ui', '@nuxt/content', '@nuxt/icon', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // Source lives in /app (pages, components, app.vue, etc.)
  srcDir: 'app/',
  routeRules: {
    '/': { prerender: true },
    '/posts/**': { prerender: true },
    '/hire': { redirect: { to: '/', statusCode: 301 } }
  },
  compatibilityDate: '2025-01-15',
  nitro: { prerender: { crawlLinks: true, ignore: ['/hire'] } },
  hub: { db: 'sqlite' },
  eslint: {
    config: { stylistic: { commaDangle: 'never', braceStyle: '1tbs' } }
  },
  icon: {
    provider: 'none',
    serverBundle: false,
    clientBundle: {
      scan: {
        globInclude: ['app/**', 'node_modules/@nuxt/ui/dist/**'],
        globExclude: ['node_modules']
      },
      icons: [
        'lucide:bot',
        'lucide:chart-spline',
        'lucide:copy',
        'lucide:focus',
        'lucide:hash',
        'lucide:menu',
        'lucide:orbit',
        'lucide:x',
        'simple-icons:betterauth',
        'simple-icons:nuxtdotjs',
        'simple-icons:vite'
      ]
    }
  },
  image: {
    provider: 'cloudflare',
    cloudflare: { baseURL: 'https://onmax.me' },
    quality: 80,
    format: ['webp', 'avif']
  }
})
