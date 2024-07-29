<script setup lang="ts">
import { defineComponent } from 'vue'
import { Renderer, Scene, Camera, PointLight, AmbientLight, GltfModel } from 'troisjs'
import mouseScroll from '../assets/mouseScroll.png'
import aroundImg from '../assets/aroundImg.svg'
import BackButton from '@/components/BackButton.vue'


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


</script>

<template>
  <main>
    <BackButton />
    <div class="box-docker">
      <div class="first-box">
        <h2 class="text-center text-black me-5">scroll down in the black box to see buddha</h2>
        <img :src="mouseScroll" class="w-10 h-10 ms-5 me-5" alt="" />
      </div>
      <div class="second-box">
        <h2 class="text-center text-black ms-5 me-5">then you can drag around buddha</h2>
        <img :src="aroundImg" class="w-10 h-10 ms-5 dark:color-white" alt="" />
      </div>
    </div>
    <div class="audio-box">
      <p class="text-center text-black me-5">start mantra</p>
      <audio controls class="audio">
        <source src="../assets/music/om.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>

    <Renderer ref="renderer" antialias orbit-ctrl resize="window">
      <Camera :position="{ x: 0, z: 20 }" />
      <Scene>
        <AmbientLight />
        <PointLight color="white" :position="{ x: 100, y: 1000, z: 40 }" :intensity="1" />
        <GltfModel src="/models/buddha/buddha.gltf" />
      </Scene>
    </Renderer>
    <br />
  </main>
</template>
<style scoped>
main {
  width: 100vw;
}
.audio-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgb(209, 242, 63);
  background: linear-gradient(90deg, rgba(209, 242, 63, 1) 0%, rgba(255, 220, 0, 1) 100%);
  border-radius: 10px;
  padding: 20px;
  margin: auto;
  width: 30%;
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

.audio {
  /* filter: saturate(70%);
     */
  width: 200px;
  background: transparent;
  height: 25px;
}
@media screen and (max-width: 768px) {
  .box-docker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .audio-box {
    width: 60%;
  }
}
</style>
