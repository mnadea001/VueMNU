<template>
  <div class="content-btn">
    <RouterLink to="/index" class="btn-start">start experience</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.btn-start {
  font-size: 3em !important;
  color: #d1f23f;
  position: relative;
  text-decoration: none;
  font-family: 'Caprasimo', sans-serif;

}

.btn-start::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #d1f23f;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.btn-start:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}


@media screen and (max-width: 768px) {
  .content-btn {
    margin-left: 10px;
  }
}
</style>
