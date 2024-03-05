<template>
    <div @click="goToDetail(props.event.id)" class="bg-white rounded-lg hover:cursor-pointer">
      <img class="object-cover w-full rounded-t-lg" :src="image" alt="photo">
      <div class="p-5">
        <h2 class="text-lg">{{ props.event.name.toUpperCase() }}</h2>
        <div class="gap-2 flex items-center">
          <IconCalendar />
          <p class="mt-2">On {{ formatDate(props.event.dates.start.localDate) }}
            <span v-if="!props.event.dates.start.noSpecificTime">
                at {{ formatTime(props.event.dates.start.localTime) }}
              </span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  import type { Event } from '../../types/event'
  import IconCalendar from '../icons/IconCalendar.vue'
  import router from '@/router'
  import { formatDate } from '../../filters/formatDate'
  import { formatTime } from '../../filters/formatTime'
  
  const props = defineProps(
    {
      event: {
        type: Object as () => Event,
        default: null
      }
    }
  )
  const image = props.event.images && props.event.images.length > 1 ? props.event.images[1].url : ''
  const goToDetail = (id: string) => {
    router.push({ name: 'eventDetail', params: { id } })
  }
  
  </script>