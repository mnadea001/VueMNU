<script setup lang="ts">
import MindModalComponent from "../components/MindModalComponent.vue";
import BodyModalComponent from "../components/BodyModalComponent.vue";
import { ref, computed } from "vue";
import VTypical from "vue-typical";
import { defineComponent } from "vue";
import elevateImg from "../assets/elevate.gif";
import { useRouter } from "vue-router";
import backIcon from "../assets/back.svg";
import whiteBack from "../assets/white-back.png";
import { useDark } from "@vueuse/core";

const isDark = useDark();
const arrowIcon = computed(() => {
  return isDark.value ? backIcon : whiteBack;
});

const elevateImageSrc: string = elevateImg;

defineComponent({
  components: {
    VTypical,
  },
});
const isModalOpened1 = ref(false);
const isModalOpened2 = ref(false);

const openModal1 = () => {
  isModalOpened1.value = true;
};
const openModal2 = () => {
  isModalOpened2.value = true;
};
const closeModal1 = () => {
  isModalOpened1.value = false;
};
const closeModal2 = () => {
  isModalOpened2.value = false;
};
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
        class="text-lg text-white-500 dark:text-black hover:underline mb-4 flex"
      >
        <img :src="arrowIcon" class="w-10 h-10 dark:color-white" /> Back
      </button>
    </div>
    <div class="home-box">
      <h1 class="text-3xl text-center my-4">
        Elevate yourself with yoga
      </h1>
      <div class="title-container">
        <v-typical
          class="blink"
          :steps="[
            'CHOOSE',
            1000,
            'CHOOSE YOUR',
            500,
            'CHOOSE YOUR FIELD !!',
            1000,
          ]"
          :loop="Infinity"
          :wrapper="'h2'"
        ></v-typical>
      </div>
      <div class="image-btn">
        <button class="text-btn" @click="openModal1">  <p class="hover:text-orange">BODY</p></button>
        <img :src="elevateImageSrc" class="w-80 h-80 rounded-full" />
        <button class="text-btn" @click="openModal2">
          <p class="hover:text-orange">MIND</p>
          </button>
      </div>
      <MindModalComponent :isOpen="isModalOpened2" @modal-close="closeModal2" />
      <BodyModalComponent :isOpen="isModalOpened1" @modal-close="closeModal1" />
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
.text-btn p:hover {
  color: orange;
}
.image-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .image-btn {
  flex-direction: column;
}
}
</style>
