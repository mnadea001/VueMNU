<template>
  <main>
    <div class="container">
      <h1 class="text-center mobile-title mb-4">
        Yoga is the union <br />
        of body & mind
      </h1>
      <img :src="movieSrc" class="lotus" ref="lotusImage" />
      <!-- <div class="desktop-title"></div> -->
      <h1 class="centered text-center mb-4 desktop-title">
        Yoga is the union <br />
        of body & mind
      </h1>
    </div>
    <div class="mt-4">
      <v-typical
        class="blink"
        :steps="['FIND', 1000, 'FIND HARMONY', 500, 'FIND HARMONY & BE HAPPY !!', 1000]"
        :loop="Infinity"
        :wrapper="'h2'"
      ></v-typical>
    </div>
    <div class="section-3">
      <StartButton />
    </div>
  </main>
</template>
<script setup lang="ts">
import StartButton from '@/components/StartButton.vue'
import VTypical from 'vue-typical'
import movieSrc from '../assets/movie.gif'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

main {
  width: 100vw;
  height: 100%;
}

.container {
  position: relative;
  text-align: center;
  color: white;
  margin: auto;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-width: 100%;
}
.lotus {
  width: 100vw;
  filter: grayscale(100%);
}
h1 {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.5em;
  color: #0527ae;
}

h2 {
  font-weight: 400;
  font-style: bold;
  font-size: 2.5em;
  margin-bottom: 50px;
  text-align: center;
  font-family: 'Anton', sans-serif;
}

.section-3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 100px;
  position: relative;
}
.mobile-title {
  display: none;
}

.desktop-title {
  line-height: 1.5;
  position: absolute;
  z-index: 500;
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 30px !important;
  }
  .mobile-title {
    display: block;
    line-height: 1.5;
    position: relative;
    bottom: 0;
    left: 0;
  }
  .desktop-title {
    display: none;
  }
  h2 {
    font-size: 40px;
  }

  .section-2 div {
    margin-top: 0px;
  }
}
@media only screen and (min-width: 769px) and (max-width: 980px) {
  .mobile-title {
    display: block;
  }
  .desktop-title {
    display: none;
  }
  h1 {
    font-size: 35px !important;
  }
}
@media only screen and (min-width: 981px) and (max-width: 1268px) {
  h1 {
    font-size: 40px !important;
  }
  .mobile-title {
    display: none;
  }
  .desktop-title {
    display: block;
  }
}
</style>
