<template>
  <main class="dark:bg-white">
    <div>
      <BackButton />
      <div class="diagonal-box-container">
        <div class="diagonal-box bg-one">
          <div class="content">
            <div v-if="yoga">
              <h1>{{ yoga.category_name }}</h1>

              <div class="flex mt-4">
                <div class="flex-1 w-70 yoga-img">
                  <img :src="childPoseImageSrc" class="h-80 rounded mt-4" alt="Yoga Image" />
                </div>
                <div class="flex-1 w-30 p-5">
                  <p>{{ yoga.category_description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="yoga" class="p-6 m-2 max-w-4xl mx-auto rounded-xl category-detail">
        <p class="my-4">Scroll vertically to see all poses:</p>
        <div class="pose-content-box my-4">
          <div class="pose-content">
            <PoseCard v-for="(pose, index) in yoga.poses" :key="index" :pose="pose" />
          </div>
        </div>
      </div>
      <p v-else class="text-center">Loading...</p>
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PoseCard from '../components/PoseCard.vue'
import childPoseImg from '../assets/childpose.gif'
import BackButton from '@/components/BackButton.vue'

const childPoseImageSrc: string = childPoseImg

interface Pose {
  english_name: string
  id: number
}

interface Yoga {
  id: number
  category_name: string
  category_description: string
  poses: Pose[]
}

const yoga = ref<Yoga | null>(null)
const error = ref<string | null>(null)
const route = useRoute()

const fetchCategoryData = () => {
  fetch(`https://yoga-api-nzy4.onrender.com/v1/categories?id=${route.params.id}`)
    .then((res: Response) => {
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json() as Promise<Yoga>
    })
    .then((data: Yoga) => {
      yoga.value = data
    })
    .catch((err: Error) => {
      error.value = `Fetch error: ${err.message}`
    })
}

onMounted(() => {
  fetchCategoryData()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.diagonal-box-container {
  display: flex;
  justify-content: center;
}
.diagonal-box {
  position: relative;
  padding: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100vw;
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
}

.bg-one:before {
  background-image: linear-gradient(45deg, #636fa4, #e8cbc0);
}

.content {
  margin-bottom: 200px;
  padding-bottom: 200px;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
  color: black;
}

.content p {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 200;
  font-size: 1.2em;
  color: rgb(63, 63, 63);
  padding: 50px 80px;
}
h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.5em;
  color: #d1f23f;
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

.pose-content-box {
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

@media screen and (max-width: 768px) {
  .yoga-img {
    display: none;
  }
  h1 {
    font-size: 2.5em !important;
    margin-left: 10px;
  }
}
</style>
