import React from "react";
import XIcon from "../assets/images/X.svg";
import LinkedInIcon from "../assets/images/Linkeldn.svg";
import InstagramIcon from "../assets/images/Instagram.svg";

const Footer = () => {
  return (
    <footer className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12">
          {/* Left Side - Branding */}
          <div className="lg:w-1/3">
            <div className="mb-4 sm:mb-6">
              <h3 className="font-onest font-semibold text-xl sm:text-[22px] leading-[1.2] tracking-[0%] text-black mb-3 sm:mb-4">
                DayLight Solar
              </h3>
              <p className="font-onest font-medium text-sm sm:text-[16px] leading-[1.4] sm:leading-[21px] tracking-[-0.02em] text-[#64748B]">
                Helping you to access clean water - fast, smart and affordable
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-5">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img
                  src={XIcon}
                  alt="Twitter"
                  className="h-5 sm:h-6 w-5 sm:w-6"
                />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="h-5 sm:h-6 w-5 sm:w-6"
                />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="h-5 sm:h-6 w-5 sm:w-6"
                />
              </a>
            </div>
          </div>

          {/* Right Side - Footer Links */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-onest font-semibold text-base text-[#27272A] mb-3 sm:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {["Home", "About Us", "How it Works", "Solutions"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="font-onest font-medium text-sm sm:text-base text-[#64748B] hover:text-[#27272A] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-onest font-semibold text-base text-[#27272A] mb-3 sm:mb-4">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="font-onest font-medium text-sm sm:text-base text-[#64748B] hover:text-[#27272A] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-onest font-semibold text-base text-[#27272A] mb-3 sm:mb-4">
                Legal
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-onest font-medium text-sm sm:text-base text-[#64748B] hover:text-[#27272A] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6 sm:my-8"></div>

        {/* Copyright */}
        <div className="text-center sm:text-left">
          <p className="font-onest font-medium text-xs sm:text-sm text-[#00000080]">
            © 2025 DayLight Solar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
