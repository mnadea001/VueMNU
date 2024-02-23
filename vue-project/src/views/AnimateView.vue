<script lang="ts">
import {
  PointLight,
  Box,
  Camera,
  Renderer,
  Scene,
  LambertMaterial,
} from 'troisjs';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { Box, Camera, Renderer, Scene, PointLight, LambertMaterial },
  setup() {
    const renderer = ref(null);
    const box = ref(null);

    renderer?.value?.onBeforeRender(() => {
        box.value.mesh.rotation.x += 0.01;
    }) 
    return { renderer, box };
  }

});


</script>

<template>
  <Renderer resize="window" orbit-ctrl ref="renderer">
    <Camera :position="{ z: 10 }" />
    <Scene background="#4DBA87">
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>