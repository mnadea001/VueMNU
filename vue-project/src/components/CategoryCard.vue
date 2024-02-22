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

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  
  /* .card {
    display: flex;
    flex-direction: row !important;
  } */
  .text {
    font-size: 1.5rem;
    font-family: "Anton", sans-serif;
    color: #28390f;
    word-wrap: break-word !important;
  }
  </style>
  