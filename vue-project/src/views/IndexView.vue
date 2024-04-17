<script setup lang="ts">
import MindModalComponent from '../components/MindModalComponent.vue'
import BodyModalComponent from '../components/BodyModalComponent.vue'
import { ref, watchEffect } from 'vue'
import VTypical from 'vue-typical'
import { defineComponent } from 'vue'
import elevateImg from '../assets/elevate.gif'
import BackButton from '@/components/BackButton.vue'


const elevateImageSrc: string = elevateImg

defineComponent({
  components: {
    VTypical
  }
})
const isModalOpened1 = ref(false)
const isModalOpened2 = ref(false)
const rotationDirection = ref<string>('');

const openModal1 = () => {
  isModalOpened1.value = true
}
const openModal2 = () => {
  isModalOpened2.value = true
}
const closeModal1 = () => {
  isModalOpened1.value = false
}
const closeModal2 = () => {
  isModalOpened2.value = false
}

const rotateImage = (direction: string) => {
  rotationDirection.value = direction === 'left' ? 'rotate(-6deg)' : 'rotate(6deg)';
};

const resetRotation = () => {
  rotationDirection.value = '';
};
// @ts-ignore
const imageRotation = ref<string>('');
// @ts-ignore
watchEffect(() => {
  imageRotation.value = rotationDirection.value;
});

</script>

<template>
  <main>
    <BackButton/>
    <div class="home-box">
      <h1 class="text-center my-4">
        Elevate yourself <br />
        with yoga
      </h1>
      <div class="title-container">
        <v-typical
          class="blink"
          :steps="['CHOOSE', 1000, 'CHOOSE YOUR', 500, 'CHOOSE YOUR FIELD !!', 1000]"
          :loop="Infinity"
          :wrapper="'h2'"
        ></v-typical>
      </div>
      <div class="image-btn">
        <button class="text-btn" @mouseover="rotateImage('left')" @click="openModal1">
          <p class="hover:text-orange">BODY</p>
        </button>
        <img :src="elevateImageSrc" class="w-80 h-80" :style="{ transform: imageRotation }" />
        <button class="text-btn" @mouseover="rotateImage('right')" @click="openModal2">
          <p class="hover:text-orange">MIND</p>
        </button>
      </div>
      <MindModalComponent :isOpen="isModalOpened2" @modal-close="closeModal2" />
      <BodyModalComponent :isOpen="isModalOpened1" @modal-close="closeModal1" />
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

main {
  width: 100vw;
  height: 100%;
}

h1 {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.5em;
  color: #d1f23f;
  line-height: 1.5;
}

h2 {
  font-weight: 400;
  font-style: bold;
  font-size: 2.5em;
  font-family: 'Anton', sans-serif;
}
h2 .text-btn {
  font-family: 'Anton', sans-serif;
}

.text-btn {
  font-size: 2rem !important;
}
.title-container {
  display: grid;
  place-items: center;
}

img {
  border-radius: 50% 50% 0% 0%;
}

.text-btn p:hover {
  font-weight: bolder;
}
.text-btn p:hover img {
  transform: rotate(50);
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

  h1{
    font-size: 60px;
  }

  h2{
    font-size: 40px;
  }
}
</style>
