<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null);
onClickOutside(target, () => emit("modal-close"));
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header" class="text-3xl font-semibold text-center my-4">
            <div>
              <button @click.stop="emit('modal-close')">FERMER</button>
            </div>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="content">
            <RouterLink to="/about" class="btn-home-start font-bold mt-3"
              >PHILOSOPHY</RouterLink
            >
            <RouterLink to="/quote" class="btn-home-start font-bold mt-3"
              >INSPIRATION</RouterLink
            >
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.734);
}
.modal-container {
  width: 50%;
  height: 40vh;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  color: black;
}
</style>
