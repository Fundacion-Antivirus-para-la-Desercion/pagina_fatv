import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { BANNER_RETENTION_IMG as BannerRetention } from "../assets/cloudinaryImages";
import StudentRetentionService from "../components/studentRetentionManagement/StudentRetentionService.jsx";
import BannerView from "../components/Banner-views/BannerView.jsx";
import PermanenceObjectives from "./StudentRetentionManagement/components/PermanenceObjectives/PermanenceObjectives";
import StudentSuccess from "./StudentRetentionManagement/components/StudentSuccess/StudentSuccess";

function StudentRetentionManagement() {
  const { t } = useTranslation();

  return (
    <section className="lg:pt-[145px]">
      <Helmet>
        <title>
          {t("studentRetentionManagement.banner.h1")} | Fundación Antivirus para
          la Deserción
        </title>
        <meta
          name="description"
          content={t("studentRetentionManagement.metaDescription")}
        />
      </Helmet>
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
