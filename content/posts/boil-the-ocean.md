---
title: "Boil the ocean"
description: "There is no hard task anymore, so I wrote a skill that stops my agents from shrinking what I ask for. What's left for us is the human part."
publishedAt: 2026-10-31
---

Last week I wrote a skill for my agents. It's called `boil-the-ocean`, and they load it when I ask for something huge, or when I tell them "there is no hard task anymore".

::details
#summary
`boil-the-ocean` `SKILL.md`{.skill-file}

#default
Use when your human asks for something huge, like a rewrite, a port, or a rebuild that looks like too much work, or says "there is no hard task anymore". Takes the full scope on and checks every step.{.skill-description}

A request this large tempts you to trim it before you start. Measure it first. Your sense of what is too big came from watching human teams, and it is out of date.

## Why the old sizing is wrong

Effort used to be the limit. A rewrite, a port, or a rebuild cost months of people, so teams tried one only when nothing else worked. Smarter, more capable models do the same work in hours or days, as long as something checks each step. Take the request at its full size, the **ocean**, and find out what really limits it.

Most reasons a task "can't" be done are **habits**: things people stopped trying because they were expensive. A few are **real walls**: law, licenses, security, safety, money nobody approved, or a limit your human set. A habit falls once you ask why not. A real wall stays, and the plan works around it.

Pick whatever reaches the goal fastest for agents, even when it is neither your preference nor your human's: the language, the framework, the shell, how deep in the stack you work.

## Throwaway code, owned checks

Speed changes what code is worth writing. Code used to need a long life to repay the effort of writing it. Now you can write code to answer one question and delete it after: a script that diffs two outputs, a harness around a flaky service, a prototype of one approach, three parallel attempts where two lose. Write it whenever it settles a question or raises confidence. A failed attempt still pays with the checks it left behind and what it taught you.

This is safe only because you check the work, and the checking is yours. Reading code catches few bugs; running it catches most. Hand your human work you have already run.

- Fix a measurable finish line before you start: the suite passes, the output matches the reference on real inputs, it runs twice as fast as the old build. A vague goal ends the run at the first sign of progress.
- Check against reality. Run it, look at it in a browser, compare it with the reference build, and probe the real system when its docs make a claim.
- Matching a reference copies its bugs. List the known divergences so nobody mistakes them for yours.
- Get a review from a different model family when a change is risky.
- Stop and ask only when a check fails for a reason you can't explain.
- When attempts keep failing the same way, fix the setup that causes it before you retry.

## Steps

1. **Hold the ocean.** Write the request as one sentence at its full size. Done when the sentence asks for everything the request asked for.
2. **Sort the walls.** List each reason it can't be done, ask why not, and mark it a habit or a real wall, backed by something you checked in the repository, docs, or tools. Done when every reason has a mark and its evidence.
3. **Find the oracle.** Name what proves the work is right: an existing implementation to compare against, a test suite, a spec, known-good outputs, a benchmark. Done when the oracle runs and reports a baseline, or when building it is the first unit.
4. **Cut the boil.** Split the ocean into units the oracle checks one at a time, on a throwaway branch or worktree, with a budget in hours or tokens and a condition for stopping. Say where the chosen stack differs from your human's preference. Done when another agent could start the first unit from the plan alone.
5. **Boil.** Work unit by unit within what is already authorized, running the oracle after each one. Bring only the real walls to your human.
6. **Hand back.** Report what the oracle confirmed, what you could not verify (hardware, secrets, judgment calls), and the risks of shipping it, so your human checks only those.
::

## Why I wrote it

Projects like rsts changed what I think is worth trying. Cloudflare rewrote the TypeScript compiler in Rust with agents. A year ago that sounded impossible. Now it takes weeks.

Opus 5.5 is the best model I've used at understanding intent. I explain what's in my head, badly, over a few prompts, and it gets it.

## Two examples

Last week an agent found a bug in Rolldown, the bundler under Vite. If your project lived in a folder with brackets in its name, like `my[app]`, some of Rolldown's file filters quietly matched nothing. The agent wrote a small repro, fixed the bug, and opened [a pull request](https://github.com/rolldown/rolldown/pull/11291). The Rolldown team merged it the next day. Rolldown is written in Rust, and I don't write Rust. It didn't matter.

Then I noticed Comark bundled all of js-yaml just to read frontmatter. So I built [tinyaml](https://github.com/onmax/tinyaml) with an agent. It reads YAML the way js-yaml does, in 7.5 KB instead of 17.1 KB, and loads up to 2.4 times faster.

The model is half of it. The other half is giving it the right words and context, and a setup where it can run on its own.

## So what's left for us?

If there are no hard tasks anymore, what will engineers do in five years? I don't know. My guess is the human part. Picking what to build, explaining it, and getting people to care.

So work on your communication skills. Go out, share your story, and spend more time with other people. If you stay in your cave, a mediocre engineer with Opus 7 and better communication skills will take your place.

That's why I'm posting on Twitter way more lately, and I'm thinking about trying public speaking. The building part is covered. With Opus 5.5, I can build pretty much anything.

I feel lucky to live in this moment and to notice it while it happens. If you read this far, you're probably curious too, and I'm sure you'll reinvent yourself.
