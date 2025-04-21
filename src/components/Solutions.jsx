import React from "react";
import { useNavigate } from "react-router-dom";
import image40 from "../assets/images/image 40.png";
import image41 from "../assets/images/image 41.png";
import image42 from "../assets/images/image 42.png";
import image44 from "../assets/images/image 44.png";
import Ready from "../components/Ready";
import Footer from "../components/Footer";

const Solutions = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Hero Section with Gradient Background */}
      <div
        className="w-full py-20 px-4 md:px-8 text-center"
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #BFDBFE 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[Onest] font-semibold text-[50px] leading-[64px] tracking-[-1.36px] text-blue-950 mb-8">
            Affordable Solutions For Your Water Needs
          </h1>

          <p className="text-blue-950/80 font-[Onest] text-lg leading-[28px] max-w-3xl mx-auto">
            At Day Light Solar Energies, we offer a wide range of affordable,
            sustainable water solutions that can be financed through our
            WaterCredit platform. Whether you're a farmer in need of irrigation,
            a school looking to improve sanitation, or a community trying to
            access clean water, we've got you covered.
          </p>
        </div>
      </div>

      {/* Irrigation Systems Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex items-center justify-center">
          <img
            src={image42}
            alt="Irrigation systems for farmers"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        <div>
          <h2 className="font-[Onest] font-semibold text-[44px] leading-[56px] tracking-[-1.36px] text-blue-950 mb-6">
            Irrigation Systems for Farmers
          </h2>
          <p className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px] mb-6">
            Irrigation is key to successful farming, especially in areas where
            water is scarce. With WaterCredit, you can finance:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
              <span className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px]">
                <span className="font-semibold">Drip Irrigation Systems:</span>{" "}
                Water is delivered right to the roots, minimizing waste and
                maximizing crop yields.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
              <span className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px]">
                <span className="font-semibold">Sprinkler Systems:</span> Ideal
                for larger farms, these systems provide even water distribution
                across fields.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Clean Water Solutions Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-[Onest] font-semibold text-[44px] leading-[56px] tracking-[-1.36px] text-blue-950 mb-6">
            Clean Water Solutions for Communities
          </h2>
          <p className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px] mb-6">
            We believe every community should have access to clean, reliable
            water. Our platform helps fund:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
              <span className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px]">
                <span className="font-semibold">Rainwater Harvesting:</span>{" "}
                Collect and store rainwater to provide a sustainable water
                supply.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
              <span className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px]">
                <span className="font-semibold">
                  Solar-Powered Water Pumps:
                </span>{" "}
                Solar energy pumps that provide clean water in rural areas
                without relying on electricity.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={image40}
            alt="Clean water solutions for communities"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Sanitation Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex items-center justify-center">
          <img
            src={image44}
            alt="Sanitation for schools and health centers"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        <div>
          <h2 className="font-[Onest] font-semibold text-[44px] leading-[56px] tracking-[-1.36px] text-blue-950 mb-6">
            Sanitation for Schools and Health Centers
          </h2>
          <p className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px] mb-6">
            Sanitation is critical for a healthy environment. Through
            WaterCredit, schools and health centers can finance:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
              <span className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px]">
                <span className="font-semibold">School Latrines:</span> Safe,
                hygienic toilets for students and staff.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
              <span className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px]">
                <span className="font-semibold">Water Filtration Units:</span>{" "}
                Ensuring access to safe drinking water.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
              <span className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px]">
                <span className="font-semibold">Handwashing Stations:</span> To
                encourage proper hygiene and prevent disease.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Village-Level Water Systems Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-[Onest] font-semibold text-[44px] leading-[56px] tracking-[-1.36px] text-blue-950 mb-6">
            Village-Level Water Systems
          </h2>
          <p className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px] mb-6">
            We're committed to helping entire communities access clean water and
            sanitation. With WaterCredit, villages can finance:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
              <span className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px]">
                <span className="font-semibold">
                  Clean Water Infrastructure:
                </span>{" "}
                Systems to bring safe water directly to households.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
              <span className="text-[#64748B] font-[Onest] text-lg leading-[28px] tracking-[-0.22px]">
                <span className="font-semibold">Sanitation Projects:</span>{" "}
                Including waste management and wastewater treatment.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={image41}
            alt="Village-level water systems"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Customized Ready Component */}
      <Ready
        title="Ready to bring clean water to your community?"
        description="Join our network of partners and start your water project today."
        primaryButtonText="Get Started"
        secondaryButtonText="Contact Us"
        onPrimaryClick={() => navigate("/apply")}
        onSecondaryClick={() => navigate("/contact")}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Solutions;
