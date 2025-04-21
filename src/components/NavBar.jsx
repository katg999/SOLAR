import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About Us", path: "/about-us" },
    { name: "How It Works", path: "/" },
    { name: "Solutions", path: "/solutions" }, // Simplified version without subItems
  ];

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-white shadow-sm py-0" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`bg-white rounded-full shadow-md ${
            isScrolled ? "py-2" : "py-3"
          }`}
        >
          <div className="flex justify-between items-center px-4">
            {/* Brand */}
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold text-blue-600" // Using Tailwind's blue-600
              onClick={() => {
                setActiveDropdown(null);
                setMobileMenuOpen(false);
              }}
            >
              SandiAI
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, index) =>
                item.subItems ? (
                  <div className="relative" key={item.name}>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`text-sm lg:text-base font-medium flex items-center ${
                        isActive(item.path) ||
                        item.subItems.some((sub) => isActive(sub.path))
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute z-20 bg-white shadow-lg mt-2 rounded-lg w-48 overflow-hidden transition-all duration-200 ${
                        activeDropdown === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setActiveDropdown(null)}
                          className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                            isActive(sub.path)
                              ? "text-blue-600 font-medium bg-blue-50"
                              : "text-gray-700"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm lg:text-base font-medium ${
                      isActive(item.path)
                        ? "text-blue-600"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <button
                onClick={() => window.voiceflow?.chat?.open?.()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 lg:px-6 rounded-full transition text-sm lg:text-base"
              >
                Talk To Our Assistant
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Bars3Icon className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          <div
            className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <XMarkIcon className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-60px)]">
              <nav className="p-4 space-y-4">
                {navItems.map((item, index) =>
                  item.subItems ? (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`flex items-center justify-between w-full text-left text-base font-medium ${
                          isActive(item.path) ||
                          item.subItems.some((sub) => isActive(sub.path))
                            ? "text-blue-600"
                            : "text-gray-800"
                        }`}
                      >
                        {item.name}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-200 ${
                          activeDropdown === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={toggleMobileMenu}
                            className={`block py-2 text-sm ${
                              isActive(sub.path)
                                ? "text-blue-600 font-medium"
                                : "text-gray-700"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={toggleMobileMenu}
                      className={`block text-base font-medium ${
                        isActive(item.path) ? "text-blue-600" : "text-gray-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <button
                  onClick={() => {
                    toggleMobileMenu();
                    window.voiceflow?.chat?.open?.();
                  }}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition"
                >
                  Talk To Our Assistant
                </button>
              </nav>
            </div>
          </div>

          {/* Overlay when mobile menu is open */}
          {mobileMenuOpen && (
            <div
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
            />
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
