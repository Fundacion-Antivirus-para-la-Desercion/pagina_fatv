import styles from "./Testimonials.module.css";
import Testimonio1 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-05.jpg";

function Testimonials() {
  return (
    <section className="px-6 py-10">
      <h1 className="text-5xl text-center text-[#222D56] font-extrabold mb-10 max-md:text-3xl">
        TESTIMONIOS
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
        <img
          className={`rounded-full min-h-96 w-96 object-cover shadow-xl border-[12px] border-[#F6A623] ${styles.borderImage}`}
          src={Testimonio1}
          alt="Foto de testimonio"
        />

        <div className=" text-lg space-y-4 text-justify max-w-xl">
          <p>
            El acompañamiento me pareció muy agradable, mi mayor aprendizaje fue
            en la toma decisiones, entender mejor mis emociones, pensar antes de
            actuar. Ustedes lograron en mí que yo fuera más seguro como de las
            decisiones que quiera tomar en mi vida. Lo que más me gustó fueron
            las charlas, la metodología y la temática, eso nos iluminó.
          </p>
          <p className="font-semibold text-right text-[#F6A623]">
            – Matías González
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
