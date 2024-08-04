<template>
    <div class="p-2 m-2 mx-auto bg-white rounded-xl shadow-md relative items-center meal-card">
      <div class="meal-image">
        <img class="object-cover img-meal" :src="props.img" alt="Meal Thumbnail" />
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

  .img-meal {
height:220px;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#0527ae;
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
  }

  
  .overlay:hover {
    opacity: 1;
  }
  
  .text {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Anton", sans-serif;
    color: #ffffff;
    white-space: normal!important;
    padding-left: 10px;
  }
  </style>
  