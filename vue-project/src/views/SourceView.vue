<template>
  <main class="dark:bg-white">
    <div class="main-content">
      <div class="content">
        <h1 class="text-3xl text-center my-4">About</h1>

        <div class="content-img my-4">
          <div class="text-source">
            <h2 class="text-xl text-center my-4">To create this app, I used:</h2>
            <ul>
              <li>Vue.js 3 with TypeScript</li>
              <li>APIs themealdb, yoga-api from alexcumplido</li>
              <li>Librairies vue-typical, tailwindcss, vueuse</li>
              <li>Threejs, Troisjs</li>
              <li>GIFs on Tenor and Giphy</li>
              <li>3D model on SketchFab</li>
            </ul>
            <br />
            <p class="text-center">Created By Mathilde NADEAU - April 2024</p>
          </div>

          <img :src="namasteImageSrc" class="img-yoga h-80 my-4" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import namasteImageSrc from '../assets/meditation.gif'
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

main {
  max-width: 100vw;
  height: 100%;
}

h1 {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.5em ;
  color: #d1f23f;
  line-height: 1.5;
}

.main-content {
  display: flex;
  justify-content: center;
}

img {
  margin-bottom: 50px;
}
.content-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
  align-items: center;
  margin-bottom: 50px;
}
.content {
  width: 70%;
  padding: 15px;
}
ul li {
  text-align: center;
}

@media screen and (max-width: 768px) {
  .content-img {
    flex-direction: column-reverse;
  }
}
</style>
