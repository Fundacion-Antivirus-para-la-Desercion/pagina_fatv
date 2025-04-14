import {useState, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay, Thumbs} from "swiper/modules";
import {Link} from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./Carousel.css";

import banner1 from "../assets/Banner/banner1c.jpeg";
import banner3 from "../assets/Banner/banner3c.jpeg";
import banner5 from "../assets/Banner/banner5c.jpeg";
import banner6 from "../assets/Banner/banner6c.jpeg";
import banner7 from "../assets/Banner/banner7c.jpeg";
import banner8 from "../assets/Banner/banner8c.jpeg";

function Carousel() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const mainSwiperRef = useRef(null);
    const thumbsSwiperRef = useRef(null);

    const slides = [
        {
            image: banner1,
            title: "FOMENTAMOS LA PERMANENCIA ESTUDIANTIL",
            description: "A través del apoyo sociopedagógico, las comunicaciones y la analítica de datos."
        },
        {
            image: banner3,
            title: "FOMENTAMOS LA PERMANENCIA ESTUDIANTIL",
            description: "A través del apoyo sociopedagógico, las comunicaciones y la analítica de datos."
        },
        {
            image: banner5,
            title: "FOMENTAMOS LA PERMANENCIA ESTUDIANTIL",
            description: "A través del apoyo sociopedagógico, las comunicaciones y la analítica de datos."
        },
        {
            image: banner6,
            title: "FOMENTAMOS LA PERMANENCIA ESTUDIANTIL",
            description: "A través del apoyo sociopedagógico, las comunicaciones y la analítica de datos."
        },
        {
            image: banner7,
            title: "FOMENTAMOS LA PERMANENCIA ESTUDIANTIL",
            description: "A través del apoyo sociopedagógico, las comunicaciones y la analítica de datos."
        },
        {
            image: banner8,
            title: "FOMENTAMOS LA PERMANENCIA ESTUDIANTIL",
            description: "A través del apoyo sociopedagógico, las comunicaciones y la analítica de datos."
        }
    ];

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <section className="relative overflow-hidden">
            <Swiper
                ref={mainSwiperRef}
                spaceBetween={30}
                speed={3000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                loop={true}
                modules={[Autoplay, Navigation, Thumbs]}
                className="mySwiper"
                thumbs={{swiper: thumbsSwiper}}
                onSlideChange={handleSlideChange}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={`main-${index}`}>
                        <section className="relative lg:grid grid-cols-[40%_60%] bg-[#222D56]">
                            <div className="relative z-50 carousel-text flex items-center p-5">
                                <section>
                                    <h1 className="mb-4 text-5xl leading-normal">{slide.title}</h1>
                                    <p className="text-xl w-3/4 mb-2">
                                        {slide.description}
                                    </p>
                                    <Link to="/ContactUs"
                                          className="px-4 py-2 bg-[#fff] text-[#222D56] border-2 font-bold text-lg mr-5">
                                        CONTÁCTENOS
                                    </Link>
                                    <Link to='/DonationPay'
                                          className="px-4 py-2 bg-[#222D56] text-white border-2 font-bold text-lg mr-5">
                                        Donar
                                    </Link>
                                </section>
                            </div>
                            <div>
                                <img
                                    className="h-[90vh] object-cover object-[50%_33%] w-full"
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex absolute bottom-5 left-[11%] w-full z-10">
                <div
                    className="swiper-button-prev-custom mx-2 cursor-pointer text-white text-2xl bg-[#f8b732] rounded-full py-2 px-3">
                    &lt;
                </div>
                <div
                    className="swiper-button-next-custom mx-2 cursor-pointer text-white text-2xl bg-[#f8b732] rounded-full py-2 px-3">
                    &gt;
                </div>
            </div>

            <div className="absolute bottom-5 right-[2%] z-10 w-[35%]">
                <Swiper
                    ref={thumbsSwiperRef}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
                    className="thumbnails-swiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide
                            key={`thumb-${index}`}
                            className={`cursor-pointer transition-opacity duration-300 ${activeIndex === index ? 'opacity-100 border-2 border-[#f8b732]' : 'opacity-60'}`}
                            onClick={() => {
                                if (mainSwiperRef.current) {
                                    mainSwiperRef.current.swiper.slideTo(index);
                                }
                            }}
                        >
                            <img
                                src={slide.image}
                                alt={`Thumbnail ${index + 1}`}
                                className="h-20 w-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Carousel;