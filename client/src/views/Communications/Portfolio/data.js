import campanaSocial from "../../../assets/images/views/communications/portfolio/socialCampaigns/poster-atv-conecta-javi.webp";
import PosterAtv from "../../../assets/images/views/communications/portfolio/socialCampaigns/poster-atv-conecta-javi-2.webp";
import CampanaSocial from "../../../assets/images/views/communications/portfolio/socialCampaigns/campana-social.webp";


import PiezaUnal from "../../../assets/images/views/communications/portfolio/socialCampaigns/pieza-us-unal.webp";
import PiezaTutores from "../../../assets/images/views/communications/portfolio/socialCampaigns/pieza-unete-red-tutores.webp";
import FundacionFelisa from "../../../assets/images/views/communications/portfolio/cobranding/pieza-fundacion-felisa-johnson.webp";
import TallerUdea from "../../../assets/images/views/communications/portfolio/cobranding/invitacion-taller-udea.webp";
import PiezaEscucha from "../../../assets/images/views/communications/portfolio/cobranding/aprende-a-escucharte.webp";
import RedTutores from "../../../assets/images/views/communications/portfolio/cobranding/pieza-unete-red-tutores.webp";
import GrupoEstudio from "../../../assets/images/views/communications/portfolio/socialCampaigns/pieza-grupos-estudio-unal.webp";


import redesSociales2 from "../../../assets/images/views/communications/portfolio/socialMedia/redes-sociales.webp";

import cobranding from "../../../assets/images/views/communications/portfolio/cobranding/alianza-facultad-de-minas.webp";
import EncuentroColegio2 from "../../../assets/images/views/communications/portfolio/cubrimiento/estudiantes-vr-mas.webp";


import redesSociales from "../../../assets/images/views/communications/portfolio/redes-sociales.webp";
import infografia from "../../../assets/images/views/communications/portfolio/infografia.webp";
import Fotografo from "../../../assets/images/views/communications/portfolio/cubrimiento/fotografo.webp";
import EncuentroNutresa from "../../../assets/images/views/communications/portfolio/cubrimiento/encuentro-nutresa.webp";
import EncuentroColegio from "../../../assets/images/views/communications/portfolio/cubrimiento/encuentro-colegios.webp";
import Encuentro from "../../../assets/images/views/communications/portfolio/cubrimiento/ffm1.webp";
import EncuentroItagui from "../../../assets/images/views/communications/portfolio/cubrimiento/encuentro-becas-itagui.webp";
import Taller from "../../../assets/images/views/communications/portfolio/cobranding/invitacion-taller-cesi.webp";
import Tutores from "../../../assets/images/views/communications/portfolio/cobranding/pieza-unete-red-tutores.webp";

import FraternidadMedellin from "../../../assets/images/views/communications/portfolio/cobranding/ppt-fraternidad-medellin.webp";

import InfographicOne from "../../../assets/images/views/communications/portfolio/infographics/infografia-atv-conecta.webp";
import InfographicTwo from "../../../assets/images/views/communications/portfolio/infographics/equilibrio-mente-estudio.webp";
import InfographicThree from "../../../assets/images/views/communications/portfolio/infographics/manejo-de-emociones-convocatoria-tutores.webp";
import InfographicFour from "../../../assets/images/views/communications/portfolio/infographics/tutoria-udea.webp";





const portfolioData = [
  {
    id: 0,
    title: "communications.portfolio.opcions.one",
    image: null,
  },
  {
    id: 1,
    title: "communications.portfolio.opcions.three",
    image: Fotografo,
    colSpan: 2,
    rowSpan: 2,
    images: [
      { src: EncuentroColegio2, colSpan: 2, rowSpan: 2 },
      { src: EncuentroNutresa, colSpan: 1, rowSpan: 1 },
      { src: EncuentroColegio, colSpan: 1, rowSpan: 1 },
      { src: Encuentro, colSpan: 1, rowSpan: 1 },
      { src: EncuentroItagui, colSpan: 1, rowSpan: 1 },
    ],
  },
  {
    id: 2,
    title: "communications.portfolio.opcions.two",
    image: CampanaSocial,
    colSpan: 1,
    rowSpan: 1,
    // images: [{ src, colSpan, rowSpan }] — first image is featured (2×2), rest are 1×1
    images: [
      { src: GrupoEstudio, colSpan: 1, rowSpan: 2 },
      { src: PiezaUnal, colSpan: 1, rowSpan: 2 },
      { src: campanaSocial, colSpan: 1, rowSpan: 2 },
      { src: PosterAtv, colSpan: 1, rowSpan: 2 },
    ],
  },
  {
    id: 3,
    title: "communications.portfolio.opcions.four",
    image: redesSociales2,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: redesSociales, colSpan: 2, rowSpan: 2 },
      { src: redesSociales, colSpan: 1, rowSpan: 1 },
      { src: redesSociales, colSpan: 1, rowSpan: 1 },
      { src: redesSociales, colSpan: 1, rowSpan: 1 },
      { src: redesSociales, colSpan: 1, rowSpan: 1 },
    ],
  },
  {
    id: 4,
    title: "communications.portfolio.opcions.five",
    image: cobranding,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: FundacionFelisa, colSpan: 1, rowSpan: 2 },
      { src: TallerUdea, colSpan: 1, rowSpan: 2 },
      { src: RedTutores, colSpan: 1, rowSpan: 2 },
      { src: FraternidadMedellin, colSpan: 1, rowSpan: 1 },
      { src: Taller, colSpan: 1, rowSpan: 1 },
    ],
  },
  {
    id: 5,
    title: "communications.portfolio.opcions.six",
    image: infografia,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: InfographicOne, colSpan: 1, rowSpan: 2 },
      { src: InfographicTwo, colSpan: 1, rowSpan: 2 },
      { src: InfographicThree, colSpan: 1, rowSpan: 2 },
      { src: InfographicFour, colSpan: 1, rowSpan: 2 },
    ],
  },
];

export default portfolioData;
