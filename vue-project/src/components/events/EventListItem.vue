<template>
  <div
    class="grid grid-cols-3 rounded-lg bg-teal-dark bg-opacity-15 m-3 p-2 hover:cursor-pointer hover:bg-pink hover:bg-opacity-10"
    @click="goToDetail(props.event.id)">
    <div class="col-span-1 justify-self-center">
      <img :src="eventImage" alt="event image" class="w-52 h-32 object-cover">
    </div>
    <div class="col-span-2">
      <div class="">
        <h2 class="text-xl">{{ props.event.name.toUpperCase() }}</h2>
        <h3 class="flex items-center gap-2 mb-2">
        <IconMarker />
        {{ eventCity }},
        {{ eventState }}
      </h3>
        <p class="mt-2">
        On {{ formatDate(localDate) }}
        <span v-if="!noSpecificTime">at {{ formatTime(localTime) }}</span>
      </p>

      </div>
    </div>
   
  </div>
</template>

<script setup lang="ts">
import type { Event } from '@/types/event'
import router from '@/router'
import { defineProps, computed } from "vue";

import { formatDate } from '@/filters/formatDate'
import { formatTime } from '@/filters/formatTime'
const props = defineProps<{
  event: Event,
}>()
const { place } = props.event || {}
const { localTime, localDate, noSpecificTime } = props.event.dates?.start || {}
const eventCity = place?.city?.name || 'City undefined'
const eventState = place?.state?.stateCode || 'State Code undefined'
const eventImage = computed(() => {
  // Check if images exist before accessing the URL
  if (props.event.images && props.event.images.length > 1) {
    return props.event.images[1].url;
  }
  return ''; // Return a placeholder image or handle this case as needed
})

const goToDetail = (id: string) => {
  router.push({ name: 'eventDetail', params: { id } })
}
</script>
