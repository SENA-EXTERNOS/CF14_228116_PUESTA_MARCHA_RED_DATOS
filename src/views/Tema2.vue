<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso de certificación de redes
    p.mb-5(data-aos='fade-right') Dentro de cada proceso de certificación de redes de datos, se pueden presentar posibles causas que generan inconvenientes, ya sea para transmitir o transportar los paquetes de información, como se muestra a continuación:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        img(src='@/assets/curso/temas/tema2/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-6.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/2.png', alt='')
      .col-lg-6(data-aos="fade-left")
        .cajon-b.color-primario.p-3.mb-5.abajo-derecha
          p.mb-0 Para dar solución a estos inconvenientes, es importante utilizar los servicios de una empresa especializada en realizar este tipo de acciones, con el fin de que haga las instalaciones verificando el cumplimiento de las normativas a través de equipos de certificación, permitiendo así diagnosticar de forma segura y garantizando los estándares de calidad.
            br
            br
            |Una vez ejecutados los resultados de certificación del cableado, se tiene como resultado la calidad de la instalación a partir de la verificación de todos los puntos conectados. Sin embargo, cuando hay fallos ocasionados en la red, debido a los problemas de instalación e incluso a la mala calidad de los materiales, el departamento encargado de realizar esta evaluación, entregará el reporte, en el cual notificará al usuario de las posibles fallas y cómo podría solucionarlas. Una vez resuelto lo anterior, deberán realizar nuevamente las comprobaciones necesarias para recibir la certificación.
</template>

<script>
export default {
  name: 'Tema2',
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
