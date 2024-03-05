<template>
  <div v-if="!event">Loading ...</div>
  <div v-else class="event-detail container mx-auto">
    <div class="flex items-center justify-between pt-5">
      <button
        @click="$router.go(-1)"
        class="p-3 flex items-center gap-2 bg-light font-semibold rounded-full text-pink hover:scale-105">
        <IconPrevious />
        Back
      </button>
      <div class="flex gap-2">
        <a :href="event.url" target="_blank"
           class="flex gap-4 p-3 bg-teal font-semibold rounded-full text-base-100 hover:scale-105 hover:cursor-pointer">
          <IconTicket />
          Book my ticket
        </a>
      </div>
    </div>
    <EventDetailCard v-if="event" :event="event" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchEventById } from '@/api/ticketmasterApi'
import IconTicket from '@/components/icons/IconTicket.vue'
import IconPrevious from '@/components/icons/IconPrevious.vue'
import EventDetailCard from '@/components/events/EventDetailCard.vue'
import type { Event } from '@/types/event'

const route = useRoute()
const event = ref<Event | null>(null)

onMounted(async () => {
  try {
    const eventId = route.params.id
    if (eventId) {
      event.value = await fetchEventById(eventId.toString())
    } else {
      console.error('Event ID not found in route parameters.')
    }
  } catch (error) {
    console.error('Erreur lors du chargement de l\'événement:', error)
  }
})
</script>

<style scoped>
.event-detail {
padding: 100px
}
</style>
