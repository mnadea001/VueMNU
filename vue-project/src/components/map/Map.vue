<template>
  <div id="map">
    <l-map :zoom="props.zoom" :center="center">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker v-if="!props.event" v-for="event in props.events" :key="event.id">
        <l-popup :options="popUpOptions">
          <MapPopup :event="event" />
        </l-popup>
      </l-marker>
      <l-marker v-else :icon="customMarker" :lat-lng="[eventLatitude, eventLongitude]">
        <l-popup :options="popUpOptions">
          <MapPopup :event="props.event" />
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import L from 'leaflet'
import { defineProps } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LMarker, LPopup, LTileLayer } from '@vue-leaflet/vue-leaflet'
import { LMarkerClusterGroup } from 'vue-leaflet-markercluster'
import 'vue-leaflet-markercluster/dist/style.css'
import type { Event } from '../../types/event'
import MapPopup from '../map/MapPopup.vue'

const props = defineProps({
  event: {
    type: Object as () => Event | null,
    default: null
  },
  events: {
    type: Array as () => Event[] | null,
    default: null
  },
  zoom: {
    type: Number,
    default: 8
  },
  center: {
    type: Array as () => number[],
    default: () => [36.174465, -86.767960]
  },
  isFromDetail: {
    type: Boolean,
    default: false
  }
})

const MARKER_URL = 'https://www.svgrepo.com/show/425616/guitar-pick.svg'
const customMarker = L.icon({
  iconUrl: MARKER_URL,
  iconSize: [38, 38],
  shadowSize: [50, 64],
  iconAnchor: [22, 50],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
})

const popUpOptions = {
  maxWidth: 300,
  minWidth: 300,
  className: 'custom-popup',
  closeButton: false,
  autoPan: true,
  color: 'black'
}

const { event } = props
const eventLatitude = event?.place?.location?.latitude || 0
const eventLongitude = event?.place?.location?.longitude || 0
</script>

<style scoped>
#map {
  width: 600px;
  height:600px;
}
</style>