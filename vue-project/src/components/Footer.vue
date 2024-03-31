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
        <RouterLink to="/yoga" class="nav-item">Asanas</RouterLink>
        <RouterLink to="/source" class="nav-item">About</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.wrapper {
  width: 80vw;
  display: flex;
  flex-direction: row;
  background-color: rgb(209, 242, 63);
  justify-content: center;
  border-radius: 10px;
}

footer {
  line-height: 1.5;
  width: 100vw;
  justify-content: center;
  display: flex;
  flex-direction: row;
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
  text-decoration: underline;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color: black;
  font-family: 'Caprasimo', sans-serif;
  font-size: 1em;
  padding-left: 10px;
  padding-right: 10px;
}

nav a:first-of-type {
  border: 0;
}
@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
