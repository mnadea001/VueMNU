<script setup lang="ts">
import VTypical from "vue-typical";
import { defineComponent } from "vue";
import chillImg from "../assets/chill.gif";
import { useRouter } from "vue-router";
import backIcon from "../assets/back.svg";
import whiteBack from "../assets/white-back.png";
import { useDark } from "@vueuse/core";
import { computed } from "vue";
const isDark = useDark();
const arrowIcon = computed(() => {
  return isDark.value ? backIcon : whiteBack;
});
const chillImageSrc: string = chillImg;

defineComponent({
  components: {
    VTypical,
  },
});

const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>

<template>
  <main>
    <div class="content-btn">
      <button
        @click="goBack"
        class="text-lg font-medium text-white-500 dark:text-black hover:underline mb-4 flex"
      >
        <img :src="arrowIcon" class="w-10 h-10 dark:color-white" /> Back
      </button>
    </div>
    <div class="home-box">
      <h1 class="text-3xl text-center my-4">
        Meditation to calm the mind
      </h1>
      <div class="title-container">
        <v-typical
          class="blink"
          :steps="[
            'GET READY',
            1000,
            'GET READY FOR AN',
            500,
            'GET READY FOR AN IMMERSIVE EXPERIENCE !!',
            1000,
          ]"
          :loop="Infinity"
          :wrapper="'h2'"
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
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

main {
  width: 100vw;
  height: 100vh;
}

h1,
h2,
.text-btn {
  font-family: "Anton", sans-serif;
}

.text-btn {
  font-size: 2rem !important;
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
  margin-top: 50px;
  align-items: center;
}

.btn-home-start {
  background-color: blue;
  border-radius: 35px;
  padding: 10px 15px;
  font-family: 'Caprasimo', sans-serif;
}

.btn-home-start:hover {
  background-color: rgb(134, 134, 244);
}
</style>
