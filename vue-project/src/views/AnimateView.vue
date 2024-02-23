<script lang="ts">
import {
  PointLight,
  Box,
  Camera,
  Renderer,
  Scene,
  Sphere,
  BasicMaterial,
  Texture,
} from "troisjs";
import { defineComponent, ref, onMounted, reactive } from "vue";

export default defineComponent({
  components: {
    Box,
    Camera,
    Renderer,
    Scene,
    PointLight,
    Sphere,
    BasicMaterial,
    Texture,
  },
  setup() {
    const renderer = ref(null);
    const box = ref(null);
    const sphere = ref(null);
    const boxRotation = ref(0.01);
    onMounted(() => {
      renderer?.value?.onBeforeRender(() => {
        box.value.mesh.rotation.x += boxRotation.value;
        sphere.value.mesh.rotation.y += 0.001;
      });
    });
    const spherePosition = reactive({
      spherePosX: -10,
      spherePosY: -10,
      spherePosZ: -10,
    });

    function valueChanged(values) {
      Object.assign(spherePosition, values);
      boxRotation.value = values.boxRotation;
    }
    return { renderer, box, sphere, valueChanged, spherePosition };
  },
});
</script>

<template>
  <div class="space">
  <Renderer resize="window" orbit-ctrl ref="renderer" alpha="0">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <BasicMaterial>
          <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
        </BasicMaterial>
      </Box>
      <Sphere
        ref="sphere"
        :position="{
          x: spherePosition.spherePosX,
          y: spherePosition.spherePosY,
          z: spherePosition.spherePosZ,
        }"
        :radius="10"
      >
        <BasicMaterial>
          <Texture src="/splash-bg.jpg" refraction :refraction-ratio="0.95" />
        </BasicMaterial>
      </Sphere>
    </Scene>
  </Renderer>
</div>
</template>
<style scoped>
.space {
  background-image: url('/space-dust.png')
}
</style>