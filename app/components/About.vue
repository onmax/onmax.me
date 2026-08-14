<script setup lang="ts">
const principles = [
  ['Make it useful', 'Start with the constraint that changes what the user can do next.'],
  ['Keep the seam small', 'Prefer platform features and existing primitives over another abstraction.'],
  ['Prove the boundary', 'Separate local checks, browser behavior, previews, and production evidence.']
] as const
</script>

<template>
  <section
    id="about"
    class="border-b border-default py-24 sm:py-32"
  >
    <UContainer>
      <div class="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:gap-24">
        <div>
          <p class="eyebrow">
            About
          </p>
          <h2 class="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-highlighted sm:text-5xl">
            I like difficult frontend work and
            <span class="display-serif font-normal italic">simple outcomes.</span>
          </h2>
          <div class="mt-8 max-w-2xl space-y-5 text-base leading-8 text-muted">
            <p>
              I’m a full-stack developer who found his home in Nuxt, Vue, and open source. Four years building production software at Nimiq taught me to care equally about interface craft, architecture, and the people maintaining the code next.
            </p>
            <p>
              Today I contribute across the Nuxt ecosystem, build developer tools and small products, and help teams move through upgrades or delivery bottlenecks without creating a second problem.
            </p>
          </div>
        </div>

        <ol class="border-t border-default">
          <li
            v-for="(principle, index) in principles"
            :key="principle[0]"
            class="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-default py-6"
          >
            <span class="eyebrow pt-1">{{ String(index + 1).padStart(2, '0') }}</span>
            <div>
              <h3 class="font-semibold tracking-[-0.02em] text-highlighted">
                {{ principle[0] }}
              </h3>
              <p class="mt-2 text-sm leading-6 text-muted">
                {{ principle[1] }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </UContainer>
  </section>
</template>
