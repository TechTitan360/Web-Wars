"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ElegantShape from "./ElegantShape"

export default function ParallaxBackground() {
  const [windowHeight, setWindowHeight] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  const y1 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.5])
  const y2 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.3])
  const y3 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.7])
  const y4 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.4])
  const y5 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.6])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div style={{ y: y1 }}>
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
      </motion.div>
      <motion.div style={{ y: y2 }}>
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-purple-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
      </motion.div>
      <motion.div style={{ y: y3 }}>
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-cyan-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
      </motion.div>
      <motion.div style={{ y: y4 }}>
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-green-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
      </motion.div>
      <motion.div style={{ y: y5 }}>
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
  )
}

