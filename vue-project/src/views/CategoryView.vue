<template>
  <main class="dark:bg-white">
    <div>
      <div
        v-if="yoga"
        class="p-6 m-2 max-w-4xl mx-auto rounded-xl shadow-md category-detail"
      >
        <button
          @click="goBack"
          class="text-lg font-medium hover:underline mb-4 flex"
        >
          <img :src="backIcon" class="w-10 h-10" /> Back
        </button>
        <h1 class="text-gray-500 text-center">{{ yoga.category_name }}</h1>
        <div class="mt-4">
          <div class="text-lg font-medium text-center ">Description:</div>
          <div class="text-gray-500 text-center ">{{ yoga.category_description }}</div>
        </div>
        <div class="content">
          <img :src="childPoseImageSrc" class="h-80 rounded-full mt-4" />
        </div>
        <p class="my-4">Scroll vertically to see all poses: </p>
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
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import PoseCard from "../components/PoseCard.vue";
import backIcon from "../assets/back.svg";
import childPoseImg from "../assets/childpose.gif";


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

.category-detail {
  margin-bottom: 50px;
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
</style>
