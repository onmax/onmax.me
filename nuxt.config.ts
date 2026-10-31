export default defineNuxtConfig({
  modules: ['vite-hub/nuxt', '@nuxt/eslint', '@nuxt/ui', '@nuxt/icon', '@nuxt/image'],
  // Cloudflare resizing only exists on the deployed domain
  $development: { image: { provider: 'ipx' } },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // Source lives in /app (pages, components, app.vue, etc.)
  srcDir: 'app/',
  routeRules: {
    '/': { prerender: true },
    '/ai-workflows': { prerender: true },
    '/posts/**': { prerender: true },
    '/hire': { redirect: { to: '/', statusCode: 301 } }
  },
  compatibilityDate: '2025-01-15',
  // The vitehub preset also sets Nitro's preset (cloudflare-module), so nitro.preset stays unset
  nitro: {
    prerender: { crawlLinks: true, ignore: ['/hire', '/_vitehub'] }
  },
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
        'lucide:moon',
        'lucide:orbit',
        'lucide:sun',
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
  },
  vitehub: {
    // The Worker's name, which ViteHub would otherwise take from package.json
    name: 'onmax',
    preset: 'cloudflare',
    // The D1 database NuxtHub used. Content keeps editor sessions in it.
    database: { driver: 'd1', binding: 'DB', databaseName: 'onmax-new-db', databaseId: '5a113631-37db-48a6-8520-e93358d2889d' },
    // Cloudflare Access guards /_vitehub on the Worker; the dev server has no Access edge and lets every request in
    console: { auth: { provider: 'cloudflare-access' } }
  }
})
