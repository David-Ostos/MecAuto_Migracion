<template>
  <!-- PRELOADER -->
  <div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
  <!-- /PRELOADER -->

  <!-- HEADER -->
  <header>
    <!-- MAIN HEADER -->
    <div id="header">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <!-- LOGO
                <div class="col-md-3">
                    <div class="header-logo">
                        <a href="#" class="logo">
                            <img src="../../img/logo.png" alt="">
                        </a>
                    </div>
                </div> -->
          <!-- /LOGO -->
          <!-- NAV -->

          <div class="d-flex justify-content-between">
            <div class="menu-toggle navbar-toggler d-flex px-0 py-0" data-mdb-toggle="collapse">
              <a href="#">
                <i
                  class="btn btn-primary fas fa-bars btn-floating shadow-demo shadow-1 py-2"
                  style="
                    background-color: #ac2bac;
                    border-color: #ac2bac;
                    padding-top: 0.7rem !important;
                  "
                  @click="toggle"
                ></i>
              </a>
            </div>

            <div href="#"><img src="../../img/logo2.png" height="35" alt="" loading="lazy" /></div>

            <div class="d-flex px-0 py-0">
              <i
                class="btn btn-primary fas fa-shopping-cart btn-floating shadow-demo shadow-1 py-2"
                style="
                  padding-top: 0.7rem !important;
                  background-color: #ac2bac;
                  border-color: #ac2bac;
                "
              ></i>
            </div>
          </div>
          <!-- /NAV -->

          <!-- SEARCH BAR -->
          <div class="col-md-12">
            <div class="header-search">
              <form class="px-0">
                <div class="form-group">
                  <div class="input-group">
                    <!--<select class="input-select" style="z-index:4; padding: 0.375rem 0.75rem; font-size: 1rem; height: auto; height: calc(2.08rem + 2px);">
                                        <option value="0" class="rounded-pill">Categoria</option>
                                        <option value="1">Carros</option>
                                        <option value="2">Motos</option>
                                        <option value="3">Camiones</option>
                                    </select>-->
                    <input type="search" class="form-control rounded-pill" placeholder="Buscar" />
                    <div class="input-group-append">
                      <button
                        type="submit"
                        class="btn btn-primary rounded-pill"
                        style="margin-left: -2rem; z-index: 3"
                      >
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- /SEARCH BAR -->

          <!-- Products tab & slick 
            <div class="col-md-12">
                <div class="row">
                    <div class="products-tabs">
                        <!- tab 
                        <div id="tab1" class="tab-pane active">
                            <div class="products-slick" data-nav="#slick-nav-1">
                                <!- TAGS 
                                <div class="d-flex">
                                    <div class="p-2">
                                        <div class="px-0 py-0 d-flex">
                                            <a href="#">
                                                <i class="fas fa-tags py-2 btn btn-danger shadow-1 px-2 py-2" style="border-radius:10px; color: white;">  <span> Ventas</span> </i>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="p-2">
                                        <div class="px-0 py-0 d-flex">
                                            <a href="#">
                                                <i class="fas fa-tags py-2 btn btn-danger shadow-1 px-2 py-2" style="border-radius:10px; color: white;">  <span> Ventas</span> </i>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div class="p-2">
                                        <div class="px-0 py-0 d-flex">
                                            <a href="#">
                                                <i class="fas fa-list-alt py-2 btn btn-danger shadow-1 px-2 py-2" style="border-radius:10px; color: white;">  <span> Categorias</span> </i>
                                            </a>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <!- /tab 
                    </div>
                </div>
            </div>-->
          <!-- Products tab & slick -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- /MAIN HEADER -->
  </header>
  <!-- /HEADER -->

  <NavBar v-if="show" style=""></NavBar>

  <!-- Carousel wrapper -->
  <div
    id="carouselMaterialStyle"
    class="carousel slide carousel-fade"
    data-mdb-ride="carousel"
    style="top: 128px !important"
  >
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>

    <!-- Inner -->
    <div class="carousel-inner rounded-5 shadow-4-strong">
      <!-- Single item -->
      <div class="carousel-item active">
        <img src="../../img/slider/8.png" class="d-block w-100 carousel-img" />
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img src="../../img/slider/9.png" class="d-block w-100 carousel-img" />
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img src="../../img/slider/8.png" class="d-block w-100 carousel-img" />
      </div>
    </div>
    <!-- Inner -->

    <!-- Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselMaterialStyle"
      data-mdb-slide="prev"
    >
      <span class="fa fa-chevron-left" aria-hidden="true"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-mdb-target="#carouselMaterialStyle"
      data-mdb-slide="next"
    >
      <span class="fa fa-chevron-right" aria-hidden="true"></span>
    </button>
  </div>
  <!-- Carousel wrapper -->

  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="padding: 138px 0 5px 0 !important; background-color: #333 !important"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div class="d-flex">
          <div class="flex-grow-1">
            <h1 class="text-uppercase semibold text-center text-white" id="titulo">
              ENCUENTRA LOS REPUESTOS PARA TU VEHICULO
            </h1>
          </div>
          <div class=""></div>
          <div class="">
            <i
              class="fas fa-chevron-down text-white"
              style="
                content: '';
                position: absolute;
                right: 15px;
                top: 140px !important;
                border-width: 8px 5px 0px 5px;
                border-color: #ffffff transparent transparent transparent;
              "
            ></i>
          </div>
        </div>
      </button>

      <!-- Collapsible wrapper -->
      <div class="navbar-collapse collapse" id="navbarSupportedContent">
        <!-- container -->
        <div class="container">
          <!-- row -->
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-2 col-sm-12 mb-2">
                    <select class="form-select" required>
                      <option value="">AÑO</option>
                      <option>2001</option>
                      <option>2000</option>
                      <option>1999</option>
                      <option>1998</option>
                    </select>
                  </div>
                  <div class="col-md-2 col-sm-12 mb-2">
                    <select class="form-select" disabled>
                      <option value="">MARCA</option>
                      <option>United States</option>
                    </select>
                  </div>
                  <div class="col-md-2 col-sm-12 mb-2">
                    <select class="form-select" disabled>
                      <option value="">MODELO</option>
                      <option>United States</option>
                    </select>
                  </div>
                  <div class="col-md-2 col-sm-12 mb-2">
                    <select class="form-select" disabled>
                      <option value="">MOTOR</option>
                      <option>United States</option>
                    </select>
                  </div>
                  <div class="col-md-2 col-sm-12 mb-2">
                    <button
                      class="btn btn-primary btn-block"
                      type="submit"
                      style="padding: 10px 0 10px 0 !important"
                    >
                      BUSCAR
                    </button>
                  </div>
                  <div class="col-md-1"></div>
                </div>
              </form>
            </div>
          </div>
          <!-- /SEARCH SECTION -->
        </div>
      </div>
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->

  <!-- Tabs navs -->
  <div class="d-flex justify-content-center">
    <ul class="nav nav-tabs mb-0" id="ex-with-icons" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link buttoms_x active"
          id="ex-with-icons-tab-1"
          data-mdb-toggle="tab"
          href="#ex-with-icons-tabs-1"
          role="tab"
          aria-selects="ex-with-icons-tabs-1"
          aria-selected="true"
          ><i class="fas fa-car fa-fw me-2"></i>Carros</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link buttoms_x"
          id="ex-with-icons-tab-2"
          data-mdb-toggle="tab"
          href="#ex-with-icons-tabs-2"
          role="tab"
          aria-controls="ex-with-icons-tabs-2"
          aria-selected="false"
          ><i class="fas fa-motorcycle fa-fw me-2"></i>Motos</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link buttoms_x"
          id="ex-with-icons-tab-3"
          data-mdb-toggle="tab"
          href="#ex-with-icons-tabs-3"
          role="tab"
          aria-controls="ex-with-icons-tabs-3"
          aria-selected="false"
          ><i class="fas fa-truck-moving fa-fw me-2"></i>Camiones</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link buttoms_x"
          id="ex-with-icons-tab-4"
          data-mdb-toggle="tab"
          href="#ex-with-icons-tabs-4"
          role="tab"
          aria-controls="ex-with-icons-tabs-4"
          aria-selected="false"
          ><i class="fas fa-ship fa-fw me-2"></i>marítimo</a
        >
      </li>
    </ul>
  </div>
  <!-- Tabs navs -->

  <!-- Tabs content -->
  <div class="tab-content" id="ex-with-icons-content">
    <!-- MOTO -->
    <div
      class="tab-pane fade show active"
      id="ex-with-icons-tabs-1"
      role="tabpanel"
      aria-labelledby="ex-with-icons-tab-1"
    >
      <!-- MOTO SECTION -->
      <div class="section card" style="background-color: red">
        <!-- container -->
        <div class="container">
          <!-- row -->
          <div class="row">
            <div class="col-md-12">
              <div class="card-body">
                <h2 class="text-uppercase semibold mb-1 text-white">
                  !busca, compra y recibe en tu lugar de preferencia!
                </h2>
                <p class="mb-3 text-white">vive una nueva experiencia en la compra de repuestos.</p>
                <a class="btn btn-primary rounded-pill primary-btn" href="#">Comprar !!!</a>
              </div>
            </div>
          </div>
          <!-- /row -->
        </div>
        <!-- /container -->
      </div>
      <div id="hot-deal" class="section-moto"></div>
      <!-- /MOTO SECTION -->
    </div>
    <!-- /MOTO -->

    <!--CARRO-->
    <div
      class="tab-pane fade"
      id="ex-with-icons-tabs-2"
      role="tabpanel"
      aria-labelledby="ex-with-icons-tab-2"
    >
      <!-- CARRO SECTION -->
      <div class="section card" style="background-color: blue">
        <!-- container -->
        <div class="container">
          <!-- row -->
          <div class="row">
            <div class="col-md-12">
              <div class="card-body">
                <h2 class="text-uppercase semibold mb-1 text-white">!No querras dejar de parar!</h2>
                <p class="mb-3 text-white">Mejora y transforma tu esperiencia en las 2 reuedas.</p>
                <a
                  class="btn btn-dark rounded-pill"
                  style="padding: 12px 30px; font-weight: 700"
                  href="#"
                  >Comprar !!!</a
                >
              </div>
            </div>
          </div>
          <!-- /row -->
        </div>
        <!-- /container -->
      </div>
      <div id="hot-deal" class="section-carro"></div>
      <!-- /MOTO SECTION -->
    </div>
    <!--/CARRO-->

    <!--CAMIONE-->
    <div
      class="tab-pane fade"
      id="ex-with-icons-tabs-3"
      role="tabpanel"
      aria-labelledby="ex-with-icons-tab-3"
    >
      <!-- CAMIONE SECTION -->
      <div class="section card" style="background-color: orangered">
        <!-- container -->
        <div class="container">
          <!-- row -->
          <div class="row">
            <div class="col-md-12">
              <div class="card-body">
                <h2 class="text-uppercase semibold mb-1 text-white">!No querras dejar de parar!</h2>
                <p class="mb-3 text-white">Mejora y transforma tu esperiencia en las 2 reuedas.</p>
                <a
                  class="btn btn-primary rounded-pill"
                  style="padding: 12px 30px; font-weight: 700"
                  href="#"
                  >Comprar !!!</a
                >
              </div>
            </div>
          </div>
          <!-- /row -->
        </div>
        <!-- /container -->
      </div>
      <div id="hot-deal" class="section-camion"></div>
      <!-- /CAMIONE SECTION -->
    </div>
    <!--/CAMIONE-->

    <!--MARITIMO-->
    <div
      class="tab-pane fade"
      id="ex-with-icons-tabs-4"
      role="tabpanel"
      aria-labelledby="ex-with-icons-tab-4"
    >
      <!-- MARITIMO SECTION -->
      <div class="section card" style="background-color: yellowgreen">
        <!-- container -->
        <div class="container">
          <!-- row -->
          <div class="row">
            <div class="col-md-12">
              <div class="card-body">
                <h2 class="text-uppercase semibold mb-1 text-white">!No querras dejar de parar!</h2>
                <p class="mb-3 text-white">Mejora y transforma tu esperiencia en las 2 reuedas.</p>
                <a
                  class="btn btn-primary rounded-pill"
                  style="padding: 12px 30px; font-weight: 700"
                  href="#"
                  >Comprar !!!</a
                >
              </div>
            </div>
          </div>
          <!-- /row -->
        </div>
        <!-- /container -->
      </div>
      <div id="hot-deal" class="section-maritimo"></div>
      <!-- /MARITIMO SECTION -->
    </div>
    <!--/MARITIMO-->
  </div>
  <!-- /Tabs content -->

  <!-- SECTION -->
  <div class="section" style="padding-top: 0">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <!-- shop -->
        <div class="col-md-4 col-xs-4">
          <div class="shop">
            <div class="shop-img">
              <img src="../../img/camione/camione2.jpg" alt="" />
            </div>
            <div class="shop-body">
              <h3>Camiones<br />Seccion</h3>
              <a href="#" class="cta-btn">Comprar !!!<i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
        </div>
        <!-- /shop -->

        <!-- shop -->
        <div class="col-md-4 col-xs-4">
          <div class="shop">
            <div class="shop-img">
              <img src="../../img/carro/carro3.jpeg" alt="" />
            </div>
            <div class="shop-body">
              <h3>Carros<br />Seccion</h3>
              <a href="#" class="cta-btn">Comprar !!! <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
        </div>
        <!-- /shop -->

        <!-- shop -->
        <div class="col-md-4 col-xs-4">
          <div class="shop">
            <div class="shop-img">
              <img src="../../img/moto/moto3.jpeg" alt="" />
            </div>
            <div class="shop-body">
              <h3>Motos<br />Seccion</h3>
              <a href="#" class="cta-btn">Comprar !!! <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
        </div>
        <!-- /shop -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
  <!-- /SECTION -->

  <!-- SECTION -->
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <!-- section title -->
        <div class="d-flex bd-highlight">
          <div class="flex-grow-1 bd-highlight p-2">
            <h3 style="color: black">Articulos SS Vistos <br />Recientemente</h3>
          </div>
          <div class="bd-highlight p-2">
            <a style="color: #0078d4; text-decoration: underline" href="#tab1">Ver Todo</a>
          </div>
        </div>
        <!-- /section title -->

        <!-- Products tab & slick -->
        <div class="col-md-12">
          <div class="row">
            <div class="products-tabs">
              <!-- tab -->
              <div id="tab1" class="tab-pane active">
                <div class="products-slick" data-nav="#slick-nav-1">
                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/moto/moto9.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Motos</p>
                      <h3 class="product-name"><a href="#">Motos XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $1980.00 <del class="product-old-price">$20990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/moto/moto9.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Motos</p>
                      <h3 class="product-name"><a href="#">Motos XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $1980.00 <del class="product-old-price">$20990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/moto/moto9.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Motos</p>
                      <h3 class="product-name"><a href="#">Motos XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $1980.00 <del class="product-old-price">$20990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/moto/moto9.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Motos</p>
                      <h3 class="product-name"><a href="#">Motos XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $1980.00 <del class="product-old-price">$20990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/moto/moto9.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Motos</p>
                      <h3 class="product-name"><a href="#">Motos XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $1980.00 <del class="product-old-price">$20990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/moto/moto9.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Motos</p>
                      <h3 class="product-name"><a href="#">Motos XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $1980.00 <del class="product-old-price">$20990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/moto/moto9.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Motos</p>
                      <h3 class="product-name"><a href="#">Motos XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $1980.00 <del class="product-old-price">$20990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/moto/moto9.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Motos</p>
                      <h3 class="product-name"><a href="#">Motos XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $1980.00 <del class="product-old-price">$20990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/moto/moto9.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Motos</p>
                      <h3 class="product-name"><a href="#">Motos XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $1980.00 <del class="product-old-price">$20990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->
                </div>
                <!--<div id="slick-nav-1" class="products-slick-nav"></div>-->
              </div>
              <!-- /tab -->
            </div>
          </div>
        </div>
        <!-- Products tab & slick -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
  <!-- /SECTION -->

  <!-- SECTION -->
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <!-- section title -->
        <div class="col-md-12">
          <div class="section-title">
            <h3 class="title">Nuevos Productos</h3>
            <!--<div class="section-nav">
                            <ul class="section-tab-nav tab-nav">
                                <li class="active"><a data-toggle="tab" href="#tab1">Motores</a></li>
                                <li><a data-toggle="tab" href="#tab1">Frenos</a></li>
                                <li><a data-toggle="tab" href="#tab1">Caja</a></li>
                                <li><a data-toggle="tab" href="#tab1">Accesorios</a></li>
                            </ul>
                        </div>-->
          </div>
        </div>
        <!-- /section title -->

        <!-- Products tab & slick -->
        <div class="col-md-12">
          <div class="row">
            <div class="products-tabs">
              <!-- tab -->
              <div id="tab1" class="tab-pane active">
                <div class="products-slick" data-nav="#slick-nav-1">
                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/camione/camione1.png" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Camion XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $51980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->
                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/camione/camione1.png" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Camion XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $51980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/camione/camione1.png" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Camion XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $51980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/camione/camione1.png" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Camion XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $51980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/camione/camione1.png" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Camion XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $51980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/camione/camione1.png" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Camion XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $51980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/camione/camione1.png" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Camion XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $51980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/camione/camione1.png" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Camion XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $51980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/camione/camione1.png" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Camion XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $51980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->
                </div>
                <!--<div id="slick-nav-1" class="products-slick-nav"></div>-->
              </div>
              <!-- /tab -->
            </div>
          </div>
        </div>
        <!-- Products tab & slick -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
  <!-- /SECTION -->

  <!-- HOT DEAL SECTION 
    <div id="hot-deal" class="section">

    <div class="container">
        
        <div class="row">
            <div class="col-md-12">
                <div class="hot-deal">
                    <ul class="hot-deal-countdown">
                        <li>
                            <div>
                                <h3>02</h3>
                                <span>Dia</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>10</h3>
                                <span>Horas</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>34</h3>
                                <span>Minutos</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>60</h3>
                                <span>Segundos</span>
                            </div>
                        </li>
                    </ul>
                    <h2 class="text-uppercase">Gran Ventas de Repuestos</h2>
                    <p>Respuestos Nuevos y Usados 50%</p>
                    <a class="btn btn-primary rounded-pill" style="text-transform: uppercase; padding: 12px 30px; font-weight: 700;" href="#">Comprar !!!</a>
                </div>
            </div>
        </div>
        
    </div>

    </div>
    <!- /HOT DEAL SECTION -->

  <!-- SECTION 
    <div class="section">

    <div class="container">

    <div class="row">


    <div class="d-flex bd-highlight">
    <div class="p-2 flex-grow-1 bd-highlight">
        <h3 style="color: black;">Te mereces todo esto</h3>
    </div>
    <div class="p-2 bd-highlight">
        <a style="color: #0078d4; text-decoration: underline;" href="#tab1">Ver Todo</a>
    </div>
    </div> 



    <div class="container">
    <div class="row">
    <div class="col-md-12"></div>
    <div class="col-4 col-md-4 mb-4">
        <div class="rounded-circle overflow-hidden mx-auto d-flex justify-content-center align-items-center" style="width: 22vw; height: 22vw;">
        <img src="../../img/camione/camione2.jpg" class="img-fluid h-100 w-100" style="object-fit: cover;">                  
        </div>
        <div class="d-flex justify-content-center align-items-center">
        <h5>locomotora</h5>
        </div>
    </div>
    <div class="col-4 col-md-4 mb-4">
        <div class="rounded-circle overflow-hidden mx-auto d-flex justify-content-center align-items-center" style="width: 22vw; height: 22vw;">
        <img src="../../img/camione/camione2.jpg" class="img-fluid h-100 w-100" style="object-fit: cover;">                  
        </div>
        <div class="d-flex justify-content-center align-items-center">
        <h5>locomotora</h5>
        </div>
    </div>
    <div class="col-4 col-md-4 mb-4">
        <div class="rounded-circle overflow-hidden mx-auto d-flex justify-content-center align-items-center" style="width: 22vw; height: 22vw;">
        <img src="../../img/camione/camione2.jpg" class="img-fluid h-100 w-100" style="object-fit: cover;">                  
        </div>
        <div class="d-flex justify-content-center align-items-center">
        <h5>locomotora</h5>
        </div>
    </div>
    <div class="col-4 col-md-4 mb-4">
        <div class="rounded-circle overflow-hidden mx-auto d-flex justify-content-center align-items-center" style="width: 22vw; height: 22vw;">
        <img src="../../img/camione/camione2.jpg" class="img-fluid h-100 w-100" style="object-fit: cover;">                  
        </div>
        <div class="d-flex justify-content-center align-items-center">
        <h5>locomotora</h5>
        </div>
    </div>
    <div class="col-4 col-md-4 mb-4">
        <div class="rounded-circle overflow-hidden mx-auto d-flex justify-content-center align-items-center" style="width: 22vw; height: 22vw;">
        <img src="../../img/camione/camione2.jpg" class="img-fluid h-100 w-100" style="object-fit: cover;">                  
        </div>
        <div class="d-flex justify-content-center align-items-center">
        <h5>locomotora</h5>
        </div>
    </div>
    <div class="col-4 col-md-4 mb-4">
        <div class="rounded-circle overflow-hidden mx-auto d-flex justify-content-center align-items-center" style="width: 22vw; height: 22vw;">
        <img src="../../img/camione/camione2.jpg" class="img-fluid h-100 w-100" style="object-fit: cover;">                  
        </div>
        <div class="d-flex justify-content-center align-items-center">
        <h5>locomotora</h5>
        </div>
    </div>
    



    </div>
    </div>




    </div>
    </div>
    </div>-->

  <!-- SECTION -->
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <!-- section title -->
        <div class="col-md-12">
          <div class="section-title">
            <h3 class="title">Top en Ventas</h3>
            <!--<div class="section-nav">
                        <ul class="section-tab-nav tab-nav">
                            <li class="active"><a data-toggle="tab" href="#tab2">Motores</a></li>
                            <li><a data-toggle="tab" href="#tab2">Ferraris</a></li>
                            <li><a data-toggle="tab" href="#tab2">Lamborgini</a></li>
                            <li><a data-toggle="tab" href="#tab2">Porche 911 Carrera</a></li>
                        </ul>
                    </div>-->
          </div>
        </div>
        <!-- /section title -->

        <!-- Products tab & slick -->
        <div class="col-md-12">
          <div class="row">
            <div class="products-tabs">
              <!-- tab -->
              <div id="tab2" class="tab-pane fade in active">
                <div class="products-slick" data-nav="#slick-nav-2">
                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/carro/carro5.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Carro XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $5980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/carro/carro5.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Carro XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $5980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/carro/carro5.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Carro XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $5980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/carro/carro5.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Carro XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $5980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/carro/carro5.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Carro XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $5980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/carro/carro5.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Carro XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $5980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/carro/carro5.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Carro XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $5980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/carro/carro5.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Carro XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $5980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->

                  <!-- product -->
                  <div class="product">
                    <div class="product-img">
                      <img src="../../img/carro/carro5.jpeg" alt="" />
                      <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="nuevo">Nuevo</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">Carros</p>
                      <h3 class="product-name"><a href="#">Carro XXX nuevo</a></h3>
                      <h4 class="product-price">
                        $5980.00 <del class="product-old-price">$10990.00</del>
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
                    <div class="add-to-cart">
                      <button class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i>Comprar
                      </button>
                    </div>
                  </div>
                  <!-- /product -->
                </div>
                <div id="slick-nav-2" class="products-slick-nav"></div>
              </div>
              <!-- /tab -->
            </div>
          </div>
        </div>
        <!-- /Products tab & slick -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
  <!-- /SECTION -->

  <!-- SECTION -->
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="col-md-7 col-xs-7">
          <div class="section-title">
            <h4 class="title">Top Ventas</h4>
          </div>

          <div class="products-widget-slick" data-nav="#slick-nav-3">
            <div>
              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/carro/carro5.jpeg" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Carro</p>
                  <h3 class="product-name"><a href="#">Carro xxx</a></h3>
                  <h4 class="product-price">
                    $980.00 <del class="product-old-price">$990.00</del>
                  </h4>
                </div>
              </div>
              <!-- /product widget -->

              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/moto/moto3.jpeg" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Moto</p>
                  <h3 class="product-name"><a href="#">Moto lkjalskdjalksdj</a></h3>
                  <h4 class="product-price">
                    $9180.00 <del class="product-old-price">$92290.00</del>
                  </h4>
                </div>
              </div>
              <!-- /product widget -->

              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/camione/camion6.png" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Camion</p>
                  <h3 class="product-name"><a href="#">Mionn ñ{kldfa}</a></h3>
                  <h4 class="product-price">
                    $980asd.00 <del class="product-old-price">$123990.00</del>
                  </h4>
                </div>
              </div>
              <!-- product widget -->
            </div>

            <div>
              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/carro/carro5.jpeg" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Carro</p>
                  <h3 class="product-name"><a href="#">Carro xxx</a></h3>
                  <h4 class="product-price">
                    $980.00 <del class="product-old-price">$990.00</del>
                  </h4>
                </div>
              </div>
              <!-- /product widget -->

              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/moto/moto3.jpeg" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Moto</p>
                  <h3 class="product-name"><a href="#">Moto lkjalskdjalksdj</a></h3>
                  <h4 class="product-price">
                    $9180.00 <del class="product-old-price">$92290.00</del>
                  </h4>
                </div>
              </div>
              <!-- /product widget -->

              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/camione/camion6.png" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Camion</p>
                  <h3 class="product-name"><a href="#">Mionn ñ{kldfa}</a></h3>
                  <h4 class="product-price">
                    $980asd.00 <del class="product-old-price">$123990.00</del>
                  </h4>
                </div>
              </div>
              <!-- product widget -->
            </div>
          </div>
        </div>
        <div class="col-md-5 col-xs-5">
          <div class="section-title">
            <h4 class="title">Top Ventas</h4>
          </div>

          <div class="products-widget-slick" data-nav="#slick-nav-3">
            <div>
              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/carro/carro5.jpeg" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Carro</p>
                  <h3 class="product-name"><a href="#">Carro xxx</a></h3>
                  <h4 class="product-price">
                    $980.00 <del class="product-old-price">$990.00</del>
                  </h4>
                </div>
              </div>
              <!-- /product widget -->

              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/moto/moto3.jpeg" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Moto</p>
                  <h3 class="product-name"><a href="#">Moto lkjalskdjalksdj</a></h3>
                  <h4 class="product-price">
                    $9180.00 <del class="product-old-price">$92290.00</del>
                  </h4>
                </div>
              </div>
              <!-- /product widget -->

              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/camione/camion6.png" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Camion</p>
                  <h3 class="product-name"><a href="#">Mionn ñ{kldfa}</a></h3>
                  <h4 class="product-price">
                    $980asd.00 <del class="product-old-price">$123990.00</del>
                  </h4>
                </div>
              </div>
              <!-- product widget -->
            </div>

            <div>
              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/carro/carro5.jpeg" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Carro</p>
                  <h3 class="product-name"><a href="#">Carro xxx</a></h3>
                  <h4 class="product-price">
                    $980.00 <del class="product-old-price">$990.00</del>
                  </h4>
                </div>
              </div>
              <!-- /product widget -->

              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/moto/moto3.jpeg" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Moto</p>
                  <h3 class="product-name"><a href="#">Moto lkjalskdjalksdj</a></h3>
                  <h4 class="product-price">
                    $9180.00 <del class="product-old-price">$92290.00</del>
                  </h4>
                </div>
              </div>
              <!-- /product widget -->

              <!-- product widget -->
              <div class="product-widget">
                <div class="product-img">
                  <img src="../../img/camione/camion6.png" alt="" />
                </div>
                <div class="product-body">
                  <p class="product-category">Camion</p>
                  <h3 class="product-name"><a href="#">Mionn ñ{kldfa}</a></h3>
                  <h4 class="product-price">
                    $980asd.00 <del class="product-old-price">$123990.00</del>
                  </h4>
                </div>
              </div>
              <!-- product widget -->
            </div>
          </div>
        </div>
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
  <!-- /SECTION -->

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
    <!-- Copyright -->
  </footer>
</template>
<style scoped>
.buttoms_x {
  padding: 13px 12px 16px !important;
}
/*
#titulo {
      font-size: 27px; 
}*/

@media (max-width: 768px) {
  #titulo {
    font-size: 20px; /* Tamaño de fuente para pantallas más pequeñas */
  }
}

@media (max-width: 480px) {
  #titulo {
    font-size: 13px; /* Tamaño de fuente para pantallas aún más pequeñas */
  }
}

.carousel-img {
  max-height: 50vh;
  width: auto;
  margin: 0 auto;
  display: block;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './container/navBar.vue';

let show = ref(false);

function toggle() {
  if (!show.value) {
    show.value = true;
    console.log(show.value);
  } else {
    show.value = false;
    console.log(show.value);
  }
}
</script>
