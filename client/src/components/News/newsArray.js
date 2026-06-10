import Movimiento from "../../../src/assets/images/views/imagesNews/2024-un-año-de-movimiento-retos-y-transformación.jpeg";
import Desercion from "../../../src/assets/images/views/imagesNews/desercion-universitaria.gif";
import Conversatorio from "../../../src/assets/images/views/imagesNews/conversatorio-universidad-envigado.jpg";
import Participacion from "../../../src/assets/images/views/imagesNews/participación-XI-congreso-latinoamericano.jpg";
import Ponencia from "../../../src/assets/images/views/imagesNews/ponencia-en-congreso-internacional-de-omunicaciones.jpg";
import Mencion from "../../../src/assets/images/views/imagesNews/mención-honorífica.jpg";
import EncuentroColaboradores from "../../../src/assets/images/views/imagesNews/ENCUENTRO.jpeg";
import NuestraInvestigacion from "../../../src/assets/images/views/imagesNews/nuestra-investigación-de-mercados.webp";
import LlevandoEducacion from "../../../src/assets/images/views/imagesNews/llevando-la-educación-a-nuevos-horizontes -colombia.webp";
import MovimientoDos from "../../../src/assets/images/views/imagesNews/movimiento-2.jpeg";
// buildNewsArray now receives the `t` translation function from the caller
// to avoid running translations at module import time (i18n may not be
// initialized yet). Call with buildNewsArray(t).

const buildNewsArray = (t) => [
  {
    id: 1,
    img: Movimiento,
    alt: t("news.items.0.alt"),
    title: t("news.items.0.title"),
    newDetailContent: {
      title: t("news.items.0.detail.title"),  
      content: [
        {
          type: "parrafo",
          value: t("news.items.0.detail.content.0"),
        },
        {
          type: "img",
          value: Movimiento,
        },
        {
          type: "parrafo",
          value: t("news.items.0.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.0.detail.content.2"),
        },
        {
          type: "img",
          value: MovimientoDos,
        },
        {
          type: "parrafo",
          value: t("news.items.0.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.0.detail.content.4"),
        },
        {
          type: "parrafo",
          value: t("news.items.0.detail.content.5"),
        },
        {
          type: "link",
          value: t("news.items.0.detail.content.6"),
          url: "https://fundacionantivirus-my.sharepoint.com/personal/coordinaciontecnologiadatos_fundacionantivirusparaladesercion_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordinaciontecnologiadatos%5Ffundacionantivirusparaladesercion%5Forg%2FDocuments%2FDatos%20adjuntos%2FReporteAnual2024%5Ffinal%2Epdf&parent=%2Fpersonal%2Fcoordinaciontecnologiadatos%5Ffundacionantivirusparaladesercion%5Forg%2FDocuments%2FDatos%20adjuntos&ga=1",
        },
      ],
    },
  },
  {
    id: 3,
    img: Desercion,
    alt: t("news.items.2.alt"),
    title: t("news.items.2.title"),
    newDetailContent: {
      title: t("news.items.2.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.2.detail.content.0"),
        },
        {
          type: "img",
          value:
            "https://www.fundacionantivirusparaladesercion.org/data/articles/foto-blog.gif",
        },
        {
          type: "parrafo",
          value: t("news.items.2.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.2.detail.content.2"),
        },
        {
          type: "img",
          value:
            "https://www.fundacionantivirusparaladesercion.org/data/articles/blog1.gif",
        },
        {
          type: "parrafo",
          value: t("news.items.2.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.2.detail.content.4"),
        },
      ],
    },
  },
  {
    id: 4,
    img: Conversatorio,
    alt: t("news.items.3.alt"),
    title: t("news.items.3.title"),
    newDetailContent: {
      title: t("news.items.3.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.3.detail.content.0"),
        },
        {
          type: "parrafo",
          value: t("news.items.3.detail.content.1"),
        },
        {
          type: "img",
          value: Conversatorio,
        },
      ],
    },
  },
  {
    id: 5,
    img: Participacion,
    alt: t("news.items.4.alt"),
    title: t("news.items.4.title"),
    newDetailContent: {
      title: t("news.items.4.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.4.detail.content.0"),
        },
        {
          type: "img",
          value: Participacion,
        },
      ],
    },
  },
  {
    id: 6,
    img: Ponencia,
    alt: t("news.items.5.alt"),
    title: t("news.items.5.title"),
    newDetailContent: {
      title: t("news.items.5.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.5.detail.content.0"),
        },
        {
          type: "img",
          value: Ponencia,
        },
      ],
    },
  },
  {
    id: 8,
    img: Mencion,
    alt: t("news.items.7.alt"),
    title: t("news.items.7.title"),
    newDetailContent: {
      title: t("news.items.7.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.7.detail.content.0"),
        },
        {
          type: "img",
          value: Mencion,
        },
      ],
    },
  },
  {
    id: 13,
    img: NuestraInvestigacion,
    alt: t("news.items.12.alt"),
    title: t("news.items.12.title"),
    newDetailContent: {
      title: t("news.items.12.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.12.detail.content.0"),
        },
        {
          type: "parrafo",
          value: t("news.items.12.detail.content.1"),
        },
        {
          type: "img",
          value: NuestraInvestigacion,
        },
        {
          type: "parrafo",
          value: t("news.items.12.detail.content.2"),
        },
        {
          type: "parrafo",
          value: t("news.items.12.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.12.detail.content.4"),
        },
        {
          type: "parrafo",
          value: t("news.items.12.detail.content.5"),
        },
      ],
    },
  },
  {
    id: 14,
    img: LlevandoEducacion,
    alt: t("news.items.13.alt"),
    title: t("news.items.13.title"),
    newDetailContent: {
      title: t("news.items.13.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.13.detail.content.0"),
        },
        {
          type: "img",
          value: LlevandoEducacion,
        },
        {
          type: "parrafo",
          value: t("news.items.13.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.13.detail.content.2"),
        },
        {
          type: "parrafo",
          value: t("news.items.13.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.13.detail.content.4"),
        },
        {
          type: "parrafo",
          value: t("news.items.13.detail.content.5"),
        },
        {
          type: "parrafo",
          value: t("news.items.13.detail.content.6"),
        },
        {
          type: "parrafo",
          value: t("news.items.13.detail.content.7"),
        },
        {
          type: "parrafo",
          value: t("news.items.13.detail.content.8"),
        },
      ],
    },
  },
  {
    id: 15,
    img: EncuentroColaboradores,
    alt: t("news.items.14.alt"),
    title: t("news.items.14.title"),
    newDetailContent: {
      title: t("news.items.14.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.14.detail.content.0"),
        },
        {
          type: "img",
          value: EncuentroColaboradores,
        },
        {
          type: "parrafo",
          value: t("news.items.14.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.14.detail.content.2"),
        },
        {
          type: "parrafo",
          value: t("news.items.14.detail.content.3"),
        },
      ],
    },
  },
];

export default buildNewsArray;
