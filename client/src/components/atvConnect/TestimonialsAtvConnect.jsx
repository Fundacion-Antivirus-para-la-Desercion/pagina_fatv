import { LuQuote } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

function TestimonialsAtvConnect() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-[#F6F6F6] p-14">
        <div className="text-center mb-10">
          <span className="text-lg text-primary-purple font-impact">
            {t("atvConnect.testimonialsAtvConnect.span")}
          </span>
          <h1 className="text-4xl md:text-5xl text-dark-blue font-impact">
            {t("atvConnect.testimonialsAtvConnect.title")}
          </h1>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#94a3b8",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
        >
          <SwiperSlide>
            {" "}
            <section className="bg-white p-5 m-5 rounded-2xl mt-10">
              {" "}
              <LuQuote className="text-5xl text-primary-yellow opacity-70" />
              <p className="m-5 text-lg text-blue-base font-semibold">
                {" "}
                {t(
                  "atvConnect.testimonialsAtvConnect.testimony_one.description",
                )}
              </p>
              <div className="flex flex-col m-5">
                <p className="flex items-center justify-center bg-dark-blue rounded-full w-12 h-12 text-white font-semibold">
                  M
                </p>
                <p className="text-blue-base font-semibold">María F.</p>
                <p className="text-blue-base">
                  {t(
                    "atvConnect.testimonialsAtvConnect.testimony_one.profession",
                  )}
                </p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <section className="bg-white p-5 m-5 rounded-2xl  mt-10">
              {" "}
              <LuQuote className="text-5xl text-primary-yellow opacity-70" />
              <p className="m-5 text-lg text-blue-base font-semibold">
                {t(
                  "atvConnect.testimonialsAtvConnect.testimony_two.description",
                )}
              </p>
              <div className="flex flex-col m-5">
                <p className="flex items-center justify-center bg-dark-blue rounded-full w-12 h-12 text-white font-semibold">
                  M
                </p>
                <p className="text-blue-base font-semibold">Carlos A.</p>
                <p className="text-blue-base">
                  {" "}
                  {t(
                    "atvConnect.testimonialsAtvConnect.testimony_two.profession",
                  )}
                </p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <section className="bg-white p-5 m-5 rounded-2xl  mt-10">
              {" "}
              <LuQuote className="text-5xl text-primary-yellow opacity-70" />
              <p className="m-5 text-lg text-blue-base font-semibold">
                {t(
                  "atvConnect.testimonialsAtvConnect.testimony_three.description",
                )}
              </p>
              <div className="flex flex-col m-5">
                <p className="flex items-center justify-center bg-dark-blue rounded-full w-12 h-12 text-white font-semibold">
                  M
                </p>
                <p className="text-blue-base font-semibold">Laura S.</p>
                <p className="text-blue-base">
                  {" "}
                  {t(
                    "atvConnect.testimonialsAtvConnect.testimony_three.profession",
                  )}{" "}
                </p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <section className="bg-white p-5 m-5 rounded-2xl  mt-10">
              {" "}
              <LuQuote className="text-5xl text-primary-yellow opacity-70" />
              <p className="m-5 text-lg text-blue-base font-semibold">
                {" "}
                {t(
                  "atvConnect.testimonialsAtvConnect.testimony_one.description",
                )}
              </p>
              <div className="flex flex-col m-5">
                <p className="flex items-center justify-center bg-dark-blue rounded-full w-12 h-12 text-white font-semibold">
                  M
                </p>
                <p className="text-blue-base font-semibold">María F.</p>
                <p className="text-blue-base">
                  {t(
                    "atvConnect.testimonialsAtvConnect.testimony_one.profession",
                  )}
                </p>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default TestimonialsAtvConnect;
