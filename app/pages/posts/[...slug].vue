<script setup lang="ts">
const route = useRoute()
const { data: post } = await useFetch(`/api${route.path}`, { key: `post-${route.path}` })

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

const title = `${post.value.title} — Maxi García`
const description = post.value.description
const canonical = `https://onmax.me${post.value.path}`
const image = `https://onmax.me${post.value.image ?? '/maxi-og-image.png'}`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: post.value.image ? 'summary_large_image' : undefined
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  // Comark's runtimes for what the post uses, such as annotate's copy button and zoom
  script: post.value.scripts.map((innerHTML, index) => ({ key: `comark-${index}`, innerHTML, tagPosition: 'bodyClose' }))
})
</script>

<template>
  <article
    v-if="post"
    class="pt-12 sm:pt-20"
  >
    <header class="enter">
      <h1 class="text-2xl font-semibold tracking-tight text-highlighted text-balance">
        {{ post.title }}
      </h1>
      <p class="mt-2 text-sm text-dimmed">
        <time
          v-if="post.publishedAt"
          class="tabular-nums"
        >{{ formatDate(post.publishedAt, 'long') }}</time>
      </p>
    </header>

    <div
      class="article-body enter mt-10"
      style="--i: 1"
      v-html="post.html"
    />

    <NuxtLink
      to="/posts"
      class="link mt-12 inline-block text-sm"
    >
      All writing
    </NuxtLink>
  </article>
</template>
