<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Parámetros y resultados de prueba 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los parámetros de prueba utilizados en los sistemas para trenzado balanceado, cableado estructurado de cobre y pruebas de campo del cableado instalado, han sido definidos en las normas de la industria ISO/IEC 11801:2010 2ª Ed, y ANSI/TIA-568-C.2 
          br
          br
          |Adicionalmente, se tienen en cuenta los requisitos de pruebas de desempeño para los Modelos de Enlace Permanente o Canal clase D, E y F/categoría 5e, 6, 6A y 7, incluyendo los siguientes parámetros especificados: 
    .row.justify-content-center.mb-5
      .col-lg-11
        div(style="background-color: #FEF0C4").p-5
          .row.justify-content-center
            .col-lg-6
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | MAPEO (incluyendo continuidad del blindaje si está presente). 

                li
                  i.fas.fa-angle-right
                  | LONGITUD. 
                li
                  i.fas.fa-angle-right
                  |PÉRDIDA POR INSERCIÓN. 

                li
                  i.fas.fa-angle-right
                  | PARADIAFONÍA (par a par). 

                li
                  i.fas.fa-angle-right
                  | PS NEXT (suma de potencia). 

                li
                  i.fas.fa-angle-right
                  | ACR-N (par a par). 

                li
                  i.fas.fa-angle-right
                  | PS ACR-N (suma de potencias).
            .col-lg-6
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | ACR-F (par a par). 

                li
                  i.fas.fa-angle-right
                  | PS ACR-F (suma de potencia). 

                li
                  i.fas.fa-angle-right
                  | PÉRDIDA POR RETORNO. 

                li
                  i.fas.fa-angle-right
                  | RETARDO DE PROPAGACIÓN. 

                li
                  i.fas.fa-angle-right
                  | SESGO DE RETARDOS. 

                li
                  i.fas.fa-angle-right
                  p.mb-0 RESISTENCIA DE BUCLE D.C. #[em (s/m)] 

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
