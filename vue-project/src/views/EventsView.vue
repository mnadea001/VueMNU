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
    <Map @on-selected="isSelected" :zoom="3" :events="events" />
  </main>
</template>

<script setup lang="ts">
import Map from '../components/map/Map.vue'
import { onMounted, ref } from 'vue'
import type { Event } from '@/types/event'
import EventList from '@/components/events/EventList.vue'
import { fetchEvents } from '../api/ticketmasterApi'
import Pagination from '@/components/Pagination.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'
import type { Page } from '@/types/ page'

const eventDetails = ref<Event | null>(null)
const events = ref<Event[]>([])
const page = ref<Page>({
  size: 0,
  totalElements: 0,
  totalPages: 0,
  number: 0
})
const currentPage = ref(1)
const totalPages = ref<number>(1)
const errorMessage = ref<string | null>(null)

const isSelected = (event: Event) => {
  eventDetails.value = event
}

onMounted(async () => {
  const response = await fetchEvents()

  events.value = response._embedded.events
  page.value = response.page
})



const fetchNextPage = async () => {
  const nextPageNumber = currentPage.value + 1
  const response = await fetchEvents( nextPageNumber)
  currentPage.value = response.page.number
  totalPages.value = response.page.totalPages
  events.value = response._embedded.events
}

const fetchPreviousPage = async () => {
  const nextPageNumber = currentPage.value - 1
  const response = await fetchEvents( nextPageNumber)
  currentPage.value = response.page.number
  totalPages.value = response.page.totalPages
  events.value = response._embedded.events
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
