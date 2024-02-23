<script setup lang="ts">
import { RouterView } from "vue-router";

import Footer from "../src/components/Footer.vue";
import Header from "../src/components/Header.vue";
</script>

<template>
  <div class="app-wrapper dark:bg-white dark:text-black">
    <Header></Header>

    <RouterView v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </RouterView>

    <Footer></Footer>
  </div>
</template>

<style> 
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
}

/* route transition  */

.route-enter-from {
opacity: 0;
transform: translateX(100px )
}

.route-enter-active {
transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 1;
transform: translateX(-100px )
}

.route-leave-active {
transition: all 0.5s ease-in;
}
</style>
