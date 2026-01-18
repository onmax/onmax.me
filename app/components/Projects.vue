<script setup lang="ts">
const { data: repos } = await useFetch('/api/github-repos')

const sections = computed(() => {
  if (!repos.value) return []
  return [
    { title: 'Current Focus', items: repos.value.current },
    { title: 'Recent', items: repos.value.recent },
    { title: 'Archive', items: repos.value.archive.slice(0, 12) }
  ].filter(s => s.items.length > 0)
})

function observeProjects() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      const icon = entry.target.querySelector('[data-icon]')
      icon?.classList.toggle('opacity-50', !entry.isIntersecting)
      icon?.classList.toggle('saturate-0', !entry.isIntersecting)
    }),
    { rootMargin: '-48% 0px -48% 0px' }
  )
  document.querySelectorAll('[data-project]').forEach(el => observer.observe(el))
}

onMounted(observeProjects)
</script>

<template>
  <div class="flex relative">
    <div class="mr-4 whitespace-nowrap py-4">
      <h2 class="sticky top-[calc(50%-12px)] font-bold w-32 text-right text-lg">My projects</h2>
    </div>
    <ul id="projects" class="mr-8 pt-32 w-full">
      <li v-for="section in sections" :key="section.title" class="min-h-[10rem] flex gap-x-12 py-12 relative">
        <h3 class="sticky top-[calc(50%-12px)] h-max w-40 whitespace-nowrap text-lg">{{ section.title }}</h3>
        <ul class="sticky top-[calc(50%-12px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8 flex-1 h-max">
          <li v-for="repo in section.items" :key="repo.name" data-project class="group -mt-1.5">
            <a :href="repo.html_url" target="_blank" class="rounded-lg group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 duration-200 transition-colors relative flex items-center px-2 py-1.5" :title="repo.name">
              <div class="pt-1 pr-5">
                <UIcon data-icon name="i-carbon-logo-github" class="size-8 opacity-50 saturate-0 group-hover:opacity-100 group-hover:saturate-100 transition-all duration-300 group-hover:delay-100" />
              </div>
              <div class="flex-auto">
                <h4 class="opacity-80 group-hover:opacity-90 transition-opacity">{{ repo.name }}</h4>
                <p class="text-sm opacity-60 group-hover:opacity-70 transition-opacity font-normal line-clamp-2">{{ repo.description || 'No description' }}</p>
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
