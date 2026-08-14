<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-default py-8">
    <UContainer class="flex flex-col justify-between gap-6 text-sm sm:flex-row sm:items-center">
      <p class="text-muted">
        © {{ year }} Maxi García. Built with Nuxt.
      </p>
      <nav
        aria-label="Footer navigation"
        class="flex flex-wrap gap-x-6 gap-y-3"
      >
        <a
          href="https://github.com/onmax"
          target="_blank"
          rel="noreferrer"
          class="text-muted transition-colors hover:text-highlighted"
        >GitHub</a>
        <a
          href="https://prs.onmax.me"
          target="_blank"
          rel="noreferrer"
          class="text-muted transition-colors hover:text-highlighted"
        >Contributions</a>
        <a
          href="/maxi-garcia_cv.pdf"
          target="_blank"
          class="text-muted transition-colors hover:text-highlighted"
        >CV</a>
        <NuxtLink
          to="/#contact"
          class="font-semibold text-highlighted"
        >Hire me</NuxtLink>
      </nav>
    </UContainer>
  </footer>
</template>
