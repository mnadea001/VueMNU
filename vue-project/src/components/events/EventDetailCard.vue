<template>
  <div
    v-if="event"
    class="font-bold flex justify-between items-center mt-5 p-5 bg-teal bg-opacity-40 rounded-t-xl"
  >
    <div>
      <h2 class="text-3xl">
        {{ eventName }}
      </h2>
    </div>
    <div class="flex gap-2">
      <div class="self-center">
        <IconCalendar />
      </div>
      <p class="mt-2">
        On {{ formatDate(localDate) }}
        <span v-if="!noSpecificTime">at {{ formatTime(localTime) }}</span>
      </p>
    </div>
  </div>
  <div
    v-if="event"
    class="grid grid-cols-2 gap-10 p-10 bg-teal rounded-b-lg bg-opacity-15 text-base event-detail-card"
  >
    <div>
      <img :src="image" alt="detail" class="w-2/3 rounded-lg" />
      <br />
      <br />
      <p>{{ eventDescription }}</p>
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
        :latitude="eventLatitude"
        :longitude="eventLongitude"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Event } from '@/types/event'
import { defineProps } from 'vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconMarker from '@/components/icons/IconMarker.vue'
import Map from '@/components/map/Map.vue'
import { formatDate } from '@/filters/formatDate'
import { formatTime } from '@/filters/formatTime'

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
const eventLatitude = place?.location?.latitude || 'Latitude undefined'
const eventLongitude = place?.location?.longitude || 'Longitude undefined'
const location = place?.location ? [place.location.latitude, place.location.longitude] : null
</script>

<style scoped>

</style>