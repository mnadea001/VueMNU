<template>
  <main>
    <div class="title-container">
      <button
          @click="goBack"
          class="text-lg font-medium text-black-500 hover:underline mb-4 flex"
        >
        <img :src="backIcon" class="w-10 h-10" /> Back
        </button>
      <h1 class="text-3xl font-semibold text-center my-4">VEGGIE IS GOOD</h1>
      <h4 class="text-3xl font-semibold text-center my-4">
        Vegetarianism holds a significant place in the lifestyle and philosophy
        of yoga, serving as more than just a dietary choice but rather a
        cornerstone of spiritual and holistic living. Yogis, practitioners of
        yoga, often adhere to a vegetarian diet for various reasons, all of
        which align with the core principles of yoga practice.
      </h4>
    </div>
    <div class="container-card my-4">
      <RouterLink
        v-for="(meal, index) in meals"
        :key="index"
        :to="`/meal/${meal.idMeal}`"
      >
        <MealCard :img="meal.strMealThumb" :strMeal="meal.strMeal" />
      </RouterLink>
    </div>
    <div class="title-container">
      <h2 class="text-3xl font-bold text-center my-4">Ahimsa (Non-violence)</h2>
      <h4 class="text-2xl font-regular text-center my-4">
        Ahimsa, or non-violence, is one of the fundamental principles of yoga
        philosophy. It extends beyond refraining from physical harm and includes
        compassion and kindness toward all living beings. By choosing a
        vegetarian diet, yogis avoid participating in the suffering and
        exploitation of animals for food, aligning their actions with the
        principle of ahimsa.
      </h4>
    </div>
    <div class="title-container">
      <h2 class="text-3xl font-bold text-center my-4">
        Sattvic Diet for Mental Clarity
      </h2>
      <h4 class="text-2xl font-regular text-center my-4">
        Yoga aims to achieve a state of mental clarity and inner peace.
        According to yogic teachings, different foods have distinct energetic
        qualities that can influence one's state of mind. A sattvic diet, which
        is primarily vegetarian and includes fresh fruits, vegetables, grains,
        nuts, and dairy products, is believed to promote purity, clarity, and
        harmony within the body and mind. Consuming foods that are light, pure,
        and easily digestible supports the practice of yoga by fostering a calm
        and focused state of being.
      </h4>
    </div>
    <div class="title-container">
      <h2 class="text-3xl font-bold text-center my-4">
        Enhanced Pranic Energy
      </h2>
      <h4 class="text-2xl font-regular text-center my-4">
        Yogic philosophy recognizes the existence of prana, the life force
        energy that sustains all living beings. Vegetarian foods are believed to
        be rich in prana, making them conducive to maintaining and enhancing the
        flow of vital energy within the body. By consuming plant-based foods
        that are vibrant and full of life force energy, yogis aim to nourish not
        only their physical bodies but also their subtle energy systems,
        supporting overall health and vitality.
      </h4>
    </div>
    <div class="title-container">
      <h2 class="text-3xl font-bold text-center my-4">
        Environmental and Ethical Considerations
      </h2>
      <h4 class="text-2xl font-regular text-center my-4">
        Beyond personal health benefits, vegetarianism reflects an awareness of
        the interconnectedness of all living beings and a commitment to
        environmental sustainability. The livestock industry is a significant
        contributor to environmental degradation, including deforestation, water
        pollution, and greenhouse gas emissions. By choosing plant-based foods,
        yogis minimize their ecological footprint and contribute to a more
        compassionate and sustainable world.
      </h4>
      <br>
      <hr/>
      <br>
      <br>
      <h2 class="text-3xl font-semibold text-center mt-4">
      In conclusion, vegetarian food holds immense importance for yogis, serving
      as a practical manifestation of yogic principles such as ahimsa, promoting
      mental clarity and inner peace, enhancing pranic energy, and aligning with
      ethical and environmental values. By embracing a vegetarian diet, yogis
      not only nourish their bodies but also cultivate compassion, mindfulness,
      and harmony in their lives and the world around them.
    </h2>
    </div>

  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import MealCard from "../components/MealCard.vue";
import backIcon from "../assets/back.svg";
interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const router = useRouter();

function goBack() {
  router.go(-1);
}

const meals = ref<Meal[]>([]);

const fetchMealData = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
    .then((res) => res.json() as Promise<{ meals: Meal[] }>)
    .then((data) => {
      console.log(data);
      meals.value = data.meals;
    })
    .catch((error: Error) => {
      console.error("Error fetching meals:", error);
    });
};

onMounted(() => {
  fetchMealData();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;
  height: 100%;
}
h1 {
  font-family: "Anton", sans-serif;
}

.title-container {
  margin: 120px;
}
.container-card {
  width: 100%;
  margin: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  object-fit: contain;
  scroll-snap-type: x mandatory;
}
</style>
