<template>
  <main>
    <p>VEGGIE IS GOOD</p>
    <RouterLink v-for="(meal, index) in meals" :key="index" :to="`/meal/${meal.idMeal}`">
      <MealCard
        :img="meal?.strMealThumb"
      >
        <template #title>{{ meal?.strMeal }}</template>
        <template #id>{{ meal?.idMeal }}</template>
      </MealCard>
    </RouterLink>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import MealCard from "../components/MealCard.vue";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const meals = ref<Meal[]>([]);

onMounted(() => {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
    .then((res) => res.json() as Promise<Meal[]>)
    .then((data) => {
      console.log(data);
      meals.value = data.meals;
    });
});
</script>
