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
  background-color: #d1f23f;
  padding: 30px 65px;
  margin-bottom: 10px;
  color: rgb(0, 0, 0);
  font-size: 2.5em !important;
}

.btn-start:hover {
  background-color: rgba(241, 148, 251, 0.671);
  color: white;
}

@media screen and (max-width: 768px) {
  .content-btn {
    margin-left: 10px;
  }
}
</style>
