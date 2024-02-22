<script lang="ts">
import {
  PointLight,
  Box,
  Camera,
  Renderer,
  Scene,
  LambertMaterial,
} from 'troisjs';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Box, Camera, Renderer, Scene, PointLight, LambertMaterial },
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