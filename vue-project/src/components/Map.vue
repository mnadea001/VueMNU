<script setup lang="ts">
import leaflet from "leaflet";
import { onMounted, watchEffect } from "vue";
import { useGeolocation } from "@vueuse/core";

const { coords } = useGeolocation();

let map = leaflet.Map;

onMounted(() => {
  map = leaflet.map('map').setView([51.505, -0.09], 13);


  leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);
    leaflet.marker([51.505, -0.09]).addTo(map);

});

// watchEffect(() => {

// })

</script>
<template>
  <div id="map"></div>
</template>
<style scoped>
#map {
  width: 800px;
  height: 1000px;
}
</style>
