<template>
  <header>
    <div class="wrapper">
      <span class="flex">
        <button @click="toggleDark()" class="py-2 px-4 bg-black border rounded-md dark:bg-white">
          <img :src="darkModeIcon" class="w-5 h-5" />
        </button>
        <RouterLink to="/" class="home-link">home</RouterLink>
      </span>

      <button class="flex" @click="openModal">
        <p class="menu-link">menu</p>
      </button>
    </div>
  </header>
  <MenuComponent :isOpen="isModalOpened" @modal-close="closeModal" />
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { ref, computed } from 'vue'
import moon from '../assets/moon.png'
import sun from '../assets/sun.svg'

import MenuComponent from '../components/MenuComponent.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}

const closeModal = () => {
  isModalOpened.value = false
}

const darkModeIcon = computed(() => {
  return isDark.value ? moon : sun
})

const burgerIcon = computed(() => {
  return isDark.value ? blackBurger : whiteBurger
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
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

.home-link, .menu-link {
  font-family: 'Caprasimo', sans-serif;
  font-size: 1.5em;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
