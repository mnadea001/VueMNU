<template>
    <div class="p-2 m-2 mx-auto bg-white rounded-xl shadow-md relative items-center category-card">
      <div class="category-header-card">
        <div class="text">{{ props.categoryName }}</div>
      </div>
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
  
  .category-card {
    display: inline-block;
  }
  .category-header-card {
    background-color: rgb(253, 149, 59);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
  .text {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: "Anton", sans-serif;
    color: #28390f;
    word-wrap: break-word !important;
  }
  </style>
  