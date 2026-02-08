<script setup lang="ts">
import { getHireJsonLd, hero } from '~/lib/hire'

const title = 'Hire Maxi Garcia | Nuxt Sprints'
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
  script: [{ type: 'application/ld+json', textContent: JSON.stringify(getHireJsonLd()) }]
})
</script>

<template>
  <HirePage />
</template>
