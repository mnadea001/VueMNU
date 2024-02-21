<template>
  <main class="dark:bg-white">
    <h1 class="text-3xl font-semibold text-center my-4">YOGA IS GOOD</h1>
    <div class="category-card my-4">
      <RouterLink v-for="(yoga, index) in yogas" :key="index" :to="`/category/${yoga.id}`">
        <CategoryCard :categoryName="yoga.category_name" />
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from "vue-router";
import CategoryCard from "../components/CategoryCard.vue";

interface Pose {
  pose_name: string;
}

interface Yoga {
  id: number;
  category_name: string;
  category_description: string;
  poses: Pose[];
}

const yogas = ref<Yoga[]>([]);

onMounted(() => {
  fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
    .then((res: Yoga[]) => res.json() as Promise<{ meals: Yoga[] }>)
    .then((data: Yoga[]) => {
      console.log(data);
      yogas.value = data;
    })
    .catch((error) => {
      console.error('Error fetching yoga categories:', error);
    });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;
  display: block;
}

h1 {
  font-family: "Anton", sans-serif;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
}

</style>
