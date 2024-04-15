<template>
  <RouterLink to="/index" class="btn-start">Let's start !!</RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.btn-start {
  border-radius: 10px;
  border: #d1f23f;
  cursor: pointer;
  background-color: blue;
  z-index: 240;
  padding: 10px 15px;
  margin-bottom: 10px;
  color: white;
  font-size: 2.5em !important;
}

.btn-start:hover {
  background-color: rgb(134, 134, 244);
}
</style>
