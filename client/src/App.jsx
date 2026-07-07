import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import DonationPay from "./views/DonationPay";
import ContextData from "./components/ContextData/ContextData";
import QHFA from "./views/QHFA";
import DataAnalytics from "./views/DataAnalytics/DataAnalytics.jsx";
import Foundation from "./views/Foundation/Foundation.jsx";
import ContacUs from "./views/ContacUs";
import Communications from "./views/Communications/Communications.jsx";
import ApoyoAcademico from "./Services/ApoyoAcademico";
import AcompañamientoOrientacion from "./Services/AcompañamientoOrientacion";
import Consultorias from "./views/Consulting/Consultorias.jsx";
import Projects_ATV from "./views/Projects_ATV";
import NotFound from "./views/NotFound";
import Layout from "./components/layout/Layout";
import ProVocacion from "./views/ProVocacion";
import AtvConnect from "./views/atv_connect/AtvConnect.jsx";
import News from "./components/News/News";
import NewsDetail from "./views/NewsDetail/NewsDetail.jsx";
import StudentRetentionManagement from "./views/StudentRetentionManagement.jsx";
import SocialIntervention from "./views/SocialIntervention/SocialIntervention.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/DonationPay" element={<DonationPay />} />
          {/*<Route
            path="/intervencion/fortalecimiento-academico"
            element={<QHFA />}
          />*/}
          <Route path="/social-intervention" element={<SocialIntervention />} />
          <Route path="/dataAnalytics" element={<DataAnalytics />} />{" "}
          <Route path="/Comunicaciones" element={<Communications />} />
          <Route path="/fundacion" element={<Foundation />} />
          <Route path="/News" element={<News />} />
          <Route path="/ContactUs" element={<ContacUs />} />
          <Route path="/ApoyoAcademico" element={<ApoyoAcademico />} />
          <Route
            path="/AcompañamientoOrientacion"
            element={<AcompañamientoOrientacion />}
          />
          <Route
            path="/gestion-de-la-permanencia"
            element={<StudentRetentionManagement />}
          />
          <Route path="/consultorias" element={<Consultorias />} />
          <Route path="/provocacion" element={<ProVocacion />} />
          <Route path="/atvconnect" element={<AtvConnect />} />
          <Route path="/news/detail" element={<NewsDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
