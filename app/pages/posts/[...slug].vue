<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`post-${route.path}`, () =>
  queryCollection('posts').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

const title = `${post.value.title} — Maxi García`
const description = post.value.description
const canonical = `https://onmax.me${post.value.path}`

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
  link: [{ rel: 'canonical', href: canonical }]
})
</script>

<template>
  <UContainer class="py-16 sm:py-24">
    <article
      v-if="post"
      class="mx-auto max-w-3xl"
    >
      <NuxtLink
        to="/posts"
        class="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-highlighted"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="size-4"
        />
        All writing
      </NuxtLink>

      <header class="page-enter mt-12 border-b border-default pb-10">
        <p class="eyebrow">
          Field note
        </p>
        <h1 class="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] text-highlighted sm:text-6xl">
          {{ post.title }}
        </h1>
        <p
          v-if="post.description"
          class="mt-6 text-lg leading-8 text-muted"
        >
          {{ post.description }}
        </p>
        <time
          v-if="post.publishedAt"
          class="mt-7 block font-mono text-xs uppercase tracking-[0.1em] text-dimmed"
        >{{ new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
      </header>

      <ContentRenderer
        :value="post"
        class="article-body prose prose-neutral dark:prose-invert mt-12 max-w-none prose-headings:font-sans prose-headings:font-semibold prose-a:font-medium prose-pre:border prose-pre:border-default prose-pre:bg-muted"
      />
    </article>
  </UContainer>
</template>
