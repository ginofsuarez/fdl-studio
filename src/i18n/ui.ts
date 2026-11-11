export const languages = { en: 'English', es: 'Español', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title': 'FDL Studio | Oracle APEX Consultancy',
    'meta.description': 'Senior Oracle APEX consultancy: enterprise applications, Oracle Cloud and applied AI.',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.process': 'How we work',
    'nav.contact': 'Contact',
    'cta.contact': 'Start a conversation',
    'footer.rights': 'All rights reserved.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.offices': 'Offices',
    'footer.team': 'Team',
    'footer.ctaTitle': 'Have a project in mind?',
    'footer.ctaText': 'Tell us about your operation. We reply within one business day.',
  },
  es: {
    'meta.title': 'FDL Studio | Consultoría Oracle APEX',
    'meta.description': 'Consultoría senior en Oracle APEX: aplicaciones empresariales, Oracle Cloud e IA aplicada.',
    'nav.services': 'Servicios',
    'nav.work': 'Casos',
    'nav.process': 'Cómo trabajamos',
    'nav.contact': 'Contacto',
    'cta.contact': 'Conversemos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.offices': 'Oficinas',
    'footer.team': 'Equipo',
    'footer.ctaTitle': '¿Tienes un proyecto en mente?',
    'footer.ctaText': 'Cuéntanos sobre tu operación. Respondemos en un día hábil.',
  },
  fr: {
    'meta.title': 'FDL Studio | Conseil Oracle APEX',
    'meta.description': 'Conseil senior Oracle APEX : applications d’entreprise, Oracle Cloud et IA appliquée.',
    'nav.services': 'Services',
    'nav.work': 'Réalisations',
    'nav.process': 'Notre méthode',
    'nav.contact': 'Contact',
    'cta.contact': 'Discutons',
    'footer.rights': 'Tous droits réservés.',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.offices': 'Bureaux',
    'footer.team': 'Équipe',
    'footer.ctaTitle': 'Un projet en tête ?',
    'footer.ctaText': 'Parlez-nous de vos opérations. Nous répondons en un jour ouvrable.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Path for the same page in another language. */
export function localizedPath(path: string, lang: Lang) {
  const clean = path.replace(/^\/(es|fr)(?=\/|$)/, '') || '/';
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}
