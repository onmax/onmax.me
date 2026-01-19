<script setup lang="ts">
const story = [
  { icon: 'i-carbon-idea', text: 'Started building products to solve my own problems' },
  { icon: 'i-carbon-code', text: 'Discovered Nuxt & open source—loved sharing solutions' },
  { icon: 'i-carbon-bot', text: 'AI unlocked understanding of blocking details' },
  { icon: 'i-carbon-rocket', text: 'Now: feels unstoppable, building more than ever' }
]
</script>

<template>
  <section
    id="about"
    class="py-24"
  >
    <div class="flex relative">
      <div class="mr-4 whitespace-nowrap py-4">
        <h2 class="sticky top-[calc(50%-12px)] font-bold w-32 text-right text-lg">
          About
        </h2>
      </div>
      <div class="flex-1 ml-8 flex flex-col md:flex-row gap-12">
        <div class="flex-1 space-y-6">
          <p class="text-lg">
            I'm a fullstack developer driven by <span class="font-semibold">curiosity</span>. What started as solving my own problems evolved into a passion for building products that help others.
          </p>
          <ul class="space-y-4">
            <li
              v-for="item in story"
              :key="item.text"
              class="flex items-start gap-3"
            >
              <UIcon
                :name="item.icon"
                class="size-5 mt-0.5 opacity-60 shrink-0"
              />
              <span class="opacity-80">{{ item.text }}</span>
            </li>
          </ul>
          <p class="text-sm opacity-60 italic">
            Philosophy: learning through building
          </p>
        </div>
        <div class="shrink-0">
          <img
            src="/me.webp"
            alt="Maxi"
            class="size-48 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
          >
        </div>
      </div>
    </div>
  </section>
</template>
