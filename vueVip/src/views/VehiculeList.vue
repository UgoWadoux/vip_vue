<script>
import Vehicule from "@/components/Vehicule.vue";
import DriverInfo from "@/components/DriverInfo.vue";
import {ref} from "vue";

export default {
  name: "VehiculeList",
  components: {
    DriverInfo,
    Vehicule,
  },
  computed: {
    vehiculesFiltres() {
      let vehiculeList = this.vehicules
      if (this.appliedFilters?.gammeFiltre) {
        vehiculeList = vehiculeList.filter(vehicule => vehicule.type === this.gammeFiltre)
      }
      if (this.appliedFilters?.prixMin !== undefined && this.appliedFilters?.prixMax !== undefined) {
        vehiculeList = vehiculeList.filter(vehicule => vehicule.prixReservation >= this.prixMin && vehicule.prixReservation <= this.prixMax);
      }
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
      showDriverInfo: true,
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
    toggleDriverInfo() {
      this.showDriverInfo = !this.showDriverInfo
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
      <div class="pageVehicule">
      <div class="filtre">
        <div class="navigation">
          <div class="labelline">Rechercher un vehicule : </div>
          <input class="barre" type="text" required>
        </div>
        <div class="gammeVehicule">
          <p class="gammeDeGamme">Gamme : </p>
          <select id="gamme" v-model="gammeFiltre">
            <option value="">Selectionné</option>
            <option value="">Toutes les gammes</option>
            <option value="utilitaire">Utilitaire</option>
            <option value="moto">Moto</option>
          </select>
        </div>
        <div class="Price">
          <label for="prixMin">Prix : <br></label>
          <div class="inputBox">
            <input type="number" v-model="prixMin" required="required" class="prix">
            <span>Min</span>
            <label for="prixMin"><br><br></label>
          </div>
          <div class="inputBox">
            <input type="number" v-model="prixMax" required="required" class="prix">
            <span>Max</span>
          </div>
        </div>
        <div>
          <button @click="applyFilters" class="appliquerBtn">Appliquer les filtres</button>
        </div>
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
            :id="vehicule.id"></Vehicule>
    </div>
        <div>
          <DriverInfo v-if="showDriverInfo"/>
        </div>

      </div>
    </div>
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

.gammeVehicule{
  margin-top: -18px;
}

.pageVehicule{
  width: 96%;
  height: 2000px;
  background: #f6f4f4;
  border: 30px solid white;
  font-weight: normal;
  font-family: 'Cambay', sans-serif;
  font-size: 14px;
}

.filtre{
  display: flex;
  justify-content: space-evenly;
  background: #e3e3e3;
  padding-top: 50px;
  padding-bottom: 70px;
}

.appliquerBtn{
  background: #f28585;
  border: 2px solid #b05959;
  box-shadow: 0 0 5px #b05959;
  transition: all 0.2s ease;
}
.appliquerBtn:hover{
  box-shadow: 0 0 5px #b05959, 0 0 6px #b05959, 0 0 5px #b05959, 0 0 5px #b05959, 0 0 40px #B05959FF;
}

.appliquerBtn:active{
  transform: scale(0.96);
}


.inputBox{
  position: relative;
  width: 150px;
}


.inputBox input{
  width: 100%;
  outline: none;
  color: #70aecc;
  font-size: 1.3em;
  text-decoration-color: #1ce11c;
  background: #ffffff;
  border: 1px solid #70aecc;
}


.inputBox span{
  position: absolute;
  left: 0;
  padding: -10px;
  pointer-events: none;
  font-size: 1em;
  color: #F28585;
  text-transform: uppercase;
}


.inputBox input:valid ~ span,
.inputBox input:focus ~ span{
  color: #70aecc;
  transform: translateX(10px) translateY(-3px);
  font-size: 0.65em;
  padding: 0 5px;
  background: #e3e3e3;
  border-left: 1px solid green;
}


.barre{
  background-color: #ffffff;
  border: 1px solid black;
  font-size: 1.5em;
  border-radius: 50px;
}


#gamme{
  font-weight: normal;
  font-family: 'Cambay', sans-serif;
  font-size: 15px;
  background-color: #ffffff;
  border: 1px solid #000000;
}


.labelline{
  font-weight: normal;
  font-family: 'Cambay', sans-serif;
  font-size: 17px;
  margin-left: 14px;
}

.gammeDeGamme{
  font-weight: normal;
  font-family: 'Cambay', sans-serif;
  font-size: 17px;
  margin: 0;
  padding-top: 15px;
}

</style>