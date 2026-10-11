// Datos reales del negocio (tomados del sitio actual). Fuente única para textos, NAP y schema.

export const site = {
  name: "Puertas Automáticas del Llano",
  shortName: "Puertas del Llano",
  url: "https://puertasautomaticasdellano.com",
  description:
    "Instalación, mantenimiento y reparación de puertas automáticas y eléctricas en Villavicencio y todo el Meta. Más de 30 años de experiencia en corredizas, abatibles, levadizas, cortinas enrollables, talanqueras y control de acceso.",
  founder: "Carlos Javier Guarama Otero",
  yearsExperience: 30,
  phone: "+573123854010",
  phoneDisplay: "+57 312 385 4010",
  email: "puertasautomaticas@gmail.com",
  city: "Villavicencio",
  region: "Meta",
  country: "CO",
  geo: { lat: 4.142, lng: -73.6266 },
  hours: { days: "Lunes a sábado", open: "07:00", close: "18:00", display: "Lun – Sáb · 7:00 a. m. – 6:00 p. m." },
  social: {
    facebook: "https://www.facebook.com/PuertasAutomaticasDelLlano/",
  },
} as const;

export function whatsappUrl(message = "Hola, quiero cotizar una puerta automática.") {
  return `https://wa.me/${site.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export const telUrl = `tel:${site.phone}`;

/** Municipios donde se atiende con frecuencia. Confirmar con el negocio. */
export const coverage = [
  "Villavicencio",
  "Acacías",
  "Restrepo",
  "Cumaral",
  "Granada",
  "Puerto López",
  "San Martín",
  "Puerto Gaitán",
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string; // <title> SEO
  metaDescription: string;
  h1: string;
  answer: string; // respuesta directa y citable (GEO)
  body: string[];
  benefits: string[];
  idealFor: string[];
  image: string;
  imageAlt: string;
  video?: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "puertas-corredizas-automaticas",
    name: "Puertas corredizas",
    short: "Motores para portones corredizos de casas, conjuntos y bodegas. Apertura suave con control remoto.",
    title: "Puertas corredizas automáticas en Villavicencio",
    metaDescription:
      "Instalación y mantenimiento de puertas corredizas automáticas en Villavicencio y el Meta. Motores Nice, BFT, FAAC y más. Cotiza por WhatsApp.",
    h1: "Puertas corredizas automáticas en Villavicencio y el Meta",
    answer:
      "Instalamos y automatizamos puertas corredizas para casas, conjuntos residenciales, fincas y bodegas en Villavicencio y todo el Meta. Montamos el motor, la cremallera, las fotoceldas de seguridad y programamos los controles remotos.",
    body: [
      "La puerta corrediza es la opción más usada cuando hay espacio lateral junto al portón: se desliza sobre un riel sin ocupar espacio hacia adentro ni hacia afuera, lo que la hace ideal para entradas vehiculares con poca profundidad.",
      "Evaluamos el peso de la hoja, el estado del riel y la frecuencia de uso para recomendar el motor adecuado. También automatizamos puertas corredizas existentes sin necesidad de cambiar la estructura.",
    ],
    benefits: [
      "Apertura con control remoto, celular o pulsador",
      "Fotoceldas que detienen la puerta si detectan un obstáculo",
      "Desbloqueo manual en caso de corte de energía",
      "Opción de batería de respaldo",
    ],
    idealFor: ["Casas", "Conjuntos residenciales", "Fincas", "Bodegas y comercios"],
    image: "/proyectos/puerta-corrediza-conjunto-residencial-villavicencio.webp",
    imageAlt: "Puerta corrediza automática metálica en conjunto residencial de Villavicencio",
    video: "puerta-corrediza-residencial-control-remoto",
    faqs: [
      {
        q: "¿Se puede automatizar una puerta corrediza que ya tengo?",
        a: "Sí. En la mayoría de casos se instala el motor y la cremallera sobre la puerta existente. Primero revisamos el riel y las ruedas para que el motor no trabaje forzado.",
      },
      {
        q: "¿Qué pasa si se va la luz?",
        a: "Todos los motores que instalamos tienen desbloqueo manual con llave, y se puede agregar una batería de respaldo para seguir abriendo sin energía.",
      },
    ],
  },
  {
    slug: "puertas-abatibles-automaticas",
    name: "Puertas abatibles",
    short: "Automatización de puertas de una o dos hojas con motores de brazo o pistón.",
    title: "Puertas abatibles automáticas en Villavicencio",
    metaDescription:
      "Automatización de puertas abatibles de una y dos hojas en Villavicencio y el Meta. Motores de brazo y pistón, instalación y mantenimiento.",
    h1: "Puertas abatibles automáticas en Villavicencio y el Meta",
    answer:
      "Automatizamos puertas abatibles de una o dos hojas con motores de brazo articulado o de pistón, para casas, fincas y garajes en Villavicencio y el Meta.",
    body: [
      "Las puertas abatibles abren girando sobre sus bisagras, como una puerta tradicional. Son comunes en fincas, casas campestres y garajes donde no hay espacio lateral para una corrediza.",
      "Instalamos motores de brazo articulado para puertas con columnas anchas y motores de pistón para hojas largas, siempre con fotoceldas y programación de tiempos de apertura y cierre.",
    ],
    benefits: [
      "Funciona en puertas de madera, hierro o aluminio",
      "Apertura de una sola hoja para paso peatonal",
      "Cierre automático programable",
      "Motores para uso residencial o intensivo",
    ],
    idealFor: ["Fincas y casas campestres", "Garajes", "Entradas con columnas", "Residencias"],
    image: "/proyectos/puerta-abatible-moderna-negra-villavicencio.webp",
    imageAlt: "Puerta abatible automática negra de dos hojas en residencia de Villavicencio",
    video: "puerta-abatible-finca-atardecer",
    faqs: [
      {
        q: "¿Qué motor necesito para una puerta abatible?",
        a: "Depende del ancho y peso de cada hoja y del espacio en la columna. Para columnas anchas usamos brazo articulado; para hojas largas y pesadas, pistón.",
      },
      {
        q: "¿Puedo abrir solo una hoja?",
        a: "Sí. Se programa el control para abrir una sola hoja (paso peatonal) o ambas (paso vehicular).",
      },
    ],
  },
  {
    slug: "puertas-levadizas-seccionales",
    name: "Puertas levadizas y seccionales",
    short: "Puertas de garaje que suben al techo: seccionales y basculantes con motor de techo.",
    title: "Puertas de garaje levadizas y seccionales en Villavicencio",
    metaDescription:
      "Instalación de puertas de garaje levadizas y seccionales automáticas en Villavicencio y el Meta. Motores de techo LiftMaster y más.",
    h1: "Puertas de garaje levadizas y seccionales en Villavicencio",
    answer:
      "Instalamos puertas de garaje levadizas y seccionales con motor de techo en Villavicencio y el Meta. Suben hacia el techo y liberan todo el frente del garaje.",
    body: [
      "Las puertas seccionales están formadas por paneles que se recogen hacia el techo sobre rieles. Ocupan muy poco espacio y aíslan mejor el garaje del ruido y el polvo.",
      "Instalamos la puerta completa o solo el motor de techo sobre una puerta existente, con control remoto y sensor de obstáculos.",
    ],
    benefits: [
      "Aprovechan todo el espacio del garaje",
      "Motor silencioso de techo",
      "Sensor que invierte el recorrido ante un obstáculo",
      "Acabados lisos o en madera",
    ],
    idealFor: ["Garajes residenciales", "Casas en conjunto", "Locales con parqueadero"],
    image: "/proyectos/puerta-seccional-garaje-casa-villavicencio.webp",
    imageAlt: "Puerta de garaje seccional blanca automática en casa de Villavicencio",
    faqs: [
      {
        q: "¿Cuál es la diferencia entre levadiza y seccional?",
        a: "La levadiza (basculante) es una sola hoja que bascula hacia el techo; la seccional se divide en paneles que se recogen sobre rieles. La seccional necesita menos espacio frente al garaje.",
      },
    ],
  },
  {
    slug: "cortinas-enrollables-electricas",
    name: "Cortinas enrollables",
    short: "Cortinas metálicas eléctricas para locales, garajes y bodegas.",
    title: "Cortinas enrollables eléctricas en Villavicencio",
    metaDescription:
      "Cortinas enrollables eléctricas para locales comerciales, garajes y bodegas en Villavicencio y el Meta. Instalación, motorización y mantenimiento.",
    h1: "Cortinas enrollables eléctricas en Villavicencio y el Meta",
    answer:
      "Instalamos y motorizamos cortinas enrollables metálicas para locales comerciales, garajes y bodegas en Villavicencio y el Meta, con apertura por control remoto o pulsador.",
    body: [
      "La cortina enrollable se recoge en un tambor sobre el vano, por lo que no ocupa espacio ni adentro ni afuera. Es la solución más común para locales comerciales y garajes amplios.",
      "Motorizamos cortinas nuevas o existentes y hacemos mantenimiento preventivo para evitar que se traben o se descuelguen.",
    ],
    benefits: [
      "No ocupa espacio al abrir",
      "Alta seguridad para locales y bodegas",
      "Apertura con control remoto o botón",
      "Motorización de cortinas existentes",
    ],
    idealFor: ["Locales comerciales", "Garajes amplios", "Bodegas", "Talleres"],
    image: "/video/hero-cortina-enrollable-poster.webp",
    imageAlt: "Cortina enrollable eléctrica blanca abriendo en garaje",
    faqs: [
      {
        q: "¿Se puede motorizar una cortina manual?",
        a: "Sí, en la mayoría de casos. Revisamos el tambor, los resortes y las guías antes de instalar el motor.",
      },
    ],
  },
  {
    slug: "talanqueras-vehiculares",
    name: "Talanqueras vehiculares",
    short: "Barreras para conjuntos, parqueaderos y condominios con control de acceso.",
    title: "Talanqueras vehiculares en Villavicencio y el Meta",
    metaDescription:
      "Instalación y mantenimiento de talanqueras vehiculares para conjuntos residenciales, condominios y parqueaderos en Villavicencio y el Meta.",
    h1: "Talanqueras vehiculares en Villavicencio y el Meta",
    answer:
      "Instalamos talanqueras vehiculares (barreras de acceso) para conjuntos residenciales, condominios, parqueaderos y empresas en Villavicencio y el Meta, integradas con controles, tarjetas o lectores.",
    body: [
      "La talanquera controla la entrada y salida de vehículos con un brazo que sube y baja en segundos. Es la solución estándar para porterías de conjuntos y parqueaderos con alto flujo.",
      "La integramos con controles remotos, tarjetas de proximidad, lectores biométricos o el sistema de portería que ya tengas.",
    ],
    benefits: [
      "Apertura rápida para alto flujo vehicular",
      "Integración con tarjetas, controles y lectores",
      "Brazos de diferentes longitudes",
      "Mantenimiento preventivo programado",
    ],
    idealFor: ["Conjuntos residenciales", "Condominios", "Parqueaderos", "Empresas"],
    image: "/proyectos/talanquera-vehicular-condominio-meta.webp",
    imageAlt: "Talanquera vehicular instalada en la entrada de un condominio en el Meta",
    faqs: [
      {
        q: "¿La talanquera se puede conectar con la portería?",
        a: "Sí. Se puede abrir desde la portería con pulsador, con controles para residentes o con tarjetas y lectores de control de acceso.",
      },
    ],
  },
  {
    slug: "control-de-acceso",
    name: "Control de acceso",
    short: "Electroimanes, lectores, tarjetas y programación de controles remotos.",
    title: "Control de acceso y electroimanes en Villavicencio",
    metaDescription:
      "Control de acceso para hogares, oficinas y conjuntos en Villavicencio: electroimanes, lectores, tarjetas y configuración de controles remotos. ZKTeco, Dahua, Hikvision.",
    h1: "Control de acceso y electroimanes en Villavicencio",
    answer:
      "Instalamos sistemas de control de acceso en Villavicencio y el Meta: electroimanes para puertas, lectores de tarjeta y biométricos, y configuración de controles remotos para puertas automáticas.",
    body: [
      "Un sistema de control de acceso decide quién puede entrar y cuándo. Lo usamos en puertas peatonales de casas, oficinas, conjuntos y empresas.",
      "También configuramos y duplicamos controles remotos para tu puerta automática, y programamos la apertura desde la portería.",
    ],
    benefits: [
      "Electroimanes para puertas peatonales",
      "Lectores de tarjeta, clave o huella",
      "Configuración y duplicado de controles remotos",
      "Integración con puertas y talanqueras",
    ],
    idealFor: ["Oficinas", "Conjuntos residenciales", "Accesos peatonales", "Empresas"],
    image: "/proyectos/puerta-peatonal-control-acceso-electroiman.webp",
    imageAlt: "Puerta peatonal con electroimán y control de acceso",
    faqs: [
      {
        q: "¿Pueden programar controles remotos nuevos?",
        a: "Sí. Configuramos controles nuevos o adicionales para la mayoría de marcas de motores y borramos los controles perdidos por seguridad.",
      },
    ],
  },
  {
    slug: "mantenimiento-reparacion-puertas-automaticas",
    name: "Mantenimiento y reparación",
    short: "Preventivo y correctivo para que tu puerta nunca te deje afuera.",
    title: "Mantenimiento y reparación de puertas automáticas en Villavicencio",
    metaDescription:
      "Mantenimiento preventivo y reparación de puertas automáticas y eléctricas en Villavicencio y el Meta. Diagnóstico de motores, tarjetas y sensores.",
    h1: "Mantenimiento y reparación de puertas automáticas en Villavicencio",
    answer:
      "Hacemos mantenimiento preventivo y reparación de puertas automáticas y eléctricas en Villavicencio y el Meta: motores, tarjetas electrónicas, fotoceldas, rieles y controles, de todas las marcas.",
    body: [
      "Una puerta automática trabaja todos los días a la intemperie. El mantenimiento preventivo (limpieza, lubricación, ajuste de límites y revisión eléctrica) evita daños mayores y alarga la vida del motor.",
      "Cuando la puerta falla, diagnosticamos la causa —motor, tarjeta, sensores o parte mecánica— y la reparamos con repuestos de la misma marca.",
    ],
    benefits: [
      "Diagnóstico de motores y tarjetas electrónicas",
      "Revisión de fotoceldas y sensores",
      "Lubricación y ajuste de rieles y bisagras",
      "Planes periódicos para conjuntos y empresas",
    ],
    idealFor: ["Puertas de cualquier marca", "Conjuntos residenciales", "Empresas", "Hogares"],
    image: "/proyectos/tecnicos-instalando-puerta-automatica-meta.webp",
    imageAlt: "Técnicos de Puertas Automáticas del Llano haciendo mantenimiento a una puerta en el Meta",
    faqs: [
      {
        q: "¿Cada cuánto se hace mantenimiento a una puerta automática?",
        a: "Recomendamos un mantenimiento preventivo cada 6 meses en uso residencial y cada 3 meses en conjuntos o empresas con uso intensivo.",
      },
      {
        q: "¿Reparan motores de cualquier marca?",
        a: "Sí. Trabajamos con Nice, BFT, FAAC, CAME, Beninca, LiftMaster, Genius, PPA y otras marcas del mercado.",
      },
    ],
  },
];

export type Project = { src: string; alt: string; title: string; type: string; place: string; tall?: boolean };

export const projects: Project[] = [
  { src: "/proyectos/puerta-abatible-moderna-negra-villavicencio.webp", alt: "Puerta abatible automática negra con detalles de vidrio en Villavicencio", title: "Abatible moderna de dos hojas", type: "Abatible", place: "Villavicencio" },
  { src: "/proyectos/talanquera-vehicular-condominio-meta.webp", alt: "Talanquera vehicular en vía de acceso a condominio campestre", title: "Talanquera para condominio", type: "Talanquera", place: "Meta" },
  { src: "/proyectos/puerta-seccional-garaje-casa-villavicencio.webp", alt: "Puerta seccional de garaje blanca automática", title: "Puerta seccional de garaje", type: "Levadiza", place: "Villavicencio" },
  { src: "/proyectos/puerta-peatonal-control-acceso-electroiman.webp", alt: "Puerta peatonal metálica con control de acceso", title: "Acceso peatonal controlado", type: "Control de acceso", place: "Meta", tall: true },
  { src: "/proyectos/puerta-corrediza-conjunto-residencial-villavicencio.webp", alt: "Puerta corrediza metálica de conjunto residencial en Villavicencio", title: "Corrediza para conjunto", type: "Corrediza", place: "Villavicencio" },
  { src: "/proyectos/puerta-abatible-madera-garaje-residencia.webp", alt: "Puerta abatible de madera con motores de brazo en garaje residencial", title: "Abatible en madera para garaje", type: "Abatible", place: "Meta" },
  { src: "/proyectos/carlos-guarama-talanquera-villavicencio.webp", alt: "Carlos Guarama junto a talanquera instalada en Villavicencio", title: "Talanquera en portería", type: "Talanquera", place: "Villavicencio" },
  { src: "/proyectos/tecnicos-instalando-puerta-automatica-meta.webp", alt: "Técnicos instalando puerta automática en el Meta", title: "Instalación en sitio", type: "Mantenimiento", place: "Meta", tall: true },
  { src: "/proyectos/puerta-abatible-negra-motores-brazo-villavicencio.webp", alt: "Puerta abatible negra con motores de brazo articulado", title: "Abatible con motores de brazo", type: "Abatible", place: "Villavicencio" },
  { src: "/proyectos/puerta-abatible-madera-motor-brazo-meta.webp", alt: "Puerta abatible en madera y metal con motor de brazo", title: "Abatible madera y metal", type: "Abatible", place: "Meta" },
  { src: "/proyectos/puerta-abatible-finca-meta.webp", alt: "Puerta abatible automática verde y madera en finca del Meta", title: "Portón de finca automatizado", type: "Abatible", place: "Meta" },
  { src: "/proyectos/puerta-seccional-garaje-blanca.webp", alt: "Puerta de garaje seccional blanca cerrada", title: "Garaje seccional liso", type: "Levadiza", place: "Villavicencio" },
  { src: "/proyectos/motor-puerta-levadiza-garaje-villavicencio.webp", alt: "Motor de techo para puerta levadiza de garaje", title: "Motor de techo para garaje", type: "Levadiza", place: "Villavicencio" },
  { src: "/proyectos/puerta-corrediza-madera-motor.webp", alt: "Puerta corrediza con acabado en madera y motor", title: "Corrediza acabado madera", type: "Corrediza", place: "Meta" },
];

export type Video = { slug: string; title: string; type: string; vertical?: boolean };

export const videos: Video[] = [
  { slug: "puerta-abatible-finca-atardecer", title: "Portón abatible de finca", type: "Abatible" },
  { slug: "puerta-corrediza-residencial-control-remoto", title: "Corrediza residencial con control", type: "Corrediza" },
  { slug: "puerta-corrediza-conjunto-villavicencio", title: "Corrediza en conjunto residencial", type: "Corrediza" },
  { slug: "puerta-abatible-arco-negra", title: "Abatible negra en arco", type: "Abatible" },
  { slug: "puerta-corrediza-conjunto-residencial", title: "Corrediza de conjunto", type: "Corrediza", vertical: true },
  { slug: "puerta-abatible-forja-negra", title: "Abatible en forja", type: "Abatible", vertical: true },
  { slug: "puerta-abatible-acceso-peatonal", title: "Acceso abatible cubierto", type: "Abatible", vertical: true },
  { slug: "puerta-corrediza-garaje-edificio", title: "Corrediza para garaje de edificio", type: "Corrediza" },
  { slug: "puerta-corrediza-reja-moderna", title: "Corrediza tipo reja moderna", type: "Corrediza" },
  { slug: "puerta-abatible-finca-piedra", title: "Abatible rústica en finca", type: "Abatible" },
];

export const brands = [
  "nice", "bft", "faac", "came", "beninca", "liftmaster", "genius", "ppa",
  "accessmatic", "nas", "zkteco", "dahua", "hikvision", "soyal",
] as const;

export const brandNames: Record<(typeof brands)[number], string> = {
  nice: "Nice", bft: "BFT", faac: "FAAC", came: "CAME", beninca: "Beninca", liftmaster: "LiftMaster",
  genius: "Genius", ppa: "PPA", accessmatic: "Accessmatic", nas: "NAS", zkteco: "ZKTeco",
  dahua: "Dahua", hikvision: "Hikvision", soyal: "Soyal",
};

export const faqs = [
  {
    q: "¿Cuánto cuesta instalar una puerta automática en Villavicencio?",
    a: "Depende del tipo de puerta (corrediza, abatible, levadiza o cortina), del peso y del motor. Escríbenos por WhatsApp con una foto de tu puerta y sus medidas aproximadas y te damos un valor de referencia; si hace falta, agendamos una visita técnica.",
  },
  {
    q: "¿En qué municipios del Meta trabajan?",
    a: `Atendemos Villavicencio y municipios del Meta como ${coverage.slice(1).join(", ")}. También realizamos proyectos en otras regiones de Colombia.`,
  },
  {
    q: "¿Pueden automatizar la puerta que ya tengo?",
    a: "Sí. La mayoría de puertas corredizas, abatibles, levadizas y cortinas enrollables se pueden automatizar sin cambiar la estructura. Revisamos el estado de la puerta antes de instalar el motor.",
  },
  {
    q: "¿Qué marcas de motores instalan?",
    a: "Trabajamos con Nice, BFT, FAAC, CAME, Beninca, LiftMaster, Genius, PPA y Accessmatic, y en control de acceso con ZKTeco, Dahua, Hikvision y Soyal.",
  },
  {
    q: "¿Hacen mantenimiento a puertas que no instalaron ustedes?",
    a: "Sí. Hacemos mantenimiento preventivo y reparación a puertas automáticas de cualquier marca e instalador.",
  },
  {
    q: "¿Cuál es el horario de atención?",
    a: `${site.hours.display}. Puedes escribirnos por WhatsApp al ${site.phoneDisplay} en cualquier momento.`,
  },
];
