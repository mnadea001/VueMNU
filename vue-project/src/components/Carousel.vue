<template>
  <div class="content-box">
    <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
      <SplideSlide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <div class="div-img">
            <img :src="slide.image" :alt="'Slide ' + (index + 1)" />
          </div>
          <div class="slide-text">
            <h2 class="text-2xl text-center my-4">{{ slide.title }}</h2>
            <p class="font-regular text-center my-4">{{ slide.description }}</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
  </template>
  
  <script setup lang="ts">
  import '@splidejs/vue-splide/css'
  import slide1 from '@/assets/images/slide1.jpg'
  import slide2 from '@/assets/images/slide2.jpg'
  import slide3 from '@/assets/images/slide3.jpg'
  import slide4 from '@/assets/images/slide4.jpg'
  import { defineComponent } from 'vue'
  // @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide'


  const slides = [
    {
      image: slide1,
      title: "Ahimsa (Non-violence)",
      description: "Ahimsa, or non-violence, is one of the fundamental principles of yoga philosophy. It extends beyond refraining from physical harm and includes compassion and kindness toward all living beings. By choosing a vegetarian diet, yogis avoid participating in the suffering and exploitation of animals for food, aligning their actions with the principle of ahimsa."
    },
    {
      image: slide2,
      title: "Sattvic Diet for Mental Clarity",
      description: "Yoga aims to achieve a state of mental clarity and inner peace. According to yogic teachings, different foods have distinct energetic qualities that can influence one's state of mind. A sattvic diet, which is primarily vegetarian and includes fresh fruits, vegetables, grains, nuts, and dairy products, is believed to promote purity, clarity, and harmony within the body and mind. Consuming foods that are light, pure, and easily digestible supports the practice of yoga by fostering a calm and focused state of being."
    },
    {
      image: slide3,
      title: "Enhanced Pranic Energy",
      description: "Yogic philosophy recognizes the existence of prana, the life force energy that sustains all living beings. Vegetarian foods are believed to be rich in prana, making them conducive to maintaining and enhancing the flow of vital energy within the body. By consuming plant-based foods that are vibrant and full of life force energy, yogis aim to nourish not only their physical bodies but also their subtle energy systems, supporting overall health and vitality."
    },
    {
      image: slide4,
      title: "Environmental and Ethical Considerations",
      description: "Beyond personal health benefits, vegetarianism reflects an awareness of the interconnectedness of all living beings and a commitment to environmental sustainability. The livestock industry is a significant contributor to environmental degradation, including deforestation, water pollution, and greenhouse gas emissions. By choosing plant-based foods, yogis minimize their ecological footprint and contribute to a more compassionate and sustainable world."
    }
  ]
  
  defineComponent({
  components: { Splide, SplideSlide },
  setup() {
    return { slides }
  }
})
  </script>
  

  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');


.content-box {
  width: 80%;
  margin: auto;
}
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
