<template>
  <main class="dark:bg-white">
    <div>
      <BackButton/>
      <div v-if="yoga" class="p-6 m-2 max-w-4xl mx-auto rounded-xl category-detail">
        <h1 class="text-center">{{ yoga.category_name }}</h1>
        <div class="mt-4">
          <div class="text-center">{{ yoga.category_description }}</div>
        </div>
        <div class="content">
          <img :src="childPoseImageSrc" class="h-80 rounded-full mt-4" />
        </div>
        <p class="my-4 scroll-text">Scroll vertically to see all poses:</p>
        <div class="pose-content-box my-4">
          <div class="pose-content">
            <PoseCard v-for="(pose, index) in yoga.poses" :key="index" :pose="pose" />
          </div>
        </div>
      </div>
      <p v-else class="text-center">Loading...</p>
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PoseCard from '../components/PoseCard.vue'
import childPoseImg from '../assets/childpose.gif'
import BackButton from '@/components/BackButton.vue'


const childPoseImageSrc: string = childPoseImg

interface Pose {
  english_name: string
  id: number
}

interface Yoga {
  id: number
  category_name: string
  category_description: string
  poses: Pose[]
}

const yoga = ref<Yoga | null>(null)
const error = ref<string | null>(null)
const route = useRoute()

const fetchCategoryData = () => {
  fetch(`https://yoga-api-nzy4.onrender.com/v1/categories?id=${route.params.id}`)
    .then((res: Response) => {
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json() as Promise<Yoga>
    })
    .then((data: Yoga) => {
      yoga.value = data
    })
    .catch((err: Error) => {
      error.value = `Fetch error: ${err.message}`
    })
}

onMounted(() => {
  fetchCategoryData()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.scroll-text {
  font-family: 'Caprasimo', sans-serif;
}
h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.5em;
  color: #d1f23f;
}
main {
  width: 100vw;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}

.pose-content-box {
  width: 100%;
  margin: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  object-fit: contain;
  scroll-snap-type: x mandatory;
}
.pose-content {
  display: flex;
}

</style>
