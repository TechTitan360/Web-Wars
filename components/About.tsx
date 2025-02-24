"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import ElegantShape from "@/components/ElegantShape"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.05] blur-3xl" />
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.2}
            width={500}
            height={120}
            rotate={15}
            gradient="from-blue-500/[0.15]"
            className="left-[-10%] top-[10%]"
          />
          <ElegantShape
            delay={0.3}
            width={400}
            height={100}
            rotate={-10}
            gradient="from-purple-500/[0.15]"
            className="right-[-5%] bottom-[15%]"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300">
              About ICCSAI 2025
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              ICCSAI 2025 is a premier global event dedicated to fostering innovation and collaboration in AI, security,
              and communication. Our mission is to bring together the brightest minds in the field to shape the future
              of technology.
            </p>
            <p className="text-xl text-gray-300">Join us for an immersive experience featuring:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Cutting-edge keynote speeches</li>
              <li>Groundbreaking research presentations</li>
              <li>Interactive panel discussions</li>
              <li>Hands-on workshops led by industry experts</li>
            </ul>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1 rounded-lg shadow-xl"
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="ICCSAI Conference"
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-lg shadow-xl"
            >
              <p className="text-white font-bold">5000+ Attendees</p>
              <p className="text-white text-sm">from 50+ countries</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <a
            href="#details"
            className="inline-block px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Conference Details
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

