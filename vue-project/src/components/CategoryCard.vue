<template>
    <div class="p-2 m-2 mx-auto bg-white rounded-xl shadow-md items-center card">
        <div class="text">{{ props.categoryName }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    categoryName: String,
  });
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
  

  .text {
    font-size: 1.5rem;
    font-family: "Caprasimo", sans-serif;
    word-wrap: break-word !important;
    color: black;
  }
  </style>
  