<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BackButton from '@/components/BackButton.vue'

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
    <BackButton />

    <div class="diagonal-box-container">
      <div class="diagonal-box bg-one">
        <div class="content">
          <h1 v-if="pose" class="text-center">{{ pose.english_name }}</h1>
          <h1 v-else="pose" class="text-center">Loading..</h1>
          <div v-if="pose" class="content">
            <img :src="pose.url_svg" class="w-80 h-80" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="pose" class="m-2 p-5 max-w-4xl mx-auto card pose-details">
      <p class="my-4"><strong>Sanskrit Name:</strong> {{ pose.sanskrit_name }}</p>
      <p class="my-4"><strong>Translation Name:</strong> {{ pose.translation_name }}</p>
      <p class="my-4"><strong>Description:</strong> {{ pose.pose_description }}</p>
      <p class="my-4"><strong>Benefits:</strong> {{ pose.pose_benefits }}</p>
    </div>
    <p v-if="error" class="text-center text-red-500">{{ error }}</p>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

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
/* .pose-details {
  padding: 50px;
} */

/* .img-pose {
  height: 250px;
  object-fit: contain !important;
} */

.diagonal-box-container {
  display: flex;
  justify-content: center;
}
.diagonal-box {
  position: relative;
  padding: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100vw;
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
  color: black;
}

.content p {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 200;
  font-size: 1.2em;
  color: rgb(63, 63, 63);
  padding: 50px 80px;
}
</style>
