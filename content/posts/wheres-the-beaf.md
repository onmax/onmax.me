---
title: "Where's the beaf?"
description: "Agents write the code now and reviewing it is the job. People review with their eyes, so every UI pull request should come with a before/after doc: a beaf."
publishedAt: 2026-10-23
---

Writing code stopped being the hard part. In January I wrote that [AI writes 100% of my code](https://onmax.me/posts/how-i-use-claude-code). That's still true. What changed is how I spend the day: deciding what to build, then checking what came back. Part architect, part designer, mostly reviewer.

The one I'm reviewing writes faster than I can read, and on plenty of topics it knows more than I do. Nobody taught us how to work with a colleague like that. I'm learning it one pull request at a time, and the first lesson is that my attention is now the scarce part.

## Review is the bottleneck

An agent opens a pull request in minutes. Reading it properly takes me longer than writing it used to. Duma and others looked at agent-authored pull requests on GitHub for [a paper at EASE 2026](https://arxiv.org/abs/2605.02273). Most got no review at all, and most of the review comments they did get came from other agents. When output is cheap and attention isn't, people stop looking.

More agents reviewing the agents won't fix that. Someone still has to decide whether this is what they wanted, and that someone is me.

## A diff is the wrong picture

A diff shows what changed in the code. It's a bad way to show what changed for the person using the app. Forty lines of Tailwind classes don't tell me whether the card still fits on a phone. To find out, I check out the branch, install, start the dev server, click to the right page, and resize the window. Five minutes if nothing breaks. With ten agent pull requests in a day, I skip it, and I'd bet you do too.

We're visual. Put two screenshots next to each other and I see the problem in a second. The agent's time is cheap and mine isn't, so the agent should do the clicking and hand me the picture.

## Two fixes

The first is giving pull requests a structure. A pull request that says what it meant to do, what it touched, and how it was checked, in the same order every time, reads faster than free-form prose.

The second is one anyone can start today. Every pull request that changes something on screen comes with a before/after doc. I call it a beaf.

## What a beaf is

A beaf is the same screen before and after the change, side by side, with what changed marked. Here is one from the [justfuckingusenuxt.com redesign](https://github.com/Just-Fucking-Use-Vue-js/justfuckingusenuxt.com/pull/18).

![A beaf: on the left, the old conventions table on a phone, cut off at the right edge and marked in red. On the right, the new list with one row per convention, marked in green.](/images/posts/wheres-the-beaf.webp)

I never opened that branch on a phone. I didn't need to.

A beaf has four rules:

- Capture both states at the same viewport, with the same data and the same scroll position. Otherwise you're comparing two different screens.
- Mark only what changed. Red for what was wrong, green for the fix.
- Write one line on how to reach the screen. Skip the paragraphs that describe what the images already show.
- The agent makes it. You read it.

## Why it should be a standard

A beaf tells the reviewer where to look before they read a line of code. The diff then answers a narrower question: is this a sane way to get from the left picture to the right one?

It also checks the agent. To mark the change, the agent has to say what it thinks it changed. When the green box sits on something that didn't change, or the after shot still shows the bug, you've caught a mistake without reading any code.

And it costs almost nothing. The agent already has a preview deploy and a browser. Two Playwright screenshots, one of production and one of the preview, are enough. You don't need my tools for it. Two images in the pull request description count as a beaf.

## How I make mine

I built two pieces for this. [comark-annotate](https://comark.onmax.me/annotate/) is a Comark plugin that turns Markdown into screenshots with hand-drawn boxes, arrows, and notes. The beaf above is just this:

```md
::compare
:::screenshot{src="before.png" viewport="390x844"}
::::annotation{x=4.1 y=39.8 w=95.9 h=60.2 color="red"}
The table is wider than the screen.
::::
:::
:::screenshot{src="after.png" viewport="390x844"}
::::annotation{x=4.1 y=37.9 w=91.8 h=62.1 color="green"}
Each row stacks the Vue step, the Nuxt way, and the example.
::::
:::
::
```

[Drop](https://drop.vitehub.dev) is where the doc lives. The agent publishes it with one MCP call, reviewers comment on the exact spot in the screenshot, and the agent reads those comments and publishes the next version at the same link. The `pr-evidence` skill connects the two. After the agent opens a pull request that changes the UI, it captures both states, measures where each mark goes in the page instead of guessing from the image, writes the beaf, and comments the link on the pull request.

## No beaf, no merge

My rule now: a pull request that changes something on screen and comes without a beaf doesn't get my review. Without it I'd be guessing what changed, and I'm slower at guessing than the agent is at taking screenshots.

If your agent can open a pull request, it can take two screenshots. Ask it to. And the next time a UI pull request lands without them, you know what to ask.

Where's the beaf?
