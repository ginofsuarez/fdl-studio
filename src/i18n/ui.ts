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
