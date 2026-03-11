import BannerSocial from "../../assets/images/views/socialIntervention/banner-social-intervention.webp";
import BannerView from "../../components/Banner-views/BannerView";
import { useTranslation } from "react-i18next";
import Description from "./Description/Description";
import Metrics from "./Metrics/Metrics";
import ProjectsAndTeams from "./ProjectsAndTeams/ProjectsAndTeams";

function SocialIntervention() {
  const { t } = useTranslation();

  return (
    <>
      <section className="lg:pt-[145px]">
       <BannerView
        imagesBannerMap={{
          image: BannerSocial,
          keyAlt: "studentRetentionManagement.alt_img_banner",
          keyH1: "studentRetentionManagement.title",
        }}
      />
      </section>
      <Description />
      <Metrics />
      <ProjectsAndTeams />
    </>
  );
}

export default SocialIntervention;
