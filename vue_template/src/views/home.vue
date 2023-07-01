<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <bannerPrincipalVue/>
  <filtro/>
  <NavTipo/>

</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import bannerPrincipalVue from './components/bannerPrincipal.vue';
import filtro from './components/filtro.vue'
import NavTipo from './components/navTipo.vue';

</script>

<style scoped>
</style>
