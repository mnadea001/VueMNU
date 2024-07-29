<template>
  <div class="content">
    <h2 class="text-3xl text-center mt-4 pt-5">4 main reasons for vegetarism:</h2>
    <Carousel />
  </div>

  <section class="section_1"></section>


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
  <section class="section_2"></section>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
</script>

<style scoped>
.conclusion {
  padding: 100px;
}

.section_1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 245px;
  background: #e8cbc0;
  background: -webkit-linear-gradient(to right, #636fa4, #e8cbc0);
  background: linear-gradient(to right, #636fa4, #e8cbc0);
  transform-origin: top right;
  transform: skewY(2.5deg);
  z-index: -10;
}

.section_1::after {
  content: '';
  width: 100%;
  height: 145px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #e8cbc0;
  background: -webkit-linear-gradient(to right, #636fa4, #e8cbc0);
  background: linear-gradient(to right, #636fa4, #e8cbc0);
  transform-origin: bottom left;
  transform: skewY(2.5deg);
  z-index: -10;
}

section {
  width: 100%;
}

.conclusion-food {
  width: 100%;
  padding: 20px;
  color: black;
  /* transform: skewY(1deg); */
  position: relative;
}

.conclusion-food:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: skewy(var(--angle));
  transform-origin: 50% 0;
  outline: 1px solid transparent;
  backface-visibility: hidden;
  background: lightblue;
}

.diagonal-box {
  position: relative;
  padding: 10px;
  margin-top: -1px;
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
  background-image: linear-gradient(45deg, #654ea3, #eaafc8);
}

.content {
  margin-bottom: 200px;
  padding-bottom: 200px;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
  padding-top: 100px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

.section_2 {
  margin-bottom: 200px;
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
