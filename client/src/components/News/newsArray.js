import Conversatorio from "../../../src/assets/images/views/imagesNews/conversatorio-universidad-envigado.webp";
import Participacion from "../../../src/assets/images/views/imagesNews/participación-XI-congreso-latinoamericano.jpg";
import Oportunidad from "../../../src/assets/images/views/imagesNews/una-oportunidad.webp";
import Estudiantes from "../../../src/assets/images/views/imagesNews/estudiantes-oportunidad.webp";
import Mencion from "../../../src/assets/images/views/imagesNews/mencion.webp";
import EncuentroColaboradores from "../../../src/assets/images/views/imagesNews/cifras.webp";
import Desercion from "../../assets/images/views/imagesNews/dia-udea.webp";
import MateoD from "../../../public/img_OurTeam/mateo-duque.webp";
import ArticleMateoD from "../../assets/images/views/imagesNews/article-mateo-duque.webp";
import NathaliaR from "../../../public/img_OurTeam/nathalia-revelo.webp";
import ArticleNathaliaR from "../../assets/images/views/imagesNews/article-nathalia-revelo.webp";
import JhiselH from "../../../public/img_OurTeam/jhisel-holguin.webp";
import ArticleJhiselH from "../../assets/images/views/imagesNews/article-jhisel-holguin.webp";

// buildNewsArray recibe la función `t` de traducción para evitar ejecutar
// traducciones en tiempo de importación (i18n puede no estar listo aún).
// Llama con buildNewsArray(t).
// Cada noticia usa un `slug` semántico como identificador único.
// Para agregar/eliminar noticias: solo agrega/elimina el objeto del array
// y su clave correspondiente en los archivos de traducción. No hay IDs que reordenar.

const buildNewsArray = (t) => [
  {
    slug: "desercion-universitaria",
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
    slug: "conversatorio-envigado",
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
    slug: "congreso-latinoamericano",
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
  {
    slug: "mencion-honorifica",
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
    slug: "acompanamiento-becarios-rurales",
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
    slug: "la-crisis-en-educacion-superior",
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
    slug: "el-docente-hoy",
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
];

export default buildNewsArray;
