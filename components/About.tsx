"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Pacifico } from "next/font/google"
import ElegantShape from "@/components/ElegantShape"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function About() {
  const { scrollY } = useScroll()
  const sectionOffset = typeof window !== "undefined" ? window.innerHeight : 1000 // Hero height assumption
  const shapeY = useTransform(scrollY, [sectionOffset, sectionOffset + 1000], [300, 600]) // Continue from hero’s 300px
  const shapeOpacity = useTransform(scrollY, [sectionOffset, sectionOffset + 1000], [0.3, 1]) // Fade back in

  return (
    <section
      id="about"
      className="scroll-mt-custom py-20 relative overflow-hidden min-h-screen bg-gradient-to-b from-[#1E2A44] to-[#17202A]"
    >
      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.06] to-purple-600/[0.06] blur-3xl" />

      {/* Parallax Shapes (Continuing Hero’s Design) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div style={{ y: shapeY, opacity: shapeOpacity }}>
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-blue-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />
          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-purple-500/[0.15]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />
          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-cyan-500/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />
          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-green-500/[0.15]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />
          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-yellow-500/[0.15]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1 rounded-lg shadow-xl"
            >
              <img
                src="/maclab.png"
                alt="ICCSAI Conference"
                className="rounded-lg w-full h-auto"
              />
              <img
                src="/cover.png"
                alt="ICCSAI Conference"
                className="rounded-lg w-full h-auto"
              />
              {/* Removed duplicate maclab.png assuming it was a mistake */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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