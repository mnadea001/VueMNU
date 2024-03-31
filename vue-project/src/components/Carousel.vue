<template>
  <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
    <SplideSlide>
      <div class="slide-content">
        <div class="div-img">
          <img :src="slide1" alt="Sample 1" />
        </div>
        <div class="slide-text">
          <h2 class="text-2xl font-bold text-center my-4">Ahimsa (Non-violence)</h2>
          <p class="font-regular text-center my-4">
            Ahimsa, or non-violence, is one of the fundamental principles of yoga philosophy. It
            extends beyond refraining from physical harm and includes compassion and kindness toward
            all living beings. By choosing a vegetarian diet, yogis avoid participating in the
            suffering and exploitation of animals for food, aligning their actions with the
            principle of ahimsa.
          </p>
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="slide-content">
        <div class="slide-text">
          <h2 class="text-2xl font-bold text-center my-4">Sattvic Diet for Mental Clarity</h2>
          <p class="font-regular text-center my-4">
            Yoga aims to achieve a state of mental clarity and inner peace. According to yogic
            teachings, different foods have distinct energetic qualities that can influence one's
            state of mind. A sattvic diet, which is primarily vegetarian and includes fresh fruits,
            vegetables, grains, nuts, and dairy products, is believed to promote purity, clarity,
            and harmony within the body and mind. Consuming foods that are light, pure, and easily
            digestible supports the practice of yoga by fostering a calm and focused state of being.
          </p>
        </div>
        <div class="div-img">
          <img :src="slide2" alt="Sample 1" />
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="slide-content">
        <div class="div-img">
            <img :src="slide3" alt="Sample 1" />
        </div>
        <div class="slide-text">
          <h2 class="text-2xl font-bold text-center my-4">Enhanced Pranic Energy</h2>
          <p class="font-regular text-center my-4">
            Yogic philosophy recognizes the existence of prana, the life force energy that sustains
            all living beings. Vegetarian foods are believed to be rich in prana, making them
            conducive to maintaining and enhancing the flow of vital energy within the body. By
            consuming plant-based foods that are vibrant and full of life force energy, yogis aim to
            nourish not only their physical bodies but also their subtle energy systems, supporting
            overall health and vitality.
          </p>
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="slide-content">
        <div class="slide-text">
          <h2 class="text-2xl font-bold text-center my-4">
            Environmental and Ethical Considerations
          </h2>
          <p class="font-regular text-center my-4">
            Beyond personal health benefits, vegetarianism reflects an awareness of the
            interconnectedness of all living beings and a commitment to environmental
            sustainability. The livestock industry is a significant contributor to environmental
            degradation, including deforestation, water pollution, and greenhouse gas emissions. By
            choosing plant-based foods, yogis minimize their ecological footprint and contribute to
            a more compassionate and sustainable world.
          </p>
        </div>
        <div class="div-img">
        <img :src="slide4" alt="Sample 1" /></div>
      </div>
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { defineComponent } from 'vue'
import '@splidejs/vue-splide/css'
import slide1 from '../assets/images/slide1.jpg'
import slide2 from '../assets/images/slide2.jpg'
import slide3 from '../assets/images/slide3.jpg'
import slide4 from '../assets/images/slide4.jpg'

defineComponent({
  components: { Splide, SplideSlide }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

h2 {
  font-family: 'Caprasimo', sans-serif;
}
.slide-content {
  display: flex;
  margin: 50px;
}
.slide-text {
  width: 50%;
  margin: 50px;
}
.div-img {
  width: 50%;
  margin: 50px;
}
img {
  max-width: 500px;
  max-height: 400px;
}

@media screen and (max-width: 768px) {
    .slide-content {
  display: flex;
flex-direction: column;
}

.div-img {
display: none;
}
}
</style>
