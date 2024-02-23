<template>
  <header>
    <div class="wrapper">
      <button
        @click="toggleDark()"
        class="py-2 px-4 bg-black text-white border rounded-md dark:bg-white dark:text-black"
      >
        Switch Mode!
      </button>
      <button class="text-btn" @click="openModal">
        <img :src="burgerIcon" class="w-10 h-10" /> MENU
      </button>
    </div>
  </header>
  <MenuComponent :isOpen="isModalOpened" @modal-close="closeModal" />
</template>

<script setup lang="ts">
import MenuComponent from "../components/MenuComponent.vue";
import { ref } from "vue";
import burgerIcon from "../assets/burger.svg";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};
</script>
<style scoped>
.wrapper {
  width: 100vw;
  display: flex;
  place-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
header {
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
  width: 100vw;
  place-items: center;
  padding: 2rem 5rem;
  padding-right: calc(var(--section-gap) / 2);
}

</style>
