<script setup lang="ts">
const useCases = [
  {
    icon: 'i-lucide-inbox',
    title: 'Customer requests',
    description: 'Sort incoming requests, pull the right context, prepare a reply, and pass unusual cases to a person.'
  },
  {
    icon: 'i-lucide-files',
    title: 'Documents into structured work',
    description: 'Extract useful fields from PDFs and attachments, check them, and create the next task.'
  },
  {
    icon: 'i-lucide-calendar-check',
    title: 'Recurring reports',
    description: 'Collect information on a schedule, flag what is missing, and prepare the report for review.'
  }
]

const pilotSteps = [
  {
    icon: 'i-lucide-search',
    title: 'Review',
    description: 'Map the current process and choose one useful measure.'
  },
  {
    icon: 'i-lucide-workflow',
    title: 'Build',
    description: 'Connect the minimum systems and add approval points.'
  },
  {
    icon: 'i-lucide-circle-check',
    title: 'Test',
    description: 'Run real examples, then deploy, revise, or stop.'
  }
]

useSeoMeta({
  title: 'AI Workflow Implementation | Maxi García',
  description: 'Custom AI-assisted workflows for recurring requests, documents, reporting, and coordination, built around your existing tools and human review.',
  ogTitle: 'AI Workflow Implementation | Maxi García',
  ogDescription: 'Practical automation for the work between your existing tools.',
  ogImage: 'https://onmax.me/maxi-og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://onmax.me/maxi-og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://onmax.me/ai-workflows' }]
})
</script>

<template>
  <div class="pt-12 sm:pt-20">
    <header class="enter pb-6">
      <h1 class="text-sm font-medium text-highlighted">
        AI workflows
      </h1>
      <p class="mt-4 text-xl font-medium tracking-tight text-balance text-highlighted">
        I build the automations your team cannot buy off the shelf.
      </p>
      <p class="mt-3 text-[15px] leading-7 text-muted">
        Email, forms, documents, and recurring reports, connected to the tools you already use. Start with one workflow and keep people in charge of the decisions.
      </p>
      <div class="mt-6 flex items-center gap-5 text-sm">
        <UButton
          to="#workflow-review"
          color="neutral"
          class="transition-transform active:scale-[0.97]"
        >
          Review one workflow
        </UButton>
        <NuxtLink
          to="/work"
          class="link"
        >See selected work</NuxtLink>
      </div>
    </header>

    <section
      class="enter py-10"
      style="--i: 1"
    >
      <h2 class="mb-3 text-sm text-dimmed">
        Where to start
      </h2>
      <p class="text-[15px] leading-7 text-muted">
        Choose a recurring handoff where information arrives in one place and someone has to prepare it for the next.
      </p>
      <ul class="mt-4">
        <li
          v-for="item in useCases"
          :key="item.title"
          class="flex gap-3 py-2.5 text-sm"
        >
          <span class="flex size-6 shrink-0 items-center justify-center rounded-md border border-default bg-elevated">
            <UIcon
              :name="item.icon"
              class="size-3.5 text-highlighted"
            />
          </span>
          <span>
            <span class="block font-medium text-highlighted">{{ item.title }}</span>
            <span class="mt-0.5 block leading-6 text-muted">{{ item.description }}</span>
          </span>
        </li>
      </ul>
    </section>

    <section
      class="enter py-10"
      style="--i: 2"
    >
      <h2 class="mb-3 text-sm text-dimmed">
        One-workflow pilot
      </h2>
      <p class="text-[15px] leading-7 text-muted">
        <span class="text-highlighted">Build one useful thing before committing to more.</span> A small pilot gives us something real to judge. It works best when the task repeats, crosses tools, and has an owner who can review the result.
      </p>
      <ol class="mt-4">
        <li
          v-for="step in pilotSteps"
          :key="step.title"
          class="flex gap-3 py-2.5 text-sm"
        >
          <span class="flex size-6 shrink-0 items-center justify-center rounded-md border border-default bg-elevated">
            <UIcon
              :name="step.icon"
              class="size-3.5 text-highlighted"
            />
          </span>
          <span>
            <span class="block font-medium text-highlighted">{{ step.title }}</span>
            <span class="mt-0.5 block leading-6 text-muted">{{ step.description }}</span>
          </span>
        </li>
      </ol>
    </section>

    <section
      class="enter py-10"
      style="--i: 3"
    >
      <h2 class="mb-3 text-sm text-dimmed">
        Behind the work
      </h2>
      <p class="text-[15px] leading-7 text-muted">
        I created
        <a
          href="https://vitehub.dev"
          target="_blank"
          rel="noreferrer"
          class="link"
        >ViteHub</a>, an open-source runtime for agents and the server systems they need, with 5 host adapters. Before that: 250+ merged Nuxt PRs and 4 years shipping at Nimiq.
        <NuxtLink
          to="/work"
          class="link"
        >Selected work</NuxtLink>.
      </p>
    </section>

    <section
      id="workflow-review"
      class="enter py-10"
      style="--i: 4"
    >
      <h2 class="mb-3 text-sm text-dimmed">
        Review one workflow
      </h2>
      <p class="text-[15px] leading-7 text-muted">
        <span class="text-highlighted">What happens today?</span> Send the trigger, manual steps, and tools involved. I'll tell you whether it makes sense as a pilot. Prefer email?
        <a
          href="mailto:hello@onmax.me?subject=AI%20workflow%20review"
          class="link"
        >hello@onmax.me</a>
      </p>
      <WorkflowReviewForm class="mt-6" />
    </section>
  </div>
</template>
