import React from "react";
import PoweredIcon from "../assets/images/Powered.svg";
import FinancingIcon from "../assets/images/Financing.svg";
import StreamLinedIcon from "../assets/images/StreamLined.svg";

const Choose = () => {
  const cards = [
    {
      id: 1,
      icon: PoweredIcon,
      heading: "AI-Powered Simplicity",
      body: "Get the answers you need in real-time with our intelligent chatbot.",
    },
    {
      id: 2,
      icon: FinancingIcon,
      heading: "Tailored Financing Solutions",
      body: "We find the loan that best fits your group's needs and repayment capacity.",
    },
    {
      id: 3,
      icon: StreamLinedIcon,
      heading: "Streamlined Process",
      body: "No hassle, no delays. From eligibility check to loan submission, everything is automated and seamless.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#FEFCE8B2]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">
              <img
                src={card.icon}
                alt={card.heading}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="font-onest font-semibold text-[20px] leading-[24px] tracking-[0%] text-[#27272A] mb-3">
              {card.heading}
            </h3>
            <p className="font-onest font-normal text-[16px] leading-[20px] tracking-[0%] text-[#5C6474]">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
