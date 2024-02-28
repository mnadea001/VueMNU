<template>
  <main class="dark:bg-white">
    <div class="main-content">
      <div class="content">
        <h1 class="text-3xl font-semibold text-center mt-4">EVENTS</h1>
        <div class="content-img my-4">
          <p class="text-3xl font-semibold text-center mb-4">
            List of related events
          </p>
          <div class="event-card">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import EventCard from "../components/EventCard.vue";
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

const events = ref<Event[]>([]);

const fetchEventData = () => {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?keyword=yoga&source=universe&apikey=4efAJ7EnckUfcbAT82O2UvSHqbUaLyGs"
  )
    .then(
      (res: Response) =>
        res.json() as Promise<{ _embedded: { events: Event[] } }>
    )
    .then((data: { _embedded: { events: Event[] } }) => {
      events.value = data._embedded.events;
    })
    .catch((error: Error) => {
      console.error("Error fetching events:", error);
    });
};

onMounted(() => {
  fetchEventData();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  max-width: 100vw;
  height: 100%;
}

h1,
h2 {
  font-family: "Anton", sans-serif;
}

.main-content {
  display: flex;
  justify-content: center;
}

.event-card {
  width: 100%;
}




.content-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
  align-items: center;
  margin-bottom: 50px;
}

.content {
  width: 70%;
  padding: 15px;
}

ul li {
  text-align: center;
}
</style>
