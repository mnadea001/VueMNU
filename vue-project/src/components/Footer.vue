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