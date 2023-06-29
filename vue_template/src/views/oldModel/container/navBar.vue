<template>
  <!-- responsive-nav -->
  <div id="responsive-nav" class="responsive-nav active px-4">
    <div class="container-logo">
      <img
        src="../../../img/user.png"
        alt="Foto del usuario"
        width="64"
        height="64"
      />
      <div class="">
        <a class="btn-exit " href="#"
          ><i
            @click="active"
            class="icon-exit fas fa-times "
          ></i
        ></a>
      </div>
    </div>

    <hr/>
    <h2 class="nav-title">Abrahan Pulido</h2>
    <hr/>
    <div class="scrollable-list scrollbar-cyan">
      <ul class="list-unstyled">
        <li>
          <button class="btn-categoria btn-primary">
            <i class="fas fa-home"></i> Inicio
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-bell"></i> Notificaciones
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-envelope"></i> Mensajes
          </button>
        </li>
        <hr/>
        <h2 class="nav-title">MekAuto</h2>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-star"></i> Lista de favoritos
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-bookmark"></i> Guardados
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-history"></i> Comprar otra vez
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-shopping-bag"></i> Compras
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-gavel"></i> Subastas y Ofertas
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-dollar-sign"></i> Ventas
          </button>
        </li>
        <hr />
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-list"></i> Categorías
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-tags"></i> Ofertas
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-cog"></i> Configuración
          </button>
        </li>
        <li>
          <button class="btn-categoria btn-dark">
            <i class="fas fa-question-circle"></i> Ayuda
          </button>
        </li>
      </ul>
    </div>

    <footer class="">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: Social media -->
        <section class="contenido-redes mb-6">
          <!-- Facebook -->
          <a class="btn-redes" href="#!" role="button"
            ><i class="fab fa-facebook-f" style="padding-top: 0.7rem !important"></i
          ></a>

          <!-- Twitter -->
          <a class="btn-redes" href="#!" role="button"
            ><i class="fab fa-twitter" style="padding-top: 0.7rem !important"></i
          ></a>

          <!-- Google -->
          <a class="btn-redes" href="#!" role="button"
            ><i class="fab fa-google" style="padding-top: 0.7rem !important"></i
          ></a>

          <!-- Instagram -->
          <a class="btn-redes" href="#!" role="button"
            ><i class="fab fa-instagram" style="padding-top: 0.7rem !important"></i
          ></a>

          <!-- Linkedin -->
          <a class="btn-redes" href="#!" role="button"
            ><i class="fab fa-linkedin-in" style="padding-top: 0.7rem !important"></i
          ></a>

          <!-- Github -->
          <a class="btn-redes" href="#!" role="button"
            ><i class="fab fa-github" style="padding-top: 0.7rem !important"></i
          ></a>
        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="copy">
			  © {{ fecha }} Copyright:
			  <a class="" href="https://mekautos.com/">MekAutos.com</a>
			</div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'; 
function active() {
  // @ts-ignore: Object is possibly 'null'.
  document.getElementById('responsive-nav').classList.toggle('active');
}
const fecha = ref(new Date().getFullYear())
console.log(fecha.value)
</script>

<style scoped lang="scss">
/* ===== Scrollbar CSS ===== */
/* Firefox */
#responsive-nav {
  scrollbar-width: auto;
  scrollbar-color: #beb3c1 #ffffff;
}

/* Chrome, Edge, and Safari */
#responsive-nav::-webkit-scrollbar {
  width: 13px;
}

#responsive-nav::-webkit-scrollbar-track {
  background: #ffffff;
}

#responsive-nav::-webkit-scrollbar-thumb {
  background-color: #beb3c1;
  border-radius: 10px;
  border: 3px solid #ffffff;
}

hr {
  margin: 1rem 0;
  height: 1px;
  color: white;
  background-color: currentColor;
  opacity: 0.25;
}

.responsive-nav {
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container-logo {
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 50%;
  }
  .btn-exit{

    .icon-exit {
      display: flex;
    background-color: #ac2bac;
    border-color: #ac2bac;
    height: 2.5rem;
    width: 2.5rem;
    /* text-align: center; */
    border-radius: 50%;
    color: white;
    justify-content: center;
    align-items: center;
    }
  }
}

.nav-title{
  color: white;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
}

.btn-primary{
  color: #fff;
  background-color: #0062ae;
  border-color: #0062ae;
}

  .btn-categoria {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    margin-bottom: 0.25rem;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    text-decoration: none;
    text-overflow: ellipsis;
    padding: 0.5rem 1.5rem;
    font-size: .875rem;
    line-height: 1.3;
    font-weight: 600;
    border-radius: 20px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;  
  }
  .btn-dark{
  color: #fff;
  background-color: #201f1e;
  border-color: #201f1e;
  :hover{
    background-color: #0c0c0b;
  }
  }

#navigation {
  background: #fff;
  border-bottom: 2px solid #e4e7ed;
  border-top: 3px solid #0078d4;
}

.contenido-redes{
  display: flex;
  place-content: center;
  gap: 5px;
}

.btn-redes{
    text-align: center;
    display: block;
    border-radius: 50%;
    padding: 0;
    position: relative;
    width: 2.312rem;
    height: 2.312rem;
    color: #d2d2d2;
    border: 1px solid #d2d0ce;
}
.copy {
    text-align: center;
    color: #ffffff;
    padding: 1rem;
    font-size: 14px;
    font-weight: 400;
    background-color: rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 5991px) {
  /*-------------scroll---------------*/

  #responsive-nav {
    position: fixed;
    left: 0;
    top: 0px;
    background: #15161d;
    height: 100vh;
    max-width: 77%;
    width: 0%;
    overflow: hidden;
    z-index: 22;
    padding-top: 20px;

    /*max-height: 60vh;*/
    overflow-y: auto;

    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }

  #responsive-nav.active {
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
    width: 100%;
  }
}
</style>
