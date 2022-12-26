<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .cajon-texto.mb-5.p-3
      .cajon-texto__img: img(src='@/assets/curso/temas/intro/1.png', alt='')
      .cajon-texto__text.p-4.mb-5
        p Estimado aprendiz, en este componente formativo identificará la importancia que tiene el correcto montaje en una empresa de una infraestructura de tecnologías IT que permita el manejo de la información a través de la red de datos, ya que esto implica una mejor confiabilidad a la hora de utilizar la información que resguarda dicho sistema, partiendo de que en la actualidad sorprende la cantidad de estrategias que utilizan para violar la seguridad en la red y robar datos. 
          br
          br
          |Para tener éxito en lo anterior, se transitará por el proceso que implica la selección de los materiales requeridos para dicha instalación, el personal requerido para hacerlos y el conocimiento de la normativa y regulación que se debe tener en cuenta previo a la planeación de esta actividad. 
    p.mb-5(data-aos='fade-right') Le invitamos ahora a ver el siguiente video que le ilustrará acerca de la importancia de este componente.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.cajon-texto
  display: flex
  justify-content: flex-end
  position: relative
  align-items: center
  &__img
    position: absolute
    width: 500px
    top: 0
    transform: translateX(10%)
    left: 0
  &__text
    width: 70%
    background-color: rgba(#CFE0EF, 0.9 )
    position: inherit
    right: 0
    top: 0
    transform: translateY(10%)
</style>
