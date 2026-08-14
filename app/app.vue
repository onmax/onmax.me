<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navigation: NavigationMenuItem[] = [
  { label: 'Work', to: '/work' },
  { label: 'Writing', to: '/#writing' },
  { label: 'About', to: '/#about' }
]

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [
    { rel: 'icon', href: '/favicon.svg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap'
    }
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

    <UHeader
      title="Hola, I'm Maxi"
      :toggle="{ color: 'neutral', variant: 'ghost' }"
      class="sticky top-0 z-50 border-b border-default bg-default/90 backdrop-blur-xl"
      :ui="{
        container: 'h-16 max-w-6xl',
        title: 'font-semibold tracking-[-0.03em]'
      }"
    >
      <template #title>
        <span>Hola, I'm Maxi</span>
      </template>

      <UNavigationMenu
        :items="navigation"
        color="neutral"
        variant="link"
        class="hidden md:flex"
      />

      <template #right>
        <UButton
          to="/#contact"
          color="neutral"
          trailing-icon="i-lucide-arrow-up-right"
          class="hidden sm:inline-flex"
        >
          Work with me
        </UButton>
      </template>

      <template #body>
        <UNavigationMenu
          :items="navigation"
          orientation="vertical"
          color="neutral"
          class="-mx-2"
        />
        <UButton
          to="/#contact"
          color="neutral"
          trailing-icon="i-lucide-arrow-up-right"
          block
          class="mt-6"
        >
          Work with me
        </UButton>
      </template>
    </UHeader>

    <main id="main-content">
      <NuxtPage />
    </main>

    <SiteFooter />
  </UApp>
</template>
