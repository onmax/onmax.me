<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Tell me a little more so I can give you a useful reply')
})

type Schema = z.output<typeof schema>

const state = reactive({ email: '', message: '' })

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const form = document.createElement('form')
  form.action = 'https://formsubmit.co/maximogarciamtnez@gmail.com'
  form.method = 'POST'
  Object.entries(event.data).forEach(([key, value]) => {
    const input = document.createElement('input')
    input.name = key
    input.value = value
    form.appendChild(input)
  })
  document.body.appendChild(form)
  form.submit()
}
</script>

<template>
  <section
    id="contact"
    class="py-24 sm:py-32"
  >
    <UContainer>
      <div class="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,32rem)] lg:gap-24">
        <div>
          <p class="eyebrow">
            Contact
          </p>
          <h2 class="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-highlighted sm:text-5xl">
            Have a difficult Nuxt problem?
            <span class="display-serif font-normal italic">Send the context.</span>
          </h2>
          <p class="mt-6 max-w-xl text-base leading-7 text-muted">
            A repository link, the behavior you want, and the constraint holding the team back are enough for a useful first conversation.
          </p>
          <a
            href="mailto:hello@onmax.me"
            class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-highlighted underline decoration-muted underline-offset-4 hover:decoration-highlighted"
          >
            hello@onmax.me
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4"
            />
          </a>
        </div>

        <UForm
          :schema="schema"
          :state="state"
          class="rounded-xl border border-default bg-elevated p-6 sm:p-8"
          @submit="onSubmit"
        >
          <UFormField
            label="Your email"
            name="email"
          >
            <UInput
              v-model="state.email"
              type="email"
              placeholder="you@company.com"
              size="lg"
              class="w-full"
            />
          </UFormField>

          <UFormField
            label="What are you trying to ship?"
            name="message"
            class="mt-5"
          >
            <UTextarea
              v-model="state.message"
              placeholder="We have a Nuxt app that…"
              :rows="6"
              autoresize
              class="w-full"
            />
          </UFormField>

          <UButton
            type="submit"
            color="neutral"
            trailing-icon="i-lucide-arrow-right"
            class="mt-6"
          >
            Send message
          </UButton>
        </UForm>
      </div>
    </UContainer>
  </section>
</template>
