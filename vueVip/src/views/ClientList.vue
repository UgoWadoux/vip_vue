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
  <div class="customers">
    <Client v-for="client in clients" :last-name="client.lastName" :first-name="client.firstName" :birthdate="client.birthdate" :license-id="client.licenseId"></Client>
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
.customers{
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