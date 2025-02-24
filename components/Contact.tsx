"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300">
            Contact Us
          </span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-300 mb-8 text-center">
            For inquiries, sponsorship opportunities, or speaker submissions, reach out to us:
          </p>
          <div className="space-y-6">
            <div className="flex items-center text-gray-300">
              <Mail className="w-6 h-6 mr-4 text-blue-400" />
              <span>contact@iccsai2025.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="w-6 h-6 mr-4 text-purple-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-6 h-6 mr-4 text-green-400" />
              <span>123 Conference Ave, Tech City, TC 12345</span>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Follow us on social media:</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

