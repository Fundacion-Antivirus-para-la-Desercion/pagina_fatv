import "boxicons";
import BannerView from "../components/Banner-views/BannerView";
import BannerDataAnalytics from "../assets/images/views/dataAnalytics/technology-and-data.webp";
import ContentDA from "../components/dataAnalystics/contentDA/ContentDA";
import Description from "./DataAnalytics/Description/Description";

function DataAnalytics() {
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

      <Description/>
      {/*<ContentDA />*/}
    </div>
  );
}

export default DataAnalytics;
