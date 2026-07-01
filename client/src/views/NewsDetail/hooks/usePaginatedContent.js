import { useCallback, useLayoutEffect, useRef, useState } from "react";

/**
 * Paginación de contenido midiendo el DOM real (no estimando por caracteres).
 *
 * A diferencia del viejo createPages.js —que calculaba alturas a partir del número
 * de caracteres y podía equivocarse, provocando texto recortado o columnas
 * irregulares— este hook renderiza el contenido en una capa oculta idéntica a la
 * página final, mide la altura real de cada bloque y arma las páginas con esas
 * medidas. Los párrafos que no caben se parten por palabra usando búsqueda binaria
 * sobre un elemento "splitter" con el mismo estilo tipográfico.
 */

// Espaciado vertical entre bloques (mb-4 = 16px). offsetHeight no incluye el
// margin del hijo, así que lo sumamos para reservar el hueco entre ítems.
const ITEM_SPACING = 16;

// Píxeles mínimos que deben quedar en una página para intentar partir un párrafo.
const SPLIT_MIN_REMAINING = 60;

/** Mide la altura real de un texto en el splitter (incluye el espaciado). */
const measureText = (splitterEl, text) => {
  const p = splitterEl.querySelector("[data-splitter-p]");
  p.textContent = text;
  return splitterEl.offsetHeight + ITEM_SPACING;
};

/**
 * Busca el mayor prefijo de palabras cuya altura renderizada quepa en maxHeight.
 * Devuelve { head, tail } o null si no cabe ni una palabra (o si cabe entero).
 */
const splitParagraphToFit = (splitterEl, text, maxHeight) => {
  const words = (text || "").split(/\s+/).filter(Boolean);
  if (words.length === 0) return null;

  const p = splitterEl.querySelector("[data-splitter-p]");
  const heightOf = (count) => {
    p.textContent = words.slice(0, count).join(" ");
    return splitterEl.offsetHeight + ITEM_SPACING;
  };

  if (heightOf(1) > maxHeight) return null; // ni una palabra entra

  let lo = 1;
  let hi = words.length;
  let best = 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (heightOf(mid) <= maxHeight) {
      best = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if (best >= words.length) return null; // cabe entero, no hace falta partir

  // Ensure the split doesn't land inside a <bold>...</bold> tag.
  const isTagBalanced = (count) => {
    const h = words.slice(0, count).join(" ");
    return (h.match(/<bold>/g) || []).length === (h.match(/<\/bold>/g) || []).length;
  };

  if (!isTagBalanced(best)) {
    let safe = best - 1;
    while (safe > 0 && !isTagBalanced(safe)) safe--;
    if (safe === 0) {
      safe = best + 1;
      while (safe < words.length && !isTagBalanced(safe)) safe++;
    }
    best = safe;
  }

  if (best <= 0 || best >= words.length) return null;
  return {
    head: words.slice(0, best).join(" "),
    tail: words.slice(best).join(" "),
  };
};

/**
 * Empaca los bloques medidos en páginas respetando el alto disponible.
 * @param {{item: object, height: number}[]} measured
 */
const buildPages = ({ measured, limit, firstPageLimit, isTwoPage, splitterEl }) => {
  const pages = [[]];
  const used = [0];
  const limitFor = (i) => (i === 0 ? firstPageLimit : limit);
  const openPage = () => {
    pages.push([]);
    used.push(0);
  };

  const queue = measured.map((m) => ({ ...m }));

  while (queue.length > 0) {
    const { item, height } = queue.shift();
    if (!item) continue;

    let placed = false;
    while (!placed) {
      const idx = pages.length - 1;
      const remaining = limitFor(idx) - used[idx];
      const isEmptyPage = pages[idx].length === 0;

      if (height <= remaining) {
        pages[idx].push(item);
        used[idx] += height;
        placed = true;
        break;
      }

      if (item.type === "parrafo" && (remaining > SPLIT_MIN_REMAINING || isEmptyPage)) {
        const available = isEmptyPage ? limitFor(idx) : remaining;
        const split = splitParagraphToFit(splitterEl, item.value, available);
        if (split) {
          pages[idx].push({ ...item, value: split.head });
          used[idx] += measureText(splitterEl, split.head);
          queue.unshift({
            item: { ...item, value: split.tail },
            height: measureText(splitterEl, split.tail),
          });
          placed = true;
          break;
        }
      }

      if (isEmptyPage) {
        // No se pudo partir y la página está vacía: colocarlo igual para no
        // entrar en bucle infinito (caso extremo: un bloque más alto que la página).
        pages[idx].push(item);
        used[idx] += height;
        placed = true;
        break;
      }

      openPage();
    }
  }

  // El libro desktop muestra spreads de 2 páginas: forzar cantidad par.
  if (isTwoPage) {
    if (pages.length < 2) pages.push([]);
    if (pages.length % 2 !== 0) pages.push([]);
  }

  return pages;
};

/**
 * @param {object}  params
 * @param {Array}   params.content     Ítems de la noticia [{ type, value, url? }]
 * @param {number}  params.pageWidth   Ancho de una página (px)
 * @param {number}  params.pageHeight  Alto de una página (px)
 * @param {boolean} params.isPortrait  Modo una-página (mobile)
 * @param {boolean} params.isTwoPage   Modo spread de dos páginas (desktop)
 * @param {number} [params.safetyMargin=12]
 * @returns {{ pages: Array<Array>, measureRef, splitterRef }}
 */
const usePaginatedContent = ({
  content,
  pageWidth,
  pageHeight,
  isPortrait,
  isTwoPage,
  safetyMargin = 12,
}) => {
  const measureRef = useRef(null);
  const splitterRef = useRef(null);
  const [pages, setPages] = useState([[]]);

  const recompute = useCallback(() => {
    const root = measureRef.current;
    const splitter = splitterRef.current;
    if (!root || !splitter || !pageWidth || !pageHeight) return;

    const inner = root.querySelector("[data-measure-inner]");
    if (!inner) return;

    const cs = window.getComputedStyle(inner);
    const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const limit = Math.max(120, pageHeight - padY - safetyMargin);

    const coverEl = root.querySelector("[data-measure-cover]");
    const coverHeight = isPortrait && coverEl ? coverEl.offsetHeight : 0;
    const firstPageLimit = Math.max(120, limit - coverHeight);

    const nodes = root.querySelectorAll("[data-measure-index]");
    const measured = Array.from(nodes).map((node) => {
      const i = Number(node.getAttribute("data-measure-index"));
      return { item: content[i], height: node.offsetHeight + ITEM_SPACING };
    });

    setPages(
      buildPages({
        measured,
        limit,
        firstPageLimit,
        isTwoPage,
        splitterEl: splitter,
      })
    );
  }, [content, pageWidth, pageHeight, isPortrait, isTwoPage, safetyMargin]);

  useLayoutEffect(() => {
    recompute();

    // Re-medir cuando carguen imágenes (offsetHeight sin cargar es ~0).
    const cleanups = [];
    const root = measureRef.current;
    if (root) {
      root.querySelectorAll("img").forEach((img) => {
        if (!img.complete) {
          const onDone = () => recompute();
          img.addEventListener("load", onDone);
          img.addEventListener("error", onDone);
          cleanups.push(() => {
            img.removeEventListener("load", onDone);
            img.removeEventListener("error", onDone);
          });
        }
      });
    }

    // Re-medir cuando terminen de cargar las fuentes (evita medir con fallback).
    let active = true;
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (active) recompute();
      });
    }

    return () => {
      active = false;
      cleanups.forEach((c) => c());
    };
  }, [recompute]);

  return { pages, measureRef, splitterRef };
};

export default usePaginatedContent;
