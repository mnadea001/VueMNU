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
  border: 1px solid #000000;
  color: rgb(7, 7, 7);
}

.category-card:hover {
  background-color:#0527ae;
  color: rgb(255, 255, 255);
  border: transparent;

}
</style>
