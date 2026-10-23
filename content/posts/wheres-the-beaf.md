---
title: "Where's the beaf?"
description: "Agents write my code, so reviewing it is my job. I review with my eyes, and a before/after doc makes that way easier. I call it a beaf."
publishedAt: 2026-10-23
image: /images/posts/wheres-the-beaf-og.png
---

In January I wrote that [AI writes 100% of my code](https://onmax.me/posts/how-i-use-claude-code). Still true. What changed is my day. I decide what to build, then I check what comes back. Mostly I check.

## Reading is the slow part

An agent opens a pull request in minutes. Reading it properly takes me longer than writing it used to.

It's not just me. Duma and others looked at agent-authored pull requests on GitHub for [a paper at EASE 2026](https://arxiv.org/abs/2605.02273). Most got no review at all. And most of the review comments they did get came from other agents.

More agents reviewing agents won't fix that. Someone still has to say "yes, this is what I wanted".

## A diff is the wrong picture

Forty lines of Tailwind classes won't tell me if the card still fits on a phone. To find out, I check out the branch, install, start the dev server, click to the right page, resize the window. Five minutes if nothing breaks. With ten agent pull requests in a day, I skip it. I'd bet you do too.

Two things help. One is structure, so the pull request reads faster. Anthony Fu's [pulls.review](https://pulls.review/) is a nice take on that. The other one you can start today: screenshots. Put two side by side and I see the problem in a second.

I didn't come up with this. I was greatly inspired by Hugo Richard's pull requests to Daniel Roe's my-bad, like [this one](https://github.com/danielroe/my-bad/pull/22) with an interactive before/after design review, or [this one](https://github.com/danielroe/my-bad/pull/71) where his agent put before/after screenshots in the description. I wanted that on every pull request.

## So, what's a beaf?

The same screen before and after, side by side, with the change marked. Before plus after. Yes, it's a "Where's the beef?" pun.

Here's one from the [justfuckingusenuxt.com redesign](https://github.com/Just-Fucking-Use-Vue-js/justfuckingusenuxt.com/pull/18).

::compare
:::screenshot{src="/images/posts/beaf-before.webp" alt="Old conventions table on a phone, cut off at the right edge" viewport="390x844" href="https://justfuckingusenuxt.com"}
::::annotation{x=4.1 y=39.8 w=95.9 h=60.2 color="red"}
The table is wider than the screen and the Example column is cut off.
::::
:::

:::screenshot{src="/images/posts/beaf-after.webp" alt="New conventions list on a phone, one row per convention" viewport="390x844"}
::::annotation{x=4.1 y=37.9 w=91.8 h=62.1 color="green"}
Each row stacks the Vue step, the Nuxt way, and the example.
::::
:::
::

I never opened that branch on a phone. Didn't need to.

Keep it simple. Same viewport, data and scroll position on both sides. Mark only what changed, red for the problem, green for the fix. The agent makes it, you read it.

I know where to look before I open the diff. It catches the agent too. A green box on something that didn't change is a mistake, and I didn't read a line to find it. And it's cheap. Two Playwright screenshots, production and preview, pasted in the description, already count.

## How I make mine

You don't need my tools for this. But I built some.

[comark-annotate](https://comark.onmax.me/annotate/) turns Markdown into screenshots with hand-drawn boxes, arrows and notes. The beaf above is one `::compare` block with two screenshots, and this blog now renders it with Comark.

[Drop](https://drop.vitehub.dev) is where it lives. Reviewers comment on the screenshot, and the agent publishes the next version at the same link.

The `pr-evidence` skill glues them together. When the agent opens a UI pull request, it takes both screenshots, writes the beaf and comments the link.

## No beaf, no merge (kidding)

I still review pull requests without a beaf. It's just way easier with one.

If your agent can open a pull request, it can take two screenshots. Ask it for them. And next time a UI pull request shows up without any, you know what to ask.

Where's the beaf?
