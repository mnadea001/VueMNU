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
    font-family: "Anton", sans-serif;
    color: #ffffff;
  margin-right: 10px;
  font-size: 1.2em;
}
.category-card {
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 15px;
  margin-top: 30px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  background-color: #0527ae;
  color: white;
}

.category-card:hover {
  background-color: #2f52e1;
}
</style>
