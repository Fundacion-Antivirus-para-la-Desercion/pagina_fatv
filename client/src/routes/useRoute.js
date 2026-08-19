import { useLocation } from "react-router-dom";
import { buildPath, getPageFromURL } from "./routeHelpers";

/**
 * Acceso a la ruta actual en términos de la key lógica, no del string de URL.
 *
 * - `lang`       idioma activo, leído de la URL (no de localStorage).
 * - `routeKey`   key de la ruta actual, o null si no se reconoce.
 * - `to(key)`    path de otra ruta en el idioma activo.
 * - `pathForLang(l)` la MISMA ruta actual en otro idioma — es lo que permite
 *   cambiar de idioma sin salir de la página.
 */
export const useRoute = () => {
  const location = useLocation();
  const { key: routeKey, lang } = getPageFromURL(location.pathname);

  const to = (key) => buildPath(key, lang);

  const pathForLang = (targetLang) =>
    `${buildPath(routeKey ?? "home", targetLang)}${location.search}`;

  return { lang, routeKey, to, pathForLang };
};
