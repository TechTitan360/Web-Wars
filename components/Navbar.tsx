"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"



const navItems = [
  { name: "About", href: "#About" },
  { name: "Details", href: "#ConferenceDetails" },
  { name: "Speakers", href: "#Speakers" },
  { name: "Sponsors", href: "#Sponsors" },
  { name: "FAQ", href: "#faq" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-row items-center justify-between sm:justify-center py-4 max-w-[83rem] mx-auto px-4 relative z-50">
        <div className="hidden sm:flex justify-center">
          <div className="flex flex-row space-x-6 items-center antialiased border border-gray-700 px-2 py-2 rounded-2xl bg-transparent backdrop-blur-md">
            <Link href="/" className="font-bold text-sm flex items-center justify-center text-white space-x-2">
              <span className="bg-blue-500 w-6 h-6 flex items-center justify-center rounded-[6px] font-mono relative overflow-hidden">
                <span className="absolute w-full h-full transform translate-x-3 bg-white/[0.2] rotate-45"></span>
              </span>
              <span className="font-mono">ICCSAI</span>
            </Link>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-white text-sm relative group">
                <span className="relative z-10 px-2 py-2 inline-block hover:text-blue-300 transition-colors">
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center"></span>
                </span>
              </Link>
            ))}
            <Link
              href="#registration"
              className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-blue-500 to-blue-600 text-sm px-4 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="flex sm:hidden w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <Link href="/" className="font-bold text-sm flex items-center justify-center text-white space-x-2">
              <span className="bg-blue-500 w-6 h-6 flex items-center justify-center rounded-[6px] font-mono relative overflow-hidden">
                <span className="absolute w-full h-full transform translate-x-3 bg-white/[0.2] rotate-45"></span>
              </span>
              <span className="font-mono">ICCSAI</span>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="sm:hidden bg-gray-800 border-t border-gray-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium relative group"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center"></span>
                </span>
              </Link>
            ))}
            <Link
              href="#registration"
              className="block w-full text-center font-medium text-white rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 transition duration-150"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

