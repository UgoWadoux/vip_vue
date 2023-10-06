<script>

import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "Map",
  data(){
    return{
      center: [45.89860986946062, 6.12917203841142],
    }
  },
  methods: {
    setupLeafletMap: function (){
      const mapDiv = L.map("mapContainer").setView(this.center , 13);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
          {
            maxZoom: 18,
            id: "mapbox/streets-v11",
          },
      ).addTo(mapDiv);
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
}

</script>

<template>
<div id="container">
  <div id="mapContainer">
  </div>
</div>
</template>

<style scoped>

#mapContainer{
  height: 750px;
  width: 750px;
  display: flex;
  justify-content: center;
  margin-left: 1000px;
  top: -350px;
}

</style>