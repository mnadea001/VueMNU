<script setup lang="ts">
import meditateImg from "../assets/meditation.gif";

import { RouterLink } from "vue-router";
import VTypical from "vue-typical";
import { defineComponent } from "vue";

const meditateImageSrc: string = meditateImg;
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

        <h2 class="text-3xl font-semibold text-center my-4">YOGA IS THE UNION OF BODY AND MIND</h2>
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
        <RouterLink to="/index" class="btn-home-start font-bold mt-3">LET'S START NOW !!</RouterLink>
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

.btn-home-start {
background-color: blue;
border-radius: 35px;
padding: 10px 15px;
}
</style>
