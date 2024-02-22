<template>
    <div class="pose-card" @click="navigateToPose">
      <h3 class="text-gray-500">{{ pose?.english_name }}</h3>
      <img :src="eyeImg" class="w-10 h-10"/>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { defineProps } from 'vue';
  import eyeImg from '../assets/eye.svg';
  
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
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");


h3 {
  font-family: "Anton", sans-serif;
}
.pose-card {
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  