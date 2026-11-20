import { defineForm } from 'vite-hub/forms'
import { ContactSchema } from '../../shared/contact'

// POST /_vitehub/forms/contact, from the home page. The note lands in the Console's Forms inbox, then mails Maxi
// through the EMAIL binding of wrangler.json, which only sends to his address. A reply goes to the sender.
export default defineForm({
  schema: ContactSchema,
  maxBytes: 8_192,
  notify: {
    email: {
      to: 'maximogarciamtnez@gmail.com',
      from: 'hello@onmax.me',
      subject: ({ email }) => `onmax.me note from ${email}`,
      replyTo: 'email'
    }
  }
})
