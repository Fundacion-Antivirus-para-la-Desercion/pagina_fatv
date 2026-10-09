import { RiFocus2Line } from "react-icons/ri";
import {
  FaLightbulb,
  FaStar,
  FaGraduationCap,
  FaUserFriends,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const cards = [
  {
    icon: <FaStar />,
    titleKey: "consultorias.whyChooseUs.cards.methodology_title",
    descKey: "consultorias.whyChooseUs.cards.methodology_description",
  },
  {
    icon: <RiFocus2Line />,
    titleKey: "consultorias.whyChooseUs.cards.focus_title",
    descKey: "consultorias.whyChooseUs.cards.focus_description",
  },
  {
    icon: <FaUserFriends />,
    titleKey: "consultorias.whyChooseUs.cards.accompaniment_title",
    descKey: "consultorias.whyChooseUs.cards.accompaniment_description",
  },
  {
    icon: <FaGraduationCap />,
    titleKey: "consultorias.whyChooseUs.cards.experience_title",
    descKey: "consultorias.whyChooseUs.cards.experience_description",
  },
  {
    icon: <BsStars />,
    titleKey: "consultorias.whyChooseUs.cards.solutions_title",
    descKey: "consultorias.whyChooseUs.cards.solutions_description",
  },
  {
    icon: <FaLightbulb />,
    titleKey: "consultorias.whyChooseUs.cards.innovation_title",
    descKey: "consultorias.whyChooseUs.cards.innovation_description",
  },
];

function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="mt-10 md:mt-20 max-w-screen-2xl mx-auto">
      <div className="text-center">
        <div>
          <h2 className="text-4xl md:text-5xl text-blue-base font-impact m-5">
            {t("consultorias.whyChooseUs.title")}
            <br />
            <span className="text-primary-yellow">
              {t("consultorias.whyChooseUs.titlle_span")}
            </span>
          </h2>
        </div>
        <p className="text-blue-base text-base md:text-lg mt-10">
          {t("consultorias.whyChooseUs.description")}
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-2 p-5 md:p-10 gap-8 md:gap-10">
        {cards.map(({ icon, titleKey, descKey }) => (
          <div
            key={titleKey}
            className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:border-primary-yellow border-2 hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div className="flex items-start space-x-4">
              <div className="flex justify-center w-14 h-14 rounded-full bg-white">
                <span className="text-3xl text-primary-yellow">{icon}</span>
              </div>
              <h2 className="text-lg md:text-xl font-extrabold text-blue-base mt-1">
                {t(titleKey)}
              </h2>
            </div>
            <p className="text-base md:text-lg p-5 text-blue-base text-justify ">
              {t(descKey)}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
export default WhyChooseUs;
