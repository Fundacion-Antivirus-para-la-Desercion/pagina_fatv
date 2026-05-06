import campanaSocial from "../../../assets/images/views/communications/portfolio/socialCampaigns/poster-atv-conecta-javi.webp";
import PiezaUnal from "../../../assets/images/views/communications/portfolio/socialCampaigns/pieza-us-unal.webp";
import PiezaTutores from "../../../assets/images/views/communications/portfolio/socialCampaigns/pieza-unete-red-tutores.webp";


import redesSociales from "../../../assets/images/views/communications/portfolio/redes-sociales.webp";
import infografia from "../../../assets/images/views/communications/portfolio/infografia.webp";
import cubrimiento from "../../../assets/images/views/communications/portfolio/cubrimiento.webp";
import cobranding from "../../../assets/images/views/communications/portfolio/cobranding.webp";
import Fotografo from "../../../assets/images/views/communications/portfolio/cubrimiento/fotografo.webp";
import EncuentroNutresa from "../../../assets/images/views/communications/portfolio/cubrimiento/encuentro-nutresa.webp";
import EncuentroColegio from "../../../assets/images/views/communications/portfolio/cubrimiento/encuentro-colegios.webp";
import Encuentro from "../../../assets/images/views/communications/portfolio/cubrimiento/ffm1.webp";
import EncuentroItagui from "../../../assets/images/views/communications/portfolio/cubrimiento/encuentro-becas-itagui.webp";
import Taller from "../../../assets/images/views/communications/portfolio/cobranding/invitacion-taller-cesi.webp";
import Tutores from "../../../assets/images/views/communications/portfolio/cobranding/pieza-unete-red-tutores.webp";



const portfolioData = [
  {
    id: 0,
    title: "communications.portfolio.opcions.one",
    image: null,
  },
  {
    id: 1,
    title: "communications.portfolio.opcions.two",
    image: PiezaTutores,
    colSpan: 1,
    rowSpan: 2,
    // images: [{ src, colSpan, rowSpan }] — first image is featured (2×2), rest are 1×1
    images: [
      { src: campanaSocial, colSpan: 1, rowSpan: 2 },
      { src: PiezaUnal,  colSpan: 1, rowSpan: 2 },
      { src: PiezaTutores,     colSpan: 1, rowSpan: 2 },
      { src: campanaSocial,    colSpan: 1, rowSpan: 1 },
      { src: campanaSocial,     colSpan: 1, rowSpan: 1 },
      { src: Fotografo,     colSpan: 1, rowSpan: 1 },
    ],
  },
  {
    id: 2,
    title: "communications.portfolio.opcions.three",
    image: Fotografo,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: Fotografo,    colSpan: 2, rowSpan: 2 },
      { src: EncuentroNutresa,  colSpan: 1, rowSpan: 1 },
      { src: EncuentroColegio,  colSpan: 1, rowSpan: 1 },
      { src: Encuentro,  colSpan: 1, rowSpan: 1 },
      { src: EncuentroItagui,     colSpan: 1, rowSpan: 1 },
    ],
  },
  {
    id: 3,
    title: "communications.portfolio.opcions.four",
    image: redesSociales,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: redesSociales,  colSpan: 2, rowSpan: 2 },
      { src: redesSociales,  colSpan: 1, rowSpan: 1 },
      { src: redesSociales,    colSpan: 1, rowSpan: 1 },
      { src: redesSociales,     colSpan: 1, rowSpan: 1 },
      { src: redesSociales,     colSpan: 1, rowSpan: 1 },
    ],
  },
  {
    id: 4,
    title: "communications.portfolio.opcions.five",
    image: Taller,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: Taller,     colSpan: 2, rowSpan: 2 },
      { src: Tutores,  colSpan: 1, rowSpan: 1 },
      { src: Taller,  colSpan: 1, rowSpan: 1 },
      { src: Taller,  colSpan: 1, rowSpan: 1 },
      { src: Taller,    colSpan: 1, rowSpan: 1 },
    ],
  },
  {
    id: 5,
    title: "communications.portfolio.opcions.six",
    image: infografia,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: infografia,     colSpan: 2, rowSpan: 2 },
      { src: infografia,     colSpan: 1, rowSpan: 1 },
      { src: infografia,  colSpan: 1, rowSpan: 1 },
      { src: infografia,  colSpan: 1, rowSpan: 1 },
      { src: infografia,  colSpan: 1, rowSpan: 1 },
    ],
  },
];

export default portfolioData;


