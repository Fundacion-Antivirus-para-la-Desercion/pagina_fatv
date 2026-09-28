import SeoHead from "../../components/seo/SeoHead";
import { BANNER_SOCIAL_IMG as BannerSocial } from "../../assets/cloudinaryImages";
import BannerView from "../../components/Banner-views/BannerView";
import Description from "./Description/Description";
import Metrics from "./Metrics/Metrics";
import ProjectsAndTeams from "./ProjectsAndTeams/ProjectsAndTeams";

function SocialIntervention() {

  return (
    <>
      <SeoHead
        routeKey="socialIntervention"
        titleKey="socialIntervention.banner.h1"
        descriptionKey="socialIntervention.metaDescription"
      />
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
