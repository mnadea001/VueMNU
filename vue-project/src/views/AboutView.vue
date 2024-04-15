<template>
  <main>
    <BackButton/>
    <div class="dark:bg-white main-content">
      <div class="content">
        <h1 class="text-3xl text-center my-4">Philosophy</h1>
        <span class="text-center content-span">
          <p class="text-xl text-center">
            Yoga is an ancient practice that originated in India thousands of years ago. It is a
            holistic system that encompasses physical postures (asanas), breath control (pranayama),
            meditation, and ethical principles aimed at achieving harmony between mind, body, and
            spirit.
          </p>
        </span>
        <div class="container">
          <ul id="cards">
            <li class="card" id="card2">
              <div class="card-body">
                <h2 class="text-black mb-5 text-xl">Origin</h2>
                <p class="text-black text-center">
                  The origins of yoga can be traced back to ancient texts known as the Vedas,
                  particularly the Rigveda, which dates back over 5,000 years. Yoga evolved over
                  centuries, with the systematic compilation of yoga teachings found in the Yoga
                  Sutras of Patanjali, written around 400 CE. Over time, various schools of yoga
                  emerged, each emphasizing different aspects of the practice.
                </p>
              </div>
            </li>
            <li class="card" id="card3">
              <div class="card-body">
                <h2 class="text-black mb-5 text-xl">Definition</h2>
                <p class="text-black text-center">
                  Yoga, derived from the Sanskrit word "yuj," means to unite or join. At its core,
                  yoga is about the union of individual consciousness with the universal
                  consciousness. It involves the integration of physical, mental, and spiritual
                  practices to achieve a state of balance and inner peace.
                </p>
              </div>
            </li>
            <li class="card" id="card4">
              <div class="card-body">
                <h2 class="text-black mb-5 text-xl">Benefits</h2>
                <p class="text-black text-center">
                  The practice of yoga offers a myriad of benefits for both the body and mind.
                  Physically, yoga improves flexibility, strength, and balance. It helps to
                  alleviate tension in the muscles and promotes overall relaxation. Mentally, yoga
                  cultivates mindfulness and reduces stress, anxiety, and depression. It enhances
                  concentration, clarity of thought, and emotional well-being. Additionally, regular
                  yoga practice can boost immune function, improve sleep quality, and contribute to
                  overall health and longevity.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <span class="text-center content-span">
          <p class="text-xl">
            In summary, yoga is a profound and transformative practice that promotes physical
            health, mental clarity, and spiritual growth. Its rich history, diverse teachings, and
            numerous benefits make it a valuable tool for holistic well-being in today's fast-paced
            world.
          </p>
        </span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'



</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

main {
  width: 100vw;
  height: 100%;
}

.main-content {
  justify-content: center;
  display: flex;
}

h1 {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.5em;
  color: #d1f23f;
  line-height: 1.5;
}

h2 {
  font-family: 'Caprasimo', sans-serif;
  font-size: 2em;
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
}

.container {
  margin: 0 auto;
  margin-bottom: 50px;
}

#cards {
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(var(--cards), var(--cardHeight));
  gap: var(--cardMargin);
  padding-bottom: calc(var(--cards) * var(--cardTopPadding));
  margin-bottom: var(--cardMargin);
}

#card1 {
  --index: 1;
}
#card2 {
  --index: 2;
}
#card3 {
  --index: 3;
}
#card4 {
  --index: 4;
}

.card {
  position: sticky;
  top: 0;
  padding-top: calc(var(--index) * var(--cardTopPadding));
}

.card-body {
  margin: 50px;

  background: rgb(209, 242, 63);
  background: linear-gradient(90deg, rgba(209, 242, 63, 1) 0%, rgba(255, 220, 0, 1) 100%);
  box-sizing: border-box;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
  height: 550px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
}
:root {
  --cards: 4;
  --cardHeight: 87vh;
  --cardTopPadding: 1.5em;
  --cardMargin: 4vw;
}

@media (max-width: 768px) {
  .content {
    width: 90%; /* Adjust width for smaller screens */
    margin: auto;
  }

  .content-span p {
    padding-left: 20px;
    padding-right: 20px;
  }

  .card-body {
    margin: 20px;
    height: auto; /* Adjust height for smaller screens */
  }
}

@media (max-width: 480px) {
  .content-span p {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
