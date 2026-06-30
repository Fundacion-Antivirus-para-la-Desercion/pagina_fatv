const createSpreads = (items = [], itemsPerSpread = 3) => {
  const spreads = [[]];

  for (const item of items) {
    if (!item) continue;

    if (item.type === "img") {
      if (spreads.at(-1).length > 0) spreads.push([]);
      spreads.at(-1).push(item);
      spreads.push([]);
      continue;
    }

    if (spreads.at(-1).length >= itemsPerSpread) spreads.push([]);
    spreads.at(-1).push(item);
  }

  return spreads.filter((s) => s.length > 0);
};

export default createSpreads;
