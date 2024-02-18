<template>
  <main>
    <h1 class="text-3xl font-semibold text-center mb-4">VEGGIE IS GOOD</h1>
    <div class="">
      <RouterLink v-for="(meal, index) in meals" :key="index" :to="`/meal/${meal.idMeal}`">
        <MealCard :img="meal.strMealThumb" :strMeal="meal.strMeal" />
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import MealCard from "../components/MealCard.vue";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const meals = ref<Meal[]>([]);

onMounted(() => {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
    .then((res) => res.json() as Promise<{ meals: Meal[] }>)
    .then((data) => {
      console.log(data);
      meals.value = data.meals;
    });
});
</script>
