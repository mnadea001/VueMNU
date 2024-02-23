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
  },
  setup() {

    function onReady(e) {
      console.log("Render ready", e);
    }
    return { onReady };
  }
});
</script>

<template>
  <div class="container">
    <Renderer ref="renderer" antialias orbit-ctrl resize="window">
      <Camera :position="{ z: 8 }" />
      <Scene background="#fff">
        <AmbientLight />
        <PointLight
          color="white"
          :position="{ x: 100, y: 1000, z: 40 }"
          :intensity="1"
        />
        <GltfModel
          src="/models/crash-bandicoot/crash-bandicoot.gltf"
          @load="onReady"
        />
      </Scene>
    </Renderer>
  </div>
</template>
<style scoped></style>
