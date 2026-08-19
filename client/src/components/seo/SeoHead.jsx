import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { buildPath } from "../../routes/routeHelpers";
import {
  DEFAULT_LANG,
  LANGS,
  ORIGIN,
  ROUTE_SLUGS,
} from "../../routes/routes.config";
import { useRoute } from "../../routes/useRoute";

const SITE_NAME = "Fundación Antivirus para la Deserción";

/**
 * Cabecera SEO única para todas las vistas.
 *
 * Además del title y la description que ya había, emite las tres señales que
 * faltaban y que son las que permiten indexar el sitio en dos idiomas:
 *   - <html lang> correcto según la URL
 *   - canonical (resuelve además el contenido duplicado por mayúsculas que
 *     arrastraban las rutas viejas)
 *   - alternate/hreflang cruzados entre es y en
 *
 * `titleKey`/`descriptionKey` cubren el patrón habitual; `title`/`description`
 * son la salida para páginas con contenido dinámico, como el detalle de noticia.
 */
const SeoHead = ({
  routeKey,
  titleKey,
  descriptionKey,
  title,
  description,
  image,
  search = "",
}) => {
  const { t } = useTranslation();
  const { lang } = useRoute();

  const pageTitle = titleKey
    ? `${t(titleKey)} | ${SITE_NAME}`
    : title || SITE_NAME;
  const pageDescription = descriptionKey ? t(descriptionKey) : description;
  const canonical = `${ORIGIN}${buildPath(routeKey, lang)}${search}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{pageTitle}</title>
      {pageDescription && <meta name="description" content={pageDescription} />}

      <link rel="canonical" href={canonical} />
      {LANGS.map((alternateLang) => (
        <link
          key={alternateLang}
          rel="alternate"
          hrefLang={alternateLang}
          href={`${ORIGIN}${buildPath(routeKey, alternateLang)}${search}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${ORIGIN}${buildPath(routeKey, DEFAULT_LANG)}${search}`}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      {pageDescription && (
        <meta property="og:description" content={pageDescription} />
      )}
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};

SeoHead.propTypes = {
  routeKey: PropTypes.oneOf(Object.keys(ROUTE_SLUGS)).isRequired,
  titleKey: PropTypes.string,
  descriptionKey: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  search: PropTypes.string,
};

export default SeoHead;
