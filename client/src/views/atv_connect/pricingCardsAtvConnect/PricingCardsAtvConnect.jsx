import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaRegHeart, FaCheck } from "react-icons/fa";
import { LuUser, LuMonitor } from "react-icons/lu";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { expandableTransition } from "../../../components/motion/constants/Animations";
import WhatsAppRedirect from "../../../components/whatsAppRedirect/WhatsAppRedirect";

const CARDS = [
  {
    key: "social",
    icon: FaRegHeart,
    featured: false,
    labelKey: "label_applies",
    checks: ["check_one", "check_two"],
    bar: "bg-brand-teal-300",
    iconBg: "bg-brand-teal-50",
    iconColor: "text-brand-teal-400",
    subtitleColor: "text-brand-teal-400",
    checkColor: "text-brand-teal-400",
    btnBg: "bg-brand-teal-400 hover:bg-brand-teal-300",
  },
  {
    key: "personas",
    icon: LuUser,
    featured: true,
    labelKey: "label_ideal",
    checks: ["check_one", "check_two"],
    bar: "bg-green-600",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    subtitleColor: "text-green-700",
    checkColor: "text-green-600",
    btnBg: "bg-green-700 hover:bg-green-600",
    badgeBg: "bg-green-600",
  },
  {
    key: "institucional",
    icon: HiOfficeBuilding,
    featured: false,
    labelKey: "label_ideal",
    checks: ["check_one", "check_two", "check_three"],
    bar: "bg-orange-500",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    subtitleColor: "text-orange-500",
    checkColor: "text-orange-500",
    btnBg: "bg-orange-500 hover:bg-orange-600",
  },
  {
    key: "plataforma",
    icon: LuMonitor,
    featured: false,
    labelKey: "label_ideal",
    checks: ["check_one", "check_two", "check_three"],
    bar: "bg-brand-purple-300",
    iconBg: "bg-brand-purple-50",
    iconColor: "text-brand-purple-400",
    subtitleColor: "text-brand-purple-400",
    checkColor: "text-brand-purple-400",
    btnBg: "bg-brand-purple-400 hover:bg-brand-purple-300",
  },
];

function PricingCardsAtvConnect() {
  const { t } = useTranslation();
  const whatsappHref = WhatsAppRedirect(t("whatsappMessage.atvConnect"));

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">         
          <h2 className="text-dark-blue font-impact text-3xl md:text-4xl mt-2 uppercase">
            {t("atvConnect.pricing.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
                className={`relative bg-white rounded-2xl shadow-md flex flex-col overflow-hidden${
                  card.featured ? " ring-2 ring-green-600 shadow-xl" : ""
                }`}
              >
                <div className={`h-1.5 w-full ${card.bar}`} />

                {card.featured && (
                  <div className="absolute top-4 right-4">
                    <span
                      className={`${card.badgeBg} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}
                    >
                      {t("atvConnect.pricing.badge_featured")}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`text-xl ${card.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="text-dark-blue font-bold text-xl">ATVConecta</h3>
                    <p className={`font-bold text-xl ${card.subtitleColor}`}>
                      {t(`${base}.subtitle`)}
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t(`${base}.description`)}
                  </p>

                  <hr className="border-gray-200" />

                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-1">
                      {t(`atvConnect.pricing.${card.labelKey}`)}
                    </p>
                    <p className="text-dark-blue text-sm font-semibold leading-snug">
                      {t(`${base}.target`)}
                    </p>
                  </div>

                  <div>
                    <p className="text-dark-blue font-bold text-2xl leading-tight">
                      {t(`${base}.price_label`)}
                    </p>
                    <p className="text-gray-400 text-sm">{t(`${base}.price_sub`)}</p>
                  </div>

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
