<template>
  <main>
    <BackButton />
    <div class="title-container">
      <h1 class="text-center my-4">
        Veggie <br />
        is good !!!
      </h1>
      <h4 class="text-center my-4">
        Vegetarianism holds a significant place in the lifestyle and philosophy of yoga, serving as
        more than just a dietary choice but rather a cornerstone of spiritual and holistic living.
        Yogis, practitioners of yoga, often adhere to a vegetarian diet for various reasons, all of
        which align with the core principles of yoga practice.
      </h4>
    </div>
    <p class="my-4 ml-5 scroll-text">Scroll vertically to see all meals:</p>
    <div class="container-card my-4 pb-5">
      <RouterLink v-for="(meal, index) in meals" :key="index" :to="`/meal/${meal.idMeal}`">
        <MealCard :img="meal.strMealThumb" :strMeal="meal.strMeal" />
      </RouterLink>
    </div>
    <h2 class="text-3xl text-center mt-4 pt-5">4 main reasons for vegetarism:</h2>
    <Carousel />
    <div class="conclusion-food">
      <h3 class="text-center mb-4">
        In conclusion, vegetarian food holds immense importance for yogis, serving as a practical
        manifestation of yogic principles such as ahimsa, promoting mental clarity and inner peace,
        enhancing pranic energy, and aligning with ethical and environmental values. By embracing a
        vegetarian diet, yogis not only nourish their bodies but also cultivate compassion,
        mindfulness, and harmony in their lives and the world around them.
      </h3>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import MealCard from '../components/MealCard.vue'

import Carousel from '@/components/Carousel.vue'
import BackButton from '@/components/BackButton.vue'

interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

const meals = ref<Meal[]>([])

const fetchMealData = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
    .then((res: Response) => res.json() as Promise<{ meals: Meal[] }>)
    .then((data: { meals: Meal[] }) => {
      console.log(data)
      meals.value = data.meals
    })
    .catch((error: Error) => {
      console.error('Error fetching meals:', error)
    })
}

onMounted(() => {
  fetchMealData()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

main {
  width: 100vw;
  height: 100%;
}
h1 {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.5em ;
  color: #d1f23f;
  line-height: 1.5;
}

h2 {
  color: #f537df;
  margin-top: 40px;
}
h2,
.scroll-text {
  font-family: 'Caprasimo', sans-serif;
}
.title-container {
  margin: 120px;
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

.conclusion-food {
  margin: 100px;
}

@media screen and (max-width: 768px) {
  .title-container {
    margin: 10px;
  }
  .conclusion-food {
    margin: 10px;
  }
  h1, h2{
    font-size: 60px;
  }
}
</style>
