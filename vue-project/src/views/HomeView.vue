<template>
  <main>
    <p>Home</p>
    <RouterLink v-for="(product, index) in products" :key="index" :to="`/product/${product.id}`">
      <ProductCard
        :img="product?.image"
      >
        <template #title>{{ product?.title }}</template>
        <template #price>{{ product?.price }}</template>
      </ProductCard>
    </RouterLink>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProductCard from "../components/ProductCard.vue";

interface Product {
  image: string;
  title: string;
  price: number;
}

const products = ref<Product[]>([]); 

onMounted(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json() as Promise<Product[]>)
    .then((data) => {
      console.log(data);
      products.value = data;
    });
});
</script>
