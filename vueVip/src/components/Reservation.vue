<script>
import Vehicule from "@/components/Vehicule.vue";

export default {
  name: "Reservation",
  components: {Vehicule},
  props:{
    idVehicule : Number,
    idCustomer : Number,
    startDate : Number,
    endDate : Number,
    price : Number,
  }
}
</script>

<template>
  <div class="reserve">
    <p>Id du vehicule : {{idVehicule}}</p>
    <p>Id client : {{idCustomer}}</p>
    <p>Date de debut : {{startDate}}</p>
    <p>Date de fin : {{endDate}}</p>
    <p>Prix : {{price}} €</p>
  </div>
</template>

<style scoped>
.reserve{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1%;
  background: #e3e3e3;
}
</style>