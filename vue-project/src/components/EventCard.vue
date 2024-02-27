<template>
    <div class="event-card">
      <div class="event-card-content">
        <h2>{{ event.name }}</h2>
        <p>Timezone: {{ event.dates.timezone }}</p>
        <p>Date: {{ event.dates.start.localDate }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from "vue";
  
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
  .event-card {
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .event-card-content {
    padding: 20px;
  }
  </style>
  