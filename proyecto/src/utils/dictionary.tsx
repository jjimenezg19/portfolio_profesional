export const content = {
  En: {
    header: {
      cvButton: "Download resume",
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
      titleOne: "Hello, I'm",
      titleTwo: "Full-Stack Developer",
      subtitleOne:
        "I build software, chase horizons, and stay grounded through yoga",

      aboutMe:
        "I am bilingual in Spanish and English, with a solid background in C#, Java, JavaScript, and modern frameworks such as React. Passionate about writing clean, scalable, and maintainable code.",
    },
    projects: {
      title: "Projects",
      content: [
        {
          gallery: ["GA1", "GA2", "GA3", "GA4", "GA5", "GA6", "GA7"],
          title: "Gym Management System",
          subtitle: "University project",
          description:
            "An integral management system for fitness centers that optimizes business administration and client interaction. It manages users and roles, custom workout routines, appointment scheduling, access to group classes, and payment processing, with flexible options for different membership types.",
          technologies: [
            { name: "ASP.NET Core", logo: "dot-net" },
            { name: "C#", logo: "c--4" },
            { name: "JavaScript", logo: "javascript" },
            { name: "Node.js", logo: "nodejs" },
          ],
          links: [
            {
              text: "View on GitHub",
              icon: "fas fa-external-link-alt",
              url: "https://github.com/jjimenezg19/GymApp",
            },
          ],
        },
        {
          gallery: ["JA1", "JA2", "JA3", "JA4", "JA5", "JA6"],
          title: "Latino Transit Solutions",
          subtitle: "University project",
          description:
            "A shipment management platform that optimizes package delivery logistics through an integrated solution. It handles transport registration, route assignment and approval, and connects shipments with specific transports for better tracking and control.",
          technologies: [
            { name: "React", logo: "react" },
            { name: "Tailwind", logo: "tailwind" },
            { name: "Node.js", logo: "nodejs" },
            { name: "TypeScript", logo: "typescript" },
          ],
          links: [
            {
              text: "View on GitHub",
              icon: "fab fa-github",
              url: "https://github.com/jjimenezg19/LatinoTransitSolutions",
            },
          ],
        },
        {
          gallery: ["TS1", "TS2", "TS3", "TS4", "TS5"],
          title: "Educational Seeker Platform",
          subtitle: "University project",
          description:
            "A web application that centralizes key information from different schools to help parents make informed decisions. It allows comparing institutions by academic programs, extracurricular activities, tuition, and performance indicators.",
          technologies: [
            { name: "JavaScript", logo: "javascript" },
            { name: "CSS", logo: "css" },
            { name: "HTML", logo: "html" },
            { name: "MongoDB", logo: "mongodb" },
          ],
          links: [
            {
              text: "View on GitHub",
              icon: "fab fa-github",
              url: "https://github.com/jjimenezg19/Educational_Seeker",
            },
          ],
        },
      ],
    },

    skills: {
      title: "Skills",
      subtitle:
        "Technologies and tools I have worked with as a full-stack developer include:",
    },
    ideals: {
      title: "Ideals",
      content: [
        {
          title: "Mission",
          text: (
            <p className="text-balance">
              Develop modern, functional, and high-quality full-stack
              applications that provide efficient solutions to real-world
              problems, applying best programming practices with a user-centered
              approach to create intuitive, useful, and sustainable digital
              experiences.
            </p>
          ),
        },
        {
          title: "Vision",
          text: (
            <p className="text-balance">
              To be a developer recognized for creating software with purpose —
              positively impacting society by building innovative, inclusive,
              and sustainable digital solutions that transform ideas into
              meaningful improvements in people’s lives.
            </p>
          ),
        },
        {
          title: "Values",
          text: (
            <p className="text-balance">
              I value{" "}
              <span className="text-accent font-bold">Responsibility</span> I
              honor commitments and deliver quality results on time, which
              strengthens trust with the teams and organizations I collaborate
              with.
              <span className="text-accent font-bold"> Loyalty</span> I act with
              integrity and sound judgment in any situation to build long-term
              professional relationships.
              <span className="text-accent font-bold">
                {" "}
                Proactivity and Ingenuity
              </span>{" "}
              I stand out for finding creative solutions even in complex
              scenarios or with limited resources, always looking for the best
              way to add value.
            </p>
          ),
        },
      ],
    },
    experience: {
      title: "Experience",
      content: [
        {
          time: "May 2024 – Sep 2024",
          title: "Full-Stack Developer",
          subtitle: "FitStream Solutions",
          text: "Fictitious company created for the Project 2 course, where we designed and developed a web application for fitness center management. The system supports business administration and client interaction. The project included a detailed requirements phase and formal documentation with use cases, simulating a real-world work environment.",
        },
        {
          time: "Apr 2024 – Present",
          title: "Full-Stack Developer",
          subtitle: "Freelancer",
          text: "As a freelancer, I’ve strengthened my ability to work with tight deadlines while communicating clearly with clients. This role allows me to explore different ideas and learn from each project, watching how creative concepts turn into real, working solutions.",
        },
        {
          time: "Jan 2019 – May 2019",
          title: "Full-Stack Web Developer",
          subtitle: "JAMS Project",
          text: "Fictitious company created for the Project 1 course, where we designed and developed a web application called Educational Seeker. The platform helps parents decide between academic options for their children. The project simulated a real-world environment with requirements gathering, formal documentation, and system diagrams.",
        },
      ],
    },
    education: {
      title: "Education",
      content: [
        {
          time: "2020 — 2024",
          title: "Associate's Degree in Software Development",
          subtitle: "Universidad Cenfotec",
          text: "Cenfotec University provided me with a strong foundation in software development and ignited my passion for solving complex problems through code.",
        },
        {
          time: "2024 — Present",
          title: "Bachelor's Degree in Software Development",
          subtitle: "Universidad Cenfotec",
          text: "This program is helping me deepen my understanding of software architecture, design patterns, and real-world problem-solving.",
        },
        {
          time: "2025 — Present",
          title: "English as a Second Language — Intensive Course",
          subtitle: "SKYCTC",
          text: "This intensive ESL course is enhancing my proficiency in English, focusing on advanced grammar, vocabulary, and conversational skills to support my professional growth in the tech industry.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Feel free to reach out using the form below — I’ll get back to you as soon as possible.",
      email: "Email",
      subject: "Subject",
      message: "Message",
      button: "Submit",
    },
    footer: {
      slogan: "Copyright 2025. All Rights Reserved Johan Jimenez",
    },
  },

  Es: {
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
      titleTwo: "Desarrollador Full-Stack",
      subtitleOne:
        "Creo software, persigo nuevos horizontes y mantengo los pies en la tierra gracias al yoga.",
      aboutMe:
        "Soy bilingüe en español e inglés, con sólida formación en C#, Java, JavaScript y frameworks modernos como React. Apasionado por escribir código limpio, escalable y fácil de mantener.",
    },
    projects: {
      title: "Proyectos",
      content: [
        {
          gallery: ["GA1", "GA2", "GA3", "GA4", "GA5", "GA6", "GA7"],
          title: "Sistema de Gestión para Gimnasios",
          subtitle: "Proyecto universitario",
          description:
            "Sistema de gestión integral para centros de acondicionamiento físico que optimiza la administración del negocio y la interacción con los clientes. Permite gestionar usuarios y roles, rutinas personalizadas, citas, clases grupales y pagos, con opciones flexibles para distintos tipos de membresía.",
          technologies: [
            { name: "ASP.NET Core", logo: "dot-net" },
            { name: "C#", logo: "c--4" },
            { name: "JavaScript", logo: "javascript" },
            { name: "Node.js", logo: "nodejs" },
          ],
          links: [
            {
              text: "Ver en GitHub",
              icon: "fas fa-external-link-alt",
              url: "https://github.com/jjimenezg19/GymApp",
            },
          ],
        },
        {
          gallery: ["JA1", "JA2", "JA3", "JA4", "JA5", "JA6"],
          title: "Latino Transit Solutions",
          subtitle: "Proyecto universitario",
          description:
            "Plataforma de gestión de envíos que optimiza la logística de entrega de paquetes mediante el registro de transportes, asignación y aprobación de rutas, y asociación de envíos con transportes específicos para un mejor control y trazabilidad.",
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
              url: "https://github.com/jjimenezg19/LatinoTransitSolutions",
            },
          ],
        },
        {
          gallery: ["TS1", "TS2", "TS3", "TS4", "TS5"],
          title: "Plataforma Educational Seeker",
          subtitle: "Proyecto universitario",
          description:
            "Aplicación web que centraliza información clave de diferentes instituciones educativas para ayudar a padres y estudiantes a tomar decisiones informadas. Permite comparar centros educativos según programas académicos, actividades extracurriculares, colegiaturas y rendimiento estudiantil.",
          technologies: [
            { name: "JavaScript", logo: "javascript" },
            { name: "CSS", logo: "css" },
            { name: "HTML", logo: "html" },
            { name: "MongoDB", logo: "mongodb" },
          ],
          links: [
            {
              text: "Visitar GitHub",
              icon: "fab fa-github",
              url: "https://github.com/jjimenezg19/Educational_Seeker",
            },
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle:
        "Tecnologías y herramientas con las que he trabajado como desarrollador Full-Stack.",
    },
    ideals: {
      title: "Ideales",
      content: [
        {
          title: "Misión",
          text: (
            <p className="text-balance">
              Desarrollar aplicaciones tecnológicas Full-Stack modernas,
              funcionales y de alta calidad que brinden soluciones eficientes a
              problemas reales, aplicando buenas prácticas de programación con
              un enfoque centrado en el usuario para crear experiencias
              digitales intuitivas, útiles y sostenibles.
            </p>
          ),
        },
        {
          title: "Visión",
          text: (
            <p className="text-balance">
              Ser un desarrollador reconocido por crear software con propósito,
              impactando positivamente a la sociedad mediante soluciones
              digitales innovadoras, inclusivas y sostenibles, capaces de
              transformar ideas en mejoras que enriquezcan la vida de las
              personas.
            </p>
          ),
        },
        {
          title: "Valores",
          text: (
            <p className="text-balance">
              Valoro la{" "}
              <span className="text-accent font-bold">Responsabilidad</span>{" "}
              este valor fortalece la confianza de los equipos y organizaciones
              con los que colaboro.
              <span className="text-accent font-bold"> Lealtad</span> actúo con
              integridad y criterio en cualquier situación para generar
              relaciones de confianza a largo plazo.
              <span className="text-accent font-bold">
                {" "}
                Proactividad e Ingenio
              </span>{" "}
              me destaco por encontrar soluciones creativas incluso en
              situaciones complejas o con recursos limitados, buscando siempre
              la mejor forma de aportar valor.
            </p>
          ),
        },
      ],
    },
    experience: {
      title: "Experiencia",
      content: [
        {
          time: "Mayo 2024 – Septiembre 2024",
          title: "Desarrollador Full-Stack",
          subtitle: "FitStream Solutions",
          text: "Empresa ficticia creada para el curso Proyecto 2, en la cual diseñamos y desarrollamos una aplicación web para la gestión de centros de acondicionamiento físico. El sistema facilita la administración del negocio y la interacción con los clientes. El proyecto incluyó un levantamiento detallado de requerimientos y documentación formal con casos de uso, simulando un entorno laboral real.",
        },
        {
          time: "Abril 2024 – Actualidad",
          title: "Desarrollador Full-Stack",
          subtitle: "Freelancer",
          text: "Como freelancer, he perfeccionado mi capacidad para gestionar plazos ajustados mientras mantengo una comunicación clara con los clientes. Este rol me permite explorar ideas diversas y aprender de cada proyecto, viendo cómo las visiones creativas se convierten en soluciones funcionales.",
        },
        {
          time: "Enero 2019 – Mayo 2019",
          title: "Desarrollador Web Full-Stack",
          subtitle: "Proyecto JAMS",
          text: "Empresa ficticia creada para el curso Proyecto 1, donde diseñamos y desarrollamos la aplicación web Educational Seeker. Esta plataforma ayuda a los padres a tomar decisiones informadas al seleccionar opciones académicas para sus hijos. El proyecto simuló un entorno profesional real mediante sesiones de requerimientos, documentación formal y diagramas del sistema.",
        },
      ],
    },
    education: {
      title: "Educación",
      content: [
        {
          time: "2020 — 2024",
          title: "Técnico en Desarrollo de Software",
          subtitle: "Universidad Cenfotec",
          text: "La Universidad Cenfotec me brindó una sólida formación en desarrollo de software y despertó mi pasión por resolver problemas complejos mediante la programación.",
        },
        {
          time: "2025 — Actualidad",
          title: "Curso Intensivo de Inglés como Segundo Idioma (ESL)",
          subtitle: "SKYCTC",
          text: "Este curso intensivo de ESL está mejorando mi dominio del inglés, enfocándose en gramática avanzada, vocabulario y habilidades conversacionales para apoyar mi crecimiento profesional en la industria tecnológica.",
        },
        {
          time: "2024 — Actualidad",
          title: "Bachillerato en Ingeniería de Software",
          subtitle: "Universidad Cenfotec",
          text: "Este programa me está ayudando a profundizar mi comprensión sobre arquitectura de software, patrones de diseño y resolución de problemas del mundo real.",
        },
      ],
    },
    contact: {
      title: "Contáctame",
      subtitle:
        "No dudes en escribirme usando el formulario a continuación — te responderé lo antes posible.",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Mensaje",
      button: "Enviar",
    },
    footer: {
      slogan: "Copyright 2025. All Rights Reserved Johan Jimenez",
    },
  },
};
