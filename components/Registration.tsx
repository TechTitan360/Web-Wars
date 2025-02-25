"use client";

import { motion } from "framer-motion";

export default function Registration() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="registration"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0A1016] to-[#070C12]"
    >
      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-700/[0.03] to-purple-700/[0.03] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 text-center"
        >
          Join ICCSAI 2025
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-10 text-center max-w-2xl mx-auto"
        >
          Secure your spot at the premier global event for AI, security, and communication innovation. Register now!
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://iccsai.in/registration.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
            >
              Register Now
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}