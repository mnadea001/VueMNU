<template>
  <div class="content-btn">
    <button
      @click="goBack"
      class="text-lg  dark:bg-white dark:text-black mb-4 flex rounded-full border px-4 py-1 dark:hover:bg-black hover:bg-white hover:text-black dark:hover:text-white"
    >
    back
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<style scoped>
.content-btn {
  margin-left:80px;
}
</style>
