export default defineAppConfig({
  ui: {
    colors: { primary: 'neutral', neutral: 'neutral' },
    prose: {
      h2: { slots: { base: 'text-lg font-semibold tracking-tight mt-12 mb-4' } },
      h3: { slots: { base: 'text-base font-semibold mt-8 mb-3' } }
    }
  }
})
