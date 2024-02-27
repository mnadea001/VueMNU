<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import backIcon from "../assets/back.svg";

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

const event = ref<Event | null>(null);
const error = ref<string | null>(null);
const route = useRoute();
const router = useRouter();

function goBack() {
  router.go(-1);
}

const fetchEventData = () => {
  fetch(
    `"https://app.ticketmaster.com/discovery/v2/events/${route.params.id}.json?apikey=4efAJ7EnckUfcbAT82O2UvSHqbUaLyGs"`
  )
    .then((res: Response) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json() as Promise<{ events: Event[] }>;
    })
    .then((data: { events: Event[] }) => {
      if (data.events && data.events.length > 0) {
        event.value = data.events[0];
      } else {
        error.value = "Meal not found";
      }
    })
    .catch((err: Error) => {
      error.value = `Fetch error: ${err.message}`;
    });
};

onMounted(() => {
  fetchEventData();
});
</script>

<template>
  <main class="dark:bg-white">
    <div>
      <div v-if="event" class="m-2 max-w-4xl mx-auto rounded-xl shadow-md card">
        <button
          @click="goBack"
          class="text-lg font-medium hover:underline mb-4 flex"
        >
          <img :src="backIcon" class="w-10 h-10" /> Back
        </button>

        <div class="flex items-center space-y-4 space-x-4">
          <!-- <img
            class="img-meal rounded-full"
            :src="meal.strMealThumb"
            alt="Meal Image"
          /> -->
          <div>
            <div class="font-medium title">{{ event.name }}</div>
            <div class="text-gray-500">
              {{ event.description }} 
            </div>
          </div>
        </div>
        <!-- <div v-if="meal.strTags">
          <div class="text-lg font-medium">Tags:</div>
          <div class="text-gray-500">{{ meal.strTags }}</div>
        </div>
        <div class="mt-4">
          <div class="text-lg font-medium">Instructions:</div>
          <div class="text-gray-500">{{ meal.strInstructions }}</div>
        </div>
        <div class="mt-4">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="text-lg font-medium text-blue-500 hover:underline"
            >Watch on YouTube</a
          >
        </div> -->
      </div>
      <p v-else class="text-center">Loading...</p>
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;
}

.card {
  padding: 50px;
  margin-bottom: 50px;
}
.title {
  font-family: "Anton", sans-serif;
  font-size: 3rem;
}

.img-meal {
  height: 150px;
}
</style>
