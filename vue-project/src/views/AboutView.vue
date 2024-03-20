<template>
  <main>
    <div class="dark:bg-white main-content">
      <div class="content-btn">
        <button
          @click="goBack"
          class="text-lg font-medium text-white-500 dark:text-black hover:underline mb-4 flex"
        >
          <img :src="arrowIcon" class="w-10 h-10 dark:color-white" /> Back
        </button>
      </div>
      <div class="content">
        <h1 class="text-3xl text-center my-4">Philosophy</h1>

        <div class="content-img">
          <img :src="chillImageSrc" class="w-80 h-80 rounded-full mt-4" />
        </div>

        <h2 class="text-xl text-center my-4">
          Introduction to Yoga
        </h2>
        <span class="text-center content-span">
          <p>
            Yoga is an ancient practice that originated in India thousands of
            years ago. It is a holistic system that encompasses physical
            postures (asanas), breath control (pranayama), meditation, and
            ethical principles aimed at achieving harmony between mind, body,
            and spirit.
          </p>
        </span>

        <h2 class="text-xl text-center my-4">Origin</h2>
        <span class="text-center content-span">
          <p>
            The origins of yoga can be traced back to ancient texts known as the
            Vedas, particularly the Rigveda, which dates back over 5,000 years.
            Yoga evolved over centuries, with the systematic compilation of yoga
            teachings found in the Yoga Sutras of Patanjali, written around 400
            CE. Over time, various schools of yoga emerged, each emphasizing
            different aspects of the practice.
          </p>
        </span>
        <h2 class="text-xl text-center my-4">Definition</h2>
        <span class="text-center content-span">
          <p>
            Yoga, derived from the Sanskrit word "yuj," means to unite or join.
            At its core, yoga is about the union of individual consciousness
            with the universal consciousness. It involves the integration of
            physical, mental, and spiritual practices to achieve a state of
            balance and inner peace.
          </p>
        </span>
        <h2 class="text-xl text-center my-4">Benefits</h2>
        <span class="text-center content-span">
          <p>
            The practice of yoga offers a myriad of benefits for both the body
            and mind. Physically, yoga improves flexibility, strength, and
            balance. It helps to alleviate tension in the muscles and promotes
            overall relaxation. Mentally, yoga cultivates mindfulness and
            reduces stress, anxiety, and depression. It enhances concentration,
            clarity of thought, and emotional well-being. Additionally, regular
            yoga practice can boost immune function, improve sleep quality, and
            contribute to overall health and longevity.
          </p>
        </span>
        <span class="text-center content-span">
          <p class="text-xl">
            In summary, yoga is a profound and transformative practice that
            promotes physical health, mental clarity, and spiritual growth. Its
            rich history, diverse teachings, and numerous benefits make it a
            valuable tool for holistic well-being in today's fast-paced world.
          </p>
        </span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import chillImageSrc from "../assets/pray.gif";
import backIcon from "../assets/back.svg";
import { useRouter } from "vue-router";
import whiteBack from "../assets/white-back.png";
import { useDark } from "@vueuse/core";

const isDark = useDark();
const arrowIcon = computed(() => {
  return isDark.value ? backIcon : whiteBack;
});
const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;
  height: 100%;

}

.main-content {
  justify-content: center;
  display: flex;
}

h1,
h2 {
  font-family: "Anton", sans-serif;
}


.content-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}
.content {
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 70%;
}

.content-span p {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
}
</style>
