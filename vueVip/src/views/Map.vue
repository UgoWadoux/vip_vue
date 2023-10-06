<template>
  <div id="container">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "Map",
  data() {
    return {
      center: [46.603354, 1.888334], // Coordonnées pour le centre de la France
      cities: [
        {
          name: "Lille",
          location: [50.629250, 3.057256],
          domain: "VIP_Officiel_Lille@gmail.com",
          number: "06 54 12 98 22",
          address: "123 Route de Roubaix , Rue de Lille",
        },
        {
          name: "Paris",
          location: [48.856613, 2.352222],
          domain: "VIP_Officiel_Paris@gmail.com",
          number: "07 41 98 74 44",
          address: "456 Prise de la Bastille , Rue de Paris",
        },
        {
          name: "Lyon",
          location: [45.75, 4.85],
          domain: "VIP_Officiel_Lyon@gmail.com",
          number: "06 51 98 74 77",
          address: "789 Pont de la cailles , Rue de Lyon",
        },
        {
          name: "Nantes",
          location: [47.218372, -1.553621],
          domain: "VIP_Officiel_Nantes@gmail.com",
          number: "06 98 57 93 91",
          address: "987 Route de Ninho , Rue de Nantes",
        },
        {
          name: "Marseille",
          location: [43.296482, 5.369780],
          domain: "VIP_Officiel_Marseille@gmail.com",
          number: "07 43 36 87 44",
          address: "246 Route des Baumettes , Rue de Marseille",
        },
      ],
    };
  },
  methods: {
    setupLeafletMap: function () {
      const mapDiv = L.map("mapContainer").setView(this.center, 6);
      L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
          {
            maxZoom: 18,
            id: "mapbox/streets-v11",
          }
      ).addTo(mapDiv);

      // Ajouter des marqueurs pour chaque ville
      this.cities.forEach(city => {
        const marker = L.marker(city.location).addTo(mapDiv);
        marker.bindPopup(
            `<b>Ville:</b> ${city.name}<br><b>Nom de domaine:</b> ${city.domain}<br><b>Numéro:</b> ${city.number}<br><b>Adresse:</b> ${city.address}`
        );
      });
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  height: 750px;
  width: 750px;
  display: flex;
  justify-content: center;
  margin-left: 1000px;
  top: -310px;
}
</style>
