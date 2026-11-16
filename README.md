# onmax.me

Maxi García's site: the homepage, work, AI workflows, and the posts in `content/posts`. Nuxt 5 on Cloudflare Workers, with [ViteHub](https://vitehub.dev) for Content, Forms, Email and the Console.

- **Posts** are Markdown in `content/posts`. `modules/posts` renders them with [Comark](https://comark.dev) and [Comark UI](https://comark-ui.onmax.me) at build time, so the Worker ships HTML and no parser. Every page is prerendered, OG images too.
- **Editing** happens in the hosted [ViteHub Console](https://console.vitehub.dev). `server/content.ts` defines the `posts` collection, and a publish commits to `main`.
- **The request form** on `/ai-workflows` is `server/forms/workflow-review.ts`. A request lands in the Console's Forms inbox and is mailed through the `EMAIL` binding in `wrangler.json`.

## Develop

```bash
pnpm install
pnpm dev
```

CI runs `pnpm lint` and `pnpm typecheck`.

## Deploy

Workers Builds deploys every push to `main`.

Apply D1 migrations when `server/databases/default/migrations` has a new folder. `vitehub database generate` writes it, and `d1-migrations.json` keeps the names D1 already applied:

```bash
pnpm build
npx wrangler d1 migrations apply onmax-new-db --remote -c .output/server/wrangler.json
```

The Console signs each call to the Worker. Its public key is `VITEHUB_CONSOLE_KEY_CONSOLE_347EFC90` in the `vars` of `wrangler.json`.
