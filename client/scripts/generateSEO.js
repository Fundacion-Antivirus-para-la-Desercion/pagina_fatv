import { SitemapStream, streamToPromise } from "sitemap";
import fs from "node:fs";
import { buildPath } from "../src/routes/routeHelpers.js";
import { LANGS, ORIGIN, ROUTE_SLUGS } from "../src/routes/routes.config.js";
import { NEWS_SLUGS } from "../src/components/News/newsSlugs.js";

/**
 * Genera sitemap.xml y robots.txt.
 *
 * Las rutas NO se declaran acá: se importan de src/routes/routes.config.js,
 * que es la única fuente de verdad. Por eso ese módulo debe permanecer libre
 * de JSX y de dependencias de Vite (import.meta.env, assets): este script
 * corre en Node puro.
 *
 * `newsDetail` se excluye a propósito. Sin un ?slug= esa vista no renderiza
 * contenido, así que publicarla suelta equivale a ofrecerle a los buscadores
 * una página en blanco.
 */
const EXCLUDED_FROM_SITEMAP = ["newsDetail"];

const sitemap = new SitemapStream({ hostname: ORIGIN });

const alternatesFor = (key, search = "") =>
  LANGS.map((lang) => ({ lang, url: `${ORIGIN}${buildPath(key, lang)}${search}` }));

let urlCount = 0;

const writeUrl = ({ key, lang, search = "", priority, lastmod }) => {
  sitemap.write({
    url: `${buildPath(key, lang)}${search}`,
    links: alternatesFor(key, search),
    priority,
    changefreq: "monthly",
    ...(lastmod ? { lastmod } : {}),
  });
  urlCount += 1;
};

// Páginas estáticas, una URL por idioma.
Object.keys(ROUTE_SLUGS)
  .filter((key) => !EXCLUDED_FROM_SITEMAP.includes(key))
  .forEach((key) => {
    LANGS.forEach((lang) => {
      writeUrl({ key, lang, priority: key === "home" ? 1.0 : 0.8 });
    });
  });

// Cada noticia, en vez de la URL suelta de newsDetail: son las páginas con
// contenido real y las que conviene que los buscadores indexen.
NEWS_SLUGS.forEach(({ slug, date }) => {
  LANGS.forEach((lang) => {
    writeUrl({
      key: "newsDetail",
      lang,
      search: `?slug=${slug}`,
      priority: 0.6,
      lastmod: date,
    });
  });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());

  const robots = `User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`;

  fs.writeFileSync("./public/robots.txt", robots);

  console.log(`✅ Sitemap generado — ${urlCount} URLs`);
  console.log("✅ Robots generado");
});
