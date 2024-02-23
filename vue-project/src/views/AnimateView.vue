<script lang="ts">
import {
  PointLight,
  Box,
  Camera,
  Renderer,
  Scene,
  LambertMaterial,
} from 'troisjs';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  components: { Box, Camera, Renderer, Scene, PointLight, LambertMaterial },
  setup() {
    const renderer = ref(null);
    const box = ref(null);

    onMounted(() => {
      renderer?.value?.onBeforeRender(() => {
        box.value.mesh.rotation.x += 0.01;
    }); 
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
      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>