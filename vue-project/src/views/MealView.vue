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
    <div class="diagonal-box-container">
      <div class="diagonal-box bg-one">
        <div v-if="meal">
          <div class="content">
            <h1 class="mb-4">{{ meal.strMeal }}</h1>
            <div class="flex mt-4">
              <div class="flex-1 w-50">
                <img class="img-meal rounded" :src="meal.strMealThumb" alt="Meal Image" />
              </div>
              <div class="flex-1 w-50 p-5">
                <p><b>{{ meal.strCategory }} | {{ meal.strArea }} </b></p>
                <div v-if="meal.strTags">
                  <p class="text-lg font-medium"><b>Tags:</b> {{ meal.strTags }}</p>
                </div>
                <p class="text-lg font-medium mb-4"><b>Instructions:</b> {{ meal.strInstructions }}</p>
                <a
                  :href="meal.strYoutube"
                  target="_blank"
                  class="text-lg font-medium text-blue-800 hover:underline mt-4"
                  >Watch on YouTube</a
                >
              </div>
            </div>
          </div>
        </div>
        <p v-else class="text-center">Loading...</p>
        <p v-if="error" class="text-center text-red-500">{{ error }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
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


.img-meal {
  max-width: 80%;
}

.diagonal-box-container {
  display: flex;
  justify-content: center;
}

.diagonal-box {
  position: relative;
  padding: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
}

.diagonal-box:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: skewy(1deg);
  transform-origin: 50% 0;
  outline: 1px solid transparent;
  backface-visibility: hidden;
  /* height: 600px; */
}

.bg-one:before {
  background-image: linear-gradient(45deg, #636fa4, #e8cbc0);
}

.content {
  margin-bottom: 200px;
  padding-bottom: 200px;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
  color: black;
  z-index: 1;
}

.content p {
  font-weight: 200;
  font-size: 1.2em;
  color: rgb(63, 63, 63);
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
