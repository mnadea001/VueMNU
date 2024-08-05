<template>
  <main>
    <h1 class="text-center my-4">
      Yoga is the union <br />
      of body & mind
    </h1>
    <div class="my-4">
      <v-typical
        class="blink"
        :steps="['FIND', 500, 'FIND HARMONY & BE HAPPY !!', 1000]"
        :loop="Infinity"
        :wrapper="'h2'"
      ></v-typical>
    </div>
    <img :src="namasteImageSrc" class="img-yoga h-80 my-4" />

    <div class="section-3">
      <StartButton />
    </div>
  </main>
</template>
<script setup lang="ts">
import namasteImageSrc from '../assets/meditation.gif'

import StartButton from '@/components/StartButton.vue'
import VTypical from 'vue-typical'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

main {
  width: 100vw;
  height: 100%;
}

.img-yoga {
  margin: auto;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-width: 100%;
}

h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #d1f23f;
  font-size: 4em;
}

h2 {
  font-weight: 400;
  font-style: bold;
  font-size: 2.5em;
  margin-bottom: 50px;
  text-align: center;
  font-family: 'Anton', sans-serif;
}

.section-3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 100px;
  position: relative;
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 30px !important;
  }
  h2 {
    font-size: 40px !important;
  }

  .section-2 div {
    margin-top: 0px;
  }
}
@media only screen and (min-width: 769px) and (max-width: 980px) {
  h1, h2 {
    font-size: 35px !important;
  }
}
@media only screen and (min-width: 981px) and (max-width: 1268px) {
  h1, h2 {
    font-size: 40px !important;
  }
}
</style>
