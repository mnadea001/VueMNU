<template>
  <main>
    <div class="about dark:bg-white">
      <h1>Yoga</h1>
      <div v-for="yoga in yogas" :key="yoga.id" class="yoga-categories">
        <span>
          <h2>{{ yoga.category_name }}</h2>
          <p>{{ yoga.category_description }}</p>
          <ul>
            <li v-for="(pose, index) in yoga.poses" :key="index">{{ pose.pose_name }}</li>
          </ul>
        </span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

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
    .then((res) => res.json())
    .then((data: Yoga[]) => {
      yogas.value = data;
    })
    .catch((error) => {
      console.error('Error fetching yoga categories:', error);
    });
});
</script>

<style>

.about {
  display: flex;
  flex-direction: column !important;

}
main {
  width: 100vw;
}

.yoga-categories {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column !important;
  justify-content: center;
  align-items: center;
}

.yoga-categories span {
  margin-right: 20px;

}
</style>
