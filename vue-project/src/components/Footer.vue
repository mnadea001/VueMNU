<template>
  <footer>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/food">Food</RouterLink>
        <RouterLink to="/index">Index</RouterLink>
        <RouterLink to="/about">Philosophy</RouterLink>
        <RouterLink to="/yoga">Yoga</RouterLink>
        <RouterLink to="/quote">Mental</RouterLink>
        <RouterLink to="/animate">Animate</RouterLink>
        <RouterLink to="/source">Source</RouterLink>
        <button
          @click="toggleDark()"
          class="py-2 px-4 bg-black text-white border rounded-md dark:bg-white dark:text-black"
        >
          Switch Mode!
        </button>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<style scoped>
.wrapper {
  width: 100vw;
  display: flex;
  flex-direction: row;
}

footer {
  line-height: 1.5;
  max-height: 100vh;
  width: 100vw;
  height: 100px;
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