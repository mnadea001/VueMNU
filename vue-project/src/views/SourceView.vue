<template>
  <main>
    <div class="dark:bg-white">
      <div class="content">
        <h1 class="text-3xl font-semibold text-center my-4">SOURCES</h1>

        <div class="content-img my-4">
          <img :src="namasteImageSrc" class="w-80 h-80 rounded-full my-4" />
          <h2>TO CREATE THIS APP I USED</h2>
          <ul>
            <li>VUE.JS 3</li>
            <li>APIs themealdb, yoga-api from alexcumplido, forismatic</li>
            <li>Librairies vue-typical, tailwindcss</li>
          </ul>
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
  width: 100vw;
  height: 100vh;
}

h1,
h2 {
  font-family: "Anton", sans-serif;
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
  justify-content: center;
  align-items: center;
  margin-left: 50px;
}
</style>
