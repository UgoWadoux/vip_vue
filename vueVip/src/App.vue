<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import VehiculeList from "@/views/VehiculeList.vue";

</script>
<script>

</script>
<template>
  <header>
<VehiculeList></VehiculeList>
    <br>


  </header>
<router-view></router-view>
</template>

<style scoped>






</style>
