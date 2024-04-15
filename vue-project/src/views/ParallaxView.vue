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
        <h2 class="text-center">
          Yoga is the union <br />
          of body & mind
        </h2>
        <!-- <span>
          <v-typical
            class="blink"
            :steps="['find', 1000, 'find harmony', 500, 'find harmony & be happy !!', 1000]"
            :loop="Infinity"
            :wrapper="'h3'"
          ></v-typical
        ></span> -->

        
      </div>
    </div>
    <div class="section-3">
      <StartButton />
    </div>
  
  </div>
</template>

<script lang="ts">
import StartButton from '@/components/StartButton.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import VTypical from 'vue-typical'

export default {
  components: {
    VTypical,
    StartButton
  },
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
      second,
      VTypical
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5em;
  color: #d1f23f;
}

h2 {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.5em !important;
  color: #ef3ff2;
}

h3 {
  font-weight: 400;
  font-style: bold;
  font-size: 2.5em !important;
  margin-bottom: 50px;
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
  font-size: 4em;
}
.section-2 {
  opacity: 0; /* defaults to 0 because it's not visible */
}

.section-2 div {
  color: black;
  text-align: center;
  padding: 50px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}

.section-2 h2 {
  font-size: 2em;
  margin-bottom: 40px;
}

.section-2 p {
  line-height: 150%;
}

.section-3 {
display: flex;
flex-direction: row;
justify-content: center;
}

</style>
