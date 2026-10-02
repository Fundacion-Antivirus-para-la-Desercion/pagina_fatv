import SeoHead from "../../components/seo/SeoHead";
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
  const teamsData = data[0];
  return (
    <>
      <SeoHead
        routeKey="communications"
        titleKey="communications.banner.h1"
        descriptionKey="communications.metaDescription"
      />
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
