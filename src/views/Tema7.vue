<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Titulo de primer nivel
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema7/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este proceso se realiza con el fin de controlar la información de la garantía sobre los sistemas tecnológicos utilizados, en donde los proveedores de cada producto deben tenerlo como prueba para la reparación o el reemplazo de la pieza. Existen para las TI diferentes garantías ya sea por #[em hardware] o #[em software.]  
          br
          br
          |Para el #[em software] se busca editar el sistema o reemplazarlo frente a cualquier amenaza o daño, de forma oportuna. Dentro de cada marca que funciona como proveedor para la empresa o usuario, tienen un software de garantía, permitiendo hacer un seguimiento al cliente cuando notifica una falla y así atenderla de manera rápida y efectiva. Efectivamente, existe un tiempo limitado para prestar el servicio, el cual puede ser modificado antes de que se venza. 
    p.mb-5(data-aos='fade-right') La garantía se compara con un contrato, ya que indica el funcionamiento, la capacidad que tiene el producto y la condición sobre la que el proveedor siempre responderá. La importancia de utilizar estos gestores de garantía se evidencian porque permiten llevar un seguimiento de todos los detalles sobre una reclamación, por ejemplo, y así aprovechar las oportunidades de protección.  
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #FAEFE2")
          p Estimado aprendiz, hemos llegado al final de este componente formativo. Esperamos que continúe recorriendo este camino lleno de aprendizajes. Recuerde explorar los recursos que se encuentran disponibles. Diríjase al menú principal en donde encontrará la síntesis del tema abordado, una actividad didáctica, material complementario, entre otros. 

</template>

<script>
export default {
  name: 'Tema7',
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
