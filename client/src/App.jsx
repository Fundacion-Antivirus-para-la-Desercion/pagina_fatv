import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import DonationPay from "./views/DonationPay";
import ContextData from "./components/ContextData/ContextData";
import AboutUs from "./components/aboutUs/AboutUs";
import QHFA from "./views/QHFA";
import DataAnalytics from "./views/DataAnalytics";
import Foundation from "./views/Foundation";
import ContacUs from "./views/ContacUs";
import Communications_ATV from "./views/Communications_ATV";
import ApoyoAcademico from "./Services/ApoyoAcademico";
import AcompañamientoOrientacion from "./Services/AcompañamientoOrientacion";
import Repositorio from "./Services/Repositorio";
import Consultorias from "./views/Consulting/Consultorias.jsx";
import Projects_ATV from "./views/Projects_ATV";
import Universidades from "./projects/Universidades/Universidades";
import Bootcamps from "./projects/Bootcamps/Bootcamps";
import Colegio from "./projects/Colegios/Colegio";
import Becarios from "./projects/Becarios/Becarios";
import NotFound from "./views/NotFound";
import Layout from "./components/layout/Layout";
import ProVocacion from "./views/ProVocacion";
import AtvConnect from "./views/atv_connect/AtvConnect.jsx";
import News from "./components/News/News";
import NewsDetail from "./views/NewsDetail.jsx";
import StudentRetentionManagement from "./views/StudentRetentionManagement.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/DonationPay" element={<DonationPay />} />
          <Route
            path="/intervencion/fortalecimiento-academico"
            element={<QHFA />}
          />
          <Route path="/dataAnalyctis" element={<DataAnalytics />} />
          <Route path="/Comunicaciones" element={<Communications_ATV />} />
          <Route path="/fundacion" element={<Foundation />} />
          <Route path="/News" element={<News />} />
          <Route path="/ContactUs" element={<ContacUs />} />
          <Route path="/ApoyoAcademico" element={<ApoyoAcademico />} />
          <Route
            path="/AcompañamientoOrientacion"
            element={<AcompañamientoOrientacion />}
          />
          <Route path="/Repositorio" element={<Repositorio />} />
          <Route
            path="/gestion-de-la-permanencia"
            element={<StudentRetentionManagement />}
          />
          <Route path="/consultorias" element={<Consultorias />} />
          {/* <Route path="/Universidades" element={<Universidades />} /> */}
          {/*<Route path="/Bootcamps" element={<Bootcamps />} />  */}
          {/* <Route path="/Becarios" element={<Becarios />} /> */}
          {/* <Route path="/colegios" element={<Colegio />} /> */}
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
