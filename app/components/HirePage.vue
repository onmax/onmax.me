<script setup lang="ts">
import {
  addon,
  availability,
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
  scarcity,
  testimonials,
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
        <NuxtImg
          src="/hire/hero.webp"
          alt=""
          aria-hidden="true"
          class="illust-hero"
          width="600"
          height="400"
          loading="eager"
          format="webp"
        />
        <header class="hero-header">
          <a
            href="/"
            class="logo"
          >onmax.me</a>
          <nav class="hero-nav">
            <a
              :href="`mailto:${ctas.email}`"
              class="nav-link"
              target="_blank"
              rel="noreferrer"
            >{{ ctas.email }}</a>
            <a
              :href="ctas.calUrl"
              class="nav-link nav-link--red"
              target="_blank"
              rel="noreferrer"
            >Book a call &nearr;</a>
          </nav>
        </header>
        <ClientOnly>
          <VueBitsBlurText
            :text="hero.title"
            tag="h1"
            class-name="hero-title"
            :delay="80"
            :step-duration="0.4"
          />
          <template #fallback>
            <h1 class="hero-title">
              {{ hero.title }}
            </h1>
          </template>
        </ClientOnly>
        <p class="hero-subhead swiss-reveal swiss-reveal--d1">
          {{ hero.subhead }}
        </p>
        <div class="hero-ctas swiss-reveal swiss-reveal--d2">
          <a
            :href="ctas.calUrl"
            class="btn btn--red"
            target="_blank"
            rel="noreferrer"
          >Book a sprint fit call &rarr;</a>
          <a
            :href="`mailto:${ctas.email}`"
            class="btn btn--outline"
            target="_blank"
            rel="noreferrer"
          >Email {{ ctas.email }}</a>
        </div>
        <p class="hero-note swiss-reveal swiss-reveal--d3">
          {{ hero.note }}
        </p>

        <!-- TRUST BAR -->
        <div class="trust-bar swiss-reveal swiss-reveal--d4">
          <component
            :is="item.href ? 'a' : 'span'"
            v-for="item in trustBar.items"
            :key="item.label"
            :href="item.href || undefined"
            class="trust-badge"
            :target="item.href ? '_blank' : undefined"
            :rel="item.href ? 'noreferrer' : undefined"
          >
            {{ item.label }}
          </component>
        </div>
      </section>

      <hr class="red-rule">

      <!-- 01 SOUND FAMILIAR -->
      <section class="section section--pain">
        <span
          class="watermark"
          aria-hidden="true"
        >01</span>
        <NuxtImg
          src="/hire/pain-points.webp"
          alt=""
          aria-hidden="true"
          class="illust-pain"
          width="400"
          height="300"
          loading="lazy"
          format="webp"
        />
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[0] }}
        </h2>
        <ul class="pain-list swiss-reveal swiss-reveal--d1">
          <li
            v-for="t in painPoints.items"
            :key="t"
            class="pain-item"
          >
            <span class="pain-mark">&times;</span>
            <span>{{ t }}</span>
          </li>
        </ul>
      </section>

      <hr class="red-rule">

      <!-- 02 WHAT YOU GET -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >02</span>
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
              class="btn btn--red btn--sm"
              target="_blank"
              rel="noreferrer"
            >{{ healthCheck.ctaLabel }} &nearr;</a>
          </div>
          <details class="health-strip-details">
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
          <VueBitsSpotlightCard
            v-for="(p, idx) in packages"
            :key="p.title"
            spotlight-color="oklch(0.63 0.28 29 / 0.08)"
            class="pkg-card swiss-reveal"
            :class="`swiss-reveal--d${idx + 1}`"
            :style="{ '--stagger': `${idx * 40}px` }"
          >
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
            <ul class="pkg-deliverables">
              <li
                v-for="d in p.deliverables"
                :key="d"
              >
                {{ d }}
              </li>
            </ul>
            <div class="pkg-footer">
              <span class="pkg-price">{{ p.priceLabel }}</span>
              <a
                :href="ctas.calUrl"
                class="btn btn--red"
                target="_blank"
                rel="noreferrer"
              >{{ p.ctaLabel }} &nearr;</a>
            </div>
          </VueBitsSpotlightCard>
        </div>

        <!-- Add-on footnote -->
        <p class="addon-footnote swiss-reveal">
          {{ addon }}
        </p>
      </section>

      <hr class="red-rule">

      <!-- 03 PROOF -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >03</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[2] }}
        </h2>
        <div class="proof-numbers swiss-reveal swiss-reveal--d1">
          <div
            v-for="n in proofNumbers"
            :key="n.label"
            class="proof-number-item"
          >
            <ClientOnly>
              <span class="proof-number-value">
                <VueBitsCountUp
                  :value="n.value"
                  :font-size="48"
                  :padding="0"
                  :gap="2"
                  :horizontal-padding="0"
                  :border-radius="0"
                  text-color="var(--fg)"
                  font-weight="400"
                  :gradient-height="0"
                />
                <span class="proof-number-suffix">{{ n.suffix }}</span>
              </span>
              <template #fallback>
                <span class="proof-number-value">{{ n.value }}{{ n.suffix }}</span>
              </template>
            </ClientOnly>
            <span class="proof-number-label">{{ n.label }}</span>
          </div>
        </div>

        <ul class="proof-metrics swiss-reveal swiss-reveal--d2">
          <li
            v-for="m in proofMetrics"
            :key="m"
          >
            <span class="proof-mark">+</span> {{ m }}
          </li>
        </ul>

        <div class="testimonials-grid swiss-reveal swiss-reveal--d2">
          <VueBitsGlareHover
            v-for="t in testimonials"
            :key="t.quote"
            class="testimonial-card"
            glare-color="#000000"
            :glare-opacity="0.04"
            border-radius="0"
          >
            <p class="testimonial-quote">
              "{{ t.quote }}"
            </p>
            <p class="testimonial-meta">
              {{ t.name }} · {{ t.title }} · {{ t.company }}
            </p>
          </VueBitsGlareHover>
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
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >04</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[3] }}
        </h2>
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
      </section>

      <hr class="red-rule">

      <!-- 05 FAQ -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >05</span>
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

      <!-- AVAILABILITY BANNER -->
      <div class="avail-banner swiss-reveal">
        <span class="avail-label">{{ availability.label }}</span>
        <ClientOnly>
          <VueBitsDecryptedText
            :text="availability.value"
            animate-on="view"
            :sequential="true"
            reveal-direction="start"
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            :speed="40"
            class="avail-value"
          />
          <template #fallback>
            <span class="avail-value">{{ availability.value }}</span>
          </template>
        </ClientOnly>
        <span class="avail-scarcity">{{ scarcity }}</span>
      </div>

      <!-- 06 CONTACT -->
      <section class="section section--cta">
        <span
          class="watermark"
          aria-hidden="true"
        >06</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[5] }}
        </h2>
        <NuxtImg
          src="/hire/contact.webp"
          alt=""
          aria-hidden="true"
          class="illust-contact swiss-reveal"
          width="500"
          height="350"
          loading="lazy"
          format="webp"
        />
        <p class="cta-headline swiss-reveal swiss-reveal--d1">
          {{ finalCta.headline }}
        </p>
        <div class="cta-btns swiss-reveal swiss-reveal--d2">
          <a
            :href="ctas.calUrl"
            class="btn btn--red btn--lg"
            target="_blank"
            rel="noreferrer"
          >{{ finalCta.ctaLabel }} &nearr;</a>
          <a
            :href="`mailto:${ctas.email}`"
            class="btn btn--outline btn--lg"
            target="_blank"
            rel="noreferrer"
          >Email {{ ctas.email }}</a>
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
  --rule: 4px;
  --border: 2px solid var(--fg);
  --max-w: 100%;

  color-scheme: light;
  min-height: 100dvh;
  background: var(--bg);
  color: var(--fg);
  font-family: var(--ff-body);
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* ── LAYOUT ── */
.swiss-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px 120px;
}

@media (min-width: 768px) {
  .swiss-inner { padding: 0 clamp(48px, 6vw, 96px) 160px; }
}

/* ── RED RULE ── */
.red-rule {
  border: none;
  height: var(--rule);
  background: var(--red);
  margin: 0 -24px;
}

@media (min-width: 768px) {
  .red-rule { margin: 0 calc(-1 * clamp(48px, 6vw, 96px)); }
}

/* ── WATERMARK NUMBERS ── */
.section,
.hero-section {
  position: relative;
  overflow: hidden;
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
}

.nav-link:hover { text-decoration: underline; }

.nav-link--red { color: var(--red); }

.hero-title {
  font-family: var(--ff-body);
  font-weight: 600;
  font-size: clamp(48px, 8vw, 96px);
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
  opacity: 0.5;
  position: relative;
  z-index: 1;
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
}

.trust-badge:hover {
  background: var(--fg);
  color: var(--bg);
}

/* ── SECTION ── */
.section {
  padding: 80px 0;
}

@media (min-width: 768px) {
  .section { padding: 140px 0; }
}

@media (min-width: 1200px) {
  .section { padding: 180px 0; }
}

.section-label {
  font-family: var(--ff-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(48px, 6vw, 80px);
  letter-spacing: 0.02em;
  line-height: 1;
  margin: 0 0 40px;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .section-label { margin-bottom: 72px; }
}

/* ── PAIN ── */
.pain-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
  max-width: 72ch;
  position: relative;
  z-index: 1;
}

.pain-item {
  display: flex;
  gap: 12px;
  align-items: baseline;
  font-family: var(--ff-body);
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.85;
}

.pain-mark {
  font-family: var(--ff-mono);
  font-weight: 600;
  color: var(--red);
  flex-shrink: 0;
  width: 20px;
  text-align: center;
}

/* ── HEALTH CHECK STRIP ── */
.health-strip {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--red);
  margin-bottom: 48px;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .health-strip {
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 32px;
    margin-bottom: 56px;
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
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin: 0;
}

.health-strip-desc {
  font-family: var(--ff-body);
  font-size: 15px;
  line-height: 1.5;
  opacity: 0.7;
  margin: 0;
}

.health-strip-right {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
}

.health-strip-price {
  font-family: var(--ff-display);
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.health-strip-duration {
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
}

.health-strip-details {
  grid-column: 1 / -1;
}

.health-strip-toggle {
  font-family: var(--ff-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  opacity: 0.5;
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
  opacity: 0.7;
}

.health-strip-deliverables li::before {
  content: '\2014';
  position: absolute;
  left: 0;
  color: var(--red);
}

/* ── PACKAGES ── */
.pkg-grid {
  display: grid;
  gap: 32px;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .pkg-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}

.pkg-card {
  border: var(--border);
  border-radius: 0;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--bg);
  position: relative;
}

@media (min-width: 768px) {
  .pkg-card {
    padding: 40px 32px;
    margin-top: var(--stagger, 0px);
  }
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
  font-size: 28px;
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
  opacity: 0.5;
}

.pkg-outcome {
  margin: 0;
  font-family: var(--ff-mono);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  border-left: var(--rule) solid var(--red);
  padding-left: 16px;
  color: var(--fg);
}

.pkg-best {
  font-family: var(--ff-body);
  font-size: 15px;
  line-height: 1.55;
  opacity: 0.7;
  margin: 0;
}

.pkg-deliverables {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  border-top: 1px solid rgba(0,0,0,0.1);
  padding-top: 20px;
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
  color: var(--red);
}

.pkg-footer {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pkg-price {
  font-family: var(--ff-display);
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* ── ADD-ON FOOTNOTE ── */
.addon-footnote {
  margin: 32px 0 0;
  font-family: var(--ff-mono);
  font-size: 13px;
  line-height: 1.6;
  opacity: 0.5;
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
  transition: background 150ms, color 150ms;
}

.btn--red {
  background: var(--red);
  color: #fff;
  border-color: var(--red);
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

/* ── PROOF NUMBERS (CountUp) ── */
.proof-numbers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
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
  display: flex;
  align-items: baseline;
}

.proof-number-suffix {
  font-family: var(--ff-display);
  font-size: 48px;
  line-height: 1;
}

.proof-number-label {
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
}

@media (max-width: 767px) {
  .proof-numbers { grid-template-columns: 1fr; gap: 20px; }
}

/* ── PROOF METRICS ── */
.proof-metrics {
  list-style: none;
  margin: 0 0 28px;
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
  color: var(--red);
  flex-shrink: 0;
  width: 20px;
  text-align: center;
}

/* ── TESTIMONIALS ── */
.testimonials-grid {
  display: grid;
  gap: 20px;
  margin-bottom: 28px;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .testimonials-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
}

.testimonial-card {
  border: var(--border);
  background: var(--bg);
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;
}

.testimonial-quote {
  margin: 0;
  font-family: var(--ff-body);
  font-size: 15px;
  line-height: 1.55;
  opacity: 0.85;
}

.testimonial-meta {
  margin: 0;
  font-family: var(--ff-mono);
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  opacity: 0.55;
}

/* ── PROOF LINK GRID ── */
.proof-grid {
  display: grid;
  gap: 2px;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .proof-grid { grid-template-columns: repeat(2, 1fr); }
}

.proof-link {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 28px 24px;
  border: var(--border);
  background: var(--bg);
  text-decoration: none;
  color: var(--fg);
  transition: background 150ms;
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
  color: var(--red);
  margin-top: auto;
}

/* ── STEPS ── */
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

.step:first-child { border-top: 1px solid rgba(0,0,0,0.1); }

.step-num {
  font-family: var(--ff-mono);
  font-size: 13px;
  font-weight: 600;
  opacity: 0.35;
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

.fit-mark--good { color: var(--red); }
.fit-mark--not { opacity: 0.35; }

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
  color: var(--red);
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

/* ── AVAILABILITY BANNER ── */
.avail-banner {
  background: var(--red);
  color: #fff;
  padding: 28px 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 12px 24px;
  text-align: center;
  margin: 0 -24px;
}

@media (min-width: 768px) {
  .avail-banner { margin: 0 calc(-1 * clamp(48px, 6vw, 96px)); padding: 32px 48px; }
}

.avail-label {
  font-family: var(--ff-mono);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.75;
}

.avail-value {
  font-family: var(--ff-display);
  font-size: clamp(32px, 5vw, 52px);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1;
}

.avail-scarcity {
  width: 100%;
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  opacity: 0.85;
}

/* ── FINAL CTA ── */
.section--cta {
  text-align: center;
  padding-top: 100px;
}

@media (min-width: 768px) {
  .section--cta { padding-top: 140px; }
}

@media (min-width: 1200px) {
  .section--cta { padding-top: 180px; }
}

.cta-headline {
  font-family: var(--ff-display);
  font-size: clamp(56px, 8vw, 120px);
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 0.9;
  margin: 0;
  position: relative;
  z-index: 1;
}

.cta-btns {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  position: relative;
  z-index: 1;
}

/* ── ILLUSTRATIONS ── */
.illust-hero {
  position: absolute;
  right: -2%;
  bottom: 10%;
  width: clamp(200px, 30vw, 500px);
  height: auto;
  opacity: 0.08;
  pointer-events: none;
  user-select: none;
  z-index: 0;
  mix-blend-mode: multiply;
}

@media (min-width: 768px) {
  .illust-hero { opacity: 0.1; }
}

@media (min-width: 1200px) {
  .illust-hero { opacity: 0.12; width: clamp(300px, 35vw, 600px); }
}

.section--pain { position: relative; }

.illust-pain {
  display: none;
}

@media (min-width: 768px) {
  .illust-pain {
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: clamp(160px, 18vw, 280px);
    height: auto;
    opacity: 0.08;
    pointer-events: none;
    user-select: none;
    z-index: 0;
    mix-blend-mode: multiply;
  }
}

.illust-contact {
  display: block;
  margin: 0 auto 32px;
  width: clamp(180px, 25vw, 360px);
  height: auto;
  opacity: 0.12;
  mix-blend-mode: multiply;
  position: relative;
  z-index: 1;
}

/* ── SCROLL-TRIGGERED REVEALS ── */
@keyframes swissReveal {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.swiss-reveal {
  opacity: 0;
  animation: swissReveal 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}

.swiss-reveal--d1 { animation-delay: 80ms; }
.swiss-reveal--d2 { animation-delay: 160ms; }
.swiss-reveal--d3 { animation-delay: 240ms; }
.swiss-reveal--d4 { animation-delay: 320ms; }

@media (prefers-reduced-motion: reduce) {
  .swiss-reveal {
    opacity: 1;
    animation: none;
    transform: none;
  }
}

/* ── RESPONSIVE ── */
@media (max-width: 374px) {
  .swiss-inner { padding: 0 16px 80px; }
  .hero-title { font-size: 40px; }
}
</style>
