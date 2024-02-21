<template>
    <div class="pose-card" @click="navigateToPose">
      <h3 class="text-gray-500">{{ pose?.english_name }}</h3>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { defineProps } from 'vue';
  
  interface Pose {
    id: number;
    english_name: string;
  }
  
  const props = defineProps<{
    pose: Pose;
  }>()
  
  const pose = ref<Pose | null>(null);
  const router = useRouter();
  
  onMounted(() => {
    pose.value = props.pose;
  });
  
  function navigateToPose() {
    if (pose.value) {
      router.push(`/pose/${pose.value.id}`);
    }
  }
  </script>
  
  <style scoped>
  .pose-card {
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
  }
  </style>
  