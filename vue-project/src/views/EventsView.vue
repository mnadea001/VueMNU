<template>
  <main class="grid lg:grid-cols-2 sm:grid-cols-1 dark:bg-white">
    <div class="rounded-lg min-h-screen overflow-hidden">
      <ErrorAlert v-if="errorMessage" :message="errorMessage" />
      <EventList :events="events" :page="page" />
      <Pagination
        :fetch-next-page="fetchNextPage"
        :fetch-previous-page="fetchPreviousPage"
        :current-page="currentPage" />
    </div>
<Map @selected="isSelected" :zoom="3" :events="events" />
  </main>
</template>

<script setup lang="ts">
import Map from '../components/map/Map.vue'
import EventList from '@/components/events/EventList.vue'
import Pagination from '@/components/Pagination.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'
import { ref, onMounted } from 'vue'
import { fetchEvents } from '../api/ticketmasterApi'
import type { Event } from '@/types/event'
import type { Page } from '@/types/ page'

const eventDetails = ref<Event | null>(null)
const events = ref<Event[]>([])
const page = ref<Page>({
  size: 0,
  totalElements: 0,
  totalPages: 0,
  number: 0
})
const currentPage = ref<number>(1)
const totalPages = ref<number>(1)
const errorMessage = ref<string | null>(null)

const isSelected = (event: Event) => {
  eventDetails.value = event
}

onMounted(async () => {
  await fetchEventData(currentPage.value)
})

const fetchEventData = async (pageNumber: number) => {
  try {
    const response = await fetchEvents(pageNumber)
    events.value = response._embedded.events
    page.value = response.page
  } catch (error) {
    errorMessage.value = 'Error fetching events data'
  }
}

const fetchNextPage = async () => {
  const nextPageNumber = currentPage.value + 1
  await fetchEventData(nextPageNumber)
  currentPage.value = nextPageNumber
}

const fetchPreviousPage = async () => {
  const previousPageNumber = currentPage.value - 1
  await fetchEventData(previousPageNumber)
  currentPage.value = previousPageNumber
}
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
