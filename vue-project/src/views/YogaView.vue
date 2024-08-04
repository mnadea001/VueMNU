<template>
  <main class="dark:bg-white">
    <BackButton />

    <div class="diagonal-box-container">
      <div class="diagonal-box bg-one">
        <div class="content">
          <h1 class="text-3xl text-center my-4">Yoga is art</h1>
          <v-typical
            class="blink"
            :steps="[
              'DISCOVER',
              500,
        
              'DISCOVER DIFFERENT YOGA STYLES !',
              1000
            ]"
            :loop="Infinity"
            :wrapper="'h2'"
          ></v-typical>
          <div class="slider-yoga">
            <p class="text-scroll">Scroll vertically to see all yoga styles:</p>
            <div class="container my-4">
              <div v-if="yogas" class="category-card my-4">
                <RouterLink
                  v-for="(yoga, index) in yogas"
                  :key="index"
                  :to="`/category/${yoga.id}`"
                >
                  <CategoryCard :categoryName="yoga.category_name" />
                </RouterLink>
              </div>
              <div v-else>
                <p>Loading...</p>
              </div>
            </div>
            <div class="content">
              <img :src="yogaImageSrc" class="w-80 h-80 rounded-full mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import CategoryCard from '../components/CategoryCard.vue'
import yogaImg from '../assets/yoga.gif'
import VTypical from 'vue-typical'
import BackButton from '@/components/BackButton.vue'

const yogaImageSrc: string = yogaImg
interface Pose {
  pose_name: string
}

interface Yoga {
  id: number
  category_name: string
  category_description: string
  poses: Pose[]
}

const yogas = ref<Yoga[]>([])

onMounted(() => {
  fetch('https://yoga-api-nzy4.onrender.com/v1/categories')
    .then((res: Response) => res.json() as Promise<{ yogas: Yoga[] }>)
    // @ts-ignore
    .then((data: Yoga[]) => {
      // console.log(data);
      yogas.value = data
    })
    .catch((error: Error) => {
      if (error instanceof Error) {
        // console.error('Error fetching yoga categories:', error);
      }
    })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

main {
  max-width: 100vw;
  overflow-x: hidden; /* Empêche les débordements horizontaux */
}

h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #d1f23f;
  font-size: 5.5em;
  line-height: 1.5;
}

h2 {
  font-weight: 400;
  font-style: bold;
  font-size: 2.5em !important;
  font-family: 'Anton', sans-serif;
  color: black;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}

.slider-yoga {
  margin-right: 30px;
  margin-left: 30px;
}
.container {
  width: 100%;
  margin: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
}
.category-card {
  display: flex;
  flex-wrap: nowrap;
}

.diagonal-box-container {
  display: flex;
  justify-content: center;
  max-width: 100%; /* Limite la largeur du conteneur */
  padding: 0 10px; /* Ajoute un padding pour éviter les débordements */
  overflow: hidden; /* Empêche les débordements horizontaux */
}
.diagonal-box {
  position: relative;
  padding: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100%;
  /* max-width: 1200px; */
  box-sizing: border-box;
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

.content {
  margin-bottom: 200px;
  padding-bottom: 200px;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
}

.content p {
  font-weight: 200;
  font-size: 1.2em;
  color: rgb(6, 6, 6);
  padding: 50px 80px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 2.5em !important;
  }
  h2 {
    font-size: 1.5em !important;
  }
  .diagonal-box-container {
    padding: 0 5px;
  }
  .content p {
    padding: 20px;
  }
  .slider-yoga {
    margin: 0 10px;
  }
  .container {
    overflow-y: auto;
  }
  .category-card {
    display: flex;
    flex-direction: row;
  }
}
</style>
