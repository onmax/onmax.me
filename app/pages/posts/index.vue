<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('publishedAt', 'DESC').all()
)
</script>

<template>
  <div class="max-w-[644px] mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold mb-8">Blog</h1>
    <ul class="space-y-6">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path" class="block group">
          <h2 class="text-xl font-semibold group-hover:underline">{{ post.title }}</h2>
          <p v-if="post.description" class="text-neutral-600 dark:text-neutral-400 mt-1">{{ post.description }}</p>
          <time v-if="post.publishedAt" class="text-sm text-neutral-500 mt-2 block">
            {{ new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
          </time>
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/" class="mt-12 inline-block text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">
      &larr; Back to home
    </NuxtLink>
  </div>
</template>
