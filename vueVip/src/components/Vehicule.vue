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
      display:'displayed',
      vehiculeID:''
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
      this.$emit('idVehicule',this.id )

    },
  },
}
</script>

<template>
  <div class="">
    <div class="carList">
      <div class="fond">
        <h2> {{marque}} {{model}} {{couleur}}</h2>
        <img :src="src" alt="vehicule" >
        <button class="voirPlus" @click="isClicked">Information :</button>
        <div :class="display">
          <div class="info" >
            <p >Immatriculaion : {{immatriculation}}, Chevaux Fiscaux :{{nbCvFiscaux}}</p>
            <p>Nombre de kilometres : {{nbKm}}</p>
            <p >Année {{annee}}, type : {{type}}</p>
            <p >Prix de reservation : {{prixReservation}}, Prix au kilometre : {{prixKm}} €</p>
            <button class="reserve" @click="toReserve">Reserve ce vehicule</button>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>

.fond{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 310px;
  margin-top: 50px;
  margin-bottom: 50px;
  background: #e3e3e3;
  transition: all 0.5s ease;
}
.fond:active{
  transform: scale(0.96);
  transition-duration: 2s;
}

.carList{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 500px;
  padding-top: 50px;
}

.info{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 190px;
  border-top: transparent;
  background: #e3e3e3;
}

img{
  width: 200px;
}
.displayed{
  display: none;
}

.voirPlus{
  margin-top: 10px;
  transition: all 0.2s ease;
  background: #70aecc;
}
.voirPlus:active{
  transform: scale(0.96);
}

.reserve{
  transition: all 0.2s ease;
  border-top: transparent;
  background: #F28585;
  font-size: 18px;
  border-radius: 10px;
}

.reserve:active{
  transform: scale(0.96);
}

</style>