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
    throw createError({ statusCode: 400, statusMessage: `Invalid ${field}` })
  }

  const text = value.trim()
  if (!text || text.length > maxLength) {
    throw createError({ statusCode: 400, statusMessage: `Invalid ${field}` })
  }

  return text
}

export default defineEventHandler(async (event) => {
  if (!getHeader(event, 'content-type')?.toLowerCase().startsWith('application/json')) {
    throw createError({ statusCode: 415, statusMessage: 'JSON required' })
  }

  const contentLength = Number(getHeader(event, 'content-length') || 0)
  if (contentLength > 8_192) {
    throw createError({ statusCode: 413, statusMessage: 'Request too large' })
  }

  const origin = getHeader(event, 'origin')
  if (origin && origin !== getRequestURL(event).origin) {
    throw createError({ statusCode: 403, statusMessage: 'Invalid origin' })
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
    throw createError({ statusCode: 400, statusMessage: 'Invalid workflow review' })
  }

  const emailBinding = event.context.cloudflare?.env?.WORKFLOW_REVIEW_EMAIL as SendEmailBinding | undefined
  if (!emailBinding) {
    throw createError({ statusCode: 503, statusMessage: 'Email service unavailable' })
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
    throw createError({ statusCode: 502, statusMessage: 'Could not send workflow review' })
  }

  setHeader(event, 'cache-control', 'no-store')
  setResponseStatus(event, 201)
  return { ok: true }
})
