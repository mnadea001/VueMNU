<template>
  <div class="root">
    <img class="background" ref="background" src="../assets/nature.jpg" />
    <img class="foreground" ref="foreground" src="../assets/birds.png" />
    <div class="section section-1" ref="first">
      <div>
        <h1>
          Welcome
          <br />
          new yogi
        </h1>
      </div>
    </div>
    <div class="section-2" ref="second">
    <div>
      <h2>find harmony & be happy</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const foreground = ref(null)
    const background = ref(null)
    const first = ref(null)
    const second = ref(null)
    const handleScroll = (evt) => {
      const scrollY = window.scrollY
      // decreases as user scrolls
      first.value.style.opacity =
        (100 - (scrollY + window.innerHeight - first.value.offsetHeight)) / 100
      // increases as user scrolls
      second.value.style.opacity = (scrollY + window.innerHeight - second.value.offsetTop) / 100

      const maxBackgroundSize = 120
      const backgroundSize = scrollY / (maxBackgroundSize - 100) // increases as user scrolls

      // zoom the background at a slower rate
      background.value.style.transform = 'scale(' + (100 + backgroundSize * 0.4) / 100 + ')'
      // foreground.value.style.transform = 'scale(' + (100 + backgroundSize) / 100 + ')'
      foreground.value.style.transform = `translateX(${scrollY}px)`
    }
    onMounted(() => {
      document.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll)
    })
    return {
      foreground,
      background,
      first,
      second
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5em;
  color: #d1f23f;
}

h2 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5em;
  color: #ef3ff2;
}
.section {
  height: 100vh;
  position: relative;
}

.img.foreground {
  padding-top: 600px !important;
}
img.background,
img.foreground {
  /* Fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Scale proportionately */
  width: 100%;
  height: auto;
}

img.background {
  /* Positioning */
  position: absolute;
  top: 20;
  left: 0;
}

.section > div {
  position: fixed;
  color: white;
  /* centers this div */
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
}

.section-1 {
  /* margin-bottom: 500px;  */
  font-size: 4em;
}

.section-2 {
  opacity: 0; /* defaults to 0 because it's not visible */
}

.section-2 div {
  /* background-color: rgba(255, 255, 255, 0.7); */
  color: black;
  text-align: center;
  padding: 50px;
  margin: auto;
  max-width: 300px;
}

.section-2 h2 {
  font-size: 2em;
  margin-bottom: 40px;
}

.section-2 p {
  line-height: 150%;
}
</style>
