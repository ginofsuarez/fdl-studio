/**
 * Site-wide settings. Values marked TODO are placeholders to complete later.
 */
export const site = {
  name: 'FDL Studio',
  email: 'contact@fdlstudio.net',
  social: {
    linkedin: '#', // TODO: real LinkedIn company URL
    github: '#',   // TODO: real GitHub organization URL
  },
  offices: [
    { key: 'canada', entity: 'FDL Studio', city: 'Québec', country: { en: 'Canada', es: 'Canadá', fr: 'Canada' } },
    { key: 'peru', entity: 'FDL LATAM S.A.C.S.', city: 'Lima', country: { en: 'Peru', es: 'Perú', fr: 'Pérou' } }, // TODO: confirm city
  ],
} as const;
