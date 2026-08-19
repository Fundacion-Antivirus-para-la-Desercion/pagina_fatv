import AtvConnect from "../views/atv_connect/AtvConnect.jsx";
import Communications from "../views/Communications/Communications.jsx";
import Consultorias from "../views/Consulting/Consultorias.jsx";
import ContacUs from "../views/ContacUs/ContacUs";
import DataAnalytics from "../views/DataAnalytics/DataAnalytics.jsx";
import DonationPay from "../views/DonationPay";
import Foundation from "../views/Foundation/Foundation.jsx";
import Home from "../views/Home";
import News from "../components/News/News";
import NewsDetail from "../views/NewsDetail/NewsDetail.jsx";
import ProVocacion from "../views/ProVocacion";
import SocialIntervention from "../views/SocialIntervention/SocialIntervention.jsx";
import StudentRetentionManagement from "../views/StudentRetentionManagement.jsx";

/**
 * key lógica -> componente de página.
 *
 * Vive separado de `routes.config.js` a propósito: ese archivo lo importa
 * Node (scripts/generateSEO.js) y no puede arrastrar JSX ni assets de Vite.
 */
export const PAGES = {
  home: <Home />,
  foundation: <Foundation />,
  dataAnalytics: <DataAnalytics />,
  socialIntervention: <SocialIntervention />,
  communications: <Communications />,
  retention: <StudentRetentionManagement />,
  consulting: <Consultorias />,
  provocacion: <ProVocacion />,
  atvConnect: <AtvConnect />,
  news: <News />,
  newsDetail: <NewsDetail />,
  contact: <ContacUs />,
  donation: <DonationPay />,
};
