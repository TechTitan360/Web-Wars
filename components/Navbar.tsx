"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { scrollToSection } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const navItems = [
  { name: "About", href: "about" },
  { name: "Details", href: "details" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setDropdownOpen(false)
    if (pathname === "/") {
      scrollToSection(href)
    } else {
      router.push(`/#${href}`)
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" // Removed bg here
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-row items-center justify-between sm:justify-center py-4 max-w-[83rem] mx-auto px-4 relative z-50">
        {/* Desktop Navbar */}
        <div className="hidden sm:flex justify-center">
          <div
            className={`flex flex-row space-x-6 items-center antialiased border border-gray-700 px-2 py-2 rounded-2xl transition-all duration-300 bg-white/5 backdrop-blur-md`}
          >
            <Link href="/" className="font-bold text-sm flex items-center justify-center text-white space-x-2">
              <span className="bg-blue-500 w-6 h-6 flex items-center justify-center rounded-[6px] font-mono relative overflow-hidden">
                <span className="absolute w-full h-full transform translate-x-3 bg-white/[0.2] rotate-45"></span>
              </span>
              <span className="font-mono">ICCSAI</span>
            </Link>
            {navItems.map((item) => (
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
            ))}
            <div className="relative group">
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="text-white text-sm relative flex items-center"
              >
                <span className="relative z-10 px-2 py-2 inline-block hover:text-blue-300 transition-colors">
                  Committee
                  <ChevronDown className="inline-block ml-1 w-4 h-4" />
                </span>
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link
                        href="/committee"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Committee
                      </Link>
                      <Link
                        href="/speakers"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Speakers
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => handleNavClick("registration")}
              className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-blue-500 to-blue-600 text-sm px-4 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80"
            >
              Register
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-gray-800 border-t border-gray-700 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium relative group"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center"></span>
                  </span>
                </button>
              ))}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  <span>Committee</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4"
                    >
                      <Link
                        href="/committee"
                        className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => handleNavClick("committee")}
                      >
                        Committee
                      </Link>
                      <Link
                        href="/speakers"
                        className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => handleNavClick("speakers")}
                      >
                        Speakers
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                onClick={() => handleNavClick("registration")}
                className="block w-full text-center font-medium text-white rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 transition duration-150"
              >
                Register
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}