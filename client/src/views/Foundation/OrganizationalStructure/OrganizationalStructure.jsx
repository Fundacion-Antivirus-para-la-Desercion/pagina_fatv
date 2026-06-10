import React, { useRef } from "react";
import JaviSonrie from "../../../../src/assets/images/views/javi/javi-senala.webp";
//import style from "./OrganizationalStructure.css";
import  "./OrganizationalStructure.css";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

function OrganizationalStructure() {
  const { t } = useTranslation();
  
  // Create refs for each puzzle piece
  const sectionRef = useRef(null);
  const puzzleOneRef = useRef(null);
  const puzzleTwoRef = useRef(null);
  const puzzleThreeRef = useRef(null);
  const puzzleFourRef = useRef(null);
  
  // Set up inView detection for each section
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isPuzzleOneInView = useInView(puzzleOneRef, { once: true, amount: 0.5 });
  const isPuzzleTwoInView = useInView(puzzleTwoRef, { once: true, amount: 0.5 });
  const isPuzzleThreeInView = useInView(puzzleThreeRef, { once: true, amount: 0.5 });
  const isPuzzleFourInView = useInView(puzzleFourRef, { once: true, amount: 0.5 });
  
  // Animation variants
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } // Reduced from 5s to 0.8s for better UX
    }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } // Reduced from 5s to 0.8s for better UX
    }
  };
  
    const slideFromDown = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } // Reduced from 5s to 0.8s for better UX
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <motion.section
        ref={sectionRef}
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative grid grid-cols-1 lg:grid-cols-[30%_70%] mb-10 m-2 gap-1 container mx-auto items-center"
      >
        <div className="hidden md:block">
          <img
            className="hidden lg:block md:h-[550px] lg:h-[600px] ml-2 bottom-0 absolute z-10"
            src={JaviSonrie}
            alt="Javi Sonrie"
          />
        </div>
        <section className="grid grid-cols-1 relative lg:grid-cols-2  max-w-[1000px] mx-auto items-center mb-10">
          <motion.div
            ref={puzzleOneRef}
            variants={slideFromLeft}
            initial="hidden"
            animate={isPuzzleOneInView ? "visible" : "hidden"}
          >
            <div className="w-full puzzlePieceOne">
              <div className="p-10 lg:m-2 relative z-10">
                <p>
                  <small className="text-dark-blue text-base leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.founders.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact uppercase text-dark-blue text-4xl leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.founders.title")}
                </h5>

                <div className="lg:columns-2 gap-5 ">
                  <p className="w-full relative block text-dark-blue text-left mb-[15px] text-base ">
                    Carlos
                    <strong className="text-inherit block">
                      Vásquez Restrepo
                    </strong>
                  </p>
                  <p className="w-full relative block text-dark-blue text-left mb-[15px] text-base ">
                    Paulina
                    <strong className="text-inherit block">Tamayo Mejía</strong>
                  </p>
                  <p className="w-full relative block text-dark-blue text-left mb-5 text-base ">
                    Víctor Manuel
                    <strong className="text-inherit block">
                      Valencia Martínez
                    </strong>
                  </p>
                  <p className="w-full relative block text-dark-blue text-left mb-[15px] text-base">
                    Luis Fernando
                    <strong className="text-inherit block">
                      González Urán
                    </strong>
                  </p>
                  <p className="w-full relative block text-dark-blue text-left mb-[15px] text-base ">
                    Andrea
                    <strong className="text-inherit block">
                      Jaramillo Ramírez
                    </strong>
                  </p>
                  <p className="w-full relative block text-dark-blue text-left mb-[15px] text-base ">
                    Laura
                    <strong className="text-inherit block">
                      Calle Escobar
                    </strong>
                  </p>
                  <p className="w-full relative block text-dark-blue text-left mb-[15px] text-base ">
                    León Felipe
                    <strong className="text-inherit block">
                      Hernández López
                    </strong>
                  </p>
                  <p className="w-full z-10 relative block text-dark-blue text-left mb-[15px] text-base ">
                    Aida
                    <strong className="text-inherit block">
                      Orduz Quijano
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={puzzleTwoRef}
            variants={slideFromRight}
            initial="hidden"
            animate={isPuzzleTwoInView ? "visible" : "hidden"}
          >
            <div className="w-full puzzlePieceTwo">
              <div className="p-10 lg:m-2">
                <p>
                  <small className="text-white text-base leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.board_directors.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact uppercase text-white text-4xl leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.board_directors.title")}
                </h5>

                <div className="lg:columns-2 gap-5  mt-3">
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm ">
                    Carlos Vásquez Restrepo
                    <strong className="text-inherit block">
                      {t(
                        "foundation.foundationATV.board_directors.positions.president"
                      )}
                    </strong>
                  </p>
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm ">
                    Luis Fernando Sánchez Hurtado
                    <strong className="text-inherit block">
                      {t(
                        "foundation.foundationATV.board_directors.positions.vicepresident"
                      )}
                    </strong>
                  </p>
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm ">
                    David Santiago Botero Rodríguez
                    <strong className="text-inherit block">
                      {t(
                        "foundation.foundationATV.board_directors.positions.second_representative"
                      )}
                    </strong>
                  </p>
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm ">
                    Víctor Manuel Valencia Martínez
                    <strong className="text-inherit block">
                      {t(
                        "foundation.foundationATV.board_directors.positions.subdirector"
                      )}
                    </strong>
                  </p>
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm ">
                    Luis Fernando
                    <strong className="text-inherit block">
                      González Urán
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={puzzleThreeRef}
            variants={slideFromDown}
            initial="hidden"
            animate={isPuzzleThreeInView ? "visible" : "hidden"}
          >
            <div className="w-full puzzlePieceThree">
              <div className="p-10">
                <p>
                  <small className="text-white text-base leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.fiscal_reviewer.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact text-white uppercase text-4xl leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.fiscal_reviewer.title")}
                </h5>
                <p className="w-full relative block text-white text-left mb-[15px] text-sm ">
                  Orlando
                  <strong> Gaviria Flórez</strong>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={puzzleFourRef}
            variants={slideFromDown}
            initial="hidden"
            animate={isPuzzleFourInView ? "visible" : "hidden"}
          >
            <div className="w-full puzzlePieceFour">
              <div className="p-10 ml-5">
                <p>
                  <small className="text-dark-blue text-base leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.accountant.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact text-dark-blue uppercase text-4xl leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.accountant.title")}
                </h5>
                <p className="w-full relative block text-dark-blue text-left mb-[15px] text-base ">
                  María Verónica
                  <strong className="text-inherit block ">
                    Ortiz Rodríguez
                  </strong>
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.section>
    </>
  );
}
export default OrganizationalStructure;
