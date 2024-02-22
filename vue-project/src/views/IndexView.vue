<script setup lang="ts">
import { VueFlip } from "vue-flip";
import ModalComponent from "../components/ModalComponent.vue";
import { ref } from "vue";

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

</script>

<template>
  <main>
    <div class="home-box">
      <h1 class="text-3xl font-semibold text-center my-4">WELCOME NEW YOGI</h1>
      <div class="image-container">
        <h2>CHOICE YOUR FIELD !</h2>
      </div>
      <div class="image-btn">
        <vue-flip active-hover height="240px" width="240px">
          <template v-slot:front>
            <img src="../assets/noisyimg.png" class="pl-3 pr-3 rounded-full" />
          </template>
          <template v-slot:back>
            <span class="back-body-btn">
              <button @click="openModal">BODY</button>
            </span>
          </template>
        </vue-flip>
        <vue-flip active-hover height="240px" width="240px">
          <template v-slot:front>
            <img src="../assets/unsplash.png" class="pl-3 pr-3 rounded-full" />
          </template>
          <template v-slot:back>
            <span class="back-mind-btn">
              <button @click="openModal">MIND</button>
            </span>
          </template>
        </vue-flip>
      </div>
      <ModalComponent
        :isOpen="isModalOpened"
        @modal-close="closeModal"
        name="first-modal"
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
