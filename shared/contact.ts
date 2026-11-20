import { z } from 'zod'

// The contact form on the home page. The page validates with it, and so does server/forms/contact.ts.
export const ContactSchema = z.object({
  email: z.string().trim().toLowerCase().max(320).email('Enter a valid email'),
  message: z.string().trim().min(10, 'Tell me a little more so I can give you a useful reply').max(5_000)
})
