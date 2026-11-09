// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fdlstudio.net',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
});
