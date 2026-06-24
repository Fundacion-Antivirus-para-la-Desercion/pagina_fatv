const DEFAULT_OPTIONS = {
  itemsPerPage: 2,
  useItemCountFallback: false,
  pageWidth: 420,
  usableHeight: 560,
  firstPageUsableHeight: 360,
  safetyMargin: 10,
  debug: false,
};

const getOptions = (optionsOrItemsPerPage) => {
  if (typeof optionsOrItemsPerPage === "number") {
    return {
      ...DEFAULT_OPTIONS,
      itemsPerPage: Math.max(1, Math.floor(optionsOrItemsPerPage)),
      useItemCountFallback: true,
    };
  }

  return { ...DEFAULT_OPTIONS, ...(optionsOrItemsPerPage || {}) };
};

const estimateCharsPerLine = (pageWidth) => {
  const width = Number.isFinite(pageWidth) && pageWidth > 0 ? pageWidth : 420;
  const charWidth = width >= 520 ? 9 : 8.1;
  return Math.max(24, Math.floor((width - 48) / charWidth));
};

const estimateParagraphHeight = (text = "", charsPerLine = 42) => {
  const safeText = (text || "").trim();
  const lines = Math.max(1, Math.ceil(safeText.length / charsPerLine));
  const lineHeight = charsPerLine >= 48 ? 30 : 28;
  return lines * lineHeight + 18;
};

const estimateItemHeight = (item, pageWidth, charsPerLine) => {
  if (item?.type === "parrafo") {
    return estimateParagraphHeight(item.value, charsPerLine);
  }
  if (item?.type === "img") {
    return Math.min(450, Math.round(pageWidth * 0.8)) + 16;
  }
  if (item?.type === "link") {
    return 52;
  }
  return 60;
};

const splitParagraphToFit = (text = "", availableHeight, charsPerLine) => {
  const lineHeight = charsPerLine >= 48 ? 30 : 28;
  const maxLines = Math.floor((availableHeight - 18) / lineHeight);
  if (maxLines <= 2) return null;

  const charBudget = maxLines * charsPerLine;
  if (text.length <= charBudget) return null;

  const tentative = text.slice(0, charBudget + 1);
  const splitAt = tentative.lastIndexOf(" ");
  if (splitAt <= Math.floor(charBudget * 0.55)) return null;

  const head = text.slice(0, splitAt).trim();
  const tail = text.slice(splitAt + 1).trim();
  if (!head || !tail) return null;

  return { head, tail };
};

/**
 * Paginación por capacidad visual:
 * - Si cabe en la página actual, se queda.
 * - Si no cabe, pasa a la siguiente.
 * - Los párrafos se pueden partir entre páginas para reducir espacios en blanco.
 */
const createPages = (items = [], optionsOrItemsPerPage = 2) => {
  const options = getOptions(optionsOrItemsPerPage);
  const charsPerLine = estimateCharsPerLine(options.pageWidth);
  const pageLimit = Math.max(200, options.usableHeight);
  const firstPageLimit = Math.max(140, options.firstPageUsableHeight);
  const maxItemsPerPage = Math.max(1, options.itemsPerPage);

  const pages = [[]];
  const usedHeights = [0];
  const queue = Array.isArray(items) ? [...items] : [];

  const getLimitForPage = (index) => (index === 0 ? firstPageLimit : pageLimit);

  const pushNewPage = () => {
    pages.push([]);
    usedHeights.push(0);
  };

  while (queue.length > 0) {
    let item = queue.shift();
    if (!item) continue;

    let keepPlacing = true;
    while (keepPlacing) {
      const pageIndex = pages.length - 1;
      const limit = getLimitForPage(pageIndex);
      const used = usedHeights[pageIndex];
      const remaining = limit - used - options.safetyMargin;
      const itemHeight = estimateItemHeight(item, options.pageWidth, charsPerLine);
      const currentPageIsFullByCount =
        options.useItemCountFallback && pages[pageIndex].length >= maxItemsPerPage;
      const hasContent = pages[pageIndex].length > 0;
      const paragraphTolerance =
        item?.type === "parrafo" ? (charsPerLine >= 48 ? 28 : 26) : 0;

      if (
        !currentPageIsFullByCount &&
        (itemHeight <= remaining || itemHeight <= remaining + paragraphTolerance || !hasContent)
      ) {
        pages[pageIndex].push(item);
        usedHeights[pageIndex] += itemHeight;
        keepPlacing = false;
        continue;
      }

      if (item.type === "parrafo" && remaining > 80) {
        const split = splitParagraphToFit(item.value || "", remaining, charsPerLine);
        if (split) {
          const partial = { ...item, value: split.head, splitTail: true };
          const partialHeight = estimateParagraphHeight(split.head, charsPerLine);
          pages[pageIndex].push(partial);
          usedHeights[pageIndex] += partialHeight;
          item = { ...item, value: split.tail, splitHead: true };
          pushNewPage();
          continue;
        }
      }

      if (!hasContent) {
        pages[pageIndex].push(item);
        usedHeights[pageIndex] += itemHeight;
        keepPlacing = false;
      } else {
        pushNewPage();
      }
    }
  }

  if (pages.length < 2) pages.push([]);
  if (pages.length % 2 !== 0) pages.push([]);

  if (options.debug && typeof console !== "undefined") {
    console.table(
      pages.map((pageItems, pageIndex) => ({
        page: pageIndex + 1,
        items: pageItems.length,
        usedHeight: Math.round(usedHeights[pageIndex] || 0),
        limit: getLimitForPage(pageIndex),
        types: pageItems.map((pageItem) => pageItem.type).join(", "),
      }))
    );
  }

  return pages;
};

export default createPages;
