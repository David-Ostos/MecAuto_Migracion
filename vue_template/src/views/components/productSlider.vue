<script setup lang="ts">
import Products from '../container/products.vue';
import { ref } from 'vue';
import TitleProducts from '../container/titleProducts.vue';

const products: any = ref([]);

const props = defineProps({
  title: String,
  title2: String
})

fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
  .then((res) => res.json())
  .then((data) => {
    products.value = data;
  });
</script>

<template>
  <div>
    <TitleProducts 
    :title="title" 
    :title2="title2" />
    <div class="contenerdor">
      <div class="contenedor_scroll px-4">
        <Products
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :images="product.images[0]"
          :condicion="product.condicion"
          :descuento="product.descuento"
        ></Products>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contenerdor {
  overflow: scroll;
  overflow-x: auto;
  width: 100vw;
  box-sizing: border-box;
  max-width: 86vw;
  margin: auto;
}
.contenerdor::-webkit-scrollbar {
  display: none;
}
.contenedor_scroll {
  display: flex;
  width: fit-content;
  gap: 2rem;
  padding-bottom: 5rem;
  position: relative;
  overflow: scroll;
  overflow-x: auto;
}
</style>
