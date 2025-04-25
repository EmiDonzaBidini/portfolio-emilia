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
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

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
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
      ],
    },
    {
      title: "Análisis de Datos y Tecnología",
      fileName: "DataImg",
      skills: [
        "⚡ Interpretación de datos financieros y comerciales para generación de insights",
        "⚡ Desarrollo de dashboards interactivos con Power BI",
        "⚡ Testing QA y Data Science para toma de decisiones basadas en datos",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "Excel Avanzado",
          fontAwesomeClassname: "logos:microsoft-excel",
          style: { color: "#217346" },
        },
        {
          skillName: "Testing QA",
          fontAwesomeClassname: "simple-icons:testcafe",
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
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
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
      website_link:
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
      website_link:
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
      website_link:
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

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
