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
      <h1 class="text-3xl text-center my-4">Welcome new yogi</h1>

      <div class="image-container">
        <img :src="meditateImageSrc" class="w-80 h-80" />

        <h2 class="text-3xl text-center my-4">
          Yoga is the union of body & mind
        </h2>
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
        <RouterLink to="/index" class="btn-home-start text-3xl my-3"
          >Let's start now !!</RouterLink
        >
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

main {
  width: 100vw;
  height: 100vh;
}

h1,
h2 {
  font-family: "Anton", sans-serif;
}

.home-box {
  padding: 50px;
}
.image-container {
  display: grid;
  place-items: center;
}

.btn-home-start {
  background-color: blue;
  border-radius: 35px;
  font-family: 'Caprasimo', sans-serif;
  padding: 10px 15px;
  margin-bottom: 10px;
}

.btn-home-start:hover {
  background-color: rgb(134, 134, 244);
}
</style>
