export default {
  global: {
    componenteFormativo: 'Puesta en marcha de la red de datos',
    descripcionCurso:
      'En este componente formativo identificará las consideraciones de diseño e implementación para realizar una instalación, para esto se debe tener en cuenta la normativa con el fin de no correr el riesgo de ser sancionados por realizar instalaciones vencidas y posibles fallas técnicas. Adicionalmente, conocerá el diseño que será utilizado dentro de la infraestructura, cumpliendo con los estándares de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Estándares de instalación de redes, Norma ISO / IEC, Norma IEEE',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso de certificación de redes        ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estándares de cableado        ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estándares de certificación        ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Parámetros de prueba        ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Equipos certificadores y resultados de prueba        ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estándares y nuevos componentes del cableado estructurado',
      referencia:
        'Meneses, E. (2014). Estándares y nuevos componentes del cableado estructurado. [Trabajo de grado de Ingeniería de Sistemas, Universidad Autónoma de Bucaramanga, Colombia]      ',
      tipo: 'Artículo      ',
      link:
        'https://repository.unab.edu.co/bitstream/handle/20.500.12749/1284/2014_Tesis_Meneses_Chacon_Eduard_Andrey.pdf?sequence=1',
    },
    {
      tema: 'Cableado estructurado, un estado del arte      ',
      referencia:
        'Osorio, J. M. V. (diciembre de 2016). Cableado Estructurado: Un Estado del Arte. 5. https://doi.org/10.19136/jobs.a5n2.916      ',
      tipo: 'Artículo',
      link:
        'file:///Users/mariaantonialopezrestrepo/Downloads/916-Texto%20del%20art%C3%ADculo-3289-1-10-20150601.pdf      ',
    },
    {
      tema:
        'El abc de la certificación del cableado estructurado para redes de datos',
      referencia:
        'Normas sobre cableado Cayo Urrutia, A. (2020, octubre 21). EL ABC DE LA CERTIFICACIÓN DEL CABLEADO ESTRUCTURADO PARA REDES DE DATOS. ',
      tipo: 'Video      ',
      link:
        'http://repositorio.inictel-uni.edu.pe:8080/xmlui/handle/123456789/108      ',
    },
    {
      tema: 'Aprendiendo por proyectos en escenarios pluritecnológicos',
      referencia:
        'Robles, C. A. R. (2020). Aprendiendo por proyectos en escenarios pluritecnológicos. ',
      tipo: ' Artículo      ',
      link: 'https://acofipapers.org/index.php/eiei/article/view/728/733      ',
    },
  ],
  glosario: [
    {
      termino: 'Cableado:',
      significado:
        'el cableado estructurado consiste en cables de par trenzado protegidos o no protegidos en el interior de un edificio con el propósito de implantar una red de área local.      ',
    },
    {
      termino: 'Conectividad:',
      significado:
        'es la capacidad de un dispositivo de conectarse y comunicarse con otro, con el fin de intercambiar información o establecer una conexión directa a base de información digital.      ',
    },
    {
      termino: 'Estándar',
      significado:
        'tiene su origen etimológico en el vocablo inglés <em>standard</em>. El concepto se utiliza para nombrar aquello que puede tomarse como referencia, patrón o modelo.   ',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'es la parte física de un ordenador o sistema informático. Está formado por componentes eléctricos, electrónicos, electromecánicos y mecánicos, tales como circuitos de cables y luz, placas, memorias, discos duros, dispositivos periféricos y cualquier otro material en estado físico que sea necesario para hacer que el equipo funcione.',
    },
    {
      termino: 'Norma IEEE',
      significado:
        'significa <em>Institute of Electrical of Engineers</em> y más conocido en redes de datos por sus siglas LMSC (LAN/MAN <em>Standards Committee</em>), en donde sus actividades se enfocan en desarrollar todos los estándares de las redes de datos.',
    },
    {
      termino: 'Redes de datos',
      significado:
        'son infraestructuras que han sido creadas para poder transmitir información a través del intercambio de datos. Es decir, son arquitecturas específicas para este fin, cuya base principal es la conmutación de paquetes y que atienden a una clasificación exclusiva, teniendo en cuenta la distancia que es capaz de cubrir su arquitectura física y, por supuesto, el tamaño que presentan.      ',
    },
    {
      termino: 'Sistema',
      significado:
        'del latín <em>systema</em>, un sistema es un módulo ordenado de elementos que se encuentran interrelacionados y que interactúan entre sí. El concepto se utiliza tanto para definir a un conjunto de conceptos como a objetos reales dotados de organización.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'se conoce como <em>software</em>, ​ <i>logicial</i> o soporte lógico al sistema formal de un sistema informático, que comprende el conjunto de los componentes lógicos necesarios que hace posible la realización de tareas específicas, en contraposición a los componentes físicos que son llamados <em>hardware.</em>',
    },
    {
      termino: 'Tecnología',
      significado:
        'hace referencia a las herramientas que son fáciles de usar para la administración e intercambio de la información, desde un principio era utilizada para el desarrollo, ahora es empleada para la resolución de problemas o hacer más fácil las actividades diarias y adaptarse a su entorno.',
    },
    {
      termino: 'Terminales',
      significado:
        'es un dispositivo de <em>hardware</em>, ya sea de naturaleza electromecánica o electrónica, que se puede usar tanto para ingresar como para transcribir información.      ',
    },
  ],
  referencias: [
    {
      referencia: 'Ferrer, V. (s.f). Certificador de Redes. Vincent Ferrer. ',
      link: 'https://vicentferrer.com/certificador-de-redes/        ',
    },
    {
      referencia:
        'Gobierno del Estado de Tabasco. (s.f.). Guía para aplicar la norma TIA/EIA 568 para cableado estructurado. ',
      link:
        'https://tabasco.gob.mx/sites/default/files/Manual-para-aplicar-la-norma-TIA-EIA-para-Cableado-Estructurado.pdf      ',
    },
    {
      referencia: 'IRet Telecomunicaciones. (s/f). Pruebas de Certificación. ',
      link:
        'https://www.iret-telecom.net/soluciones/sistemas-de-transporte-de-informacion/pruebas-de-certificacion/',
    },
    {
      referencia:
        'Mejia, Jezreel (2022). "Propuesta De Métricas Para La Implementación Del Estándar ISO/IEC 29110/Metrics Proposal for the Implementation of the ISO/IEC 29110 Standard." RISTI: Revista Ibérica De Sistemas E Tecnologias De Informação. 45, 24.       ',
      link: '',
    },
    {
      referencia:
        'NFC Electrónica SAS. (s/f). Soluciones Integrales en Infraestructura para Redes de Telecomunicaciones. ',
      link:
        'https://nfcelectronica.com/sitio/company/certificacion-de-cableado.html',
    },
    {
      referencia:
        'Super User. (s/l). www.nfcelectronica.com - Certificación de Cableado. Nfcelectronica.com. Recuperado el 10 de noviembre de 2022, de ',
      link:
        'https://nfcelectronica.com/sitio/company/certificacion-de-cableado.html',
    },
    {
      referencia: 'Redes de computadoras. (s/f). 5.2.1 Estándares vigentes. ',
      link:
        'https://sites.google.com/site/investigacionesitlm/5-diseno-e-implementacion-de-la-red-lan/5-2-1-estandares-vigentes       ',
    },
    {
      referencia:
        'Sena: Servicio Nacional de Aprendizaje. (s.f). Estándares IEEE.      ',
      link: '',
    },
    {
      referencia: 'Sossa, D. Z. (s.f.). Evolución de los Estándares IEEE.',
      link:
        'https://www.sutori.com/es/historia/estandar-ieee-802-11--8CkpVc7WCJZMSUno2tJwuUaq       ',
    },
    {
      referencia:
        'Une.org. (s.f.). Uso y referencia a normas ISO e IEC en la reglamentación técnica.  ',
      link:
        'https://www.une.org/normalizacion_documentos/referencia_normas_iso_iec_reg_tecnica.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
