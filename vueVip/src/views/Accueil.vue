<template>
  <div>
    <h1>Bienvenue chez VIP</h1>
    <div class="haut">
      <div class="gauche">
        <img class="imageG" src="../../img/VIP-Projet-Non-Perdu/ImageVoiture/pexels-stephan-louis-12642402%201.png">
      </div>
      <div class="droite">
        <img class="imageD" src="../../img/VIP-Projet-Non-Perdu/vagueColor/Ellipse%206.png">
        <p class="premierPara" v-for="(line, index) in formattedText" :key="index">{{ line }}</p>
        <br>
        <br>
        <p class="premierPara" v-for="(line, index) in formattedTexts" :key="index">{{ line }}</p>
      </div>
    </div>
    <div class="bas">
      <div class="gaucheBas">
        <img class="imageGB" src="../../img/VIP-Projet-Non-Perdu/vagueColor/Ellipse%205.svg">
        <h2 class="ou">Ou nous trouvez ?</h2>
        <p class="ou">Nous avons ouvert plusieurs entreprise en
          France et bientôt a l’international !
          <br><br>
          Pour profiter de nos services , vous pouvez
          nousretrouvez a Lille ,<br><br> Paris , Lyon ,
          Nantes et Marseille !</p>
      </div>
    </div>
    <div class="droiteBas">
      <Map></Map>
    </div>
  </div>
<VehiculeList></VehiculeList>
</template>





<script setup>

/*texte du haut */

import { ref } from 'vue';
import Map from "./Map.vue";
import ReservationList from "@/views/ReservationList.vue";
import VehiculeList from "@/views/VehiculeList.vue";
const text = ref("Depuis 2004, nous sommes les leaders du transport d’animaux.$ Forts de nos 19 ans d’expérience dans le domaine, vos animaux ne seront jamais mieux traités que chez nous ! Nos équipements assurent sécurité et confort pendant le trajet.$ Vous trouverez tous types de véhicules, de la Rolls-Royce au van aménagé pour vos Road Trips.$ Vous trouverez tout pour transporter vos animaux!");
const formattedText = ref(text.value.split('$'));

const texte = ref("Nous mettons également a votre dispositiondes chauffeurs qualifiés (diplomés WAF +) et soucieux $du bien être de vos animaux, faire transporter vos animaux avec VIP c’est assurer leur confort et leurs sécurité !")
const formattedTexts = ref(texte.value.split('$'));

/*Fin du texte de haut */

/* Debut texte du haut */



</script>




<style scoped>

/*Uniquement la premiere partie */

h1 {
  padding-bottom: 150px;
  text-align: center;
  color: #F28585;
  font-size: 48px;
  font-weight: bold;
  font-family: 'Cambay', sans-serif;
}
.haut {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 80px;
  align-items: center;
  padding-bottom: 100px;
}
.droite {
  position: relative;
}
.imageD {
  width: 100%;
  z-index: -1;
  position: absolute;
  top: -360px;
}
.premierPara {
  color: white;
  font-weight: normal;
  font-family: 'Cambay', sans-serif;
  font-size: 22px;
  margin-right: 80px;
  text-align: center;
  vertical-align: center;
}

/*FIn de la premiere partie */

/*Uniquement deuxieme partie */

.imageGB{
  padding-top: 260px;
  z-index: -1;
  position: absolute;
  top: -150px;
}
.gaucheBas{
  position: relative;
}
.bas {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.ou{
  color: white;
  font-weight: normal;
  font-family: 'Cambay', sans-serif;
  font-size: 22px;
  margin-right: 80px;
  text-align: center;
  vertical-align: center;
  margin-left: 50px;
  padding-top: 200px;
}

.droiteBas{
  margin-top: -230px;
}


</style>
