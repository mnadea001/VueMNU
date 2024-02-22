<template>
  <main class="dark:bg-white">
    <h1 class="text-3xl font-semibold text-center my-4">YOGA IS ART</h1>
    <div class="content">
      <v-typical
          class="blink"
          :steps="[
            'DISCOVER',
            1000,
            'DISCOVER DIFFERENT',
            500,
            'DISCOVER DIFFERENT YOGA STYLES !',
            1000,
          ]"
          :loop="Infinity"
          :wrapper="'h2'"
        ></v-typical>
    <img :src="yogaImageSrc" class="w-80 h-80 rounded-full mt-4" />
  </div>
    <div class="container">
      <div class="category-card my-4">
        <RouterLink
          v-for="(yoga, index) in yogas"
          :key="index"
          :to="`/category/${yoga.id}`"
        >
          <CategoryCard :categoryName="yoga.category_name" />
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import CategoryCard from "../components/CategoryCard.vue";
import yogaImg from "../assets/yoga.gif";
import VTypical from "vue-typical";
import { defineComponent } from "vue";

defineComponent({
  components: {
    VTypical,
  },
});
const yogaImageSrc: string = yogaImg;
interface Pose {
  pose_name: string;
}

interface Yoga {
  id: number;
  category_name: string;
  category_description: string;
  poses: Pose[];
}

const yogas = ref<Yoga[]>([]);

onMounted(() => {
  fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
    .then((res: Yoga[]) => res.json() as Promise<{ yogas: Yoga[] }>)
    .then((data: Yoga[]) => {
      // console.log(data);
      yogas.value = data;
    })
    .catch((error: Yoga[]) => {
      // console.error('Error fetching yoga categories:', error);
    });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;

}

h1 {
  font-family: "Anton", sans-serif;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}
.container {
  width: 80%;
  margin-left: 50px;
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center;
justify-content: center; */
  /* flex-direction: row; */
  /* align-items: center;
  justify-content: center; */
}
.category-card {
  display: flex;

  flex-direction: row;
  /* align-items: center;
justify-content: center; */
}
</style>
