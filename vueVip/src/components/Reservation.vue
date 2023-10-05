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
<p >id du vehicule : {{idVehicule}}</p>
  <p>id client : {{idCustomer}}</p>
  <p>date de debut : {{startDate}}</p>
  <p>date de fin : {{endDate}}</p>
  <p>prix : {{price}}</p>
</template>

<style scoped>

</style>