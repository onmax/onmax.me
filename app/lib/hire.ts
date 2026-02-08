export const availability = {
  label: 'Next opening',
  value: 'March 2026'
} as const

export const ctas = {
  calUrl: 'https://cal.com/onmax',
  email: 'hello@onmax.me'
} as const

export const hero = {
  title: 'Nuxt sprints that ship. Fast. Clean. Measurable.',
  subhead:
    'I help small teams fix performance, de-risk migrations, and ship features in 1–2 week sprints.',
  note: 'Also available in Spanish.'
} as const

export type HirePackage = {
  title: string
  durationLabel: string
  bestFor: string
  deliverables: string[]
  priceLabel: string
  ctaLabel: string
}

export const packages: HirePackage[] = [
  {
    title: 'Performance + SEO Sprint',
    durationLabel: '5 days',
    bestFor:
      'Slow Nuxt apps, weak Core Web Vitals, SEO regressions, or teams who need a prioritized plan plus real implementation.',
    deliverables: [
      'Baseline: Lighthouse + CWV + key pages inventory',
      'Prioritized backlog: biggest wins first (perf, DX, SEO)',
      'Implement top fixes via PRs (focus on measurable wins)',
      'Before/after report + checklist to keep scores stable'
    ],
    priceLabel: 'From €6,900',
    ctaLabel: 'Book a sprint fit call'
  },
  {
    title: 'Nuxt 2 → Nuxt 3 Assessment',
    durationLabel: '3–5 days',
    bestFor: 'Planning a migration without stalling shipping.',
    deliverables: [
      'Compatibility map: modules, build, SSR, routing, auth, content, i18n',
      'Risk register + recommended migration strategy (incremental vs rewrite)',
      'Timeline + costed plan (including “what we can do in 1 sprint”)',
      'Optional: first spike PR (one risky area proven in code)'
    ],
    priceLabel: 'From €4,500 (3d) to €6,900 (5d)',
    ctaLabel: 'Book a sprint fit call'
  },
  {
    title: 'Shipping Sprint',
    durationLabel: '10 days',
    bestFor: 'Shipping 1–2 meaningful features end-to-end with senior execution.',
    deliverables: [
      'Scope lock: sprint goal + acceptance criteria',
      'PRs that ship (feature, tests where they matter, deployment support)',
      'Release notes + handoff (what changed, how to extend)'
    ],
    priceLabel: 'From €13,900',
    ctaLabel: 'Book a sprint fit call'
  }
]

export const addon = 'Need 3–8 weeks total? Add weeks at €6,500/week (5 days), booked one week at a time.'

export const proof = {
  headline: 'Proof',
  items: [
    {
      title: 'Nuxt ecosystem contributions',
      description: 'PRs across Nuxt and the ecosystem.',
      href: 'https://prs.onmax.me',
      label: 'prs.onmax.me'
    },
    {
      title: 'Open source work',
      description: 'Modules, tools, and experiments.',
      href: 'https://github.com/onmax',
      label: 'github.com/onmax'
    },
    {
      title: 'Better Auth for Nuxt (contributor)',
      description: 'Authentication module work in the Nuxt ecosystem.',
      href: 'https://github.com/nuxt-modules/better-auth',
      label: 'nuxt-modules/better-auth'
    },
    {
      title: '4 years building at Nimiq',
      description: 'Long-term product engineering in a high-craft team.',
      href: 'https://nimiq.com',
      label: 'nimiq.com'
    },
    {
      title: 'Now: Quiver on Nuxt 4',
      description: 'Building fast on the latest Nuxt.',
      href: 'https://github.com/onmax/quiver',
      label: 'github.com/onmax/quiver'
    }
  ]
} as const

export const howIWork = {
  headline: 'How I work',
  steps: [
    { title: 'Scope in 25 minutes', body: 'Goals, constraints, success metrics.' },
    { title: 'Kickoff', body: 'Repo access, environments, tracking doc.' },
    { title: 'Ship in tight loops', body: 'Small PRs, daily async update.' },
    { title: 'Handoff', body: 'Report, next steps, optional add-on week.' }
  ],
  aiLine:
    'I use AI to move faster, but you still get senior judgement, clean PRs, and measurable outcomes.'
} as const

export const fit = {
  headline: 'Fit',
  good: [
    'Nuxt/Vue codebase, small team, you want momentum.',
    'You value measurable performance and clean DX.',
    'You can give feedback within 24 hours.'
  ],
  not: [
    'You want unlimited scope in a fixed sprint.',
    'No access to repo/staging, or you can’t deploy changes.',
    'Design-only work with no engineering ownership.'
  ]
} as const

export type HireFaqItem = { label: string, content: string }

export const faq: HireFaqItem[] = [
  {
    label: 'What do you need from us to start?',
    content:
      'A repo link, a short problem statement, and access to staging (or a reproducible local setup). If it’s a performance sprint, we’ll also pick 1–3 key pages and define what “better” means.'
  },
  {
    label: 'How do you communicate during the sprint?',
    content:
      'Async by default. You get a short daily update with what shipped, what’s next, and any blockers. We can do a brief sync mid-sprint if it helps.'
  },
  {
    label: 'Do you work with agencies?',
    content:
      'Yes. I’m comfortable joining an existing process and shipping PRs with clean handoff to your team.'
  },
  {
    label: 'Can you sign an NDA?',
    content: 'Yes. Share your NDA and I’ll review it before kickoff.'
  },
  {
    label: 'Do you do longer engagements?',
    content:
      'Yes. Most longer work starts with a sprint and then extends week-by-week if it’s a good fit.'
  },
  {
    label: 'What if we don’t finish in the sprint?',
    content:
      'We either add a week (fixed weekly add-on), or stop with a clean handoff: shipped PRs, an ordered backlog, and clear next steps.'
  }
]

export function getHireJsonLd() {
  const baseUrl = 'https://onmax.me'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        'name': 'Maxi Garcia',
        'url': baseUrl,
        'sameAs': ['https://github.com/onmax', 'https://prs.onmax.me']
      },
      {
        '@type': 'Service',
        'name': 'Nuxt sprints',
        'areaServed': 'Worldwide',
        'provider': { '@type': 'Person', 'name': 'Maxi Garcia' },
        'offers': packages.map(p => ({
          '@type': 'Offer',
          'name': `${p.title} (${p.durationLabel})`,
          'priceCurrency': 'EUR',
          'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'EUR' },
          'url': `${baseUrl}/hire`
        }))
      }
    ]
  }
}
