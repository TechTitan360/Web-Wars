"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import ICCSAIHero from "@/components/ICCSAIHero"
import About from "@/components/About"
import ElegantShape from "@/components/ElegantShape"

export default function Home2() {
  const { scrollY } = useScroll()
  const shapeY = useTransform(scrollY, [0, 2000], [0, 600]) // Smooth movement over 2000px scroll
  const shapeOpacity = useTransform(scrollY, [0, 1000, 2000], [1, 0.3, 1]) // Fade out then back in

  return (
    <main className="bg-transparent relative overflow-hidden">
      {/* Single Parallax Layer for Both Sections */}
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

      {/* Sections */}
      <ICCSAIHero />
      <About />
    </main>
  )
}