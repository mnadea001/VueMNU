<template>
  <div
    class="text-lg mx-2 mb-4 text-white flex rounded-full border px-4 py-1 hover:bg-white hover:text-black cursor-pointer dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
    @click="navigateToPose"
  >
    <h3 class="text-center">{{ pose?.english_name }}</h3>
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
h3 {
  margin-right: 10px;
  font-size: 1.2em;
}
</style>
