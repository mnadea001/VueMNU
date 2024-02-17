<template>
      <div class="product-card">
        <img :src=props.img alt=""> 
        <h3><slot name="title"></slot></h3>
        <p><slot name="price"></slot></p>
      </div>
  </template>
  
  <script setup lang="ts">
import {defineProps } from 'vue';

const props = defineProps({
    img: String
    // title: String
})
  

  </script>

  <style scoped>

.product-card img {
/* max-width: 400px; */
max-height: 100px !important;
}
</style>
  