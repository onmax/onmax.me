<script setup lang="ts">
import {
  addon,
  ctas,
  faq,
  finalCta,
  fit,
  healthCheck,
  hero,
  painPoints,
  proof,
  proofMetrics,
  proofNumbers,
  testimonial,
  trustBar,
  howIWork,
  packages
} from '~/lib/hire'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Overpass+Mono:wght@400;600&display=swap'
    }
  ]
})

const sectionLabels = ['Sound familiar?', 'What you get', 'Proof', 'How it works', 'FAQ', 'Contact']
</script>

<template>
  <main class="swiss">
    <div class="swiss-inner">
      <!-- 00 HERO -->
      <section class="hero-section">
        <span
          class="watermark"
          aria-hidden="true"
        >00</span>
        <header class="hero-header hero-enter">
          <a
            href="/"
            class="logo"
          >onmax.me</a>
          <nav class="hero-nav">
            <a
              :href="`mailto:${ctas.email}`"
              class="nav-link nav-link--red"
              target="_blank"
              rel="noreferrer"
            >{{ ctas.email }}</a>
            <a
              :href="ctas.calUrl"
              class="nav-link"
              target="_blank"
              rel="noreferrer"
            >Book a call &nearr;</a>
          </nav>
        </header>
        <h1 class="hero-title hero-enter hero-enter--d1">
          {{ hero.title }}
        </h1>
        <p class="hero-subhead hero-enter hero-enter--d2">
          {{ hero.subhead }}
        </p>
        <div class="hero-ctas hero-enter hero-enter--d3">
          <a
            :href="healthCheck.ctaHref"
            class="btn btn--red"
            target="_blank"
            rel="noreferrer"
          >Request a €990 Health Check &rarr;</a>
          <a
            :href="ctas.calUrl"
            class="btn btn--outline"
            target="_blank"
            rel="noreferrer"
          >Book a 25-min scope call &nearr;</a>
        </div>
        <p class="hero-note hero-enter hero-enter--d4">
          {{ hero.note }}
        </p>
        <figure class="hero-identity hero-enter hero-enter--d4">
          <img
            src="/hire/maxi-founder.jpg"
            alt=""
            class="hero-portrait"
            width="1100"
            height="1100"
            decoding="async"
          >
          <figcaption class="hero-identity-caption">
            <span class="hero-identity-name">Maxi García</span>
            <span>Senior Nuxt/Vue engineer</span>
          </figcaption>
        </figure>

        <!-- TRUST BAR -->
        <div class="trust-bar hero-enter hero-enter--d5">
          <component
            :is="item.href ? 'a' : 'span'"
            v-for="item in trustBar.items"
            :key="item.label"
            :href="item.href || undefined"
            class="trust-badge"
            :target="item.href ? '_blank' : undefined"
            :rel="item.href ? 'noreferrer' : undefined"
          >
            <svg
              v-if="item.logo"
              :class="['trust-logo', `trust-logo--${item.logo}`]"
              :viewBox="item.logo === 'nuxt' ? '0 0 24 24' : '0 0 64 56'"
              aria-hidden="true"
            >
              <path
                v-if="item.logo === 'nuxt'"
                fill="currentColor"
                d="M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.6 1.6 0 0 0 .591-.574 1.53 1.53 0 0 0 .216-.783 1.53 1.53 0 0 0-.217-.782L17.792 7.414a1.6 1.6 0 0 0-.591-.573 1.65 1.65 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.6 1.6 0 0 0-.59.573L13.463 9.99 10.47 4.953a1.6 1.6 0 0 0-.591-.573 1.65 1.65 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.6 1.6 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.6 1.6 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593 1.464-2.457 4.395 7.382h-5.859Zm-6.341-2.46-3.908-.002 5.858-9.842 2.923 4.921-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632"
              />
              <path
                v-else
                fill="currentColor"
                d="M63.3 25.4 50 2.6C49 1 47.2 0 45.3 0H18.7c-1.9 0-3.7 1-4.6 2.6L.7 25.4c-1 1.6-1 3.6 0 5.3L14 53.4c1 1.6 2.7 2.6 4.6 2.6h26.7c1.9 0 3.7-1 4.7-2.6l13.3-22.8c.9-1.6.9-3.6 0-5.2Z"
              />
            </svg>
            {{ item.label }}
          </component>
        </div>
      </section>

      <hr class="red-rule">

      <!-- 01 SOUND FAMILIAR -->
      <section class="section section--pain">
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[0] }}
        </h2>
        <ul class="pain-list swiss-reveal swiss-reveal--d1">
          <li
            v-for="(item, idx) in painPoints.items"
            :key="item.title"
            class="pain-item"
          >
            <div class="pain-meta">
              <span class="pain-mark">{{ String(idx + 1).padStart(2, '0') }}</span>
              <svg
                class="pain-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <template v-if="idx === 0">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M8 16H3v5" />
                </template>
                <path
                  v-else-if="idx === 1"
                  d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0"
                />
                <template v-else-if="idx === 2">
                  <path d="M22 2 2 22" />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                </template>
                <template v-else>
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <path d="M22 12h-4M6 12H2m10-6V2m0 20v-4" />
                </template>
              </svg>
            </div>
            <div class="pain-copy">
              <h3 class="pain-title">
                {{ item.title }}
              </h3>
              <p class="pain-detail">
                {{ item.body }}
              </p>
            </div>
          </li>
        </ul>
      </section>

      <!-- 02 WHAT YOU GET -->
      <section class="section section--offers">
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[1] }}
        </h2>

        <!-- Health check compact strip -->
        <div class="health-strip swiss-reveal swiss-reveal--d1">
          <div class="health-strip-left">
            <h3 class="health-strip-title">
              {{ healthCheck.title }}
            </h3>
            <p class="health-strip-desc">
              {{ healthCheck.bestFor }}
            </p>
          </div>
          <div class="health-strip-right">
            <span class="health-strip-price">{{ healthCheck.priceLabel }}</span>
            <span class="health-strip-duration">{{ healthCheck.durationLabel }}</span>
            <a
              :href="healthCheck.ctaHref"
              class="btn btn--red btn--sm health-strip-cta"
              target="_blank"
              rel="noreferrer"
            >{{ healthCheck.ctaLabel }}</a>
          </div>
          <details
            class="health-strip-details"
            open
          >
            <summary class="health-strip-toggle">
              What's included
            </summary>
            <ul class="health-strip-deliverables">
              <li
                v-for="d in healthCheck.deliverables"
                :key="d"
              >
                {{ d }}
              </li>
            </ul>
          </details>
        </div>

        <!-- Packages -->
        <div class="pkg-grid">
          <article
            v-for="(p, idx) in packages"
            :key="p.title"
            class="pkg-card swiss-reveal"
            :class="`swiss-reveal--d${idx + 1}`"
          >
            <span class="pkg-index">{{ String(idx + 1).padStart(2, '0') }}</span>
            <div class="pkg-copy">
              <div class="pkg-top">
                <h3 class="pkg-title">
                  {{ p.title }}
                </h3>
                <span class="pkg-duration">{{ p.durationLabel }}</span>
              </div>
              <p class="pkg-outcome">
                {{ p.outcomeHint }}
              </p>
              <p class="pkg-best">
                {{ p.bestFor }}
              </p>
            </div>
            <details class="pkg-scope">
              <summary class="pkg-scope-summary">
                <span>Scope · {{ p.deliverables.length }} deliverables</span>
                <span class="pkg-scope-toggle">+</span>
              </summary>
              <ul class="pkg-deliverables">
                <li
                  v-for="d in p.deliverables"
                  :key="d"
                >
                  {{ d }}
                </li>
              </ul>
            </details>
            <div class="pkg-footer">
              <span class="pkg-price">{{ p.priceLabel }}</span>
              <a
                :href="ctas.calUrl"
                class="btn btn--red"
                target="_blank"
                rel="noreferrer"
              >{{ p.ctaLabel }} &rarr;</a>
            </div>
          </article>
        </div>

        <!-- Add-on footnote -->
        <p class="addon-footnote swiss-reveal">
          {{ addon }}
        </p>
      </section>

      <hr class="red-rule">

      <!-- 03 PROOF -->
      <section class="section section--proof">
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[2] }}
        </h2>
        <div class="proof-stage">
          <div class="proof-facts swiss-reveal swiss-reveal--d1">
            <div class="proof-numbers">
              <div
                v-for="n in proofNumbers"
                :key="n.label"
                class="proof-number-item"
              >
                <span class="proof-number-value">{{ n.value }}{{ n.suffix }}</span>
                <span class="proof-number-label">{{ n.label }}</span>
                <a
                  v-if="'href' in n"
                  :href="n.href"
                  class="proof-number-link"
                  target="_blank"
                  rel="noreferrer"
                >prs.onmax.me &nearr;</a>
              </div>
            </div>

            <ul class="proof-metrics">
              <li
                v-for="m in proofMetrics"
                :key="m"
              >
                <span class="proof-mark">+</span> {{ m }}
              </li>
            </ul>
          </div>

          <figure class="testimonial swiss-reveal swiss-reveal--d2">
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
              class="testimonial-photo"
              width="640"
              height="506"
              loading="lazy"
              decoding="async"
            >
            <blockquote class="testimonial-quote">
              “{{ testimonial.quote }}”
            </blockquote>
            <figcaption class="testimonial-meta">
              <span class="testimonial-name">{{ testimonial.name }}</span>
              <span class="testimonial-role">{{ testimonial.role }}</span>
            </figcaption>
          </figure>
        </div>

        <!-- Static 2-column link grid -->
        <div class="proof-grid swiss-reveal swiss-reveal--d3">
          <a
            v-for="item in proof.items"
            :key="item.href"
            :href="item.href"
            class="proof-link"
            target="_blank"
            rel="noreferrer"
          >
            <span class="proof-link-title">{{ item.title }}</span>
            <span class="proof-link-desc">{{ item.description }}</span>
            <span class="proof-link-url">{{ item.label }} &nearr;</span>
          </a>
        </div>
      </section>

      <hr class="red-rule">

      <!-- 04 HOW IT WORKS -->
      <section class="section section--process">
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[3] }}
        </h2>
        <div class="process-content">
          <ol class="steps-grid">
            <li
              v-for="(s, idx) in howIWork.steps"
              :key="s.title"
              class="step swiss-reveal"
              :class="`swiss-reveal--d${idx + 1}`"
            >
              <span class="step-num">{{ String(idx + 1).padStart(2, '0') }}</span>
              <div>
                <h3 class="step-title">
                  {{ s.title }}
                </h3>
                <p class="step-body">
                  {{ s.body }}
                </p>
              </div>
            </li>
          </ol>

          <!-- Fit sub-block -->
          <div class="fit-block swiss-reveal swiss-reveal--d4">
            <div class="fit-grid">
              <div class="fit-col">
                <h3 class="fit-heading">
                  Good fit
                </h3>
                <ul class="fit-list">
                  <li
                    v-for="t in fit.good"
                    :key="t"
                  >
                    <span class="fit-mark fit-mark--good">+</span> {{ t }}
                  </li>
                </ul>
              </div>
              <div class="fit-col">
                <h3 class="fit-heading">
                  Not a fit
                </h3>
                <ul class="fit-list">
                  <li
                    v-for="t in fit.not"
                    :key="t"
                  >
                    <span class="fit-mark fit-mark--not">&times;</span> {{ t }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 05 FAQ -->
      <section class="section section--faq">
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[4] }}
        </h2>
        <div class="faq-list">
          <details
            v-for="(item, idx) in faq"
            :key="item.label"
            class="faq-item swiss-reveal"
            :class="`swiss-reveal--d${Math.min(idx + 1, 4)}`"
          >
            <summary class="faq-summary">
              <span>{{ item.label }}</span>
              <span class="faq-toggle">+</span>
            </summary>
            <p class="faq-content">
              {{ item.content }}
            </p>
          </details>
        </div>
      </section>

      <!-- 06 CONTACT -->
      <section class="section section--cta">
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[5] }}
        </h2>
        <p class="cta-headline swiss-reveal swiss-reveal--d1">
          {{ finalCta.headline }}
        </p>
        <div class="cta-btns swiss-reveal swiss-reveal--d2">
          <a
            :href="healthCheck.ctaHref"
            class="btn btn--red btn--lg"
            target="_blank"
            rel="noreferrer"
          >{{ healthCheck.ctaLabel }} &rarr;</a>
          <a
            :href="ctas.calUrl"
            class="btn btn--outline btn--lg"
            target="_blank"
            rel="noreferrer"
          >Book a 25-min scope call &nearr;</a>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* ── CUSTOM PROPERTIES ── */
.swiss {
  --ff-display: 'Bebas Neue', sans-serif;
  --ff-body: 'Source Serif 4', serif;
  --ff-mono: 'Overpass Mono', monospace;
  --bg: #fff;
  --fg: #000;
  --red: oklch(0.63 0.28 29);
  --red-ink: oklch(0.55 0.24 29);
  --gutter: 24px;
  --rule: 4px;
  --border: 2px solid var(--fg);
  --max-w: 1920px;
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --surface-grain: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E");

  color-scheme: light;
  min-height: 100dvh;
  background-color: var(--bg);
  background-image: var(--surface-grain);
  background-repeat: repeat;
  background-size: 160px 160px;
  color: var(--fg);
  font-family: var(--ff-body);
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.swiss :where(h1, h2, h3) {
  text-wrap: balance;
}

.swiss :where(p, li, blockquote) {
  text-wrap: pretty;
}

/* ── LAYOUT ── */
.swiss-inner {
  counter-reset: hire-section;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--gutter) 120px;
}

@media (min-width: 768px) {
  .swiss { --gutter: clamp(48px, 6vw, 96px); }
  .swiss-inner { padding-bottom: 160px; }
}

/* ── RED RULE ── */
.red-rule {
  border: none;
  height: var(--rule);
  background: var(--red);
  margin: 0 calc(-1 * var(--gutter));
}

/* ── WATERMARK NUMBERS ── */
.section,
.hero-section {
  position: relative;
  overflow: clip;
  isolation: isolate;
}

.section { counter-increment: hire-section; }

.section::before,
.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: var(--section-pattern, none);
  background-repeat: no-repeat;
  background-position: var(--section-pattern-position, center);
  background-size: clamp(600px, 52vw, 900px) auto;
  mix-blend-mode: multiply;
  opacity: var(--section-pattern-opacity, 0.07);
}

.hero-section,
.section--proof,
.section--cta {
  --section-pattern: url('/hire/patterns/contours.webp');
}

.section--pain,
.section--process {
  --section-pattern: url('/hire/patterns/lattice.webp');
}

.section--offers,
.section--faq {
  --section-pattern: url('/hire/patterns/routes.webp');
}

.hero-section {
  --section-pattern-position: right bottom;
  --section-pattern-opacity: 0.06;
}

.section--pain,
.section--process { --section-pattern-position: left center; }
.section--offers,
.section--faq { --section-pattern-position: right center; }
.section--proof { --section-pattern-position: right bottom; }
.section--cta { --section-pattern-position: center; }

@media (max-width: 767px) {
  .section::before,
  .hero-section::before {
    background-size: 600px auto;
    opacity: 0.05;
  }
}

.watermark {
  position: absolute;
  top: -0.15em;
  right: -0.02em;
  font-family: var(--ff-display);
  font-size: clamp(120px, 18vw, 280px);
  line-height: 1;
  opacity: 0.06;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

/* ── HERO ── */
.hero-section {
  padding: 40px 0 64px;
}

@media (min-width: 768px) {
  .hero-section { padding: 80px 0 140px; }
}

.hero-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .hero-header { margin-bottom: 120px; }
}

.logo {
  font-family: var(--ff-mono);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: var(--fg);
  text-transform: uppercase;
}

.hero-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
}

.nav-link {
  font-family: var(--ff-mono);
  font-size: 13px;
  text-decoration: none;
  color: var(--fg);
  letter-spacing: 0.02em;
  transition: color 160ms var(--ease-out);
}

.nav-link:hover { text-decoration: underline; }

.nav-link--red { color: var(--red-ink); }

.hero-title {
  font-family: var(--ff-body);
  font-weight: 600;
  font-size: clamp(38px, 11vw, 96px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;
  position: relative;
  z-index: 1;
}

.hero-subhead {
  margin-top: 48px;
  font-family: var(--ff-body);
  font-size: clamp(18px, 2.2vw, 26px);
  font-weight: 400;
  line-height: 1.45;
  max-width: 48ch;
  position: relative;
  z-index: 1;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
  position: relative;
  z-index: 1;
}

.hero-note {
  margin-top: 16px;
  font-family: var(--ff-mono);
  font-size: 13px;
  font-weight: 400;
  opacity: 0.62;
  position: relative;
  z-index: 1;
}

.hero-identity {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  align-items: end;
  gap: 14px;
  width: fit-content;
  margin: 28px 0 0;
  position: relative;
  z-index: 1;
}

.hero-portrait {
  display: block;
  width: 88px;
  height: 88px;
  border: var(--border);
  object-fit: cover;
}

.hero-identity-caption {
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 22ch;
  font-family: var(--ff-mono);
  font-size: 12px;
  line-height: 1.45;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.hero-identity-name { font-weight: 600; }

@media (min-width: 1280px) {
  .hero-section {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 340px);
    column-gap: clamp(40px, 4vw, 72px);
  }

  .hero-header,
  .trust-bar {
    grid-column: 1 / -1;
  }

  .hero-header { grid-row: 1; }
  .hero-title { grid-column: 1; grid-row: 2; }
  .hero-subhead { grid-column: 1; grid-row: 3; }
  .hero-ctas { grid-column: 1; grid-row: 4; }
  .hero-note { grid-column: 1; grid-row: 5; }

  .hero-identity {
    grid-template-columns: 136px minmax(0, 1fr);
    gap: 18px;
    margin: 0;
    grid-column: 2;
    grid-row: 2 / 6;
    align-self: start;
  }

  .hero-portrait {
    width: 136px;
    height: 136px;
  }

  .trust-bar { grid-row: 6; }
}

/* ── TRUST BAR ── */
.trust-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
  margin-top: 64px;
  position: relative;
  z-index: 1;
}

.trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: var(--border);
  padding: 10px 12px;
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--fg);
  opacity: 0.9;
  transition: background-color 160ms var(--ease-out), color 160ms var(--ease-out), transform 160ms var(--ease-out);
}

.trust-badge:hover {
  background: var(--fg);
  color: var(--bg);
}

.trust-logo {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.trust-logo--nimiq { width: 22px; }

/* ── SECTION ── */
.section {
  padding: 72px 0;
}

@media (min-width: 768px) {
  .section { padding: 96px 0; }
}

@media (min-width: 1200px) {
  .section { padding: 88px 0; }
  .section--offers { padding-block: 64px; }
  .section--proof { padding-block: 112px; }
  .section--faq { padding-block: 72px; }
}

.section-label {
  display: flex;
  align-items: baseline;
  gap: 12px;
  width: fit-content;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--fg);
  font-family: var(--ff-mono);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.12em;
  line-height: 1;
  margin: 0 0 32px;
  position: relative;
  z-index: 1;
}

.section-label::before {
  content: counter(hire-section, decimal-leading-zero);
  color: var(--red-ink);
}

/* ── PAIN ── */
.pain-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
  max-width: none;
  position: relative;
  z-index: 1;
}

.pain-item {
  --pain-art: none;
  --pain-art-opacity: 0.3;
  --pain-art-blend: multiply;
  --pain-line: rgba(0,0,0,0.055);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: clamp(40px, 8vw, 84px);
  min-height: 240px;
  padding: clamp(24px, 3vw, 40px);
  border: 1px solid rgba(0,0,0,0.22);
  font-family: var(--ff-body);
  background-color: rgba(255,255,255,0.88);
  background-image:
    linear-gradient(var(--pain-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--pain-line) 1px, transparent 1px);
  background-size: 32px 32px;
  overflow: clip;
  isolation: isolate;
  position: relative;
}

.pain-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--pain-art);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: var(--pain-art-blend);
  opacity: var(--pain-art-opacity);
  pointer-events: none;
}

.pain-item:nth-child(1) {
  --pain-art: url('/hire/pain/migration.webp');
  --pain-art-opacity: 0.34;
}

.pain-item:nth-child(2) {
  --pain-art: url('/hire/pain/performance.webp');
  --pain-art-opacity: 0.82;
  --pain-art-blend: screen;
  --pain-line: rgba(255,255,255,0.045);
  color: var(--bg);
  background-color: var(--fg);
}

.pain-item:nth-child(3) {
  --pain-art: url('/hire/pain/capacity.webp');
  --pain-art-opacity: 0.34;
}

.pain-item:nth-child(4) {
  --pain-art: url('/hire/pain/specialist.webp');
  --pain-art-opacity: 0.38;
}

.pain-meta {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  z-index: 1;
}

.pain-mark {
  font-family: var(--ff-mono);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: var(--red-ink);
  flex-shrink: 0;
}

.pain-icon {
  width: clamp(40px, 4vw, 56px);
  height: clamp(40px, 4vw, 56px);
  color: var(--red-ink);
  stroke-width: 1.25;
}

.pain-item:nth-child(2) .pain-mark,
.pain-item:nth-child(2) .pain-icon {
  color: var(--red);
}

.pain-copy {
  max-width: 42ch;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 1;
}

.pain-title {
  max-width: none;
  margin: 0;
  font-family: var(--ff-display);
  font-size: clamp(34px, 3vw, 52px);
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 0.98;
  text-transform: uppercase;
}

.pain-detail {
  max-width: 40ch;
  margin: 0;
  font-family: var(--ff-body);
  font-size: clamp(15px, 1.1vw, 18px);
  line-height: 1.5;
  opacity: 0.72;
}

@media (min-width: 760px) {
  .pain-list {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .pain-item {
    grid-column: span 6;
  }
}

@media (min-width: 1100px) {
  .pain-list {
    grid-auto-rows: minmax(250px, auto);
  }

  .pain-item {
    min-height: 0;
    gap: 32px;
    padding: 32px;
  }

  .pain-item:first-child {
    grid-column: span 5;
    grid-row: span 2;
    min-height: 520px;
    padding: 40px;
  }

  .pain-item:nth-child(2) {
    grid-column: span 7;
  }

  .pain-item:nth-child(3) {
    grid-column: span 3;
  }

  .pain-item:nth-child(4) {
    grid-column: span 4;
  }

  .pain-item:first-child .pain-copy {
    max-width: 30ch;
  }

  .pain-item:first-child .pain-title {
    max-width: 10ch;
    font-size: clamp(52px, 4.6vw, 76px);
  }

  .pain-item:nth-child(n + 3) .pain-title {
    font-size: clamp(30px, 2.2vw, 40px);
  }

  .pain-item:nth-child(n + 3) .pain-detail {
    font-size: 16px;
  }
}

/* ── HEALTH CHECK STRIP ── */
.health-strip {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: clamp(28px, 4vw, 56px);
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
  background: var(--fg);
  color: var(--bg);
}

@media (min-width: 1200px) {
  .health-strip {
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr) minmax(210px, auto);
    align-items: start;
    gap: clamp(32px, 4vw, 64px);
  }

  .health-strip-details {
    grid-column: 2;
    grid-row: 1;
  }

  .health-strip-right {
    grid-column: 3;
    grid-row: 1;
  }
}

.health-strip-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.health-strip-title {
  font-family: var(--ff-display);
  font-weight: 400;
  font-size: clamp(36px, 4vw, 64px);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin: 0;
}

.health-strip-desc {
  font-family: var(--ff-body);
  font-size: 17px;
  line-height: 1.5;
  opacity: 0.72;
  margin: 0;
}

.health-strip-right {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
}

.health-strip-price {
  font-family: var(--ff-display);
  font-size: clamp(48px, 5vw, 72px);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--red-ink);
}

.health-strip-duration {
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.55;
  margin-bottom: 16px;
}

.health-strip-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.health-strip-cta::after {
  content: '\2192';
  transition: transform 160ms var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .health-strip .health-strip-cta:hover {
    color: var(--fg);
    background: var(--bg);
    border-color: var(--bg);
    transform: translateY(-2px);
  }

  .health-strip-cta:hover::after {
    transform: translateX(4px);
  }
}

.health-strip-toggle {
  font-family: var(--ff-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  color: var(--bg);
  opacity: 0.65;
  list-style: none;
}

.health-strip-toggle::-webkit-details-marker { display: none; }
.health-strip-toggle::marker { display: none; content: ''; }

.health-strip-toggle:hover { opacity: 1; }

.health-strip-deliverables {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  gap: 8px;
}

.health-strip-deliverables li {
  font-family: var(--ff-body);
  font-size: 14px;
  line-height: 1.5;
  padding-left: 20px;
  position: relative;
  opacity: 0.76;
}

.health-strip-deliverables li::before {
  content: '\2014';
  position: absolute;
  left: 0;
  color: var(--red-ink);
}

/* ── PACKAGES ── */
.pkg-grid {
  display: grid;
  gap: 0;
  position: relative;
  z-index: 1;
  border-top: var(--border);
}

.pkg-card {
  border: 0;
  border-bottom: var(--border);
  padding: 28px 0;
  display: grid;
  gap: 20px;
  background: transparent;
  position: relative;
}

.pkg-card:nth-child(2) {
  border-left: var(--rule) solid var(--red);
  background: rgba(230, 30, 30, 0.035);
}

@media (min-width: 768px) {
  .pkg-card {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 24px;
    padding: 36px 0;
  }

  .pkg-copy,
  .pkg-scope,
  .pkg-footer {
    grid-column: 2;
  }
}

@media (min-width: 1280px) {
  .pkg-card {
    grid-template-columns: 56px minmax(320px, 1.2fr) minmax(240px, 0.9fr) minmax(256px, 0.65fr);
    column-gap: clamp(32px, 3vw, 56px);
    align-items: baseline;
    padding-block: clamp(36px, 2.6vw, 52px);
  }

  .pkg-copy,
  .pkg-scope,
  .pkg-footer {
    grid-column: auto;
  }
}

.pkg-index {
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--red-ink);
  padding-top: 7px;
}

.pkg-copy {
  display: grid;
  gap: 16px;
}

.pkg-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.pkg-title {
  font-family: var(--ff-display);
  font-weight: 400;
  font-size: clamp(28px, 2.4vw, 38px);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin: 0;
}

.pkg-duration {
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  opacity: 0.62;
}

.pkg-outcome {
  margin: 0;
  max-width: 62ch;
  font-family: var(--ff-body);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--fg);
}

.pkg-best {
  max-width: 62ch;
  font-family: var(--ff-body);
  font-size: 15px;
  line-height: 1.55;
  opacity: 0.7;
  margin: 0;
}

.pkg-scope {
  border-top: 1px solid rgba(0,0,0,0.14);
  border-bottom: 1px solid rgba(0,0,0,0.14);
}

.pkg-scope-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  cursor: pointer;
  list-style: none;
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.pkg-scope-summary::-webkit-details-marker { display: none; }
.pkg-scope-summary::marker { display: none; content: ''; }

.pkg-scope-toggle {
  color: var(--red-ink);
  font-size: 20px;
  line-height: 1;
  transition: transform 180ms var(--ease-out);
}

.pkg-scope[open] .pkg-scope-toggle { transform: rotate(45deg); }

.pkg-deliverables {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  padding: 4px 0 18px;
}

.pkg-deliverables li {
  font-family: var(--ff-body);
  font-size: 14px;
  line-height: 1.5;
  padding-left: 20px;
  position: relative;
}

.pkg-deliverables li::before {
  content: '\2014';
  position: absolute;
  left: 0;
  color: var(--red-ink);
}

.pkg-footer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pkg-price {
  font-family: var(--ff-display);
  font-size: clamp(38px, 3.4vw, 52px);
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.pkg-footer .btn { width: 100%; }

@media (min-width: 768px) and (max-width: 1279px) {
  .pkg-footer {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    gap: 24px;
  }

  .pkg-footer .btn { width: auto; }
}

@media (min-width: 1280px) {
  .pkg-index { padding-top: 0; }

  .pkg-top {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
  }

  .pkg-scope {
    border-top: 0;
    border-bottom: 0;
  }

  .pkg-scope-summary {
    justify-content: flex-start;
    width: fit-content;
    gap: 10px;
    padding-block: 0 14px;
  }

  .pkg-footer .btn { white-space: nowrap; }
}

@media (min-width: 1600px) {
  .pkg-card {
    grid-template-columns: 56px minmax(400px, 520px) minmax(260px, 380px) minmax(256px, 320px);
    justify-content: space-between;
  }
}

/* ── ADD-ON FOOTNOTE ── */
.addon-footnote {
  margin: 32px 0 0;
  font-family: var(--ff-mono);
  font-size: 13px;
  line-height: 1.6;
  opacity: 0.62;
  position: relative;
  z-index: 1;
}

/* ── BUTTONS ── */
.btn {
  display: inline-block;
  font-family: var(--ff-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 24px;
  text-align: center;
  border: var(--border);
  border-radius: 0;
  transition: background-color 160ms var(--ease-out), border-color 160ms var(--ease-out), color 160ms var(--ease-out), transform 160ms var(--ease-out);
}

.btn:active,
.trust-badge:active,
.proof-link:active {
  transform: scale(0.98);
  transition-duration: 100ms;
}

.btn--red {
  background: var(--red-ink);
  color: #fff;
  border-color: var(--red-ink);
}

.btn--red:hover {
  background: #000;
  border-color: #000;
}

.btn--outline {
  background: transparent;
  color: var(--fg);
}

.btn--outline:hover {
  background: var(--fg);
  color: var(--bg);
}

.btn--lg {
  padding: 18px 32px;
  font-size: 14px;
}

.btn--sm {
  padding: 10px 18px;
  font-size: 12px;
}

.btn:focus-visible,
.trust-badge:focus-visible,
.proof-link:focus-visible,
.nav-link:focus-visible,
.faq-summary:focus-visible,
.pkg-scope-summary:focus-visible,
.health-strip-toggle:focus-visible {
  outline: 3px solid var(--red-ink);
  outline-offset: 3px;
}

.health-strip .btn:focus-visible,
.health-strip-toggle:focus-visible,
.section--cta .btn:focus-visible {
  outline-color: var(--bg);
}

/* ── PROOF NUMBERS ── */
.proof-stage {
  display: grid;
  gap: 24px;
  margin-bottom: 28px;
  position: relative;
  z-index: 1;
}

@media (min-width: 1000px) {
  .proof-stage {
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    align-items: stretch;
  }
}

.proof-facts {
  padding: clamp(24px, 3vw, 40px);
  border-top: var(--rule) solid var(--red);
  border-bottom: 1px solid rgba(0,0,0,0.18);
  background: rgba(255,255,255,0.78);
}

.proof-numbers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 36px;
  position: relative;
  z-index: 1;
}

.proof-number-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.proof-number-value {
  font-family: var(--ff-display);
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
}

.proof-number-label {
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.62;
}

.proof-number-link {
  width: fit-content;
  color: var(--red-ink);
  font-family: var(--ff-mono);
  font-size: 12px;
  text-decoration: none;
}

.proof-number-link:hover { text-decoration: underline; }

@media (max-width: 767px) {
  .proof-numbers { grid-template-columns: 1fr; gap: 20px; }
}

/* ── PROOF METRICS ── */
.proof-metrics {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
  max-width: 72ch;
  position: relative;
  z-index: 1;
}

.proof-metrics li {
  display: flex;
  gap: 12px;
  align-items: baseline;
  font-family: var(--ff-body);
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.85;
}

.proof-mark {
  font-family: var(--ff-mono);
  font-weight: 600;
  color: var(--red-ink);
  flex-shrink: 0;
  width: 20px;
  text-align: center;
}

/* ── TESTIMONIAL ── */
.testimonial {
  margin: 0;
  padding: clamp(24px, 3vw, 40px);
  border: 0;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: clamp(24px, 3vw, 40px);
  position: relative;
  z-index: 1;
  background: var(--fg);
  color: var(--bg);
}

.testimonial-photo {
  width: 140px;
  height: 140px;
  grid-row: 1 / span 2;
  border: 2px solid var(--bg);
  object-fit: cover;
  object-position: center 25%;
}

.testimonial-quote {
  max-width: 58ch;
  margin: 0 0 18px;
  font-family: var(--ff-body);
  font-size: clamp(20px, 2.2vw, 30px);
  line-height: 1.45;
}

.testimonial-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 10px;
  font-family: var(--ff-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.testimonial-name { font-weight: 600; }
.testimonial-role { opacity: 0.65; }

@media (max-width: 767px) {
  .testimonial {
    padding: 18px;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .testimonial-photo {
    grid-row: auto;
    width: 64px;
    height: 64px;
  }

  .testimonial-quote {
    margin-bottom: 0;
    font-size: 19px;
  }
}

/* ── PROOF LINK GRID ── */
.proof-grid {
  display: grid;
  gap: 2px;
  border: var(--border);
  background: var(--fg);
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .proof-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  .proof-link { grid-column: span 2; }
  .proof-link:first-child { grid-column: span 4; }
  .proof-link:first-child .proof-link-title { font-size: 34px; }
}

.proof-link {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 28px 24px;
  border: 0;
  background: var(--bg);
  text-decoration: none;
  color: var(--fg);
  transition: background-color 160ms var(--ease-out), color 160ms var(--ease-out), transform 160ms var(--ease-out);
}

.proof-link:hover {
  background: var(--fg);
  color: var(--bg);
}

.proof-link:hover .proof-link-url { color: var(--bg); opacity: 0.6; }

.proof-link-title {
  font-family: var(--ff-display);
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.proof-link-desc {
  font-family: var(--ff-body);
  font-size: 14px;
  opacity: 0.6;
}

.proof-link-url {
  font-family: var(--ff-mono);
  font-size: 12px;
  color: var(--red-ink);
  margin-top: auto;
}

/* ── STEPS ── */
.process-content {
  position: relative;
  z-index: 1;
}

.steps-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0;
  position: relative;
  z-index: 1;
}

.step {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 20px;
  padding: 28px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

@media (min-width: 1100px) {
  .steps-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: var(--rule) solid var(--red);
  }

  .step,
  .step:first-child {
    min-height: 200px;
    padding: 28px 24px 28px 0;
    border-top: 0;
    border-right: 1px solid rgba(0,0,0,0.16);
    border-bottom: 0;
  }

  .step:last-child { border-right: 0; }
}

@media (max-width: 1099px) {
  .step:first-child { border-top: 1px solid rgba(0,0,0,0.1); }
}

.step-num {
  font-family: var(--ff-mono);
  font-size: 13px;
  font-weight: 600;
  opacity: 0.6;
  padding-top: 3px;
}

.step-title {
  font-family: var(--ff-display);
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin: 0;
}

.step-body {
  font-family: var(--ff-body);
  font-size: 15px;
  line-height: 1.5;
  opacity: 0.6;
  margin: 6px 0 0;
}

/* ── FIT (sub-block under process) ── */
.fit-block {
  margin-top: 64px;
  padding-top: 48px;
  border-top: 1px solid rgba(0,0,0,0.1);
  position: relative;
  z-index: 1;
}

.fit-grid {
  display: grid;
  gap: 32px;
}

@media (min-width: 768px) {
  .fit-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
}

.fit-heading {
  font-family: var(--ff-display);
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin: 0 0 20px;
}

.fit-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.fit-list li {
  font-family: var(--ff-body);
  font-size: 15px;
  line-height: 1.5;
  display: flex;
  gap: 12px;
  align-items: baseline;
}

.fit-mark {
  font-family: var(--ff-mono);
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
}

.fit-mark--good { color: var(--red-ink); }
.fit-mark--not { opacity: 0.6; }

/* ── FAQ ── */
.faq-list {
  display: grid;
  gap: 0;
  position: relative;
  z-index: 1;
}

.faq-item {
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.faq-item:first-child { border-top: 1px solid rgba(0,0,0,0.1); }

.faq-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 22px 0;
  cursor: pointer;
  font-family: var(--ff-body);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  list-style: none;
}

.faq-summary::-webkit-details-marker { display: none; }
.faq-summary::marker { display: none; content: ''; }

.faq-toggle {
  font-family: var(--ff-mono);
  font-size: 24px;
  font-weight: 600;
  color: var(--red-ink);
  flex-shrink: 0;
  transition: transform 200ms;
  line-height: 1;
}

.faq-item[open] .faq-toggle { transform: rotate(45deg); }

.faq-content {
  font-family: var(--ff-body);
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.7;
  margin: 0;
  padding: 0 0 24px;
  max-width: 60ch;
}

/* ── FINAL CTA ── */
.section--cta {
  --section-pattern: none;
  display: grid;
  gap: 32px;
  margin: 0 calc(-1 * var(--gutter));
  padding: 72px var(--gutter);
  text-align: left;
  background: var(--fg);
  color: var(--bg);
}

.section--cta .section-label {
  border-color: var(--bg);
}

.section--cta .section-label::before {
  color: var(--red);
}

@media (min-width: 768px) {
  .section--cta {
    padding-block: 88px;
  }
}

@media (min-width: 1200px) {
  .section--cta {
    grid-template-columns: minmax(160px, 0.35fr) minmax(420px, 1fr) auto;
    align-items: center;
    gap: clamp(32px, 4vw, 72px);
  }

  .section--cta .section-label { margin: 0; }
}

.cta-headline {
  font-family: var(--ff-display);
  font-size: clamp(52px, 6vw, 92px);
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 0.9;
  margin: 0;
  position: relative;
  z-index: 1;
}

.cta-btns {
  margin-top: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.section--cta .btn--outline {
  color: var(--bg);
  border-color: var(--bg);
}

.section--cta .btn--outline:hover {
  color: var(--fg);
  background: var(--bg);
}

/* ── SCROLL-TRIGGERED REVEALS ── */
@keyframes swissReveal {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-enter {
  opacity: 0;
  animation: swissReveal 360ms var(--ease-out) both;
}

.hero-enter--d1 { animation-delay: 40ms; }
.hero-enter--d2 { animation-delay: 80ms; }
.hero-enter--d3 { animation-delay: 120ms; }
.hero-enter--d4 { animation-delay: 160ms; }
.hero-enter--d5 { animation-delay: 200ms; }

.swiss-reveal {
  opacity: 0;
  animation: swissReveal 420ms var(--ease-out) both;
  animation-timeline: view();
  animation-range: entry 0% entry 24%;
}

.swiss-reveal--d1 { animation-delay: 50ms; }
.swiss-reveal--d2 { animation-delay: 100ms; }
.swiss-reveal--d3 { animation-delay: 150ms; }
.swiss-reveal--d4 { animation-delay: 200ms; }

@media (prefers-reduced-motion: reduce) {
  .hero-enter,
  .swiss-reveal {
    opacity: 1;
    animation: none;
    transform: none;
  }

  .btn,
  .trust-badge,
  .proof-link {
    transition-property: background-color, border-color, color;
  }

  .btn:active,
  .trust-badge:active,
  .proof-link:active {
    transform: none;
  }
}

/* ── RESPONSIVE ── */
@media (max-width: 374px) {
  .swiss { --gutter: 16px; }
  .swiss-inner { padding-bottom: 80px; }
}
</style>
