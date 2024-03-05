<template>
    <div class="bg-error text-white p-5 m-3 rounded-lg">{{ props.message }}</div>
  </template>
  
  <script setup lang="ts">
  import {defineProps}  from 'vue';

  const props = defineProps<{
    message: string | null
  }>()
  
  </script>