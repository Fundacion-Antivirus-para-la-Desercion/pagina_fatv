import SeoHead from "@/components/SeoHead/SeoHead.jsx";
import "boxicons";
import BannerView from "@/components/BannerView/BannerView.jsx";
import { BANNER_DATA_ANALYTICS_IMG as BannerDataAnalytics } from "../../assets/cloudinaryImages";
import Description from "./components/Description.jsx";
import Teams from "@/components/Teams/Teams.jsx";
import data from "./data.js"
import Metrics from "./components/Metrics.jsx";
import Mission from "./components/Mission.jsx";
import Highlights from "./components/Highlights/Highlights.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";


function DataAnalytics() {
  const teamsData = data[0];
  return (
    <div className="data-analytics-container lg:pt-[145px]">
      <SeoHead
        routeKey="dataAnalytics"
        titleKey="dataAnalytics.banner.h1"
        descriptionKey="dataAnalytics.metaDescription"
      />
      <div className="relative w-full">
        <BannerView
          imagesBannerMap={{
            image: BannerDataAnalytics,
            keyAlt: "dataAnalytics.banner.alt",
            keyH1: "dataAnalytics.banner.h1",
          }}
        />
      </div>

      <Description />
      <Metrics />
      <Mission />
      <TechStack />
      <Highlights />
      <Teams teamsData={teamsData} />
    </div>
  );
}

export default DataAnalytics;
