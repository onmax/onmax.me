---
title: 'How I Use Claude Code'
description: 'The journey from AI skeptic to system builder'
publishedAt: 2025-01-23
---

Five years I spent grinding. Stuck between effort and burnout. Recovering just enough to push the rock up the hill again.

Then I changed how I wrote software.

It started with Copilot. Safe. Predictable. A faster autocomplete. Then Cursor. Better, but the IDE felt heavy. Laggy. It fought my muscle memory.

Then Claude Code. A CLI. Fast. Text-based. No mouse, no overhead.

It felt like escaping gravity.

## The Problem Was Me

I started wrong. I treated AI like a magic wand.

I typed vague commands. "Refactor this." "Fix the bug."

The result? Chaos. Code that looked right but failed silently. Imports missing. Patterns ignored. I blamed the tool.

I was the problem. AI doesn't read minds. It reads prompts. Garbage in, garbage out.

I needed to stop asking and start engineering.

## The Pivot

The first change was a system prompt. I forced clarity over politeness.

```
In all interactions, be extremely concise.
Sacrifice grammar for clarity.
```

No more "I'd be happy to help." Just code.

Then I gave it access to the `gh` CLI. Suddenly, it wasn't just suggesting code. It was creating PRs. Checking issues. Acting.

But with action came destruction.

## The Git Disasters

I have to be honest about the failures.

I asked for a "clean history." Claude rebased my branch into oblivion. Merge conflicts everywhere. Work lost.

Another time, it opened five duplicate PRs because it got confused about branch names. I spent an hour cleaning up the mess I told it to make.

This taught me the most important lesson: Constraint.

Now, my `~/.claude/CLAUDE.md`—the global configuration file that governs every session—has strict rules.

```markdown
- NEVER amend unless explicitly asked
- NEVER skip hooks (--no-verify)
- Stage specific files, not "git add -A"
```

It still fails sometimes. But I don't let it guess anymore.

## Building the System

The real power isn't in the model. It's in the context.

I built a library of "Skills."

Unlike MCP (Model Context Protocol), which requires running local servers and can be heavy, Skills are lightweight text instructions. They load on demand. They work everywhere—Claude Code, Cursor, Codex, Copilot.

I maintain 24+ skills. If I'm working on animations, Claude loads the `motion` skill. If I'm touching the database, it loads `nuxthub`.

It knows the patterns before I write a line of code.

## The Workflow That Works

I don't just "chat" anymore. I run specific, custom commands powered by these skills.

**Plan Mode.** For complex features, I stop Claude from coding. I force it to plan. We explore the codebase. We agree on an architecture. Only then do we write.

This saved the [NuxtHub DevTools PR](https://github.com/nuxt-hub/core/pull/776). Instead of rewriting half the app, we nailed the structure first.

**The Hunt.** I built a custom skill called `/hunt`. It searches a repo for unassigned issues. It creates a reproduction. It applies a fix.

This workflow shipped [fuzzy search for Nuxt CLI](https://github.com/nuxt/cli/pull/1180). Zero human intervention until the review.

**The Review Swarm.** My `/review` command doesn't ask one agent for feedback. It spawns multiple in parallel. One looks for security flaws. One checks accessibility. One enforces Vue patterns.

They report back. The collective intelligence catches what I miss.

## The AI Tax

Here is the truth nobody tells you: AI requires *more* testing, not less.

AI generates plausible code. It compiles. It runs. But it makes dangerous assumptions.

I once let Claude add caching to an API. It looked perfect. In production, it started caching 404 errors. Users saw "Not Found" for minutes because the AI didn't distinguish between a successful fetch and a failed one.

Finding the fix took one line of code. Finding the bug took hours.

Now, I pay the tax upfront. I use a strictly isolated testing workflow:

```bash
# Pack the library
pnpm pack

# Move to a disposable directory
cd /tmp/test-zone

# Install the tarball
pnpm add ~/projects/my-lib/package.tgz
```

I force the AI to write tests for the edge cases. Null states. Network failures. The unhappy paths.

## What Still Doesn't Work

Complex git operations. Interactive rebases. Multi-branch workflows. I still do these by hand.

Novel architecture decisions. AI follows patterns. It doesn't invent them. When I need something genuinely new, I design it myself.

UI taste. It can implement any design. It can't decide what looks good.

Not perfect. Still learning. Both of us.

## Adoption Path

Don't try to do everything at once. Build your system in layers.

**Day 1: The Foundation.** Install Claude Code. Create your `~/.claude/CLAUDE.md`. Define your aliases to save keystrokes (`ni` for install, `b` for build).

**Week 1: The First Skill.** Create one skill for your primary framework. Add your team's specific conventions. Use it on one real ticket.

**Week 2: The Critic.** Build a `/review` skill. Run it on your own code before you push. Learn what it catches.

**Month 1: Automation.** Set up a "night shift." I use `/ralph-setup` to run migration scripts on a VPS while I sleep. Wake up to PRs waiting for me.

## The Shift

I wrote about the [Clock of Life](/posts/the-clock-of-life) recently. How most careers are spent grinding—stuck between pain at 3 o'clock and effort at 12.

For five years, I was there.

This system moved me to 9. Flow. The harvest.

I'm not fighting syntax anymore. I'm not looking up imports. I'm solving the problem. Operating at the level of intent, not implementation.

50+ merged PRs. [AsyncData fixes in Nuxt](https://github.com/nuxt/nuxt/pull/34079). Core features in CLI tools.

The mental load shifted. Not "how do I implement this?" but "is this the right thing to implement?"

It's not perfect. It still requires judgment. But for the first time in years, the work feels like play.
