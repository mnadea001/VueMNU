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
const rotationDirection = ref<string>('')

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
  rotationDirection.value = direction === 'left' ? 'rotate(-6deg)' : 'rotate(6deg)'
}

const resetRotation = () => {
  rotationDirection.value = ''
}
// @ts-ignore
const imageRotation = ref<string>('')
// @ts-ignore
watchEffect(() => {
  imageRotation.value = rotationDirection.value
})
</script>

<template>
  <main>
    <BackButton />
    <div class="diagonal-box-container">
    <div class="diagonal-box bg-one">
      <div class="content">
        <h1 class="text-center my-4">
          Elevate yourself <br />
          with yoga
        </h1>
        <div class="title-container">
          <v-typical
            class="blink"
            :steps="['choose', 1000, 'choose your field !!', 1000]"
            :loop="Infinity"
            :wrapper="'h2'"
          ></v-typical>
        </div>
        <div class="home-box">
      <div class="image-btn">
        <button class="text-btn" @mouseover="rotateImage('left')" @click="openModal1">
          <p class="text-menu">body</p>
        </button>
        <img :src="elevateImageSrc" class="w-80 h-80 rounded-full" :style="{ transform: imageRotation }" />
        <button class="text-btn" @mouseover="rotateImage('right')" @click="openModal2">
          <p class="text-menu">mind</p>
        </button>
      </div>
      <MindModalComponent :isOpen="isModalOpened2" @modal-close="closeModal2" />
      <BodyModalComponent :isOpen="isModalOpened1" @modal-close="closeModal1" />
    </div>
      </div>
    </div>
  </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

main {
  width: 100vw;
  height: 100%;
}

h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.5em;
  color: #d1f23f;
}

h2 {
  font-weight: 400;
  font-style: bold;
  font-size: 2.5em;
  text-align: center;
}


.text-menu {
  font-family: 'Caprasimo', sans-serif;
  position: relative;
  text-decoration: none;
  font-size: 2rem !important;
}


.title-container {
  display: grid;
  place-items: center;
}

img {
  border-radius: 50%;
}

.text-menu::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: black;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.text-menu:hover::before {
  transform-origin: left;
  transform: scaleX(1);
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

.diagonal-box-container {
  display: flex;
  justify-content: center;
}
.diagonal-box {
  position: relative;
  padding: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100vw;
}

.diagonal-box:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: skewy(1deg);
  transform-origin: 50% 0;
  outline: 1px solid transparent;
  backface-visibility: hidden;
}

.bg-one:before {
  background-image: linear-gradient(45deg, #636fa4, #e8cbc0);
}

.content {
  margin-bottom: 200px;
  padding-bottom: 200px;
  margin: 0 auto;
  padding: 50px 80px;
  position: relative;
  color: black;
}
.content p {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 200;
  font-size: 1.2em;
  color: rgb(0, 0, 0);
}
@media screen and (max-width: 768px) {
  .image-btn {
    flex-direction: column;
  }

  h1 {
    font-size: 50px !important;
  }

  h2 {
    font-size: 40px !important;
  }
}
</style>
