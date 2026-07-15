import Conversatorio from "../../../src/assets/images/views/imagesNews/conversatorio-universidad-envigado.webp";
import Participacion from "../../../src/assets/images/views/imagesNews/participación-XI-congreso-latinoamericano.jpg";
import Oportunidad from "../../../src/assets/images/views/imagesNews/una-oportunidad.webp";
import Estudiantes from "../../../src/assets/images/views/imagesNews/estudiantes.webp";
import Reconocimiento from "../../../src/assets/images/views/imagesNews/reconocimiento-facultad-minas.webp";
import ReconocimientoDos from "../../../src/assets/images/views/imagesNews/reconocimiento-facultad-minas-dos.webp";
import Mencion from "../../../src/assets/images/views/imagesNews/mencion.webp";
import EncuentroColaboradores from "../../../src/assets/images/views/imagesNews/cifras.webp";
import Desercion from "../../assets/images/views/imagesNews/dia-udea.webp";
import MateoD from "../../../public/img_OurTeam/mateo-duque.webp";
import ArticleMateoD from "../../assets/images/views/imagesNews/article-mateo-duque.webp";
import LuisS from "../../../public/img_OurTeam/luis-sanchez.webp";
import ArticleLuisS from "../../assets/images/views/imagesNews/article-luis-sanchez.webp";
import JuanaR from "../../../public/img_OurTeam/juana-rueda.webp";
import ArticleJuanaR from "../../assets/images/views/imagesNews/article-juana.webp";
import NathaliaR from "../../../public/img_OurTeam/nathalia-revelo.webp";
import ArticleNathaliaR from "../../assets/images/views/imagesNews/article-nathalia-revelo.webp";
import JhiselH from "../../../public/img_OurTeam/jhisel-holguin.webp";
import ArticleJhiselH from "../../assets/images/views/imagesNews/article-jhisel-holguin.webp";
import ManuelaC from "../../../public/img_OurTeam/manuela-correa.webp";
import ArticleManuela from "../../assets/images/views/imagesNews/article-manuela.webp";
import KarenG from "../../../public/img_OurTeam/karen-gonzalez-alarcon.webp";
import ArticleKaren from "../../assets/images/views/imagesNews/article-karen.webp";
import TejiendoRedes from "../../assets/images/views/imagesNews/mision-internacional.webp";
import TejiendoRedesDos from "../../assets/images/views/imagesNews/mision-internacional-dos.webp";
import Tisko from "../../assets/images/views/imagesNews/tisko-2025.webp";

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
    date: "2026-02-11",
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
    type: "news",
    date: "2026-02-11",
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
    type: "news",
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
    date: "2026-02-11",
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
