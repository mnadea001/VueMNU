<template>
  <div class="content-btn">
    <RouterLink to="/index" class="btn-start">Start</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.btn-start {
  border-radius: 80px;
  font-family: 'Caprasimo', sans-serif;
  border: #0527ae;
  cursor: pointer;
  background-color: #0527ae;
  padding: 30px 65px;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  font-size: 2.5em !important;
}

.btn-start:hover {
  background-color: #2349e3;
  color: white;
}

@media screen and (max-width: 768px) {
  .content-btn {
    margin-left: 10px;
  }
}
</style>
