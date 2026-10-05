import SeoHead from "@/components/SeoHead/SeoHead.jsx";
import { BANNER_RETENTION_IMG as BannerRetention } from "@/assets/cloudinaryImages.js";
import StudentRetentionService from "./components/StudentRetentionService.jsx";
import BannerView from "@/components/BannerView/BannerView.jsx";
import PermanenceObjectives from "./components/PermanenceObjectives.jsx";
import StudentSuccess from "./components/StudentSuccess.jsx";

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
