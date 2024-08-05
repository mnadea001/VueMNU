<template>
  <main class="dark:bg-white">
    <div class="diagonal-box-container">
      <div class="diagonal-box bg-one">
        <div class="content">
          <h1 class="text-3xl text-center mt-4">About</h1>
          <div class="main-content">
            <div class="content-img">
              <h2 class="text-xl mb-4">To create this app, I used:</h2>
              <ul>
                <li>- Vue.js 3 with TypeScript</li>
                <li>- APIs: themealdb, yoga-api from alexcumplido</li>
                <li>- Librairies: vue-typical, tailwindcss, vueuse</li>
                <li>- Threejs, Troisjs</li>
                <li>- GIFs from Tenor and Giphy</li>
                <li>- Images from Unsplash</li>
                <li>- 3D model on SketchFab</li>
              </ul>
              <br />
              <p class="text-center">Developed By Mathilde NADEAU - August 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>
<style scoped>
main {
  max-width: 100vw;
  height: 100%;
}

h1 {
  font-family: 'Caprasimo', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.5em;
  color: #d1f23f;
  line-height: 1.5;
}

.content-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
  align-items: center;
  margin-bottom: 50px;
}

.diagonal-box-container {
  display: flex;
  justify-content: center;
}
.diagonal-box {
  position: relative;
  padding: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100vw;
}

.diagonal-box:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: skewy(1deg);
  transform-origin: 50% 0;
  outline: 1px solid transparent;
  backface-visibility: hidden;
}

.bg-one:before {
  background-image: linear-gradient(45deg, #636fa4, #e8cbc0);
}

.content {
  margin-bottom: 200px;
  padding-bottom: 200px;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
  color: black;
}
</style>
