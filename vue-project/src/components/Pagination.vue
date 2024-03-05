<template>
    <div class="flex justify-center p-3 gap-2">
      <button
        class=" disabled:opacity-50"
        @click="props.fetchPreviousPage"
        :disabled="props.currentPage === 1"
      >
        <IconPrevious />
      </button>
      <button class=" w-8 p-2 rounded-lg">
        {{ props.currentPage }}
      </button>
      <button
        class="  rounded-full"
        @click="props.fetchNextPage"
      >
        <IconNext />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import IconPrevious from '@/components/icons/IconPrevious.vue'
  import IconNext from '@/components/icons/IconNext.vue'
  
  const props = defineProps<{
    fetchNextPage: () => void
    fetchPreviousPage: () => void
    currentPage: number
  }>()
  
  </script>