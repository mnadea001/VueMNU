<template>
  <div
    class="text-lg text-white mx-2 mb-4 flex border-white rounded-full border px-4 py-1 hover:bg-white hover:text-black dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white"
  >
    <h3 class="text-center">{{ props.categoryName }}</h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  categoryName: String
})
</script>

<style scoped>
h3 {
  margin-right: 10px;
  font-size: 1.2em;
}
</style>
