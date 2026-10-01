<script setup lang="ts">
const year = new Date().getFullYear()

const links = [
  { label: 'GitHub', href: 'https://github.com/onmax' },
  { label: 'X', href: 'https://x.com/_onmax' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maximo-garcia-martinez' },
  { label: 'Contributions', href: 'https://prs.onmax.me' },
  { label: 'CV', href: '/maxi-garcia_cv.pdf' }
]
</script>

<template>
  <footer class="mt-16 flex flex-col gap-3 border-t border-default py-8 text-sm text-dimmed sm:flex-row sm:items-center sm:justify-between">
    <p>© {{ year }} Maxi García</p>
    <nav
      aria-label="Footer navigation"
      class="flex flex-wrap gap-x-5 gap-y-2"
    >
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noreferrer"
        class="transition-colors hover:text-highlighted"
      >{{ link.label }}</a>
    </nav>
  </footer>
</template>
