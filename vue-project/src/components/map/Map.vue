<template>
  <div id="map">
    <l-map :zoom="props.zoom" :center="center">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker-cluster-group v-if="!props.event">
        <template v-for="event in props.events" :key="event.id">
          <l-marker
            v-if="event.place.location?.latitude && event.place.location?.longitude"
            :icon="customMarker"
            :lat-lng="[event.place.location?.latitude, event.place.location?.longitude]"
            @click="$emit('onSelected', event)"
          >
          <l-popup :options="popUpOptions">
              <MapPopup :event="event" />
            </l-popup>
          </l-marker>
        </template>
      </l-marker-cluster-group>
      <l-marker v-else :lat-lng="[props.event.place.location?.latitude, props.event.place.location?.longitude]" :icon="customMarker" >
        <l-popup :options="popUpOptions">
          <MapPopup :event="props.event" />
        </l-popup>
      </l-marker>
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
    default: () => [36.174465, -86.76796]
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
// const { place } = props.event || {};
// const eventLatitude = place?.location?.latitude || 'Latitude undefined';
// const eventLongitude = place?.location?.longitude || 'Longitude undefined';

const MARKER_URL = 'https://www.svgrepo.com/show/508306/marker.svg'
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
  height: 800px;
}
</style>
