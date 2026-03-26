function ProcessStepsSection() {
  return (
  <section className="p-5 md:p-10 grid grid-cols-1 lg:grid-cols-[5fr_5fr_5fr] gap-10 mb-10">
        <div className="cursor-pointer border-4 border-[#7E96CB] rounded-xl transform transition duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
          <img
            src={isEnglish ? EnAutoconocimiento : Autoconocimiento}
            alt="Autoconocimiento"
            title="Ampliar imagen"
            onClick={() =>
              openImageModal(isEnglish ? EnAutoconocimiento : Autoconocimiento)
            }
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="cursor-pointer border-4 border-primary-yellow rounded-xl transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
          <img
            src={isEnglish ? EnMundoFormativo : MundoFormativo}
            alt="Mundo Formativo"
            title="Ampliar imagen"
            onClick={() =>
              openImageModal(isEnglish ? EnMundoFormativo : MundoFormativo)
            }
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="cursor-pointer border-4 border-dark-blue rounded-xl transform transition duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-2xl">
          <img
            src={isEnglish ? EnMundoLaboral : MundoLaboral}
            alt="Mundo Laboral"
            title="Ampliar imagen"
            onClick={() =>
              openImageModal(isEnglish ? EnMundoLaboral : MundoLaboral)
            }
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>
  );
}
export default ProcessStepsSection;
