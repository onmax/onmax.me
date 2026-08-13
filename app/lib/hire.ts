export const ctas = {
  calUrl: 'https://cal.com/onmax',
  email: 'hello@onmax.me'
} as const

export const hero = {
  title: 'Senior Nuxt, on demand.',
  subhead: 'I help agencies and technical teams upgrade, speed up, and ship Nuxt apps in focused 1–2 week sprints. Start with a €990 Nuxt Health Check or choose a fixed-scope sprint.',
  note: 'English and native Spanish.'
} as const

export const trustBar = {
  items: [
    { label: 'Nuxt Ecosystem Team member', href: 'https://nuxters.nuxt.com/onmax', logo: 'nuxt' },
    { label: '4 years building at Nimiq', href: 'https://nimiq.com', logo: 'nimiq' },
    { label: 'Async-first, PR-based delivery', href: null, logo: null },
    { label: 'Fixed-scope sprints, measurable outcomes', href: null, logo: null }
  ]
} as const

export const painPoints = {
  items: [
    {
      title: 'Nuxt 3 is now EOL.',
      body: 'Move to Nuxt 4 without stalling product work.'
    },
    {
      title: 'Core Web Vitals are red.',
      body: 'Your team has no spare cycle to isolate the bottleneck and ship the fix.'
    },
    {
      title: 'A client project is blocked.',
      body: 'Your senior engineers are already committed elsewhere.'
    },
    {
      title: 'You need a Nuxt specialist.',
      body: 'For one defined problem—not an open-ended contract or a long hiring cycle.'
    }
  ]
} as const

export const healthCheck = {
  title: 'Nuxt Health Check',
  durationLabel: '2–3 hours',
  bestFor: 'A fast, independent assessment when you need a clear fix or upgrade plan before committing to a sprint.',
  deliverables: [
    'Repository and runtime audit across performance, SSR, SEO, and developer experience',
    'The five highest-impact fixes, ranked by effort and value',
    '30-minute walkthrough call or recorded video',
    'A scoped recommendation: fix it in-house, book one sprint, or plan a larger upgrade'
  ],
  priceLabel: '€990',
  priceFromEur: 990,
  ctaLabel: 'Request a Nuxt Health Check',
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
    outcomeHint: 'You get before/after LCP measurements and the highest-impact fixes that fit the sprint.',
    ctaLabel: 'Fix my performance'
  },
  {
    title: 'Nuxt 2/3 → Nuxt 4 Assessment',
    durationLabel: '3–5 days',
    bestFor: 'For teams that need a safe path to a supported Nuxt version without stalling product work.',
    deliverables: [
      'Compatibility map: modules, build, SSR, routing, auth, content, i18n',
      'Risk register + recommended migration strategy (incremental vs rewrite)',
      'Phased plan with effort ranges, dependencies, and a one-sprint starting point',
      'Optional: first spike PR (one risky area proven in code)'
    ],
    priceLabel: 'From €4,500 (3d) to €6,900 (5d)',
    priceFromEur: 4500,
    priceToEur: 6900,
    outcomeHint: 'Leave with a scoped migration plan and known risks before implementation starts.',
    ctaLabel: 'Get my migration plan'
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
    outcomeHint: 'Get a defined feature to review-ready PRs without adding a permanent hire.',
    ctaLabel: 'Ship my feature'
  }
]

export const proofNumbers = [
  { value: 680, suffix: '+', label: 'PRs merged', href: 'https://prs.onmax.me' },
  { value: 90, suffix: '+', label: 'repos contributed to' },
  { value: 4, suffix: ' yrs', label: 'building at Nimiq' }
] as const

export const addon = 'Need more than one sprint? Add weeks at €6,500/week, booked one at a time.'

export const proofMetrics = [
  'Nuxt Ecosystem Team member and contributor',
  '4 years building production apps at Nimiq',
  'Early contributor to Reka UI’s Vue component foundations'
] as const

export const testimonial = {
  quote:
    'Working with Maxi is refreshingly straightforward. You explain the problem once, and he turns it into a clean, well-thought-out solution — fast. No unnecessary back-and-forth, just clear thinking and measurable results.',
  name: 'Max B.',
  role: 'Ecosystem Development · Nimiq',
  image: '/hire/max-burger.jpg'
} as const

export const proof = {
  items: [
    {
      title: 'Nuxt Ecosystem Team',
      description: 'Official Nuxt community profile and contribution record.',
      href: 'https://nuxters.nuxt.com/onmax',
      label: 'nuxters.nuxt.com/onmax'
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
      title: 'Building ViteHub',
      description: 'Open-source agents and server primitives for Vite and Nuxt.',
      href: 'https://vitehub.dev',
      label: 'vitehub.dev'
    },
    {
      title: 'DALION core team',
      description: 'Recognized as part of DALION’s core team when the project entered Spain’s financial sandbox.',
      href: 'https://es.linkedin.com/posts/msalgadoi_dalion-alastriaid-activity-6800377250526167040-aK6A',
      label: 'Public LinkedIn post'
    },
    {
      title: 'Acknowledged by LACChain',
      description: 'Credited as a Blockchain Developer at Inetum in the official LACChain framework.',
      href: 'https://lacnet.com/wp-content/uploads/2025/01/LACChain-Framework-for-Permissioned-Public-Blockchain-Networks-From-Blockchain-Technology-to-Blockchain-Networks.pdf',
      label: 'LACChain framework (PDF)'
    },
    {
      title: 'Built and launched Cactus',
      description: 'A paid native macOS product with a Nuxt marketing site, owned from product to delivery and support.',
      href: 'https://usecactus.app',
      label: 'usecactus.app'
    }
  ]
} as const

export const howIWork = {
  steps: [
    { title: 'Scope call (25 min)', body: 'We define goals, constraints, and what "done" looks like.' },
    { title: 'Kickoff (day 1)', body: 'Repo access, environments, tracking doc. I start shipping.' },
    { title: 'Daily async updates', body: 'Small, review-ready PRs with clear progress against the agreed outcome.' },
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
      'Yes. I fit into your existing delivery process and hand over review-ready PRs, written tradeoffs, and clear next steps your team can own.'
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
    label: 'Can we start with the Health Check?',
    content:
      'Yes. It stands alone, so your team leaves with a prioritized plan even if we do no further work. If a sprint makes sense, the findings become the starting scope.'
  }
]

export const finalCta = {
  headline: 'Start with a clear Nuxt plan for €990.'
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
