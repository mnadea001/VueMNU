<script setup lang="ts">
import meditation from "../assets/noisyimg.jpg";
import study from "../assets/unsplash.jpg";
import { defineComponent } from "vue";


const meditationImageSrc: string = meditation;
const studyImageSrc: string = study;

</script>

<template>
  <main>
    <div class="home-box">
      <h1 class="text-3xl font-semibold text-center my-4">WELCOME NEW YOGI</h1>
      <div class="image-container">


        <h2>CHOICE YOUR FIELD !</h2>

      </div>
      <div class="image-btn">
        <img :src="meditationImageSrc" class="w-60 h-60 pl-3 pr-3 rounded-full" />
        <img :src="studyImageSrc" class="w-60 h-60 pl-3 pr-3 rounded-full" />
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
  margin-top: 50px;
}
</style>
