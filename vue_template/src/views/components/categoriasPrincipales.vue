<template>
  <div class="anuncios" id="ex-with-icons-content">
    <!-- MOTO -->
    <div class="anuncio-moto"
    >
        <div class="anuncio-cart">
            <div class="anuncio-moto-title" style="">
              <h2 class="anuncio-title">
                !busca, compra y recibe en tu lugar de preferencia!
              </h2>
              <p >vive una nueva experiencia en la compra de repuestos.</p>
              <a class="anuncio-btn" href="#">Comprar !!!</a>
            </div>
        </div>
      <div id="hot-deal" class="section-moto"></div>
    </div>
    <!-- /MOTO -->
  </div>
  <!-- /Tabs content -->
</template>

<style scoped>
.anuncio-cart{
    height: 240px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
}

.anuncio-moto-title{
    color: #fff;
    width: 85vw;
}

.section-moto {
    padding: 120px 0px;
    background-color: #E4E7ED;
    background-image: url(../../img/moto/moto8.jpg);
    background-position: center;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
}

.anuncio-title{
    font-size: calc(1.325rem + .9vw);
    text-transform: uppercase;
    font-weight: 500;
}

.anuncio-btn{
    margin-top: 1rem;
    display: inline-block;
    padding: 12px 30px;
    background-color: #0078d4;
    border: none;
    border-radius: 40px;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    font-size: .875rem;
    line-height: 1.3;
}


.anuncio-btn:hover {
    color: #fff;
    background-color: #0062ae;
    border-color: #0062ae;
}
.anuncio-btn:active {
    color: #fff;
    background-color: #003e6e;
    border-color: #003e6e;
}

@media screen and (min-width: 1200px) {
    .anuncio-title{
        font-size: 2rem ;
    }
}
</style>
