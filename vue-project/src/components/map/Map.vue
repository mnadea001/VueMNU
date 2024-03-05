<template>
  <div id="map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker :lat-lng="[latitude, longitude]" />
    </l-map>
  </div>
</template>

<script setup lang="ts">
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { LMap, LMarker, LPopup, LTileLayer } from '@vue-leaflet/vue-leaflet'
import { LMarkerClusterGroup } from 'vue-leaflet-markercluster'
import 'vue-leaflet-markercluster/dist/style.css'
import type { Event } from '../../types/event'
import MapPopup from '../map/MapPopup.vue'

import { defineProps } from 'vue'

const props = defineProps({
  zoom: {
    type: Number,
    default: 8
  },
  center: {
    type: Array as () => number[],
    default: () => [36.174465, -86.767960]
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
})
const popUpOptions = {
  maxWidth: 300,
  minWidth: 300,
  className: 'custom-popup',
  closeButton: false,
  autoPan: true,
  color: 'black'
}

const MARKER_URL = 'https://www.svgrepo.com/show/425616/guitar-pick.svg'
const customMarker = L.icon({
  iconUrl: MARKER_URL,
  iconSize: [38, 38],
  shadowSize: [50, 64],
  iconAnchor: [22, 50],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
})

</script>

<style scoped>
#map {
  width: 600px;
  height:600px;
}
</style>
