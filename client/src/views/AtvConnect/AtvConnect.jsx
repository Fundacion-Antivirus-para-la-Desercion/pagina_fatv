import SeoHead from "@/components/SeoHead/SeoHead.jsx";
import { BANNER_ATV_CONNECT_IMG as BannerAtvConnect } from "../../assets/cloudinaryImages";
import BannerView from "@/components/BannerView/BannerView.jsx";
import { useTranslation } from "react-i18next";
import TestimonialsAtvConnect from "./components/TestimonialsAtvConnect/TestimonialsAtvConnect.jsx";
import BtnAtv from "./components/BtnAtvConnect/BtnAtvConnect.jsx";
import DescriptionAtvConnect from "./components/DescriptionAtvConnect.jsx";
import FiguresAtvConnect from "./components/FiguresAtvConnect.jsx";
import ServicesAtvConnect from "./components/ServicesAtvConnect.jsx";
import StepsAtvConnect from "./components/StepsAtvConnect.jsx";
import SchoolSubjectsAtvConnect from "./components/SchoolSubjectsAtvConnect.jsx";
import GoAtvConnect from "./components/GoAtvConnect.jsx";
import PricingCardsAtvConnect from "./components/PricingCardsAtvConnect.jsx";


const LIST_KEYS = [
  "atvConnect.list.item_one",
  "atvConnect.list.item_two",
  "atvConnect.list.item_three",
  "atvConnect.list.item_four",
];

function AtvConnect() {
  const { t } = useTranslation();

  return (
    <>
      <SeoHead
        routeKey="atvConnect"
        titleKey="atvConnect.banner.h1"
        descriptionKey="atvConnect.metaDescription"
      />
      <BtnAtv />
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            image: BannerAtvConnect,
            keyAlt: "atvConnect.banner.alt",
            keyBr: "atvConnect.banner.br",
            keyH1: "atvConnect.banner.h1",
          }}
        />
      </div>

      <DescriptionAtvConnect />
      <FiguresAtvConnect />

      <section className="bg-dark-blue p-5">
        <ol className="flex flex-col items-center md:flex-row flex-wrap md:justify-center list-none text-white text-justify text-base md:text-lg">
          {LIST_KEYS.map((key) => (
            <li key={key} className="m-3 md:m-0 md:mr-8">
              {t(key)}
            </li>
          ))}
        </ol>
      </section>

      <ServicesAtvConnect />
      <PricingCardsAtvConnect />
      <StepsAtvConnect />
      <SchoolSubjectsAtvConnect />
      <TestimonialsAtvConnect />
      <GoAtvConnect />
    </>
  );
}

export default AtvConnect;
