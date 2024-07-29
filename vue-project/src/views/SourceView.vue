<template>
  <main class="dark:bg-white">
    <div class="diagonal-box-container">
    <div class="diagonal-box bg-one">
      <div class="content">
        <h1 class="text-3xl text-center my-4">About</h1>
        <div class="main-content">
      <div class="content">

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
  font-family: 'Caprasimo', sans-serif;

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


@media screen and (max-width: 768px) {
  .content-img {
    flex-direction: column-reverse;
  }
}
</style>
