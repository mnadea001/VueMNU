<template>
  <main>
    <p>Home</p>
    <ProductCard
    :img="products[0]?.image">
  <template #title>{{ products[0]?.title }}</template>
  <template #price>{{ products[0]?.price }}</template>
  </ProductCard>

    <!-- <div class="product-card">
      <img :src="products[0]?.image" alt=""> 
      <h3>{{ products[0]?.title }}</h3>
      <p>{{ products[0]?.price }}</p>
    </div> -->
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue'

interface Product {
  image: string;
  title: string;
  price: number;
  // Add more properties based on the structure of your product data
}

const products = ref<Product[]>([]); // Added type annotation for products array

onMounted(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json() as Promise<Product[]>)
    .then((data) => {
      console.log(data);
      products.value = data;
    });
});
</script>
