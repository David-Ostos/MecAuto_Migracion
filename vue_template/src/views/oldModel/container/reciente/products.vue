
<script setup lang="ts">
import { ref } from 'vue';



const props = defineProps({
  id: Number,
  images: String,
  descuento: String,
  condicion: String,
  category: String,
  title: String,
  price: String,
})

</script>
<style lang="scss" scoped>
.product:hover {
  box-shadow: 0px 0px 6px 0px #E4E7ED, 0px 0px 0px 2px #0078d4;
}

.product {
  box-shadow: 0px 0px 0px 0px #e4e7ed, 0px 0px 0px 1px #e4e7ed;
  transition: 0.2s all;
  position: relative;
  top: 3px;

  .product-img {
    >img {
      width: 100%;
    }

    .product-label {
      position: absolute;
      top: 15px;
      right: 15px;

      >span {
        margin: 0 2px;
        border: 2px solid;
        padding: 2px 10px;
        font-size: 12px;
      }

      >span.sale {
        background-color: #FFF;
        border-color: #0078d4;
        color: #0078d4;
      }

      >span.new {
        background-color: #0078d4;
        border-color: #0078d4;
        color: #FFF;
      }
    }
  }
}

.product .product-body {
  position: relative;
  padding: 15px;
  background-color: #FFF;
  text-align: center;
  z-index: 20;
  box-sizing: border-box;
}

.product .product-body .product-category {
  text-transform: uppercase;
  font-size: 12px;
  color: #8D99AE;
}

.product .product-body .product-name {
  text-transform: uppercase;
  font-size: 14px;
}

.product .product-body .product-name>a {
  font-weight: 700;
}

.product .product-body .product-name>a:hover,
.product .product-body .product-name>a:focus {
  color: #0078d4;
}

.product .product-body .product-price {
  color: #0078d4;
  font-size: 18px;
}

.product .product-body .product-price .product-old-price {
  font-size: 70%;
  font-weight: 400;
  color: #8D99AE;
}

.product .product-body .product-rating {
  position: relative;
  margin: 15px 0px 10px;
  height: 20px;
}

.product .product-body .product-rating>i {
  position: relative;
  width: 14px;
  margin-right: -4px;
  background: #FFF;
  color: #E4E7ED;
  z-index: 10;
}

.product .product-body .product-rating>i.fa-star {
  color: #ef233c;
}

.product .product-body .product-rating:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 1px;
  background-color: #E4E7ED;
}

.product .product-body .product-btns>button {
  position: relative;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: transparent;
  border: none;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.product .product-body .product-btns>button:hover {
  background-color: #E4E7ED;
  color: #0078d4;
  border-radius: 50%;
}

.product .product-body .product-btns>button .tooltipp {
  position: absolute;
  bottom: 100%;
  left: 50%;
  -webkit-transform: translate(-50%, -15px);
  -ms-transform: translate(-50%, -15px);
  transform: translate(-50%, -15px);
  width: 150px;
  padding: 10px;
  font-size: 12px;
  line-height: 10px;
  background: #1e1f29;
  color: #FFF;
  text-transform: uppercase;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.product .product-body .product-btns>button:hover .tooltipp {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translate(-50%, -5px);
  -ms-transform: translate(-50%, -5px);
  transform: translate(-50%, -5px);
}

.add-to-cart {
  position: relative;
  bottom: 70px;
  padding: 15px;
  background: #1e1f29;
  text-align: center;
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  z-index: 2;
}

.containeProduct:hover .add-to-cart {
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
}

.add-to-cart .add-to-cart-btn {
  position: relative;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 30px;
  background-color: #ef233c;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 40px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.add-to-cart .add-to-cart-btn>i {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  line-height: 38px;
  color: #0078d4;
  opacity: 0;
  visibility: hidden;
}

.add-to-cart .add-to-cart-btn:hover {
  background-color: #FFF;
  color: #0078d4;
  border-color: #0078d4;
  padding: 0px 30px 0px 50px;
}

.add-to-cart .add-to-cart-btn:hover>i {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 639px) {
  .img {
    height: 60vw;
  }

  @media (min-width: 640px) {
    .product {
      width: 46vw;
    }

    .img {
      height: 35vw;
    }
  }
}

@media (min-width: 1024px) {

  .product {
    width: 22.5vw;
    max-width: 295px;

  }

  .img {
    height: 12.5vw;
  }
}
</style>

<template>

  <div class="containeProduct">
    <div class=" product ">
      <div class=" product-img">
        <img class="img" :src="images" alt="" />
        <div class=" product-label">
          <span class="sale">-{{ descuento || 30 }}%</span>
          <span class="nuevo">{{ condicion || "nuevo" }}</span>
        </div>
      </div>
      <div class="product-body ">
        <p class="product-category">{{ category || 'moto' }}</p>
        <h3 class="product-name "><a href="#">{{ title }}</a></h3>
        <h4 class="product-price ">
          ${{ price || "2000" }} <del class="product-old-price ">$20990.00</del>
        </h4>
        <div class="product-rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="product-btns">
          <button class="Agregar Lista">
            <i class="fa fa-heart-o"></i><span class="tooltipp">Agregar Lista</span>
          </button>
          <button class="Calificacion">
            <i class="fa fa-exchange"></i><span class="tooltipp">Calificacion</span>
          </button>
          <button class="Ver">
            <i class="fa fa-eye"></i><span class="tooltipp">Ver</span>
          </button>
        </div>
      </div>
    </div>
    <div class="add-to-cart">
      <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>Comprar</button>
    </div>
  </div>




<!-- /tab --></template>
