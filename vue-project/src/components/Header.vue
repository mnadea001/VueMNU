<template>
  <header>
    <div class="wrapper">
      <button class="text-btn" @click="openModal"> <img :src="burgerIcon" class="w-10 h-10" /> MENU</button>
      <button
              @click="toggleDark()"
              class="py-2 px-4 bg-black text-white border rounded-md dark:bg-white dark:text-black"
            >
              Switch Mode!
            </button>
    </div>
  </header>
  <MenuComponent
        :isOpen="isModalOpened"
        @modal-close="closeModal"
      />
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
  flex-direction: row;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100vw;
  padding: 2rem 5rem;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding: 5rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>