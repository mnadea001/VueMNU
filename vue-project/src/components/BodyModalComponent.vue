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
              <button class="close-btn" @click.stop="emit('modal-close')">close</button>
            </div>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="content">
            <RouterLink to="/food" class="btn-home-start mt-3"
              >FOOD</RouterLink
            >
            <RouterLink to="/yoga" class="btn-home-start mt-3"
              >ASANAS</RouterLink
            >
          </slot>
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
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.734);
}
.modal-container {
  position: relative;
  width: 50%;
  height: 40vh;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  color: black;
}
.modal-body {
display: flex;
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
.close-btn {
  font-family: 'Caprasimo', sans-serif;
  font-size: 1.5em;
  padding-left: 10px;
  padding-right: 10px;
}
@media screen and (max-width: 768px) {
  .modal-container {
    width: 80%;
    height: 80vh;
    margin: 150px auto 20px;
  }
  .modal-body {
    flex-direction: column;
    align-items: center;
  }
  .btn-home-start {
    margin: 10px 0;
  }
}
</style>
