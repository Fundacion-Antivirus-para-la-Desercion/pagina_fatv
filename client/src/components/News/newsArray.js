import Movimiento from "../../../src/assets/images/views/imagesNews/2024-un-año-de-movimiento-retos-y-transformación.jpeg";
import Desercion from "../../../src/assets/images/views/imagesNews/desercion-universitaria.gif";
import Conversatorio from "../../../src/assets/images/views/imagesNews/conversatorio-universidad-envigado.jpg";
import Participacion from "../../../src/assets/images/views/imagesNews/participación-XI-congreso-latinoamericano.jpg";
import Ponencia from "../../../src/assets/images/views/imagesNews/ponencia-en-congreso-internacional-de-omunicaciones.jpg";
import Mencion from "../../../src/assets/images/views/imagesNews/mención-honorífica.jpg";
import EncuentroColaboradores from "../../../src/assets/images/views/imagesNews/ENCUENTRO.jpeg";
import MovimientoDos from "../../../src/assets/images/views/imagesNews/movimiento-2.jpeg";
import MateoD from "../../../public/img_OurTeam/mateo-duque.webp";
import NathaliaR from "../../../public/img_OurTeam/nathalia-revelo.webp";
import JhiselH from "../../../public/img_OurTeam/jhisel-holguin.webp";

// buildNewsArray recibe la función `t` de traducción para evitar ejecutar
// traducciones en tiempo de importación (i18n puede no estar listo aún).
// Llama con buildNewsArray(t).
// Cada noticia usa un `slug` semántico como identificador único.
// Para agregar/eliminar noticias: solo agrega/elimina el objeto del array
// y su clave correspondiente en los archivos de traducción. No hay IDs que reordenar.

const buildNewsArray = (t) => [
  {
    slug: "movimiento-2024",
    img: Movimiento,
    alt: t("news.items.movimiento-2024.alt"),
    title: t("news.items.movimiento-2024.title"),
    newDetailContent: {
      title: t("news.items.movimiento-2024.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.movimiento-2024.detail.content.0"),
        },
        {
          type: "img",
          value: Movimiento,
        },
        {
          type: "parrafo",
          value: t("news.items.movimiento-2024.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.movimiento-2024.detail.content.2"),
        },
        {
          type: "img",
          value: MovimientoDos,
        },
        {
          type: "parrafo",
          value: t("news.items.movimiento-2024.detail.content.3"),
        },
        {
          type: "parrafo",
          value: t("news.items.movimiento-2024.detail.content.4"),
        },
        {
          type: "parrafo",
          value: t("news.items.movimiento-2024.detail.content.5"),
        },
        {
          type: "link",
          value: t("news.items.movimiento-2024.detail.content.6"),
          url: "https://fundacionantivirus-my.sharepoint.com/personal/coordinaciontecnologiadatos_fundacionantivirusparaladesercion_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordinaciontecnologiadatos%5Ffundacionantivirusparaladesercion%5Forg%2FDocuments%2FDatos%20adjuntos%2FReporteAnual2024%5Ffinal%2Epdf&parent=%2Fpersonal%2Fcoordinaciontecnologiadatos%5Ffundacionantivirusparaladesercion%5Forg%2FDocuments%2FDatos%20adjuntos&ga=1",
        },
      ],
    },
  },
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
          type: "img",
          value:
            "https://www.fundacionantivirusparaladesercion.org/data/articles/foto-blog.gif",
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
          value:
            "https://www.fundacionantivirusparaladesercion.org/data/articles/blog1.gif",
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
    slug: "congreso-comunicaciones",
    img: Ponencia,
    alt: t("news.items.congreso-comunicaciones.alt"),
    title: t("news.items.congreso-comunicaciones.title"),
    newDetailContent: {
      title: t("news.items.congreso-comunicaciones.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.congreso-comunicaciones.detail.content.0"),
        },
        {
          type: "img",
          value: Ponencia,
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
    slug: "encuentro-colaboradores",
    img: EncuentroColaboradores,
    alt: t("news.items.encuentro-colaboradores.alt"),
    title: t("news.items.encuentro-colaboradores.title"),
    newDetailContent: {
      title: t("news.items.encuentro-colaboradores.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.encuentro-colaboradores.detail.content.0"),
        },
        {
          type: "img",
          value: EncuentroColaboradores,
        },
        {
          type: "parrafo",
          value: t("news.items.encuentro-colaboradores.detail.content.1"),
        },
        {
          type: "parrafo",
          value: t("news.items.encuentro-colaboradores.detail.content.2"),
        },
        {
          type: "parrafo",
          value: t("news.items.encuentro-colaboradores.detail.content.3"),
        },
      ],
    },
  },
  {
    slug: "acompanamiento-becarios-rurales",
    img: NathaliaR,
    alt: t("news.items.acompanamiento-becarios-rurales.alt"),
    title: t("news.items.acompanamiento-becarios-rurales.title"),
    newDetailContent: {
      title: t("news.items.acompanamiento-becarios-rurales.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t(
            "news.items.acompanamiento-becarios-rurales.detail.content.0",
          ),
        },
        {
          type: "img",
          value: NathaliaR,
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
    img: MateoD,
    alt: t("news.items.la-crisis-en-educacion-superior.alt"),
    title: t("news.items.la-crisis-en-educacion-superior.title"),
    newDetailContent: {
      title: t("news.items.la-crisis-en-educacion-superior.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t(
            "news.items.la-crisis-en-educacion-superior.detail.content.0",
          ),
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
          type: "img",
          value: MateoD,
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
    img: JhiselH,
    alt: t("news.items.el-docente-hoy.alt"),
    title: t("news.items.el-docente-hoy.title"),
    newDetailContent: {
      title: t("news.items.el-docente-hoy.detail.title"),
      content: [
        {
          type: "parrafo",
          value: t("news.items.el-docente-hoy.detail.content.0"),
        },
        {
          type: "img",
          value: JhiselH,
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
