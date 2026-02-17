import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// i18next configuration for React + Vite
// - Default language: Spanish (es)
// - Supported languages: es, en
// - Language detection with localStorage persistence
// - Lazy loading JSON files from /public/locales/{{lng}}/{{ns}}.json

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['es', 'en'],
    fallbackLng: 'es',
    load: 'languageOnly',
    ns: ['translation'],
    defaultNS: 'translation',
    detection: {
      // Prefer persisted user choice; default to fallback 'es'
      order: ['localStorage', 'querystring', 'cookie'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    react: {
      useSuspense: true,
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    },
    debug: false,
    returnNull: false,
    returnEmptyString: false,
  });

export default i18n;
