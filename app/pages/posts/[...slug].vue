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

    <ContentRenderer
      :value="post"
      class="article-body enter mt-10"
      style="--i: 1"
    />

    <NuxtLink
      to="/posts"
      class="link mt-12 inline-block text-sm"
    >
      All writing
    </NuxtLink>
  </article>
</template>
