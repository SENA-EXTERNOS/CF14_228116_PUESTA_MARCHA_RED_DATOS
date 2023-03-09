<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estándares de instalación de redes, norma ISO / IEC, norma IEEE, norma ANSI/TIA/EIA
    p.mb-5(data-aos='fade-right') Hasta 1985, no se generaban instalaciones basadas en estándares de calidad, por ejemplo, para realizar los cableados de los sistemas de comunicaciones en el ámbito empresarial. Identificar los tipos de sistemas para esa fecha requería de ciertas características de cableado en el que se utilizaba el transporte de la información.
    //TODO! REQUIERE AJUSTE 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todos estos sistemas requerían #[em mainframes] con terminales y cables con características especiales que variaban dependiendo de la marca y de los equipos que se utilizaban para la época. Con el paso del tiempo, el uso de las tecnologías comenzó a ser masivo para todos los sistemas de información, especialmente para las organizaciones públicas y privadas, partiendo de que se volvió necesario tener instalaciones de tipo, por ejemplo, par trenzado y coaxial para las instalaciones de red de computadoras, así fuera también para circuito cerrado de vigilancia por TV. Cada vez que llegaba una nueva tecnología, era indispensable cambiar el cableado.
    p.mb-5(data-aos='fade-right') En este momento se cuenta con tres tipos de cableado: los genéricos, que son los cables comunes; los que se utilizan en tecnología de “fibra óptica” y “cobre” y los que aplican la clasificación del local (ya sea en hogares o en locales comerciales). 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .resaltado-100
          .cajon-b.color-primario.p-3.mb-5
            p.mb-0  Aparte de los componentes para levantar la red, la normativa es fundamental, llevando a que se desarrollen proyectos resistentes y bien constituidos. 
              br
              br
              |La primera norma es la ISO/IEC, la cual es utilizada por todos los gobiernos para tener control y usos reglamentarios; se adapta a cada región nacional y los grupos que más la utilizan son organismos de certificación, laboratorios de ensayo y usuarios, fabricantes y organizaciones comerciales.
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/2.png', alt='')
    p.mb-5(data-aos='fade-right') La norma ISO/IEC tiene en cuenta lo siguiente: 

    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        TabsA.color-acento-contenido
          .tarjeta.p-4(titulo="Especificaciones <br>de producto" style="background-color: #DBEDFD")
            p.mb-0 “Estos documentos a menudo pueden abarcar todo y tratar varios requisitos de un producto específico, así como su aptitud para el uso y sus niveles de prestación. Las especificaciones de producto pueden tratar dimensiones, salud y seguridad, protección del medio ambiente, intercambiabilidad y tratamiento de datos.” (s/b)
          .tarjeta.p-4(titulo=" Principios de <br>salud y seguridad" style="background-color: #DBEDFD")
            p.mb-0 “Existen normas que proporcionan principios genéricos de seguridad, de protección y de diseño y evaluación ergonómica.” (s/b)
          .tarjeta.p-4(titulo="Gestión de <br>la organización" style="background-color: #DBEDFD")
            p.mb-0 “Hay una serie de normas ISO que proporcionan a las organizaciones orientación sobre temas de gestión, para ayudarles a implementar buenas prácticas y un sistema de gestión eficaz. Estas normas tratan aspectos clave como son la calidad, la seguridad y la gestión ambiental.” (s/b)
          .tarjeta.p-4(titulo="Etiquetado <br>y embalaje" style="background-color: #DBEDFD")
            p.mb-0 “Numerosas normas tienen por objeto proporcionar información sobre los productos a través del etiquetado. Estas normas garantizan a los consumidores y usuarios del mundo entero información clara y fiable sobre las propiedades de los productos, tales como sus características dimensionales e impacto sobre el medio ambiente. Las normas para la seguridad del embalaje proporcionan información sobre las mejores prácticas relativas a algunos aspectos primordiales tales como embalajes a prueba de niños. Pueden, asimismo, mostrar métodos de buena práctica en áreas como reutilización o almacenamiento.” (s/b)
          .tarjeta.p-4(titulo="Métodos de <br>medición, ensayo <br>y análisist" style="background-color: #DBEDFD")
            p.mb-0 “Existen numerosas normas que especifican métodos de medición, de ensayo y análisis. Estas normas son importantes porque garantizan que los datos de medida y ensayo correspondientes serán comparables en todo el mundo.” (s/b)
          .tarjeta.p-4(titulo="Símbolos gráficos" style="background-color: #DBEDFD")
            p.mb-0 “En las normas ISO e IEC figura una gama exhaustiva de símbolos gráficos acordados internacionalmente (por ej.: ISO 7001:2007 Símbolos gráficos. Símbolos de información al público). El uso de símbolos ayuda a superar las barreras lingüísticas en campos como la seguridad vial o situaciones de emergencia.” (s/b)
          .tarjeta.p-4(titulo="Terminología <br>y definiciones" style="background-color: #DBEDFD")
            p.mb-0 “Algunas normas se dedican exclusivamente a definiciones utilizadas para tratar los obstáculos técnicos al comercio y su eliminación. Normalizan términos y definiciones para facilitar el entendimiento mutuo en diferentes campos.” (s/b)
          .tarjeta.p-4(titulo="Servicios" style="background-color: #DBEDFD")
            p.mb-0 “Cuando se proporcionan servicios, los proveedores tienen que satisfacer las necesidades de sus clientes. ISO e IEC proporcionan normas que definen un nivel de servicios y/o el procedimiento para prestar el servicio (por ej.: ISO 24510 Actividades de servicio relacionadas con agua potable y el saneamiento. Directrices para la evaluación y la mejora del servicio a los usuarios).” (s/b)
          .tarjeta.p-4(titulo="Personal" style="background-color: #DBEDFD")
            p.mb-0 “Estas normas se ocupan de profesiones y oficios específicos que exigen personas con competencias de orden normativo e informativo. Incluyen las cualificaciones que se requieren, experiencia profesional y niveles de competencia técnica (por ej.: ISO 22222 Planificación financiera personal. Requisitos para los asesores financieros).”
          .tarjeta.p-4(titulo="Evaluación de <br>la conformidad" style="background-color: #DBEDFD")
            p.mb-0 “Estas normas y guías contienen requisitos para los organismos encargados de la evaluación de la conformidad y las actividades correspondientes, incluyendo las declaraciones de conformidad de los proveedores, la inspección, la certificación, la acreditación, la evaluación entre pares y el reconocimiento mutuo.” (s/b)
      .col-lg-3.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/4.png', alt='')
    
    p.mb-5(data-aos='fade-right') La segunda norma es la IEEE, la cual significa #[em Institute of Electrical of Engineers.] Dicho instituto es el lugar donde se desarrollan todos los estándares de las redes de datos. En esos lineamientos se describen las funciones que cumplen cada norma para utilizar en el tramo de la instalación, ya sea en una compañía u hogar.

      |A continuación, se describen todas las normas IEEE que existen y que actualmente presentan novedades de su respectivo uso:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/3.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        .acordion-ajuste
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul-oscuro")
            div(titulo="IEEE 802.1")
              p.mb-0 “Define la relación entre los estándares 802 del IEEE y el Modelo de Referencia para Interconexión de Sistemas Abiertos (OSI) de la ISO (Organización Internacional de Estándares). Por ejemplo, este comité definió direcciones para estaciones LAN de 48 bits para todos los estándares 802, de modo que cada adaptador puede tener una dirección única. Los vendedores de tarjetas de interfaz de red están registrados y los tres primeros bytes de la dirección son asignados por el IEEE. Cada vendedor es entonces responsable de crear una dirección única para cada uno de sus productos.” (s/c)
            div(titulo="802.1d")
              p.mb-0 Es el estándar de IEEE para bridges MAC (puentes MAC), que incluye bridging (técnica de reenvío de paquetes que usan los switches), el protocolo spanning tree y el funcionamiento de redes 802.11, entre otros. También impide que los bucles se formen cuando los puentes o los interruptores están interconectados a través de varias rutas. El algoritmo BPDU logra mediante el intercambio de mensajes con otros switches para detectar bucles y, a continuación, elimina el bucle por el cierre de puente seleccionado interfaces. Este algoritmo garantiza que hay una y sólo una ruta activa entre dos dispositivos de red. (s/d)
            div(titulo="802.1p")
              p.mb-0 Asignación de prioridades de tráfico en las redes de datos.
            div(titulo="802.1q")
              p.mb-0 “Virtual Local Area Networks (VLAN)
                br
                |El protocolo IEEE 802.1Q, también conocido como dot1Q, fue un proyecto del grupo de trabajo 802 de la IEEE para desarrollar un mecanismo que permita a múltiples redes compartir de forma transparente el mismo medio físico, sin problemas de interferencia entre ellas (trunking). Es también el nombre actual del estándar establecido en este proyecto y se usa para definir el protocolo de encapsulamiento usado para implementar este mecanismo en redes Ethernet. Todos los dispositivos de interconexión que soportan VLAN deben seguir la norma IEEE 802.1Q que especifica con detalle el funcionamiento y administración de redes virtuales. *Shortest Path Bridging (SPB) Incorporado al IEEE 802.1Q-2014” (s/e)
            div(titulo="802.1x")
              p.mb-0 “Autenticación en redes LAN
                br
                |La IEEE 802.1X es una norma del IEEE para el control de acceso a red basada en puertos. Es parte del grupo de protocolos IEEE 802 (IEEE 802.1). Permite la autenticación de dispositivos conectados a un puerto LAN, estableciendo una conexión punto a punto o previniendo el acceso por ese puerto si la autenticación falla. Es utilizado en algunos puntos de acceso inalámbricos cerrados y se basa en el protocolo de autenticación extensible (EAP– RFC 2284). El RFC 2284 ha sido declarado obsoleto en favor del RFC 3748.” (s/f)
            div(titulo="802.1aq")
              p.mb-0 “Shortest Path Bridging (SPB)
                br
                |Shortest Path Bridging (SPB), especificado en el estándar IEEE 802.1aq, es una tecnología de red que posibilita el Multipath routing.123
                br
                br
                |SPB surgió como reemplazo de los antiguos protocolos spanning tree, que sirvieron para evitar caminos redundantes que pudiesen tener swtiching loop y evitar así tormentas de tramas. Mientras que SPB permite tener activas todas las rutas con caminos de igual coste, lo que conlleva una mayor escalabilidad a nivel 24 aportando una mayor velocidad de convergencia y mejorando la eficiencia gracias a un incremento del ancho de banda y permitiendo al tráfico un reparto de carga a través de todos los caminos de una topología en malla. Está diseñado para eliminar el error humano durante la configuración, preservando así la naturaleza plug-and-play que estableció Ethernet como protocolo por defecto de nivel 2.” (s/g)
            div(titulo="IEEE 802.2")
              p.mb-0 “Control de enlace lógico (LLC)	
                br
                |Control de enlaces lógicos. Define el protocolo de control de enlaces lógicos (LLC) del IEEE, el cual asegura que los datos sean transmitidos de forma confiable por medio del enlace de comunicación. La capa de Datos-Enlace en el protocolo OSI está subdividida en las subcapas de Control de Acceso a Medios (MAC) y de Control de Enlaces Lógicos (LLC). En puentes, estas dos capas sirven como un mecanismo de switcheo modular, como se muestra en la figura I-5. El protocolo LLC es derivado del protocolo de Alto nivel para Control de Datos-Enlaces (HDLC) y es similar en su operación. Nótese que el LLC provee las direcciones de Puntos de Acceso a Servicios (SAP's), mientras que la subcapa MAC provee la dirección física de red de un dispositivo. Las SAP's son específicamente las direcciones de una o más procesos de aplicaciones ejecutándose en una computadora o dispositivo de red.”  (s/c)
            div(titulo="IEEE 802.3")
              p.mb-0  “CSMA / CD (ETHERNET)
                br
                |Redes CSMA/CD. El estándar 802.3 del IEEE (ISO 8802-3), que define cómo opera el método de Acceso Múltiple con Detección de Colisiones (CSMA/CD) sobre varios medios. El estándar define la conexión de redes sobre cable coaxial, cable de par trenzado y medios de fibra óptica. La tasa de transmisión original es de 10 Mbits/seg, pero nuevas implementaciones transmiten arriba de los 100 Mbits/seg calidad de datos en cables de par trenzado.” (s/c)
            div(titulo="IEEE 802.3a")
              p.mb-0 Ethernet delgada 10Base2.
            div(titulo="IEEE 802.3c")
              p.mb-0 Especificaciones de Repetidor en Ethernet a 10 Mbps.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.col-8(data-aos="fade-right")
        .acordion-ajuste
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul-oscuro")
            div(titulo="IEEE 802.3i")
              p.mb-0 Ethernet de par trenzado 10BaseT.
            div(titulo="IEEE 802.3j")
              p.mb-0 Ethernet de fibra óptica 10BaseF.
            div(titulo="IEEE 802.3u")
              p.mb-0 Fast Ethernet 100BaseT.
            div(titulo="IEEE 802.3z")
              p.mb-0 Gigabit Ethernet parámetros para 1000 Mbps.
            div(titulo="IEEE 802.3ab")
              p.mb-0 Gigabit Ethernet sobre 4 pares de cable UTP Cat5e o superior.	
            div(titulo="IEEE 802.3ad")
              p.mb-0 LACP o Agregación de enlaces.
            div(titulo="IEEE 802.3ae")
              p.mb-0 10 Gigabit Ethernet.
            div(titulo="IEEE 802.4")
              p.mb-0 “Redes token bus. El estándar token bus define esquemas de red de anchos de banda grandes, usados en la industria de manufactura. Se deriva del Protocolo de Automatización de Manufactura (MAP). La red implementa el método token-passing para una transmisión bus. Un token es pasado de una estación a la siguiente en la red y la estación puede transmitir manteniendo el token. Los tokens son pasados en orden lógico basado en la dirección del nodo, pero este orden puede no relacionar la posición física del nodo como se hace en una red token ring. El estándar no es ampliamente implementado en ambientes LAN.” (s/c)
            div(titulo="IEEE 802.5")
              p.mb-0 “#[em Token ring LAN] (topología en anillo)
                br
                |Redes token ring. También llamado ANSI 802.1-1985, define los protocolos de acceso, cableado e interfaz para la LAN token ring. IBM hizo popular este estándar. Usa un método de acceso de paso de tokens y está físicamente conectada en topología estrella, pero lógicamente forma un anillo. Los nodos son conectados a una unidad de acceso central (concentrador) que repite las señales de una estación a la siguiente. Las unidades de acceso son conectadas para expandir la red, que amplía el anillo lógico. La Interfaz de Datos en Fibra Distribuida (FDDI) fue basada en el protocolo token ring 802.5, pero fue desarrollado por el Comité de Acreditación de Estándares (ASC) X3T9. Es compatible con la capa 802.2 de Control de Enlaces Lógicos y por consiguiente otros estándares de red 802.” (s/c)
            div(titulo="IEEE 802.6")
              p.mb-0 “Redes de Área Metropolitana (MAN) (ciudad) (fibra óptica)
                br
                |Redes de Área Metropolitana (MAN). Define un protocolo de alta velocidad donde las estaciones enlazadas comparten un bus dual de fibra óptica usando un método de acceso llamado Bus Dual de Cola Distribuida (DQDB). El bus dual provee tolerancia de fallos para mantener las conexiones si el bus se rompe. El estándar MAN está diseñado para proveer servicios de datos, voz y vídeo en un área metropolitana de aproximadamente 50 kilómetros a tasas de 1.5, 45, y 155 Mbits/seg. DQDB es el protocolo de acceso subyacente para el SMDS (Servicio de Datos de Multimegabits Switcheados), en el que muchos de los portadores públicos son ofrecidos como una manera de construir redes privadas en áreas metropolitanas. El DQDB es una red repetidora que switchea celdas de longitud fija de 53 bytes; por consiguiente, es compatible con el Ancho de Banda ISDN y el Modo de Transferencia Asíncrona (ATM). Las celdas son switcheables en la capa de Control de Enlaces Lógicos.” (s/c)
      .col-lg-4.mb-lg-0(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/5.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/3.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        .acordion-ajuste
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul-oscuro")
            div(titulo="IEEE 802.7")
              p.mb-0  Grupo Asesor en Banda ancha.
            div(titulo="IEEE 802.8")
              p.mb-0  Grupo Asesor Técnico de Fibra Óptica. Provee consejo a otros subcomités en redes por fibra óptica como una alternativa a las redes basadas en cable de cobre. Los estándares propuestos están todavía bajo desarrollo.” (s/c)
            div(titulo="IEEE 802.9")
              p.mb-0 “Servicios Integrados de red de Área Local (redes con voz y datos integrados)
                br
                |Redes Integradas de Datos y Voz. El grupo de trabajo del IEEE 802.9 trabaja en la integración de tráfico de voz, datos y vídeo para las LAN 802 y Redes Digitales de Servicios Integrados (ISDN's). Los nodos definidos en la especificación incluyen teléfonos, computadoras y codificadores/decodificadores de vídeo (codecs). La especificación ha sido llamada Datos y Voz Integrados (IVD). El servicio provee un flujo multiplexado que puede llevar canales de información de datos y voz conectando dos estaciones sobre un cable de cobre en par trenzado. Varios tipos de diferentes de canales son definidos, incluyendo full duplex de 64 Kbits/seg sin switcheo, circuito switcheado o canales de paquete switcheado.” (s/c)
            div(titulo="IEEE 802.10")
              p.mb-0 “Seguridad de red
                br
                |Grupo Asesor Técnico de Seguridad en Redes. Este grupo está trabajando en la definición de un modelo de seguridad estándar que opera sobre una variedad de redes e incorpora métodos de autenticación y encriptamiento. Los estándares propuestos están todavía bajo desarrollo en este momento.” (s/c)
            div(titulo="IEEE 802.11")
              p.mb-0  “Redes inalámbricas WLAN. (Wi-Fi)
                br
                |Redes inalámbricas. Este comité está definiendo estándares para redes inalámbricas. Está trabajando en la estandarización de medios como el radio de espectro de expansión, radio de banda angosta, infrarrojo, y transmisión sobre líneas de energía. Dos enfoques para redes inalámbricas se han planeado. En el enfoque distribuido, cada estación de trabajo controla su acceso a la red. En el enfoque de punto de coordinación, un hub central enlazado a una red alámbrica controla la transmisión de estaciones de trabajo inalámbricas.” (s/c)
            div(titulo="IEEE 802.12")
              p.mb-0  “Acceso de Prioridad por demanda 100 Base VG-Any Lan
                br
                |Prioridad de Demanda (100VG-ANYLAN). Este comité está definiendo el estándar Ethernet de 100 Mbits/seg. Con el método de acceso por Prioridad de Demanda propuesto por Hewlett Packard y otros vendedores. El cable especificado es un par trenzado de 4 alambres de cobre y el método de acceso por Prioridad de Demanda usa un hub central para controlar el acceso al cable. Hay prioridades disponibles para soportar envío en tiempo real de información multimedia.” (s/c)
            div(titulo="IEEE 802.13")
              p.mb-0  Se ha evitado su uso por superstición 2.
            div(titulo="IEEE 802.14")
              p.mb-0  “Módems de cable	
                br
                |Fue un grupo de trabajo creado por el comité IEEE 802 a mediados de los años 90 para desarrollar un estándar basado en ATM. Sin embargo, el grupo de trabajo fue disuelto cuando múltiples operadoras multisistema (MSOs) empezó a apoyar por aquel entonces la incipiente creación de la especificación DOCSIS 1.0, que utiliza por lo general un mejor servicio y estaba basada en IP (con puntos de código de extensión para apoyar ATM para QoS en el futuro).” (s/h)
            div(titulo="IEEE 802.15")
              p.mb-0  “WPAN (Bluetooth)
                br
                |Es un grupo de trabajo dentro de IEEE 802 especializado en redes inalámbricas de área personal (wireless personal area networks, WPAN). Se divide en 10 áreas de trabajo, aunque no todas están activas actualmente. El número de grupos de trabajo varía dependiendo del número de proyectos activos. La lista completa de proyectos activos está disponible en la web de IEEE 802.15.” (s/i)
            div(titulo="IEEE 802.16")
              p.mb-0  “Redes de acceso metropolitanas sin hilos de banda ancha (WIMAX)	
                br
                |Es una serie de estándares inalámbricos de banda ancha publicados por el Institute of Electrical and Electronics Engineers IEEE (Instituto de Ingenieros Eléctricos y Electrónicos). Se trata de una especificación para las redes de acceso metropolitanas inalámbricas de banda ancha fijas (no móvil) publicada inicialmente el 8 de abril de 2002. En esencia recoge el estándar de facto WiMAX.” (s/j)
    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.col-8(data-aos="fade-right")
        .acordion-ajuste
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul-oscuro")
            div(titulo="IEEE 802.17")
              p.mb-0 “Anillo de paquete elástico script
                br
                |#[em Resilient Packet Ring] (RPR), también conocido como IEEE 802.17, es un estándar diseñado para el transporte óptimo de datos en redes de anillo de fibra óptica. Está diseñada para proporcionar la resistencia encontrada en redes SONET/SDH (50 ms protección) pero, en lugar de establecer conexiones de circuitos orientados, proporciona una transmisión basada en paquetes, para incrementar la eficiencia de Ethernet y servicios IP.” (s/k)
            div(titulo="IEEE 802.18")
              p.mb-0 Grupo de Asesoría Técnica sobre Normativas de Radio.
            div(titulo="IEEE 802.19")
              p.mb-0 Grupo de Asesoría Técnica sobre Coexistencia.	
            div(titulo="IEEE 802.20")
              p.mb-0.fst-italic Mobile Broadband Wireless Access.
            div(titulo="IEEE 802.21")
              p.mb-0.fst-italic Media Independent Handoff.	
            div(titulo="IEEE 802.22")
              p.mb-0.fst-italic Wireless Regional Area Network.
      .col-lg-4.mb-lg-0(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/5.svg', alt='')
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
