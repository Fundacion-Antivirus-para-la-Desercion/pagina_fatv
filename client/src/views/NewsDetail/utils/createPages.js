/**
 * Crea un array de páginas a partir de un array de items y un número de items por página.
 * Cada página es un array de items.
 * @param {Array<any>} items El array de items a dividir en páginas
 * @param {number} itemsPerPage El número de items por página
 * @returns {Array<Array<any>>} Un array de páginas, cada página es un array de items
 *  - Mínimo 2 páginas para mostrar el libro abierto
 *  - Número par de páginas → efecto flip estándar en todas las noticias
 */
const createPages = (items = [], itemsPerPage = 2) => {
  const pages = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }

  if (pages.length < 2) pages.push([]);

  if (pages.length % 2 !== 0) pages.push([]);

  return pages;
};

export default createPages;
