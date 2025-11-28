import "boxicons";
import BannerView from "../components/Banner-views/BannerView";
import BannerDataAnalyticsEn from "../assets/images/views/dataAnalytics/technology-and-data.webp";
import BannerDataAnalyticsEs from "../assets/images/views/dataAnalytics/tecnologia-y-datos.webp";
import ContentDA from "../components/dataAnalystics/contentDA/ContentDA";
function DataAnalytics() {
  return (
    <div className="data-analytics-container lg:pt-[145px]">
      <div className="relative w-full">
        <BannerView
          imagesBannerMap={{
            enImage: BannerDataAnalyticsEn,
            esImage: BannerDataAnalyticsEs,
            keyTitle: "",
          }}
        />
      </div>
      <ContentDA />
    </div>
  );
}

export default DataAnalytics;
