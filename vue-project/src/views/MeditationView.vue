<script setup lang="ts">
import VTypical from 'vue-typical'
import { defineComponent } from 'vue'
import chillImg from '../assets/chill.gif'
import BackButton from '@/components/BackButton.vue'

const chillImageSrc: string = chillImg

defineComponent({
  components: {
    VTypical
  }
})
</script>

<template>
  <main>
    <BackButton />
    <div class="diagonal-box-container">
      <div class="diagonal-box bg-one">
        <div class="content">
          <h1 class="text-center my-4">Meditation</h1>
          <div class="flex">
            <div class="flex-1 w-50">
              <img :src="chillImageSrc" class="h-80 rounded mt-5" />
            </div>
            <div class="flex-1 w-50">
              <p>
                Meditation offers numerous benefits for both the mind and body. Regular practice can
                reduce stress, anxiety, and depression by promoting relaxation and mindfulness. It
                enhances emotional health, increasing self-awareness and improving focus and
                concentration. Meditation can also lead to better sleep, lower blood pressure, and a
                strengthened immune system. By fostering a sense of calm and clarity, meditation
                supports overall well-being and helps individuals navigate the challenges of daily
                life with greater resilience and positivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="title-container">
        <v-typical
          class="blink"
          :steps="[
            'GET READY',
            500,
            'GET READY FOR AN IMMERSIVE EXPERIENCE !!',
            1000
          ]"
          :loop="Infinity"
          :wrapper="'h3'"
        ></v-typical>
      </div>

      <div class="image-container">
        <RouterLink to="/buddha" class="btn-home-start mb-5">start meditation</RouterLink>
      </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

main {
  width: 100vw;
  height: 100% !important;
}

h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #d1f23f;
  font-size: 5.5em;
  line-height: 1.5;
  word-wrap: break-word; 
}

h2,
h3 {
  font-weight: 400;
  font-style: bold;
  font-size: 2.5em !important;
  margin-bottom: 50px;
  font-family: 'Anton', sans-serif;
  text-align: center;
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
  padding: 1.5em;
  position: relative;
  color: black;
}

.content p {
  /* font-family: 'Caprasimo', sans-serif; */
  font-weight: 400;
  font-size: 1.2em;
  color: rgb(63, 63, 63);
  padding: 50px 80px;
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
  align-items: center;
}

.btn-home-start {
  font-size: 3em !important;
  color: #d1f23f;
  position: relative;
  text-decoration: none;
}

.btn-home-start::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #d1f23f;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.btn-home-start:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 60px;
    margin-left: 10px;
    margin-right: 10px;
  }
  h2 {
    font-size: 40px;
  }
}
</style>
