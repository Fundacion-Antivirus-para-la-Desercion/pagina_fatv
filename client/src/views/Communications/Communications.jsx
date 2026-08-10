import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { BANNER_COMMUNICATIONS_IMG as BannerCommun } from "../../assets/cloudinaryImages";
import BannerView from "../../components/Banner-views/BannerView";
import Description from "../Communications/Description/Description.jsx";
import CommunicationSkills from "../Communications/CommunicationSkills/CommunicationSkills.jsx";
import Services from "../Communications/Services/Services.jsx";
import Metrics from "../Communications/Metrics/Metrics.jsx";
import Portfolio from "../Communications/Portfolio/Portfolio.jsx";
import data from "./data.js";
import Teams from "../../components/teamsArea/Teams.jsx";

function Communications() {
  const { t } = useTranslation();
  const teamsData = data[0];
  return (
    <>
      <Helmet>
        <title>{t("communications.banner.h1")} | Fundación Antivirus para la Deserción</title>
        <meta name="description" content={t("communications.metaDescription")} />
      </Helmet>
      <div className="Communications lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            image: BannerCommun,
            keyAlt: "communications.banner.alt",
            keyH1: "communications.banner.h1",
          }}
        />
      </div>

      <Description />
      <CommunicationSkills />
      <Services />
      <Metrics />
      <Portfolio />
      <Teams teamsData={teamsData} />
    </>
  );
}

export default Communications;
