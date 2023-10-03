<script>
import Client from "@/components/Client.vue";
export default {
  name: "ClientList",
  components:{
    Client,
  },
  methods:{
    async fetchClient(){
      const r = await fetch('http://192.168.1.229:8082/customers')
      if (r.ok ===true){
        this.clients =await r.json()
      }
      throw new Error('Impossible de contacter le serveur Kylian')
    }
  },
  created() {
    this.fetchClient()
  },
  data(){
    return{
      clients:[]
    }
  }
}
</script>

<template>
  <h2>Liste des client</h2>
  <Client v-for="client in clients" :last-name="client.lastName" :first-name="client.firstName" :birthdate="client.birthdate" :license-id="client.licenseId"></Client>
</template>

<style scoped>

</style>