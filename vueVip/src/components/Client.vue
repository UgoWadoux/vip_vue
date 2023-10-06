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
  <div class="client">
    <p>Nom: {{lastName}} </p>
    <p>Prénom: {{firstName}}</p>
    <p>Age: {{birthdate}}</p>
    <p>Numéro de permis: {{licenseId}}</p>
    <br>
  </div>

</template>

<style scoped>
.client{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1%;
  width: 20%;
  background: #e3e3e3;
}
</style>