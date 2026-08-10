import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaRegHeart, FaCheck } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { RiBuilding4Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";

import { expandableTransition } from "../../../components/motion/constants/Animations";
import WhatsAppRedirect from "../../../components/whatsAppRedirect/WhatsAppRedirect";

const CARDS = [
  {
    key: "social",
    icon: FaRegHeart,
    labelKey: "label_applies",
    checks: ["check_one", "check_two" , "check_three"],
    bar: "bg-brand-teal-300",
    iconBg: "bg-brand-teal-50",
    iconColor: "text-brand-teal-400",
    subtitleColor: "text-brand-teal-400",
    checkColor: "text-brand-teal-400",
    btnBg: "bg-brand-teal-300 hover:bg-brand-teal-400",
  },
  {
    key: "personas",
    icon: LuUser,
    labelKey: "label_ideal",
    checks: ["check_one", "check_two", "check_three"],
    bar: "bg-brand-blue-100",
    iconBg: "bg-brand-blue-50",
    iconColor: "text-brand-blue-300",
    subtitleColor: "text-brand-blue-100",
    checkColor: "text-brand-blue-100",
    btnBg: "bg-brand-blue-100 hover:bg-brand-blue-200",
  },
  {
    key: "institucional",
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
  const whatsappHref = WhatsAppRedirect(t("whatsappMessage.atvConnect"));

  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-blue-base font-impact text-3xl md:text-5xl mt-2">
            {t("atvConnect.pricing.title")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
          {CARDS.map((card, index) => {
            const Icon = card.icon;
            const base = `atvConnect.pricing.${card.key}`;
            const anim = expandableTransition({
              transition: { delay: index * 0.12 },
              viewport: { amount: 0.2 },
            });

            return (
              <motion.div
                key={card.key}
                {...anim}
                className="relative bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
              >
                <div className={`h-2 w-full ${card.bar}`} />

                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`text-xl ${card.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="text-blue-base font-bold text-3xl">ATVConecta</h3>
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
                    <p className="text-gray-400 text-sm">{t(`${base}.price_sub`)}</p>
                  </div>
                  <p className="text-blue-base font-bold text-lg">{t(`${base}.subtitle_two`)}</p>
                  <ul className="flex flex-col gap-2 flex-1">
                    {card.checks.map((ck) => (
                      <li
                        key={ck}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <FaCheck className={`mt-0.5 shrink-0 ${card.checkColor}`} />
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingCardsAtvConnect;
