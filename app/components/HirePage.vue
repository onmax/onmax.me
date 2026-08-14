<script setup lang="ts">
import {
  ctas,
  faq,
  finalCta,
  fit,
  healthCheck,
  hero,
  howIWork,
  painPoints,
  proof,
  proofNumbers,
  testimonial,
  trustBar
} from '~/lib/hire'

const selectedProof = proof.items.slice(0, 4)
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-default">
      <div
        aria-hidden="true"
        class="site-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />

      <UContainer class="relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-center lg:gap-20">
        <div class="page-enter">
          <p class="eyebrow flex items-center gap-3">
            <span class="size-2 rounded-full bg-success" />
            Nuxt Ecosystem Team member
          </p>
          <h1 class="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-highlighted sm:text-7xl lg:text-[5.5rem]">
            Senior Nuxt,
            <span class="display-serif font-normal italic tracking-[-0.035em]">on demand.</span>
          </h1>
          <p class="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {{ hero.subhead }}
          </p>
          <div class="mt-9 flex flex-wrap gap-3">
            <UButton
              :to="healthCheck.ctaHref"
              color="neutral"
              size="lg"
              trailing-icon="i-lucide-arrow-right"
            >
              Request the €990 Health Check
            </UButton>
            <UButton
              :to="ctas.calUrl"
              target="_blank"
              color="neutral"
              variant="outline"
              size="lg"
              trailing-icon="i-lucide-arrow-up-right"
            >
              Book a 25-min call
            </UButton>
          </div>
          <p class="mt-5 text-sm text-dimmed">
            {{ hero.note }} Based in Sweden, working remotely.
          </p>
        </div>

        <aside class="page-enter page-enter-delay rounded-2xl border border-default bg-elevated p-6 shadow-sm sm:p-8">
          <div class="flex items-start justify-between gap-6">
            <div>
              <p class="eyebrow">
                Start here
              </p>
              <h2 class="mt-3 text-2xl font-semibold tracking-[-0.035em] text-highlighted">
                {{ healthCheck.title }}
              </h2>
            </div>
            <p class="text-xl font-semibold tabular-nums text-highlighted">
              {{ healthCheck.priceLabel }}
            </p>
          </div>
          <p class="mt-5 text-sm leading-6 text-muted">
            {{ healthCheck.bestFor }}
          </p>
          <ul class="mt-6 space-y-3 border-t border-default pt-6">
            <li
              v-for="deliverable in healthCheck.deliverables"
              :key="deliverable"
              class="flex gap-3 text-sm leading-6 text-muted"
            >
              <UIcon
                name="i-lucide-check"
                class="mt-1 size-4 shrink-0 text-success"
              />
              {{ deliverable }}
            </li>
          </ul>
          <p class="mt-6 font-mono text-xs uppercase tracking-[0.1em] text-dimmed">
            Delivered in {{ healthCheck.durationLabel }}
          </p>
        </aside>
      </UContainer>

      <UContainer>
        <div class="relative grid border-t border-default sm:grid-cols-2 lg:grid-cols-4">
          <component
            :is="item.href ? 'a' : 'div'"
            v-for="item in trustBar.items"
            :key="item.label"
            :href="item.href || undefined"
            :target="item.href ? '_blank' : undefined"
            :rel="item.href ? 'noreferrer' : undefined"
            class="flex items-center gap-2 border-default py-5 text-sm text-muted sm:px-5 sm:first:pl-0 sm:nth-[2]:border-l lg:border-l lg:first:border-l-0 lg:last:pr-0"
          >
            <span
              v-if="item.logo === 'nuxt'"
              class="size-2 shrink-0 rounded-full bg-success"
              aria-hidden="true"
            />
            <span>{{ item.label }}</span>
          </component>
        </div>
      </UContainer>
    </section>

    <section class="border-b border-default py-24 sm:py-32">
      <UContainer>
        <div class="grid gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-20">
          <header>
            <p class="eyebrow">
              Ways to work together
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-[-0.045em] text-highlighted sm:text-4xl">
              Start with clarity. Add implementation when it helps.
            </h2>
          </header>

          <div class="border-t border-default">
            <article class="grid gap-6 border-b border-default py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
              <div>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="text-xl font-semibold tracking-[-0.03em] text-highlighted">
                    {{ healthCheck.title }}
                  </h3>
                  <UBadge
                    color="neutral"
                    variant="soft"
                  >
                    {{ healthCheck.durationLabel }}
                  </UBadge>
                </div>
                <p class="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  {{ healthCheck.bestFor }}
                </p>
              </div>
              <div class="sm:text-right">
                <p class="font-semibold text-highlighted">
                  {{ healthCheck.priceLabel }}
                </p>
                <UButton
                  :to="healthCheck.ctaHref"
                  color="neutral"
                  variant="link"
                  trailing-icon="i-lucide-arrow-right"
                  class="mt-2 px-0"
                >
                  Request it
                </UButton>
              </div>
            </article>

            <article class="grid gap-6 border-b border-default py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
              <div>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="text-xl font-semibold tracking-[-0.03em] text-highlighted">
                    Focused Nuxt sprint
                  </h3>
                  <UBadge
                    color="neutral"
                    variant="soft"
                  >
                    3–10 days
                  </UBadge>
                </div>
                <p class="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  Performance, migrations, or feature delivery with one measurable outcome, small review-ready PRs, and a clean handoff.
                </p>
              </div>
              <div class="sm:text-right">
                <p class="font-semibold text-highlighted">
                  From €4,500
                </p>
                <UButton
                  :to="ctas.calUrl"
                  target="_blank"
                  color="neutral"
                  variant="link"
                  trailing-icon="i-lucide-arrow-up-right"
                  class="mt-2 px-0"
                >
                  Scope a sprint
                </UButton>
              </div>
            </article>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="border-b border-default py-24 sm:py-32">
      <UContainer>
        <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <header class="max-w-xl">
            <p class="eyebrow">
              I step in when
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-[-0.045em] text-highlighted sm:text-4xl">
              The problem is clear, but the path through it isn’t.
            </h2>
          </header>
        </div>

        <ol class="mt-12 grid border-l border-t border-default sm:grid-cols-2">
          <li
            v-for="(item, index) in painPoints.items"
            :key="item.title"
            class="min-h-48 border-b border-r border-default p-6 sm:p-8"
          >
            <span class="eyebrow">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="mt-8 text-xl font-semibold tracking-[-0.03em] text-highlighted">
              {{ item.title }}
            </h3>
            <p class="mt-3 max-w-md text-sm leading-6 text-muted">
              {{ item.body }}
            </p>
          </li>
        </ol>
      </UContainer>
    </section>

    <section class="border-b border-default py-24 sm:py-32">
      <UContainer>
        <div class="grid gap-14 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-20">
          <div>
            <p class="eyebrow">
              Evidence
            </p>
            <div class="mt-6 grid border-l border-t border-default sm:grid-cols-3">
              <div
                v-for="number in proofNumbers"
                :key="number.label"
                class="border-b border-r border-default p-6"
              >
                <p class="text-4xl font-semibold tracking-[-0.05em] text-highlighted">
                  {{ number.value }}{{ number.suffix }}
                </p>
                <p class="mt-2 text-sm text-muted">
                  {{ number.label }}
                </p>
              </div>
            </div>

            <div class="mt-10 grid gap-x-8 border-t border-default sm:grid-cols-2">
              <a
                v-for="item in selectedProof"
                :key="item.href"
                :href="item.href"
                target="_blank"
                rel="noreferrer"
                class="group flex items-start justify-between gap-6 border-b border-default py-6"
              >
                <span>
                  <span class="block font-semibold tracking-[-0.02em] text-highlighted">{{ item.title }}</span>
                  <span class="mt-2 block text-sm leading-6 text-muted">{{ item.description }}</span>
                </span>
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="mt-1 size-4 shrink-0 text-dimmed transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <figure class="self-start rounded-2xl border border-default bg-elevated p-6 sm:p-8">
            <blockquote class="display-serif text-3xl leading-tight text-highlighted sm:text-4xl">
              “{{ testimonial.quote }}”
            </blockquote>
            <figcaption class="mt-8 flex items-center gap-4 border-t border-default pt-6">
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                width="96"
                height="96"
                loading="lazy"
                class="size-12 rounded-full object-cover grayscale"
              >
              <span>
                <span class="block text-sm font-semibold text-highlighted">{{ testimonial.name }}</span>
                <span class="mt-1 block text-xs text-muted">{{ testimonial.role }}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </UContainer>
    </section>

    <section class="border-b border-default py-24 sm:py-32">
      <UContainer>
        <div class="grid gap-14 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-20">
          <header>
            <p class="eyebrow">
              How it works
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-[-0.045em] text-highlighted sm:text-4xl">
              A small process with visible progress.
            </h2>
          </header>

          <div>
            <ol class="border-t border-default">
              <li
                v-for="(step, index) in howIWork.steps"
                :key="step.title"
                class="grid gap-4 border-b border-default py-6 sm:grid-cols-[3rem_12rem_minmax(0,1fr)] sm:gap-6"
              >
                <span class="eyebrow pt-1">{{ String(index + 1).padStart(2, '0') }}</span>
                <h3 class="font-semibold tracking-[-0.02em] text-highlighted">
                  {{ step.title }}
                </h3>
                <p class="text-sm leading-6 text-muted">
                  {{ step.body }}
                </p>
              </li>
            </ol>

            <div class="mt-12 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 class="font-semibold tracking-[-0.02em] text-highlighted">
                  Good fit
                </h3>
                <ul class="mt-4 space-y-3">
                  <li
                    v-for="item in fit.good"
                    :key="item"
                    class="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <UIcon
                      name="i-lucide-check"
                      class="mt-1 size-4 shrink-0 text-success"
                    />
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold tracking-[-0.02em] text-highlighted">
                  Not a fit
                </h3>
                <ul class="mt-4 space-y-3">
                  <li
                    v-for="item in fit.not"
                    :key="item"
                    class="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <UIcon
                      name="i-lucide-minus"
                      class="mt-1 size-4 shrink-0 text-dimmed"
                    />
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="border-b border-default py-24 sm:py-32">
      <UContainer class="grid gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-20">
        <header>
          <p class="eyebrow">
            FAQ
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-[-0.045em] text-highlighted sm:text-4xl">
            Before we start.
          </h2>
        </header>
        <UAccordion
          :items="faq"
          trailing-icon="i-lucide-plus"
          :ui="{
            item: 'border-b border-default',
            trigger: 'py-5 text-base font-semibold text-highlighted',
            body: 'text-sm leading-6 text-muted pb-6',
            trailingIcon: 'group-data-[state=open]:rotate-45'
          }"
        />
      </UContainer>
    </section>

    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="relative overflow-hidden rounded-2xl border border-default bg-inverted px-6 py-14 text-inverted sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            class="site-grid absolute inset-0 opacity-20 [mask-image:linear-gradient(to_right,transparent,black)]"
          />
          <div class="relative max-w-3xl">
            <p class="eyebrow !text-inverted/60">
              Next step
            </p>
            <h2 class="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
              {{ finalCta.headline }}
            </h2>
            <div class="mt-9 flex flex-wrap gap-3">
              <UButton
                :to="healthCheck.ctaHref"
                color="neutral"
                variant="solid"
                size="lg"
                trailing-icon="i-lucide-arrow-right"
                class="bg-default text-default hover:bg-muted"
              >
                {{ healthCheck.ctaLabel }}
              </UButton>
              <UButton
                :to="ctas.calUrl"
                target="_blank"
                color="neutral"
                variant="outline"
                size="lg"
                trailing-icon="i-lucide-arrow-up-right"
                class="!border-inverted/25 !bg-transparent !text-inverted hover:!bg-inverted/10"
              >
                Book a scope call
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
