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
    class="enter py-10"
    style="--i: 4"
  >
    <h2 class="mb-3 text-sm text-dimmed">
      Contact
    </h2>
    <p class="text-[15px] leading-7 text-muted">
      Have something you want built? Email
      <a
        href="mailto:hello@onmax.me"
        class="link"
      >hello@onmax.me</a>,
      <a
        href="https://cal.com/onmax"
        target="_blank"
        rel="noreferrer"
        class="link"
      >book a call</a>,
      or leave a note. A few lines about the idea is plenty to start.
    </p>

    <UForm
      :schema="schema"
      :state="state"
      class="mt-6 space-y-4"
      @submit="onSubmit"
    >
      <UFormField
        label="Email"
        name="email"
      >
        <UInput
          v-model="state.email"
          type="email"
          placeholder="you@company.com"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Message"
        name="message"
      >
        <UTextarea
          v-model="state.message"
          placeholder="I want to build…"
          :rows="4"
          autoresize
          class="w-full"
        />
      </UFormField>

      <UButton
        type="submit"
        color="neutral"
        class="active:scale-[0.97] transition-transform"
      >
        Send
      </UButton>
    </UForm>
  </section>
</template>
