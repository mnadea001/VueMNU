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
            <img src="../assets/noisyimg.jpg" class="pl-3 pr-3 rounded-full" />
          </template>
          <template v-slot:back>  <img src="../assets/unsplash.jpg" class="pl-3 pr-3 rounded-full" /> </template>
        </vue-flip>
        <vue-flip active-hover height="240px" width="240px">
          <template v-slot:front>  
            <img src="../assets/unsplash.jpg" class="pl-3 pr-3 rounded-full" />
          </template>
          <template v-slot:back> back </template>
        </vue-flip>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { VueFlip } from "vue-flip";

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    VueFlip
  },
});
</script>

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
</style>
