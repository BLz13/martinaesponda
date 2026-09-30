export const SECTIONS = {
  en :  [ "start", "contact", "experience", "education", "skills", "projects" ],
  es :  [ "inicio", "contacto", "experiencia", "educacion", "habilidades", "proyectos" ],
};

export const LINKS = {
  github: { id: "github", link: "https://github.com/BLz13" },
  cv: {
    en: { id: "cvEN", text:"download resume", link: "https://drive.google.com/file/d/1S22_ZkQ5S1A06kwKrI5OAMKP24rlxtpJ/view?usp=drive_link" },
    es: { id: "cvES", text:"descargar currículum", link: "https://drive.google.com/file/d/1aahTUe_Lr6RlBVbCt5HzIXUBD9TYvj4q/view?usp=drive_link" }
  },
};

export const TEXT = {
  start : {
    en : {
      name: {
        id: "name",
        value: 'martina esponda'
      },
      title: {
        id: "title",
        value: 'architect & interior designer'
      },
      paragraph: {
        id: "introduction",
        value: 'Graduated architect with expertise in architectural design, 3D modeling, and construction documentation. Skilled in AutoCAD, Revit, Tekla Structures, and rendering software including Lumion, Enscape, and Sketchup. Experienced in developing detailed architectural plans, 3D models, and construction drawings for residential and commercial projects. Passionate about creating functional, aesthetic spaces that blend technical precision with creative design.'
      },
    },
    es : {
      name: {
        id: "nombre",
        value: 'martina esponda'
      },
      title: {
        id: "título",
        value: 'arquitecta & diseñadora de interiores'
      },
      paragraph: {
        id: "introducción",
        value: 'Arquitecta recibida con experiencia en diseño arquitectónico, modelado 3D y documentación de construcción. Competente en AutoCAD, Revit, Tekla Structures y software de renderizado incluyendo Lumion, Enscape y Sketchup. Experiencia en el desarrollo de planos arquitectónicos detallados, modelos 3D y dibujos de construcción para proyectos residenciales y comerciales. Apasionada por crear espacios funcionales y estéticos que combinen precisión técnica con diseño creativo.'
      },
    },
  },
  contact : {
    en : {
      address : {
        id: 'address',
        city : 'Mar del Plata',
        country: 'Argentina'
      },
      linkedin : {
        id: 'linkedin',
        value: 'https://www.linkedin.com/in/martina-esponda-architect/'
      },
      phone : {
        id: 'phone',
        value: '(+54) 223 596 0651',
        number: 542235960651,
      },
      email : {
        id: 'email',
        value: 'martinaesponda2023@gmail.com'
      }
    },
    es : {
      address : {
        id: 'dirección',
        city : 'Mar del Plata',
        country: 'Argentina'
      },
      linkedin : {
        id: 'linkedin',
        value: 'https://www.linkedin.com/in/martina-esponda-architect/'
      },
      phone : {
        id: 'teléfono',
        value: '(+54) 223 596 0651',
        number: 542235960651,
      },
      email : {
        id: 'mail',
        value: 'martinaesponda2023@gmail.com'
      }
    },
  },
  experience : {
    en : [
      [ "experience", "company", "location", "duration", "title", "tasks" ],
      {
        company : 'solana oficina técnica',
        place : 'mar del plata, argentina',
        title : 'architectural drafter & designer',
        duration : 'august 2023 - present',
        tasks : [
          "Developed architectural plans, 3D models, and construction drawings for residential remodeling projects",
          "Created detailed technical drawings using AutoCAD and Revit for fabrication and construction",
          "Produced realistic renders and visualizations using Lumion 9 and Enscape for client presentations",
          "Coordinated with contractors and suppliers to ensure accurate project execution",
          "Performed material computations and prepared purchase requests for construction projects"
        ]
      },
      {
        company : 'solana',
        place : 'mar del plata, argentina',
        title : 'autocad drafter (internship)',
        duration : 'may/june 2023',
        tasks : [
          "Assisted in creating 3D models and technical drawings for Lamb Weston project using Tekla Structures",
          "Prepared fabrication and erection drawings for steel structures",
          "Developed civil engineering plans and site layouts in AutoCAD",
          "Performed material quantity calculations and procurement requests",
          "Collaborated with engineering team on structural design documentation"
        ]
      }
    ],
    es : [
      [ "experiencia", "empresa", "ubicación", "duración", "cargo", "tareas" ],
      {
        company : 'solana oficina técnica',
        place : 'mar del plata, argentina',
        title : 'dibujante proyectista arquitectónico',
        duration : 'agosto 2023 - presente',
        tasks : [
          "Desarrollé planos arquitectónicos, modelos 3D y dibujos de construcción para proyectos de remodelación residencial",
          "Creé dibujos técnicos detallados utilizando AutoCAD y Revit para fabricación y construcción",
          "Producí renders realistas y visualizaciones usando Lumion 9 y Enscape para presentaciones a clientes",
          "Coordiné con contratistas y proveedores para asegurar la ejecución precisa del proyecto",
          "Realicé cómputos de materiales y preparé solicitudes de compra para proyectos de construcción"
        ]
      },
      {
        company : 'solana',
        place : 'mar del plata, argentina',
        title : 'dibujante en autocad (pasantía)',
        duration : 'mayo/junio 2023',
        tasks : [
          "Asistí en la creación de modelos 3D y dibujos técnicos para el proyecto Lamb Weston usando Tekla Structures",
          "Preparé dibujos de fabricación y erigición para estructuras de acero",
          "Desarrollé planos de ingeniería civil y diseños de sitio en AutoCAD",
          "Realicé cálculos de cantidades de materiales y solicitudes de compra",
          "Colaboré con el equipo de ingeniería en la documentación de diseño estructural"
        ]
      }
    ],
  },
  education : {
    en : [
      [ "education", "institution", "place", "title", "duration", "status" ],
      {
        institution : 'universidad nacional de mar del plata',
        place : 'mar del plata, buenos aires, argentina',
        title : 'bachelor of architecture',
        duration : '2017 - 2023',
        status : 'graduated with academic honors'
      }
    ],
    es : [
      [ "educación", "institución", "ubicación", "título", "duración", "estado" ],
      {
        institution : 'universidad nacional de mar del plata',
        place : 'mar del plata, buenos aires, argentina',
        title : 'licenciada en arquitectura',
        duration : '2017 - 2023',
        estado : 'graduada con reconocimiento académico'
      }
    ],
  },
  skills : {
    en : [
      ["skills", "technical skills", "software skills", "languages"],
      ['AutoCAD 2D/3D', 'Revit Architecture', 'Tekla Structures (Steel & Concrete)', 'Lumion 9 Rendering', 'Enscape Rendering', 'SketchUp Pro', 'AutoCAD Civil 3D'],
      ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'Microsoft Office Suite'],
      [
        "Spanish (Native)",
        "English (Advanced - First Certificate Cambridge)"
      ]
    ],
    es : [
      ["habilidades", "habilidades técnicas", "habilidades de software", "idiomas"],
      ['AutoCAD 2D/3D', 'Revit Arquitectura', 'Tekla Structures (Acero & Hormigón)', 'Lumion 9 Renderizado', 'Enscape Renderizado', 'SketchUp Pro', 'AutoCAD Civil 3D'],
      ['Adobe Photoshop', 'Adobe Ilustrador', 'CorelDRAW', 'Paquete Microsoft Office'],
      [
        "Español (Nativo)",
        "Inglés (Avanzado - First Certificate Cambridge)"
      ]
    ],
  },
  projects : {
    en : [
      {
        link : "",
        github: "",
        title : "residential remodeling project",
        description : [
          "Complete architectural renovation of a residential property including spatial redesign, technical documentation, and 3D visualization",
          "Developed floor plans, elevations, sections, and construction details using AutoCAD and Revit",
          "Created realistic 3D renders and walkthroughs using Lumion 9 and Enscape for client approval",
          "Prepared construction documents and material specifications for contractor bidding"
        ],
        imgs : {
          link : "",
          alts : []
        }
      },
      {
        link : "",
        github: "",
        title : "custom furniture design",
        description : [
          "Design and fabrication of custom interior furniture pieces for residential spaces",
          "Developed ergonomic and aesthetic furniture concepts using SketchUp",
          "Produced technical drawings and material specifications for fabrication",
          "Selected finishes, fabrics, and hardware to complement interior design schemes"
        ],
        imgs : {
          link : "",
          alts : []
        }
      },
      {
        link : "",
        github: "",
        title : "santa cruz territorial analysis",
        description : [
          "Academic practicum project processing territorial data for localities in Santa Cruz province",
          "Analyzed geographic, demographic, and infrastructure data using GIS mapping tools",
          "Identified developmental challenges and proposed urban planning interventions",
          "Prepared technical reports and presentation materials for municipal stakeholders"
        ],
        imgs : {
          link : "",
          alts : []
        }
      }
    ],
    es : [
      {
        link : "",
        github: "",
        title : "proyecto de remodelación residencial",
        description : [
          "Renovación arquitectónica completa de una propiedad residencial incluyendo rediseño espacial, documentación técnica y visualización 3D",
          "Desarrollé planos de planta, alzados, secciones y detalles constructivos utilizando AutoCAD y Revit",
          "Creé renders 3D realistas y recorridos virtuales usando Lumion 9 y Enscape para aprobación de clientes",
          "Preparé documentos de construcción y especificaciones de materiales para licitación de contratistas"
        ],
        imgs : {
          link : "",
          alts : []
        }
      },
      {
        link : "",
        github: "",
        title : "diseño de mobiliario personalizado",
        description : [
          "Diseño y fabricación de piezas de mobiliario interior personalizado para espacios residenciales",
          "Desarrollé conceptos ergonómicos y estéticos de mobiliario utilizando SketchUp",
          "Producí dibujos técnicos y especificaciones de materiales para la fabricación",
          "Selección de acabados, telacos y herrajes para complementar los esquemas de diseño de interiores"
        ],
        imgs : {
          link : "",
          alts : []
        }
      },
      {
        link : "",
        github: "",
        title : "análisis territorial santa cruz",
        description : [
          "Proyecto de práctica pre-profesional procesando datos territoriales para localidades de la provincia de Santa Cruz",
          "Analicé datos geográficos, demográficos e infraestructurales utilizando herramientas de mapeo GIS",
          "Identifiqué desafíos de desarrollo y propuse intervenciones de planificación urbana",
          "Preparé informes técnicos y materiales de presentación para autoridades municipales"
        ],
        imgs : {
          link : "",
          alts : []
        }
      }
    ]
  }
};