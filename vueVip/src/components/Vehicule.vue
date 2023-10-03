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
  }
}
</script>

<template>
  <div class="carList">

    <h2>Vehicule : {{marque}} {{model}} {{couleur}}</h2>
    <img :src="src" alt="vehicule" >
    <p>Immatriculaion : {{immatriculation}}, Chevaux Fiscaux :{{nbCvFiscaux}}, Nombre de kilometres : {{nbKm}}</p>
    <p>Année {{annee}}, type : {{type}}</p>
    <p>Prix de reservation : {{prixReservation}}, Prix au kilometre : {{prixKm}}</p>

    <br>
  </div>
</template>

<style scoped>
.carList{
  display: flex;
  flex-direction: column;
  align-items: center;
}
img{
  width: 200px;
}
</style>