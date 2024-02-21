<template>
  <main>
    <h1 class="text-3xl font-semibold text-center my-4">VEGGIE IS GOOD</h1>
    <div class="container-card my-4">
      <RouterLink v-for="(meal, index) in meals" :key="index" :to="`/meal/${meal.idMeal}`">
        <MealCard :img="meal.strMealThumb" :strMeal="meal.strMeal" />
      </RouterLink>
    </div>
    <AboutView/>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from "vue-router";
import MealCard from "../components/MealCard.vue";

import AboutView from "../views/AboutView.vue";

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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

main {
  width: 100vw;
}
h1 {
  font-family: "Anton", sans-serif;
}

.container-card {
  width: 100%;
  margin: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  object-fit: contain;
  scroll-snap-type: x mandatory;
}

</style>
