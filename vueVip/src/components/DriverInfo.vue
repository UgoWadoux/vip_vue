<template>
  <div>
    <div class="click">
      <img @click="showPopup" class="logo" src="../../img/VIP-Projet-Non-Perdu/IconesVoitures-Facebook-ect/person_FILL0_wght400_GRAD0_opsz48%201.svg">
      <button class="inscription" @click="showPopup">| Se connecter</button>
    </div>
    <div v-if="isPopupVisible" class="overlay" @click="closePopup">
      <div class="popup" @click.stop>
        <img @click="closePopup" class="croix" src="../../img/VIP-Projet-Non-Perdu/Icones2/close_FILL0_wght400_GRAD0_opsz48%201.png">
        <h2 class="info">Informations du conducteur</h2>
        <form @submit.prevent="submitDriverInfo">
          <a class="close" href="#" @click="closePopup">&times;</a>
          <div class="content">
            <div>
              <label for="lastName">Nom : </label>
              <input type="text" id="lastName" v-model="driver.lastName" required>
            </div>
            <div>
              <label for="firstName">Prénom : </label>
              <input type="text" id="firstName" v-model="driver.firstName" required>
            </div>
            <div>
              <label for="birthdate">Date de naissance : </label>
              <input type="date" id="birthdate" v-model="driver.birthdate" required>
            </div>
            <div>
              <label for="licenseId">Numéros de permis : </label>
              <input type="text" id="licenseId" v-model="driver.licenseId" required>
            </div>
            <br>
            <button class="enregistrer" type="submit">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DriverInfo",
  data() {
    return {
      isPopupVisible: false,
      driver: {
        lastName: "",
        firstName: "",
        birthdate: "",
        licenseId: ""
      },
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
    async submitDriverInfo() {
      try {
        const response = await fetch("http://192.168.1.229:8082/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.driver)
        });
        if (response.ok) {
          this.driver = {
            lastName: "",
            firstName: "",
            birthdate: "",
            licenseId: "",
          };
          this.closePopup(); // Fermer le popup après l'enregistrement
        } else {
          console.error("Erreur lors de l'enregistrement des informations du client")
        }
      } catch (error) {
        console.error("Erreur lors de la requête HTTP", error);
      }
    },
  },
};
</script>

<style scoped>
/* Styles CSS pour la fenêtre contextuelle */
.overlay {
  /* Styles pour l'arrière-plan gris translucide */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Assure que la fenêtre contextuelle est au-dessus de tout le reste */
  cursor: pointer; /* Ajout d'un curseur de pointeur pour indiquer que la zone est cliquable */
}

.popup {
  /* Styles pour la fenêtre contextuelle elle-même */
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  font-size: 18px;
  font-weight: bold;
  font-family: 'Cambay', sans-serif;
  color: #70aecc;
  margin-left: 10px;
}

.close {
  /* Styles pour le bouton de fermeture */
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #000;
}

.inscription{
  background: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Cambay', sans-serif;
  color: #70aecc;
  margin-left: 10px;
}

.click{
  display: flex;
  align-items: center;
}

.enregistrer{
  display: flex;
  align-items: center;
  color: #F28585;
  border: none;
  background-color: transparent;
  font-size: 18px;
  transition: all 0.2s ease;

}

.info{
  display: flex;
  align-items: center;
  color: #F28585;
}

.croix{
  float: right;
  justify-content: right;
  margin-left: 30px;
  padding-top: 15px;
}
.croix:hover{
  transform: scale(1.5);
}
.enregistrer:hover{
  transform: scale(1.3);
}
</style>
