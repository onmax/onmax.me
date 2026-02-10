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
  title: 'Your Nuxt app should be your competitive edge. Not your bottleneck.',
  subhead:
    'I run 1–2 week sprints that fix performance, de-risk migrations, and ship features — with senior judgement, clean PRs, and measurable outcomes.',
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
  headline: 'Sound familiar?',
  items: [
    'Your Nuxt 2 app is on borrowed time — EOL hit June 2024, no security patches since.',
    'Core Web Vitals are dragging down SEO and conversions, but you don’t know where to start.',
    'AI-generated code shipped fast — now it’s unmaintainable and brittle.',
    'You need a senior Nuxt engineer for 2 weeks, not a 6-month hiring process.'
  ]
} as const

export const healthCheck = {
  title: 'Nuxt Health Check',
  durationLabel: '2–3 hours',
  bestFor: 'A fast, low-risk way to get clarity before committing to a full sprint.',
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
    bestFor:
      'Slow Nuxt apps, weak Core Web Vitals, SEO regressions, or teams who need a prioritized plan plus real implementation.',
    deliverables: [
      'Baseline: Lighthouse + CWV + key pages inventory',
      'Prioritized backlog: biggest wins first (perf, DX, SEO)',
      'Implement top fixes via PRs (focus on measurable wins)',
      'Before/after report + checklist to keep scores stable'
    ],
    priceLabel: 'From €6,900',
    priceFromEur: 6900,
    outcomeHint: 'Outcome target: 40–60% LCP improvement in 5 days (when feasible).',
    ctaLabel: 'Fix my performance →'
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
    priceFromEur: 4500,
    priceToEur: 6900,
    outcomeHint: 'Know exact cost + risk before writing a single line.',
    ctaLabel: 'Get my migration plan →'
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
    priceFromEur: 13900,
    outcomeHint: 'Senior velocity without the long-term hire.',
    ctaLabel: 'Ship my feature →'
  }
]

export const addon = 'Need 3–8 weeks total? Add weeks at €6,500/week (5 days), booked one week at a time.'

export const proofMetrics = [
  'Nuxt ecosystem contributor (Nuxt core + modules)',
  '4 years building production apps at Nimiq',
  'Sprints ship as PRs with measurable before/after'
] as const

export const testimonials = [
  {
    quote:
      'In one week, our CWV plan went from “we should look at this” to shipped fixes and a clear backlog. The PRs were clean and the results were measurable.',
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
      'I expected “consulting slides.” I got production-ready PRs, clear tradeoffs, and a handoff my team could maintain.',
    name: 'Alex R.',
    title: 'Founder',
    company: 'Acme (Startup)'
  }
] as const

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
  ]
} as const

export const aiSection = {
  headline: 'AI-augmented, human-verified',
  body:
    'I use AI to move faster on boilerplate, tests, and refactors. But every PR gets senior review — architecture decisions, security implications, and edge cases AI misses. You get speed with judgement.'
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
  },
  {
    label: 'Why not just hire a full-time dev?',
    content:
      'A senior Nuxt dev costs €6–8k/month fully loaded, plus months to onboard. A sprint gives you senior output in 5–10 days with zero onboarding overhead.'
  },
  {
    label: 'Can I see a sample deliverable?',
    content:
      'Yes — reach out and I’ll share an anonymized before/after report from a recent performance sprint.'
  }
]

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
