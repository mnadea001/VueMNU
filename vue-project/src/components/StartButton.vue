<template>
  <div class="content-btn">
  <RouterLink to="/index" class="btn-start">Let's start !!</RouterLink>
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
  border: #d1f23f;
  cursor: pointer;
  background-color: rgb(1, 74, 34);
  z-index: 640 !important;
  padding: 30px 65px;
  margin-bottom: 10px;
  color: white;
  font-size: 2.5em !important;
}

.btn-start:hover {
  background-color: rgb(10, 216, 48);
  /* color: black; */
}

@media screen and (max-width: 768px) {
  .content-btn {
    margin-left: 10px;
  }
}
</style>
