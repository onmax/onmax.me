<script setup lang="ts">
import { featuredProjects } from '~/lib/projects'
</script>

<template>
  <section
    id="work"
    class="enter py-10"
    style="--i: 2"
  >
    <h2 class="mb-3 text-sm text-dimmed">
      Work
    </h2>

    <ul>
      <li
        v-for="project in featuredProjects"
        :key="project.title"
      >
        <a
          :href="project.href"
          target="_blank"
          rel="noreferrer"
          class="row flex items-center gap-3 py-2.5 text-sm"
        >
          <span class="flex size-6 shrink-0 items-center justify-center rounded-md border border-default bg-elevated">
            <img
              v-if="project.logo"
              :src="project.logo"
              alt=""
              class="size-3.5 object-contain"
              :class="{ 'dark:invert': project.title === 'ViteHub' }"
            >
            <UIcon
              v-else
              :name="project.icon"
              class="size-3.5 text-highlighted"
            />
          </span>
          <span class="font-medium text-highlighted">{{ project.title }}</span>
          <span class="hidden truncate text-muted sm:inline">{{ project.description }}</span>
          <span class="ml-auto shrink-0 text-dimmed">{{ project.detail }}</span>
        </a>
      </li>
    </ul>

    <p class="mt-5 text-sm text-muted">
      <NuxtLink
        to="/work"
        class="link"
      >Read the case studies</NuxtLink>
      or browse
      <a
        href="https://prs.onmax.me"
        target="_blank"
        rel="noreferrer"
        class="link"
      >680+ merged pull requests</a>
      across 90+ repositories.
    </p>
  </section>
</template>
