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
<!-- <Map @selected="isSelected" :zoom="3" :events="events" /> -->
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import EventList from '@/components/events/EventList.vue'
import Pagination from '@/components/Pagination.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'
import { fetchEvents } from '../api/ticketmasterApi'
import type { Event } from '@/types/event'
import type { Page } from '@/types/ page'
export default defineComponent({
  name: 'YourComponentName',
  components: {
    EventList,
    Pagination,
    ErrorAlert
  },
  setup() {
    const eventDetails = ref<Event | null>(null)
    const events = ref<Event[]>([])
    const page = ref<Page>({
      size: 0,
      totalElements: 0,
      totalPages: 0,
      number: 0
    })
    const currentPage = ref<number>(1)
    const errorMessage = ref<string | null>(null)

    const fetchEventData = async (pageNumber: number): Promise<void> => {
      try {
        const response = await fetchEvents(pageNumber)
        events.value = response._embedded.events
        page.value = response.page
      } catch (error) {
        errorMessage.value = 'Error fetching events data'
      }
    }

    const fetchNextPage = async (): Promise<void> => {
      const nextPageNumber = currentPage.value + 1
      await fetchEventData(nextPageNumber)
      currentPage.value = nextPageNumber
    }

    const fetchPreviousPage = async (): Promise<void> => {
      const previousPageNumber = currentPage.value - 1
      await fetchEventData(previousPageNumber)
      currentPage.value = previousPageNumber
    }

    onMounted(async () => {
      await fetchEventData(currentPage.value)
    })

    return {
      eventDetails,
      events,
      page,
      currentPage,
      errorMessage,
      fetchNextPage,
      fetchPreviousPage
    }
  }
})
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
