import React, { useRef } from "react";
import JaviSonrie from "../../../src/assets/images/views/javi/javi-senala.webp";
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
        className="relative grid grid-cols-1 md:grid-cols-[20%,80%] mb-10 m-2"
      >
        <div className="hidden md:block">
          <img
            className="hidden md:block md:h-[550px] ml-2 bottom-0 absolute z-10"
            src={JaviSonrie}
            alt="Javi Sonrie"
          />
        </div>
        <section className="grid grid-cols-1 relative md:grid-cols-2 max-w-[1000px] mx-auto items-center">
          <motion.div
            ref={puzzleOneRef}
            variants={slideFromLeft}
            initial="hidden"
            animate={isPuzzleOneInView ? "visible" : "hidden"}
          >
            <div className="w-full puzzlePieceOne">
              <div className="p-10 m-2 relative z-10">
                <p>
                  <small className="text-[#222D56] text-base leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.founders.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact uppercase text-[#222D56] text-4xl leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.founders.title")}
                </h5>

                <div className="lg:columns-2 gap-[15px] break-inside-avoid">
                  <p className="w-full relative block text-[#222D56] text-left mb-[15px] text-base break-inside-avoid">
                    Carlos
                    <strong className="text-inherit block">
                      Vásquez Restrepo
                    </strong>
                  </p>
                  <p className="w-full relative block text-[#222D56] text-left mb-[15px] text-base break-inside-avoid">
                    Paulina
                    <strong className="text-inherit block">Tamayo Mejía</strong>
                  </p>
                  <p className="w-full relative block text-[#222D56] text-left mb-[15px] text-base break-inside-avoid">
                    Víctor Manuel
                    <strong className="text-inherit block">
                      Valencia Martínez
                    </strong>
                  </p>
                  <p className="w-full relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
                    Luis Fernando
                    <strong className="text-inherit block">
                      González Urán
                    </strong>
                  </p>
                  <p className="w-full relative block text-[#222D56] text-left mb-[15px] text-base break-inside-avoid">
                    Andrea
                    <strong className="text-inherit block">
                      Jaramillo Ramírez
                    </strong>
                  </p>
                  <p className="w-full relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
                    Laura
                    <strong className="text-inherit block">
                      Calle Escobar
                    </strong>
                  </p>
                  <p className="w-full relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
                    León Felipe
                    <strong className="text-inherit block">
                      Hernández López
                    </strong>
                  </p>
                  <p className="w-full z-10 relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
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
              <div className="p-10 m-2">
                <p>
                  <small className="text-white text-base leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.board_directors.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact uppercase text-white text-4xl leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.board_directors.title")}
                </h5>

                <div className="lg:columns-2 gap-[15px] break-inside-avoid mt-3">
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                    Carlos Vásquez Restrepo
                    <strong className="text-inherit block">
                      {t(
                        "foundation.foundationATV.board_directors.positions.president"
                      )}
                    </strong>
                  </p>
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                    Luis Fernando Sánchez Hurtado
                    <strong className="text-inherit block">
                      {t(
                        "foundation.foundationATV.board_directors.positions.vicepresident"
                      )}
                    </strong>
                  </p>
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                    David Santiago Botero Rodríguez
                    <strong className="text-inherit block">
                      {t(
                        "foundation.foundationATV.board_directors.positions.second_representative"
                      )}
                    </strong>
                  </p>
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                    Víctor Manuel Valencia Martínez
                    <strong className="text-inherit block">
                      {t(
                        "foundation.foundationATV.board_directors.positions.subdirector"
                      )}
                    </strong>
                  </p>
                  <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
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
                <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
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
                  <small className="text-[#222d56] text-base leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.accountant.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact text-[#222d56] uppercase text-4xl leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.accountant.title")}
                </h5>
                <p className="w-full relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
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
