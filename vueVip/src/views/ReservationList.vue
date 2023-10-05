<script>
import Reservation from "@/components/Reservation.vue";

export default {
  name: "ReservationList",
  components: {
    Reservation,
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
    }
  },
  created() {
    this.fetchReservation()
  },
  data() {
    return {
      reservations: []
    }
  }
}
</script>

<template>
  <Reservation v-for="reservation in reservations" :id-vehicule="reservation.idVehicle"
               :id-customer="reservation.idCustomer" :start-date="reservation.startDate"
               :end-date="reservation.endDate" :price="reservation.price"></Reservation>
</template>

<style scoped>

</style>