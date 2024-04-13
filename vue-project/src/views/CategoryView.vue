<template>
  <main class="dark:bg-white">
    <div >
      <div class="content-btn">
      <button
          @click="goBack"
          class="hover:underline mb-4 flex"
        >
          <img :src="arrowIcon" class="w-10 h-10" /> back
        </button>
        </div>
      <div
        v-if="yoga"
        class="p-6 m-2 max-w-4xl mx-auto rounded-xl category-detail"
      >

        <h1 class="text-center">{{ yoga.category_name }}</h1>
        <div class="mt-4">
          <div class="text-center ">{{ yoga.category_description }}</div>
        </div>
        <div class="content">
          <img :src="childPoseImageSrc" class="h-80 rounded-full mt-4" />
        </div>
        <p class="my-4 scroll-text">Scroll vertically to see all poses: </p>
        <div class="pose-content-box my-4">
        <div class="pose-content">
          <PoseCard
            v-for="(pose, index) in yoga.poses"
            :key="index"
            :pose="pose"
          />
        </div>
      </div>
      </div>
      <p v-else class="text-center">Loading...</p>
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PoseCard from "../components/PoseCard.vue";
import backIcon from "../assets/back.svg";
import whiteBack from "../assets/white-back.png";
import { useDark } from "@vueuse/core";
import childPoseImg from "../assets/childpose.gif";
const isDark = useDark();
const arrowIcon = computed(() => {
  return isDark.value ? backIcon : whiteBack;
});

const childPoseImageSrc: string = childPoseImg;

interface Pose {
  english_name: string;
  id: number;
}

interface Yoga {
  id: number;
  category_name: string;
  category_description: string;
  poses: Pose[];
}

const yoga = ref<Yoga | null>(null);
const error = ref<string | null>(null);
const route = useRoute();
const router = useRouter();

function goBack() {
  router.go(-1);
}

const fetchCategoryData = () => {
  fetch(
    `https://yoga-api-nzy4.onrender.com/v1/categories?id=${route.params.id}`
  )
    .then((res: Response) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json() as Promise<Yoga>;
    })
    .then((data: Yoga) => {
      yoga.value = data;
    })
    .catch((err: Error) => {
      error.value = `Fetch error: ${err.message}`;
    });
};

onMounted(() => {
  fetchCategoryData();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.scroll-text {
  font-family: "Caprasimo", sans-serif;
}
h1 {
  font-family: "Anton", sans-serif;
  font-size: 2rem;
}
main {
  width: 100vw;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}


.pose-content-box{
  width: 100%;
  margin: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  object-fit: contain;
  scroll-snap-type: x mandatory;
}
.pose-content {
  display: flex;
}

.content-btn {
  margin-left: 80px;
}
@media screen and (max-width: 768px) {
  .content-btn {
  margin-left: 10px;
}
}
</style>
