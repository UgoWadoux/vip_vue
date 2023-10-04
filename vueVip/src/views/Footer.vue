<script>
export default {
  name: "Footer"
}
</script>

<template>
<div id="rectangle">
  <div class="service">
    <h2>Service Client</h2>
    <p>Facture</p>
    <p>Constat d'incident</p>
    <p>Politique de confidentialité</p>
  </div>
  <div class="produits">
    <h2>Produits</h2>
    <p>Location</p>
    <p>Transport</p>
    <p>Location longue durée</p>
  </div>
  <div class="contact">
    <h2>Nous contacter</h2>
    <p>contact@veryimportantpet.com</p>
    <img class="logoV" src="../../img/VIP-Projet-Non-Perdu/IconesVoitures-Facebook-ect/icons8-instagram(1)%201.svg">
    <img class="logoV" src="../../img/VIP-Projet-Non-Perdu/IconesVoitures-Facebook-ect/icons8-facebook%201.svg">
    <img class="logoV" src="../../img/VIP-Projet-Non-Perdu/IconesVoitures-Facebook-ect/icons8-twitterx%201.svg">
  </div>
</div>
</template>

<style scoped>

#rectangle {
  width: 100%;
  height: 340px;
  background: #70aecc;
  columns: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 35px;
}

p{
  color: white;
  font-weight: normal;
  font-family: 'Cambay', sans-serif;
  font-size: 20px;
}

h2{
  color: white;
  font-weight: bold;
  font-family: 'Cambay', sans-serif;
  font-size: 32px;
}



</style>