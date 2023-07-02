<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <bannerPrincipalVue/>
  <filtro/>
  <NavTipo/>
  <CategoriasPrincipales/>
  <SeccionesDestacadas/>
  <ProductSlider title="Articulos SS Vistos" title2="Recientemente"/>
  <ProductSlider title="Nuevos Productos"/>
  <ProductSlider title="Top en Ventas"/>

</template>
<script setup lang="ts">
import bannerPrincipalVue from './components/bannerPrincipal.vue';
import filtro from './components/filtro.vue'
import NavTipo from './components/navTipo.vue';
import CategoriasPrincipales from './components/categoriasPrincipales.vue';
import SeccionesDestacadas from './components/seccionesDestacadas.vue';
import ProductSlider from './components/productSlider.vue';

</script>

<style scoped>
</style>
