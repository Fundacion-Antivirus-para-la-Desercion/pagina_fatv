import BannerCommun from "../../assets/images/views/communications/banner-communications.webp";
import BannerView from "../../components/Banner-views/BannerView";
import Description from "../Communications/Description/Description.jsx";
import Commun from "../../components/Communications_ATV/Commun";
import CommunicationSkills from "../Communications/CommunicationSkills/CommunicationSkills.jsx";

function Communications() {
  return (
    <>
      <div className="Communications lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            image: BannerCommun,
            keyAlt: "communications.banner.alt",
            keyH1: "communications.banner.h1",
          }}
        />
      </div>

      <Description />
      <CommunicationSkills />
      {/*<Commun />*/}
    </>
  );
}

export default Communications;
