<template>
    <div class="p-2 m-2 mx-auto bg-white rounded-xl shadow-md relative items-center meal-card">
      <div class="meal-image">
        <img class="h-25 w-25 object-cover" :src="props.img" alt="Meal Thumbnail" />
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

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  .meal-image {
    position: relative;
    overflow: hidden;
  }
  
  .meal-card {
    display: inline-block;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(253, 149, 59);
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
    font-size: 2.5rem;
    font-weight: bold;
    font-family: "Anton", sans-serif;
    color: #28390f;
    word-wrap: break-word !important;
  }
  </style>
  