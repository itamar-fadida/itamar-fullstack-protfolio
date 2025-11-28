import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsHe from './locales/he.json';
import translationsEn from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      he: { translation: translationsHe },
      en: { translation: translationsEn },
    },
    lng: 'he', // Default language (Hebrew)
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

