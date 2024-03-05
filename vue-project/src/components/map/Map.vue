<template>
    <div :id="`${isFromDetail ? 'mapDetail' : 'map'}`">
      <l-map :zoom="props.zoom" :center="center">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker-cluster-group v-if="!props.event">
          <template v-for="event in props.events"
                    :key="event.id">
            <l-marker
              v-if="event._embedded.venues[0].location?.latitude && event._embedded.venues[0].location?.longitude"
              :icon="customMarker"
              :lat-lng="[event._embedded.venues[0].location?.latitude, event._embedded.venues[0].location?.longitude]"
              @click="$emit('onSelected', event)"
            >
              <l-popup :options="popUpOptions">
                <MapPopup :event="event" />
              </l-popup>
            </l-marker>
          </template>
        </l-marker-cluster-group>
        <l-marker
          v-else
          :icon="customMarker"
          :lat-lng="[props.event._embedded.venues[0].location?.latitude, props.event._embedded.venues[0].location?.longitude]">
          <l-popup :options="popUpOptions">
            <MapPopup :event="props.event" />
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </template>
  <script setup lang="ts">
  import L from 'leaflet'
  
  globalThis.L = L
  import 'leaflet/dist/leaflet.css'
  import { LMap, LMarker, LPopup, LTileLayer } from '@vue-leaflet/vue-leaflet'
import { LMarkerClusterGroup } from 'vue-leaflet-markercluster'
  import 'vue-leaflet-markercluster/dist/style.css'
  import type { Event } from '../../types/event'
  import MapPopup from '../map/MapPopup.vue'
  
  const props = defineProps(
    {
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
    }
  )
  
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
  
  </script>