import { z } from 'zod'

// The /ai-workflows request form. The page validates with it, and so does server/forms/workflow-review.ts.
export const WorkflowReviewSchema = z.object({
  email: z.string().trim().toLowerCase().max(320).email('Enter a valid work email'),
  company: z.string().trim().min(2, 'Enter your company name').max(120),
  workflow: z.string().trim().min(20, 'Describe the current process in a little more detail').max(5_000)
})
