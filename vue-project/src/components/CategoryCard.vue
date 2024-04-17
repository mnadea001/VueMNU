<template>
  <div class="category-card">
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
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
h3 {
  font-family: 'Anton', sans-serif;
  margin-right: 10px;
  font-size: 1.2em;
}
.category-card {
  cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px 15px;
    margin-top: 30px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
}

.category-card:hover {
  background-color: #d1f23f;
  color: black;
}
</style>
