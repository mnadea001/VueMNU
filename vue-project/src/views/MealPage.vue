<template>
    <div>
      <p>Meal Page</p>
      <div v-if="meal" class="p-6 m-2 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" :src="meal.strMealThumb" alt="Meal Image" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">
            {{ meal.strMeal }}
          </div>
          <div class="text-xl font-medium text-black">
            {{ meal.strTags }}
          </div>
          <div class="text-xl font-medium text-black">
            {{ meal.strCategory }}
          </div>
          <div class="text-xl font-medium text-black">
            {{ meal.strArea }}
          </div>
          <div class="text-xl font-medium text-black">
            {{ meal.strInstructions }}
          </div>
          <div class="text-xl font-medium text-black">
            <a :href="meal.strYoutube" target="_blank">Watch on YouTube</a>
          </div>
        </div>
      </div>
      <p v-else>Loading...</p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strYoutube: string;
  }
  
  const meal = ref<Meal | null>(null);
  const error = ref<string | null>(null);
  const route = useRoute();
  
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.idMeal}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json() as Promise<{ meals: Meal[] }>;
    })
    .then(data => {
      if (data.meals && data.meals.length > 0) {
        meal.value = data.meals[0];
      } else {
        error.value = 'Meal not found';
      }
    })
    .catch(err => {
      error.value = `Fetch error: ${err.message}`;
    });
  </script>
  
  <style scoped></style>
  