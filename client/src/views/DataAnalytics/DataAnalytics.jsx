import "boxicons";
import BannerView from "../../components/Banner-views/BannerView";
import { BANNER_DATA_ANALYTICS_IMG as BannerDataAnalytics } from "../../assets/cloudinaryImages";
import Description from "../DataAnalytics/Description/Description.jsx";
import Teams from "../../components/teamsArea/Teams.jsx";
import data from "./data.js"
import Metrics from "./Metrics/Metrics.jsx";
import Mission from "./Mission/Mission.jsx";
import Highlights from "./Highlights/Highlights.jsx";
import TechStack from "./TechStack/TechStack.jsx";


function DataAnalytics() {
  const teamsData = data[0];
  return (
    <div className="data-analytics-container lg:pt-[145px]">
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
