"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const navItems = [
  { name: "About", href: "about" },
  { name: "Details", href: "details" },
  {
    name: "Committee",
    subItems: [
      { name: "Committee Members", href: "/#Committee" },
      { name: "Keynote Speakers", href: "/#Speakers" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<{ [key: string]: boolean }>({});

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setIsDropdownOpen({}); // Close dropdowns
    scrollToSection(href);
  };

  const toggleDropdown = (name: string) => {
    setIsDropdownOpen((prev) => (prev[name] ? {} : { [name]: true }));
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown-container")) {
        setIsDropdownOpen({});
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-row items-center justify-between sm:justify-center py-4 max-w-[83rem] mx-auto px-4 relative z-50">
        <div className="hidden sm:flex justify-center">
          <div className="flex flex-row space-x-6 items-center antialiased border border-gray-700 px-2 py-2 rounded-2xl bg-transparent backdrop-blur-md">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-bold text-sm flex items-center justify-center text-white space-x-2"
            >
              <span className="bg-blue-500 w-6 h-6 flex items-center justify-center rounded-[6px] font-mono relative overflow-hidden">
                <span className="absolute w-full h-full transform translate-x-3 bg-white/[0.2] rotate-45"></span>
              </span>
              <span className="font-mono">ICCSAI</span>
            </button>
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="relative group dropdown-container">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="text-white text-sm relative z-10 px-2 py-2 hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen[item.name] ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {isDropdownOpen[item.name] && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-48 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-xl backdrop-blur-md"
                    >
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavClick(subItem.href)}
                          className="text-gray-300 hover:text-white hover:bg-gradient-to-r from-blue-500/20 to-purple-500/20 block px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white text-sm relative group"
                >
                  <span className="relative z-10 px-2 py-2 inline-block hover:text-blue-300 transition-colors">
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center"></span>
                  </span>
                </button>
              )
            )}
            <button
              onClick={() => handleNavClick("registration")}
              className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-blue-500 to-blue-600 text-sm px-4 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
