<script setup lang="ts">
import { defineComponent } from 'vue'
import { Renderer, Scene, Camera, PointLight, AmbientLight, GltfModel } from 'troisjs'
import { useRouter } from 'vue-router'
import whiteBack from '../assets/white-back.png'
import { useDark } from '@vueuse/core'
import { computed } from 'vue'
import backIcon from '../assets/back.svg'
import mouseScroll from '../assets/mouseScroll.png'
import aroundImg from '../assets/aroundImg.svg'

const isDark = useDark()
const arrowIcon = computed(() => {
  return isDark.value ? backIcon : whiteBack
})
defineComponent({
  components: {
    Renderer,
    Scene,
    Camera,
    PointLight,
    AmbientLight,
    GltfModel
  }
})

const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="content-btn">
    <button @click="goBack" class="text-white-500 dark:text-black hover:underline mb-4 flex">
      <img :src="arrowIcon" class="w-10 h-10 dark:color-white" /> back
    </button>
  </div>
  <div class="box-docker">
    <div class="first-box">
      <h2 class="text-center text-black me-5">scroll down the black box to see buddha</h2>
      <img :src="mouseScroll" class="w-10 h-10 ms-5 me-5" alt="" />
    </div>
    <div class="second-box">
      <h2 class="text-center text-black ms-5 me-5">then you can drag around buddha</h2>
      <img :src="aroundImg" class="w-10 h-10 ms-5 dark:color-white" alt="" />
    </div>
  </div>

  <!-- <audio controls autoplay>
  <source src="../assets/music/om.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio> -->

  <Renderer ref="renderer" antialias orbit-ctrl resize="window">
    <Camera :position="{ x: 0, z: 20 }" />
    <Scene>
      <AmbientLight />
      <PointLight color="white" :position="{ x: 100, y: 1000, z: 40 }" :intensity="1" />
      <GltfModel src="/models/buddha/buddha.gltf" />
    </Scene>
  </Renderer>
  <br />
</template>
<style scoped>
.content-btn {
  margin-left: 80px;
}

.box-docker {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.first-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgb(209, 242, 63);
  background: linear-gradient(90deg, rgba(209, 242, 63, 1) 0%, rgba(255, 220, 0, 1) 100%);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
}
.second-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: rgb(209, 242, 63);
  background: linear-gradient(90deg, rgba(209, 242, 63, 1) 0%, rgba(255, 220, 0, 1) 100%);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
}

@media screen and (max-width: 768px) {
  .box-docker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
