<template>
  <section class="relative overflow-hidden border-b border-default">
    <div
      aria-hidden="true"
      class="site-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
    />

    <UContainer class="relative grid min-h-[calc(100svh-4rem)] items-end gap-16 py-16 lg:grid-cols-[minmax(0,1fr)_17rem] lg:py-24">
      <div class="page-enter max-w-4xl">
        <p class="eyebrow mb-8 flex items-center gap-3">
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
            <span class="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          Available for focused projects
        </p>

        <h1 class="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-highlighted sm:text-7xl lg:text-[5.75rem]">
          I build production
          <span class="display-serif font-normal italic tracking-[-0.035em]">Nuxt systems</span>
          and the tools behind them.
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          Hola, I’m Maxi García. I help teams untangle frontend architecture, ship difficult migrations, and turn rough product ideas into maintainable software.
        </p>

        <div class="mt-10 flex flex-wrap gap-3">
          <UButton
            to="#work"
            color="neutral"
            size="lg"
            trailing-icon="i-lucide-arrow-down"
          >
            See my work
          </UButton>
          <UButton
            to="/#contact"
            color="neutral"
            variant="outline"
            size="lg"
            trailing-icon="i-lucide-arrow-up-right"
          >
            Work with me
          </UButton>
        </div>
      </div>

      <figure class="page-enter page-enter-delay justify-self-start lg:justify-self-end">
        <div class="relative w-44 overflow-hidden rounded-2xl border border-default bg-elevated p-1 shadow-sm lg:w-56">
          <NuxtImg
            src="/images/hire/maxi-founder.jpg"
            alt="Maxi García"
            width="440"
            height="520"
            class="aspect-[4/4.7] w-full rounded-[calc(var(--ui-radius)*1.35)] object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
            preload
          />
        </div>
        <figcaption class="mt-4 flex items-start justify-between gap-6 text-sm">
          <span class="font-medium text-highlighted">Maxi García</span>
          <span class="text-right text-muted">Malmö, Sweden<br>หมีน้อย</span>
        </figcaption>
      </figure>

      <dl class="col-span-full grid border-t border-default sm:grid-cols-3">
        <div class="py-5 sm:pr-6">
          <dt class="eyebrow">
            Role
          </dt>
          <dd class="mt-2 text-sm text-highlighted">
            Senior Nuxt/Vue engineer
          </dd>
        </div>
        <div class="border-default py-5 sm:border-x sm:px-6">
          <dt class="eyebrow">
            Focus
          </dt>
          <dd class="mt-2 text-sm text-highlighted">
            Architecture, migrations, developer tools
          </dd>
        </div>
        <div class="py-5 sm:pl-6">
          <dt class="eyebrow">
            Approach
          </dt>
          <dd class="mt-2 text-sm text-highlighted">
            Small PRs, direct evidence, clean handoff
          </dd>
        </div>
      </dl>
    </UContainer>
  </section>
</template>
