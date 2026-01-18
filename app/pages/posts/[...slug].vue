<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`post-${route.path}`, () =>
  queryCollection('posts').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description
})
</script>

<template>
  <div class="max-w-[644px] mx-auto px-6 py-12">
    <NuxtLink to="/posts" class="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 mb-8 inline-block">
      &larr; All posts
    </NuxtLink>
    <article v-if="post">
      <header class="mb-8">
        <h1 class="text-3xl font-bold">{{ post.title }}</h1>
        <time v-if="post.publishedAt" class="text-sm text-neutral-500 mt-2 block">
          {{ new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </time>
      </header>
      <ContentRenderer :value="post" class="prose dark:prose-invert max-w-none" />
    </article>
  </div>
</template>
