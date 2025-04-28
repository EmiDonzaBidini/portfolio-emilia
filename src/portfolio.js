// Website related settings
const settings = {
  isSplash: true,
};

// SEO Related settings
const seo = {
  title: "Emilia Donza Bidini's Portfolio",
  description:
    "De la estrategia al impacto: integrando procesos, equipos y tecnología. Transformo desafíos en soluciones con visión estratégica, herramientas digitales y foco en resultados.",
  og: {
    title: "Emilia Donza Bidini Portfolio",
    type: "website",
    url: "http://tu-sitio-web.com/", // Podés cambiar esto por tu dominio cuando lo tengas
  },
};

// Home Page
const greeting = {
  title: "Emilia Donza Bidini",
  logo_name: "EmiliaDonzaBidini",
  subTitle:
    "De la estrategia al impacto: integrando procesos, equipos y tecnología. Transformo desafíos en soluciones con visión estratégica, herramientas digitales y foco en resultados.",
  resumeLink: "/CV-EmiliaDonzaBidini.pdf",
  portfolio_repository: "https://github.com/EmiDonzaBidini/portfolio-emilia",
  githubProfile: "https://github.com/EmiDonzaBidini",
};

const aboutMe = {
  title: "Sobre mí",
  description: `
  Profesional en Administración y Marketing con experiencia en estrategia comercial, expansión internacional y liderazgo de equipos. Especialista en optimización de procesos, gestión de ventas y análisis financiero para impulsar el crecimiento sostenible. Experiencia en industrias como Oil & Gas, Finanzas y Retail. Manejo de herramientas digitales y tecnología aplicada a negocios. Adaptable, resolutiva y con visión estratégica para integrar soluciones tecnológicas a los desafíos empresariales.
  Nací en Carlos Casares, una ciudad del interior de la Provincia de Buenos Aires, Argentina, a 314 km de la Ciudad Autónoma de Buenos Aires. A los 17 años hice las valijas y me vine a Capital a estudiar. Empecé Ingeniería en Sistemas, pero rápidamente entendí que ese camino no alineaba con el futuro que quería construir. Ahí fue cuando descubrí las Ciencias Económicas… y sí, fue amor profesional a primera vista.
  Aunque ya venía con una base del bachiller en Ciencias Económicas del Colegio Nacional, decidí combinar dos de mis grandes pasiones: el deporte y la gestión. Así fue como estudié las Licenciaturas en Marketing Deportivo y en Administración del Deporte en el Instituto Universitario River Plate.
  Al mismo tiempo, también cursé un año completo de la Tecnicatura en Periodismo Deportivo, aprobando toda la parte editorial y de escritura —un área que siempre me apasionó— pero el tiempo no me alcanzaba para todo. Mientras trabajaba de día, seguí adelante con las carreras principales de noche.
  Soy una convencida de que el aprendizaje no ocupa lugar. Siempre estoy capacitándome, explorando nuevas herramientas, tecnologías y estrategias. Me encanta leer, escribir, y aunque de chica lo hacía con un enfoque más poético, hoy quiero recuperar ese hábito con una mirada profesional. Quiero ayudar a quienes lo necesiten desde mis conocimientos y experiencias, y generar sinergia con quienes compartan el deseo de crecer.
  `,
};

const socialMediaLinks = [
  {
    name: "EmiDonzaBidini",
    link: "https://github.com/EmiDonzaBidini",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/EmiliaDonzaBidini/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:emidonza@gmail.com",
    fontAwesomeIcon: "fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const experience = {
  title: "Experiencia Profesional",
  subtitle: "Últimos cargos",
  description:
    "Mi trayectoria combina estrategia comercial, análisis financiero y liderazgo de proyectos con fuerte base tecnológica.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabajos",
      experiences: [
        {
          title:
            "Chief Marketing Officer (CMO) | Encargada Departamento Comercial",
          company: "Desitec SA",
          company_url: "https://www.desitec.com.ar/empresa/nosotros",
          logo_path: "desitec_logo.png",
          duration: "Oct 2021 - Actualidad",
          location: "Buenos Aires, Argentina",
          description:
            "Lideré estrategias de expansión internacional, duplicando mercados. Logré un crecimiento de ventas del 331% (2023) y 129% (2024). Gestioné equipos y optimicé procesos de ventas e internacionalización en el sector Oil & Gas.",
          color: "#006064",
        },
        {
          title: "Analista Financiera",
          company: "Finantech SAS",
          duration: "Feb 2020 - Oct 2021",
          location: "Buenos Aires, Argentina",
          description:
            "Evaluación de riesgos crediticios, análisis de datos financieros, manejo de BBDD (Excel, Power BI, SQL, SAP) y optimización de procesos de otorgamiento de préstamos.",
          color: "#00796B",
        },
        {
          title: "Secretaria - Recepcionista",
          company: "Revista Nubilis SRL",
          logo_path: "nubilis_logo.png",
          duration: "Ene 2018 - May 2018",
          location: "Buenos Aires, Argentina",
          description:
            "Pasantía laboral. Apoyo administrativo, organización de agenda ejecutiva, gestión de contenido y coordinación logística.",
          color: "#5D4037",
        },
      ],
    },
  ],
};

const skills = {
  data: [
    {
      title: "Estrategia Comercial y Gestión",
      fileName: "StrategyImg",
      skills: [
        "⚡ Desarrollo de estrategias comerciales enfocadas en expansión internacional y crecimiento sostenible",
        "⚡ Liderazgo de equipos multidisciplinarios y optimización de procesos de ventas",
        "⚡ Negociación con clientes y análisis de rentabilidad para toma de decisiones estratégicas",
      ],
    },
    {
      title: "Herramientas de Negocio",
      fileName: "BusinessToolsImg",
      skills: [
        "⚡ Manejo de Excel avanzado para análisis financiero y de datos",
        "⚡ Experiencia con CRMs como Salesforce y HubSpot",
        "⚡ Visualización de datos y reportes con Power BI",
      ],
      softwareSkills: [
        {
          skillName: "Excel Avanzado",
          fontAwesomeClassname: "logos:microsoft-excel",
          style: { color: "#217346" },
        },
        {
          skillName: "CRM (Salesforce, HubSpot)",
          fontAwesomeClassname: "simple-icons:salesforce",
          style: { color: "#00A1E0" },
        },
      ],
    },
    {
      title: "Análisis de Datos y Tecnología",
      fileName: "DataImg",
      skills: [
        "⚡ Interpretación de datos financieros y comerciales para generación de insights",
        "⚡ Desarrollo de dashboards interactivos",
        "⚡ Testing QA y Data Science para toma de decisiones basadas en datos",
      ],
      softwareSkills: [
        {
          skillName: "Testing QA",
          fontAwesomeClassname: "simple-icons:selenium",
          style: { color: "#009688" },
        },
      ],
    },
    {
      title: "Desarrollo Web Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Desarrollo de sitios web responsivos con HTML, CSS y JavaScript",
        "⚡ Gestión de bases de datos MySQL",
        "⚡ Conocimientos en desarrollo backend con fundamentos en Python",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
      ],
    },
    {
      title: "Especialización en Análisis de Datos y Big Data",
      fileName: "BigDataImg",
      skills: [
        "⚡ Formación académica avanzada en Big Data, Inteligencia Artificial y Gestión de Datos",
        "⚡ Manejo de herramientas como Python, Power BI, Google Data Studio y Carto",
        "⚡ Conocimientos sólidos en machine learning, bases de datos (SQL, NoSQL), estadística con R y análisis de datos",
        "⚡ Aplicación de metodologías ágiles y gestión de proyectos en entornos tecnológicos",
      ],
      softwareSkills: [
        {
          skillName: "Google Data Studio",
          fontAwesomeClassname: "simple-icons:googledatastudio",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Carto",
          fontAwesomeClassname: "simple-icons:carto",
          style: { color: "#000000" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Apache Hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
          style: { color: "#66CCFF" },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: { color: "#E25A1C" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
      ],
    },
    {
      title: "Diseño y Marketing Digital",
      fileName: "DesignImg",
      skills: [
        "⚡ Diseño de piezas gráficas y audiovisuales para campañas digitales",
        "⚡ Creación de contenido atractivo para redes sociales y branding",
        "⚡ Implementación de estrategias de marketing digital",
      ],
      softwareSkills: [
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: { color: "#31A8FF" },
        },
        {
          skillName: "Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: { color: "#FF9A00" },
        },
        {
          skillName: "Premiere Pro",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: { color: "#9999FF" },
        },
        {
          skillName: "InDesign",
          fontAwesomeClassname: "simple-icons:adobeindesign",
          style: { color: "#FF3366" },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title:
        "Máster en Big Data y Business Intelligence - Máster en IA Empresarial",
      subtitle: "Escuela de Negocios Europea de Barcelona",
      logo_path: "/eneb_logo.png",
      alt_name: "ENEB",
      duration: "2025 - 2026",
      descriptions: [
        "⚡ Formación avanzada en Big Data, Inteligencia Artificial y Business Intelligence.",
        "⚡ Desarrollo de proyectos aplicando metodologías ágiles y herramientas como Python, Power BI y Google Data Studio.",
        "⚡ Análisis e interpretación de datos para la toma de decisiones estratégicas empresariales.",
      ],
      websiteLink:
        "https://eneb.es/programas-formativos/master/master-en-big-data-y-business-intelligence/",
    },
    {
      title: "Licenciatura en Administración",
      subtitle: "Especialización en Administración del Deporte",
      logo_path: "/iurp_logo.png",
      alt_name: "Instituto Universitario River Plate",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Formación en gestión y administración de organizaciones deportivas.",
        "⚡ Desarrollo de habilidades para la planificación y dirección de entidades deportivas.",
        "⚡ Enfoque en estrategias de marketing y financiamiento en el ámbito deportivo.",
      ],
      websiteLink:
        "https://iuriverplate.edu.ar/courses/licenciatura-administracion-deporte",
    },
    {
      title: "Licenciatura en Marketing",
      subtitle: "Especialización en Marketing Deportivo",
      logo_path: "/iurp_logo.png",
      alt_name: "Instituto Universitario River Plate",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Estudio de técnicas y estrategias de marketing aplicadas al deporte.",
        "⚡ Análisis de mercado y comportamiento del consumidor en el ámbito deportivo.",
        "⚡ Diseño y ejecución de campañas publicitarias para organizaciones deportivas.",
      ],
      websiteLink:
        "https://iuriverplate.edu.ar/courses/licenciatura-marketing-deportivo",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Science & Testing QA",
      subtitle: "Talento Tech",
      logo_path: "talentotech_logo.png",
      certificate_link: "#",
      alt_name: "Talento Tech",
      color_code: "#005691",
    },
    {
      title: "Power BI",
      subtitle: "Microsoft",
      logo_path: "powerbi_logo.png",
      certificate_link: "#",
      alt_name: "Microsoft",
      color_code: "#F2C811",
    },
    {
      title: "Full Stack Web Development",
      subtitle: "Codo a Codo (Gobierno de la Ciudad)",
      logo_path: "codoacodo_logo.png",
      certificate_link: "#",
      alt_name: "Codo a Codo",
      color_code: "#009688",
    },
    {
      title: "Fundamentos de la Programación",
      subtitle: "Egg Cooperation",
      logo_path: "egg_logo.png",
      certificate_link: "#",
      alt_name: "Egg",
      color_code: "#FFB300",
    },
    {
      title: "Adobe Creative Suite",
      subtitle:
        "- Photoshop, Illustrator, Lightroom, Premiere Pro, InDesign (Platzi)",
      logo_path: "adobe_logo.png",
      certificate_link: "#",
      alt_name: "Platzi",
      color_code: "#F44336",
    },
    {
      title: "Marketing Digital",
      subtitle: "- Platzi",
      logo_path: "platzi_logo.png",
      certificate_link: "#",
      alt_name: "Platzi",
      color_code: "#04C35C",
    },
    {
      title: "Inglés Avanzado (B1/B2)",
      subtitle: "- Britland English Institute / AACI (Senior 6)",
      logo_path: "english_logo.png",
      certificate_link: "#",
      alt_name: "Inglés",
      color_code: "#304FFE",
    },
  ],
};

const services = {
  title: "¿En qué puedo ayudarte?",
  description: `
  Cuento con experiencia liderando estrategias comerciales, optimizando procesos y conectando equipos con tecnología. 
  Estoy abierta a colaboraciones, consultorías y nuevos desafíos en los que pueda aportar valor.`,
  offerings: [
    {
      title: "Estrategia Comercial & Expansión",
      description:
        "Diseño e implementación de estrategias comerciales centradas en crecimiento, rentabilidad y expansión internacional.",
    },
    {
      title: "Análisis de Datos & Visualización",
      description:
        "Creación de dashboards interactivos en Power BI, análisis de rentabilidad y modelos de toma de decisiones basados en datos.",
    },
    {
      title: "Marketing Digital & Automatización",
      description:
        "Planificación e implementación de campañas digitales. Automatización de flujos con herramientas como Meta Ads, Mailchimp y CRM.",
    },
    {
      title: "Diseño y Branding Digital",
      description:
        "Diseño de contenido visual profesional para marcas, redes sociales y presentaciones de impacto (Photoshop, Illustrator, Canva).",
    },
    {
      title: "Consultoría para pymes & emprendedores",
      description:
        "Te ayudo a ordenar tus procesos comerciales y digitales para que puedas escalar, vender más y profesionalizar tu marca.",
    },
  ],
  contactPrompt:
    "¿Tenés un proyecto o idea? Escribime, respondo en menos de 24hs.",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "blanco.png",
  },

  addressSection: {
    title: "¿Dónde encontrarme?",
    subtitle: "Vivo en el Barrio de Palermo.",
    locality: "Ciudad Autónoma de Buenos Aires",
    country: "Argentina",
    postalCode: "1425",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Contactame vía mail: emidonza@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  aboutMe,
  experience,
  degrees,
  certifications,
  services,
  contactPageData,
};
