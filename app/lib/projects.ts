export const featuredProjects = [
  {
    title: 'Quiver',
    description: 'Forecasting and inventory planning software that turns complex operational data into usable decisions.',
    href: 'https://www.quiver.dk',
    detail: 'Product engineering',
    logo: '/logos/quiver.svg',
    icon: 'i-lucide-chart-spline'
  },
  {
    title: 'Nuxt ecosystem',
    description: 'Framework, module, UI, content, tooling, and documentation work across the official Nuxt organizations.',
    href: 'https://nuxters.nuxt.com/onmax',
    detail: '250+ merged PRs',
    logo: null,
    icon: 'i-simple-icons-nuxtdotjs'
  },
  {
    title: 'Better Auth for Nuxt',
    description: 'A Nuxt-native integration for Better Auth, including route protection and SSR-safe sessions.',
    href: 'https://better-auth.nuxt.dev',
    detail: 'Module maintainer',
    logo: null,
    icon: 'i-simple-icons-betterauth'
  },
  {
    title: 'ViteHub',
    description: 'Portable agents and server primitives for Vite applications, composed through one plugin.',
    href: 'https://vitehub.dev',
    detail: 'Creator',
    logo: '/logos/vitehub.svg',
    icon: 'i-simple-icons-vite'
  },
  {
    title: 'Nimiq',
    description: 'Production products and shared frontend foundations built across four years in the Nimiq ecosystem.',
    href: 'https://nimiq.com',
    detail: 'Frontend engineering',
    logo: '/logos/nimiq.svg',
    icon: 'i-lucide-orbit'
  },
  {
    title: 'Cactus',
    description: 'A native macOS focus product, designed and shipped from system enforcement through customer experience.',
    href: 'https://usecactus.app',
    detail: 'Independent product',
    logo: '/logos/cactus.svg',
    icon: 'i-lucide-focus'
  }
] as const

export const projectGroups = [
  {
    title: 'Nuxt modules',
    icon: 'i-simple-icons-nuxtdotjs',
    projects: [
      {
        title: 'Nuxt Safe Runtime Config',
        description: 'Standard Schema validation for Nuxt runtime configuration.',
        href: 'https://github.com/onmax/nuxt-safe-runtime-config'
      },
      {
        title: 'Nuxt Convex',
        description: 'A Nuxt module for integrating Convex applications.',
        href: 'https://github.com/onmax/nuxt-convex'
      },
      {
        title: 'Nuxt Formisch',
        description: 'A schema-based, headless Formisch integration for Nuxt.',
        href: 'https://github.com/onmax/nuxt-formisch'
      },
      {
        title: 'NuxtHub Better Auth Starter',
        description: 'A practical NuxtHub and Better Auth starter with OAuth.',
        href: 'https://github.com/onmax/nuxthub-better-auth-starter'
      }
    ]
  },
  {
    title: 'Agents and developer tools',
    icon: 'i-lucide-bot',
    projects: [
      {
        title: 'Nuxt Skill Hub',
        description: 'Best practices and module guidance for AI coding agents working with Nuxt.',
        href: 'https://github.com/onmax/nuxt-skill-hub'
      },
      {
        title: 'Vite Doctor',
        description: 'Diagnostics for catching common problems in Vite projects.',
        href: 'https://github.com/onmax/vite-doctor'
      },
      {
        title: 'DB Compat',
        description: 'A compatibility matrix for SQL behavior across database drivers.',
        href: 'https://github.com/onmax/db-compat'
      }
    ]
  },
  {
    title: 'Nimiq libraries',
    icon: 'i-lucide-orbit',
    projects: [
      {
        title: 'Albatross RPC Client',
        description: 'A fully typed Nimiq RPC client for TypeScript.',
        href: 'https://github.com/onmax/albatross-rpc-client-ts'
      },
      {
        title: 'Nimiq Identicons',
        description: 'The modern implementation of Nimiq identicons.',
        href: 'https://github.com/onmax/nimiq-identicons'
      },
      {
        title: 'Nimiq Awesome',
        description: 'A curated directory of applications and libraries in the ecosystem.',
        href: 'https://github.com/onmax/nimiq-awesome'
      },
      {
        title: 'Nimiq MCP',
        description: 'An MCP server for interacting with the Nimiq blockchain.',
        href: 'https://github.com/onmax/nimiq-mcp'
      }
    ]
  }
] as const
