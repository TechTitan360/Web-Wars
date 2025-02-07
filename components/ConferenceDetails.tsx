"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaLaptop, FaCheckCircle } from "react-icons/fa";

export default function ConferenceDetails() {
  const topics = [
    "Artificial Intelligence & Machine Learning",
    "Cybersecurity & Data Privacy",
    "Advanced Networking & Communication Systems",
    "Ethical AI & Policy Regulations",
    "Quantum Computing & Future Technologies",
    "IoT & Smart Cities",
    "And Many more..."
  ];

  return (
    <section id="details" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 text-center">
          Conference Details
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-900 rounded-2xl p-10 shadow-lg"
        >
          {/* Left Section: Event Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Event Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-blue-400 text-3xl" />
                <p className="text-lg text-gray-300"><strong>Date:</strong> 4th - 6th April 2025</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-purple-400 text-3xl" />
                <p className="text-lg text-gray-300"><strong>Location:</strong> Galgotias University</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaLaptop className="text-green-400 text-3xl" />
                <p className="text-lg text-gray-300"><strong>Format:</strong> Hybrid (In-person + Virtual Sessions)</p>
              </div>
            </div>
          </div>

          {/* Right Section: Topics */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Topics Covered</h3>
            <ul className="space-y-4">
              {topics.map((topic, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <FaCheckCircle className="text-blue-400 text-2xl" />
                  <p className="text-lg text-gray-300">{topic}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}