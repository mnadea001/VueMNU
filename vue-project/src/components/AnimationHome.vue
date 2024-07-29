<template>
  <div class="content-box">
    <img :src="movieSrc" class="lotus" ref="lotusImage" />
  </div>
  <div class="content-mobile">
    <img :src="movieMobileSrc" class="lotus" ref="natureImage" />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import movieSrc from '../assets/movie.gif'
import movieMobileSrc from '../assets/movie-mobile.gif'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.content-mobile {
display: none;
  }

.lotus {
  width: 100vw;
}

@media screen and (max-width: 768px) {
  .content-mobile {
    /* margin-left: 10px; */
    display:block
  }
  .content-box {
  display: none;
  }
}
</style>
