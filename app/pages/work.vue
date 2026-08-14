<script setup lang="ts">
import { projectGroups } from '~/lib/projects'

const caseStudies = [
  {
    index: '01',
    category: 'SaaS · Inventory planning',
    icon: 'i-lucide-chart-spline',
    logo: '/logos/quiver.svg',
    image: '/images/work/quiver.webp',
    imageAlt: 'Illustration of a forecast curve moving through inventory',
    imagePosition: '50% 50%',
    title: 'Quiver',
    summary: 'A planning platform that brings forecasting, purchasing, and inventory risk into one operating surface beyond spreadsheets.',
    role: 'Software engineer',
    highlight: 'I build its Nuxt product across forecasting, purchasing, inventory health, alerts, search, and AI-assisted planning.',
    href: 'https://www.quiver.dk',
    linkLabel: 'Visit Quiver'
  },
  {
    index: '02',
    category: 'Open source · Framework',
    icon: 'i-simple-icons-nuxtdotjs',
    logo: null,
    image: 'https://ipx.nuxt.com/_/assets/landing/deploy.svg',
    imageAlt: 'Nuxt deployment network connecting hosting providers around the globe',
    imagePosition: '50% 50%',
    title: 'Nuxt ecosystem',
    summary: 'Improving the framework and tools that production Nuxt teams depend on.',
    role: 'Ecosystem contributor',
    highlight: '250+ merged pull requests across Nuxt core, UI, Content, DevTools, CLI, and community modules.',
    href: 'https://nuxters.nuxt.com/onmax',
    linkLabel: 'View Nuxt contributions'
  },
  {
    index: '03',
    category: 'Open source · Authentication',
    icon: 'i-simple-icons-betterauth',
    logo: null,
    image: 'https://better-auth.com/og.png',
    imageAlt: 'Better Auth brand artwork',
    imagePosition: '38% 50%',
    title: 'Better Auth for Nuxt',
    summary: 'Making Better Auth feel native inside Nuxt applications.',
    role: 'Creator and maintainer',
    highlight: 'I created the public Nuxt Modules integration, including SSR-safe sessions, route protection, generated config, NuxtHub schemas, and compatibility coverage.',
    href: 'https://better-auth.nuxt.dev',
    linkLabel: 'Read the module docs'
  },
  {
    index: '04',
    category: 'Developer infrastructure · AI',
    icon: 'i-simple-icons-vite',
    logo: '/logos/vitehub.svg',
    image: 'https://vitehub.dev/images/tutorials/agent-layers-flat.png',
    imageAlt: 'Illustration of ViteHub agent primitives connected to application services',
    imagePosition: '50% 50%',
    title: 'ViteHub',
    summary: 'A Vite-native runtime for agents and the server primitives beneath them.',
    role: 'Creator and maintainer',
    highlight: 'I created the package architecture, capability model, and host adapters behind one API for Cloudflare, Vercel, Netlify, Deno, and Node.',
    href: 'https://vitehub.dev',
    linkLabel: 'Explore ViteHub'
  },
  {
    index: '05',
    category: 'Product engineering · Web3',
    icon: 'i-lucide-orbit',
    logo: '/logos/nimiq.svg',
    image: '/images/work/nimiq-generated.webp',
    imageAlt: 'Illustration of connected wallet, payment, map, and developer tools in the Nimiq visual language',
    imagePosition: '50% 50%',
    title: 'Nimiq',
    summary: 'The interfaces and shared systems behind a browser-first crypto payment ecosystem.',
    role: 'Frontend engineer',
    highlight: 'Four years and 149 merged pull requests across Developer Center, Crypto Map, validators tooling, shared UI, icons, and frontend architecture.',
    href: 'https://nimiq.com',
    linkLabel: 'Visit Nimiq'
  },
  {
    index: '06',
    category: 'Independent product · macOS',
    icon: 'i-lucide-focus',
    logo: '/logos/cactus.svg',
    image: 'https://usecactus.app/_nuxt/cactus-window.BsaOGUmk.webp',
    imageAlt: 'Cactus protected schedule interface',
    imagePosition: '50% 50%',
    title: 'Cactus',
    summary: 'A recurring website blocker for macOS, designed to make a focus decision hold automatically.',
    role: 'Founder and product engineer',
    highlight: 'I designed and shipped the Swift app, privileged helper, scheduling, payments, licensing, updates, and Nuxt storefront.',
    href: 'https://usecactus.app',
    linkLabel: 'View Cactus'
  }
] as const

useSeoMeta({
  title: 'Selected Work — Maxi García',
  description: 'Case studies from Maxi García across Nuxt, open source, developer infrastructure, and independent products.',
  ogTitle: 'Selected Work — Maxi García',
  ogDescription: 'Nuxt systems, open-source infrastructure, and products built for real-world constraints.',
  ogImage: 'https://onmax.me/maxi-og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://onmax.me/maxi-og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://onmax.me/work' }]
})
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-default">
      <div
        aria-hidden="true"
        class="site-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />
      <UContainer class="relative py-20 sm:py-28">
        <div class="page-enter max-w-5xl">
          <h1 class="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-highlighted sm:text-7xl lg:text-[5.5rem]">
            I build Nuxt products, frontend systems, and
            <span class="display-serif font-normal italic tracking-[-0.035em]">open-source tools.</span>
          </h1>
          <div class="mt-10 max-w-4xl">
            <p class="max-w-2xl text-xl leading-9 text-toned">
              The work ranges from inventory planning and crypto payments to framework infrastructure, authentication, AI tooling, and native macOS software.
            </p>
            <dl class="mt-10 grid max-w-3xl gap-6 sm:grid-cols-3 sm:gap-10">
              <div>
                <dt class="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Nuxt
                </dt>
                <dd class="mt-2 text-lg font-medium text-highlighted">
                  Ecosystem Team member
                </dd>
              </div>
              <div>
                <dt class="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Open source
                </dt>
                <dd class="mt-2 text-lg font-medium text-highlighted">
                  250+ merged Nuxt PRs
                </dd>
              </div>
              <div>
                <dt class="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Production
                </dt>
                <dd class="mt-2 text-lg font-medium text-highlighted">
                  4 years building at Nimiq
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="border-b border-default">
      <UContainer>
        <article
          v-for="study in caseStudies"
          :key="study.title"
          class="grid gap-10 border-b border-default py-16 last:border-b-0 sm:py-20 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16"
        >
          <div>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p class="eyebrow">
                {{ study.index }} / {{ study.category }}
              </p>
              <span class="hidden h-px w-8 bg-default sm:block" />
              <p class="text-sm font-medium text-toned">
                {{ study.role }}
              </p>
            </div>
            <div class="flex items-center gap-4">
              <span class="mt-6 flex size-12 shrink-0 items-center justify-center rounded-xl border border-default bg-elevated">
                <img
                  v-if="study.logo"
                  :src="study.logo"
                  :alt="`${study.title} logo`"
                  class="size-6 object-contain"
                  :class="{ 'dark:invert': study.title === 'ViteHub' }"
                >
                <UIcon
                  v-else
                  :name="study.icon"
                  class="size-6"
                />
              </span>
              <h2 class="mt-6 text-4xl font-semibold tracking-[-0.05em] text-highlighted sm:text-6xl">
                {{ study.title }}
              </h2>
            </div>
            <p class="mt-6 max-w-3xl text-xl leading-8 text-muted sm:text-2xl sm:leading-9">
              {{ study.summary }}
            </p>

            <p class="mt-6 max-w-2xl text-sm leading-6 text-toned">
              {{ study.highlight }}
            </p>

            <UButton
              :to="study.href"
              target="_blank"
              color="neutral"
              variant="link"
              trailing-icon="i-lucide-arrow-up-right"
              class="mt-5 px-0"
            >
              {{ study.linkLabel }}
            </UButton>
          </div>

          <div
            class="relative order-first aspect-[16/10] overflow-hidden lg:aspect-[4/5]"
          >
            <div
              v-if="study.title === 'Better Auth for Nuxt'"
              role="img"
              aria-label="Better Auth three-dimensional logo"
              class="group flex size-full items-center justify-center"
            >
              <div class="flex w-full max-w-60 justify-center">
                <img
                  src="https://better-auth.com/left-3d-logo.svg"
                  alt=""
                  class="relative z-10 h-auto max-h-48 invert transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:-rotate-5 motion-reduce:transition-none motion-reduce:group-hover:transform-none dark:invert-0"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                >
                <img
                  src="https://better-auth.com/right-3d-logo.svg"
                  alt=""
                  class="-ml-28 -mt-3 h-auto max-h-48 invert transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:rotate-5 motion-reduce:transition-none motion-reduce:group-hover:transform-none dark:invert-0"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                >
              </div>
            </div>
            <img
              v-else
              :src="study.image"
              :alt="study.imageAlt"
              :style="{ objectPosition: study.imagePosition }"
              class="size-full"
              :class="study.title === 'Nuxt ecosystem' ? 'object-contain mix-blend-multiply dark:mix-blend-normal' : study.title === 'Cactus' ? 'object-contain' : 'object-cover'"
              loading="lazy"
              decoding="async"
            >
          </div>
        </article>
      </UContainer>
    </section>

    <section class="border-b border-default py-24 sm:py-32">
      <UContainer>
        <header>
          <p class="eyebrow">
            Project index
          </p>
          <h2 class="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-highlighted sm:text-4xl">
            More modules, libraries, and tools.
          </h2>
          <p class="mt-5 max-w-2xl leading-7 text-muted">
            The smaller projects still matter: they show the recurring problems I choose to solve and the ecosystems where I keep contributing.
          </p>
        </header>

        <div class="mt-14 grid border-l border-t border-default md:grid-cols-3">
          <section
            v-for="(group, groupIndex) in projectGroups"
            :key="group.title"
            class="border-b border-r border-default p-6 sm:p-8"
          >
            <div class="flex items-center justify-between gap-4">
              <span class="flex size-10 items-center justify-center rounded-lg border border-default bg-elevated">
                <UIcon
                  :name="group.icon"
                  class="size-5"
                />
              </span>
              <span class="eyebrow">0{{ groupIndex + 1 }}</span>
            </div>
            <h3 class="mt-7 text-xl font-semibold tracking-[-0.03em] text-highlighted">
              {{ group.title }}
            </h3>
            <ul class="mt-6 border-t border-default">
              <li
                v-for="project in group.projects"
                :key="project.title"
                class="border-b border-default last:border-b-0"
              >
                <a
                  :href="project.href"
                  target="_blank"
                  rel="noreferrer"
                  class="group block py-5"
                >
                  <span class="flex items-center justify-between gap-4 font-medium text-highlighted">
                    {{ project.title }}
                    <UIcon
                      name="i-lucide-arrow-up-right"
                      class="size-4 shrink-0 text-dimmed transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  <span class="mt-2 block text-sm leading-6 text-muted">{{ project.description }}</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </UContainer>
    </section>

    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="relative overflow-hidden rounded-2xl border border-default bg-inverted px-6 py-14 text-inverted sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            class="site-grid absolute inset-0 opacity-20 [mask-image:linear-gradient(to_right,transparent,black)]"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 440 320"
            class="pointer-events-none absolute -right-16 top-1/2 hidden h-[125%] -translate-y-1/2 text-inverted/15 sm:block"
          >
            <g
              fill="none"
              stroke="currentColor"
            >
              <circle
                cx="268"
                cy="160"
                r="122"
              />
              <circle
                cx="268"
                cy="160"
                r="78"
              />
              <path d="M36 242 146 126l122 34 116-98" />
              <path d="m90 54 56 72-38 104 160-70 70 102" />
            </g>
            <g fill="currentColor">
              <circle
                cx="36"
                cy="242"
                r="5"
              />
              <circle
                cx="90"
                cy="54"
                r="5"
              />
              <circle
                cx="146"
                cy="126"
                r="7"
              />
              <circle
                cx="108"
                cy="230"
                r="5"
              />
              <circle
                cx="268"
                cy="160"
                r="9"
              />
              <circle
                cx="338"
                cy="262"
                r="5"
              />
              <circle
                cx="384"
                cy="62"
                r="6"
              />
            </g>
          </svg>
          <div class="relative max-w-3xl sm:pr-28">
            <h2 class="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
              Need senior Nuxt ownership without a long hiring cycle?
            </h2>
            <UButton
              to="/#contact"
              color="neutral"
              size="lg"
              trailing-icon="i-lucide-arrow-right"
              class="mt-9 bg-default text-default hover:bg-muted"
            >
              See how I can help
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
