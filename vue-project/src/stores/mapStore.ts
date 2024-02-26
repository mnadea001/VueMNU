import { useLocalStorage } from "@vueuse/core";

type Marker = {
    latitude: number;
    longitude: number;
}

export const userMarker = useLocalStorage<Marker>("USER_MARKER", {
    latitude: 44.837789,
    longitude: -0.57918,
});

export const nearbyMarkers = useLocalStorage<Marker[]>("NEARBY_MARKERS",[]);