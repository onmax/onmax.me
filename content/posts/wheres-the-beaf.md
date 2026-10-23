---
title: "Where's the beaf?"
description: "Agents write my code, so reviewing it is my job. I review with my eyes, and a before/after doc makes that way easier. I call it a beaf."
publishedAt: 2026-10-23
image: /images/posts/wheres-the-beaf-og.png
---

In January I wrote that [AI writes 100% of my code](https://onmax.me/posts/how-i-use-claude-code). Still true. But my job changed. Now I'm the designer, the architect, the QA tester, the product manager, the tech lead, the release manager, the support desk and, on bad days, the agent's therapist. Everything except the developer.

## I don't read every line anymore

Honestly? I can't. An agent opens a pull request in minutes. If I read every line, I'm the bottleneck.

So I skim, and I ask a lot. Mostly "did you consider doing it this other way?", because an agent doesn't have much curiosity. It goes with the first solution it finds, and getting it out of that box is hard. I also read a lot of code from other projects, and I ask my agent about it all the time. Not only to learn, but to bring the good solutions into my own project. And I use a lot of skills, so the agent already knows how I like things before it starts.

When I skim, I look at the big stuff. Is the architecture still OK? Is everything in the right place? Did something weird sneak in? Is it slop? How the code is written, I don't really care anymore. Semicolons or no semicolons, whatever.

What I do care about is what goes in and what comes out:

- what a function takes and what it returns
- what a developer writes and what they get back, so the DX
- what context the agent gets before it starts
- what the agent tests with, and what it gets back

How do I check them? By trying things. Most of the time that's not a Vitest file or an end-to-end suite. I let the agent open a browser with [agent-browser](https://agent-browser.dev) and run scenario after scenario, all the use cases I can think of. It runs on my VPS, so I don't watch. I only hear back when something breaks. I'm still picky about which tests get merged and run in CI, though. I don't want test slop either.

Reading the diff itself should get easier too. Anthony Fu's [pulls.review](https://pulls.review/) is a cool take on that. It groups and summarizes a pull request's changes so you get through them faster. My agents implement new things at insane numbers, each requiring scrutiny. Days end verifying.

## A diff is the wrong picture

Forty lines of Tailwind classes won't tell me if the card still fits on a phone. To know, I have to:

1. Check out the branch and start the app.
2. Click to the right page.
3. Make the window phone-sized.

That's five minutes per pull request when nothing breaks. With ten a day, I end up skipping it.

You know the saying, a picture is worth a thousand words? For UI, two pictures beat the whole diff. Put them side by side and I see the problem in a second.

The first time I saw this was in the work of Hugo, from the Nuxt team, on [my-bad](https://github.com/danielroe/my-bad), a small library for nicer dev-server error pages. In [one pull request](https://github.com/danielroe/my-bad/pull/18) he shared [a page of error screen ideas](https://my-bad-design-review.vercel.app/) with notes scribbled on top. That's when something clicked for me. I wanted that on every pull request.

## So, what's a "beaf"?

The same screen, (be)fore and (af)ter, side by side, with what changed marked on it. Yes, it's a ["Where's the beef?"](https://www.youtube.com/watch?v=Ug75diEyiA0) pun.

Here's one from the [justfuckingusenuxt.com redesign](https://github.com/Just-Fucking-Use-Vue-js/justfuckingusenuxt.com/pull/18). Click a screenshot to zoom in.

::compare
:::screenshot{src="/images/posts/beaf-hero-before.webp" alt="Old hero: headline and description on a flat green glow" viewport="1440x900" href="https://justfuckingusenuxt.com"}
::::annotation{x=7.8 y=17.8 w=84.4 h=8 color="red"}
A headline on a flat glow. No logo, no navigation, nothing to click.
::::
:::

:::screenshot{src="/images/posts/beaf-hero-after.webp" alt="New hero: Nuxt mark, headline, two actions, and particle mountains below" viewport="1440x900"}
::::annotation{x=0 y=66 w=100 h=28.4 mark="none" side="right"}
The particle mountains from the Nuxt 4.6 dev loading screen, ported to WebGL2.
::::

::::annotation{x=47.8 y=24.9 w=4.4 h=7.1 mark="circle" color="green"}
The Nuxt mark. Click it and a wave runs through the mountains.
::::

::::annotation{x=32.1 y=0.8 w=35.8 h=5.3 color="green"}
A header with section links, the color mode toggle, and GitHub.
::::

::::annotation{x=33.8 y=61.6 w=32.3 h=4.4 mark="underline" color="green"}
**Get Started** plus a copyable `npm create nuxt@latest`.
::::
:::
::

That pull request redid the whole page, so its beaf has one pair per section:

::carousel{title="justfuckingusenuxt.com redesign"}
:::compare
::::screenshot{src="/images/posts/beaf-features-before.webp" alt="Old features: an auto-scrolling card carousel cut off at both edges" viewport="1440x1100" href="https://justfuckingusenuxt.com"}
:::::annotation{x=2.2 y=25.5 w=95.6 h=19.3 color="red"}
Cards cut off at both edges, and they keep moving while you read.
:::::
::::

::::screenshot{src="/images/posts/beaf-features-after.webp" alt="New features: a bento grid of twelve cards, four of them wide with a one-line example" viewport="1440x1100"}
:::::annotation{x=7.8 y=24.7 w=84.4 h=70 color="green"}
One card per feature. The four wide ones show the code.
:::::
::::
:::

:::compare
::::screenshot{src="/images/posts/beaf-logos-before.webp" alt="Old production section: company names as text pills" viewport="1440x900" href="https://justfuckingusenuxt.com"}
:::::annotation{x=7.8 y=44.2 w=84.4 h=3.6 color="red"}
Nine company names as text pills.
:::::
::::

::::screenshot{src="/images/posts/beaf-logos-after.webp" alt="New production section: two rows of company logos" viewport="1440x900"}
:::::annotation{x=7.8 y=37.8 w=84.4 h=12.2 color="green"}
24 real logos in two rows that pause on hover.
:::::
::::
:::

:::compare
::::screenshot{src="/images/posts/beaf-when-before.webp" alt="Old section: six one-line questions that are collapsed accordions" viewport="1440x900" href="https://justfuckingusenuxt.com"}
:::::annotation{x=25.2 y=16.9 w=49.7 h=29.3 color="red"}
Six accordions that don't look like they open, so nobody sees the answers.
:::::
::::

::::screenshot{src="/images/posts/beaf-when-after.webp" alt="New section: six cards with question, answer, and doc link" viewport="1440x900"}
:::::annotation{x=7.8 y=23.1 w=84.4 h=41.9 color="green"}
A one-sentence answer per card, each with its doc link.
:::::
::::
:::

::

You get the whole redesign without running anything.

## How I automated it

You don't need my tools for this. Two screenshots in the description already count. But I got lazy and automated it, in four layers:

![Four layers, top to bottom: the pr-evidence skill, comark-annotate, Drop, and ViteHub](/images/posts/beaf-layers.svg)

- The [`pr-evidence`](https://github.com/vite-hub/drop/tree/main/skills/pr-evidence) skill puts it all together. When the agent opens a UI pull request, it takes the screenshots, writes the beaf and comments the link. It comes with Drop's MCP server through the [MCP Skills extension](https://modelcontextprotocol.io/extensions/skills/overview).
- [comark-annotate](https://comark.onmax.me/annotate/) draws the boxes, arrows and notes from a few lines of Markdown. It's one of almost 20 [Comark plugins](https://comark.onmax.me) I've built, mostly for agents to write, like charts, diffs, carousels and file trees. That repo keeps growing, so check it out.
- [Drop](https://drop.vitehub.dev) is where people comment on the beaf. The agent reads the comments and publishes the next version at the same link.
- [ViteHub](https://vitehub.dev) is the library under Drop. Drop is [open source](https://github.com/vite-hub/drop), so you can deploy your own and make it your lab.

## More than screenshots

I'm trying this on other stuff now. A performance fix gets a [before/after chart](https://comark.onmax.me/play/#preset=charts-performance). A support answer gets a little doc with the steps instead of a wall of text. HumanLayer's [show-me](https://github.com/humanlayer/skills/tree/main/plugins/show-me) skill pushed me here too. It explains a change with pseudocode and file trees, plain text that GitHub already shows. I feel there's so much more to try.

## Ask for the beaf

I still review pull requests without a beaf, don't worry. It's just way easier with one.

If your agent can open a pull request, it can take two screenshots. Just ask. And next time a UI pull request shows up without any, you know what to say.

Where's the beaf?
