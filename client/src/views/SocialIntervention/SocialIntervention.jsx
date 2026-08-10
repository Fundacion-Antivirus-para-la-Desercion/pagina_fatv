import { BANNER_SOCIAL_IMG as BannerSocial } from "../../assets/cloudinaryImages";
import BannerView from "../../components/Banner-views/BannerView";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Description from "./Description/Description";
import Metrics from "./Metrics/Metrics";
import ProjectsAndTeams from "./ProjectsAndTeams/ProjectsAndTeams";

function SocialIntervention() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("socialIntervention.banner.h1")} | Fundación Antivirus para la Deserción</title>
        <meta name="description" content={t("socialIntervention.metaDescription")} />
      </Helmet>
      <section className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            image: BannerSocial,
            keyAlt: "socialIntervention.banner.alt",
            keyH1: "socialIntervention.banner.h1",
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
