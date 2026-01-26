---
title: 'How I Use Claude Code'
description: 'A comprehensive system for AI-assisted development: philosophy, skills, workflows, and real-world results'
publishedAt: 2025-01-23
---

Most developers treat AI tools like advanced autocomplete or a magic wand. I treat them as a system component that requires engineering. By shifting from unstructured "chats" to a rigorous workflow of constraints, context injection, and specialized processes, I have moved from sporadic assistance to a predictable pipeline.

Here is the system I use to turn LLM capabilities into reliable software engineering: from high-level philosophy to specific configuration, including how I use voice input to inject complex context faster than I can type.

## Philosophy: Debug Your Setup, Not the AI

When Claude fails to deliver what I expect, my first instinct used to be frustration. Now, I treat it like debugging a junior engineer's environment: the problem is rarely their raw capability. It's usually missing context or broken tooling.

**Start with native Claude Code.** I avoid complex plugins. Opus 4.5 can handle virtually any software engineering task when given the right environment. The question isn't "can the AI do this?" but "have I given it what it needs?"

When something goes wrong, I run through a debugging checklist:

1.  **Missing CLI tools?** Does Claude have access to standard tools like `gh` (GitHub), `vercel`, and my package manager aliases (like `ni` for install or `nr` for run, using `@antfu/ni`)?
2.  **Missing CLAUDE.md constraints?** Did I forget to specify project conventions or safety rules?
3.  **Missing domain skills?** Does Claude know the specific framework patterns for this codebase?
4.  **Missing MCP?** Am I asking it to do something it lacks the tool for? (Note: I mostly use "Skills" for knowledge; I only use the Figma MCP for design tasks).

This mindset shift, from "the AI is broken" to "what am I missing?", transformed my productivity. Like any tool, Claude reflects the quality of its inputs.

## The Foundation: CLAUDE.md

Every session loads my global configuration from `~/.claude/CLAUDE.md`. Think of this file as the employment contract between me and Claude, prioritizing consistency and safety over flexibility. It forces the AI to adhere to my specific command-line aliases and git habits.

```markdown
# Conciseness
In all interactions, be extremely concise and sacrifice grammar for clarity.

# Package Managers
- Prefer pnpm over npm or yarn
- Aliases: `ni` (install), `b` (build), `nr` (run), `lf` (lint fix), `tp` (typecheck)

# Git Safety
- NEVER amend unless explicitly asked
- Stage specific files; NEVER use `git add -A` or `git add .`
- Confirm branch before creating PR

# CLI
- Primary GitHub interaction: `gh` cli
- Primary Vercel interaction: `vercel` cli
- NuxtHub CLI is DEPRECATED: deploy via git push

# Subagents
- Always use `model: "opus"` when spawning subagents
```

## Giving Source Code to the AI

Skills provide knowledge, but sometimes Claude needs the actual source code. I maintain dedicated folders for this:

```
~/repros/      Bug reproductions (git repo)
~/templates/   Starter templates (antfu, atinux, nuxt-ui, supersaas)
~/references/  Source code refs (better-auth, h3, nitro, nuxt-core, vitest)
~/nuxt/skills/ Published skills for the Nuxt ecosystem
```

**~/references/** contains cloned repositories of libraries I work with frequently. When debugging an issue in Nuxt, Claude can read the actual implementation in `~/references/nuxt-core/`. When integrating better-auth, it reads `~/references/better-auth/` to understand the internals. This is more reliable than skills for complex debugging because Claude sees the real code, not a summary.

**~/templates/** holds starter projects. Instead of explaining "create a Nuxt app with Nuxt UI and auth", I say "copy ~/templates/nuxt-ui as the base". Claude gets the exact configuration, dependencies, and patterns I expect.

**~/repros/** is a git repository for bug reproductions. Each issue gets its own folder with a minimal reproduction case. This isolates problems and makes them shareable via StackBlitz.

For libraries I only need once, I skip the permanent folders:

```bash
cd /tmp && git clone https://github.com/some/library
```

Claude can explore it, I get my answer, and it disappears on reboot. No clutter.

## Skills: Progressive Context Loading

An AI model is only as effective as the context you fit into its window. Rather than relying on heavy integrations like the Model Context Protocol (MCP) for everything, I distinguish between **Tools** (MCP) and **Knowledge** (Skills).

**Skills** are lightweight text files that inject specific domain knowledge on demand. The architecture is designed for token efficiency:

1.  **Metadata** (~100 tokens): Name, description, and trigger rules.
2.  **SKILL.md body**: Core patterns and APIs.
3.  **references/**: Detailed documentation loaded only when specifically requested.

This works like a dependency chain. If I'm working on a Nuxt UI component, Claude loads `vue` → `nuxt-ui` → `reka-ui` progressively, only consuming tokens for what is relevant to the immediate task.

My Nuxt ecosystem skills include: `nuxthub`, `motion`, `vue`, `nuxt-ui`, `reka-ui`, `nuxt-modules`, `nuxt-content`, `nuxt-better-auth`, `vueuse`, and more.

Skills usually need to be fetched manually. After Claude finishes a plan or completes a task, I ask it to review the work with the relevant skills: "use the vue skill to check this component" or "load nuxthub skill and verify the database schema". This explicit invocation ensures Claude applies domain-specific patterns during review, not just during implementation.

You can install them via:

```bash
npx skills add onmax/nuxt-skills
```

See the full library at [github.com/onmax/nuxt-skills](https://github.com/onmax/nuxt-skills).

## Plan Mode: Design Before Code

This is the most critical workflow in my system. I call it "Plan is God."

For any non-trivial feature, I forbid Claude from writing code initially. We enter **Plan Mode** to explore the codebase together, understand existing patterns, and agree on a file-by-file strategy before touching anything.

The process:

1.  **Forbid code**: "Don't write code yet. Let's plan first."
2.  **Explore together**: Read existing files to verify the current architecture.
3.  **Agree on strategy**: Define which files to modify, the order of operations, and the exact changes.
4.  **Implement**: Only after alignment do we write code.

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

### Agent-Browser

For testing web applications, I use browser automation via the Playwright MCP. This solves the "blindness" of the LLM:

-   **Problem**: Need to test deployed apps, fill forms, or verify UI states.
-   **Solution**: `agent-browser` skill with Playwright integration.
-   **Pattern**: Snapshot-first, always capture page state before interacting.

I use this for testing authentication flows on staging and automating repetitive form submissions.

## Reproductions & Testing (The "AI Tax")

AI-generated code requires rigorous verification. I pay what I call the "AI Tax", a mandatory investment of time into testing to ensure reliability.

### The pnpm pack Workflow

To avoid "it works on my machine" issues, I verify fixes in a packaged environment before trusting them:

```bash
pnpm pack
cd /tmp && mkdir test-env && cd test-env
pnpm add ~/projects/my-lib/my-lib-1.0.0.tgz
# Run integration tests against the packed build
```

This catches packaging issues, missing exports, and edge cases that work in dev but fail in production.

### The Repros Workflow

Each reproduction follows a strict structure:

-   **Folder naming**: `{library}-{issue}` for the bug, `{library}-{issue}-fix` for the fix.
-   **StackBlitz links**: Every PR body includes instant-verification links.
-   **Structured README**: Problem, Verify, Expected, Actual, Fix.
-   **pnpm patch**: Test fixes locally via patch before creating PRs.

Example for `nuxthub-727`:

1.  Create `~/repros/nuxthub-727/` with minimal reproduction.
2.  Verify the bug exists.
3.  Create `~/repros/nuxthub-727-fix/` with pnpm patch.
4.  Verify the fix works.
5.  Create PR with StackBlitz links to both.

See the full workflow at [github.com/onmax/claude-config](https://github.com/onmax/claude-config).

## Voice Input: SuperWhisper

I use SuperWhisper for voice-to-text input. This is not just for convenience; it connects directly to the "Context Injection" philosophy.

Voice allows me to "dump" my brain, describing architectural decisions, explaining bug reproduction steps, or providing detailed nuance, faster than I can type. My "conciseness" config in `CLAUDE.md` pairs perfectly with this: I speak naturally and verbose, the transcription captures everything, and Claude extracts only the relevant technical requirements.

## Conclusion

This system requires upfront investment. You need to maintain your skills library, write thoughtful `CLAUDE.md` constraints, and discipline yourself to plan before coding. The return is a shift from typing syntax to directing architecture.

The key principles:

1.  **Debug your setup, not the AI**: When things fail, check your tools, constraints, and context.
2.  **Plan before code**: Agreement on approach prevents wasted implementation cycles.
3.  **Skills over MCP**: Use lightweight text files to provide domain expertise without complexity.
4.  **Verify everything**: The AI Tax (rigorous testing) is non-negotiable.

By applying these patterns, I've tackled complex issues like [critical asyncData fixes in Nuxt core](https://github.com/nuxt/nuxt/pull/34079) and major refactors like the [NuxtHub DevTools overhaul](https://github.com/nuxt-hub/core/pull/776). The goal isn't to replace the engineer. It's to automate the friction of engineering while keeping humans in control of architecture and quality.
