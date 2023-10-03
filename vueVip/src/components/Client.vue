<script>
export default {
  name: "ClientList",
  props:{
    id:Number,
    lastName: String,
    firstName:String,
    birthdate:Date,
    licenseId: String,
  }
}
</script>

<template>
  <p>Nom: {{lastName}}, Prénom: {{firstName}}</p>
  <p>Age: {{birthdate}}</p>
  <p>Numéro de permis: {{licenseId}}</p>
  <br>
</template>

<style scoped>
*{
  display: flex;
  justify-content: center;
}
</style>