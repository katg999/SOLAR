import React from "react";
import IrrigationImg from "../assets/images/Irrigation.png";
import RainWaterImg from "../assets/images/RainWater.png";
import SanitationImg from "../assets/images/Sanitation.png";
import VillageImg from "../assets/images/Village.png";

const Funded = () => {
  const cards = [
    {
      id: 1,
      image: IrrigationImg,
      heading: "Irrigation Systems",
      body: "Drip and sprinkler systems for farmers who need efficient water use.",
      imageLeft: true,
    },
    {
      id: 2,
      image: RainWaterImg,
      heading: "Rain water Harvesting",
      body: "Capture and store rainwater to provide a reliable water supply.",
      imageLeft: false,
    },
    {
      id: 3,
      image: SanitationImg,
      heading: "Sanitation Infrastructure",
      body: "Latrines, handwashing stations, and filtration units for schools and communities.",
      imageLeft: true,
    },
    {
      id: 4,
      image: VillageImg,
      heading: "Village water Systems",
      body: "Clean water and sanitation solutions for entire communities.",
      imageLeft: false,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-onest font-semibold text-[44px] leading-[52px] tracking-[0%] mb-4">
          Finance solutions that make an Impact
        </h2>
        <p className="font-onest font-normal text-[17px] leading-[100%] tracking-[0%] text-[#475569] max-w-2xl mx-auto">
          Through our platform, you can secure financing for what matters most
        </p>
      </div>

      <div className="space-y-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col ${
              card.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-6 bg-white rounded-lg shadow-md p-5`}
          >
            <div className="md:w-2/5">
              <img
                src={card.image}
                alt={card.heading}
                className="w-full h-auto max-h-[220px] object-contain rounded-lg"
              />
            </div>
            <div className="md:w-3/5 text-center md:text-left p-2">
              <h3 className="font-onest font-semibold text-xl mb-2">
                {card.heading}
              </h3>
              <p className="font-onest text-base">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Funded;
