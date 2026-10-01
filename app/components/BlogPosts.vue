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
    id="writing"
    class="enter py-10"
    style="--i: 3"
  >
    <h2 class="mb-3 text-sm text-dimmed">
      Writing
    </h2>

    <ul>
      <li
        v-for="post in posts"
        :key="post.path"
      >
        <NuxtLink
          :to="post.path"
          class="row flex items-baseline justify-between gap-6 py-2.5 text-sm"
        >
          <span class="truncate font-medium text-highlighted">{{ post.title }}</span>
          <time
            v-if="post.publishedAt"
            class="shrink-0 tabular-nums text-dimmed"
          >{{ formatDate(post.publishedAt) }}</time>
        </NuxtLink>
      </li>
    </ul>

    <NuxtLink
      to="/posts"
      class="link mt-5 inline-block text-sm"
    >
      All writing
    </NuxtLink>
  </section>
</template>
