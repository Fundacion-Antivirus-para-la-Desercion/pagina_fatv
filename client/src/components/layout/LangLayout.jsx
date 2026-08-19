import PropTypes from "prop-types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../routes/routes.config";
import Layout from "./Layout";

/**
 * Sincroniza el idioma de i18next con el prefijo de la URL.
 *
 * Es la inversión central de esta arquitectura: la URL pasa a ser la fuente de
 * verdad del idioma, y localStorage queda solo para decidir a dónde entra
 * alguien que llega a "/". Sin esto, abrir /en/foundation con "es" guardado
 * mostraría una URL en inglés con contenido en español.
 *
 * En la carga inicial el idioma ya viene resuelto por el detector `path` de
 * i18next (ver components/i18n/i18n.js); este efecto cubre la navegación
 * cliente posterior, por ejemplo al usar el selector de idioma.
 */
const LangLayout = ({ lang }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.resolvedLanguage !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <Layout />;
};

LangLayout.propTypes = {
  lang: PropTypes.oneOf(LANGUAGES).isRequired,
};

export default LangLayout;
