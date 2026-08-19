import { DEFAULT_LANG, LANGS, ROUTE_SLUGS } from "./routes.config.js";

/**
 * Helpers de rutas localizadas.
 *
 * Igual que `routes.config.js`, este archivo debe permanecer libre de JSX y de
 * dependencias de Vite: lo importa `scripts/generateSEO.js` desde Node.
 */

const normalizeLang = (lang) => (LANGS.includes(lang) ? lang : DEFAULT_LANG);

/**
 * Construye el path absoluto de una ruta en un idioma.
 * buildPath("foundation", "en") -> "/en/foundation"
 * buildPath("home", "es")       -> "/es"
 */
export const buildPath = (key, lang) => {
  const safeLang = normalizeLang(lang);
  const slug = ROUTE_SLUGS[key]?.[safeLang];

  if (slug === undefined) {
    throw new Error(
      `[routes] La key "${key}" no existe en ROUTE_SLUGS (idioma "${safeLang}").`
    );
  }

  return slug ? `/${safeLang}/${slug}` : `/${safeLang}`;
};

/**
 * Lookup inverso: de un pathname a la key lógica y el idioma.
 * Devuelve `{ key: null }` si el pathname no corresponde a ninguna ruta
 * conocida (404, o una URL legacy todavía sin migrar).
 */
export const resolveRoute = (pathname) => {
  const segments = String(pathname).toLowerCase().split("/").filter(Boolean);
  const [maybeLang, ...rest] = segments;

  if (!LANGS.includes(maybeLang)) return { key: null, lang: DEFAULT_LANG };

  const slug = rest.join("/");
  const key =
    Object.keys(ROUTE_SLUGS).find(
      (routeKey) => ROUTE_SLUGS[routeKey][maybeLang].toLowerCase() === slug
    ) ?? null;

  return { key, lang: maybeLang };
};

/**
 * Idioma preferido para la redirección desde "/".
 * La URL es la fuente de verdad del idioma en el resto de la app; localStorage
 * solo decide a dónde entra alguien que llega a la raíz.
 */
export const detectPreferredLang = () => {
  if (typeof window === "undefined") return DEFAULT_LANG;
  return normalizeLang(window.localStorage.getItem("i18nextLng")?.slice(0, 2));
};
