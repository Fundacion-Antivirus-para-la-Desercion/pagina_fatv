import Commun from "../components/Communications_ATV/Commun";
import BannerCommun from "../assets/images/views/commun/banner-communications.webp";
import BannerView from "../components/Banner-views/BannerView";
import { useTranslation } from "react-i18next";

function Communications() {
  const { t } = useTranslation();

  return (
    <div className="Communications lg:pt-[145px]">
      <BannerView
        imagesBannerMap={{
          image: BannerCommun,
          keyAlt: "communications_ATV.banner.alt",
          keyH1: "communications_ATV.banner.h1",
        }}
      />
      <Commun />
    </div>
  );
}

export default Communications;
