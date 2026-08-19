import { DEFAULT_LANGUAGE, LANGUAGES, SLUGS_PAGES } from "./routes.config.js";

/** Obtiene el idioma de la pagina; si recibe un lang que no es permitido, devuelve el idioma por defecto. */
const getLanguage = (lang) =>
  LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;

/** Devuelve el slug de la página para el idioma indicado: "fundacion" en es, "foundation" en en. */
const getSlugByKeyAndLanguage = (key, lang) => SLUGS_PAGES[key]?.[lang];

/** Lo que se devuelve cuando la dirección no corresponde a ninguna página. */
const NO_MATCH = Object.freeze({ key: null, lang: DEFAULT_LANGUAGE });

/**
 * Construye la URL completa de una página en el idioma indicado.
 *
 * buildPath("foundation", "en") -> "/en/foundation"
 * buildPath("foundation", "es") -> "/es/fundacion"
 * buildPath("home", "es")       -> "/es"
 * buildPath("foundation", "pt") -> "/es/fundacion"   idioma no soportado: cae al español
 *
 * @throws {Error} Si la clave de página no existe en la configuración. Falla en el
 *   primer render para detectar enlaces rotos en desarrollo, antes de que lleguen a producción.
 */
export const buildPath = (key, lang) => {
  const language = getLanguage(lang);
  const slug = getSlugByKeyAndLanguage(key, language);

  if (slug === undefined) {
    throw new Error(
      `[routes] La key "${key}" no existe en SLUGS_PAGES (idioma "${language}").`,
    );
  }

  return slug === "" ? `/${language}` : `/${language}/${slug}`;
};

/**
 * Separa una dirección en sus dos partes: el idioma y slug.
 *
 * "/es/fundacion"        -> { lang: "es", slug: "fundacion" }
 * "/es/noticias/detalle" -> { lang: "es", slug: "noticias/detalle" }
 * "/es"                  -> { lang: "es", slug: "" }
 */
const splitPathnameByLanguageAndSlug = (pathname) => {
  const segments = String(pathname).toLowerCase().split("/").filter(Boolean);

  const [langSegment, ...slugSegments] = segments;

  return { lang: langSegment, slug: slugSegments.join("/") };
};

/**
 * Identifica qué página corresponde a una URL y en qué idioma está.
 * Es la operación inversa de buildPath.
 *
 * getPageFromURL("/es/fundacion")  -> { key: "foundation", lang: "es" }
 * getPageFromURL("/EN/Foundation") -> { key: "foundation", lang: "en" }
 * getPageFromURL("/fundacion")     -> { key: null,         lang: "es" }
 *
 * key es null cuando la URL no corresponde a ninguna página conocida: un 404
 * o una dirección anterior a la migración. lang siempre devuelve un valor válido.
 */
export const getPageFromURL = (pathname) => {
  const { lang, slug } = splitPathnameByLanguageAndSlug(pathname);

  if (!LANGUAGES.includes(lang)) return NO_MATCH;

  return {
    key:
      Object.keys(SLUGS_PAGES).find(
        (key) => getSlugByKeyAndLanguage(key, lang).toLowerCase() === slug,
      ) ?? null,
    lang,
  };
};

/**
 * Obtiene el idioma por defecto del usuario al entrar por la raíz (/).
 *
 * En todas las demás rutas el idioma viene en la URL (/es/..., /en/...).
 * Aquí no hay URL que consultar, así que se lee del localStorage para decidir
 * a cuál versión redirigir.
 */
export const getDefaultLanguage = () => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const stored = window.localStorage.getItem("i18nextLng");
  const langCode = stored?.slice(0, 2);

  return getLanguage(langCode);
};
