/**
 * Fuente única de verdad de las rutas del sitio.
 *
 * IMPORTANTE: este archivo debe permanecer libre de JSX y de imports.
 * Lo consume `scripts/generateSEO.js`, que corre en Node puro — si acá entra
 * cualquier módulo que dependa de Vite (`import.meta.env`, assets, etc.), el
 * script de sitemap se rompe. El mapa de componentes vive en `routes.pages.jsx`.
 */

export const LANGUAGES = ["es", "en"];
export const DEFAULT_LANGUAGE = "es";

export const ORIGIN = "https://pagina-web-antivirus.web.app";

/**
 * key lógica -> slug por idioma (sin "/" inicial).
 * La key es lo que se usa en el código; el slug solo aparece en la URL.
 *
 * `provocacion` y `atv-conecta/atv-connect` conservan el nombre del programa
 * en ambos idiomas: son marca, no texto traducible.
 */
export const SLUGS_PAGES = {
  home: { es: "", en: "" },
  foundation: { es: "fundacion", en: "foundation" },
  dataAnalytics: { es: "analitica-de-datos", en: "data-analytics" },
  socialIntervention: { es: "intervencion-social", en: "social-intervention" },
  communications: { es: "comunicaciones", en: "communications" },
  retention: { es: "gestion-de-la-permanencia", en: "student-retention" },
  consulting: { es: "consultorias", en: "consulting" },
  provocacion: { es: "provocacion", en: "provocacion" },
  atvConnect: { es: "atv-conecta", en: "atv-connect" },
  news: { es: "noticias", en: "news" },
  newsDetail: { es: "noticias/detalle", en: "news/detail" },
  contact: { es: "contacto", en: "contact" },
  donation: { es: "donaciones", en: "donate" },
};
