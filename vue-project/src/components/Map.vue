<script setup lang="ts">
import leaflet from "leaflet";
import { onMounted } from "vue";
import { userMarker } from "@/stores/mapStore";
import { useGeolocation } from "@vueuse/core";

const { coords } = useGeolocation();

let map = leaflet.Map;
const userGeoMarker = leaflet.Marker;

onMounted(() => {
  map = leaflet.map('map').setView([51.505, -0.09], 13);
//   map = leaflet
//     .map("map")
//     .setView([userMarker.value.latitude, userMarker.value.longitude], 13);

  leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);
});


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
