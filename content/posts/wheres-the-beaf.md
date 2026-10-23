---
title: "Where's the beaf?"
description: "Agents write my code, so reviewing it is my job. I review with my eyes, and a before/after doc makes that way easier. I call it a beaf."
publishedAt: 2026-10-23
image: /images/posts/wheres-the-beaf-og.png
---

In January I wrote that [AI writes 100% of my code](https://onmax.me/posts/how-i-use-claude-code). Still true. What changed is my job. These days I'm the designer, the architect, the QA tester and the product manager. Everything except the developer.

## I don't read every line anymore

An agent opens a pull request in minutes. If I read it line by line, I'm the slowest part of the whole thing.

So I skim. I check that the architecture still holds: code lives where it should, nothing weird snuck in, and it isn't slop. How each function works inside matters a lot less than it used to. Semicolons and formatting are the linter's problem, not mine.

My time goes into testing instead. I try the cases I care about, and I have the agent write far more tests than I'd ever write by hand. Most are boring. Some find bugs.

Agents review too. Anthropic's [Code Review](https://claude.com/resources/articles/code-review) sends a few of them through every pull request to hunt for bugs. It's useful. But no agent can tell me "yes, this is what I wanted". That part is still mine, and for anything with a UI, I answer it with my eyes.

## A diff is the wrong picture

Forty lines of Tailwind classes won't tell me if the card still fits on a phone. To find out, I have to:

1. Check out the branch and start the app.
2. Click my way to the right page.
3. Shrink the window to phone size.

Five minutes if nothing breaks. With ten agent pull requests a day, I skip it. I bet you do too.

Two things help. One is structure, so the pull request reads faster. Anthony Fu's [pulls.review](https://pulls.review/) is a nice take on that. The other you can start today: screenshots. Put two side by side and I see the problem in a second.

I didn't come up with this. It comes from Hugo, from the Nuxt team, and his pull requests to [my-bad](https://github.com/danielroe/my-bad), a small library that gives dev servers nicer error pages. In [this one](https://github.com/danielroe/my-bad/pull/22) he shipped an interactive before/after design review. In [this one](https://github.com/danielroe/my-bad/pull/71) his agent put before/after screenshots right in the description. I wanted that on every pull request.

## So, what's a beaf?

The same screen, (be)fore and (af)ter, side by side, with the change marked. Yes, it's a "Where's the beef?" pun.

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

Keep it simple. Same screen size, data and scroll position on both sides. Mark only what changed, red for the problem, green for the fix. The agent makes it, you read it.

I know where to look before I open the diff. It catches the agent too. A green box on something that didn't change is a mistake, and I found it without reading a line of code. And it's cheap. Two screenshots in the description, the live site next to the new version, already count.

## How I make mine

You don't need my tools for this. But I built some.

[comark-annotate](https://comark.onmax.me/annotate/) draws boxes, arrows and notes on screenshots from a few lines of Markdown. I made it for agents first. An agent can't draw on an image, but it can write Markdown, and its skill teaches it to measure where each mark goes on the page instead of guessing from pixels. Humans just read the result. I explain how agents use it [here](https://comark.onmax.me/guide/agents/). The beaf above is one `::compare` block, and this blog renders it with Comark.

[Drop](https://drop.vitehub.dev) is where people review it. They pin comments right on the screenshot, and the agent publishes the next version at the same link.

[ViteHub](https://vitehub.dev) is the library underneath Drop. Drop is [open source](https://github.com/vite-hub/drop), so you can deploy your own and make it your lab.

The `pr-evidence` skill ties it together. When the agent opens a UI pull request, it takes both screenshots, writes the beaf and comments the link.

## More than screenshots

I'm now trying the same idea on other kinds of work. A performance fix gets a chart, before and after. A support answer gets a short doc with the steps instead of a wall of text. HumanLayer's [show-me](https://github.com/humanlayer/skills/tree/main/plugins/show-me) skill pushed me here too. It explains a change with pseudocode, call trees and file trees, plain text that GitHub already renders. I think there's a lot more to try.

## No beaf, no merge (kidding)

I still review pull requests without a beaf. It's just way easier with one.

If your agent can open a pull request, it can take two screenshots. Ask it for them. And next time a UI pull request shows up without any, you know what to ask.

Where's the beaf?
