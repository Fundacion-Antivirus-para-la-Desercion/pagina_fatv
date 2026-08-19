import LocalizedLink from "../routing/LocalizedLink";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  floatSnake,
  slideFromLeft,
  createFlipInVariant,
  expandableTransition,
} from "../../components/motion/constants/Animations.js";

const SERVICES_DATA = [
  {
    key: "academic",
    borderColor: "border-primary-yellow",
    bgColor: "bg-[#FFF8E6]",
    shadowColor: "hover:shadow-[0_10px_20px_0_#FFEBB8]",
    iconBgColor: "bg-primary-yellow",
    iconPosition: "-top-6 -left-5 ml-2",
    titleColor: "text-primary-yellow",
    gridAlign: "xl:justify-self-end",
    emoji: "📚",
    delay: 0,
    items: [
      { emoji: "📚", key: "itemOne" },
      { emoji: "🎓", key: "itemTwo" },
      { emoji: "👨‍👩‍👦", key: "itemThree" },
      { emoji: "⚡", key: "itemFour" },
      { emoji: "▶️", key: "itemFive" },
    ],
  },
  {
    key: "socioEmotional",
    borderColor: "border-[#2C9BC7]",
    bgColor: "bg-[#CCEDE8]",
    shadowColor: "hover:shadow-[0_10px_20px_0_#CCEDE8]",
    iconBgColor: "bg-[#2C9BC7]",
    iconPosition: "-top-6 -right-3 ml-3",
    titleColor: "text-[#2C9BC7]",
    gridAlign: "xl:justify-self-start",
    emoji: "💙",
    delay: 0.15,
    items: [
      { emoji: "💬", key: "itemOne" },
      { emoji: "🧠", key: "itemTwo" },
      { emoji: "💚", key: "itemThree" },
      { emoji: "🧰", key: "itemFour" },
      { emoji: "😊", key: "itemFive" },
    ],
  },
  {
    key: "socioEconomic",
    borderColor: "border-[#7C76B5]",
    bgColor: "bg-[#D3C3E3]",
    shadowColor: "hover:shadow-[0_10px_20px_0_#D3C3E3]",
    iconBgColor: "bg-[#7C76B5]",
    iconPosition: "-bottom-6 -left-5 ml-2",
    titleColor: "text-[#7C76B5]",
    gridAlign: "xl:justify-self-end",
    emoji: "💰",
    delay: 0.3,
    items: [
      { emoji: "💻", key: "itemOne" },
      { emoji: "💰", key: "itemTwo" },
      { emoji: "🤝", key: "itemThree" },
      { emoji: "📊", key: "itemFour" },
    ],
  },
  {
    key: "socioVocational",
    borderColor: "border-[#0B8F84]",
    bgColor: "bg-[#CCEDE8]",
    shadowColor: "hover:shadow-[0_10px_20px_0_#CCEDE8]",
    iconBgColor: "bg-[#0B8F84]",
    iconPosition: "-bottom-6 -right-3 ml-2",
    titleColor: "text-[#0B8F84]",
    gridAlign: "xl:justify-self-start",
    emoji: "🎯",
    delay: 0.45,
    items: [
      { emoji: "👥", key: "itemOne" },
      { emoji: "🏛️", key: "itemTwo" },
      { emoji: "🎯", key: "itemThree" },
    ],
  },
];

function ServiceCard({
  borderColor,
  bgColor,
  shadowColor,
  iconBgColor,
  iconPosition,
  titleColor,
  gridAlign,
  emoji,
  delay,
  serviceKey,
  items,
  t,
}) {
  return (
    <motion.div
      {...createFlipInVariant(delay)}
      className={`group relative flex flex-col items-center border-4 p-5 ${borderColor} rounded-3xl ${bgColor} h-[460px] w-[350px] ${shadowColor} transition-all duration-500 hover:-translate-y-2 ${gridAlign}`}
    >
      <div
        className={`absolute flex ${iconPosition} ${iconBgColor} p-3 rounded-xl shadow-lg items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
      >
        <span className="text-3xl">{emoji}</span>
      </div>
      <span
        className={`text-3xl block text-left font-impact m-5 ${titleColor}`}
      >
        {t(`studentRetentionManagement.services.${serviceKey}.title`)}
      </span>
      <p className="text-base mb-3 text-blue-base text-justify">
        {t(`studentRetentionManagement.services.${serviceKey}.description`)}
      </p>
      <ul>
        {items.map(({ emoji: itemEmoji, key }) => (
          <li
            key={key}
            className="group/emoji bg-white p-2 m-2 text-sm font-bold text-blue-base rounded-lg w-[260px]"
          >
            <span className="text-lg mr-2 inline-block transition-transform duration-300 group-hover/emoji:scale-125">
              {itemEmoji}
            </span>
            {t(`studentRetentionManagement.services.${serviceKey}.${key}`)}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

ServiceCard.propTypes = {
  borderColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  shadowColor: PropTypes.string.isRequired,
  iconBgColor: PropTypes.string.isRequired,
  iconPosition: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  gridAlign: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  serviceKey: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      emoji: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }),
  ).isRequired,
  t: PropTypes.func.isRequired,
};

function StudentRetentionService() {
  const { t } = useTranslation();

  return (
    <>
      <section className="text-center mt-56 md:mt-10">
        {" "}
        <div className="flex items-center justify-center my-6">
          <span className="block w-16 h-[3px] bg-primary-yellow mr-4"></span>
          <h2 className="text-base md:text-lg text-blue-base font-impact">
            {t(
              "studentRetentionManagement.studentRetentionService.ourServices",
            )}
          </h2>
          <span className="block w-16 h-[3px] bg-primary-yellow ml-4"></span>
        </div>
        <motion.div {...slideFromLeft}>
          <h4 className="text-3xl md:text-5xl text-blue-base font-impact">
            {t("studentRetentionManagement.studentRetentionService.title")}{" "}
            <br />
            <span className="text-primary-yellow">
              {t(
                "studentRetentionManagement.studentRetentionService.titleSpan",
              )}
            </span>
          </h4>
        </motion.div>
        <p className="mt-3 text-lg text-dark-blue">
          {t("studentRetentionManagement.studentRetentionService.description")}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-8 mt-16 place-items-center">
        {SERVICES_DATA.slice(0, 1).map((card) => (
          <ServiceCard key={card.key} {...card} serviceKey={card.key} t={t} />
        ))}

        <div className="relative hidden xl:block row-span-2 inset-0 m-auto bg-[#DCEBF9] rounded-full h-[400px] w-[400px] z-[2]">
          <div id="lines" className="relative w-[400px] h-[400px]">
            <div className="absolute top-5 right-0 border-t-4 border-dashed border-[#D3C3E3] w-[200px] -rotate-45"></div>
            <div className="absolute top-5 left-0 border-t-4 border-dashed border-[#ADD6FF] w-[200px] rotate-45"></div>
            <div className="absolute bottom-5 left-0 border-t-4 border-dashed border-[#81F0E7] w-[200px] -rotate-45"></div>
            <div className="absolute bottom-5 right-0 border-t-4 border-dashed border-[#FFDE8A] w-[200px] rotate-45"></div>
          </div>

          <motion.div
            {...floatSnake(0)}
            className="absolute flex flex-col  rounded-full inset-0 m-auto items-center justify-center border-[6px] bg-white border-primary-yellow h-[330px] w-[330px] z-[2]"
          >
            {" "}
            <span className="text-6xl align-middle ">🎓</span>
            <p className="text-4xl text-dark-blue font-impact text-center">
              {t(
                "studentRetentionManagement.studentRetentionService.centralTitle",
              )}{" "}
              <span className="text-primary-yellow">
                <br />{" "}
                {t(
                  "studentRetentionManagement.studentRetentionService.centralTitleSpan",
                )}{" "}
              </span>
            </p>
            <p className="text-lg text-center p-2">
              {t(
                "studentRetentionManagement.studentRetentionService.centralParagraph",
              )}
            </p>
          </motion.div>
        </div>

        {SERVICES_DATA.slice(1).map((card) => (
          <ServiceCard key={card.key} {...card} serviceKey={card.key} t={t} />
        ))}
      </section>

      <motion.div {...expandableTransition()}>
        <section className="flex justify-center items-center mt-10 m-1 mb-10 md:m-10 md:mt-24 px-3">
          <div className="relative p-[5px] rounded-3xl bg-gradient-to-r from-dark-blue via-primary-purple to-primary-purple w-full max-w-[1020px] h-auto shadow-[0_30px_70px_rgba(0,0,0,0.3)]">
            <section className="bg-white text-center p-8 md:p-10 w-full h-full rounded-3xl flex flex-col justify-center">
              <h5 className="text-4xl md:text-5xl mt-6 font-impact text-primary-yellow px-3 leading-tight">
                {t("studentRetentionManagement.studentRetentionCard.title")}
                <span className="text-dark-blue">
                  {" "}
                  {t("studentRetentionManagement.studentRetentionCard.span")}
                </span>
              </h5>
              <p className="text-blue-base text-base md:text-xl mt-4 px-3">
                {t(
                  "studentRetentionManagement.studentRetentionCard.description",
                )}{" "}
                <strong className="text-[#28A499]">
                  <br />{" "}
                  {t(
                    "studentRetentionManagement.studentRetentionCard.strong",
                  )}{" "}
                </strong>
              </p>
              <div className="flex justify-center">
                <LocalizedLink
                  className="group px-16 py-6 relative overflow-hidden w-full max-w-[310px] mt-8 text-white text-xl md:text-2xl font-impact rounded-full shadow-xl bg-gradient-to-r from-dark-blue to-primary-purple  transform hover:scale-105 transition-all duration-500"
                  routeKey="contact"
                >
                  <span className="relative">
                    {" "}
                    {t(
                      "studentRetentionManagement.studentRetentionCard.btnStartNow",
                    )}
                  </span>
                  <div className="absolute inset-0 bg-[#ffffff3a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </LocalizedLink>
              </div>
            </section>
          </div>
        </section>
      </motion.div>
    </>
  );
}
export default StudentRetentionService;
