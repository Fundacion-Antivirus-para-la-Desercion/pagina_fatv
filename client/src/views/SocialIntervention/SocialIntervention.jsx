import BannerQhfaEn from "../../assets/images/views/socialIntervention/social-intervention.webp";
import BannerQhfaEs from "../../assets/images/views/socialIntervention/intervencion-social.webp";
import Description from "./Description/Description";

import BannerView from "../../components/Banner-views/BannerView";
import { useTranslation } from "react-i18next";

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
    </>
  );
}

export default SocialIntervention;
