import Cubrimiento from "../../../assets/images/views/communications/portfolio/cubrimiento/fotografo.webp";
import CubrimientoTwo from "../../../assets/images/views/communications/portfolio/cubrimiento/estudiantes-vr-mas.webp";
import CubrimientoThree from "../../../assets/images/views/communications/portfolio/cubrimiento/encuentro-nutresa.webp";
import CubrimientoFour from "../../../assets/images/views/communications/portfolio/cubrimiento/encuentro-colegios.webp";
import CubrimientoFive from "../../../assets/images/views/communications/portfolio/cubrimiento/ffm1.webp";
import CubrimientoSix from "../../../assets/images/views/communications/portfolio/cubrimiento/encuentro-becas-itagui.webp";

import SocialCampaigns from "../../../assets/images/views/communications/portfolio/socialCampaigns/campana-social.webp";
import SocialCampaignsTwo from "../../../assets/images/views/communications/portfolio/socialCampaigns/pieza-grupos-estudio-unal.webp";
import SocialCampaignsThree from "../../../assets/images/views/communications/portfolio/socialCampaigns/pieza-us-unal.webp";
import SocialCampaignsFour from "../../../assets/images/views/communications/portfolio/socialCampaigns/poster-atv-conecta-javi.webp";
import SocialCampaignsFive from "../../../assets/images/views/communications/portfolio/socialCampaigns/poster-atv-conecta-javi-2.webp";

import SocialMedia from "../../../assets/images/views/communications/portfolio/socialMedia/redes-sociales.webp";
import SocialMediaTwo from "../../../assets/images/views/communications/portfolio/socialMedia/permanencia-unal.webp";
import SocialMediaThree from "../../../assets/images/views/communications/portfolio/socialMedia/fatv-se-vio-asi.webp";
import SocialMediaFour from "../../../assets/images/views/communications/portfolio/socialMedia/dia-de-la-mujer-ingeniera.webp";
import SocialMediaFive from "../../../assets/images/views/communications/portfolio/socialMedia/atv-conecta-unico.webp";

import Cobranding from "../../../assets/images/views/communications/portfolio/cobranding/alianza-facultad-de-minas.webp";
import CobrandingTwo from "../../../assets/images/views/communications/portfolio/cobranding/pieza-fundacion-felisa-johnson.webp";
import CobrandingThree from "../../../assets/images/views/communications/portfolio/cobranding/invitacion-taller-udea.webp";
import CobrandingFour from "../../../assets/images/views/communications/portfolio/cobranding/pieza-unete-red-tutores.webp";
import CobrandingFive from "../../../assets/images/views/communications/portfolio/cobranding/ppt-fraternidad-medellin.webp";
import CobrandingSix from "../../../assets/images/views/communications/portfolio/cobranding/invitacion-taller-cesi.webp";

import Infographic from "../../../assets/images/views/communications/portfolio/infografia.webp";
import InfographicTwo from "../../../assets/images/views/communications/portfolio/infographics/infografia-atv-conecta.webp";
import InfographicThree from "../../../assets/images/views/communications/portfolio/infographics/equilibrio-mente-estudio.webp";
import InfographicFour from "../../../assets/images/views/communications/portfolio/infographics/manejo-de-emociones-convocatoria-tutores.webp";
import InfographicFive from "../../../assets/images/views/communications/portfolio/infographics/tutoria-udea.webp";

const portfolioData = [
  {
    id: 0,
    title: "communications.portfolio.opcions.one",
    image: null,
  },
  {
    id: 1,
    title: "communications.portfolio.opcions.three",
    image: Cubrimiento,
    colSpan: 2,
    rowSpan: 2,
    images: [
      { src: CubrimientoTwo, colSpan: 2, rowSpan: 2 },
      { src: CubrimientoThree, colSpan: 1, rowSpan: 1 },
      { src: CubrimientoFour, colSpan: 1, rowSpan: 1 },
      { src: CubrimientoFive, colSpan: 1, rowSpan: 1 },
      { src: CubrimientoSix, colSpan: 1, rowSpan: 1 },
    ],
  },
  {
    id: 2,
    title: "communications.portfolio.opcions.two",
    image: SocialCampaigns,
    colSpan: 1,
    rowSpan: 1,
    // images: [{ src, colSpan, rowSpan }] — first image is featured (2×2), rest are 1×1
    images: [
      { src: SocialCampaignsTwo, colSpan: 1, rowSpan: 2 },
      { src: SocialCampaignsThree, colSpan: 1, rowSpan: 2 },
      { src: SocialCampaignsFour, colSpan: 1, rowSpan: 2 },
      { src: SocialCampaignsFive, colSpan: 1, rowSpan: 2 },
    ],
  },
  {
    id: 3,
    title: "communications.portfolio.opcions.four",
    image: SocialMedia,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: SocialMediaTwo, colSpan: 1, rowSpan: 2 },
      { src: SocialMediaThree, colSpan: 1, rowSpan: 2 },
      { src: SocialMediaFour, colSpan: 1, rowSpan: 2 },
      { src: SocialMediaFive, colSpan: 1, rowSpan: 2 },
    ],
  },
  {
    id: 4,
    title: "communications.portfolio.opcions.five",
    image: Cobranding,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: CobrandingTwo, colSpan: 1, rowSpan: 2 },
      { src: CobrandingThree, colSpan: 1, rowSpan: 2 },
      { src: CobrandingFour, colSpan: 1, rowSpan: 2 },
      { src: CobrandingFive, colSpan: 1, rowSpan: 1 },
      { src: CobrandingSix, colSpan: 1, rowSpan: 1 },
    ],
  },
  {
    id: 5,
    title: "communications.portfolio.opcions.six",
    image: Infographic,
    colSpan: 1,
    rowSpan: 1,
    images: [
      { src: InfographicTwo, colSpan: 1, rowSpan: 2 },
      { src: InfographicThree, colSpan: 1, rowSpan: 2 },
      { src: InfographicFour, colSpan: 1, rowSpan: 2 },
      { src: InfographicFive, colSpan: 1, rowSpan: 2 },
    ],
  },
];

export default portfolioData;
