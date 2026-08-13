<script setup lang="ts">
import { getHireFaqJsonLd, getHireJsonLd, hero } from '~/lib/hire'

const title = 'Hire a Nuxt Consultant | Nuxt 4 Upgrades, Performance & Sprints'
const description = hero.subhead
const socialImage = 'https://onmax.me/hire-og.png'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: socialImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Senior Nuxt, on demand — focused Nuxt consulting sprints by Onmax',
  twitterCard: 'summary_large_image',
  twitterImage: socialImage,
  twitterImageAlt: 'Senior Nuxt, on demand — focused Nuxt consulting sprints by Onmax'
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
