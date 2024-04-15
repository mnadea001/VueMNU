<template>
  <RouterLink to="/index" class="btn-start">Let's start !!</RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.btn-start {
  border-radius: 80px;
  border: #d1f23f;
  cursor: pointer;
  background-color: rgb(1, 74, 34);
  z-index: 240;
  padding: 30px 65px;
  margin-bottom: 10px;
  color: white;
  font-size: 2.5em !important;
}

.btn-start:hover {
  background-color: rgb(10, 216, 48);
  /* color: black; */
}
</style>
