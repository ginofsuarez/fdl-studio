import type { Lang } from './ui';

type Card = { title: string; text: string; points: string[] };
type Step = { title: string; text: string };

export type HomeCopy = {
  hero: { eyebrow: string; title: string; lead: string; primary: string; secondary: string };
  services: { title: string; intro: string; items: Card[] };
  process: { title: string; intro: string; steps: Step[] };
  models: { title: string; intro: string; items: { title: string; text: string }[] };
  team: { title: string; intro: string; photo: string };
  work: { title: string; intro: string; logo: string; caseTitle: string; caseText: string; quote: string };
  contact: {
    title: string; lead: string; emailLabel: string; officesLabel: string; followLabel: string;
    form: { name: string; email: string; company: string; message: string; optional: string; submit: string; orWrite: string; subject: string };
  };
};

export const home: Record<Lang, HomeCopy> = {
  en: {
    hero: {
      eyebrow: 'Software engineering · Oracle APEX & AI',
      title: 'Engineering that understands your business.',
      lead: 'We get to know your operation from the inside and own every decision that shapes the product: architecture, design, quality. AI helps us move faster; judgment and accountability stay with us.',
      primary: 'Start a conversation',
      secondary: 'See our services',
    },
    services: {
      title: 'What we do',
      intro: 'Four capabilities, one team that knows your system end to end.',
      items: [
        {
          title: 'Enterprise APEX applications',
          text: 'We turn manual, spreadsheet-driven processes into secure, fast web applications built on the Oracle Database.',
          points: ['New applications and portals', 'Legacy modernization: Forms, Access, Excel', 'PL/SQL and REST APIs with ORDS'],
        },
        {
          title: 'Applied AI & automation',
          text: 'AI inside your applications where it adds accuracy: reading documents, classifying requests and assisting your teams.',
          points: ['Document and data extraction', 'Assistants and semantic search', 'Workflow automation'],
        },
        {
          title: 'Oracle Cloud & DevOps',
          text: 'Reliable environments on Oracle Cloud, with monitoring, backups and delivery pipelines designed around the database.',
          points: ['APEX Service and Autonomous Database', 'CI/CD and environment strategy', 'Monitoring, backups and recovery'],
        },
        {
          title: 'Strategic consulting',
          text: 'Senior guidance on architecture, security and roadmap decisions for organizations with high compliance requirements.',
          points: ['Architecture and code reviews', 'Security and performance assessments', 'Technology roadmaps'],
        },
      ],
    },
    process: {
      title: 'How we work',
      intro: 'A clear path from idea to production, and a team that stays once the system is live.',
      steps: [
        { title: 'Discover', text: 'Understand the problem and the people behind it' },
        { title: 'Design', text: 'Architecture, scope and estimate' },
        { title: 'Build', text: 'Short iterations with frequent demos' },
        { title: 'Evolve', text: 'Support, operation and continuous improvement' },
      ],
    },
    models: {
      title: 'Ways to work together',
      intro: 'Choose the model that fits your stage and budget.',
      items: [
        { title: 'Projects', text: 'Defined scope, timeline and budget for a new application or a modernization.' },
        { title: 'Evolution hours', text: 'An annual bank of hours for new features and changes, prioritized by you and reported monthly.' },
        { title: 'Support & operations', text: 'Specialized support for your team and managed Oracle Cloud environments, with clear response times.' },
      ],
    },
    team: {
      title: 'Our team',
      intro: 'A small senior team: you work directly with the people who design and build your system.',
      photo: 'Photo coming soon',
    },
    work: {
      title: 'Clients & work',
      intro: 'Selected projects and what our clients say about them.',
      logo: 'Client logo',
      caseTitle: 'Case study',
      caseText: 'Coming soon.',
      quote: 'Client testimonial coming soon.',
    },
    contact: {
      title: 'Let’s talk about your project',
      lead: 'Tell us what you need to build or improve, and we’ll set up a first conversation.',
      emailLabel: 'Email',
      officesLabel: 'Offices',
      followLabel: 'Follow',
      form: { name: 'Name', email: 'Work email', company: 'Company', message: 'What do you need to build or improve?', optional: '(optional)', submit: 'Send message', orWrite: 'Or write to us at', subject: 'New inquiry from fdlstudio.net' },
    },
  },

  es: {
    hero: {
      eyebrow: 'Ingeniería de software · Oracle APEX e IA',
      title: 'Ingeniería que entiende tu negocio.',
      lead: 'Conocemos tu operación desde adentro y nos hacemos cargo de cada decisión que define el producto: arquitectura, diseño, calidad. La IA nos ayuda a avanzar más rápido; el criterio y la responsabilidad siguen siendo nuestros.',
      primary: 'Conversemos',
      secondary: 'Ver servicios',
    },
    services: {
      title: 'Qué hacemos',
      intro: 'Cuatro capacidades y un solo equipo que conoce tu sistema de punta a punta.',
      items: [
        {
          title: 'Aplicaciones empresariales con APEX',
          text: 'Convertimos procesos manuales y hojas de cálculo en aplicaciones web seguras y rápidas sobre Oracle Database.',
          points: ['Nuevas aplicaciones y portales', 'Modernización: Forms, Access, Excel', 'PL/SQL y APIs REST con ORDS'],
        },
        {
          title: 'IA aplicada y automatización',
          text: 'IA dentro de tus aplicaciones donde aporta precisión: lectura de documentos, clasificación de solicitudes y asistencia a tus equipos.',
          points: ['Extracción de documentos y datos', 'Asistentes y búsqueda semántica', 'Automatización de flujos'],
        },
        {
          title: 'Oracle Cloud y DevOps',
          text: 'Ambientes confiables en Oracle Cloud, con monitoreo, respaldos y pipelines de entrega diseñados alrededor de la base de datos.',
          points: ['APEX Service y Autonomous Database', 'CI/CD y estrategia de ambientes', 'Monitoreo, respaldos y recuperación'],
        },
        {
          title: 'Consultoría estratégica',
          text: 'Acompañamiento senior en decisiones de arquitectura, seguridad y hoja de ruta para organizaciones con altos requisitos de cumplimiento.',
          points: ['Revisiones de arquitectura y código', 'Evaluaciones de seguridad y rendimiento', 'Hojas de ruta tecnológicas'],
        },
      ],
    },
    process: {
      title: 'Cómo trabajamos',
      intro: 'Un camino claro de la idea a producción, y un equipo que se queda cuando el sistema ya está en marcha.',
      steps: [
        { title: 'Descubrir', text: 'Entender el problema y a las personas detrás' },
        { title: 'Diseñar', text: 'Arquitectura, alcance y estimación' },
        { title: 'Construir', text: 'Iteraciones cortas con demos frecuentes' },
        { title: 'Evolucionar', text: 'Soporte, operación y mejora continua' },
      ],
    },
    models: {
      title: 'Formas de trabajar juntos',
      intro: 'Elige el modelo que se ajusta a tu etapa y presupuesto.',
      items: [
        { title: 'Proyectos', text: 'Alcance, plazo y presupuesto definidos para una nueva aplicación o una modernización.' },
        { title: 'Bolsa de evolución', text: 'Horas anuales para nuevas funcionalidades y cambios, priorizadas por ti e informadas cada mes.' },
        { title: 'Soporte y operación', text: 'Soporte especializado para tu equipo y ambientes Oracle Cloud administrados, con tiempos de respuesta claros.' },
      ],
    },
    team: {
      title: 'Nuestro equipo',
      intro: 'Un equipo senior y cercano: trabajas directamente con quienes diseñan y construyen tu sistema.',
      photo: 'Foto próximamente',
    },
    work: {
      title: 'Clientes y proyectos',
      intro: 'Proyectos seleccionados y lo que dicen nuestros clientes.',
      logo: 'Logo de cliente',
      caseTitle: 'Caso de éxito',
      caseText: 'Próximamente.',
      quote: 'Testimonio de cliente próximamente.',
    },
    contact: {
      title: 'Hablemos de tu proyecto',
      lead: 'Cuéntanos qué necesitas construir o mejorar y coordinamos una primera conversación.',
      emailLabel: 'Correo',
      officesLabel: 'Oficinas',
      followLabel: 'Síguenos',
      form: { name: 'Nombre', email: 'Correo de trabajo', company: 'Empresa', message: '¿Qué necesitas construir o mejorar?', optional: '(opcional)', submit: 'Enviar mensaje', orWrite: 'O escríbenos a', subject: 'Nueva consulta desde fdlstudio.net' },
    },
  },

  fr: {
    hero: {
      eyebrow: 'Génie logiciel · Oracle APEX et IA',
      title: 'Une ingénierie qui comprend votre entreprise.',
      lead: 'Nous apprenons à connaître votre organisation de l’intérieur et assumons chaque décision qui façonne le produit : architecture, conception, qualité. L’IA nous aide à avancer plus vite; le jugement et la responsabilité demeurent les nôtres.',
      primary: 'Discutons',
      secondary: 'Nos services',
    },
    services: {
      title: 'Ce que nous faisons',
      intro: 'Quatre expertises, une seule équipe qui connaît votre système de bout en bout.',
      items: [
        {
          title: 'Applications d’entreprise APEX',
          text: 'Nous transformons des processus manuels et des chiffriers en applications web sécurisées et performantes sur Oracle Database.',
          points: ['Nouvelles applications et portails', 'Modernisation : Forms, Access, Excel', 'PL/SQL et API REST avec ORDS'],
        },
        {
          title: 'IA appliquée et automatisation',
          text: 'L’IA au cœur de vos applications là où elle apporte de la précision : lecture de documents, classement des demandes et assistance aux équipes.',
          points: ['Extraction de documents et de données', 'Assistants et recherche sémantique', 'Automatisation des flux'],
        },
        {
          title: 'Oracle Cloud et DevOps',
          text: 'Des environnements fiables sur Oracle Cloud, avec surveillance, sauvegardes et pipelines de livraison pensés autour de la base de données.',
          points: ['APEX Service et Autonomous Database', 'CI/CD et stratégie d’environnements', 'Surveillance, sauvegardes et reprise'],
        },
        {
          title: 'Conseil stratégique',
          text: 'Un accompagnement senior pour vos décisions d’architecture, de sécurité et de feuille de route dans des milieux à fortes exigences de conformité.',
          points: ['Revues d’architecture et de code', 'Évaluations de sécurité et de performance', 'Feuilles de route technologiques'],
        },
      ],
    },
    process: {
      title: 'Notre méthode',
      intro: 'Un parcours clair de l’idée à la production, et une équipe qui reste une fois le système en service.',
      steps: [
        { title: 'Comprendre', text: 'Le problème et les personnes concernées' },
        { title: 'Concevoir', text: 'Architecture, portée et estimation' },
        { title: 'Réaliser', text: 'Itérations courtes et démos fréquentes' },
        { title: 'Faire évoluer', text: 'Soutien, exploitation et amélioration continue' },
      ],
    },
    models: {
      title: 'Façons de travailler ensemble',
      intro: 'Choisissez le modèle adapté à votre étape et à votre budget.',
      items: [
        { title: 'Projets', text: 'Portée, échéancier et budget définis pour une nouvelle application ou une modernisation.' },
        { title: 'Banque d’heures', text: 'Des heures annuelles pour de nouvelles fonctionnalités et des changements, priorisées par vous et suivies chaque mois.' },
        { title: 'Soutien et exploitation', text: 'Un soutien spécialisé pour votre équipe et des environnements Oracle Cloud gérés, avec des délais de réponse clairs.' },
      ],
    },
    team: {
      title: 'Notre équipe',
      intro: 'Une petite équipe senior : vous travaillez directement avec ceux qui conçoivent et bâtissent votre système.',
      photo: 'Photo à venir',
    },
    work: {
      title: 'Clients et réalisations',
      intro: 'Une sélection de projets et ce qu’en disent nos clients.',
      logo: 'Logo client',
      caseTitle: 'Étude de cas',
      caseText: 'Bientôt disponible.',
      quote: 'Témoignage client bientôt disponible.',
    },
    contact: {
      title: 'Parlons de votre projet',
      lead: 'Dites-nous ce que vous souhaitez bâtir ou améliorer, et nous organiserons une première rencontre.',
      emailLabel: 'Courriel',
      officesLabel: 'Bureaux',
      followLabel: 'Suivez-nous',
      form: { name: 'Nom', email: 'Courriel professionnel', company: 'Entreprise', message: 'Que souhaitez-vous bâtir ou améliorer?', optional: '(facultatif)', submit: 'Envoyer le message', orWrite: 'Ou écrivez-nous à', subject: 'Nouvelle demande depuis fdlstudio.net' },
    },
  },
};
