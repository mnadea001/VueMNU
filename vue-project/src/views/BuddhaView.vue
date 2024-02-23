<script lang="ts">
import { defineComponent } from "vue";
import {
  Renderer,
  Scene,
  Camera,
  PointLight,
  AmbientLight,
  GltfModel,
} from "troisjs";

export default defineComponent({
  components: {
    Renderer,
    Scene,
    Camera,
    PointLight,
    AmbientLight,
    GltfModel,
  }
});
</script>

<template>
  <h2 class="text-center">SCROLL DOWN IN BLACK BOX TO SEE BUDDHA</h2>
  <div class="container">
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
  </div>
  <h2 class="text-center">YOU CAN DRAG AROUND BUDDHA</h2>
  <h2>SCROLL DOWN</h2>
  <h2>SCROLL DOWN</h2>
  <h2>SCROLL DOWN</h2>
  <h2>SCROLL DOWN</h2>

  <h2>SCROLL DOWN</h2>
</template>
<style scoped></style>
