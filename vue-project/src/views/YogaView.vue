<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import CategoryCard from '../components/CategoryCard.vue'
import yogaImg from '../assets/yoga.gif'
import VTypical from 'vue-typical'
import backIcon from '../assets/back.svg'
import whiteBack from '../assets/white-back.png'
import { useDark } from '@vueuse/core'

const router = useRouter()
const isDark = useDark()
const arrowIcon = computed(() => {
  return isDark.value ? backIcon : whiteBack
})

function goBack() {
  router.go(-1)
}

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

<template>
  <main class="dark:bg-white">
    <div class="content-btn">
      <button
        @click="goBack"
        class="text-white-500 dark:text-black hover:underline mb-4 flex"
      >
        <img :src="arrowIcon" class="w-10 h-10" /> back
      </button>
    </div>
    <h1 class="text-3xl text-center my-4">Yoga is art</h1>
    <div class="content">
      <v-typical
        class="blink"
        :steps="[
          'DISCOVER',
          1000,
          'DISCOVER DIFFERENT',
          500,
          'DISCOVER DIFFERENT YOGA STYLES !',
          1000
        ]"
        :loop="Infinity"
        :wrapper="'h2'"
      ></v-typical>
      <img :src="yogaImageSrc" class="w-80 h-80 rounded-full mt-4" />
    </div>
    <div class="slider-yoga">
      <p class="my-4 ms-4 scroll-text">Scroll vertically to see all yoga styles:</p>
      <div class="container my-4">
        <div class="category-card my-4">
          <RouterLink v-for="(yoga, index) in yogas" :key="index" :to="`/category/${yoga.id}`">
            <CategoryCard :categoryName="yoga.category_name" />
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.scroll-text {
  font-family: "Caprasimo", sans-serif;
}
main {
  max-width: 100vw;
}

h1 {
  font-family: 'Anton', sans-serif;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}

.content-btn {
  margin-left: 80px;
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
  object-fit: contain;
  scroll-snap-type: x mandatory;
}
.category-card {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  .content-btn {
  margin-left: 10px;
}
}
</style>
