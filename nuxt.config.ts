export default defineNuxtConfig({
  modules: ['vite-hub/nuxt', '@nuxt/eslint', '@nuxt/ui', '@nuxt/icon', '@nuxt/image', '@nuxt/fonts', 'nuxt-og-image'],
  // Cloudflare resizing only exists on the deployed domain
  $development: { image: { provider: 'ipx' } },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  site: { url: 'https://onmax.me', name: 'Maxi García' },
  // Source lives in /app (pages, components, app.vue, etc.)
  srcDir: 'app/',
  routeRules: {
    '/': { prerender: true },
    '/ai-workflows': { prerender: true },
    '/posts/**': { prerender: true },
    '/hire': { redirect: { to: '/', status: 301 } }
  },
  compatibilityDate: '2026-10-01',
  // The vitehub host also sets Nitro's preset (cloudflare-module), so nitro.preset stays unset
  nitro: {
    // posts/<slug>.html, so Cloudflare serves /posts/<slug> without a trailing-slash redirect, as before
    prerender: { crawlLinks: true, autoSubfolderIndex: false, ignore: ['/hire', '/_vitehub'] },
    // Workers have no import.meta.url, and Nitro 3 no longer replaces it as Nitro 2 did. tegaki's font module calls
    // new URL('./caveat.ttf', import.meta.url) when it loads, so every page that the Worker renders failed with a 500.
    replace: { 'import.meta.url': JSON.stringify('file:///_entry.js') }
  },
  eslint: {
    config: { stylistic: { commaDangle: 'never', braceStyle: '1tbs' } }
  },
  // Geist comes from @nuxt/fonts so the OG image renderer can use it too
  fonts: {
    families: [{ name: 'Geist', weights: [400, 500, 600], global: true }]
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
  // Every post is prerendered, so OG images render at build time and the Worker ships no renderer
  ogImage: {
    zeroRuntime: true,
    defaults: { height: 630 }
  },
  vitehub: {
    // The Worker's name, which ViteHub would otherwise take from package.json
    name: 'onmax',
    host: 'cloudflare',
    // The D1 database NuxtHub used. Content keeps editor sessions in it.
    database: { driver: 'd1', binding: 'DB', databaseName: 'onmax-new-db', databaseId: '5a113631-37db-48a6-8520-e93358d2889d' },
    // server/forms/workflow-review.ts mails each request through the EMAIL send_email binding in wrangler.json
    email: true,
    // Linked at console.vitehub.dev, which signs each call with the key in VITEHUB_CONSOLE_KEY_CONSOLE_<ID>
    console: true
  }
})
