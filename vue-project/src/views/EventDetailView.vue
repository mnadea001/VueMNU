<template>
  <main class="dark:bg-white">
    <div>
      <button
        @click="goBack"
        class="text-lg font-medium hover:underline mb-4 flex"
      >
        <img :src="backIcon" class="w-10 h-10" /> Back
      </button>

      <div class="flex items-center space-y-4 space-x-4">
        <div>
          <h2>{{ event.name }}</h2>
        <p>Timezone: {{ event.dates.timezone }}</p>
        <p>Date: {{ event.dates.start.localDate }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import { useRouter } from "vue-router";
import backIcon from "../assets/back.svg";


const router = useRouter();

function goBack() {
  router.go(-1);
}
interface Event {
  id: string;
  name: string;
  description: string;
  dates: {
    timezone: string;
    start: {
      localDate: string;
    };
  };
}
const props = defineProps<{
    event: Event;
  }>();
</script>

<style scoped>
/* Styles */
</style>
