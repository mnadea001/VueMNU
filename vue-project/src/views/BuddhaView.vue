<script setup lang="ts">
import { defineComponent } from "vue";
import {
  Renderer,
  Scene,
  Camera,
  PointLight,
  AmbientLight,
  GltfModel,
} from "troisjs";
import { useRouter } from "vue-router";

import backIcon from "../assets/back.svg";
defineComponent({
  components: {
    Renderer,
    Scene,
    Camera,
    PointLight,
    AmbientLight,
    GltfModel,
  }
});

const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>

<template>
      <div class="content-btn">
      <button
        @click="goBack"
        class="text-lg font-medium text-white-500 dark:text-black hover:underline mb-4 flex"
      >
        <img :src="backIcon" class="w-10 h-10 dark:color-white" /> Back
      </button>
    </div>
  <h2 class="text-center">SCROLL DOWN IN BLACK BOX TO SEE BUDDHA</h2>
  <h2 class="text-center">THEN YOU CAN DRAG AROUND BUDDHA</h2>

  <audio controls autoplay>
  <source src="../assets/music/om.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

    <Renderer ref="renderer" antialias orbit-ctrl resize="window">
      <Camera :position="{ x: 0, z: 20 }" />
      <Scene>
        <AmbientLight />
        <PointLight
          color="white"
          :position="{ x: 100, y: 1000, z: 40 }"
          :intensity="1"
        />
        <GltfModel src="/models/buddha/buddha.gltf" />
      </Scene>
    </Renderer>


</template>
<style scoped>
.content-btn {
  margin-left: 80px;
}
</style>
