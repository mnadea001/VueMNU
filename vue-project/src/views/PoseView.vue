<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import backIcon from '../assets/back.svg'
import whiteBack from '../assets/white-back.png'
import { useDark } from '@vueuse/core'

const isDark = useDark()
const arrowIcon = computed(() => {
  return isDark.value ? backIcon : whiteBack
})

interface Pose {
  id: number
  english_name: string
  sanskrit_name: string
  translation_name: string
  pose_description: string
  pose_benefits: string
  url_svg: string
}

const pose = ref<Pose | null>(null)
const error = ref<string | null>(null)
const route = useRoute()
const router = useRouter()
function goBack() {
  router.go(-1)
}

onMounted(() => {
  fetchPoseData()
})

async function fetchPoseData() {
  try {
    const response = await fetch(
      `https://yoga-api-nzy4.onrender.com/v1/poses?id=${route.params.id}`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    pose.value = data
  } catch (error) {
    if (error instanceof Error) {
      // console.error("Error fetching pose data:", error);
      error = 'Error fetching pose data'
    }
  }
}
</script>
<template>
  <main class="dark:bg-white">
    <div class="content-btn">
        <button @click="goBack" class="hover:underline mb-4 flex text-dark">
          <img :src="arrowIcon" class="w-10 h-10" /> Back
        </button>
      </div>
    <div v-if="pose" class="pose-details">

      <h1 class="text-center">{{ pose.english_name }}</h1>
      <p><strong>Sanskrit Name:</strong> {{ pose.sanskrit_name }}</p>
      <p><strong>Translation Name:</strong> {{ pose.translation_name }}</p>
      <p><strong>Description:</strong> {{ pose.pose_description }}</p>
      <p><strong>Benefits:</strong> {{ pose.pose_benefits }}</p>
      <div class="content">
        <img class="img-pose" :src="pose.url_svg" alt="Pose Image" />
      </div>
    </div>
    <p v-else class="text-center">Loading...</p>
    <p v-if="error" class="text-center text-red-500">{{ error }}</p>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

h1 {
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  margin-bottom: 20px;
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
.pose-details {
  width: 600px;
  margin: auto;
  padding: 20px;
}

.img-pose {
  height: 250px;
  object-fit: contain !important;
}

.content-btn {
  margin-left: 80px;
}
@media screen and (max-width: 768px) {
  .content-btn {
    margin-left: 10px;
  }
}
</style>
