<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Con los avances tecnológicos, cada empresa puede disponer de todos los beneficios y servicios de Internet, ya sea un video, buscar información preliminar desde cualquier lugar, incluso acceder a todas las áreas de la empresa que permita tener el control de toda la información. 
      br
      br
      |Para ello es importante contar con una infraestructura que cuente con equipos de hardware y sistemas de software. Partiendo de lo anterior, es fundamental realizar los cambios necesarios y reemplazar el cableado red que con el paso del tiempo presenta inconvenientes y se necesitan cubrir los nuevos requerimientos acorde con la actualización de los equipos de comunicaciones. A continuación, se presenta el mapa mental que describe de forma general toda la temática vista.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
