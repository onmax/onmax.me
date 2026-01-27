---
title: 'How I Use Claude Code'
description: 'A comprehensive system for AI-assisted development: philosophy, skills, workflows, and real-world results'
publishedAt: 2026-01-26
---

Most developers treat AI tools like advanced autocomplete or a magic wand. I treat them as a system component that requires engineering. By replacing unstructured "chats" with a rigorous workflow of constraints, context injection, and specialized processes, I have moved from sporadic assistance to a predictable pipeline.

## The Problem: Debugging the Wrong Thing

When Claude fails to deliver, the instinct is often to blame the model's intelligence. However, the bottleneck has shifted from "can I write this?" to "does this actually work?"

If the AI fails, I treat it like debugging a junior engineer's environment. The problem is rarely raw capability; it is missing context or broken tooling.

## The Solution: A Systemized Workflow

I utilize a four-part system to turn LLM capabilities into reliable software engineering: **Foundation**, **Context**, **Planning**, and **Verification**.

### 1. The Foundation: CLAUDE.md

Every session loads my global configuration from `~/.claude/CLAUDE.md`. This "employment contract" forces the AI to adhere to my specific CLI aliases and git habits.

```markdown
In all interactions, be extremely concise. Sacrifice grammar for clarity.

# Bash commands
- Prefer pnpm over npm or yarn
- Aliases:
  - `ni` for installing (via @antfu/ni)
  - `nr <script>` to run scripts
  - `lf` for lint fix
  - `tp` for typecheck

# CLI (prefer CLI over MCP)
- Primary GitHub interaction: `gh` cli
- Primary Vercel interaction: `vercel` cli
- NuxtHub CLI is DEPRECATED. Deployments happen via git push
```

### 2. Giving Source Code to the AI

Skills provide general knowledge, but Claude often needs raw source code. I maintain dedicated folders to give the AI ground truth rather than summaries.

- **`~/references/`**: Cloned repos of libraries (e.g., `nuxt-core`, `better-auth`) for deep debugging.
- **`~/templates/`**: Starter projects (e.g., `nuxt-ui`) so Claude copies exact configurations rather than guessing.
- **`~/repros/`**: Isolated git repositories for bug reproductions.

For one-off libraries, I use a temporary workflow:

```bash
cd /tmp && git clone https://github.com/some/library
# Claude explores, answers, and the folder vanishes on reboot.
```

### 3. Skills: Progressive Context Loading

An AI model is limited by its context window. I distinguish between **Tools** (actions) and **Knowledge** (skills).

**Tools: CLI > MCP**

I avoid Model Context Protocol (MCP) unless absolutely necessary. Standard CLI tools (`gh`, `vercel`) are more reliable, better documented, and battle-tested.

**Skills Architecture**

Skills are lightweight text files designed for token efficiency. They load progressively:

1. **Metadata** (~100 tokens): Triggers and descriptions.
2. **Body**: Core patterns and APIs.
3. **References**: Detailed docs loaded only on demand.

*Example:* When working on a component, Claude loads `vue` → `nuxt-ui` → `reka-ui`, only consuming relevant tokens.

You can install my Nuxt ecosystem skills via:

```bash
npx skills add onmax/nuxt-skills
```

See the full library at [github.com/onmax/nuxt-skills](https://github.com/onmax/nuxt-skills).

### 4. Plan Mode: Design Before Code

For non-trivial features, I strictly forbid Claude from writing code immediately. We enter **Plan Mode**.

1. **Forbid code**: "Don't write code yet. Let's plan."
2. **Explore**: Read files to verify current architecture.
3. **Question**: Claude must ask about edge cases and ambiguity.
4. **Agree**: Define the file-by-file strategy.
5. **Implement**: Write code only after alignment.

This was instrumental in the [major refactor of NuxtHub DevTools](https://github.com/nuxt-hub/core/pull/776). The PR touched dozens of files with architectural changes. Without planning, Claude would have guessed at implementation details, requiring endless correction cycles.

Planning prevents the biggest waste in AI development: confidently implementing the wrong architecture.

## Advanced Workflows

With the foundation in place, I use specialized workflows for complex tasks.

### The Review Swarm

My `/review` command spawns 22 parallel agents using pattern matching to activate experts:

- **Security**: `security-reviewer`, `auth-reviewer` (activates on auth files)
- **UI**: `a11y-reviewer` (activates on components)
- **Code Quality**: `typescript-reviewer`, `performance`
- **Infrastructure**: `db-reviewer`, `ci-reviewer`
- **Strategic**: `maintainer-mindset`, `drawbacks-analyzer`

This collective intelligence catches subtle issues that a single generalist pass would miss.

### The Writer Skill

For content (like this post), I use a multi-agent loop:

1. **Gemini 3 Pro** drafts.
2. **Claude** reviews for accuracy and clarity.
3. **Loop** up to 15 times until approved.
4. **DeepL** polishes grammar.

### TS Library & Documentation

I use specific skills to enforce high standards:

- **[`document-writer`](https://github.com/onmax/nuxt-skills/tree/master/skills/document-writer)**: Overrides my "conciseness" rule. Enforces active voice and proper grammar for READMEs.
- **[`ts-library`](https://github.com/onmax/nuxt-skills/tree/master/skills/ts-library)**: Encodes patterns from libraries like `unocss` and `vite` (dual CJS/ESM, type inference patterns) so I never start with generic boilerplate.
- **[`skill-creator`](https://github.com/onmax/claude-config/tree/master/skills/skill-creator)**: Meta-skill that documents how to create skills. Dogfooding: using the skills system to document itself.

### Agent-Browser & Frontend Design

- **[`agent-browser`](https://github.com/onmax/claude-config/tree/master/skills/agent-browser)**: Playwright MCP integration for testing deployed apps and automating form submissions.
- **[`frontend-design`](https://github.com/onmax/claude-config/tree/master/skills/frontend-design)**: Guides Claude to create distinctive, production-grade interfaces that avoid generic AI aesthetics.

## The "AI Tax": Verification

AI code requires a mandatory investment in testing—what I call the "AI Tax."

### The `pnpm pack` Workflow

Local tests aren't enough for libraries. I simulate the user experience by packing the project:

```bash
# In your library
pnpm pack # Creates my-lib-1.0.0.tgz

# In a fresh test project
pnpm add ~/projects/my-lib/my-lib-1.0.0.tgz
```

This catches missing exports or build artifacts that pass in dev mode but fail in production.

### The Repros Workflow

Every bug fix gets a rigorous reproduction path:

1. Create `~/repros/lib-issue/` with a minimal reproduction.
2. Verify the bug.
3. Create `~/repros/lib-issue-fix/` with a `pnpm patch`.
4. Verify the fix and link both in the PR.

See the full workflow at [github.com/onmax/repros](https://github.com/onmax/repros).

## Voice Input: SuperWhisper

I use SuperWhisper for voice-to-text input. Voice allows me to "dump" my brain—describing architectural decisions or bug reproduction steps—faster than I can type. My "conciseness" config in `CLAUDE.md` pairs perfectly: I speak naturally, the transcription captures everything, and Claude extracts only the relevant technical requirements.

## Key Takeaways

1. **Debug the setup**: If Claude fails, check your CLI tools and context injection.
2. **Plan first**: Never let the AI code without an agreed-upon file strategy.
3. **CLI over MCP, Skills over both**: Use standard tools (`gh`, `ni`) for actions. Use lightweight text files (Skills) for knowledge. MCP is a last resort.
4. **Verify everything**: The AI Tax (rigorous testing) is non-negotiable.

By applying these patterns, I've tackled complex issues like [critical asyncData fixes in Nuxt core](https://github.com/nuxt/nuxt/pull/34079) and major refactors like the [NuxtHub DevTools overhaul](https://github.com/nuxt-hub/core/pull/776). The goal isn't to replace the engineer—it's to automate the friction while keeping humans in control of architecture and quality.
