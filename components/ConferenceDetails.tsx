"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaLaptop, FaCheckCircle } from "react-icons/fa";
import CountdownTimer from "@/components/countdown-timer";
import topics from "@/data/conference-topics";

const targetDate = new Date("2025-04-03T23:59:59");

export default function ConferenceDetails() {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);

  return (
    <section
      id="details"
      className="py-20 text-white bg-gradient-to-b from-[#0F1419] to-[#0A1016]"
    >
      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-700/[0.04] to-purple-700/[0.04] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 text-center">
          Conference Details
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-b from-[#0F1419]/90 to-[#0A1016]/90 rounded-2xl p-10 shadow-lg"
        >
          {/* Left Section: Event Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Event Information</h3>
            <div className="space-y-6">
              {[
                { icon: <FaCalendarAlt className="text-blue-400 text-3xl" />, label: "Date", value: "4th - 6th April 2025" },
                { icon: <FaMapMarkerAlt className="text-purple-400 text-3xl" />, label: "Location", value: "Galgotias University" },
                { icon: <FaLaptop className="text-green-400 text-3xl" />, label: "Format", value: "Hybrid (In-person + Virtual Sessions)" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span aria-label={item.label}>{item.icon}</span>
                  <p className="text-lg text-gray-300">
                    <strong>{item.label}:</strong> {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2 mt-6">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </motion.div>

          {/* Right Section: Topics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Topics Covered</h3>
            <ul className="space-y-4 relative">
              {topics.map((topic, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHoveredTopic(topic.details)}
                  onMouseLeave={() => setHoveredTopic(null)}
                  className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-700"
                >
                  <FaCheckCircle className="text-blue-400 text-2xl" aria-label="Checkmark" />
                  <p className="text-lg text-gray-300">{topic.title}</p>
                </motion.li>
              ))}
            </ul>

            {/* Hover Detail Box */}
            <AnimatePresence>
              {hoveredTopic && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-16 left-0 w-full p-4 bg-gray-700 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out"
                >
                  {hoveredTopic}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}