<template>
  <div 
  class="text-lg mx-2 mb-4 bg-white text-black flex rounded-full border px-4 py-1 hover:bg-black hover:text-white cursor-pointer"

  @click="navigateToPose">
    <h3 class="text-center ">{{ pose?.english_name }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

interface Pose {
  id: number
  english_name: string
}

const props = defineProps<{
  pose: Pose
}>()

const pose = ref<Pose | null>(null)
const router = useRouter()

onMounted(() => {
  pose.value = props.pose
})

function navigateToPose() {
  if (pose.value) {
    router.push(`/pose/${pose.value.id}`)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

h3 {
  font-family: 'Anton', sans-serif;
  margin-right: 10px;
  font-size: 1.2em;
}
.pose-card {
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 10px 15px;
  margin-top: 30px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.pose-card:hover {
  background-color:#0527ae;
  border: transparent;
  color: rgb(255, 255, 255);
}
</style>
