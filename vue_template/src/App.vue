<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Header from './views/components/header.vue'
import FooterPrincipal from './views/components/footerPrincipal.vue';
</script>
<template>
  <Header />
  <div style="height: 133px;"></div>
  <RouterView />
  <FooterPrincipal/>
</template>

<style scoped>
*{
  max-width: 100vw;
}
body{
  min-height: 100vh;
}
</style>