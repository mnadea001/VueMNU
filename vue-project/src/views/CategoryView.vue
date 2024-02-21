<template>
  <main>
    <div>
      <div
        v-if="yoga"
        class="p-6 m-2 max-w-4xl mx-auto bg-white rounded-xl shadow-md"
      >
        <button
          @click="goBack"
          class="text-lg font-medium text-blue-500 hover:underline mb-4"
        >
          Back
        </button>
        <div class="flex items-center space-x-4">
          <div>
            <div class="text-xl font-medium text-black">
              {{ yoga.category_name }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="text-lg font-medium text-black">Description:</div>
          <div class="text-gray-500">{{ yoga.category_description }}</div>
        </div>
        <div class="mt-4">
          <PoseCard
            v-for="(pose, index) in yoga.poses"
            :key="index"
            :pose="pose"
          />
        </div>
      </div>
      <p v-else class="text-center">Loading...</p>
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import PoseCard from "../components/PoseCard.vue";

interface Pose {
  english_name: string;
  id: number;
}

interface Yoga {
  id: number;
  category_name: string;
  category_description: string;
  poses: Pose[];
}

const yoga = ref<Yoga | null>(null);
const error = ref<string | null>(null);
const route = useRoute();
const router = useRouter();

function goBack() {
  router.go(-1);
}

fetch(`https://yoga-api-nzy4.onrender.com/v1/categories?id=${route.params.id}`)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json() as Promise<Yoga>;
  })
  .then((data) => {
    yoga.value = data;
  })
  .catch((err) => {
    error.value = `Fetch error: ${err.message}`;
  });
</script>

<style scoped>
main {
  width: 100vw;
}
</style>
