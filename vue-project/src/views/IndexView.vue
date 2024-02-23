<script setup lang="ts">
import MindModalComponent from "../components/MindModalComponent.vue";
import BodyModalComponent from "../components/BodyModalComponent.vue";
import { ref } from "vue";
import VTypical from "vue-typical";
import { defineComponent } from "vue";
import elevateImg from "../assets/elevate.gif";
import { useRouter } from "vue-router";
import backIcon from "../assets/back.svg";

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
    <div class="home-box">
      <button
          @click="goBack"
          class="text-lg font-medium text-black-500 hover:underline mb-4 flex"
        >
          <img :src="backIcon" class="w-10 h-10" /> Back
        </button>
      <h1 class="text-3xl font-semibold text-center my-4">ELEVATE YOURSELF WITH YOGA</h1>
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

        <button class="text-btn" @click="openModal1">BODY</button>
        <img :src="elevateImageSrc" class="w-80 h-80 rounded-full" />
        <button class="text-btn" @click="openModal2">MIND</button>
      </div>
      <MindModalComponent
        :isOpen="isModalOpened2"
        @modal-close="closeModal2"
      />
      <BodyModalComponent
        :isOpen="isModalOpened1"
        @modal-close="closeModal1"
      />
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
h2, .text-btn {
  font-family: "Anton", sans-serif;
}

.text-btn {
  font-size: 2rem !important;
}
.title-container {
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

.back-body-btn,
.back-mind-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: blue;
}

.back-body-btn button,
.back-mind-btn button {
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
}
</style>
