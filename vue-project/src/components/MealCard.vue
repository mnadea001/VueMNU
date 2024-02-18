<template>
    <div class="p-2 m-2 mx-auto bg-white rounded-xl shadow-md relative">
      <div class="meal-image">
        <img class="h-50 w-50 object-cover" :src="props.img" alt="Meal Thumbnail" />
      </div>
      <div class="overlay">
        <div class="text">{{ props.strMeal }}</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    img: String,
    strMeal: String,
  });
  </script>
  
  <style scoped>
  .meal-image {
    position: relative;
    overflow: hidden;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(253, 149, 59, 0.5);
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .overlay:hover {
    opacity: 1;
  }
  
  .text {
    font-size: 1.5rem;
    font-weight: bold;
  }
  </style>
  