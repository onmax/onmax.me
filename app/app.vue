<script setup lang="ts">
const navigation = [
  { label: 'AI workflows', to: '/ai-workflows' },
  { label: 'Work', to: '/work' },
  { label: 'Writing', to: '/posts' },
  { label: 'Contact', to: '/#contact' }
]

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [
    { rel: 'icon', href: '/favicon.svg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap' }
  ],
  htmlAttrs: { lang: 'en' }
})

const title = 'Maxi García — Senior Nuxt/Vue Engineer'
const description = 'Senior Nuxt/Vue engineer building production frontend systems, open-source tools, and focused consulting engagements.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/maxi-og-image.png',
  twitterImage: '/maxi-og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <a
      href="#main-content"
      class="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-inverted px-4 py-2 text-sm text-inverted transition-transform focus:translate-y-0"
    >Skip to content</a>

    <div class="mx-auto flex min-h-svh max-w-2xl flex-col px-6">
      <header class="flex h-20 items-center justify-between text-sm">
        <NuxtLink
          to="/"
          class="font-medium text-highlighted"
        >Maxi García</NuxtLink>
        <nav
          aria-label="Main navigation"
          class="flex items-center gap-5"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="text-muted transition-colors hover:text-highlighted"
            :active-class="item.to.includes('#') ? '' : 'text-highlighted'"
          >
            {{ item.label }}
          </NuxtLink>
          <UColorModeButton
            size="xs"
            class="-mr-1.5 text-muted"
          />
        </nav>
      </header>

      <main
        id="main-content"
        class="flex-1"
      >
        <NuxtPage />
      </main>

      <SiteFooter />
    </div>
  </UApp>
</template>
