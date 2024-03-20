<template>
    <div class="event-card ">
      <div class="event-card-content  rounded-lg  bg-gray-700 dark:bg-white">
        <p class="text-3xl font-semibold mb-4">{{ event.name }}</p>
        <div class="flex justify-between items-center mb-4">
          <div>
            <p>{{ event.dates.timezone }}</p>
            <p>Date: {{ event.dates.start.localDate }}</p>
          </div>
          <div class="link-event flex justify-center items-center">
          <a :href="event.url" target="_blank" class="visit-link">Check more</a>
          <img :src="vector" class="w-10 h-10" />
        </div>
        </div>
  
        <button
          @click="toggleDropdown"
          class="mt-5 dark:text-black border-black text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          See description
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
       

        </button>
  
        <!-- Dropdown menu -->
        <div
          v-if="isDropdownOpen"
          id="dropdown"
          class="z-10 dark:bg-white w-100 rounded-lg shadow p-5 bg-gray-700"
        >
          <p>{{ event.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref } from "vue";
  import vector from "../assets/Vector2.png";
  interface Event {
    id: string;
    name: string;
    url: string;
    locale: string;
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
  
  const isDropdownOpen = ref(false);
  
  function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
  }
  </script>
  
  <style scoped>
  .event-card {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .event-card-content {
    padding: 20px;
  }
  
  .link-event {
  position: relative;
  text-align: center;
}

.visit-link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-decoration: none;
}

.link-event img {
  width: 140px;
  height: 140px;
}
  </style>
  