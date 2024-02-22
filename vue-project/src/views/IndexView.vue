<script setup lang="ts">
import { VueFlip } from "vue-flip";
import MindModalComponent from "../components/MindModalComponent.vue";
import BodyModalComponent from "../components/BodyModalComponent.vue";
import { ref } from "vue";
import VTypical from "vue-typical";
import { defineComponent } from "vue";

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

</script>

<template>
  <main>
    <div class="home-box">
      <h1 class="text-3xl font-semibold text-center my-4">WELCOME NEW YOGI</h1>
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
        ></v-typical></div>
      <div class="image-btn">
        <vue-flip active-hover height="240px" width="240px">
          <template v-slot:front>
            <img src="../assets/noisyimg.png" class="pl-3 pr-3 rounded-full" />
          </template>
          <template v-slot:back>
            <span class="back-body-btn">
              <button @click="openModal1">BODY</button>
            </span>
          </template>
        </vue-flip>
        <vue-flip active-hover height="240px" width="240px">
          <template v-slot:front>
            <img src="../assets/unsplash.png" class="pl-3 pr-3 rounded-full" />
          </template>
          <template v-slot:back>
            <span class="back-mind-btn">
              <button @click="openModal2">MIND</button>
            </span>
          </template>
        </vue-flip>
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
h2 {
  font-family: "Anton", sans-serif;
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
