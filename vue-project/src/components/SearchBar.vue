<template>
    <div class="flex gap-2 p-10 bg-light mx-3 rounded-xl">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Recherche un evenement par nom d'artiste, ville"
        class="p-5 w-full rounded-full text-xl focus:border-teal border-4 hover:border-teal border-pink focus-visible:outline-none"
      />
      <button
        @click="$emit('onSearch', searchQuery)"
        type="submit"
        class="py-2 px-5 flex gap-2 items-center font-semibold rounded-full hover:scale-105">
        <IconSearch />
        Rechercher
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  
  import { ref } from 'vue'
  import IconSearch from '@/components/icons/IconSearch.vue'
  
  const searchQuery = ref('')
  
  </script>

  