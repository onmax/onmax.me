<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({ email: '', message: '' })

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const form = document.createElement('form')
  form.action = 'https://formsubmit.co/maximogarciamtnez@gmail.com'
  form.method = 'POST'
  Object.entries(event.data).forEach(([k, v]) => {
    const input = document.createElement('input')
    input.name = k
    input.value = v
    form.appendChild(input)
  })
  document.body.appendChild(form)
  form.submit()
}
</script>

<template>
  <div>
    <div class="mr-4 whitespace-nowrap py-4">
      <h2 class="sticky top-[calc(50%-12px)] text-lg font-bold w-32 text-right">
        Contact me
      </h2>
    </div>

    <UForm
      :schema="schema"
      :state="state"
      class="ml-44 mt-3 flex flex-col max-w-4xl gap-y-2"
      @submit="onSubmit"
    >
      <UFormField
        label="Your email"
        name="email"
      >
        <UInput
          v-model="state.email"
          type="email"
          placeholder="joe@doe.com"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Your message"
        name="message"
        class="mt-4"
      >
        <UTextarea
          v-model="state.message"
          placeholder="Hi, I would like to talk about..."
          :rows="10"
          class="w-full"
        />
      </UFormField>

      <UButton
        type="submit"
        class="self-end mt-3"
      >
        Send
      </UButton>
    </UForm>
  </div>
</template>
