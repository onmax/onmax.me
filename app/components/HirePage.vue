<script setup lang="ts">
import {
  addon,
  aiSection,
  availability,
  ctas,
  faq,
  fit,
  healthCheck,
  hero,
  painPoints,
  proof,
  proofMetrics,
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

const proofMarqueeItems = computed(() => [...proof.items, ...proof.items])
const sectionLabels = ['Sound familiar?', 'Health Check', 'Packages', 'Add-on', 'Proof', 'Process', 'AI', 'Fit', 'FAQ', 'Contact']
</script>

<template>
  <main class="swiss">
    <div class="swiss-inner">
      <!-- HERO -->
      <section class="hero-section">
        <span
          class="watermark"
          aria-hidden="true"
        >00</span>
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
        <h1 class="hero-title swiss-reveal">
          {{ hero.title }}
        </h1>
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
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >01</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[0] }}
        </h2>
        <p class="section-lede swiss-reveal swiss-reveal--d1">
          {{ painPoints.headline }}
        </p>
        <ul class="pain-list swiss-reveal swiss-reveal--d2">
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

      <!-- 02 HEALTH CHECK -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >02</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[1] }}
        </h2>
        <article class="health-card swiss-reveal swiss-reveal--d1">
          <div class="health-top">
            <h3 class="health-title">
              {{ healthCheck.title }}
            </h3>
            <span class="health-duration">{{ healthCheck.durationLabel }}</span>
          </div>
          <p class="health-best">
            {{ healthCheck.bestFor }}
          </p>
          <ul class="health-deliverables">
            <li
              v-for="d in healthCheck.deliverables"
              :key="d"
            >
              {{ d }}
            </li>
          </ul>
          <div class="health-footer">
            <span class="health-price">{{ healthCheck.priceLabel }}</span>
            <a
              :href="healthCheck.ctaHref"
              class="btn btn--red"
              target="_blank"
              rel="noreferrer"
            >{{ healthCheck.ctaLabel }} &nearr;</a>
          </div>
        </article>
      </section>

      <hr class="red-rule">

      <!-- 03 PACKAGES -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >03</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[2] }}
        </h2>
        <div class="pkg-grid">
          <article
            v-for="(p, idx) in packages"
            :key="p.title"
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
            <p class="pkg-outcome">
              {{ p.outcomeHint }}
            </p>
            <div class="pkg-footer">
              <span class="pkg-price">{{ p.priceLabel }}</span>
              <a
                :href="ctas.calUrl"
                class="btn btn--red"
                target="_blank"
                rel="noreferrer"
              >{{ p.ctaLabel }} &nearr;</a>
            </div>
          </article>
        </div>
      </section>

      <hr class="red-rule">

      <!-- 04 ADD-ON -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >04</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[3] }}
        </h2>
        <p class="addon-text swiss-reveal swiss-reveal--d1">
          {{ addon }}
        </p>
      </section>

      <hr class="red-rule">

      <!-- 05 PROOF -->
      <section class="section section--proof">
        <span
          class="watermark"
          aria-hidden="true"
        >05</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[4] }}
        </h2>
        <ul class="proof-metrics swiss-reveal swiss-reveal--d1">
          <li
            v-for="m in proofMetrics"
            :key="m"
          >
            <span class="proof-mark">+</span> {{ m }}
          </li>
        </ul>

        <div class="testimonials-grid swiss-reveal swiss-reveal--d2">
          <article
            v-for="t in testimonials"
            :key="t.quote"
            class="testimonial-card"
          >
            <p class="testimonial-quote">
              “{{ t.quote }}”
            </p>
            <p class="testimonial-meta">
              {{ t.name }} · {{ t.title }} · {{ t.company }}
            </p>
          </article>
        </div>

        <div class="marquee-wrap swiss-reveal swiss-reveal--d3">
          <div class="marquee-track">
            <a
              v-for="(item, idx) in proofMarqueeItems"
              :key="`${item.href}--${idx}`"
              :href="item.href"
              class="marquee-item"
              target="_blank"
              rel="noreferrer"
            >
              <span class="marquee-title">{{ item.title }}</span>
              <span class="marquee-desc">{{ item.description }}</span>
              <span class="marquee-link">{{ item.label }} &nearr;</span>
            </a>
          </div>
        </div>
      </section>

      <hr class="red-rule">

      <!-- 06 PROCESS -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >06</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[5] }}
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
      </section>

      <hr class="red-rule">

      <!-- 07 AI -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >07</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[6] }}
        </h2>
        <h3 class="ai-heading swiss-reveal swiss-reveal--d1">
          {{ aiSection.headline }}
        </h3>
        <p class="ai-body swiss-reveal swiss-reveal--d2">
          {{ aiSection.body }}
        </p>
      </section>

      <hr class="red-rule">

      <!-- 08 FIT -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >08</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[7] }}
        </h2>
        <div class="fit-grid">
          <div class="fit-col swiss-reveal swiss-reveal--d1">
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
          <div class="fit-col swiss-reveal swiss-reveal--d2">
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
      </section>

      <hr class="red-rule">

      <!-- 09 FAQ -->
      <section class="section">
        <span
          class="watermark"
          aria-hidden="true"
        >09</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[8] }}
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

      <hr class="red-rule">

      <!-- AVAILABILITY BANNER -->
      <div class="avail-banner swiss-reveal">
        <span class="avail-label">{{ availability.label }}</span>
        <span class="avail-value">{{ availability.value }}</span>
        <span class="avail-scarcity">{{ scarcity }}</span>
      </div>

      <!-- 07 FINAL CTA -->
      <section class="section section--cta">
        <span
          class="watermark"
          aria-hidden="true"
        >10</span>
        <h2 class="section-label swiss-reveal">
          {{ sectionLabels[9] }}
        </h2>
        <p class="cta-headline swiss-reveal swiss-reveal--d1">
          Ready to ship?
        </p>
        <div class="cta-btns swiss-reveal swiss-reveal--d2">
          <a
            :href="ctas.calUrl"
            class="btn btn--red btn--lg"
            target="_blank"
            rel="noreferrer"
          >Book on Cal.com &nearr;</a>
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
  .swiss-inner { padding: 0 48px 160px; }
}

/* ── RED RULE ── */
.red-rule {
  border: none;
  height: var(--rule);
  background: var(--red);
  margin: 0 -24px;
}

@media (min-width: 768px) {
  .red-rule { margin: 0 -48px; }
}

/* ── WATERMARK NUMBERS ── */
.section,
.hero-section {
  position: relative;
  overflow: hidden;
}

.section--proof {
  overflow: visible;
  /* Clip only on Y (prevent watermark crossing the red rule) while allowing full-bleed X. */
  -webkit-clip-path: inset(0 -100vw 0 -100vw);
  clip-path: inset(0 -100vw 0 -100vw);
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
  .hero-section { padding: 64px 0 96px; }
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
  .hero-header { margin-bottom: 80px; }
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
  margin-top: 32px;
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
  margin-top: 28px;
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
  .section { padding: 100px 0; }
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
  .section-label { margin-bottom: 56px; }
}

/* ── SECTION LEDE ── */
.section-lede {
  font-family: var(--ff-body);
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.55;
  max-width: 60ch;
  margin: 0 0 18px;
  position: relative;
  z-index: 1;
  opacity: 0.9;
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
    gap: 24px;
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
  .pkg-card { margin-top: var(--stagger, 0px); }
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

.pkg-outcome {
  margin: 0;
  font-family: var(--ff-mono);
  font-size: 12px;
  line-height: 1.6;
  opacity: 0.6;
  border-left: var(--rule) solid var(--red);
  padding-left: 16px;
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

/* ── ADDON ── */
.addon-text {
  font-family: var(--ff-body);
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.55;
  max-width: 60ch;
  position: relative;
  z-index: 1;
}

/* ── HEALTH CHECK ── */
.health-card {
  border: 2px solid var(--red);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: var(--bg);
  position: relative;
  z-index: 1;
}

.health-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.health-title {
  font-family: var(--ff-display);
  font-weight: 400;
  font-size: 34px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin: 0;
}

.health-duration {
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  opacity: 0.6;
}

.health-best {
  font-family: var(--ff-body);
  font-size: 15px;
  line-height: 1.55;
  opacity: 0.75;
  margin: 0;
  max-width: 68ch;
}

.health-deliverables {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  border-top: 1px solid rgba(0,0,0,0.1);
  padding-top: 18px;
}

.health-deliverables li {
  font-family: var(--ff-body);
  font-size: 14px;
  line-height: 1.5;
  padding-left: 20px;
  position: relative;
}

.health-deliverables li::before {
  content: '\2014';
  position: absolute;
  left: 0;
  color: var(--red);
}

.health-footer {
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-top: 1px solid rgba(0,0,0,0.1);
  padding-top: 18px;
}

.health-price {
  font-family: var(--ff-display);
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* ── MARQUEE ── */
.marquee-wrap {
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin: 0 -24px;
}

@media (min-width: 768px) {
  .marquee-wrap { margin: 0 -48px; }
}

.marquee-track {
  display: flex;
  gap: 2px;
  width: max-content;
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 28px 36px;
  border: var(--border);
  background: var(--bg);
  text-decoration: none;
  color: var(--fg);
  min-width: 280px;
  transition: background 150ms;
}

.marquee-item:hover {
  background: var(--fg);
  color: var(--bg);
}

.marquee-item:hover .marquee-link { color: var(--bg); opacity: 0.6; }

.marquee-title {
  font-family: var(--ff-display);
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.marquee-desc {
  font-family: var(--ff-body);
  font-size: 14px;
  opacity: 0.6;
}

.marquee-link {
  font-family: var(--ff-mono);
  font-size: 12px;
  color: var(--red);
  margin-top: auto;
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

.ai-line {
  margin-top: 32px;
  font-family: var(--ff-mono);
  font-size: 13px;
  line-height: 1.6;
  opacity: 0.45;
  border-left: var(--rule) solid var(--red);
  padding-left: 20px;
  position: relative;
  z-index: 1;
}

/* ── AI SECTION ── */
.ai-heading {
  font-family: var(--ff-display);
  font-weight: 400;
  font-size: clamp(28px, 4vw, 44px);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin: 0 0 16px;
  position: relative;
  z-index: 1;
}

.ai-body {
  margin: 0;
  font-family: var(--ff-body);
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.55;
  max-width: 70ch;
  opacity: 0.75;
  position: relative;
  z-index: 1;
}

/* ── FIT ── */
.fit-grid {
  display: grid;
  gap: 32px;
  position: relative;
  z-index: 1;
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
  .avail-banner { margin: 0 -48px; padding: 32px 48px; }
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
  .section--cta { padding-top: 120px; }
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

  .marquee-track {
    animation: none;
  }
}

/* ── RESPONSIVE ── */
@media (max-width: 374px) {
  .swiss-inner { padding: 0 16px 80px; }
  .hero-title { font-size: 40px; }
}
</style>
