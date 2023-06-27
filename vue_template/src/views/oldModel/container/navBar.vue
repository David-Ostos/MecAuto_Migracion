<template>
  <!-- NAVIGATION -->
  <nav id="navigation">
    <!-- container -->

    <!-- responsive-nav -->
    <div id="responsive-nav" class="active">
      <!-- NAV 
					<ul class="main-nav nav navbar-nav">
						<li class="active"><a href="#">Inicio</a></li>
						<li><a href="#">Ventas Hot</a></li>
						<li><a href="#">Categorias</a></li>
						<li><a href="#">Carros</a></li>
						<li><a href="#">Motos</a></li>
						<li><a href="#">Camiones</a></li>
						<li><a href="#">Accesorios</a></li>
					</ul>-->
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="list-unstyled d-flex justify-content-between">
              <img
                src="../../../img/user.png"
                alt="Foto del usuario"
                width="64"
                height="64"
                class="rounded-circle flex-shrink-0"
              />
              <div class="menu-toggle navbar-toggler d-flex px-0 py-0">
                <a class="d-flex px-0 py-0" href="#"
                  ><i
                    @click="active"
                    class="btn btn-primary fas fa-times btn-floating shadow-demo shadow-1 py-2"
                    style="
                      background-color: #ac2bac;
                      border-color: #ac2bac;
                      padding-top: 0.7rem !important;
                    "
                  ></i
                ></a>
              </div>
            </div>

            <hr class="text-white" />
            <h2 class="text-white">Abrahan Pulido</h2>
            <hr class="text-white" />
            <div class="scrollable-list scrollbar-cyan">
              <ul class="list-unstyled">
                <li>
                  <button class="btn btn-primary btn-rounded full-width btn-icon-text">
                    <i class="fas fa-home"></i> Inicio
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-bell"></i> Notificaciones
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-envelope"></i> Mensajes
                  </button>
                </li>
                <hr class="text-white" />
                <h2 class="text-white">MekAuto</h2>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-star"></i> Lista de favoritos
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-bookmark"></i> Guardados
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-history"></i> Comprar otra vez
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-shopping-bag"></i> Compras
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-gavel"></i> Subastas y Ofertas
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-dollar-sign"></i> Ventas
                  </button>
                </li>
                <hr />
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-list"></i> Categorías
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-tags"></i> Ofertas
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-cog"></i> Configuración
                  </button>
                </li>
                <li>
                  <button class="btn btn-dark btn-rounded full-width btn-icon-text">
                    <i class="fas fa-question-circle"></i> Ayuda
                  </button>
                </li>
              </ul>
            </div>

            <footer class="bg-dark text-center text-white">
              <!-- Grid container -->
              <div class="container p-4 pb-0">
                <!-- Section: Social media -->
                <section class="mb-4">
                  <!-- Facebook -->
                  <a class="btn btn-outline-light btn-floating m-0" href="#!" role="button"
                    ><i class="fab fa-facebook-f" style="padding-top: 0.7rem !important"></i
                  ></a>

                  <!-- Twitter -->
                  <a class="btn btn-outline-light btn-floating m-0" href="#!" role="button"
                    ><i class="fab fa-twitter" style="padding-top: 0.7rem !important"></i
                  ></a>

                  <!-- Google -->
                  <a class="btn btn-outline-light btn-floating m-0" href="#!" role="button"
                    ><i class="fab fa-google" style="padding-top: 0.7rem !important"></i
                  ></a>

                  <!-- Instagram -->
                  <a class="btn btn-outline-light btn-floating m-0" href="#!" role="button"
                    ><i class="fab fa-instagram" style="padding-top: 0.7rem !important"></i
                  ></a>

                  <!-- Linkedin -->
                  <a class="btn btn-outline-light btn-floating m-0" href="#!" role="button"
                    ><i class="fab fa-linkedin-in" style="padding-top: 0.7rem !important"></i
                  ></a>

                  <!-- Github -->
                  <a class="btn btn-outline-light btn-floating m-0" href="#!" role="button"
                    ><i class="fab fa-github" style="padding-top: 0.7rem !important"></i
                  ></a>
                </section>
                <!-- Section: Social media -->
              </div>
              <!-- Grid container -->

              <!-- Copyright -->
              <div class="p-3 text-center" style="background-color: rgba(0, 0, 0, 0.2)">
                ©
                <div></div>
                Copyright:
                <a class="text-white" href="https://mekautos.com/">MekAutos.com</a>
              </div>
              <!-- Copyright -->
            </footer>
          </div>
        </div>
      </div>
      <!-- /NAV -->
    </div>
    <!-- /responsive-nav -->
    <!-- /container -->
  </nav>
</template>

<script setup lang="ts">
function active() {
  // @ts-ignore: Object is possibly 'null'.
  document.getElementById('responsive-nav').classList.toggle('active');
}
</script>

<style scoped>
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
</style>
