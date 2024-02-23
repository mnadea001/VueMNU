<template>
  <main class="dark:bg-white">
    <div class="main-content">
      <div class="content">
        <h1 class="text-3xl font-semibold text-center my-4">SOURCES</h1>

        <div class="content-img my-4">
          <img :src="namasteImageSrc" class="w-80 h-80 rounded-full my-4" />
          <h2 class="text-3xl font-semibold text-center my-4">To create this app, I used:</h2>
          <ul>
            <li>Vue.js 3</li>
            <li>APIs themealdb, yoga-api from alexcumplido, forismatic</li>
            <li>Librairies vue-typical, tailwindcss, vueuse</li>
          </ul>
          <br>
          <p>Created By Mathilde NADEAU - Feb. 2024</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import namasteImageSrc from "../assets/namaste.gif";
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  max-width: 100vw;
  height: 100vh;
}

h1,
h2 {
  font-family: "Anton", sans-serif;
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
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}
.content {
  width: 70%;
  padding: 15px;
}
ul li {
  text-align: center;
}
</style>
