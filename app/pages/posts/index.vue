<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('publishedAt', 'DESC').all()
)

const title = 'Writing — Maxi García'
const description = 'Notes on Nuxt, frontend architecture, open source, and developer tooling.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://onmax.me/maxi-og-image.png',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: 'https://onmax.me/maxi-og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://onmax.me/posts' }]
})
</script>

<template>
  <div class="pt-12 sm:pt-20">
    <header class="enter">
      <h1 class="text-sm font-medium text-highlighted">
        Writing
      </h1>
      <p class="mt-4 text-[15px] leading-7 text-muted">
        Nuxt, interface systems, open source, and the occasional argument with my own assumptions.
      </p>
    </header>

    <ul
      class="enter mt-8"
      style="--i: 1"
    >
      <li
        v-for="post in posts"
        :key="post.path"
      >
        <NuxtLink
          :to="post.path"
          class="row block py-3 text-sm"
        >
          <span class="flex items-baseline justify-between gap-6">
            <span class="font-medium text-highlighted">{{ post.title }}</span>
            <time
              v-if="post.publishedAt"
              class="shrink-0 tabular-nums text-dimmed"
            >{{ formatDate(post.publishedAt) }}</time>
          </span>
          <span
            v-if="post.description"
            class="mt-1 block text-muted"
          >{{ post.description }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
