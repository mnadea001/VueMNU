<template>
  <div class="box-content">
    <h2 class="text-3xl text-center mt-4 pt-5">4 main reasons for vegetarism:</h2>
    <Carousel />
  </div>

  <div class="diagonal-box bg-one">
    <div class="content">
      <p>
        In conclusion, vegetarian food holds immense importance for yogis, serving as a practical
        manifestation of yogic principles such as ahimsa, promoting mental clarity and inner peace,
        enhancing pranic energy, and aligning with ethical and environmental values. By embracing a
        vegetarian diet, yogis not only nourish their bodies but also cultivate compassion,
        mindfulness, and harmony in their lives and the world around them.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

h2 {
  font-family: 'Caprasimo', sans-serif;
  font-size: 3em;
  color: #d1f23f;

}
.conclusion {
  padding: 100px;
}

.box-content {
  margin-top: 80px;
}

.diagonal-box {
  position: relative;
  padding: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
}

.diagonal-box:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: skewy(1deg);
  transform-origin: 50% 0;
  outline: 1px solid transparent;
  backface-visibility: hidden;
  height: 250px;
}

.bg-one:before {
  background-image: linear-gradient(45deg, #636fa4, #e8cbc0);
}

.content {

  margin-bottom: 200px;
  padding-bottom: 200px;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
  color: black;
}


.content p {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 200;
  font-size: 1.2em;
  color: rgb(63, 63, 63);
  padding: 50px 80px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}


@media screen and (max-width: 768px) {
  .content-btn {
    margin-left: 10px;
  }

  .content h2 {
    color: black;
  }
}
</style>
