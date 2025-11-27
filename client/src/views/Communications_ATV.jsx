import Commun from "../components/Communications_ATV/Commun";
import BannerCommunEs from "../assets/images/views/commun/Comunicaciones.webp";
import BannerCommunEn from "../assets/images/views/commun/communications.webp";
import BannerView from "../components/Banner-views/BannerView";
import { useTranslation } from "react-i18next";

function Communications() {
  const { t } = useTranslation();

  return (
    <div className="Communications lg:pt-[145px]">
      <BannerView
        imagesBannerMap={{
          enImage: BannerCommunEn,
          esImage: BannerCommunEs,
          keyTitle: "",
        }}
      />
      <Commun />
    </div>
  );
}

export default Communications;
