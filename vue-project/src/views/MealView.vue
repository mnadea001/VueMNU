<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BackButton from '@/components/BackButton.vue'


interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strTags: string
  strCategory: string
  strArea: string
  strInstructions: string
  strYoutube: string
}

const meal = ref<Meal | null>(null)
const error = ref<string | null>(null)
const route = useRoute()


const fetchMealData = () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.idMeal}`)
    .then((res: Response) => {
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json() as Promise<{ meals: Meal[] }>
    })
    .then((data: { meals: Meal[] }) => {
      if (data.meals && data.meals.length > 0) {
        meal.value = data.meals[0]
      } else {
        error.value = 'Meal not found'
      }
    })
    .catch((err: Error) => {
      error.value = `Fetch error: ${err.message}`
    })
}

onMounted(() => {
  fetchMealData()
})
</script>

<template>
  <main class="dark:bg-white">
    <BackButton />
    <div>
      <div v-if="meal" class="m-2 max-w-4xl mx-auto card">
        <div>
          <img class="img-meal rounded-full" :src="meal.strMealThumb" alt="Meal Image" />
          <div>
            <h1>{{ meal.strMeal }}</h1>
            <div class="text-gray-500">{{ meal.strCategory }} | {{ meal.strArea }}</div>
          </div>
        </div>
        <div v-if="meal.strTags">
          <div class="text-lg font-medium">Tags:</div>
          <div class="text-gray-500">{{ meal.strTags }}</div>
        </div>
        <div class="mt-4">
          <div class="text-lg font-medium">Instructions:</div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

main {
  width: 100vw;
}

h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.5em;
  color: #d1f23f;
}
.card {
  padding: 50px;
}
.title {
  font-family: 'Anton', sans-serif;
  font-size: 2.5rem;
}

.img-meal {
  height: 150px;
}
</style>
