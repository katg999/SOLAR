import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/image 37.png";
import image43 from "../assets/images/image 43.png";
import image42 from "../assets/images/image 42.png";
import image41 from "../assets/images/image 41.png";
import image38 from "../assets/images/image 38.png";
import image32 from "../assets/images/image 32.png";
import Choose from "../components/Choose";
import Ready from "../components/Ready";
import Footer from "../components/Footer";

const AboutUs = () => {
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
            Our mission is to provide easy access to clean water financing
          </h1>

          <p className="text-blue-950/80 font-[Onest] text-lg leading-[28px] max-w-3xl mx-auto">
            At Day Light Solar Energies, we've created the WaterCredit platform
            to provide fast, affordable financing for water and sanitation
            projects, simplifying the process for farmers, schools, and local
            groups.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-[Onest] font-semibold text-[44px] leading-[56px] tracking-[-1.36px] text-blue-950 mb-6">
            Our vision is a world with universal access to clean water
          </h2>
          <p className="text-[#64748B] font-[Onest] text-base leading-[26px] tracking-[-0.22px]">
            We envision a future where every community has reliable access to
            clean water and sanitation. By combining AI, solar energy, and
            community-driven solutions, we're turning water infrastructure
            financing into a bridge to better living.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={heroImage}
            alt="Clean water vision"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Three Images Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <img
          src={image43}
          alt="Water project 1"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src={image42}
          alt="Water project 2"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src={image41}
          alt="Water project 3"
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>

      {/* Who We Serve Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="font-[Onest] font-semibold text-3xl md:text-4xl text-blue-950 mb-4 text-center">
          Who We Serve
        </h2>
        <p className="text-[#64748B] font-[Onest] text-lg text-center max-w-2xl mx-auto mb-12">
          Our Platform is Designed For
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <img
              src={image38}
              alt="Farmers"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-[Onest] font-semibold text-xl text-blue-950 mb-2">
                Farmers
              </h3>
              <p className="text-gray-600 font-[Onest]">
                Helping farmer groups finance irrigation systems that improve
                productivity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <img
              src={image32}
              alt="Savings Groups"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-[Onest] font-semibold text-xl text-blue-950 mb-2">
                Savings Groups
              </h3>
              <p className="text-gray-600 font-[Onest]">
                Enabling savings groups, SACCOs, and VSLAs to invest in
                community water projects.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <img
              src={image38}
              alt="Schools & Health Centers"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-[Onest] font-semibold text-xl text-blue-950 mb-2">
                Schools & Health Centers
              </h3>
              <p className="text-gray-600 font-[Onest]">
                Supporting educational institutions and health centers to fund
                sanitation solutions, like latrines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Component */}
      <Choose />

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

export default AboutUs;
