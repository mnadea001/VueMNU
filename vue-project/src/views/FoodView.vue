<template>
  <main>
    <BackButton />
    <div class="diagonal-box-container">
      <div class="diagonal-box bg-one">
        <div class="content">
          <h1 class="text-center my-4">
            Veggie <br />
            is good !!!
          </h1>
          <h4 class="text-center my-4">
            Vegetarianism holds a significant place in the lifestyle and philosophy of yoga, serving
            as more than just a dietary choice but rather a cornerstone of spiritual and holistic
            living. Yogis, practitioners of yoga, often adhere to a vegetarian diet for various
            reasons, all of which align with the core principles of yoga practice.
          </h4>
        </div>
        <p class="my-4 ml-5">Scroll vertically to see all meals:</p>
        <div class="container-card my-4 pb-5">
          <RouterLink v-for="(meal, index) in meals" :key="index" :to="`/meal/${meal.idMeal}`">
            <MealCard :img="meal.strMealThumb" :strMeal="meal.strMeal" />
          </RouterLink>
        </div>
      </div>
    </div>
    <div>
      <VeganModal />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import MealCard from '../components/MealCard.vue'

import VeganModal from '../components/VeganModal.vue'
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
  font-size: 4.5em;
  color: #0527ae;
  line-height: 1.5;
}

h4 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 200;
  font-size: 1.2em;
  color: rgb(63, 63, 63);
  padding: 50px 80px;
}

.diagonal-box-container {
  display: flex;
  justify-content: center;
}

.diagonal-box {
  position: relative;
  padding: 10px;
  margin-top: 80px;
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

}

.bg-one:before {
  background-image: linear-gradient(45deg, #636fa4, #e8cbc0);
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.content {
  margin-bottom: 200px;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
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
  margin-bottom: 50px;
}

@media screen and (max-width: 768px) {
  .title-container {
    margin: 10px;
  }
  .conclusion-food,
  h4 {
    padding: 20px;
  }
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 36px;
  }
}
</style>
