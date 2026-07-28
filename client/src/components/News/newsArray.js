import {
  CONVERSATORIO_IMG as Conversatorio,
  PARTICIPACION_IMG as Participacion,
  OPORTUNIDAD_IMG as Oportunidad,
  ESTUDIANTES_NEWS_IMG as Estudiantes,
  RECONOCIMIENTO_IMG as Reconocimiento,
  RECONOCIMIENTO_DOS_IMG as ReconocimientoDos,
  MENCION_IMG as Mencion,
  ENCUENTRO_COLABORADORES_IMG as EncuentroColaboradores,
  DESERCION_IMG as Desercion,
  ARTICLE_MATEO_D_IMG as ArticleMateoD,
  ARTICLE_LUIS_S_IMG as ArticleLuisS,
  ARTICLE_JUANA_R_IMG as ArticleJuanaR,
  ARTICLE_NATHALIA_R_IMG as ArticleNathaliaR,
  ARTICLE_JHISEL_H_IMG as ArticleJhiselH,
  ARTICLE_MANUELA_IMG as ArticleManuela,
  ARTICLE_KAREN_IMG as ArticleKaren,
  TEJIENDO_REDES_IMG as TejiendoRedes,
  TEJIENDO_REDES_DOS_IMG as TejiendoRedesDos,
  TISKO_IMG as Tisko,
  MATEO_DUQUE_IMG as MateoD,
  LUIS_SANCHEZ_IMG as LuisS,
  JUANA_RUEDA_IMG as JuanaR,
  NATHALIA_REVELO_IMG as NathaliaR,
  JHISEL_HOLGUIN_IMG as JhiselH,
  MANUELA_CORREA_IMG as ManuelaC,
  KAREN_GONZALEZ_IMG as KarenG,
} from "../../assets/cloudinaryImages.js";

export const filters = [
  { id: "all", labelKey: "news.filters.all" },
  { id: "articles", labelKey: "news.filters.articles" },
  { id: "news", labelKey: "news.filters.news" },
];

// buildNewsArray recibe la función `t` de traducción para evitar ejecutar
// traducciones en tiempo de importación (i18n puede no estar listo aún).
// Llama con buildNewsArray(t).
// Cada noticia usa un `slug` semántico como identificador único.
// Para agregar/eliminar noticias: solo agrega/elimina el objeto del array
// y su clave correspondiente en los archivos de traducción. No hay IDs que reordenar.

const buildNewsArray = (t) => [
  {
    slug: "reconocidos-por-la-facultad-de-minas",
    type: "news",
    date: "2026-05-07",
    img: Reconocimiento,
    alt: t("news.items.reconocidos-por-la-facultad-de-minas.alt"),
    title: t("news.items.reconocidos-por-la-facultad-de-minas.title"),
    newDetailContent: {
      title: t("news.items.reconocidos-por-la-facultad-de-minas.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t(
            "news.items.reconocidos-por-la-facultad-de-minas.detail.content.0",
          ),
        },
        {
          type: "img",
          value: ReconocimientoDos,
        },
        {
          type: "parrafo",
          value: t(
            "news.items.reconocidos-por-la-facultad-de-minas.detail.content.1",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.reconocidos-por-la-facultad-de-minas.detail.content.2",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.reconocidos-por-la-facultad-de-minas.detail.content.3",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.reconocidos-por-la-facultad-de-minas.detail.content.4",
          ),
        },
      ],
    },
  },
  {
    slug: "desercion-universitaria",
    type: "articles",
    date: "2021-04-02",
    img: Desercion,
    alt: t("news.items.desercion-universitaria.alt"),
    title: t("news.items.desercion-universitaria.title"),
    newDetailContent: {
      title: t("news.items.desercion-universitaria.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.desercion-universitaria.detail.content.0"),
        },
        {
          type: "parrafo",
          value: t("news.items.desercion-universitaria.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.desercion-universitaria.detail.content.2"),
        },
        {
          type: "img",
          value: Desercion,
        },
        {
          type: "parrafo",
          value: t("news.items.desercion-universitaria.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.desercion-universitaria.detail.content.4"),
        },
      ],
    },
  },
  {
    slug: "importancia-de-los-datos",
    type: "articles",
    date: "2021-03-22",
    img: EncuentroColaboradores,
    alt: t("news.items.importancia-de-los-datos.alt"),
    title: t("news.items.importancia-de-los-datos.title"),
    newDetailContent: {
      title: t("news.items.importancia-de-los-datos.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.importancia-de-los-datos.detail.content.0"),
        },
        {
          type: "img",
          value: EncuentroColaboradores,
        },
        {
          type: "parrafo",
          value: t("news.items.importancia-de-los-datos.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.importancia-de-los-datos.detail.content.2"),
        },
        {
          type: "parrafo",
          value: t("news.items.importancia-de-los-datos.detail.content.3"),
        },
      ],
    },
  },
  {
    slug: "una-oportunidad-que-cruzo-fronteras",
    type: "news",
    date: "2026-02-13",
    img: Oportunidad,
    alt: t("news.items.una-oportunidad-que-cruzo-fronteras.alt"),
    title: t("news.items.una-oportunidad-que-cruzo-fronteras.title"),
    newDetailContent: {
      title: t("news.items.una-oportunidad-que-cruzo-fronteras.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t(
            "news.items.una-oportunidad-que-cruzo-fronteras.detail.content.0",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.una-oportunidad-que-cruzo-fronteras.detail.content.1",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.una-oportunidad-que-cruzo-fronteras.detail.content.2",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.una-oportunidad-que-cruzo-fronteras.detail.content.3",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.una-oportunidad-que-cruzo-fronteras.detail.content.4",
          ),
        },
        {
          type: "img",
          value: Estudiantes,
        },
        {
          type: "parrafo",
          value: t(
            "news.items.una-oportunidad-que-cruzo-fronteras.detail.content.5",
          ),
        },
      ],
    },
  },
  {
    slug: "vincular-para-transformar",
    type: "articles",
    date: "2026-07-09",
    img: ArticleJuanaR,
    alt: t("news.items.vincular-para-transformar.alt"),
    title: t("news.items.vincular-para-transformar.title"),
    newDetailContent: {
      title: t("news.items.vincular-para-transformar.detail.title"),
      content: [
        {
          type: "img",
          value: JuanaR,
        },
        {
          type: "parrafo-quote",
          value: t("news.items.vincular-para-transformar.detail.content.0"),
          author: "Juana Rueda",
        },
        {
          type: "parrafo",
          value: t("news.items.vincular-para-transformar.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.vincular-para-transformar.detail.content.2"),
        },
        {
          type: "parrafo",
          value: t("news.items.vincular-para-transformar.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.vincular-para-transformar.detail.content.4"),
        },
        {
          type: "parrafo",
          value: t("news.items.vincular-para-transformar.detail.content.5"),
        },
        {
          type: "parrafo",
          value: t("news.items.vincular-para-transformar.detail.content.6"),
        },
      ],
    },
  },
  {
    slug: "la-crisis-en-educacion-superior",
    type: "articles",
    date: "2026-05-11",
    img: ArticleMateoD,
    alt: t("news.items.la-crisis-en-educacion-superior.alt"),
    title: t("news.items.la-crisis-en-educacion-superior.title"),
    newDetailContent: {
      title: t("news.items.la-crisis-en-educacion-superior.detail.title"),
      content: [
        {
          type: "img",
          value: MateoD,
        },
        {
          type: "parrafo-quote",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.0",
          ),
          author: "Mateo Duque",
        },
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.1",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.2",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.3",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.4",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.5",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.6",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.7",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.8",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.9",
          ),
        },
      ],
    },
  },
  {
    slug: "acompanamiento-becarios-rurales",
    type: "articles",
    date: "2026-04-23",
    img: ArticleNathaliaR,
    alt: t("news.items.acompanamiento-becarios-rurales.alt"),
    title: t("news.items.acompanamiento-becarios-rurales.title"),
    newDetailContent: {
      title: t("news.items.acompanamiento-becarios-rurales.detail.title"),
      content: [
        {
          type: "img",
          value: NathaliaR,
        },
        {
          type: "parrafo-quote",
          value: t(
            "news.items.acompanamiento-becarios-rurales.detail.content.0",
          ),
          author: "Nathalia Revelo",
        },
        {
          type: "parrafo",
          value: t(
            "news.items.acompanamiento-becarios-rurales.detail.content.1",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.acompanamiento-becarios-rurales.detail.content.2",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.acompanamiento-becarios-rurales.detail.content.3",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.acompanamiento-becarios-rurales.detail.content.4",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.acompanamiento-becarios-rurales.detail.content.5",
          ),
        },
      ],
    },
  },
  {
    slug: "el-docente-hoy",
    type: "articles",
    date: "2026-02-11",
    img: ArticleJhiselH,
    alt: t("news.items.el-docente-hoy.alt"),
    title: t("news.items.el-docente-hoy.title"),
    newDetailContent: {
      title: t("news.items.el-docente-hoy.detail.title"),
      content: [
        {
          type: "img",
          value: JhiselH,
        },
        {
          type: "parrafo-quote",
          value: t("news.items.el-docente-hoy.detail.content.0"),
          author: "Jhisel Holguín",
        },
        {
          type: "parrafo",
          value: t("news.items.el-docente-hoy.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.el-docente-hoy.detail.content.2"),
        },
        {
          type: "parrafo",
          value: t("news.items.el-docente-hoy.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.el-docente-hoy.detail.content.4"),
        },
      ],
    },
  },
  {
    slug: "retos-comunicativos",
    type: "articles",
    date: "2025-04-10",
    img: ArticleManuela,
    alt: t("news.items.retos-comunicativos.alt"),
    title: t("news.items.retos-comunicativos.title"),
    newDetailContent: {
      title: t("news.items.retos-comunicativos.detail.title"),
      content: [
        {
          type: "img",
          value: ManuelaC,
        },
        {
          type: "parrafo-quote",
          value: t("news.items.retos-comunicativos.detail.content.0"),
          author: "Manuela Correa",
        },
        {
          type: "parrafo",
          value: t("news.items.retos-comunicativos.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.retos-comunicativos.detail.content.2"),
        },
        {
          type: "parrafo",
          value: t("news.items.retos-comunicativos.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.retos-comunicativos.detail.content.4"),
        },
        {
          type: "parrafo",
          value: t("news.items.retos-comunicativos.detail.content.5"),
        },
        {
          type: "parrafo",
          value: t("news.items.retos-comunicativos.detail.content.6"),
        },
        {
          type: "parrafo",
          value: t("news.items.retos-comunicativos.detail.content.7"),
        },
      ],
    },
  },
  {
    slug: "permanencia-educativa-de-calidad",
    type: "articles",
    date: "2025-02-20",
    img: ArticleLuisS,
    alt: t("news.items.permanencia-educativa-de-calidad.alt"),
    title: t("news.items.permanencia-educativa-de-calidad.title"),
    newDetailContent: {
      title: t("news.items.permanencia-educativa-de-calidad.detail.title"),
      content: [
        {
          type: "img",
          value: LuisS,
        },
        {
          type: "parrafo-quote",
          value: t(
            "news.items.permanencia-educativa-de-calidad.detail.content.0",
          ),
          author: "Luis Fernando Sánchez",
        },
        {
          type: "parrafo",
          value: t(
            "news.items.permanencia-educativa-de-calidad.detail.content.1",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.permanencia-educativa-de-calidad.detail.content.2",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.permanencia-educativa-de-calidad.detail.content.3",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.permanencia-educativa-de-calidad.detail.content.4",
          ),
        },
        {
          type: "parrafo",
          value: t(
            "news.items.permanencia-educativa-de-calidad.detail.content.5",
          ),
        },
      ],
    },
  },
  {
    slug: "desafios-fatv-en-tecnologia",
    type: "articles",
    date: "2025-01-30",
    img: ArticleKaren,
    alt: t("news.items.desafios-fatv-en-tecnologia.alt"),
    title: t("news.items.desafios-fatv-en-tecnologia.title"),
    newDetailContent: {
      title: t("news.items.desafios-fatv-en-tecnologia.detail.title"),
      content: [
        {
          type: "img",
          value: KarenG,
        },
        {
          type: "parrafo-quote",
          value: t("news.items.desafios-fatv-en-tecnologia.detail.content.0"),
          author: "Karen González",
        },
        {
          type: "parrafo",
          value: t("news.items.desafios-fatv-en-tecnologia.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.desafios-fatv-en-tecnologia.detail.content.2"),
        },
        {
          type: "parrafo",
          value: t("news.items.desafios-fatv-en-tecnologia.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.desafios-fatv-en-tecnologia.detail.content.4"),
        },
      ],
    },
  },
  {
    slug: "tikso-2025",
    type: "news",
    date: "2025-09-23",
    img: Tisko,
    alt: t("news.items.tikso-2025.alt"),
    title: t("news.items.tikso-2025.title"),
    newDetailContent: {
      title: t("news.items.tikso-2025.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.tikso-2025.detail.content.0"),
          author: "Karen González",
        },
        {
          type: "parrafo",
          value: t("news.items.tikso-2025.detail.content.1"),
        },
        {
          type: "img",
          value: Tisko,
        },
         {
          type: "parrafo",
          value: t("news.items.tikso-2025.detail.content.2"),
        },
      ],
    },
  },
  {
    slug: "tejiendo-redes",
    type: "news",
    date: "2025-11-13",
    img: TejiendoRedes,
    alt: t("news.items.tejiendo-redes.alt"),
    title: t("news.items.tejiendo-redes.title"),
    newDetailContent: {
      title: t("news.items.tejiendo-redes.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.tejiendo-redes.detail.content.0"),
          author: "Karen González",
        },
        {
          type: "parrafo",
          value: t("news.items.tejiendo-redes.detail.content.1"),
        },
        {
          type: "img",
          value: TejiendoRedesDos,
        },
      ],
    },
  },
  {
    slug: "conversatorio-envigado",
    type: "news",
    date: "2022-11-14",
    img: Conversatorio,
    alt: t("news.items.conversatorio-envigado.alt"),
    title: t("news.items.conversatorio-envigado.title"),
    newDetailContent: {
      title: t("news.items.conversatorio-envigado.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.conversatorio-envigado.detail.content.0"),
        },
        {
          type: "parrafo",
          value: t("news.items.conversatorio-envigado.detail.content.1"),
        },
        {
          type: "img",
          value: Conversatorio,
        },
      ],
    },
  },
  {
    slug: "mencion-honorifica",
    type: "news",
    date: "2022-09-22",
    img: Mencion,
    alt: t("news.items.mencion-honorifica.alt"),
    title: t("news.items.mencion-honorifica.title"),
    newDetailContent: {
      title: t("news.items.mencion-honorifica.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.mencion-honorifica.detail.content.0"),
        },
        {
          type: "img",
          value: Mencion,
        },
      ],
    },
  },
  {
    slug: "congreso-latinoamericano",
    type: "news",
    date: "2022-11-16",
    img: Participacion,
    alt: t("news.items.congreso-latinoamericano.alt"),
    title: t("news.items.congreso-latinoamericano.title"),
    newDetailContent: {
      title: t("news.items.congreso-latinoamericano.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.congreso-latinoamericano.detail.content.0"),
        },
        {
          type: "img",
          value: Participacion,
        },
      ],
    },
  },
];

export default buildNewsArray;
