"use client";
import { motion } from "framer-motion";
import { FaMicrochip, FaShieldAlt, FaGlobe } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          About ICCSAI 2025
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          ICCSAI 2025 is an international conference dedicated to advancing <span className="text-white font-semibold">Artificial Intelligence, Cybersecurity, and Modern Communication Technologies.</span> 
          Bringing together researchers, industry leaders, and innovators, this event fosters collaboration and paves the way for cutting-edge advancements.
        </p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl p-8 mb-10"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
          <p className="text-gray-300">
            To create a platform where <span className="text-white font-semibold">academic excellence meets real-world challenges</span>, 
            fostering innovation in AI, cybersecurity, and communication to drive global technological advancements.
          </p>
        </motion.div>

        <h3 className="text-3xl font-bold text-white mb-6">Key Themes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-gray-800 rounded-2xl p-6 text-center flex flex-col items-center shadow-md"
          >
            <FaMicrochip className="text-blue-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Artificial Intelligence</h4>
            <p className="text-gray-300 text-sm">
              Exploring advancements in deep learning, NLP, and AI-driven applications shaping the future.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-gray-800 rounded-2xl p-6 text-center flex flex-col items-center shadow-md"
          >
            <FaShieldAlt className="text-purple-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Cybersecurity</h4>
            <p className="text-gray-300 text-sm">
              Addressing global cybersecurity threats, ethical hacking, and secure digital infrastructures.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-gray-800 rounded-2xl p-6 text-center flex flex-col items-center shadow-md"
          >
            <FaGlobe className="text-green-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Next-Gen Communication</h4>
            <p className="text-gray-300 text-sm">
              Innovations in 5G, IoT, and quantum communication shaping global connectivity.
            </p>
          </motion.div>

        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">Why Attend?</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Join ICCSAI 2025 to gain insights from <span className="text-white font-semibold">world-class speakers, industry experts, and academic pioneers.</span> 
            Network with professionals, showcase your research, and be part of groundbreaking discussions shaping the future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
