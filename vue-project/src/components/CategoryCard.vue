<template>
  <div class="p-2 m-2 mx-auto bg-white rounded-xl shadow-md items-center card">
    <h2 class="text-center text">{{ props.categoryName }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  categoryName: String
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.text {
  font-family: 'Anton', sans-serif;
  word-wrap: break-word !important;
  color: black;
}
</style>
