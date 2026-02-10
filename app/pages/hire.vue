<script setup lang="ts">
import { getHireFaqJsonLd, getHireJsonLd, hero } from '~/lib/hire'

const title = 'Hire a Nuxt Consultant | Sprints (Performance, Migration, Shipping)'
const description = hero.subhead

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/maxi-og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: '/maxi-og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://onmax.me/hire' }],
  script: [
    { type: 'application/ld+json', textContent: JSON.stringify(getHireJsonLd()) },
    { type: 'application/ld+json', textContent: JSON.stringify(getHireFaqJsonLd()) }
  ]
})
</script>

<template>
  <HirePage />
</template>
