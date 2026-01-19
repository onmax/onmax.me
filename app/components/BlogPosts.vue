<script setup lang="ts">
const { data: posts } = await useAsyncData('recent-posts', () =>
  queryCollection('posts')
    .order('publishedAt', 'DESC')
    .limit(3)
    .all()
)
</script>

<template>
  <section
    id="blog"
    class="py-24"
  >
    <div class="flex relative">
      <div class="mr-4 whitespace-nowrap py-4">
        <h2 class="sticky top-[calc(50%-12px)] font-bold w-32 text-right text-lg">
          Blog
        </h2>
      </div>
      <div class="flex-1 ml-8">
        <ul class="space-y-6">
          <li
            v-for="post in posts"
            :key="post.stem"
            class="group"
          >
            <NuxtLink
              :to="`/${post.stem}`"
              class="block rounded-lg p-4 -mx-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <h3 class="font-semibold text-lg group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">{{ post.title }}</h3>
              <p class="text-sm opacity-60 mt-1 line-clamp-2">{{ post.description }}</p>
              <time
                v-if="post.publishedAt"
                class="text-xs opacity-40 mt-2 block"
              >{{ new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}</time>
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink
          to="/posts"
          class="inline-flex items-center gap-2 mt-8 text-sm opacity-60 hover:opacity-100 transition-opacity"
        >
          View all posts
          <UIcon
            name="i-carbon-arrow-right"
            class="size-4"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
