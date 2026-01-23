---
title: 'How I Use Claude Code'
description: 'The journey from AI skeptic to system builder'
publishedAt: 2025-01-23
---

For years, my professional life was a Sisyphean struggle, caught between intense effort and inevitable burnout. I would push myself to the limit, recover just enough, and then begin the arduous process all over again. Then, I fundamentally changed how I approached writing software.

My journey into AI-assisted development began conservatively with GitHub Copilot, which served as a safe and predictable, albeit faster, autocomplete. I later graduated to Cursor, an AI-native IDE that offered deeper integration but felt heavy and often fought against years of ingrained muscle memory. The breakthrough came when I discovered Claude Code, a command-line interface that was fast, text-based, and completely free of UI overhead. It felt like I was finally escaping the gravity that had held my productivity down.

## The Wrong Approach: AI as a Magic Wand

Initially, I made the classic mistake of treating the AI like a magic wand rather than a sophisticated tool. I would issue vague, high-level commands like "refactor this file" or "fix the bug," hoping for an instant, perfect solution. The results were often chaotic, producing code that looked plausible on the surface but contained silent failures, missing imports, or subtle deviations from established project patterns. I incorrectly blamed the tool for these shortcomings.

The reality was that I was the problem. An AI doesn't read your mind; it meticulously interprets your prompts. Feeding it ambiguous requests is a surefire way to get unreliable output. I realized I needed to stop asking for magic and start engineering my interactions with the model.

## Engineering a Better Interaction

The first pivot was to establish a clear contract with the AI through a system prompt. I configured it to prioritize clarity over conversational fluff, which immediately improved the signal-to-noise ratio of its responses.

```
In all interactions, be extremely concise.
Sacrifice grammar for clarity.
Omit conversational filler.
```

Next, I granted it access to the GitHub (`gh`) command-line tool. This was a transformative step, as the AI was no longer just suggesting code but could now actively participate in the development lifecycle by creating pull requests and checking on issues. However, with this newfound agency came the potential for significant destruction.

## Hard-Learned Lessons from Git Disasters

I have to be transparent about the failures, as they were my most valuable teachers. In one instance, I asked for a "clean git history" on a feature branch, and the AI proceeded to rebase it into oblivion, creating a cascade of merge conflicts that resulted in lost work. Another time, it became confused about branch naming conventions and opened five duplicate pull requests for the same change, leaving me to spend an hour cleaning up the mess I had instructed it to make.

These disasters taught me the most crucial lesson: AI requires strict, explicit constraints. Now, my global configuration file (`~/.claude/CLAUDE.md`), which governs every session, contains unambiguous rules of engagement to prevent such errors.

```markdown
# Git Safety Rules
- NEVER force push (`git push --force`).
- NEVER amend a commit unless explicitly asked with `--amend`.
- NEVER skip git hooks (`--no-verify`).
- Always stage specific files; NEVER use `git add -A` or `git add .`.
- Confirm the current branch name before creating a pull request.
```

It still makes mistakes, but they are far less catastrophic because I no longer allow it to guess in high-stakes situations.

## Building a System of Context and Skills

I discovered that the real power of an AI model isn't just its raw intelligence, but the quality of the context you provide. To manage this, I built a library of "Skills," which are lightweight, on-demand text instructions that inform the AI about specific project conventions, APIs, or architectural patterns. Unlike heavier solutions like Model Context Protocol (MCP) that require local servers, these Skills are simple text files that can be loaded into any session, making them universally compatible with tools like Claude Code, Cursor, and others.

I currently maintain over two dozen Skills tailored to different tasks. For example, if I'm working on animations, Claude automatically loads the `motion` skill. If I touch the database, it loads the `nuxthub` skill. This system ensures the AI already understands the relevant patterns before I even write a line of code, leading to more consistent and accurate contributions.

## Workflows That Deliver Results

With this system in place, I no longer have unstructured "chats" with the AI. Instead, I execute specific, custom commands that leverage these pre-defined skills to accomplish complex tasks.

**Plan Mode.** For any non-trivial feature, I first forbid the AI from writing code. We enter a "Plan Mode" where we collaboratively explore the codebase, discuss potential architectures, and agree on a file-by-file implementation strategy. This process was instrumental in successfully landing a [major refactor of the NuxtHub DevTools](https://github.com/nuxt-hub/core/pull/776), preventing an unnecessary rewrite by getting the structure right from the start.

**The Hunt.** I created a custom `/hunt` skill that automates finding and fixing good first issues. It searches a repository for unassigned issues, creates a local reproduction case, applies a fix, and drafts a pull request. This workflow is how [fuzzy search was added to the Nuxt CLI](https://github.com/nuxt/cli/pull/1180), with zero human intervention required until the final review.

**The Review Swarm.** My `/review` command spawns multiple, specialized AI agents in parallel to analyze a pull request. One agent acts as a security expert, another checks for accessibility issues, and a third enforces Vue-specific patterns. They report back with their findings, and this collective intelligence consistently catches subtle issues that a single reviewer (human or AI) might miss.

## Paying the AI Tax: The Necessity of Rigorous Testing

Here is the truth that is often glossed over: using AI requires *more* disciplined testing, not less. AI excels at generating plausible code that compiles and runs, but it can make dangerous assumptions about edge cases. I call this the "AI Tax"—the mandatory, upfront investment in verification and testing to ensure AI-generated code is not just plausible, but robust.

I learned this the hard way after letting Claude add a caching layer to an API endpoint. The code looked perfect, but in production, it began caching `404 Not Found` responses. Users were locked out of resources for minutes at a time because the AI-generated logic cached the result of the `fetch` call without first checking if `response.ok` was true. The fix was a single line of code, but diagnosing the bug took hours.

Now, I pay the AI Tax by enforcing a strictly isolated testing workflow. The AI must write tests that prove its code works, not in a linked local environment, but as it would be consumed by an end-user.

```bash
# 1. Create a distributable package from the library
pnpm pack

# 2. Create a fresh, disposable test environment
cd /tmp && mkdir test-project && cd test-project
pnpm init

# 3. Install the packed library from its tarball
pnpm add ~/projects/my-lib/my-lib-1.0.0.tgz

# 4. Write and run tests against the installed package
```

This process forces the AI to account for packaging issues and write tests for the unhappy paths: null states, network failures, and invalid inputs.

## Where AI Still Falls Short

Despite its power, AI is not a panacea. I still perform several critical tasks manually, because they require a level of nuance or creativity the models currently lack.

**Complex Git Operations.** Interactive rebases, complex cherry-picking, and multi-branch conflict resolution are all tasks I handle myself. The risk of an AI misunderstanding the context and corrupting the repository is too high.

**Novel Architecture.** AI is a masterful follower of existing patterns, but it does not invent new ones. When a project requires a genuinely novel architectural solution, the initial design and vision must come from a human.

**UI and Design Taste.** An AI can implement any design you describe, but it cannot exercise aesthetic judgment. It lacks the subjective "taste" to decide what looks good or feels right to a user.

## Your Path to AI Adoption

Adopting this systematic approach can feel daunting, so I recommend building it in layers.

**Day 1: The Foundation.** Install Claude Code and create your global `~/.claude/CLAUDE.md` file. Start by defining simple aliases for your most common commands (`ni` for `npm install`, `b` for `pnpm build`, etc.) to save keystrokes.

**Week 1: Your First Skill.** Identify your primary framework or library and create a single "Skill" for it. Document your team's specific conventions, component structures, or data-fetching patterns. Apply this skill while working on one real ticket to see the effect.

**Week 2: The Critic.** Build a `/review` skill tailored to your project's coding standards. Before you push your own code, run it through your AI critic and observe what it catches. This is one of the fastest ways to learn its strengths and weaknesses.

**Month 1: The First Automation.** Try setting up a simple automated task. I use a script called `/ralph-setup` that runs database migrations or data-seeding tasks on a remote server overnight. I wake up to a completed task and a PR ready for review.

## The Mental Shift

In a previous post, I wrote about the [Clock of Life](/posts/the-clock-of-life), a metaphor for the different phases of work. For five years, I was stuck grinding between the pain of failure and the sheer effort of progress. This system has moved me into a state of flow.

I am no longer bogged down by syntax, boilerplate, or searching for API documentation. The tedious work of implementation is largely handled, freeing me to operate at the level of intent. My mental energy has shifted from "How do I build this?" to "Is this the right thing to build?"

The results are tangible, with over 50 merged PRs in recent months, including [critical asyncData fixes in the Nuxt core](https://github.com/nuxt/nuxt/pull/34079) and foundational features in major CLI tools. The system isn't perfect, and it still requires human judgment at every turn. But for the first time in my career, the work feels less like a grind and more like play.
