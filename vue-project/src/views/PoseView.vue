<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import backIcon from "../assets/back.svg";

interface Pose {
  id: number;
  english_name: string;
  sanskrit_name: string;
  translation_name: string;
  pose_description: string;
  pose_benefits: string;
  url_svg: string;
}

const pose = ref<Pose | null>(null);
const error = ref<string | null>(null);
const route = useRoute();
const router = useRouter();
function goBack() {
  router.go(-1);
}

onMounted(() => {
  fetchPoseData();
});

async function fetchPoseData() {
  try {
    const response = await fetch(
      `https://yoga-api-nzy4.onrender.com/v1/poses?id=${route.params.id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    pose.value = data;
  } catch (error) {
    if (error instanceof Error) {
    // console.error("Error fetching pose data:", error);
    error = "Error fetching pose data";
  }
  }
}
</script>
<template>
  <main class="dark:bg-white">
    <div v-if="pose" class="pose-details">
      <button
        @click="goBack"
        class="text-lg font-medium hover:underline mb-4 flex text-dark"
      >
        <img :src="backIcon" class="w-10 h-10" /> Back
      </button>

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
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

h1 {
  font-family: "Anton", sans-serif;
  font-size: 2rem;
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
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 50px;
}

.img-pose {
  height: 250px;
  object-fit: contain !important;
}
</style>
