<script setup lang="ts">
import { projectGroups } from '~/lib/projects'

const caseStudies = [
  {
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
    icon: 'i-simple-icons-betterauth',
    logo: null,
    image: null,
    imageAlt: 'Better Auth logo',
    imagePosition: '50% 50%',
    title: 'Better Auth for Nuxt',
    summary: 'Making Better Auth feel native inside Nuxt applications.',
    role: 'Creator and maintainer',
    highlight: 'I created the public Nuxt Modules integration, including SSR-safe sessions, route protection, generated config, NuxtHub schemas, and compatibility coverage.',
    href: 'https://better-auth.nuxt.dev',
    linkLabel: 'Read the module docs'
  },
  {
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
  <div class="pt-12 sm:pt-20">
    <header class="enter">
      <h1 class="text-sm font-medium text-highlighted">
        Work
      </h1>
      <p class="mt-4 text-[15px] leading-7 text-muted">
        Inventory planning, crypto payments, framework infrastructure, authentication, AI tooling, and a native macOS app. Most of it ships in public, and most of it runs on Nuxt.
      </p>
    </header>

    <article
      v-for="(study, index) in caseStudies"
      :key="study.title"
      class="enter py-10"
      :style="{ '--i': index + 1 }"
    >
      <div class="relative aspect-[16/10] overflow-hidden rounded-xl border border-default bg-muted">
        <div
          v-if="study.title === 'Better Auth for Nuxt'"
          class="flex size-full items-center justify-center"
        >
          <UIcon
            name="i-simple-icons-betterauth"
            class="size-16 text-highlighted"
          />
        </div>
        <img
          v-else
          :src="study.image"
          :alt="study.imageAlt"
          :style="{ objectPosition: study.imagePosition }"
          class="size-full"
          :class="study.title === 'Nuxt ecosystem' ? 'object-contain mix-blend-multiply dark:mix-blend-normal' : study.title === 'Cactus' ? 'object-contain p-6' : 'object-cover'"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="mt-5 flex items-center gap-3 text-sm">
        <span class="flex size-6 shrink-0 items-center justify-center rounded-md border border-default bg-elevated">
          <img
            v-if="study.logo"
            :src="study.logo"
            alt=""
            class="size-3.5 object-contain"
            :class="{ 'dark:invert': study.title === 'ViteHub' }"
          >
          <UIcon
            v-else
            :name="study.icon"
            class="size-3.5 text-highlighted"
          />
        </span>
        <h2 class="font-medium text-highlighted">
          {{ study.title }}
        </h2>
        <span class="ml-auto text-dimmed">{{ study.role }}</span>
      </div>
      <p class="mt-3 text-[15px] leading-7 text-muted">
        {{ study.summary }} {{ study.highlight }}
      </p>
      <a
        :href="study.href"
        target="_blank"
        rel="noreferrer"
        class="link mt-3 inline-block text-sm"
      >{{ study.linkLabel }}</a>
    </article>

    <section
      v-for="group in projectGroups"
      :key="group.title"
      class="py-8"
    >
      <h2 class="mb-3 text-sm text-dimmed">
        {{ group.title }}
      </h2>
      <ul>
        <li
          v-for="project in group.projects"
          :key="project.title"
        >
          <a
            :href="project.href"
            target="_blank"
            rel="noreferrer"
            class="row block py-2.5 text-sm"
          >
            <span class="font-medium text-highlighted">{{ project.title }}</span>
            <span class="ml-2 text-muted">{{ project.description }}</span>
          </a>
        </li>
      </ul>
    </section>

    <p class="py-10 text-[15px] leading-7 text-muted">
      Have something you want built?
      <NuxtLink
        to="/#contact"
        class="link"
      >Get in touch</NuxtLink>.
    </p>
  </div>
</template>
