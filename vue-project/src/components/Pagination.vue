<template>
    <div class="flex justify-center p-3 gap-2">
      <button
        class="text-primary disabled:opacity-50"
        @click="props.fetchPreviousPage"
        :disabled="props.currentPage === 1"
      >
        <IconPrevious />
      </button>
      <button class="bg-pink text-white w-8 p-2 rounded-lg">
        {{ props.currentPage }}
      </button>
      <button
        class=" text-primary rounded-full"
        @click="props.fetchNextPage"
      >
        <IconNext />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import defineProps from 'vue'
  import IconPrevious from '@/components/icons/IconPrevious.vue'
  import IconNext from '@/components/icons/IconNext.vue'
  
  const props = defineProps<{
    fetchNextPage: () => void
    fetchPreviousPage: () => void
    currentPage: number
  }>()
  
  </script>