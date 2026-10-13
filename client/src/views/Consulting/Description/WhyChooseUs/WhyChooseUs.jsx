import { FaMedal, FaChartLine, FaGraduationCap } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdRocketLaunch } from "react-icons/md";
import { JAVI_ESQUINA_IMG as JaviEsquina } from "../../../../assets/cloudinaryImages";
import { useTranslation } from "react-i18next";

const cards = [
  {
    icon: <FaMedal />,
    titleKey: "consultorias.whyChooseUs.cards.methodology_title",
    descKey: "consultorias.whyChooseUs.cards.methodology_description",
    iconBg: "bg-primary-purple",
    accentBg: "bg-primary-purple",
    underlineBg: "bg-primary-purple",
  },
  {
    icon: <FaChartLine />,
    titleKey: "consultorias.whyChooseUs.cards.focus_title",
    descKey: "consultorias.whyChooseUs.cards.focus_description",
    iconBg: "bg-brand-teal-300",
    accentBg: "bg-brand-teal-300",
    underlineBg: "bg-brand-teal-300",
  },
  {
    icon: <GiThreeFriends />,
    titleKey: "consultorias.whyChooseUs.cards.accompaniment_title",
    descKey: "consultorias.whyChooseUs.cards.accompaniment_description",
    iconBg: "bg-brand-blue-200",
    accentBg: "bg-brand-blue-200",
    underlineBg: "bg-brand-blue-200",
  },
  {
    icon: <FaGraduationCap />,
    titleKey: "consultorias.whyChooseUs.cards.experience_title",
    descKey: "consultorias.whyChooseUs.cards.experience_description",
    iconBg: "bg-primary-purple",
    accentBg: "bg-primary-purple",
    underlineBg: "bg-primary-purple",
  },
  {
    icon: <HiOutlineLightBulb />,
    titleKey: "consultorias.whyChooseUs.cards.solutions_title",
    descKey: "consultorias.whyChooseUs.cards.solutions_description",
    iconBg: "bg-brand-teal-300",
    accentBg: "bg-brand-teal-300",
    underlineBg: "bg-brand-teal-300",
  },
  {
    icon: <MdRocketLaunch />,
    titleKey: "consultorias.whyChooseUs.cards.innovation_title",
    descKey: "consultorias.whyChooseUs.cards.innovation_description",
    iconBg: "bg-brand-blue-200",
    accentBg: "bg-brand-blue-200",
    underlineBg: "bg-brand-blue-200",
  },
];

function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="relative mt-10 md:mt-20 mx-auto">
      <div className="hidden xl:block absolute right-0 -top-16 pointer-events-none">
        <img
          src={JaviEsquina}
          className="max-h-[320px] lg:max-h-[400px]"
          alt="Javi Feliz"
        />
      </div>
      <div className="max-w-screen-2xl mx-auto mb-10 md:mb-20">
        <section>
          <div className="relative flex items-center justify-center px-4">
            {/* Text content — centered, leaves room for Javi on the right */}
            <div className="text-center max-w-4xl mb-5">
              <h2 className="text-5xl md:text-5xl text-blue-base font-impact leading-none">
                {t("consultorias.whyChooseUs.title")}
              </h2>
              <span className="text-primary-yellow text-5xl font-impact">
                {t("consultorias.whyChooseUs.title_span")}
              </span>

              <p className="text-blue-base text-base md:text-lg">
                {t("consultorias.whyChooseUs.description")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5 md:px-10 pt-8 pb-5 md:pb-10 gap-6 md:gap-8">
            {cards.map(
              ({ icon, titleKey, descKey, iconBg, accentBg, underlineBg }) => (
                <div
                  key={titleKey}
                  className="relative bg-white min-h-[230px] w-full p-6 shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out"
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-full ${iconBg} shrink-0`}
                    >
                      <span className="text-3xl text-white">{icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-extrabold text-dark-blue leading-tight">
                        {t(titleKey)}
                      </h3>
                      <div
                        className={`w-12 h-1 rounded-full mt-1 ${underlineBg}`}
                      />
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-blue-base mt-3 pr-4 leading-relaxed">
                    {t(descKey)}
                  </p>
                  <div
                    className={`absolute bottom-0 right-0 w-16 h-16 rounded-tl-full ${accentBg} opacity-80`}
                  />
                </div>
              ),
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
export default WhyChooseUs;
