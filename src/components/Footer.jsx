import React from "react";
import XIcon from "../assets/images/X.svg";
import LinkedInIcon from "../assets/images/Linkeldn.svg";
import InstagramIcon from "../assets/images/Instagram.svg";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Side - Branding */}
          <div className="md:w-1/3">
            <div className="mb-4">
              <h3 className="font-onest font-semibold text-[22px] leading-[10px] tracking-[0%] text-black mb-4">
                DayLight Solar
              </h3>
              <p className="font-onest font-medium text-[16px] leading-[21px] tracking-[-2%] text-[#64748B] mb-4">
                Helping you to access clean water - fast, smart and affordable
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#">
                <img src={XIcon} alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="#">
                <img src={LinkedInIcon} alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="#">
                <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Footer Links */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-onest font-semibold text-base text-[#27272A] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["Home", "About Us", "How it Works", "Solutions"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="font-onest font-medium text-[#64748B] hover:text-[#27272A] transition-colors"
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
              <h4 className="font-onest font-semibold text-base text-[#27272A] mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="font-onest font-medium text-[#64748B] hover:text-[#27272A] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-onest font-semibold text-base text-[#27272A] mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-onest font-medium text-[#64748B] hover:text-[#27272A] transition-colors"
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
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="font-onest font-medium text-sm text-[#00000080]">
            © 2025 DayLight Solar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
