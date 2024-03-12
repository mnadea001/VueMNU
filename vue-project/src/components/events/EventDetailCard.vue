<template>
  <div
    class="font-bold flex justify-between items-center mt-5 p-5 bg-teal bg-opacity-40 rounded-t-xl"
  >
    <div>
      <h2 class="text-3xl">
        {{ eventName }}
      </h2>
    </div>
  </div>
  <div
    class="grid grid-cols-2 gap-10 p-10 bg-teal rounded-b-lg bg-opacity-15 text-base event-detail-card"
  >
    <div>
      <img :src="image" alt="detail" class="w-2/3 rounded-lg" />
      <br />
      <br />

      <div class="flex gap-2">
        <div class="self-center">
          <IconCalendar />
        </div>
        <p class="mt-2">
          On {{ formatDate(localDate) }}
          <span v-if="!noSpecificTime">at {{ formatTime(localTime) }}</span>
        </p>
      </div>
      <div class="flex gap-2">
        <a :href="event.url" target="_blank"
           class="flex gap-4 p-3 bg-teal font-semibold rounded-full text-base-100 hover:scale-105 hover:cursor-pointer">
          <IconTicket />
          Book my ticket
        </a>
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
      <div
        v-if="isDropdownOpen"
        id="dropdown"
        class="z-10 dark:bg-white w-100 rounded-lg shadow p-5 bg-gray-700"
      >
        <p>{{ eventDescription }}</p>
      </div>
    </div>

    <div>
      <h3 class="flex items-center gap-2 mb-2">
        <IconMarker />
        {{ eventCity }},
        {{ eventState }}
      </h3>
      <p>{{ eventAddress }}</p>
      <p>{{ eventLatitude }}, {{ eventLongitude }}</p>

      <Map
      v-if="location"
        class="py-5"
        :zoom="14"
        :event="event"
        :center="location"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Event } from '@/types/event'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconMarker from '@/components/icons/IconMarker.vue'
import { formatDate } from '@/filters/formatDate'
import { formatTime } from '@/filters/formatTime'
import { defineProps, ref } from 'vue'
import Map from '@/components/map/Map.vue'

const props = defineProps<{
  event: Event
}>()

const { place } = props.event || {}
const { localTime, localDate, noSpecificTime } = props.event.dates?.start || {}
const eventName = props.event.name
const eventDescription = props.event.description
const image = props.event.images && props.event.images.length > 1 ? props.event.images[1].url : ''
const eventCity = place?.city?.name || 'City undefined'
const eventState = place?.state?.stateCode || 'State Code undefined'
const eventAddress = place?.address?.line1 || 'Address undefined'
const eventLatitude = Number(place?.location?.latitude) || 0 // Provide a default value if latitude is undefined or not a number
const eventLongitude = Number(place?.location?.longitude) || 0 // Provide a default value if longitude is undefined or not a number
const location: [number, number] = [eventLatitude, eventLongitude]

const isDropdownOpen = ref(false)

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>


<style scoped></style>
