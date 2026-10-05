import SeoHead from "@/components/SeoHead/SeoHead.jsx";
import { BANNER_RETENTION_IMG as BannerRetention } from "../assets/cloudinaryImages";
import StudentRetentionService from "../components/studentRetentionManagement/StudentRetentionService.jsx";
import BannerView from "@/components/BannerView/BannerView.jsx";
import PermanenceObjectives from "./StudentRetentionManagement/components/PermanenceObjectives/PermanenceObjectives";
import StudentSuccess from "./StudentRetentionManagement/components/StudentSuccess/StudentSuccess";

function StudentRetentionManagement() {

  return (
    <section className="lg:pt-[145px]">
      <SeoHead
        routeKey="retention"
        titleKey="studentRetentionManagement.banner.h1"
        descriptionKey="studentRetentionManagement.metaDescription"
      />
      <BannerView
        imagesBannerMap={{
          image: BannerRetention,
          keyAlt: "studentRetentionManagement.banner.alt",
          keyBr: "studentRetentionManagement.banner.br",
          keyH1: "studentRetentionManagement.banner.h1",
        }}
      />

      <PermanenceObjectives />
      <StudentSuccess />
      <StudentRetentionService />
    </section>
  );
}
export default StudentRetentionManagement;
