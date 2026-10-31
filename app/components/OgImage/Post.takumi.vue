<script setup lang="ts">
// A post's OG image. A post with a `cover` shows it on a raised sheet under the title; every other post gets
// an author card with its own title, description and date. Both sit on the same tinted canvas.
const { title = 'Writing', description, publishedAt, cover } = defineProps<{
  title?: string
  description?: string
  publishedAt?: string
  cover?: string
}>()

const date = publishedAt
  ? new Date(publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
  : undefined

const canvas = 'oklch(0.965 0.002 160)'
const sheet = '0 0 0 1px rgb(0 0 0 / 0.06), 0 1px 3px rgb(0 0 0 / 0.06), 0 12px 32px -8px rgb(0 0 0 / 0.12), 0 32px 64px -24px rgb(0 0 0 / 0.12)'
const avatar = 'border-radius: 9999px; object-fit: cover; object-position: center 20%; outline: 1px solid rgb(0 0 0 / 0.1); outline-offset: -1px'
</script>

<template>
  <div
    v-if="cover"
    class="flex flex-col w-full h-full"
    :style="{ fontFamily: 'Geist', background: canvas }"
  >
    <div
      class="flex items-start justify-between"
      style="padding: 52px 64px 0; gap: 48px"
    >
      <h1
        class="m-0"
        style="font-size: 64px; line-height: 1.1; font-weight: 600; letter-spacing: -0.03em; color: #171717; text-wrap: balance"
      >
        {{ title }}
      </h1>
      <div
        class="flex items-center shrink-0"
        style="gap: 14px; margin-top: 14px"
      >
        <img
          src="/me.webp"
          width="44"
          height="44"
          :style="`width: 44px; height: 44px; ${avatar}`"
        >
        <span style="font-size: 26px; color: #737373">onmax.me</span>
      </div>
    </div>
    <!-- The cover carries 24px of transparent margin for its own shadows, which doubles as the sheet's side padding -->
    <div
      class="flex"
      :style="{ margin: '32px 40px 0', padding: '12px 0 0', background: '#fff', borderRadius: '24px', boxShadow: sheet }"
    >
      <img
        :src="cover"
        width="1120"
        style="width: 1120px"
      >
    </div>
  </div>

  <div
    v-else
    class="flex w-full h-full"
    :style="{ fontFamily: 'Geist', background: canvas, padding: '40px' }"
  >
    <div
      class="flex flex-col justify-between w-full h-full"
      :style="{ padding: '48px 56px 44px', background: '#fff', borderRadius: '24px', boxShadow: sheet }"
    >
      <div
        class="flex items-center"
        style="gap: 20px"
      >
        <img
          src="/me.webp"
          width="72"
          height="72"
          :style="`width: 72px; height: 72px; ${avatar}`"
        >
        <div class="flex flex-col">
          <span style="font-size: 26px; font-weight: 500; color: #171717">Maxi García</span>
          <span style="font-size: 24px; color: #737373">{{ date ?? 'Writing' }}</span>
        </div>
      </div>
      <div class="flex flex-col">
        <h1
          class="m-0"
          style="font-size: 64px; line-height: 1.1; font-weight: 600; letter-spacing: -0.03em; color: #171717; text-wrap: balance"
        >
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="m-0"
          style="margin-top: 20px; font-size: 30px; line-height: 1.35; color: #8a8a8a; line-clamp: 2; text-overflow: ellipsis; overflow: hidden"
        >
          {{ description }}
        </p>
      </div>
      <span style="font-size: 24px; color: #a3a3a3">onmax.me</span>
    </div>
  </div>
</template>
