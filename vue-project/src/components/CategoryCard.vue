<template>
  <div 
  class="text-lg text-black mx-2 mb-4 flex border-black rounded-full border px-4 py-1 hover:bg-black hover:text-white"

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
