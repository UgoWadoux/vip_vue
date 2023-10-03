<script>
import Vehicule from "@/components/Vehicule.vue";
export default {
  name: "VehiculeList",
  components:{
    Vehicule,
  },
  methods:{
    async fetchVehicule(){
      const r= await fetch('http://192.168.1.202:8083/vehicules')
      if (r.ok===true){
         this.vehicules= await r.json()
      }
      throw new Error('Impossible de contacter le serveur mat')
    }
  },
  created() {
    this.fetchVehicule()
  },
  data(){
    return{
      vehicules:[]
    }
  }
}

</script>

<template>
<Vehicule v-for="vehicule in vehicules" :marque="vehicule.marque" :couleur="vehicule.couleur" :annee="vehicule.annee" :type="vehicule.type" :immatriculation="vehicule.immattriculationNb" :nb-cv-fiscaux="vehicule.cheveauxFiscNb"  :prix-reservation="vehicule.prixReservation" :nb-km="vehicule.nbKillometre" :prix-km="vehicule.prixKillometre" :src="vehicule.src" :model="vehicule.model">
</Vehicule>
</template>

<style scoped>

</style>