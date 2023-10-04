<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import VehiculeList from "@/views/VehiculeList.vue";
import Navbar from "./views/Navbar.vue";
import Footer from "./views/Footer.vue";

</script>
<script>

</script>
<template>

  <header>
    <Navbar>
    </Navbar>
    <VehiculeList></VehiculeList>
    <br>
    <Footer></Footer>

  </header>
<router-view></router-view>
</template>

<style scoped>






</style>
