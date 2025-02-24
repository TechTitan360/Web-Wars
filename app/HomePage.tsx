"use client"

import { motion, useScroll } from "framer-motion"
import ICCSAIHero from "@/components/ICCSAIHero"
import About from "@/components/About"
import ConferenceDetails from "@/components/ConferenceDetails"

export default function HomePage() {
  const { scrollYProgress } = useScroll()

  // Debug: Log scrollYProgress at the top level
  scrollYProgress.onChange((value) => console.log("HomePage scrollYProgress:", value))

  return (
    <div className="relative min-h-[400vh] bg-[#030303]">
      {/* Hero Section */}
      <motion.div>
        <ICCSAIHero scrollYProgress={scrollYProgress} />
      </motion.div>

      {/* About Section */}
      <About />

      {/* Conference Details Section */}
      <ConferenceDetails />
    </div>
  )
}