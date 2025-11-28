import { useTranslation } from "react-i18next";

/**
 * Custom Hook: useImageByLanguage
 * * Propósito: Retorna la fuente de la imagen correcta basándose en el idioma actual (en, es).
 *
 * @param {Object} imageMap - Objeto que mapea los idiomas a las fuentes de las imágenes.
 * @param {string} imageMap.enImage - La fuente de la imagen para Inglés.
 * @param {string} imageMap.esImage - La fuente de la imagen para Español.
 * @returns {string} La fuente (URL o path) de la imagen a renderizar.
 */
const useImageByLanguage = ({ enImage, esImage, keyTitle = "" }) => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  if (currentLanguage === "en") {
    return {
      src: enImage,
      alt: t(keyTitle),
    };
  }

  currentLanguage === "es";
  return {
    src: esImage,
    alt: t(keyTitle),
  };
};

export default useImageByLanguage;
