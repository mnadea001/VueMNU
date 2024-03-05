<template>
    <div class="concert-list">
      <div class="p-5 font-semibold mb-5">
        <h2 class="text-xl">Events les plus proches de chez vous</h2>
        <p>{{ props.page.totalElements }} event(s) vous attendent</p>
      </div>
      <EventListItem v-for="event in props.events" :key="event.id" :event="event" />
    </div>
  </template>
  
  <script setup lang="ts">
  
  import type { Event } from '@/types/event'
  import type { Page } from '../../types/page'
  import EventListItem from '@/components/events/EventListItem.vue'
  import { defineProps} from 'vue'
  
  const props = defineProps<{
    events: Event[],
    page: Page
  }>()
  
  </script>