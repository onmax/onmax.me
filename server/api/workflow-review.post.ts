import { createError, defineEventHandler, getRequestHeader, getRequestURL, readBody, setResponseStatus } from 'nuxt/server'

interface WorkflowReviewBody {
  email?: unknown
  company?: unknown
  workflow?: unknown
  website?: unknown
}

interface SendEmailBinding {
  send(message: {
    to: string
    from: string
    replyTo: string
    subject: string
    text: string
  }): Promise<{ messageId: string }>
}

const recipient = 'maximogarciamtnez@gmail.com'
const sender = 'hello@onmax.me'
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function requiredText(value: unknown, field: string, maxLength: number) {
  if (typeof value !== 'string') {
    throw createError({ status: 400, statusText: `Invalid ${field}` })
  }

  const text = value.trim()
  if (!text || text.length > maxLength) {
    throw createError({ status: 400, statusText: `Invalid ${field}` })
  }

  return text
}

export default defineEventHandler(async (event) => {
  if (!getRequestHeader(event, 'content-type')?.toLowerCase().startsWith('application/json')) {
    throw createError({ status: 415, statusText: 'JSON required' })
  }

  const contentLength = Number(getRequestHeader(event, 'content-length') || 0)
  if (contentLength > 8_192) {
    throw createError({ status: 413, statusText: 'Request too large' })
  }

  const origin = getRequestHeader(event, 'origin')
  if (origin && origin !== getRequestURL(event).origin) {
    throw createError({ status: 403, statusText: 'Invalid origin' })
  }

  const body = await readBody<WorkflowReviewBody>(event)

  // A filled honeypot is treated as success so automated submissions do not retry.
  if (typeof body.website === 'string' && body.website.trim()) {
    setResponseStatus(event, 202)
    return { ok: true }
  }

  const email = requiredText(body.email, 'email', 320).toLowerCase()
  const company = requiredText(body.company, 'company', 120).replace(/\s+/g, ' ')
  const workflow = requiredText(body.workflow, 'workflow', 5_000)

  if (!emailPattern.test(email) || workflow.length < 20) {
    throw createError({ status: 400, statusText: 'Invalid workflow review' })
  }

  // Nitro 3 puts the Worker bindings on the request, not on event.context.
  const { runtime } = event.req as Request & { runtime?: { cloudflare?: { env?: { WORKFLOW_REVIEW_EMAIL?: SendEmailBinding } } } }
  const emailBinding = runtime?.cloudflare?.env?.WORKFLOW_REVIEW_EMAIL
  if (!emailBinding) {
    throw createError({ status: 503, statusText: 'Email service unavailable' })
  }

  try {
    await emailBinding.send({
      to: recipient,
      from: sender,
      replyTo: email,
      subject: `AI workflow review: ${company}`,
      text: [
        `Company: ${company}`,
        `Reply email: ${email}`,
        `Submitted: ${new Date().toISOString()}`,
        `Current workflow:\n${workflow}`
      ].join('\n\n')
    })
  } catch (error) {
    console.error('Workflow review email failed', error instanceof Error ? error.message : 'Unknown error')
    throw createError({ status: 502, statusText: 'Could not send workflow review' })
  }

  event.res.headers.set('cache-control', 'no-store')
  setResponseStatus(event, 201)
  return { ok: true }
})
