<template>
  <main class="dark:bg-white">
    <div class="main-content">
      <div class="content">
        <h1 class="text-3xl text-center my-4">About</h1>

        <div class="content-img my-4">
          <div ref="target" :style="{
            transform: cardTransform,
            transition: 'transform 0.25s ease-out'
          }">
            <img :src="namasteImageSrc" class="w-80 h-80 rounded-full my-4" />

          </div>
          <h2 class="text-xl text-center my-4">To create this app, I used:</h2>
          <ul>
            <li>Vue.js 3 with TypeScript</li>
            <li>APIs themealdb, yoga-api from alexcumplido</li>
            <li>Librairies vue-typical, tailwindcss, vueuse</li>
            <li>Threejs, Troisjs</li>
            <li>GIFs on Tenor and Giphy</li>
            <li>3D model on SketchFab</li>
          </ul>
          <br>
          <p class="text-center">Created By Mathilde NADEAU - April 2024</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';
import { useMouseInElement} from '@vueuse/core';

import namasteImageSrc from "../assets/namaste.gif";


const target = ref(null)

const {elementX, elementY, isOutside, elementHeight, elementWidth} = useMouseInElement(target)

const cardTransform = computed (() => {
  const MAX_ROTATION = 50

  const rX = (
    MAX_ROTATION / 2 - ( elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2)

  const rY = (
    ( elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2
  ).toFixed(2)

  return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})

</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  max-width: 100vw;
  height: 100%;
}

h1,
h2 {
  font-family: "Anton", sans-serif;
}
.main-content {
display: flex;
justify-content: center;
}

img {
  margin-bottom: 50px;
}
.content-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
  align-items: center;
  margin-bottom: 50px;
}
.content {
  width: 70%;
  padding: 15px;
}
ul li {
  text-align: center;
}
</style>
