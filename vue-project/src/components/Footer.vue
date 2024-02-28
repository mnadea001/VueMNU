<template>
  <footer>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="nav-item">Home</RouterLink>
        <RouterLink to="/index" class="nav-item">Index</RouterLink>
        <RouterLink to="/about" class="nav-item">Philosophy</RouterLink>
        <RouterLink to="/quote" class="nav-item">Inspiration</RouterLink>
        <RouterLink to="/meditation" class="nav-item">Meditation</RouterLink>
        <RouterLink to="/food" class="nav-item">Food</RouterLink>
        <RouterLink to="/yoga" class="nav-item">Yoga</RouterLink>
        <RouterLink to="/events" class="nav-item">Events</RouterLink>
        <RouterLink to="/source" class="nav-item">About</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<style scoped>
.wrapper {
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: orange;
}

footer {
  line-height: 1.5;
  width: 100vw;
  height: 50px;
}
nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  padding: 2rem;
  display: flex;
  justify-content: center;
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
  color: black;
}

nav a:first-of-type {
  border: 0;
}
</style>
