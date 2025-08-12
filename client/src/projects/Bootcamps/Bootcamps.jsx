import React, { useState } from "react";
import BannerView from "../../components/Banner-views/BannerView";
import nodo from "../../../public/projects/Bootcamps/ne.webp";
import codigoc13 from "../../../public/projects/Bootcamps/codigoc13.jpg";

function Bootcamps() {
  const [img, setImg] = useState([
    {
      name: "Nodo EAFIT",
      img: nodo,
      parrafo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam similique maxime, deleniti nesciunt nostrum consectetur iusto cumque quos rem nam unde ipsa quidem voluptatum cum, placeat quibusdam. Modi, labore.",
    },
    {
      name: "Codigo C13",
      img: codigoc13,
      parrafo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam similique maxime, deleniti nesciunt nostrum consectetur iusto cumque quos rem nam unde ipsa quidem voluptatum cum, placeat quibusdam. Modi, labore.",
    },
  ]);

  return (
    <div className="lg:pt-[145px]">
      <BannerView title={"BOOTCAMPS"} />
      <div className="m-8 sm:m-20">
        {img.map((item, key) => (
          <div key={key} className="mb-10">
            <h1 className="text-yellow-500 text-2xl font-bold mb-4">
              {item.name}
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <img
                className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 lg:mb-0 lg:mr-6"
                src={item.img}
                alt={item.name}
              />
              <p className="text-blue-600 text-lg lg:w-1/2">{item.parrafo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bootcamps;
