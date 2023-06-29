<template>
  <div class="contenedor ">
    <div class="title-product">
      <h3>Articulos SS Vistos <br />Recientemente</h3>
    </div>
    <div class="ver-todo">
      <a href="#tab1">Ver Todo</a>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
  .contenedor{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    max-width: 86vw;
    margin: auto;
  }
    .title-product{
        color: black;
        font-family: "Segoe UI Web (West European)";
        font-weight: 600;
        margin: 0 0 10px;
        font-size:1.75rem;
    }
    .ver-todo{
      color: #0078d4; 
      text-decoration: underline
    }
</style>