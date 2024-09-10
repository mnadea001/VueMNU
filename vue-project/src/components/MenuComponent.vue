<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { RouterLink } from 'vue-router'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['modal-close'])

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))
const handleClose = () => {
  emit('modal-close')
}
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header" class="text-3xl font-semibold text-center my-4">
            <div>
              <button
                class="text-lg text-black mb-4 rounded-full border px-4 py-1 hover:bg-black hover:text-white"
                @click.stop="emit('modal-close')"
              >
                close
              </button>
            </div>
          </slot>
        </div>
        <div class="modal-body">
          <div class="content">
            <slot name="content">
              <RouterLink @click.native="handleClose" to="/" class="nav-item">home</RouterLink>
              <RouterLink @click.native="handleClose" to="/index" class="nav-item"
                >index</RouterLink
              >
              <RouterLink @click.native="handleClose" to="/about" class="nav-item"
                >philosophy</RouterLink
              >
              <RouterLink @click.native="handleClose" to="/meditation" class="nav-item"
                >meditation</RouterLink
              >
              <RouterLink @click.native="handleClose" to="/food" class="nav-item">food</RouterLink>
              <RouterLink @click.native="handleClose" to="/yoga" class="nav-item"
                >asanas</RouterLink
              >
              <RouterLink @click.native="handleClose" to="/source" class="nav-item"
                >about</RouterLink
              >
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  font-size: 3em;
}

.nav-item {
  padding: 10px;
  font-size: 1.5rem;
  -webkit-transition: background-color 0.2s ease-out;
  -moz-transition: background-color 0.2s ease-out;
  -o-transition: background-color 0.2s ease-out;
  transition: background-color 0.2s ease-out;
  border-radius: 3px;
}

.nav-item:hover {
  background-color: black;
  color: rgb(255, 255, 255);
  transition: 0.5s;
  transition-timing-function: ease;
}



/* ####RESPONSIVE###  */
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

  .home-btn {
    display: none;
  }
  .hide-on-mobile {
    display: none;
  }
}
</style>
