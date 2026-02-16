export const availability = {
  label: 'Next opening',
  value: 'March 2026'
} as const

export const scarcity = 'I take 2–3 sprint clients per month to stay focused.' as const

export const ctas = {
  calUrl: 'https://cal.com/onmax',
  email: 'hello@onmax.me'
} as const

export const hero = {
  title: 'Senior Nuxt, on demand.',
  subhead: 'I help you ship a faster Nuxt app in 1–2 week sprints. Measurable results, zero onboarding.',
  note: 'Native Spanish speaker.'
} as const

export const trustBar = {
  items: [
    { label: 'Nuxt ecosystem contributor', href: 'https://prs.onmax.me' },
    { label: '4 years building at Nimiq', href: 'https://nimiq.com' },
    { label: 'Async-first, PR-based delivery', href: null },
    { label: 'Fixed-scope sprints, measurable outcomes', href: null }
  ]
} as const

export const painPoints = {
  items: [
    'Your Nuxt 2 app has no security patches since June 2024. Every month you wait, the migration gets harder.',
    'Core Web Vitals are red. You know it costs conversions, but nobody on the team owns performance.',
    'AI-generated code shipped fast. Now every PR breaks something and reviews take twice as long.',
    'You need a senior Nuxt dev for 2 weeks, not a 6-month hiring pipeline.'
  ]
} as const

export const healthCheck = {
  title: 'Nuxt Health Check',
  durationLabel: '2–3 hours',
  bestFor: 'Get a prioritized fix list before committing to a sprint.',
  deliverables: [
    'Quick repo + runtime audit (perf, DX, SSR, SEO basics)',
    'Top 5 highest-leverage fixes (ordered)',
    '30-min walkthrough call or Loom-style video',
    'Follow-up plan: what to do in 1 sprint vs 2–4 weeks'
  ],
  priceLabel: '€990',
  priceFromEur: 990,
  ctaLabel: 'Get my health check →',
  get ctaHref() {
    return `mailto:${ctas.email}?subject=${encodeURIComponent('Nuxt Health Check inquiry')}`
  }
} as const

export type HirePackage = {
  title: string
  durationLabel: string
  bestFor: string
  deliverables: string[]
  priceLabel: string
  priceFromEur: number
  priceToEur?: number
  outcomeHint: string
  ctaLabel: string
}

export const packages: HirePackage[] = [
  {
    title: 'Performance + SEO Sprint',
    durationLabel: '5 days',
    bestFor: 'For slow Nuxt apps bleeding conversions and search rankings.',
    deliverables: [
      'Baseline: Lighthouse + CWV + key pages inventory',
      'Prioritized backlog: biggest wins first (perf, DX, SEO)',
      'Implement top fixes via PRs (focus on measurable wins)',
      'Before/after report + checklist to keep scores stable'
    ],
    priceLabel: 'From €6,900',
    priceFromEur: 6900,
    outcomeHint: '40–60% LCP improvement in 5 days.',
    ctaLabel: 'Fix my performance →'
  },
  {
    title: 'Nuxt 2 → Nuxt 3 Assessment',
    durationLabel: '3–5 days',
    bestFor: 'For teams planning a migration without stalling shipping.',
    deliverables: [
      'Compatibility map: modules, build, SSR, routing, auth, content, i18n',
      'Risk register + recommended migration strategy (incremental vs rewrite)',
      'Timeline + costed plan (including "what we can do in 1 sprint")',
      'Optional: first spike PR (one risky area proven in code)'
    ],
    priceLabel: 'From €4,500 (3d) to €6,900 (5d)',
    priceFromEur: 4500,
    priceToEur: 6900,
    outcomeHint: 'Know exact cost + risk before writing a single line.',
    ctaLabel: 'Get my migration plan →'
  },
  {
    title: 'Shipping Sprint',
    durationLabel: '10 days',
    bestFor: 'For shipping 1–2 meaningful features end-to-end with senior execution.',
    deliverables: [
      'Scope lock: sprint goal + acceptance criteria',
      'PRs that ship (feature, tests where they matter, deployment support)',
      'Release notes + handoff (what changed, how to extend)'
    ],
    priceLabel: 'From €13,900',
    priceFromEur: 13900,
    outcomeHint: 'Senior velocity without the long-term hire.',
    ctaLabel: 'Ship my feature →'
  }
]

export const proofNumbers = [
  { value: 680, suffix: '+', label: 'PRs merged' },
  { value: 90, suffix: '+', label: 'repos contributed to' },
  { value: 4, suffix: ' yrs', label: 'building at Nimiq' }
] as const

export const addon = 'Need more than one sprint? Add weeks at €6,500/week, booked one at a time.'

export const proofMetrics = [
  'Nuxt ecosystem contributor (Nuxt core + modules)',
  '4 years building production apps at Nimiq',
  'Sprints ship as PRs with measurable before/after'
] as const

export const testimonials = [
  {
    quote:
      'In one week, our CWV plan went from "we should look at this" to shipped fixes and a clear backlog. The PRs were clean and the results were measurable.',
    name: 'Jordan K.',
    title: 'CTO',
    company: 'Northwind (B2B SaaS)'
  },
  {
    quote:
      'The migration assessment saved us weeks. We got a realistic plan, a risk register, and a strategy that let us keep shipping instead of stalling.',
    name: 'Samira D.',
    title: 'Engineering Manager',
    company: 'Contoso (Agency)'
  },
  {
    quote:
      'I expected "consulting slides." I got production-ready PRs, clear tradeoffs, and a handoff my team could maintain.',
    name: 'Alex R.',
    title: 'Founder',
    company: 'Acme (Startup)'
  }
] as const

export const proof = {
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
  steps: [
    { title: 'Scope call (25 min)', body: 'We define goals, constraints, and what "done" looks like.' },
    { title: 'Kickoff (day 1)', body: 'Repo access, environments, tracking doc. I start shipping.' },
    { title: 'Daily async updates', body: 'Small PRs, clear progress. AI speeds up boilerplate; I review every line.' },
    { title: 'Handoff', body: 'Before/after report, ordered backlog, optional add-on week.' }
  ]
} as const

export const fit = {
  good: [
    'Nuxt/Vue codebase, small team, need momentum.',
    'You value measurable perf and clean DX.',
    'You can give feedback within 24 hours.'
  ],
  not: [
    'Unlimited scope in a fixed sprint.',
    'No repo/staging access, can\'t deploy changes.',
    'Design-only work with no engineering ownership.'
  ]
} as const

export type HireFaqItem = { label: string, content: string }

export const faq: HireFaqItem[] = [
  {
    label: 'What do you need from us to start?',
    content:
      'A repo link, a short problem statement, and access to staging (or a reproducible local setup). If it\'s a performance sprint, we\'ll also pick 1–3 key pages and define what "better" means.'
  },
  {
    label: 'Do you work with agencies?',
    content:
      'Yes. I\'m comfortable joining an existing process and shipping PRs with clean handoff to your team.'
  },
  {
    label: 'Can you sign an NDA?',
    content: 'Yes. Share your NDA and I\'ll review it before kickoff.'
  },
  {
    label: 'What if we don\'t finish in the sprint?',
    content:
      'We either add a week (fixed weekly add-on), or stop with a clean handoff: shipped PRs, an ordered backlog, and clear next steps.'
  },
  {
    label: 'Why not just hire a full-time dev?',
    content:
      'A senior Nuxt dev costs €6–8k/month fully loaded, plus months to onboard. A sprint gives you senior output in 5–10 days with zero onboarding overhead.'
  }
]

export const finalCta = {
  headline: 'Ship this month.',
  ctaLabel: 'Book a 25-min scope call'
} as const

export function getHireJsonLd() {
  const baseUrl = 'https://onmax.me'

  const offers = [
    ...packages.map(p => ({
      '@type': 'Offer',
      'name': `${p.title} (${p.durationLabel})`,
      'priceCurrency': 'EUR',
      'priceSpecification': p.priceToEur
        ? {
            '@type': 'UnitPriceSpecification',
            'priceCurrency': 'EUR',
            'minPrice': p.priceFromEur,
            'maxPrice': p.priceToEur
          }
        : {
            '@type': 'UnitPriceSpecification',
            'priceCurrency': 'EUR',
            'price': p.priceFromEur
          },
      'url': `${baseUrl}/hire`
    })),
    {
      '@type': 'Offer',
      'name': `${healthCheck.title} (${healthCheck.durationLabel})`,
      'priceCurrency': 'EUR',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'priceCurrency': 'EUR',
        'price': healthCheck.priceFromEur
      },
      'url': `${baseUrl}/hire`
    }
  ]

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
        'offers': offers
      }
    ]
  }
}

export function getHireFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faq.map(item => ({
      '@type': 'Question',
      'name': item.label,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.content
      }
    }))
  }
}
