<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Enter a valid work email'),
  company: z.string().min(2, 'Enter your company name'),
  workflow: z.string().min(20, 'Describe the current process in a little more detail'),
  website: z.string().max(0).optional()
})

type Schema = z.output<typeof schema>

const state = reactive({ email: '', company: '', workflow: '', website: '' })
const submitting = ref(false)
const submitted = ref(false)
const submitError = ref('')

async function onError() {
  await nextTick()
  setTimeout(() => {
    document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
  }, 0)
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  submitting.value = true
  submitted.value = false
  submitError.value = ''

  try {
    await $fetch('/api/workflow-review', {
      method: 'POST',
      body: event.data
    })

    state.email = ''
    state.company = ''
    state.workflow = ''
    submitted.value = true
  } catch {
    submitError.value = 'I could not send this request. Please email me at hello@onmax.me.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="w-full max-w-2xl lg:ml-auto"
    @error="onError"
    @submit="onSubmit"
  >
    <input
      v-model="state.website"
      type="text"
      name="website"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
      class="absolute -left-[9999px]"
    >

    <div class="grid gap-5 sm:grid-cols-2">
      <UFormField
        label="Work email"
        name="email"
      >
        <UInput
          v-model="state.email"
          type="email"
          placeholder="you@company.com"
          autocomplete="email"
          :spellcheck="false"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Company"
        name="company"
      >
        <UInput
          v-model="state.company"
          placeholder="Company name"
          autocomplete="organization"
          size="lg"
          class="w-full"
        />
      </UFormField>
    </div>

    <UFormField
      label="What happens today?"
      name="workflow"
      class="mt-5"
      help="Describe the trigger, manual steps, and tools involved."
    >
      <UTextarea
        v-model="state.workflow"
        placeholder="A request arrives by email, then someone…"
        autocomplete="off"
        :rows="6"
        autoresize
        class="w-full"
      />
    </UFormField>

    <UButton
      type="submit"
      color="neutral"
      size="lg"
      trailing-icon="i-lucide-arrow-right"
      :loading="submitting"
      class="mt-7 w-full justify-center sm:w-auto"
    >
      Review one workflow
    </UButton>

    <p
      v-if="submitted"
      role="status"
      class="mt-4 text-sm font-medium text-success"
    >
      Thank you. Your workflow is in my inbox.
    </p>
    <p
      v-else-if="submitError"
      role="alert"
      class="mt-4 text-sm font-medium text-error"
    >
      {{ submitError }}
    </p>
    <p
      v-else
      class="mt-4 text-xs leading-5 text-muted"
    >
      I reply personally. If a standard tool is the better answer, I'll say so.
    </p>
  </UForm>
</template>
