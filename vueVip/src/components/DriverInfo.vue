<template>
  <div>
    <h2>Informations du conducteur</h2>
    <form @submit.prevent="submitDriverInfo">
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
    </form>
  </div>
</template>


<script>
export default {
  name: "DriverInfo",
  data() {
    return {
      driver: {
        lastName: "",
        firstName: "",
        birthdate: "",
        licenseId: ""
      },
    };
  },
  methods: {
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
        } else {
          console.error("Erreur lord de l'enregistrement des informations du client")
        }
      } catch (error) {
        console.error("Erreur lors de la requete HTTP", error);
      }
    },
  },
};
</script>