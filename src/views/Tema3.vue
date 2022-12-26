<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estándares de cableado
    p.mb-5(data-aos='fade-right') Los estándares de cableado permiten regular todos los procesos que tienen relación con la instalación de redes. Para formalizar este proceso, diferentes entidades comienzan a crear documentos que sustentan el qué hacer y cómo hacerlo.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 “La Asociación de Industrias Electrónicas (EIA, Electronic Industries Alliance) y la Asociación de la Industria de las Telecomunicaciones (TIA, Telecommunications Industry Association) son asociaciones de comercio que desarrollan y publican juntas una serie de estándares que abarcan el cableado estructurado de voz y datos para las LAN. Estos estándares de la industria evolucionaron después de la desregulación de la industria telefónica de los EE.UU. en 1984, que transfirió la responsabilidad del cableado de las instalaciones al dueño del edificio. Antes de eso, AT&T utilizaba cables y sistemas propietarios.” (s/n)
    p.mb-5(data-aos='fade-right') Las normas ANSI/EIA/TIA más conocidas y usadas hasta el momento son:
    .acordion-ajuste
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul-oscuro")
        .row(titulo="").justify-content-center
          .col-lg-5 
            p Estándar de cableado para telecomunicaciones en edificios comerciales. Establece los requisitos de los elementos de la red y los medios empleados para la transmisión. Es una norma definida para los EE. UU. pero, en la práctica, se ha asumido a nivel mundial.” (2017, enero 20)
              br
              br
              |De acuerdo con el estándar ANSI/EIA/TIA-568A, cuando se utiliza el conector RJ-45 macho debe llevar un orden específico, tal y cómo se muestra en la imagen. 
          .col-lg-5
            .tabla-editada
              table
                thead
                  tr
                    th Pin #
                    th Par #
                    th Color
                tbody
                  tr
                    td 1
                    td 3
                    td Blanco verde

                  tr
                    td 2
                    td 3
                    td Verde
                  tr
                    td 3
                    td 2
                    td Banco naranja

                  tr
                    td 4
                    td 1
                    td Azul
                  tr
                    td 5
                    td 1
                    td Blanco azul
                  tr
                    td 6
                    td 2
                    td Naranja
                  tr
                    td 7
                    td 4
                    td Blanco marrón
                  tr
                    td 8
                    td 4
                    td Marrón
        .row(titulo="ANSI/EIA/TIA-568B").justify-content-center
          .col-lg-5 
            p Según el estándar ANSI/EIA/TIA-568B, para engastar un cable en el conector macho RJ-45 es como se indica en la imagen.
          .col-lg-5
            .tabla-editada
              table
                thead
                  tr
                    th Pin #
                    th Par #
                    th Color
                tbody
                  tr
                    td 1
                    td 3
                    td Blanco verde

                  tr
                    td 2
                    td 3
                    td Verde
                  tr
                    td 3
                    td 2
                    td Banco naranja

                  tr
                    td 4
                    td 1
                    td Azul
                  tr
                    td 5
                    td 1
                    td Blanco azul
                  tr
                    td 6
                    td 2
                    td Naranja
                  tr
                    td 7
                    td 4
                    td Blanco marrón
                  tr
                    td 8
                    td 4
                    td Marrón
        .row(titulo="ANSI/TIA/EIA-942").justify-content-center
          .col-lg-3
            p “La ANSI/TIA/EIA-942 determina el estándar de infraestructura de telecomunicaciones para centros de datos. Define las características de un centro de datos como un edificio o una parte de edificio dedicados a alojar salas de telecomunicaciones y de equipos de gran envergadura.” (2017, enero 20)
              br
              |Dentro de las características más utilizadas para el diseño de estructuras se describen en las que se encuentran en la siguiente imagen:
          .col-lg-7
            .tabla-editada
              table
                thead
                  tr
                    th Descripción del cable
                    th ISO/IEC-11801
                    th CENELEC EN-50173
                    th ANSI/TIA-568

                tbody
                  tr
                    td Cable cat.3
                    td Soportado clase C
                    td Soportado clase C
                    td Soportado

                  tr
                    td Cable cat.5e
                    td Soportado clase D
                    td Soportado clase D
                    td Soportado

                  tr
                    td Cable cat.6
                    td Soportado clase E
                    td Soportado clase E
                    td Soportado
                  tr
                    td Cable cat.6a
                    td Soportado clase EA
                    td Soportado clase EA
                    td Soportado

                  tr
                    td Cable cat.7
                    td Soportado clase F
                    td Soportado clase F
                    td No reconocido

                  tr
                    td Fibra MM 50/125-62.5/125
                    td Soportado
                    td Soportado
                    td Soportado
                  tr
                    td Fibra IM
                    td Soportado
                    td Soportado
                    td Soportado

                  tr
                    td Fibra OM al área de trabajo
                    td Soportado
                    td Soportado
                    td No soportado

                  tr
                    td Configuración de TO
                    td T568A
                    td T568A
                    td T568A o T568B
        .row(titulo="ANSI/TIA/EIA-569").justify-content-center
          .col-lg-5.mb-lg-0.mb-3 
            p “ANSI/TIA/EIA-569: estándar para espacios y canalizaciones de telecomunicaciones en edificios comerciales. Define la metodología de diseño y construcción en los edificios, y entre estos, para poder integrar en ellos una red de datos y telecomunicaciones.” (2017, enero 20)
          .col-lg-5: img(src='@/assets/curso/temas/tema3/2.svg', alt='' style='width: 350px').m-auto
        .row(titulo="ANSI/TIA/EIA-570").justify-content-center
          .col-lg-5.mb-lg-0.mb-3 
            p “ANSI/TIA/EIA-570: estándar de cableado para telecomunicaciones en edificios residenciales y de pequeños comercios”. (2017, enero 20)
          .col-lg-5: img(src='@/assets/curso/temas/tema3/2.svg', alt='' style='width: 350px').m-auto
        .row(titulo="ANSI/TIA/EIA-606").justify-content-center
          .col-lg-5.mb-lg-0.mb-3 
            p “ANSI/TIA/EIA-606: estándar de administración de la infraestructura de telecomunicaciones en edificios comerciales. Establece el estándar de rotulación del cableado, así como el registro y mantenimiento de la documentación de la red.” (2017, enero 20)
          .col-lg-5: img(src='@/assets/curso/temas/tema3/2.svg', alt='' style='width: 350px').m-auto
        .row(titulo="J-STD-607").justify-content-center
          .col-lg-5.mb-lg-0.mb-3 
            p “J-STD-607: estándar de requisitos de conexión a tierra y conexión de telecomunicaciones en edificios comerciales. Especifica las características de la red de conexión a tierra, así como los sistemas empleados.” (2017, enero 20)
          .col-lg-5: img(src='@/assets/curso/temas/tema3/2.svg', alt='' style='width: 350px').m-auto
            
        

</template>

<script>
export default {
  name: 'Tema3',
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
