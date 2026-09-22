import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsHe from './locales/he.json';
import translationsEn from './locales/en.json';

const STORAGE_KEY = 'lang';

const stored = (() => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'he' || value === 'en' ? value : null;
  } catch {
    return null;
  }
})();

i18n.use(initReactI18next).init({
  resources: {
    he: { translation: translationsHe },
    en: { translation: translationsEn },
  },
  // English by default: the primary audience is engineering recruiters and
  // hiring managers, many of whom do not read Hebrew. Hebrew stays one click away.
  lng: stored ?? 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

const applyDocumentLanguage = (lng: string) => {
  const isHebrew = lng === 'he';
  document.documentElement.lang = isHebrew ? 'he' : 'en';
  document.documentElement.dir = isHebrew ? 'rtl' : 'ltr';
  try {
    localStorage.setItem(STORAGE_KEY, isHebrew ? 'he' : 'en');
  } catch {
    /* storage unavailable (private mode) — direction still applies */
  }
};

applyDocumentLanguage(i18n.language);
i18n.on('languageChanged', applyDocumentLanguage);

export default i18n;
