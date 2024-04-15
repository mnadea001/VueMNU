<script setup lang="ts">
import meditateImg from '../assets/meditation.gif'
import gsap from "gsap";
import { RouterLink } from 'vue-router'
import VTypical from 'vue-typical'
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const meditateImageSrc: string = meditateImg
defineComponent({
  components: {
    VTypical
  }
})

const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed(() => {
  const MAX_ROTATION = 150

  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)

  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})


const logo = ref(null);
const textBox = ref(null);

onMounted(() => {
    gsap.to(logo.value, { x: 50, duration: 2 });
    gsap.to(textBox.value, { x: -50, duration: 2,  ease: "power3.inOut",
      delay: 0.5, });

});

</script>

<template>
  <main>
    <div class="home-box">
      <div
        ref="target"
        :style="{
          transform: cardTransform,
          transition: 'transform 0.25s ease-out'
        }"
      >
        <h1 class="text-3xl text-center my-4">Welcome new yogi</h1>
      </div>
      <div class="image-container">
        <div ref="textBox" class="text-box">
          <h2 class="text-3xl text-center my-4">Yoga is the union of body & mind</h2>
          <v-typical
            class="blink"
            :steps="['find', 1000, 'find harmony', 500, 'find harmony & be happy !!', 1000]"
            :loop="Infinity"
            :wrapper="'h2'"
          ></v-typical>
          <RouterLink to="/index" class="btn-home-start text-xl my-3"
            >Let's start now !!</RouterLink
          >
        </div>
        <div class="image-box">
          <img ref="logo" :src="meditateImageSrc" class="w-80 h-80" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Bungee+Shade&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

main {
  width: 100vw;
  height: 100vh;
}

h1 {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.5em;
}

h2 {
  font-family: "Montserrat Alternates", sans-serif;
}

.home-box {
  padding: 50px;
}
.image-container {
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-top: 50px;
  width: 80%;
}

.text-box,
.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
}

.btn-home-start {
  background-color: blue;
  border-radius: 35px;
  font-family: "Montserrat Alternates", sans-serif;
  padding: 10px 15px;
  margin-bottom: 10px;
  color: white;
}

.btn-home-start:hover {
  background-color: rgb(134, 134, 244);
}

@media screen and (max-width: 768px) {
  .btn-home-start {
    background-color: blue;
    font-size: small;
    border-radius: 35px;
    font-family: 'Caprasimo', sans-serif;
    padding: 10px 15px;
    margin-bottom: 30px;
  }

  .image-container {
    display: flex;
    flex-direction: column;
  }

  .image-box {
    display: none;
  }
}
</style>
