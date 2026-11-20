import { defineForm } from 'vite-hub/forms'
import { WorkflowReviewSchema } from '../../shared/workflow-review'

// POST /api/_vitehub/forms/workflow-review. The request lands in the Console's Forms inbox, then mails Maxi through
// the EMAIL binding of wrangler.json, which only sends to his address. A reply goes to the sender.
export default defineForm({
  schema: WorkflowReviewSchema,
  maxBytes: 8_192,
  notify: {
    email: {
      to: 'maximogarciamtnez@gmail.com',
      from: 'hello@onmax.me',
      subject: ({ company }) => `AI workflow review: ${company.replace(/\s+/g, ' ')}`,
      replyTo: 'email'
    }
  }
})
