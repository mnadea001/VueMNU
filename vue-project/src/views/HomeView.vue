<script setup lang="ts">
import meditateImg from "../assets/meditation.gif";
import meditation from "../assets/noisyimg.jpg";
import study from "../assets/unsplash.jpg";
import VTypical from "vue-typical";
import { defineComponent } from "vue";

const meditateImageSrc: string = meditateImg;
const meditationImageSrc: string = meditation;
const studyImageSrc: string = study;
defineComponent({
  components: {
    VTypical,
  },
});
</script>

<template>
  <main>
    <div class="home-box">
      <h1 class="text-3xl font-semibold text-center my-4">WELCOME NEW YOGI</h1>
      <div class="image-container">
        <img :src="meditateImageSrc" class="w-80 h-80" />

        <h2>YOGA IS THE UNION OF BODY AND MIND</h2>
        <v-typical
          class="blink"
          :steps="[
            'FIND',
            1000,
            'FIND HARMONY',
            500,
            'FIND HARMONY AND BE HAPPY !! 🧘‍♀️',
            1000,
          ]"
          :loop="Infinity"
          :wrapper="'h2'"
        ></v-typical>
      </div>
      <div class="image-btn pt-5">
        <img :src="meditationImageSrc" class="w-40 h-40 px-2 rounded-full" />
        <img :src="studyImageSrc" class="w-40 h-40 px-2 rounded-full" />
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;
  height: 100vh;
}

h1,
h2 {
  font-family: "Anton", sans-serif;
}

.image-container {
  display: grid;
  place-items: center;
}

.image-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
