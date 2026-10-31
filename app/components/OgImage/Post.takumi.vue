<script setup lang="ts">
// A post's OG image. A post with a `cover` shows it under the title; every other post gets the same
// author card as maxi-og-image.png, with its own title and description.
const { title = 'Writing', description, publishedAt, cover } = defineProps<{
  title?: string
  description?: string
  publishedAt?: string
  cover?: string
}>()

const date = publishedAt
  ? new Date(publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
  : undefined
</script>

<template>
  <div
    v-if="cover"
    class="flex flex-col w-full h-full bg-white"
    style="font-family: Geist; padding-top: 72px"
  >
    <div
      class="flex items-start justify-between"
      style="padding: 0 48px; gap: 48px"
    >
      <h1
        class="m-0"
        style="font-size: 64px; line-height: 1.1; font-weight: 600; letter-spacing: -0.025em; color: #171717; text-wrap: balance"
      >
        {{ title }}
      </h1>
      <div
        class="flex items-center shrink-0"
        style="gap: 14px; margin-top: 12px"
      >
        <img
          src="/me.webp"
          width="44"
          height="44"
          style="width: 44px; height: 44px; border-radius: 9999px; object-fit: cover; object-position: center 20%"
        >
        <span style="font-size: 26px; color: #737373">onmax.me</span>
      </div>
    </div>
    <!-- The cover carries 24px of transparent margin for its shadows, so it starts 24px left of the title -->
    <img
      :src="cover"
      width="1152"
      style="width: 1152px; margin: 48px 24px 0"
    >
  </div>

  <div
    v-else
    class="flex flex-col justify-between w-full h-full bg-white"
    style="font-family: Geist; padding: 88px 96px 80px"
  >
    <div
      class="flex items-center"
      style="gap: 20px"
    >
      <img
        src="/me.webp"
        width="76"
        height="76"
        style="width: 76px; height: 76px; border-radius: 9999px; object-fit: cover; object-position: center 20%"
      >
      <div class="flex flex-col">
        <span style="font-size: 26px; font-weight: 500; color: #171717">Maxi García</span>
        <span style="font-size: 24px; color: #737373">{{ date ?? 'Writing' }}</span>
      </div>
    </div>
    <div class="flex flex-col">
      <h1
        class="m-0"
        style="font-size: 64px; line-height: 1.1; font-weight: 600; letter-spacing: -0.025em; color: #171717; text-wrap: balance"
      >
        {{ title }}
      </h1>
      <p
        v-if="description"
        class="m-0"
        style="margin-top: 20px; font-size: 30px; line-height: 1.35; color: #a3a3a3; line-clamp: 2; text-overflow: ellipsis; overflow: hidden"
      >
        {{ description }}
      </p>
    </div>
    <span style="font-size: 24px; color: #a3a3a3">onmax.me</span>
  </div>
</template>
