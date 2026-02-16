<template>
  <div
    style="position: relative; display: inline-block;"
    :style="containerStyle"
  >
    <div
      style="display: flex; overflow: hidden;"
      :style="counterStyles"
    >
      <div
        v-for="place in places"
        :key="place"
        style="position: relative; width: 1ch; font-variant-numeric: tabular-nums;"
        :style="digitStyles"
      >
        <Motion
          v-for="digit in 10"
          :key="digit - 1"
          tag="span"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"
          :animate="{ y: getDigitPosition(place, digit - 1) }"
        >
          {{ digit - 1 }}
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Motion } from 'motion-v'
import type { CSSProperties } from 'vue'

interface CountUpProps {
  value: number
  fontSize?: number
  padding?: number
  places?: number[]
  gap?: number
  borderRadius?: number
  horizontalPadding?: number
  textColor?: string
  fontWeight?: string | number
  containerStyle?: CSSProperties
  counterStyle?: CSSProperties
  digitStyle?: CSSProperties
}

const props = withDefaults(defineProps<CountUpProps>(), {
  fontSize: 100,
  padding: 0,
  places: () => [100, 10, 1],
  gap: 8,
  borderRadius: 4,
  horizontalPadding: 8,
  textColor: 'white',
  fontWeight: 'bold',
  containerStyle: () => ({}),
  counterStyle: () => ({}),
  digitStyle: () => ({})
})

const digitHeight = computed(() => props.fontSize + props.padding)

const counterStyles = computed(() => ({
  fontSize: `${props.fontSize}px`,
  gap: `${props.gap}px`,
  borderRadius: `${props.borderRadius}px`,
  paddingLeft: `${props.horizontalPadding}px`,
  paddingRight: `${props.horizontalPadding}px`,
  color: props.textColor,
  fontWeight: props.fontWeight,
  ...props.counterStyle
}))

const digitStyles = computed(() => ({
  height: `${digitHeight.value}px`,
  ...props.digitStyle
}))

const springValues = ref<Record<number, number>>({})

const initializeSpringValues = () => {
  props.places.forEach((place) => {
    springValues.value[place] = Math.floor(props.value / place)
  })
}
initializeSpringValues()

watch(() => props.value, (newValue, oldValue) => {
  if (newValue === oldValue) return
  props.places.forEach((place) => {
    const newRoundedValue = Math.floor(newValue / place)
    const oldRoundedValue = springValues.value[place]
    if (newRoundedValue !== oldRoundedValue)
      springValues.value[place] = newRoundedValue
  })
}, { immediate: true })

watch(() => digitHeight.value, () => {
  positionCache.clear()
})

const positionCache = new Map<string, number>()

const getDigitPosition = (place: number, digit: number): number => {
  const springValue = springValues.value[place] || 0
  const cacheKey = `${place}-${digit}-${springValue}`
  if (positionCache.has(cacheKey)) return positionCache.get(cacheKey)!

  const placeValue = springValue % 10
  const offset = (10 + digit - placeValue) % 10
  let position = offset * digitHeight.value
  if (offset > 5) position -= 10 * digitHeight.value

  if (positionCache.size > 200) {
    const firstKey = positionCache.keys().next().value
    if (typeof firstKey === 'string') positionCache.delete(firstKey)
  }

  positionCache.set(cacheKey, position)
  return position
}
</script>
