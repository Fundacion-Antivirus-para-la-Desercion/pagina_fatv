import "boxicons";
import BannerView from "../../components/Banner-views/BannerView";
import BannerDataAnalytics from "../../assets/images/views/dataAnalytics/technology-and-data.webp";
import ContentDA from "../../components/dataAnalystics/contentDA/ContentDA.jsx";
import Description from "../DataAnalytics/Description/Description.jsx";
import Teams from "../../components/teamsArea/Teams.jsx";
import data from "./data.js"
import Metrics from "./Metrics/Metrics.jsx";


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
      <Teams teamsData={teamsData} />
      {/*<ContentDA />*/}
    </div>
  );
}

export default DataAnalytics;
