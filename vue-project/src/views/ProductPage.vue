<template>
  <p>Hello</p>
  <div
    class="p-6 m-2 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="flex-shrink-0">
      <!-- <img class="h-12 w-12" src="{{product.image }} alt="ChitChat Logo" /> -->
    </div>
    <div>
      <div class="text-xl font-medium text-black">
        {{ product.title }}
      </div>
      <p class="text-gray-500">{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
const product = ref();
const route = useRoute();

// console.log(route.params.id)
fetch(`https://fakestoreapi.com/products/${route.params.id}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    product.value = data;
  });
</script>

<style scoped></style>
