<script setup lang="ts">
import VTypical from 'vue-typical'
import { defineComponent } from 'vue'
import chillImg from '../assets/chill.gif'
import BackButton from '@/components/BackButton.vue'

const chillImageSrc: string = chillImg

defineComponent({
  components: {
    VTypical
  }
})
</script>

<template>
  <main>
    <BackButton />
    <div class="home-box">
      <h1 class="text-center my-4">Meditation</h1>
      <h2>to calm the mind</h2>
      <div class="title-container">
        <v-typical
          class="blink"
          :steps="[
            'GET READY',
            1000,
            'GET READY FOR AN',
            500,
            'GET READY FOR AN IMMERSIVE EXPERIENCE !!',
            1000
          ]"
          :loop="Infinity"
          :wrapper="'h3'"
        ></v-typical>
      </div>
      <div class="image-btn">
        <img :src="chillImageSrc" class="h-80 rounded-full" />
      </div>
      <div class="image-container">
        <RouterLink to="/buddha" class="btn-home-start text-3xl my-3"
          >Let's start now !!</RouterLink
        >
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
  height: 100% !important;
}

h1 {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.5em;
  color: #d1f23f;
  line-height: 1.5;
  word-wrap: break-word;
}

h2,
h3 {
  font-weight: 400;
  font-style: bold;
  font-size: 2.5em !important;
  margin-bottom: 50px;
  font-family: 'Anton', sans-serif;
  text-align: center;
}

.title-container {
  display: grid;
  place-items: center;
}

.content-btn {
  margin-left: 80px;
}
.image-container {
  display: grid;
  place-items: center;
}
.image-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btn-home-start {
  background-color: blue;
  border-radius: 35px;
  padding: 10px 15px;
  font-family: 'Caprasimo', sans-serif;
  color: white;
}

.btn-home-start:hover {
  background-color: rgb(134, 134, 244);
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 40px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
