---
title: 'How I Use Claude Code'
description: 'A comprehensive system for AI-assisted development: philosophy, skills, workflows, and real-world results'
publishedAt: 2026-01-26
---

Most developers treat AI tools like advanced autocomplete or a magic wand. I treat them as a system component that requires engineering. By replacing unstructured "chats" with a rigorous workflow of constraints, context injection, and specialized processes, I have moved from sporadic assistance to a predictable pipeline.

Here is the system I use to turn LLM capabilities into reliable software engineering: from high-level philosophy to specific configurations, including how I use voice input to inject complex context faster than I can type.

## Philosophy: Debug Your Setup, Not the AI

AI writes 100% of my code. For most developers, it should be at least 90%. The implication is clear: our energy belongs in testing and verification, not in typing syntax. The bottleneck has shifted from "can I write this?" to "does this actually work?"

When Claude failed to deliver what I expected, my first instinct used to be frustration. Now, I treat it like debugging a junior engineer's environment: the problem is rarely their raw capability. It is usually missing context or broken tooling.

**Start with native Claude Code.** I avoid complex plugins. Opus 4.5 can handle virtually any software engineering task when given the right environment. The question isn't "Can the AI do this?" but "Have I given it what it needs?"

When something goes wrong, I run through a debugging checklist:

1.  **Missing CLI tools?** Does Claude have access to standard tools like `gh` (GitHub), `vercel`, and my package manager aliases (like `ni` for install or `nr` for run, using `@antfu/ni`)? CLI tools are the backbone—they're battle-tested, well-documented, and just work.
2.  **Missing CLAUDE.md constraints?** Did I forget to specify project conventions or safety rules?
3.  **Missing domain skills?** Does Claude know the specific framework patterns for this codebase?
4.  **Missing MCP?** Only as a last resort—when no CLI exists for the task (I only use Figma MCP for design work).

This mindset shift, from "the AI is broken" to "what am I missing?", transformed my productivity. Like any tool, Claude reflects the quality of its inputs.

## The Foundation: CLAUDE.md

Every session loads my global configuration from `~/.claude/CLAUDE.md`. Think of this file as the employment contract between me and Claude, prioritizing consistency and safety over flexibility. It forces the AI to adhere to my specific command-line aliases and git habits.

```markdown
In all interactions and commit messages, be extremely concise and sacrifice grammar for the sake of clarity.

# Bash commands
- Prefer pnpm over npm or yarn
  - If the project has a package-lock.json, use npm
  - If the project has a yarn.lock, use yarn
- Aliases that automatically use the right package manager:
  - `ni` for installing packages
  - `b` for running build scripts
  - `nr <script-name>` to run any other build script
  - `lf` to run lint fix
  - `tp` to run typecheck

- Commit messages: one line, less than 50 chars
- Everytime you need to interact with a repo use the gh cli

# CLI (prefer CLI over MCP)
- Primary GitHub interaction: `gh` cli
- Primary Vercel interaction: `vercel` cli
- NuxtHub CLI is DEPRECATED. Deployments happen via git push

# Subagents
- Always use `model: "opus"` when spawning subagents via Task tool

# Project Folders
- `~/repros/` - Bug reproductions (git repo)
- `~/templates/` - Starter templates (antfu, atinux, nuxt-ui, supersaas)
- `~/references/` - Source code refs (better-auth, h3, nitro, nuxt-core, vitest)
- `~/nuxt/skills/` - Claude skills for Nuxt ecosystem
```

## Giving Source Code to the AI

Skills provide general knowledge, but sometimes Claude needs access to raw source code. I maintain dedicated folders for this purpose:

```
~/repros/      Bug reproductions (git repo)
~/templates/   Starter templates (antfu, atinux, nuxt-ui, supersaas)
~/references/  Source code refs (better-auth, h3, nitro, nuxt-core, vitest)
~/nuxt/skills/ Published skills for the Nuxt ecosystem
```

**~/references/** contains cloned repositories of libraries I work with frequently. When debugging an issue in Nuxt, Claude can read the actual implementation in `~/references/nuxt-core/`. When integrating better-auth, it reads `~/references/better-auth/` to understand the internals. This is more reliable than skills for complex debugging because Claude sees the real code, not a summary.

**~/templates/** holds starter projects. Instead of explaining "create a Nuxt app with Nuxt UI and auth," I say "copy ~/templates/nuxt-ui as the base." Claude gets the exact configuration, dependencies, and patterns I expect.

**[~/repros/](https://github.com/onmax/repros)** is a git repository for bug reproductions. Each issue gets its own folder with a minimal reproduction case. This isolates problems and makes them shareable via StackBlitz.

For libraries I only need once, I skip the permanent folders:

```bash
cd /tmp && git clone https://github.com/some/library
```

Claude can explore it, I get my answer, and the folder disappears on reboot. No clutter.

## Skills: Progressive Context Loading

An AI model is only as effective as the context you fit into its window. Rather than relying on heavy integrations like the Model Context Protocol (MCP) for everything, I distinguish between **Tools** and **Knowledge** (Skills).

For tools, **CLI trumps MCP**. Standard command-line tools like `gh`, `vercel`, and package managers are more reliable, better documented, and already installed. MCP adds complexity and failure points. I only reach for MCP when there's no CLI equivalent (like Figma for design work).

**Skills** are lightweight text files that inject specific domain knowledge on demand. The architecture is designed for token efficiency:

1.  **Metadata** (~100 tokens): Name, description, and trigger rules.
2.  **SKILL.md body**: Core patterns and APIs.
3.  **references/**: Detailed documentation loaded only when specifically requested.

This works like a dependency chain. If I'm working on a Nuxt UI component, Claude loads `vue` → `nuxt-ui` → `reka-ui` progressively, only consuming tokens relevant to the immediate task.

My Nuxt ecosystem skills include: `nuxthub`, `motion`, `vue`, `nuxt-ui`, `reka-ui`, `nuxt-modules`, `nuxt-content`, `nuxt-better-auth`, `vueuse`, and more.

Skills usually need to be fetched manually. After Claude finishes a plan or completes a task, I explicitly ask it to review the work using relevant skills: "use the vue skill to check this component" or "load nuxthub skill and verify the database schema." This ensures Claude applies domain-specific patterns during review, not just during implementation.

You can install them via:

```bash
npx skills add onmax/nuxt-skills
```

See the full library at [github.com/onmax/nuxt-skills](https://github.com/onmax/nuxt-skills).

## Plan Mode: Design Before Code

This is the most critical workflow in my system.

For any non-trivial feature, I forbid Claude from writing code initially. We enter **Plan Mode** to explore the codebase together, understand existing patterns, and agree on a file-by-file strategy before touching anything.

The process:

1.  **Forbid code**: "Don't write code yet. Let's plan first."
2.  **Explore together**: Read existing files to verify the current architecture.
3.  **Surface open questions**: Claude must ask about anything unclear—edge cases, naming conventions, error handling strategies, scope boundaries. We fill every gap before moving forward.
4.  **Agree on strategy**: Define which files to modify, the order of operations, and the exact changes.
5.  **Implement**: Only after full alignment do we write code.

The questioning step is crucial. Claude should challenge assumptions: "Should this handle the empty state?" "Do you want this to be backwards compatible?" "What happens when X fails?" These questions surface ambiguity that would otherwise become bugs or rework.

This was instrumental in the [major refactor of NuxtHub DevTools](https://github.com/nuxt-hub/core/pull/776). The PR touched dozens of files with architectural changes. Without planning, Claude would have guessed at implementation details, requiring endless correction cycles. Instead, we mapped every file change before writing a single line.

Planning prevents the biggest waste in AI-assisted development: confidently implementing the wrong thing.

## Advanced Workflows

With constraints, skills, and planning in place, I have built specialized workflows for complex tasks.

### The Review Swarm

My `/review` command spawns 22 parallel agents. Unlike a generic "review this code" prompt, this swarm uses pattern-matching to activate specific experts:

-   **Security & Auth**: `security-reviewer`, `auth-reviewer` (activates on auth files)
-   **Accessibility**: `a11y-reviewer` (activates on UI components)
-   **Framework Patterns**: `vue-reviewer`, `nuxt-reviewer`, `nuxthub-reviewer`
-   **Code Quality**: `typescript-reviewer`, `code-quality`, `performance`
-   **Infrastructure**: `db-reviewer`, `config-reviewer`, `api-reviewer`, `ci-reviewer`
-   **Testing**: `test-analyzer`, `deps-reviewer`
-   **Context**: `git-validator`, `context-explorer`, `github-api`
-   **Documentation**: `documentation`, `i18n-reviewer`
-   **Strategic**: `maintainer-mindset`, `drawbacks-analyzer`

This collective intelligence catches subtle issues, like a missing accessibility attribute or a database migration conflict, that a single generalist pass would miss.

### The Writer Skill

Writing quality content is often slower than coding. I built a multi-agent writing loop to automate the drafting process:

1.  **Gemini 3 Pro** writes the initial draft.
2.  **Claude** reviews autonomously for accuracy, clarity, and completeness.
3.  **Loop** until approved (up to 15 iterations).
4.  **DeepL** polishes grammar and style.

This very blog post was produced using this workflow.

### Document Writer

For documentation and README files, I use the [`document-writer`](https://github.com/onmax/nuxt-skills/tree/master/skills/document-writer) skill. It provides writing style guidance extracted from official Nuxt documentation patterns:

-   **Writing style**: Active voice (85%+), present tense, subject-first sentences.
-   **Sentence patterns**: Subject-first declarative (60%), imperative instructions (25%), contextual openers (15%).
-   **Modal verb precision**: `can` (optional), `should` (recommended), `must` (required).
-   **Content structure**: Blog frontmatter, section patterns, appropriate callout types.

This skill explicitly **overrides the brevity rules** in my `CLAUDE.md`. Documentation must be grammatically correct and use complete sentences, even when my global config sacrifices grammar for conciseness.

The skill chains with `nuxt-content` for MDC syntax and `nuxt-ui` for component props. When writing docs for a Nuxt project, Claude loads `document-writer` → `nuxt-content` → `nuxt-ui` progressively.

I use this for coworker documentation, library READMEs, and contribution guides where clarity matters more than brevity.

### TypeScript Library

The [`ts-library`](https://github.com/onmax/nuxt-skills/tree/master/skills/ts-library) skill encodes patterns I extracted from studying 20+ high-quality libraries: unocss, shiki, unplugin, vite, vitest, vueuse, zod, trpc, and drizzle-orm.

It covers the full library authoring lifecycle:

-   **Package exports**: Dual CJS/ESM setup, `moduleResolution: "Bundler"`, proper `sideEffects: false`.
-   **Build tooling**: When to use tsdown vs unbuild.
-   **Type inference**: Advanced TypeScript patterns for type-safe APIs (builder, factory, plugin patterns).
-   **Release workflow**: CI/CD setup, changelogs, semantic versioning.

When I start a new library, Claude loads this skill and applies battle-tested patterns instead of generic boilerplate. The references are split by concern (project-setup, package-exports, type-patterns, release), so only relevant sections consume tokens.

### Skill Creator

The [`skill-creator`](https://github.com/onmax/claude-config/tree/master/skills/skill-creator) skill is meta: it documents how to create skills. This is where I codified the philosophy behind the entire system.

Key concepts it teaches Claude:

-   **Progressive disclosure**: Metadata (~100 tokens) → SKILL.md body (<5k words) → references (unlimited). Only load what's needed.
-   **Degrees of freedom**: High freedom for flexible tasks (text instructions), low freedom for fragile operations (specific scripts).
-   **Skill anatomy**: SKILL.md (required), plus optional `scripts/`, `references/`, and `assets/` directories.
-   **Conciseness principle**: "The context window is a public good." Only add context the model doesn't already have.

When I need a new skill, I invoke this and Claude scaffolds it following the same patterns I use everywhere else. It's dogfooding: using the skills system to document the skills system.

### Agent-Browser

For testing web applications, I use browser automation via the Playwright MCP. This solves the "blindness" of the LLM:

-   **Problem**: Need to test deployed apps, fill forms, or verify UI states.
-   **Solution**: [`agent-browser`](https://github.com/onmax/claude-config/tree/master/skills/agent-browser) skill with Playwright integration.
-   **Pattern**: Snapshot-first; always capture page state before interacting.

I use this for testing authentication flows on staging and automating repetitive form submissions.

### Frontend Design

For UI work, I use the [`frontend-design`](https://github.com/onmax/claude-config/tree/master/skills/frontend-design) skill. It guides Claude to create distinctive, production-grade interfaces that avoid generic AI aesthetics. It is useful for landing pages, dashboards, and components that need genuine design quality, not just functional markup.

## Reproductions & Testing (The "AI Tax")

AI-generated code requires rigorous verification. I pay what I call the "AI Tax", a mandatory investment of time into testing to ensure reliability.

### The pnpm pack Workflow

When contributing to a library, running tests locally isn't enough. Your fix might work in the dev environment but break when users install the published package. The issue is that dev mode has access to source files, but published packages only include what is in the `dist/` folder and the `exports` field.

`pnpm pack` creates a `.tgz` file exactly like npm would publish. I install this tarball in a fresh project to simulate what users will experience:

```bash
# In the library you're fixing
pnpm pack
# Creates my-lib-1.0.0.tgz

# In a test project
cd /tmp && mkdir test-env && cd test-env
pnpm init && pnpm add ~/projects/my-lib/my-lib-1.0.0.tgz

# Now test: can you import what you expect?
# Are the types correct? Does the runtime code work?
```

This catches missing files in package.json `exports`, forgotten build steps, incorrect entry points, missing dependencies, and type declaration issues. If it works after `pnpm pack`, it will work for users.

### The Repros Workflow

Each reproduction follows a strict structure:

-   **Folder naming**: `{library}-{issue}` for the bug, `{library}-{issue}-fix` for the fix.
-   **StackBlitz links**: Every PR body includes instant-verification links.
-   **Structured README**: Problem, Verify, Expected, Actual, Fix.
-   **pnpm patch**: Test fixes locally via patch before creating PRs.

Example for `nuxthub-727`:

1.  Create `~/repros/nuxthub-727/` with a minimal reproduction.
2.  Verify the bug exists.
3.  Create `~/repros/nuxthub-727-fix/` with a pnpm patch.
4.  Verify the fix works.
5.  Create a PR with StackBlitz links to both.

See the full workflow at [github.com/onmax/claude-config](https://github.com/onmax/claude-config).

## Voice Input: SuperWhisper

I use SuperWhisper for voice-to-text input. This is not just for convenience; it connects directly to the "Context Injection" philosophy.

Voice allows me to "dump" my brain, describing architectural decisions, explaining bug reproduction steps, or providing detailed nuance, faster than I can type. My "conciseness" config in `CLAUDE.md` pairs perfectly with this: I speak naturally and loosely, the transcription captures everything, and Claude extracts only the relevant technical requirements.

## Conclusion

This system requires upfront investment. You need to maintain your skills library, write thoughtful `CLAUDE.md` constraints, and discipline yourself to plan before coding. However, the return is a shift from typing syntax to directing architecture.

The key principles:

1.  **Debug your setup, not the AI**: When things fail, check your tools, constraints, and context.
2.  **Plan before code**: Agreeing on an approach prevents wasted implementation cycles.
3.  **CLI over MCP, Skills over both**: Prefer battle-tested CLI tools (`gh`, `vercel`, `ni`) for actions. Use lightweight text files (Skills) for knowledge. MCP is a last resort when no CLI exists.
4.  **Verify everything**: The AI Tax (rigorous testing) is non-negotiable.

By applying these patterns, I've tackled complex issues like [critical asyncData fixes in Nuxt core](https://github.com/nuxt/nuxt/pull/34079) and major refactors like the [NuxtHub DevTools overhaul](https://github.com/nuxt-hub/core/pull/776). The goal isn't to replace the engineer. It's to automate the friction of engineering while keeping humans in control of architecture and quality.
