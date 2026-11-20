<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import type { z } from 'zod'
import { submitForm } from 'vite-hub/forms/client'
import { FormHoneypot } from 'vite-hub/forms/vue'
import { ContactSchema } from '~~/shared/contact'

type Schema = z.output<typeof ContactSchema>

const state = reactive({ email: '', message: '' })
// The honeypot that server/forms/contact.ts checks: people leave it empty, bots fill it
const website = ref('')
const submitting = ref(false)
const submitted = ref(false)
const submitError = ref('')

async function onError() {
  await nextTick()
  setTimeout(() => {
    document.querySelector<HTMLElement>('#contact [aria-invalid="true"]')?.focus()
  }, 0)
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  submitting.value = true
  submitted.value = false
  submitError.value = ''

  const [error] = await submitForm('contact', { ...event.data, website: website.value })
  submitting.value = false
  if (error) {
    submitError.value = 'I could not send this note. Please email me at hello@onmax.me.'
    return
  }

  state.email = ''
  state.message = ''
  submitted.value = true
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
      :schema="ContactSchema"
      :state="state"
      class="mt-6 space-y-4"
      @error="onError"
      @submit="onSubmit"
    >
      <FormHoneypot v-model="website" />

      <UFormField
        label="Email"
        name="email"
      >
        <UInput
          v-model="state.email"
          type="email"
          placeholder="you@company.com"
          autocomplete="email"
          :spellcheck="false"
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
        :loading="submitting"
        class="active:scale-[0.97] transition-transform"
      >
        Send
      </UButton>

      <p
        v-if="submitted"
        role="status"
        class="text-sm text-success"
      >
        Thank you. Your note is in my inbox.
      </p>
      <p
        v-else-if="submitError"
        role="alert"
        class="text-sm text-error"
      >
        {{ submitError }}
      </p>
    </UForm>
  </section>
</template>
