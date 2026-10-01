export function formatDate(date: string | Date, month: 'short' | 'long' = 'short') {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month, day: 'numeric' })
}
