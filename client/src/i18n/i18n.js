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
      // La URL manda: /en/... arranca en inglés sin flash de español.
      // localStorage queda como memoria de la última elección, para decidir
      // a dónde redirige "/" (ver getDefaultLanguage en routes/routeHelpers).
      order: ['path', 'localStorage', 'querystring', 'cookie'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      requestOptions: {
        cache: 'no-cache',
      },
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
