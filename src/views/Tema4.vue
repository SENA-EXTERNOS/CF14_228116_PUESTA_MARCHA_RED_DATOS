<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estándares de certificación
    p.mb-5(data-aos='fade-right') En este punto se describirán las versiones actualizaciones y adiciones que han ido presentando con el paso del tiempo todas las normas Estándar ANSI/TIA/EIA-568-A, Estándar ANSI/TIA/EIA-568-B y Estándar ANSI/TIA/EIA-568-C.
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .acordion-ajuste
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul-oscuro")
            div(titulo="ANSI/TIA/EIA 568-A ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard.]
              .d-flex.justify-content-end
                p.fw-bold Octubre de 1995
            div(titulo="ANSI/TIA/EIA 568-A-1 ")
              p.mb-0 #[em Propagation Delay and Delay Skew Specifications for 100 ohm 4-pair Cable.]
              .d-flex.justify-content-end
                p.fw-bold Septiembre de 1997
            div(titulo="ANSI/TIA/EIA 568-A-2 ")
              p.mb-0 #[em Corrections and Additions to TIA/EIA-568-A.]
              .d-flex.justify-content-end
                p.fw-bold Agosto de 1998
            div(titulo="ANSI/TIA/EIA 568-A-3 ")
              p.mb-0 #[em Hybrid Cables.  ]
              .d-flex.justify-content-end
                p.fw-bold Diciembre de 1998
            div(titulo="ANSI/TIA/EIA 568-A-4 ")
              p.mb-0 #[em Production Modular Cord NEXT Loss Test Meted and Requirements for UTP Cabling. ]
              .d-flex.justify-content-end
                p.fw-bold Diciembre de 1999
            div(titulo="ANSI/TIA/EIA 568-A-5 ")
              p.mb-0 #[em Transmission Performance Specifications for 4-pair 100 ohm Category 5e Cabling.  ]
              .d-flex.justify-content-end
                p.fw-bold Enero de 2000
            div(titulo="ANSI/TIA/EIA 568-B.1 ")
              p.mb-0 #[em Propagation Delay and Commercial Building Telecommunications Cabling Standard, Part 1: General Requirements. Delay Skew Specifications for 100 ohm 4-pair Cable.]
              .d-flex.justify-content-end
                p.fw-bold Abril de 2001
            div(titulo="ANSI/TIA/EIA 568-B.1-1 ")
              p.mb-0 #[em Telecommunications Cabling Standard, Part 1: General Requirements - Addendum 1 - Minimum 4- Pair UTP and 4-Pair ScTP Patch Cable Bend Radius.  ]
              .d-flex.justify-content-end
                p.fw-bold Mayo de 2001
            div(titulo="ANSI/TIA/EIA 568-B.1-2 ")
              p.mb-0 #[em Telecommunications Cabling Standard, Part 1:  General Requirements - Addendum 2 - Grounding and Bonding Requirements for Screened Balanced Twisted-Pair Horizontal Cabling.  ]
              .d-flex.justify-content-end
                p.fw-bold Febrero de 2003
            div(titulo="ANSI/TIA/EIA 568-B.1-3 ")
              p.mb-0 #[em Telecommunications Cabling Standard, Part 1: General Requirements - Addendum 3 - Supportable Distances and Channel Attenuation for Optical Fiber Applications by Fiber Type.  ]
              .d-flex.justify-content-end
                p.fw-bold Febrero de 2003
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .acordion-ajuste
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul-oscuro")
            div(titulo="ANSI/TIA/EIA 568-B.1-4  ")
              p.mb-0 #[em Telecommunications Cabling Standard, Part 1: General Requirements - Addendum 4 - Recognition of Category 6 and 850 nm Laser-Optimized 50/125  μm Multimode Optical Fiber Cabling.   ]
              .d-flex.justify-content-end
                p.fw-bold Febrero de 2003 
            div(titulo="ANSI/TIA/EIA 568-B.1-5  ")
              p.mb-0 #[em Telecommunications Cabling Standard, Part 1: General Requirements - Addendum 5 Telecommunications Cabling for Telecommunications Enclosures.  ]
              .d-flex.justify-content-end
                p.fw-bold Marzo de 2004 
            div(titulo="ANSI/TIA/EIA 568-B.1-7  ")
              p.mb-0 #[em Telecommunications Cabling Standard, Part 1:  General Requirements - Addendum 7 - Guidelines for Maintaining Polarity Using Array Connectors.  ]
              .d-flex.justify-content-end
                p.fw-bold Enero de 2006 
            div(titulo="ANSI/TIA/EIA 568-B.2  ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard - Part 2: Balanced Twisted Pair Cabling Components.   ]
              .d-flex.justify-content-end
                p.fw-bold Mayo de 2001 
            div(titulo="ANSI/TIA/EIA 568-B.2-1  ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard, Part 2 Addendum 1 - Transmission Performance Specifications for 4-Pair 100 Ohm Category 6 Cabling.  ]
              .d-flex.justify-content-end
                p.fw-bold Junio de 2002 
            div(titulo=" ANSI/TIA/EIA 568-B.2-2 ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard - Part 2: Balanced Twisted-Pair Cabling Components – Addendum 2.  ]
              .d-flex.justify-content-end
                p.fw-bold Diciembre de 2001 
            div(titulo="ANSI/TIA/EIA 568-B.2-3  ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard - Part 2: Balanced Twisted-Pair Cabling -Addendum 3 – Additional Considerations for Insertion Loss and Return Loss Pass/Fail Determination. ]
              .d-flex.justify-content-end
                p.fw-bold Marzo de 2002 
            div(titulo="ANSI/TIA/EIA 568-B.2-4  ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard - Part 2: Balanced Twisted Pair Components - Addendum 4 - Solderless Connection Reliability Requirements for Copper Connecting Hardware.   ]
              .d-flex.justify-content-end
                p.fw-bold Junio de 2002 
            div(titulo=" ANSI/TIA/EIA 568-B.2-5  ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard - Part 2: Balanced Twisted Pair Components - Addendum 5 - Corrections to TIA/EIA 568-B.2.   ]
              .d-flex.justify-content-end
                p.fw-bold Enero de 2003 
            div(titulo=" ANSI/TIA/EIA 568-B.2-6 ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard - Part 2: Balanced Twisted Pair Components - Addendum 6 - Category 6 Related Component Test Procedures.   ]
              .d-flex.justify-content-end
                p.fw-bold Diciembre de 2003 
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/2.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .acordion-ajuste
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul-oscuro")
            div(titulo="ANSI/TIA/EIA 568-B.2-7  ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standards Part 2 - Balanced Twisted Pair Cabling Components Addendum 7 - Reliability Requirements for Connecting Hardware used in Balanced TwistedPair Cabling.  ]
              .d-flex.justify-content-end
                p.fw-bold Agosto de 2007 
            div(titulo="ANSI/TIA/EIA 568-B.2-10 ")
              p.mb-0 #[em Transmission Performance Specifications for 4- Pair 100 Ohm Augmented Category 6 Cabling.  ]
              .d-flex.justify-content-end
                p.fw-bold Marzo de 2008 
            div(titulo="ANSI/TIA/EIA 568-B.2-11 ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard - Part 2: Balanced Twisted Pair Components - Addendum 11 - Specification for Increased Diameter of 4-Pair UTP and SCTP Cable.  ]
              .d-flex.justify-content-end
                p.fw-bold Diciembre de 2005 
            div(titulo="ANSI/TIA/EIA 568-B.3 ")
              p.mb-0 #[em Optical Fiber Cabling Components.  ]
              .d-flex.justify-content-end
                p.fw-bold Abril de 2000 
            div(titulo="ANSI/TIA/EIA 568-B.3-1 ")
              p.mb-0 #[em Optical Fiber Cabling Components Standard Addendum 1 - Additional Transmission Performance Specifications for 50/125 um Optical Fiber Cables. ]
              .d-flex.justify-content-end
                p.fw-bold Abril de 2002 
            div(titulo="ANSI/TIA/EIA 568-C.0  ")
              p.mb-0 #[em Generic Telecommunications Cabling for Customer Premises.  ]
              .d-flex.justify-content-end
                p.fw-bold Febrero de 2009 
            div(titulo="ANSI/TIA/EIA 568-C.0  ")
              p.mb-0 #[em Corrección. ]
              .d-flex.justify-content-end
                p.fw-bold Septiembre de 2010 
            div(titulo="ANSI/TIA/EIA 568-C.0  ")
              p.mb-0 #[em Corrección. ]
              .d-flex.justify-content-end
                p.fw-bold Agosto de 2012 
            div(titulo="ANSI/TIA/EIA 568-C.1 ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard.  ]
              .d-flex.justify-content-end
                p.fw-bold Febrero de 2009 
            div(titulo="ANSI/TIA/EIA 568-C.1 ")
              p.mb-0 #[em Corrección.  ]
              .d-flex.justify-content-end
                p.fw-bold Octubre de 2011 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .acordion-ajuste
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul-oscuro")
            div(titulo="ANSI/TIA/EIA 568-C.1 ")
              p.mb-0 #[em Corrección.  ]
              .d-flex.justify-content-end
                p.fw-bold Mayo de 2011 
            div(titulo="ANSI/TIA/EIA 568-C.2 ")
              p.mb-0 #[em Commercial Building Telecommunications Cabling Standard Part 2: Balanced Twisted- Pair Cabling Components.  ]
              .d-flex.justify-content-end
                p.fw-bold Agosto de 2009 
            div(titulo="ANSI/TIA/EIA 568-C.2 ")
              p.mb-0 #[em Corrección.  ]
              .d-flex.justify-content-end
                p.fw-bold Abril de 2010 
            div(titulo="ANSI/TIA/EIA 568-C.3 ")
              p.mb-0 #[em Optical Fiber Cabling Components Standard.  ]
              .d-flex.justify-content-end
                p.fw-bold Junio de 2008 
            div(titulo="ANSI/TIA/EIA 568-C.3 ")
              p.mb-0 #[em Corrección.  ]
              .d-flex.justify-content-end
                p.fw-bold Octubre de 2011 
            div(titulo="ANSI/TIA/EIA 568-C.4 ")
              p.mb-0 #[em Broadband Coaxial Cabling and Components Standard. ]
              .d-flex.justify-content-end
                p.fw-bold Julio de 2011 
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/2.png', alt='')
    p.mb-5(data-aos='fade-right') Para solicitar el proceso de certificación de una red, se deben seguir los siguientes pasos: 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        TabsA.color-acento-contenido.mb-5
          .tarjeta.p-4(titulo="Paso 1" style="background-color: #DBEDFD")
            p.mb-0 Contactar la entidad que se encargará de iniciar el proceso de certificación.
          .tarjeta.p-4(titulo="Paso 2 " style="background-color: #DBEDFD")
            p.mb-0 Recibe la propuesta, donde especifican los costos y el tiempo estimado para la auditoría formal.
          .tarjeta.p-4(titulo="Paso 3" style="background-color: #DBEDFD")
            p.mb-0 Conocer el equipo de auditoría, la empresa que realizará la certificación presentará quién será el auditor.
          .tarjeta.p-4(titulo="Paso 4" style="background-color: #DBEDFD")
            p.mb-0 Capacitar, es importante realizar talleres o cursos que permita al personal de la empresa llegar al nivel y cumplir con la certificación
          .tarjeta.p-4(titulo="Paso 5" style="background-color: #DBEDFD")
            p.mb-0 Pre-auditoria, este ejercicio permite identificar todas las omisiones y falencias, con el fin de mejorarlas 
          .tarjeta.p-4(titulo="Paso 6" style="background-color: #DBEDFD")
            p.mb-0 Evaluación, va muy relacionado con la norma que la empresa necesita para la certificación.
          .tarjeta.p-4(titulo="Paso 7" style="background-color: #DBEDFD")
            p.mb-0 Certificación, se emiten unos certificados de registros, para detallar el alcance de la certificación.
          .tarjeta.p-4(titulo="Paso 8" style="background-color: #DBEDFD")
            p.mb-0 Cumplimiento, el auditor encargado deberá efectuar las evaluaciones realizadas e indicar las futuras mejoras.
          .tarjeta.p-4(titulo="Paso 9" style="background-color: #DBEDFD")
            p.mb-0 Es muy importante interpretar el estatus de la certificación, las razones por las que es aceptada, rechazada o disminuye el alcance de la certificación.
      .col-lg-4(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/3.png', alt='')
    

</template>

<script>
export default {
  name: 'Tema4',
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
