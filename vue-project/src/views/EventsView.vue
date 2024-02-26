<script setup lang="ts">
import { onMounted, ref } from "vue";


interface Event {
  id: number;
  name: string;
  description: string;
}

const events = ref<Event[]>([]);

const fetchEventData = () => {
  fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&countryCode=US&classificationName=Sports")
  .then((res: Response) => res.json() as Promise<{ _embedded: { events: Event[] } }>)
    .then((data: { _embedded: { events: Event[] } }) => {
      events.value = data._embedded.events;
    })
    .catch((error: Error) => {
      console.error('Error fetching events:', error);
    });
};
onMounted(() => {
  fetchEventData();
});
</script>

<template>
  <main class="dark:bg-white">
    <div class="main-content">
      <div class="content">
        <h1 class="text-3xl font-semibold text-center my-4">EVENTS</h1>

        <div class="content-img my-4">
          <h2 class="text-3xl font-semibold text-center my-4">List of related events</h2>
          <div v-for="event in events" :key="event.id" class="event">
            <h2 class="text-2xl font-semibold">{{ event.name }}</h2>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


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

img {
  margin-bottom: 50px;
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
