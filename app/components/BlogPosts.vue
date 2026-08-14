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
    class="border-b border-default py-24 sm:py-32"
  >
    <UContainer>
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <header class="max-w-xl">
          <p class="eyebrow">
            Writing
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-[-0.045em] text-highlighted sm:text-4xl">
            Notes from building.
          </h2>
        </header>
        <UButton
          to="/posts"
          color="neutral"
          variant="ghost"
          trailing-icon="i-lucide-arrow-right"
        >
          All writing
        </UButton>
      </div>

      <ol class="mt-12 border-t border-default">
        <li
          v-for="(post, index) in posts"
          :key="post.stem"
          class="border-b border-default"
        >
          <NuxtLink
            :to="`/${post.stem}`"
            class="group grid gap-4 py-7 sm:grid-cols-[3rem_minmax(0,1fr)_10rem_auto] sm:items-center sm:gap-6"
          >
            <span class="eyebrow">{{ String(index + 1).padStart(2, '0') }}</span>
            <span>
              <span class="block text-lg font-semibold tracking-[-0.025em] text-highlighted">{{ post.title }}</span>
              <span class="mt-1 block max-w-2xl text-sm leading-6 text-muted">{{ post.description }}</span>
            </span>
            <time
              v-if="post.publishedAt"
              class="text-sm text-dimmed"
            >{{ new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}</time>
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4 text-dimmed transition-transform group-hover:translate-x-1"
            />
          </NuxtLink>
        </li>
      </ol>
    </UContainer>
  </section>
</template>
