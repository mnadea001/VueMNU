<template>
  <main>
    <h1 class="text-3xl font-semibold text-center my-4">WELCOME</h1>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;
  height: 100vh;
}
h1 {
  font-family: "Anton", sans-serif;
}

.container-card {
  width: 100%;
  margin: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  object-fit: contain;
  scroll-snap-type: x mandatory;
}
</style>
