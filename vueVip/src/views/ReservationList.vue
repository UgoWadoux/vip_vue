<script>
import Reservation from "@/components/Reservation.vue";
import Vehicule from "@/components/Vehicule.vue";

export default {
  name: "ReservationList",
  components: {
    Reservation,
    Vehicule,
  },
  methods: {
    async fetchReservation() {
      try {
        const r = await fetch('http://192.168.1.240:8084/reservation')
        if (r.ok === true) {
          this.reservations = await r.json()
        }
      } catch (e) {
        throw new Error('Impossible de contacter le serveur ugo')
      }
    },
    test(value){
      console.log('test', value)
    },

  },
  created() {
    this.fetchReservation()
  },
  data() {
    return {
      reservations: [],
    }
  },

}
</script>

<template>
  <h2>Liste des réservations</h2>
  <div class="reservation">

    <Reservation v-for="reservation in reservations" :id-vehicule="reservation.idVehicle"
                 :id-customer="reservation.idCustomer" :start-date="reservation.startDate"
                 :end-date="reservation.endDate" :price="reservation.price"></Reservation>
  </div>
</template>

<style scoped>
h2{
  display: flex;
  justify-content: center;
  font-size: 48px;
  font-weight: bold;
  font-family: 'Cambay', sans-serif;
  color: #F28585;
  margin-left: 10px;
}
.reservation{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  font-family: 'Cambay', sans-serif;
  color: #70aecc;
  margin-left: 10px;
  text-decoration: none;
  width: 96%;
  height: 2000px;
  background: #f6f4f4;
  border: 30px solid white;
}
</style>