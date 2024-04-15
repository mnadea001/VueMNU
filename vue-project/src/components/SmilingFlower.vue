<template>
  <div class="image-menu" ref="eyesContainer">
    <img :src="flowerImageSrc" class="flower-image" />
    <img :src="eyesImageSrc" class="eyes-image" ref="eyesImage" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import flowerImageSrc from '../assets/smile.png'
import eyesImageSrc from '../assets/eyes.png'

const eyesContainer = ref<HTMLElement | null>(null)
const eyesImage = ref<HTMLImageElement | null>(null)

onMounted(() => {
  if (eyesContainer.value && eyesImage.value) {
    eyesContainer.value.addEventListener('mousemove', handleMouseMove)
  }
})

onUnmounted(() => {
  if (eyesContainer.value && eyesImage.value) {
    eyesContainer.value.removeEventListener('mousemove', handleMouseMove)
  }
})

const handleMouseMove = (event: MouseEvent) => {
  if (!eyesImage.value) return

  const eyesRect = eyesImage.value.getBoundingClientRect()
  const mouseX = event.clientX
  const mouseY = event.clientY

  const eyesX = eyesRect.left + eyesRect.width / 2
  const eyesY = eyesRect.top + eyesRect.height / 2

  const deltaX = mouseX - eyesX
  const deltaY = mouseY - eyesY

  const angle = Math.atan2(deltaY, deltaX)
  const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 10)

  const eyeOffsetX = Math.cos(angle) * distance
  const eyeOffsetY = Math.sin(angle) * distance

  if (eyesImage.value) {
    eyesImage.value.style.transform = `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`
  }
}
</script>

<style scoped>
.image-menu {
  position: relative;
  display: inline-block;
}

.flower-image {
  width: 100%;
  height: auto;
}

.eyes-image {
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(-50%, -50%);
}
</style>
