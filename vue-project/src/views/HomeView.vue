<script setup lang="ts">
import meditateImg from "../assets/meditation.gif";
</script>

<template>
  <main>
    <div class="home-box">
      <h1 class="text-3xl font-semibold text-center my-4">WELCOME NEW YOGI</h1>
      <div class="image-container">
        <img :src="meditateImg" class="w-80 h-80" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;
  height: 100vh;
}

h1 {
  font-family: "Anton", sans-serif;
}



.image-container {
  display: grid;
  place-items: center;
}
</style>
