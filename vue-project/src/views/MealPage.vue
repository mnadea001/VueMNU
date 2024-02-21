<template>
  <main>
    <div>
      <div
        v-if="meal"
        class="p-6 m-2 max-w-4xl mx-auto bg-white rounded-xl shadow-md"
      >
        <div class="flex items-center space-x-4">
          <img
            class="h-24 w-24 rounded-full"
            :src="meal.strMealThumb"
            alt="Meal Image"
          />
          <div>
            <div class="text-xl font-medium text-black">{{ meal.strMeal }}</div>
            <div class="text-gray-500">
              {{ meal.strCategory }} | {{ meal.strArea }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="text-lg font-medium text-black">Tags:</div>
          <div class="text-gray-500">{{ meal.strTags }}</div>
        </div>
        <div class="mt-4">
          <div class="text-lg font-medium text-black">Instructions:</div>
          <div class="text-gray-500">{{ meal.strInstructions }}</div>
        </div>
        <div class="mt-4">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="text-lg font-medium text-blue-500 hover:underline"
            >Watch on YouTube</a
          >
        </div>
      </div>
      <p v-else class="text-center">Loading...</p>
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube: string;
}

const meal = ref<Meal | null>(null);
const error = ref<string | null>(null);
const route = useRoute();

fetch(
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.idMeal}`
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json() as Promise<{ meals: Meal[] }>;
  })
  .then((data) => {
    if (data.meals && data.meals.length > 0) {
      meal.value = data.meals[0];
    } else {
      error.value = "Meal not found";
    }
  })
  .catch((err) => {
    error.value = `Fetch error: ${err.message}`;
  });
</script>

<style scoped>
main {
  width: 100vw;
}
</style>
