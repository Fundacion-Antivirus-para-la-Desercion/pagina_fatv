import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { TESTIMONIAL_GISELA_PATINO as GiselaPatino } from "../../../assets/cloudinaryImages";

function StarRating() {
  return (
    <div className="flex gap-0.5 text-brand-teal-300">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-base">★</span>
      ))}
    </div>
  );
}

function TestimonialsAtvConnect() {
  const { t } = useTranslation();

  const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const testimonials = [
    {
      id: "testimony-one",
      key: "small",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.description",
      ),
      initial: "E",
      photo: GiselaPatino,
      role: t("atvConnect.testimonialsAtvConnect.testimony_one.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.university",
      ),
    },
    {
      id: "testimony-two",
      key: "small",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_two.description",
      ),
      initial: "T",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_two.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_two.university",
      ),
    },
    {
      id: "testimony-three",
      key: "small",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_three.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_three.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_three.university",
      ),
    },
    {
      id: "testimony-four",
      key: "small",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_four.description",
      ),
      initial: "E",
      photo: GiselaPatino,
      role: t("atvConnect.testimonialsAtvConnect.testimony_four.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_four.university",
      ),
    },
    {
      id: "testimony-five",
      key: "small",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_five.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_five.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_five.university",
      ),
    },
    {
      id: "testimony-six",
      key: "small",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_six.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_six.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_six.university",
      ),
    },
    {
      id: "testimony-seven",
      key: "small",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_seven.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_seven.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_seven.university",
      ),
    },
    {
      id: "testimony-eight",
      key: "large",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_eight.description",
      ),
      initial: "E",
      photo: GiselaPatino,
      role: t("atvConnect.testimonialsAtvConnect.testimony_eight.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_eight.university",
      ),
    },
  ];

  return (
    <section className="p-5 md:p-10">
      <div className="text-center mb-10">
        <span className="text-lg text-primary-purple font-impact">
          {t("atvConnect.testimonialsAtvConnect.span")}
        </span>
        <h1 className="text-4xl md:text-5xl text-dark-blue font-impact">
          {t("atvConnect.testimonialsAtvConnect.title")}
        </h1>
      </div>

      <div
        id="newtestimonials"
        className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 mt-10 items-stretch"
      >
        {/* Columna izquierda — testimonio largo */}
        <div className="lg:w-3/5 flex flex-col">
          {testimonials
            .filter((t) => t.key === "large")
            .map((testimonial) => (
              <motion.div
                key={testimonial.id}
                {...slideFromTop}
                className="h-full"
              >
                <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl p-6 min-h-[400px] flex flex-col h-full border-4 border-brand-teal-300 hover:translate-y-[-8px] transition-transform duration-300">
                  {/* Decorative line top-left */}
                  <div className="absolute top-5 left-6 w-10 h-[3px] bg-brand-teal-300 rounded-full" />
                  {/* Decorative circle top-right */}
                  <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-brand-teal-50 translate-x-10 -translate-y-10" />

                  <div className="bg-brand-teal-50 rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center mb-5 mt-6">
                    <BiSolidQuoteAltLeft className="text-brand-teal-300 size-14 text-3xl" />
                  </div>
                  <p className="text-blue-base text-base leading-relaxed flex-1">
                    {testimonial.testimony}
                  </p>

                  <div className="border-t border-gray-100 my-4" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-brand-teal-300 flex items-center justify-center text-white font-semibold text-lg border-2 border-white flex-shrink-0">
                          {testimonial.photo ? (
                            <img
                              src={testimonial.photo}
                              alt={testimonial.role}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            testimonial.initial
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-blue-base font-semibold text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-blue-base opacity-60 text-sm">
                          {testimonial.university}
                        </p>
                      </div>
                    </div>
                    <StarRating />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Columna derecha — 4 tarjetas pequeñas en grilla 2×2 */}
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials
            .filter((t) => t.key === "small")
            .slice(0, 4)
            .map((testimonial) => (
              <motion.div
                key={testimonial.id}
                {...slideFromTop}
                className="h-full"
              >
                <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl p-6 flex flex-col h-full">
                  {/* Decorative line top-left */}
                  <div className="absolute top-5 left-6 w-8 h-[3px] bg-brand-teal-300 rounded-full" />
                  {/* Decorative circle top-right */}
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-brand-teal-50 translate-x-7 -translate-y-7" />

                  <div className="flex items-center gap-4 mb-5 mt-5">
                    <div className="relative flex items-center flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary-purple flex items-center justify-center">
                        <BiSolidQuoteAltLeft className="text-white text-3xl" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-blue-base font-semibold text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-blue-base opacity-60 text-sm">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                  <p className="text-blue-base text-base leading-relaxed flex-1">
                    {testimonial.testimony}
                  </p>

                  <div className="border-t border-gray-100 mt-4 pt-3 flex justify-end">
                    <StarRating />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsAtvConnect;
