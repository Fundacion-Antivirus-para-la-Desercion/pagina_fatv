import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import BannerDA from "../components/dataAnalystics/BannerDA";
import ContentDA from "../components/dataAnalystics/contentDA/ContentDA";
function DataAnalytics() {
  return (
    <div className="data-analytics-container relative top-[145px]">
      <BannerDA />
      <ContentDA />
    </div>
  );
}

export default DataAnalytics;
