<script>
export default {
  name: "Vehicule",
  props:{
    marque: String,
    couleur: String,
    immatriculation: String,
    nbCvFiscaux:Number,
    prixReservation:Number,
    prixKm: Number,
    annee:Date,
    nbKm:Number,
    type:String,
    src: String,
    model:String,
    id: Number,
  },
  data(){
    return{
      clicked:false,
      display:'displayed'
    }
  },
  methods:{
    isClicked(){
      if (this.clicked ===false){
        this.display = ''
        this.clicked=true
      }else {
        this.display ='displayed'
        this.clicked=false
      }
    },
    toReserve(){
      console.log(this.id)
    }
  }
}
</script>

<template>
  <div class="carList">
    <h2> {{marque}} {{model}} {{couleur}}</h2>
    <img :src="src" alt="vehicule" >
    <button @click="isClicked">Voir plus</button>
    <div :class="display">
      <p >Immatriculaion : {{immatriculation}}, Chevaux Fiscaux :{{nbCvFiscaux}}, Nombre de kilometres : {{nbKm}}</p>
      <p >Année {{annee}}, type : {{type}}</p>
      <p >Prix de reservation : {{prixReservation}}, Prix au kilometre : {{prixKm}}</p>
      <button @click="toReserve">Reserve ce vehicule</button>
    </div>
  </div>
</template>

<style scoped>
.carList{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 400px;
}
img{
  width: 200px;
}
.displayed{
  display: none;
}

</style>