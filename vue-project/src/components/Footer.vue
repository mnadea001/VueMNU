<template>
  <footer>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="nav-item">Home</RouterLink>
        <RouterLink to="/index" class="nav-item">Index</RouterLink>
        <RouterLink to="/about" class="nav-item">Philo'</RouterLink>
        <RouterLink to="/meditation" class="nav-item">Medit'</RouterLink>
        <RouterLink to="/food" class="nav-item">Food</RouterLink>
        <RouterLink to="/yoga" class="nav-item">Asanas</RouterLink>
        <RouterLink to="/source" class="nav-item">About</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.wrapper {
  width: 80vw;
  display: flex;
  flex-direction: row;
  background: #d1f23f;
  background-image: linear-gradient(45deg, #636fa4, #e8cbc0);
  justify-content: center;
  border-radius: 10px;
}

footer {
  line-height: 1.5;
  width: 100vw;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
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
  /* text-decoration: underline; */
  background-color: #020202;
  color: #d1f23f;;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: #020202;
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

.nav-item {
  position: relative;
}

.nav-item::after {
  content: url('../assets/hover-link.png');
  display: none;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
}

.nav-item:hover::after {
  display: inline-block;
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

  footer {
    margin-top: 70px;
  }
}
</style>
