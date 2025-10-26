// i18n content dictionary for Johan's portfolio
// Tailored to Tailwind v4 tokens: primary / secondary / accent (60/30/10)
// You can import and use as: import { content } from "@/utils/dictionary";

export const content = {
  EN: {
    header: {
      cvButton: "Download résumé",
    },
    navigation: {
      aboutMe: "About me",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      ideals: "Ideals",
      contact: "Contact",
    },
    banner: {
      titleOne: "Hi, I'm",
      titleTwo: "Full-Stack Developer",
      subtitleOne: "Lover of",
      subtitleTwo: "programming, animations and motorcycles",
      aboutMe:
        "Frontend-focused developer skilled in React, TypeScript and Tailwind. I enjoy building responsive, accessible UIs and tasteful micro‑interactions, applying UI/UX best practices for clarity and speed.",
    },
    projects: [
      {
        // Example project — replace with your actual items when ready
        gallery: ["portfolio-1", "portfolio-2", "portfolio-3"],
        title: "Portfolio Web",
        subtitle: "Personal project",
        description:
          "Modern personal portfolio showcasing projects, skills, and experience. Built with React, TypeScript, Vite, and Tailwind with a11y and performance in mind.",
        technologies: [
          { name: "React", logo: "react" },
          { name: "TypeScript", logo: "typescript" },
          { name: "Tailwind", logo: "tailwind" },
          { name: "Vite", logo: "vite" },
        ],
        links: [
          {
            text: "Live site",
            icon: "fas fa-external-link-alt",
            url: "https://jjimenezg19.github.io/johan_portafolio/",
          },
          // { text: "GitHub", icon: "fab fa-github", url: "https://github.com/jjimenezg19/johan_portafolio" },
        ],
      },
      {
        gallery: ["lts-1", "lts-2", "lts-3", "lts-4", "lts-5"],
        title: "Latino Transit Solutions",
        subtitle: "University project",
        description:
          "Package shipment management platform to register transports, define routes, approve routes, attach shipments to transports, and track delivery status.",
        technologies: [
          { name: "React", logo: "react" },
          { name: "Tailwind", logo: "tailwind" },
          { name: "Node.js", logo: "nodejs" },
          { name: "TypeScript", logo: "typescript" },
        ],
        links: [
          {
            text: "Visit GitHub",
            icon: "fab fa-github",
            url: "https://github.com/haroldcdb/LatinoTransitSolutions",
          },
        ],
      },
      {
        gallery: ["dsv-1", "dsv-2", "dsv-3", "dsv-4", "dsv-5"],
        title: "Design System for Vue",
        subtitle: "Personal project",
        description:
          "Component library for Vue ranging from basic form elements to advanced widgets like charts, image uploader, and calendar.",
        technologies: [
          { name: "Vue", logo: "vue" },
          { name: "JavaScript", logo: "javascript" },
          { name: "CSS", logo: "css" },
          { name: "GSAP", logo: "gsap" },
        ],
        links: [
          {
            text: "Visit GitHub",
            icon: "fab fa-github",
            url: "https://github.com/haroldcdb/vue-framework",
          },
        ],
      },
    ],
    skills: {
      title: "Skills",
      subtitle:
        "Technologies and tools I use the most as a frontend developer (and a bit of backend).",
      indication: "Grab and swipe left",
    },
    ideals: {
      title: "Ideals",
      content: [
        {
          title: "Mission",
          text: (
            <p className="text-balance">
              Contribute my skills to help teams ship reliable, accessible
              interfaces — leaving big results through small, consistent
              improvements across projects.
            </p>
          ),
        },
        {
          title: "Vision",
          text: (
            <p className="text-balance">
              Grow into a standout web engineer at a leading tech company,
              continuously learning and mentoring while delivering high‑impact
              products.
            </p>
          ),
        },
        {
          title: "Values",
          text: (
            <p className="text-balance">
              I value <span className="text-accent font-bold">solidarity</span>{" "}
              in helping others,
              <span className="text-accent font-bold"> respect</span> for
              colleagues’ ideas,
              <span className="text-accent font-bold"> honesty</span> with
              strong work ethics, and
              <span className="text-accent font-bold"> gratitude</span> for
              every learning opportunity.
            </p>
          ),
        },
      ],
    },
    experience: {
      title: "Experience",
      content: [
        {
          time: "2021 — Present",
          title: "Full‑stack Web Developer",
          subtitle: "Reboot CR — 4thewords.com",
          text: "Maintained and evolved a large commercial web app: resolved technical debt, delivered new features from widgets to full pages, and fixed bugs across legacy and modern areas. Worked across frontend and backend with some DevOps involvement.",
        },
        {
          time: "2018",
          title: "Full‑stack Web Developer",
          subtitle: "Cubik — LimOn (University project)",
          text: "Designed and developed a web app for hotel/tourist site listings and reservations. Captured requirements and produced formal documentation with use cases, mirroring a real‑world team environment.",
        },
      ],
    },
    education: {
      title: "Education",
      content: [
        {
          time: "2021 — Present",
          title: "Bachelor’s degree in Software Engineering",
          subtitle: "Cenfotec University",
        },
        {
          time: "2024 — Present",
          title: "Intensive English Course",
          subtitle: "Fundatec — TEC",
        },
        {
          time: "2018 — 2019",
          title: "Software Engineering Technical Degree",
          subtitle: "Cenfotec University",
        },
      ],
    },
    contact: {
      title: "Contact me",
      subtitle:
        "Feel free to reach out using the form below — I’ll get back to you as soon as possible.",
      email: "Email",
      subject: "Subject",
      message: "Message",
      button: "Submit",
    },
    footer: {
      slogan: "Clear vision, clear coding",
    },
  },

  ES: {
    header: {
      cvButton: "Descargar CV",
    },
    navigation: {
      aboutMe: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      ideals: "Ideales",
      contact: "Contacto",
    },
    banner: {
      titleOne: "Hola, soy",
      titleTwo: "Desarrollador Web",
      subtitleOne: "Amante de",
      subtitleTwo: "la programación, las animaciones y las motocicletas",
      aboutMe:
        "Desarrollador enfocado en frontend con experiencia en React, TypeScript y Tailwind. Me gusta crear interfaces responsivas y accesibles con micro‑interacciones, aplicando buenas prácticas de UI/UX.",
    },
    projects: [
      {
        gallery: ["portfolio-1", "portfolio-2", "portfolio-3"],
        title: "Portfolio Web",
        subtitle: "Proyecto personal",
        description:
          "Portafolio moderno para mostrar proyectos, habilidades y experiencia. Construido con React, TypeScript, Vite y Tailwind, optimizado para accesibilidad y rendimiento.",
        technologies: [
          { name: "React", logo: "react" },
          { name: "TypeScript", logo: "typescript" },
          { name: "Tailwind", logo: "tailwind" },
          { name: "Vite", logo: "vite" },
        ],
        links: [
          {
            text: "Sitio en vivo",
            icon: "fas fa-external-link-alt",
            url: "https://jjimenezg19.github.io/johan_portafolio/",
          },
          // { text: "GitHub", icon: "fab fa-github", url: "https://github.com/jjimenezg19/johan_portafolio" },
        ],
      },
      {
        gallery: ["lts-1", "lts-2", "lts-3", "lts-4", "lts-5"],
        title: "Latino Transit Solutions",
        subtitle: "Proyecto universitario",
        description:
          "Plataforma de gestión de envíos: registro de transportes, definición y aprobación de rutas, asociación de envíos a transportes y seguimiento del estado.",
        technologies: [
          { name: "React", logo: "react" },
          { name: "Tailwind", logo: "tailwind" },
          { name: "Node.js", logo: "nodejs" },
          { name: "TypeScript", logo: "typescript" },
        ],
        links: [
          {
            text: "Visitar GitHub",
            icon: "fab fa-github",
            url: "https://github.com/haroldcdb/LatinoTransitSolutions",
          },
        ],
      },
      {
        gallery: ["dsv-1", "dsv-2", "dsv-3", "dsv-4", "dsv-5"],
        title: "Design System para Vue",
        subtitle: "Proyecto personal",
        description:
          "Librería de componentes para Vue: desde controles de formulario hasta componentes avanzados como gráficos, cargador de imágenes y calendario.",
        technologies: [
          { name: "Vue", logo: "vue" },
          { name: "JavaScript", logo: "javascript" },
          { name: "CSS", logo: "css" },
          { name: "GSAP", logo: "gsap" },
        ],
        links: [
          {
            text: "Visitar GitHub",
            icon: "fab fa-github",
            url: "https://github.com/haroldcdb/vue-framework",
          },
        ],
      },
    ],
    skills: {
      title: "Habilidades",
      subtitle:
        "Tecnologías y herramientas que más utilizo como desarrollador frontend (y un poco de backend).",
      indication: "Clic y desliza a la izquierda",
    },
    ideals: {
      title: "Ideales",
      content: [
        {
          title: "Misión",
          text: (
            <p className="text-balance">
              Aportar mis habilidades para ayudar a los equipos a entregar
              interfaces fiables y accesibles, logrando grandes resultados
              mediante mejoras constantes y enfocadas.
            </p>
          ),
        },
        {
          title: "Visión",
          text: (
            <p className="text-balance">
              Crecer como ingeniero web destacado en una empresa líder,
              aprendiendo y guiando a otros mientras entrego productos de alto
              impacto.
            </p>
          ),
        },
        {
          title: "Valores",
          text: (
            <p className="text-balance">
              Valoro la{" "}
              <span className="text-accent font-bold">solidaridad</span> al
              ayudar a otros, el{" "}
              <span className="text-accent font-bold">respeto</span> por las
              ideas de mis colegas, la{" "}
              <span className="text-accent font-bold">honestidad</span> con
              ética profesional y la{" "}
              <span className="text-accent font-bold">gratitud</span> por cada
              oportunidad de aprendizaje.
            </p>
          ),
        },
      ],
    },
    experience: {
      title: "Experiencia",
      content: [
        {
          time: "2021 — Actualidad",
          title: "Desarrollador Web Full‑stack",
          subtitle: "Reboot CR — 4thewords.com",
          text: "Mantenimiento y evolución de una app web comercial: resolución de deuda técnica, nuevas funcionalidades (desde widgets hasta pantallas completas) y corrección de bugs en áreas legacy y modernas. Trabajo en frontend y backend, con algo de DevOps.",
        },
        {
          time: "2018",
          title: "Desarrollador Web Full‑stack",
          subtitle: "Cubik — LimOn (Proyecto universitario)",
          text: "Diseño y desarrollo de una app de registro de hoteles y sitios turísticos con reservas. Levantamiento de requerimientos y documentación formal con casos de uso, simulando un entorno laboral real.",
        },
      ],
    },
    education: {
      title: "Educación",
      content: [
        {
          time: "2021 — Actualidad",
          title: "Bachillerato en Ingeniería del Software",
          subtitle: "Universidad Cenfotec",
        },
        {
          time: "2024 — Actualidad",
          title: "Curso de inglés intensivo",
          subtitle: "Fundatec — TEC",
        },
        {
          time: "2018 — 2019",
          title: "Técnico en Ingeniería del Software",
          subtitle: "Universidad Cenfotec",
        },
      ],
    },
    contact: {
      title: "Contáctame",
      subtitle:
        "Puedes contactarme enviando el formulario a continuación; te responderé lo antes posible.",
      email: "Correo",
      subject: "Asunto",
      message: "Mensaje",
      button: "Enviar",
    },
    footer: {
      slogan: "Visión clara, código claro",
    },
  },
};
