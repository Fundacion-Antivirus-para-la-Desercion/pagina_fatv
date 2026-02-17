import BannerAtvConnectEn from "../../assets/images/views/atvConnect/academic-tutoring.webp";
import BannerAtvConnectEs from "../../assets/images/views/atvConnect/tutorias-academicas.webp";
import BannerView from "../../components/Banner-views/BannerView";
import { useTranslation } from "react-i18next";
import TestimonialsAtvConnect from "../../views/atv_connect/testimonialsAtvConnect/TestimonialsAtvConnect.jsx";
import BtnAtv from "./btnAtvConnect/BtnAtvConnect.jsx";
import DescriptionAtvConnect from "./descriptionAtvConnect/DescriptionAtvConnect.jsx";
import FiguresAtvConnect from "./figuresAtvConnect/FiguresAtvConnect.jsx";
import ServicesAtvConnect from "./servicesAtvConnect/ServicesAtvConnect.jsx";
import StepsAtvConnect from "./stepsAtvConnect/StepsAtvConnect.jsx";
import SchoolSubjectsAtvConnect from "./schoolSubjects/SchoolSubjectsAtvConnect.jsx";
import GoAtvConnect from "./goAtvConnet/GoAtvConnect.jsx";

function AtvConnect() {
  const { t } = useTranslation();

  return (
    <>
      <BtnAtv />
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            enImage: BannerAtvConnectEn,
            esImage: BannerAtvConnectEs,
            keyTitle: "studentRetentionManagement.alt_img_banner",
          }}
        />
      </div>

      <DescriptionAtvConnect />
      <FiguresAtvConnect />

      <section className="bg-dark-blue p-5">
        <ol className="md:flex justify-center list-none text-white text-justify text-lg md:text-base">
          <li className="m-5 md:m-0 md:mr-8">
            {t("atvConnect.list.item_one")}
          </li>
          <li className="m-5 md:m-0 md:mr-8">
            {t("atvConnect.list.item_two")}
          </li>
          <li className="m-5 md:m-0 md:mr-8">
            {t("atvConnect.list.item_three")}
          </li>
        </ol>
      </section>

      <ServicesAtvConnect />
      <StepsAtvConnect />
      <SchoolSubjectsAtvConnect />
      <TestimonialsAtvConnect />
      <GoAtvConnect />
    </>
  );
}

export default AtvConnect;
