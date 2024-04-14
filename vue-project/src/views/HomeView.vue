<script setup lang="ts">
import meditateImg from '../assets/meditation.gif'

import { RouterLink } from 'vue-router'
import VTypical from 'vue-typical'
import { defineComponent, ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const meditateImageSrc: string = meditateImg
defineComponent({
  components: {
    VTypical
  }
})

const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed(() => {
  const MAX_ROTATION = 150

  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)

  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<template>
  <main>
    <div class="home-box">
      <div
        ref="target"
        :style="{
          transform: cardTransform,
          transition: 'transform 0.25s ease-out'
        }"
      >
        <h1 class="text-3xl text-center my-4">Welcome new yogi</h1>
      </div>
      <div class="image-container">
        <div class="text-box">
          <h2 class="text-3xl text-center my-4">Yoga is the union of body & mind</h2>
          <v-typical
            class="blink"
            :steps="['find', 1000, 'find harmony', 500, 'find harmony & be happy !!', 1000]"
            :loop="Infinity"
            :wrapper="'h2'"
          ></v-typical>
          <RouterLink to="/index" class="btn-home-start text-xl my-3"
            >Let's start now !!</RouterLink
          >
        </div>
        <div class="image-box">
          <img :src="meditateImageSrc" class="w-80 h-80" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

main {
  width: 100vw;
  height: 100vh;
}

h1 {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.5em;
}

h2 {
  font-family: 'Caprasimo', sans-serif;
}

.home-box {
  padding: 50px;
}
.image-container {
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-top: 50px;
  width: 80%;
}

.text-box,
.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
}

.btn-home-start {
  background-color: blue;
  border-radius: 35px;
  font-family: 'Caprasimo', sans-serif;
  padding: 10px 15px;
  margin-bottom: 10px;
  color: white;
}

.btn-home-start:hover {
  background-color: rgb(134, 134, 244);
}

@media screen and (max-width: 768px) {
  .btn-home-start {
    background-color: blue;
    font-size: small;
    border-radius: 35px;
    font-family: 'Caprasimo', sans-serif;
    padding: 10px 15px;
    margin-bottom: 30px;
  }

  .image-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
