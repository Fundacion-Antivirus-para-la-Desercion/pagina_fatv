import "boxicons";
import BannerView from "../components/Banner-views/BannerView";
import BannerDataAnalytics from "../assets/images/views/dataAnalytics/tecnologia-y-datos.webp";
import ContentDA from "../components/dataAnalystics/contentDA/ContentDA";
function DataAnalytics() {
  return (
    <div className="data-analytics-container lg:pt-[145px]">
      <div className="relative w-full">
        <BannerView
          imagesBannerMap={{
            image: BannerDataAnalytics,
            keyAlt: "studentRetentionManagement.alt_img_banner",
            keyH1: "studentRetentionManagement.title",
          }}
        />
      </div>
      <ContentDA />
    </div>
  );
}

export default DataAnalytics;
