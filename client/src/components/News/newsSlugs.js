/**
 * Identidad y fecha de cada noticia.
 *
 * Vive aparte de newsArray.js porque lo importa scripts/generateSEO.js desde
 * Node, y newsArray arrastra la cadena de assets de Cloudinary, que depende de
 * import.meta.env (solo existe bajo Vite). Este archivo debe quedar sin imports.
 */
export const NEWS_SLUGS = [
  { slug: "reconocidos-por-la-facultad-de-minas", date: "2026-05-07" },
  { slug: "desercion-universitaria", date: "2021-04-02" },
  { slug: "importancia-de-los-datos", date: "2021-03-22" },
  { slug: "una-oportunidad-que-cruzo-fronteras", date: "2026-02-13" },
  { slug: "vincular-para-transformar", date: "2026-07-09" },
  { slug: "la-crisis-en-educacion-superior", date: "2026-05-11" },
  { slug: "acompanamiento-becarios-rurales", date: "2026-04-23" },
  { slug: "el-docente-hoy", date: "2026-02-11" },
  { slug: "retos-comunicativos", date: "2025-04-10" },
  { slug: "permanencia-educativa-de-calidad", date: "2025-02-20" },
  { slug: "desafios-fatv-en-tecnologia", date: "2025-01-30" },
  { slug: "tikso-2025", date: "2025-09-23" },
  { slug: "tejiendo-redes", date: "2025-11-13" },
  { slug: "conversatorio-envigado", date: "2022-11-14" },
  { slug: "mencion-honorifica", date: "2022-09-22" },
  { slug: "congreso-latinoamericano", date: "2022-11-16" },
];

export const NEWS_META = Object.fromEntries(
  NEWS_SLUGS.map((item) => [item.slug, item])
);
