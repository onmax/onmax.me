<script setup lang="ts">
import type { Post } from '~~/modules/posts/render'

const route = useRoute()
const { data: post } = await useFetch<Post>(`/api${route.path}`, { key: `post-${route.path}` })

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
  twitterTitle: title,
  twitterDescription: description
})

// Rendered at build time from app/components/OgImage/Post.takumi.vue
defineOgImage('Post', {
  title: post.value.title,
  description,
  publishedAt: post.value.publishedAt,
  cover: post.value.cover
}, { alt: post.value.title, cacheKey: `${post.value.path}@${post.value.ogVersion}` })

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
