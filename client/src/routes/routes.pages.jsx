import AtvConnect from "@/views/AtvConnect/AtvConnect.jsx";
import Communications from "../views/Communications/Communications.jsx";
import Consulting from "@/views/Consulting/Consulting.jsx";
import ContactUs from "@/views/ContactUs/ContactUs.jsx";
import DataAnalytics from "../views/DataAnalytics/DataAnalytics.jsx";
import DonationPay from "@/views/DonationPay/DonationPay.jsx";
import Foundation from "../views/Foundation/Foundation.jsx";
import Home from "@/views/Home/Home.jsx";
import News from "@/views/News/News.jsx";
import NewsDetail from "../views/NewsDetail/NewsDetail.jsx";
import ProVocacion from "@/views/ProVocacion/ProVocacion.jsx";
import SocialIntervention from "../views/SocialIntervention/SocialIntervention.jsx";
import StudentRetentionManagement from "@/views/StudentRetentionManagement/StudentRetentionManagement.jsx";

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
  consulting: <Consulting />,
  provocacion: <ProVocacion />,
  atvConnect: <AtvConnect />,
  news: <News />,
  newsDetail: <NewsDetail />,
  contact: <ContactUs />,
  donation: <DonationPay />,
};
