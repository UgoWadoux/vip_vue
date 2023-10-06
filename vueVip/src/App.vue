<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import VehiculeList from "@/views/VehiculeList.vue";
import Navbar from "./views/Navbar.vue";
import Footer from "./views/Footer.vue";
import Accueil from "./views/Accueil.vue";

</script>
<script>

</script>
<template>

  <header>
    <Navbar></Navbar>

    <br>

    <Accueil></Accueil>

    <VehiculeList></VehiculeList>

    <Footer></Footer>

  </header>

<router-view></router-view>

</template>

<style scoped>






</style>
