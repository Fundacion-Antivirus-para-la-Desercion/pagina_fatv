import { useTranslation } from "react-i18next";
import { FaCheck, FaHandHoldingHeart } from "react-icons/fa";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { floatSnake } from "../../../components/motion/constants/Animations.js";
import { LuUser } from "react-icons/lu";
import { RiBuilding4Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";
import WhatsAppRedirect from "../../../components/whatsAppRedirect/WhatsAppRedirect";
import { ESTUDIANTE_ATV_CONECTA_IMG as Estudiante } from "../../../assets/cloudinaryImages";

const CARDS = [
  {
    key: "personas",
    whatsappMessageKey: "atvConnect_persons",
    icon: LuUser,
    labelKey: "label_ideal",
    checks: ["check_one", "check_two", "check_three"],
    bar: "bg-brand-blue-100",
    iconBg: "bg-brand-blue-50",
    iconColor: "text-brand-blue-300",
    subtitleColor: "text-brand-blue-100",
    checkColor: "text-brand-blue-100",
    btnBg: "bg-brand-blue-100 hover:bg-brand-blue-200",
    iva: true,
  },
  {
    key: "institucional",
    whatsappMessageKey: "atvConnect_institutional",
    icon: RiBuilding4Line,
    labelKey: "label_ideal",
    checks: ["check_one", "check_two", "check_three", "check_four"],
    bar: "bg-primary-yellow",
    iconBg: "bg-primary-yellow/40",
    iconColor: "text-dark-yellow",
    subtitleColor: "text-dark-yellow",
    checkColor: "text-primary-yellow",
    btnBg: "bg-primary-yellow hover:bg-dark-yellow",
  },
  {
    key: "plataforma",
    whatsappMessageKey: "atvConnect_platform",
    icon: FaDisplay,
    labelKey: "label_ideal",
    checks: ["check_one", "check_two", "check_three", "check_four"],
    bar: "bg-primary-purple",
    iconBg: "bg-primary-purple/40",
    iconColor: "text-primary-purple",
    subtitleColor: "text-primary-purple",
    checkColor: "text-primary-purple",
    btnBg: "bg-brand-purple-100 hover:bg-brand-purple-200",
  },
];

function PricingCardsAtvConnect() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-blue-base font-impact text-3xl md:text-5xl mt-2">
            {t("atvConnect.pricing.title")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CARDS.map((card) => {
            const Icon = card.icon;
            const base = `atvConnect.pricing.${card.key}`;
            const whatsappHref = WhatsAppRedirect(
              t(`whatsappMessage.${card.whatsappMessageKey}`),
            );
            return (
              <div
                key={card.key}
                className="relative bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden hover:translate-y-[-8px] transition-transform duration-300"
              >
                <div className={`h-2 w-full ${card.bar}`} />

                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`text-xl ${card.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="text-blue-base font-bold text-3xl">
                      ATVConecta
                    </h3>
                    <p className={`font-bold text-2xl ${card.subtitleColor}`}>
                      {t(`${base}.subtitle`)}
                    </p>
                  </div>

                  <p className="text-blue-base text-md leading-relaxed">
                    {t(`${base}.description`)}
                  </p>

                  <hr className="border-gray-200" />

                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-1">
                      {t(`atvConnect.pricing.${card.labelKey}`)}
                    </p>
                    <p className="text-blue-base text-sm font-semibold leading-snug">
                      {t(`${base}.target`)}
                    </p>
                  </div>

                  <div>
                    <p className="text-blue-base font-bold text-2xl leading-tight">
                      {t(`${base}.price_label`)}
                    </p>
                    {card.iva && (
                      <p className="text-blue-base text-xl mt-0.5">
                        {t(`${base}.iva_total`)}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm">
                      {t(`${base}.price_sub`)}
                    </p>
                  </div>
                  <p className="text-blue-base font-bold text-lg">
                    {t(`${base}.subtitle_two`)}
                  </p>
                  <ul className="flex flex-col gap-2 flex-1">
                    {card.checks.map((ck) => (
                      <li
                        key={ck}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <FaCheck
                          className={`mt-0.5 shrink-0 ${card.checkColor}`}
                        />
                        {t(`${base}.${ck}`)}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 w-full ${card.btnBg} text-white rounded-full py-3 px-4 text-sm font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300`}
                  >
                    {t("atvConnect.pricing.btn_cta")}
                    <IoIosArrowForward />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="mt-16 overflow-hidden rounded-3xl flex flex-col xl:flex-row mx-auto max-w-screen-2xl">
        <div className="relative overflow-hidden flex-1 min-h-[280px] bg-brand-teal-400 flex flex-col md:flex-row">
          <section className="flex flex-col gap-4 p-8 md:p-10 flex-1 items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <FaHandHoldingHeart className="text-3xl md:text-4xl text-white  " />
              <span className="bg-white/95 text-sm md:text-base text-dark-blue font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                {t("atvConnect.pricing.impactBanner.impact_label")}
              </span>
            </div>
            <h4 className="text-2xl md:text-3xl font-renogare text-white leading-tight">
              {t("atvConnect.pricing.impactBanner.impact_badge")}
            </h4>
            <p className="text-lg md:text-xl text-white/90">
              {t("atvConnect.pricing.impactBanner.impact_sub")}
            </p>
          </section>
          <section className="flex items-end overflow-hidden justify-center md:justify-start">
            <img
              src={Estudiante}
              alt={t("atvConnect.pricing.impactBanner.alt_img_impact")}
              className="h-full w-auto object-cover object-top max-h-[200px] md:max-h-[250px]"
            />
          </section>
        </div>

        <div className="relative overflow-hidden flex-1 p-8 md:p-12 bg-dark-blue flex flex-col text-left gap-4">
          <motion.section {...floatSnake(0)}>
            {" "}
            <LiaGraduationCapSolid className="hidden xl:block absolute -top-5 right-1 text-[8rem] rotate-12 text-white opacity-30 pointer-events-none" />
          </motion.section>

          <section className="max-w-xl">
            {" "}
            <h4 className="text-2xl md:text-4xl font-renogare text-white leading-tight max-w-sm mb-3">
              {t("atvConnect.pricing.impactBanner.impact_headline_main")}
              <br />
              <span className="text-primary-yellow">
                {t("atvConnect.pricing.impactBanner.impact_headline_highlight")}
              </span>
            </h4>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              {t("atvConnect.pricing.impactBanner.impact_body")}
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default PricingCardsAtvConnect;
