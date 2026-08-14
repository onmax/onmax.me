<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('publishedAt', 'DESC').all()
)

useSeoMeta({
  title: 'Writing — Maxi García',
  description: 'Notes on Nuxt, frontend architecture, open source, and developer tooling.'
})
</script>

<template>
  <UContainer class="py-20 sm:py-28">
    <header class="page-enter max-w-3xl">
      <p class="eyebrow">
        Writing
      </p>
      <h1 class="mt-5 text-5xl font-semibold tracking-[-0.055em] text-highlighted sm:text-7xl">
        Notes from
        <span class="display-serif font-normal italic">building.</span>
      </h1>
      <p class="mt-6 max-w-xl text-lg leading-8 text-muted">
        Nuxt, interface systems, open source, and the occasional argument with my own assumptions.
      </p>
    </header>

    <ol class="mt-16 border-t border-default">
      <li
        v-for="(post, index) in posts"
        :key="post.path"
        class="border-b border-default"
      >
        <NuxtLink
          :to="post.path"
          class="group grid gap-4 py-8 sm:grid-cols-[3rem_minmax(0,1fr)_12rem_auto] sm:items-center sm:gap-6"
        >
          <span class="eyebrow">{{ String(index + 1).padStart(2, '0') }}</span>
          <span>
            <span class="block text-xl font-semibold tracking-[-0.03em] text-highlighted">{{ post.title }}</span>
            <span
              v-if="post.description"
              class="mt-2 block max-w-2xl text-sm leading-6 text-muted"
            >{{ post.description }}</span>
          </span>
          <time
            v-if="post.publishedAt"
            class="text-sm text-dimmed"
          >{{ new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4 text-dimmed transition-transform group-hover:translate-x-1"
          />
        </NuxtLink>
      </li>
    </ol>
  </UContainer>
</template>
