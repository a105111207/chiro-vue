<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup>
import Home from "@/views/Home.vue";
import { initializeNavigation } from "@/style.js";

initializeNavigation();
</script>