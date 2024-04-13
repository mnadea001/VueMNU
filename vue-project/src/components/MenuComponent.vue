<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { RouterLink } from "vue-router";

import chillImageSrc from '../assets/pray.gif'
const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null);
onClickOutside(target, () => emit("modal-close"));
const handleClose = () => {
  emit("modal-close");
};
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header" class="text-3xl font-semibold text-center my-4">
            <div>
              <button class="close-btn" @click.stop="emit('modal-close')">close</button>
            </div>
          </slot>
        </div>
        <div class="modal-body">
          <div class="content">
            <slot name="content">
            <RouterLink  @click.native="handleClose" to="/" class="nav-item">Home</RouterLink>
            <RouterLink @click.native="handleClose" to="/index" class="nav-item">Index</RouterLink>
            <RouterLink @click.native="handleClose" to="/about" class="nav-item">Philosophy</RouterLink>
            <RouterLink @click.native="handleClose" to="/meditation" class="nav-item">Meditation</RouterLink>
            <RouterLink @click.native="handleClose" to="/food" class="nav-item">Food</RouterLink>
            <RouterLink @click.native="handleClose" to="/yoga" class="nav-item">Asanas</RouterLink>
            <RouterLink @click.native="handleClose" to="/source" class="nav-item">About</RouterLink>
          </slot>
          </div>
  
          <div class="image-menu">
            <img :src="chillImageSrc" class="w-80 h-80 rounded-full mt-4" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.734);
}
.modal-container {
  width: 100%;
  height: 100vh;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  color: black;
}
.content {
  display: flex;
  flex-direction: row;
}
.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.btn-home-start {
  padding: 30px;
  border: 1px solid black;
  text-align: center;
  margin-left: 20px;
  font-family: "Anton", sans-serif;
  font-size: 3em;
}

.nav-item {
  padding: 10px;
  font-family: "Anton", sans-serif;
  font-size: 1.5rem;
}

.close-btn {
  font-family: 'Caprasimo', sans-serif;
  font-size: 1.5em;
  padding-left: 10px;
  padding-right: 10px;
}
@media screen and (max-width: 768px) {
  .modal-body {
    flex-direction: column;
    align-items: flex-start;
  }
  .content {
    flex-direction: column;
  }

  .image-menu { 
    display: none;
  }
}
</style>
