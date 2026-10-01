<template>
  <section class="pb-6 pt-12 sm:pt-20">
    <div class="enter flex items-center gap-4">
      <NuxtImg
        src="/images/hire/maxi-founder.jpg"
        alt="Maxi García"
        width="96"
        height="96"
        class="size-12 rounded-full object-cover ring-1 ring-default"
        preload
      />
      <div class="text-sm">
        <h1 class="font-medium text-highlighted">
          Maxi García
          <UPopover :content="{ side: 'top', sideOffset: 6 }">
            <button
              type="button"
              class="ml-1 cursor-help font-normal text-dimmed underline decoration-dotted decoration-1 underline-offset-4 transition-colors hover:text-muted"
            >
              ยินดีที่ได้รู้จัก
            </button>
            <template #content>
              <p class="max-w-56 px-3 py-2 text-xs leading-5 text-muted">
                <span class="text-highlighted">Yin dee tee dai roo jak</span>, "nice to meet you". I'm learning Thai, one word at a time.
              </p>
            </template>
          </UPopover>
        </h1>
        <p class="text-muted">
          Nuxt &amp; agent engineer in Copenhagen, Denmark
        </p>
      </div>
    </div>

    <div
      class="enter mt-10 space-y-5 text-[15px] leading-7 text-muted"
      style="--i: 1"
    >
      <p>
        I build product interfaces, AI agents, and the automations that tie them together, mostly with Nuxt and Vue. Right now I work on forecasting and inventory planning at
        <a
          href="https://www.quiver.dk"
          target="_blank"
          rel="noreferrer"
          class="link"
        >Quiver</a>.
      </p>
      <p>
        I'm part of the
        <a
          href="https://nuxters.nuxt.com/onmax"
          target="_blank"
          rel="noreferrer"
          class="link"
        >Nuxt ecosystem team</a>, maintain
        <a
          href="https://better-auth.nuxt.dev"
          target="_blank"
          rel="noreferrer"
          class="link"
        >Better Auth for Nuxt</a>, and created
        <a
          href="https://vitehub.dev"
          target="_blank"
          rel="noreferrer"
          class="link"
        >ViteHub</a>. Before that I spent four years building products at
        <a
          href="https://nimiq.com"
          target="_blank"
          rel="noreferrer"
          class="link"
        >Nimiq</a>.
      </p>
      <p>
        I also build for hire, and not just Nuxt: websites, servers, internal tools, or an agent that takes a whole process off your plate. If it runs on a computer, I'd love to hear about it.
        <NuxtLink
          to="/#contact"
          class="link"
        >Get in touch</NuxtLink>.
      </p>
    </div>
  </section>
</template>
