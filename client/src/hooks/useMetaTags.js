import { useEffect } from "react";

/**
 * Hook para actualizar dinámicamente los meta tags Open Graph en <head>
 * Útil para compartir en redes sociales con preview correcto
 * @param {Object} metadata - Objeto con { title, description, image, url }
 */
export function useMetaTags(metadata) {
  useEffect(() => {
    if (!metadata) return;

    const setMetaTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (metadata.title) setMetaTag("og:title", metadata.title);
    if (metadata.description) setMetaTag("og:description", metadata.description);
    if (metadata.image) setMetaTag("og:image", metadata.image);
    if (metadata.url) setMetaTag("og:url", metadata.url);
  }, [metadata]);
}
