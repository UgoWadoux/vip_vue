<template>
  <div>
    <button @click="showPopup">Se connecter :</button>

    <div v-if="isPopupVisible" class="overlay" @click="closePopup">
      <div class="popup" @click.stop>
        <h2>Informations du conducteur</h2>
        <form @submit.prevent="submitDriverInfo">
          <a class="close" href="#" @click="closePopup">&times;</a>
          <div class="content">
            <div>
              <label for="lastName">Nom :</label>
              <input type="text" id="lastName" v-model="driver.lastName" required>
            </div>
            <div>
              <label for="firstName">Prénom :</label>
              <input type="text" id="firstName" v-model="driver.firstName" required>
            </div>
            <div>
              <label for="birthdate">Date de naissance :</label>
              <input type="date" id="birthdate" v-model="driver.birthdate" required>
            </div>
            <div>
              <label for="licenseId">Numéros de permis</label>
              <input type="text" id="licenseId" v-model="driver.licenseId" required>
            </div>
            <button type="submit">Enregistrer</button>
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
</style>
