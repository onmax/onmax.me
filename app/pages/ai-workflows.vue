<script setup lang="ts">
definePageMeta({
  colorMode: 'light'
})

const heroLinks = [
  {
    label: 'Review one workflow',
    to: '#workflow-review',
    color: 'neutral' as const,
    trailingIcon: 'i-lucide-arrow-down'
  },
  {
    label: 'See selected work',
    to: '/work',
    color: 'neutral' as const,
    variant: 'outline' as const,
    trailingIcon: 'i-lucide-arrow-right'
  }
]

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
  <div>
    <UPageHero
      headline="AI workflow implementation"
      title="I build the automations your team cannot buy off the shelf."
      description="Email, forms, documents, and recurring reports, connected to the tools you already use. Start with one workflow and keep people in charge of the decisions."
      orientation="horizontal"
      :links="heroLinks"
      :ui="{
        container: 'lg:grid-cols-[minmax(0,1fr)_22rem] lg:py-32',
        title: 'text-4xl sm:text-5xl lg:text-6xl font-semibold',
        description: 'max-w-2xl'
      }"
      class="border-b border-default"
    >
      <figure class="w-full max-w-sm sm:mx-auto lg:mx-0 lg:justify-self-end">
        <NuxtImg
          src="/images/hire/maxi-founder.jpg"
          alt="Maxi García"
          width="880"
          height="880"
          class="aspect-square w-full rounded-xl object-cover"
          preload
        />
        <figcaption class="mt-4 flex items-start justify-between gap-4 text-sm">
          <span class="font-medium text-highlighted">Maxi García</span>
          <span class="text-right text-muted">Malmö, Sweden<br>Copenhagen area</span>
        </figcaption>
      </figure>
    </UPageHero>

    <UPageSection
      headline="Useful starting points"
      title="A few practical places to start."
      description="Choose a recurring handoff where information arrives in one place and someone has to prepare it for the next."
      :features="useCases"
      class="border-b border-default"
      :ui="{
        headline: 'justify-start sm:justify-center',
        title: 'text-left sm:text-center font-semibold',
        description: 'text-left sm:text-center',
        body: 'mt-12 sm:mt-16'
      }"
    />

    <UPageSection
      headline="One-workflow pilot"
      title="Build one useful thing before committing to more."
      description="A small pilot gives us something real to judge. It works best when the task repeats, crosses tools, and has an owner who can review the result."
      orientation="horizontal"
      :features="pilotSteps"
      class="border-b border-default"
      :ui="{
        title: 'font-semibold',
        container: 'lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]'
      }"
    >
      <UPageCard
        title="Production engineering behind the work"
        description="I created ViteHub, an open-source runtime for agents and the server systems they need."
        variant="subtle"
        :ui="{
          container: 'p-6 sm:p-8',
          title: 'text-xl sm:text-2xl'
        }"
      >
        <template #leading>
          <div class="flex size-11 items-center justify-center rounded-lg bg-default ring ring-default">
            <img
              src="/logos/vitehub.svg"
              alt=""
              width="24"
              height="24"
              class="size-6 object-contain dark:invert"
            >
          </div>
        </template>

        <dl class="mt-8 grid gap-6 border-t border-default pt-6 sm:grid-cols-3">
          <div>
            <dt class="text-sm text-muted">
              Nuxt
            </dt>
            <dd class="mt-1 font-semibold text-highlighted">
              250+ merged PRs
            </dd>
          </div>
          <div>
            <dt class="text-sm text-muted">
              Nimiq
            </dt>
            <dd class="mt-1 font-semibold text-highlighted">
              4 years shipping
            </dd>
          </div>
          <div>
            <dt class="text-sm text-muted">
              ViteHub
            </dt>
            <dd class="mt-1 font-semibold text-highlighted">
              5 host adapters
            </dd>
          </div>
        </dl>

        <div class="mt-8 flex flex-wrap gap-3">
          <UButton
            to="https://vitehub.dev"
            target="_blank"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-arrow-up-right"
          >
            Explore ViteHub
          </UButton>
          <UButton
            to="/work"
            color="neutral"
            variant="ghost"
            trailing-icon="i-lucide-arrow-right"
          >
            Selected work
          </UButton>
        </div>
      </UPageCard>
    </UPageSection>

    <div class="py-16 sm:py-24">
      <UPageCTA
        id="workflow-review"
        title="What happens today?"
        description="Send the trigger, manual steps, and tools involved. I'll tell you whether it makes sense as a pilot."
        orientation="horizontal"
        variant="subtle"
        class="mx-4 sm:mx-6 lg:mx-auto lg:max-w-(--ui-container)"
        :ui="{
          container: 'lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start',
          title: 'font-semibold'
        }"
      >
        <div>
          <WorkflowReviewForm />
          <p class="mt-4 text-xs text-muted">
            Prefer email?
            <a
              href="mailto:hello@onmax.me?subject=AI%20workflow%20review"
              class="font-semibold text-highlighted underline decoration-muted underline-offset-4 hover:decoration-highlighted"
            >hello@onmax.me</a>
          </p>
        </div>
      </UPageCTA>
    </div>
  </div>
</template>
