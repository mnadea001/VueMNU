<script setup lang="ts">
import { ref, onMounted,  } from 'vue'
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
    <BackButton/>
    <div v-if="pose" class="m-2 max-w-4xl mx-auto card pose-details">
      <h1 class="text-center">{{ pose.english_name }}</h1>
      <span class="my-4">
        <p class="my-4"><strong>Sanskrit Name:</strong> {{ pose.sanskrit_name }}</p>
        <p class="my-4"><strong>Translation Name:</strong> {{ pose.translation_name }}</p>
        <p class="my-4"><strong>Description:</strong> {{ pose.pose_description }}</p>
        <p class="my-4"><strong>Benefits:</strong> {{ pose.pose_benefits }}</p>
      </span>
      <div class="content">
        <img class="img-pose" :src="pose.url_svg" alt="Pose Image" />
      </div>
    </div>
    <p v-else class="text-center">Loading...</p>
    <p v-if="error" class="text-center text-red-500">{{ error }}</p>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
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
.pose-details {
  padding: 50px;
}

.img-pose {
  height: 250px;
  object-fit: contain !important;
}

</style>
