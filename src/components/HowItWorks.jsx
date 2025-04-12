import React from "react";
import LoginImage from "../assets/images/login.png";
import WaterNeedsImage from "../assets/images/water needs.png";
import LoanOptionsImage from "../assets/images/Get Loan Options & Apply.png";

const HowItWorks = () => {
  const sections = [
    {
      title: "Start by Logging In",
      description:
        "Enter your group number to unlock personalized access. Sandi AI will greet you and know exactly who you are ready to help with water solutions.",
      image: LoginImage,
      imagePosition: "left",
      displayOption: "full", // options: "full", "half", "quarter-right"
    },
    {
      title: "Share your Water Needs",
      description:
        "Quickly share your water requirements—like tank type and size—using simple, guided prompts. Our chatbot understands your needs instantly.",
      image: WaterNeedsImage,
      imagePosition: "right",
      displayOption: "full",
    },
    {
      title: "Get Loan Options Instantly",
      description:
        "Sandi AI checks multiple lenders and shows the best financing offers for your needs. Pick the offer you like, download the form, and upload it—all right in the chat.",
      image: LoanOptionsImage,
      imagePosition: "left",
      displayOption: "full",
    },
  ];

  const getClipPath = (option) => {
    switch (option) {
      case "half":
        return "inset(50% 0 0 0)"; // Show bottom half
      case "quarter-right":
        return "inset(0 0 0 75%)"; // Show right quarter
      case "full":
      default:
        return "inset(0 0 0 0)"; // Show full image
    }
  };

  const getContainerHeight = (option) => {
    switch (option) {
      case "half":
        return "360px";
      case "quarter-right":
        return "711.96px"; // Full height for quarter-width
      case "full":
      default:
        return "711.96px";
    }
  };

  const getContainerWidth = (option) => {
    switch (option) {
      case "quarter-right":
        return "90px"; // Approximately 1/4 of 350px
      default:
        return "350px";
    }
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#172554] font-[Onest] font-semibold text-[32px] md:text-[44px] leading-[38px] md:leading-[52px] mb-3">
            See how Sandi AI works in real life
          </h2>
          <p className="text-[#475569] font-[Onest] font-normal text-[17px] leading-[100%]">
            Our WhatsApp-based process makes getting funded simple and familiar
          </p>
        </div>

        {/* Sections with alternating image/text layout */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              section.imagePosition === "right"
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } items-center gap-8 md:gap-12 mb-16 md:mb-24`}
          >
            {/* Image card container */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg"
                style={{
                  background:
                    "radial-gradient(circle at center, #EFF6FF 0%, #BFDBFE 100%)",
                  height: getContainerHeight(section.displayOption),
                  width: getContainerWidth(section.displayOption),
                }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="absolute bottom-0"
                    style={{
                      width:
                        section.displayOption === "quarter-right"
                          ? "350px"
                          : "100%",
                      height: "711.96px",
                      objectFit: "cover",
                      objectPosition: "center bottom",
                      clipPath: getClipPath(section.displayOption),
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-[#172554] font-[Onest] font-semibold text-2xl md:text-3xl mb-4">
                {section.title}
              </h3>
              <p className="text-[#475569] font-[Onest] font-normal text-base md:text-lg">
                {section.description}
              </p>
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="text-center mt-8">
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
