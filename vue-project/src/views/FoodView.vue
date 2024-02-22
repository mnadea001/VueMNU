<template>
  <main>
    <div class="title-container">
      <h1 class="text-3xl font-semibold text-center my-4">VEGGIE IS GOOD</h1>
      <h4 class="text-3xl font-semibold text-center my-4">
        Vegetarianism holds a significant place in the lifestyle and philosophy
        of yoga, serving as more than just a dietary choice but rather a
        cornerstone of spiritual and holistic living. Yogis, practitioners of
        yoga, often adhere to a vegetarian diet for various reasons, all of
        which align with the core principles of yoga practice.
      </h4>
    </div>
    <div class="container-card my-4">
      <RouterLink
        v-for="(meal, index) in meals"
        :key="index"
        :to="`/meal/${meal.idMeal}`"
      >
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

const fetchMealData = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
    .then((res) => res.json() as Promise<{ meals: Meal[] }>)
    .then((data) => {
      console.log(data);
      meals.value = data.meals;
    })
    .catch((error: Error) => {
      console.error("Error fetching meals:", error);
    });
};

onMounted(() => {
  fetchMealData();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;
  height: 100vh;
}
h1 {
  font-family: "Anton", sans-serif;
}

.title-container {
  margin-left: 80px;
  margin-right: 80px;
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
