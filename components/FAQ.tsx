"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is the format of ICCSAI 2025?",
    answer:
      "ICCSAI 2025 is a hybrid conference, offering both in-person and virtual attendance options. This allows participants from around the world to join and engage in the conference activities.",
  },
  {
    question: "How can I submit a paper or proposal for the conference?",
    answer:
      "Paper submissions will be open approximately 6 months before the conference date. Please check our website regularly for the call for papers and submission guidelines.",
  },
  {
    question: "Are there any student discounts available for registration?",
    answer:
      "Yes, we offer discounted rates for students. You will need to provide valid student ID during the registration process to avail of the discount.",
  },
  {
    question: "Will the conference sessions be recorded?",
    answer:
      "Yes, all main conference sessions will be recorded and made available to registered attendees for a limited time after the conference.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-[#070C12] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center text-white"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
