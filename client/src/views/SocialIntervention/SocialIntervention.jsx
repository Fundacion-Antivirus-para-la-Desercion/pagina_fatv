import BannerQhfaEn from "../../assets/images/views/socialIntervention/social-intervention.webp";
import BannerQhfaEs from "../../assets/images/views/socialIntervention/intervencion-social.webp";

import BannerView from "../../components/Banner-views/BannerView";
import { useTranslation } from "react-i18next";
import Description from "./Description/Description";
import Metrics from "./Metrics/Metrics";
function SocialIntervention() {
  const { t } = useTranslation();

  return (
    <>
      <section className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            enImage: BannerQhfaEn,
            esImage: BannerQhfaEs,
            keyTitle: "studentRetentionManagement.alt_img_banner",
          }}
        />
      </section>
      <Description />
      <Metrics />
    </>
  );
}

export default SocialIntervention;
