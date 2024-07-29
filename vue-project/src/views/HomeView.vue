<template>
  <main>
    <div class="section-3">
      <AnimationHome />
    </div>
    <div>
      <h1 class="text-center mb-4">
        Yoga is the union <br />
        of body & mind
      </h1>
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
import AnimationHome from '@/components/AnimationHome.vue'
import VTypical from 'vue-typical'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

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
  margin-top: 100px;
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
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 50px !important;
  }
  h2 {
    font-size: 40px;
  }

  .section-2 div {
    margin-top: 0px;
  }
}
</style>
