<script>
import DriverInfo from "../components/DriverInfo.vue";
import {computed} from "vue";
export default {
  name: "header",
  components: {DriverInfo}
}



</script>

<template>
  <div class="navbar">
    <div class="logoG"><router-link to="/">
      <img class="logo" src="../../img/VIP-Projet-Non-Perdu/Logo/logo.png">
      <img class="logoTexte" src="../../img/VIP-Projet-Non-Perdu/Logo/logoTexteDeux.png">
    </router-link>
    </div>
    <div class="iconesD">
<!--      <div class="icone">-->
<!--        <img class="logoM" src="../../img/VIP-Projet-Non-Perdu/IconesVoitures-Facebook-ect/Frame.png">-->
<!--        <p id="texteM">| Moto</p>-->
<!--      </div>-->
      <div class="icone">
        <img class="logoU" src="../../img/VIP-Projet-Non-Perdu/IconesVoitures-Facebook-ect/local_shipping_FILL0_wght400_GRAD0_opsz48%202.svg">
<!--        <p id="textU">| Utilitaire</p>-->
        <router-link to="/reservation" id="textU">| Reservations </router-link>
      </div>
      <div class="icone">
        <img class="logoV" src="../../img/VIP-Projet-Non-Perdu/IconesVoitures-Facebook-ect/directions_car_FILL0_wght400_GRAD0_opsz48%201-1.svg">
<!--        <p id="texteV">| Voiture</p>-->
        <router-link to="/clients" id="texteV">| Clients</router-link>
      </div>
      <div class="icone">
        <img class="logoP" src="../../img/VIP-Projet-Non-Perdu/IconesVoitures-Facebook-ect/shopping_cart_FILL0_wght400_GRAD0_opsz48%201.svg">
        <p id="texteP">| Panier</p>
      </div>
      <div class="icone">
        <DriverInfo></DriverInfo>
      </div>
    </div>
  </div>
  <div id="accueil">
    <img class="logoIG" src="../../img/VIP-Projet-Non-Perdu/ImageVoiture/photo-accueil.png">
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cambay:ital,wght@0,400;0,700;1,400;1,700&display=swap');

/*Start Navbar*/
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 80px;
  margin-right: 80px;
}

.iconesD {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icone {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
}

#texteM, #textU, #texteV, #texteP, #texteC {
  font-size: 18px;
  font-weight: bold;
  font-family: 'Cambay', sans-serif;
  color: #70aecc;
  margin-left: 10px;
  text-decoration: none;
}
#accueil{

}

.logoIG{
  width: 100%;
}
/*End Navbar*/
</style>
