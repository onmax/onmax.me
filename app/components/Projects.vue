<script setup lang="ts">
import { featuredProjects } from '~/lib/projects'
</script>

<template>
  <section
    id="work"
    class="border-b border-default py-24 sm:py-32"
  >
    <UContainer>
      <div class="grid gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-20">
        <header>
          <p class="eyebrow">
            Selected work
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-[-0.045em] text-highlighted sm:text-4xl">
            Useful things, shipped in public.
          </h2>
          <p class="mt-5 leading-7 text-muted">
            Open-source tools, Nuxt ecosystem work, and product experiments shaped by real constraints.
          </p>
        </header>

        <div>
          <ul class="border-t border-default">
            <li
              v-for="project in featuredProjects"
              :key="project.title"
              class="border-b border-default"
            >
              <a
                :href="project.href"
                target="_blank"
                rel="noreferrer"
                class="group grid gap-3 py-6 transition-colors hover:text-highlighted sm:grid-cols-[12rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8"
              >
                <span class="flex items-center gap-3 font-semibold tracking-[-0.02em] text-highlighted">
                  <span class="flex size-8 shrink-0 items-center justify-center rounded-lg border border-default bg-elevated">
                    <img
                      v-if="project.logo"
                      :src="project.logo"
                      :alt="`${project.title} logo`"
                      class="size-4 object-contain"
                      :class="{ 'dark:invert': project.title === 'ViteHub' }"
                    >
                    <UIcon
                      v-else
                      :name="project.icon"
                      class="size-4"
                    />
                  </span>
                  {{ project.title }}
                </span>
                <span class="text-sm leading-6 text-muted">{{ project.description }}</span>
                <span class="flex items-center gap-3 text-xs text-dimmed">
                  <span>{{ project.detail }}</span>
                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </li>
          </ul>

          <UButton
            to="/work"
            color="neutral"
            variant="link"
            trailing-icon="i-lucide-arrow-right"
            class="mt-6 px-0"
          >
            Explore the case studies
          </UButton>

          <div class="mt-10 flex flex-col justify-between gap-6 rounded-xl border border-default bg-elevated p-6 sm:flex-row sm:items-center">
            <div>
              <p class="text-lg font-semibold tracking-[-0.025em] text-highlighted">
                680+ merged pull requests
              </p>
              <p class="mt-1 text-sm text-muted">
                Browse the contribution record across 90+ repositories.
              </p>
            </div>
            <UButton
              to="https://prs.onmax.me"
              target="_blank"
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-arrow-up-right"
            >
              View contributions
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
