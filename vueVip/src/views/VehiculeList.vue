<script>
import Vehicule from "@/components/Vehicule.vue";

export default {
  name: "VehiculeList",
  components: {
    Vehicule,
  },
  computed: {
    vehiculesFiltres() {
      let vehiculeList = this.vehicules
      if (this.appliedFilters?.gammeFiltre) {
        console.log(vehiculeList)
        vehiculeList = vehiculeList.filter(vehicule => vehicule.type === this.gammeFiltre)
      }
      if (this.appliedFilters?.prixMin !== undefined && this.appliedFilters?.prixMax !== undefined) {
        console.log(this.appliedFilters?.prixMin)
        console.log(vehiculeList)
        vehiculeList = vehiculeList.filter(vehicule => vehicule.prixReservation >= this.prixMin && vehicule.prixReservation <= this.prixMax);
      }
      console.log(vehiculeList)
      return vehiculeList
    }
  },
  data() {
    return {
      vehicules: [],
      gammeFiltre: "",
      prixMin: null, //prix min
      prixMax: null, //prix max
      appliedFilters: null,
    }
  },
  methods: {
    applyFilters() {
      this.appliedFilters = {
        gammeFiltre: this.gammeFiltre,
        prixMin: this.prixMin,
        prixMax: this.prixMax
      }
    },
    async fetchVehicule() {
      try {


        const r = await fetch('http://192.168.1.202:8083/vehicules')
        if (r.ok === true) {
          this.vehicules = await r.json()
        }
      } catch (e) {
        throw new Error('Impossible de contacter le serveur mat')
      }
    }
  },
  created() {
    this.fetchVehicule()
  },

}

</script>

<template>

  <div>
    <div>
      <label for="gamme">Gamme :</label>
      <select id="gamme" v-model="gammeFiltre">
        <option value="">Toutes les gammes</option>
        <option value="utilitaire">Utilitaire</option>
        <option value="moto">Moto</option>
      </select>
    </div>
    <div>
      <label for="prixMin">Prix minimum :</label>
      <input type="number" id="prixMin" v-model="prixMin">
      <label for="prixMin">Prix maximum :</label>
      <input type="number" id="prixMax" v-model="prixMax">
    </div>
    <button @click="applyFilters">Appliquer les filtres</button>
  </div>
  <div class="listVehicule">
    <Vehicule
        v-for="vehicule in vehiculesFiltres"
        :key="vehicule.immatriculation"
        :marque="vehicule.marque"
        :couleur="vehicule.couleur"
        :immatriculation="vehicule.immattriculationNb"
        :nb-cv-fiscaux="vehicule.cheveauxFiscNb"
        :prix-reservation="vehicule.prixReservation"
        :nb-km="vehicule.nbKillometre"
        :prix-km="vehicule.prixKillometre"
        :src="vehicule.src"
        :model="vehicule.model"
        :id="vehicule.id"
    ></Vehicule>
  </div>
</template>

<style scoped>
.listVehicule {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>