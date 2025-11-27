import React from "react";
import BannerConsultoriasEn from "../assets/images/views/consultorias/student-retention-consulting.webp";
import BannerConsultoriasEs from "../assets/images/views/consultorias/consultoria-en-permanencia-estudiantil.webp";
import services from "../../public/services_imgs/services-image-3.jpg";
import { FaLocationDot } from "react-icons/fa6";

import { useTranslation } from "react-i18next";
import BannerView from "../components/Banner-views/BannerView";

function Consultorias() {
  const { t } = useTranslation();

  return (
    <div className="lg:pt-[145px]">
      <BannerView
        imagesBannerMap={{
          enImage: BannerConsultoriasEn,
          esImage: BannerConsultoriasEs,
          keyTitle: "studentRetentionManagement.alt_img_banner",
        }}
      />

      <div className="mt-20 mb-20 flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className="w-full lg:w-450 max-md:p-6 max-lg:p-6 max-sm:text-center">
          <p className="tracking-nm text-blueBase">
            {t("consultorias.services_title")}
          </p>
          <h1 className="lineSubtitle text-blueBase font-impact text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2">
            {t("consultorias.main_consulting_title")}
          </h1>
          <ul className="text-blueBase list-disc text-xl mb-10">
            <li>{t("consultorias.universities")}</li>
            <li>{t("consultorias.bootcamps")}</li>
            <li>{t("consultorias.schools")}</li>
            <li>{t("consultorias.scholarship_programs")}</li>
          </ul>
          <p className="text-blueBase text-xl">
            {t("consultorias.description")}
          </p>
        </div>
        <div className="relative">
          <img src={services} className="w-full lg:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Consultorias;
