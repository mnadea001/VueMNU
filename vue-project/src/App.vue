<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "../src/components/Header.vue";

</script>

<template>
  <div class="app-wrapper dark:bg-white dark:text-black">
    <Header></Header>
    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
}

</style>
