<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'

interface GlareHoverProps {
  background?: string
  borderRadius?: string
  borderColor?: string
  glareColor?: string
  glareOpacity?: number
  glareAngle?: number
  glareSize?: number
  transitionDuration?: number
  playOnce?: boolean
  className?: string
}

const props = withDefaults(defineProps<GlareHoverProps>(), {
  background: 'transparent',
  borderRadius: '0',
  borderColor: '#333',
  glareColor: '#ffffff',
  glareOpacity: 0.5,
  glareAngle: -45,
  glareSize: 250,
  transitionDuration: 650,
  playOnce: false,
  className: ''
})

const overlayRef = useTemplateRef<HTMLDivElement>('overlayRef')

const rgba = computed(() => {
  const hex = props.glareColor.replace('#', '')
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = Number.parseInt(hex.slice(0, 2), 16), g = Number.parseInt(hex.slice(2, 4), 16), b = Number.parseInt(hex.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${props.glareOpacity})`
  }
  if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const r = Number.parseInt(hex.charAt(0) + hex.charAt(0), 16), g = Number.parseInt(hex.charAt(1) + hex.charAt(1), 16), b = Number.parseInt(hex.charAt(2) + hex.charAt(2), 16)
    return `rgba(${r}, ${g}, ${b}, ${props.glareOpacity})`
  }
  return props.glareColor
})

const overlayStyle = computed(() => ({
  position: 'absolute' as const,
  inset: '0',
  background: `linear-gradient(${props.glareAngle}deg, hsla(0,0%,0%,0) 60%, ${rgba.value} 70%, hsla(0,0%,0%,0) 100%)`,
  backgroundSize: `${props.glareSize}% ${props.glareSize}%, 100% 100%`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '-100% -100%, 0 0',
  pointerEvents: 'none' as const
}))

const animateIn = () => {
  const el = overlayRef.value
  if (!el) return
  el.style.transition = 'none'
  el.style.backgroundPosition = '-100% -100%, 0 0'
  void el.offsetHeight
  el.style.transition = `${props.transitionDuration}ms ease`
  el.style.backgroundPosition = '100% 100%, 0 0'
}

const animateOut = () => {
  const el = overlayRef.value
  if (!el) return
  el.style.transition = props.playOnce ? 'none' : `${props.transitionDuration}ms ease`
  el.style.backgroundPosition = '-100% -100%, 0 0'
}
</script>

<template>
  <div
    class="glare-hover"
    :class="props.className"
    :style="{ background: props.background, borderRadius: props.borderRadius }"
    @mouseenter="animateIn"
    @mouseleave="animateOut"
  >
    <div
      ref="overlayRef"
      :style="overlayStyle"
    />
    <slot />
  </div>
</template>

<style scoped>
.glare-hover { position: relative; display: grid; place-items: center; overflow: hidden; }
</style>
