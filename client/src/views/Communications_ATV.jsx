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
          keyAlt: "studentRetentionManagement.alt_img_banner",
          keyH1: "studentRetentionManagement.title",
        }}
      />
      <Commun />
    </div>
  );
}

export default Communications;
