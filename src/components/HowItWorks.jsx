import React from "react";
import Sand1 from "../assets/images/Sand.png";
import Sand2 from "../assets/images/Sand2.png";
import Sand3 from "../assets/images/Sand3.png";

const HowItWorks = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description:
        "Start by chatting with our AI assistant to assess your needs",
      image: Sand1,
    },
    {
      title: "Application Process",
      description:
        "Complete your loan application through the WhatsApp interface",
      image: Sand2,
    },
    {
      title: "Approval & Installation",
      description: "Get approved and schedule your water system installation",
      image: Sand3, // Replace with actual image when available
    },
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-black font-[Onest] font-semibold text-[32px] md:text-[44px] leading-[38px] md:leading-[52px] mb-3">
            See how Sandi AI works in real life
          </h2>
          <p className="text-[#475569] font-[Onest] font-normal text-[17px] leading-[100%]">
            Our WhatsApp-based process makes getting funded simple and familiar
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Number */}
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-[Onest] font-semibold text-lg mb-4">
                {index + 1}
              </div>

              {/* WhatsApp Screenshot */}
              <div className="bg-white p-2 rounded-2xl shadow-lg mb-4 w-full max-w-xs">
                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className="w-full h-auto rounded-xl border border-gray-200"
                />
              </div>

              {/* Step Content */}
              <div className="text-center">
                <h3 className="text-black font-[Onest] font-semibold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-[#475569] font-[Onest] font-normal text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-[#475569] font-[Onest] font-medium text-lg mb-6">
            Ready to start the conversation?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
