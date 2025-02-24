"use client"

import { motion, useTransform } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import ElegantShape from "@/components/ElegantShape"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

interface ICCSAIHeroProps {
  scrollYProgress?: any
}

export default function ICCSAIHero({ scrollYProgress }: ICCSAIHeroProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
    }),
  }

  // Debug: Log scrollYProgress to confirm it’s updating
  scrollYProgress?.onChange((value: number) => console.log("Hero scrollYProgress:", value))

  // Parallax effect: Smooth movement over full scroll
  const shapeY = scrollYProgress
    ? useTransform(scrollYProgress, [0, 1], [0, 300]) // Move 300px over full scroll
    : 0
  const shapeOpacity = scrollYProgress
    ? useTransform(scrollYProgress, [0, 1], [1, 0.5]) // Fade to 50% opacity over full scroll
    : 1

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <span className="text-sm text-white/60 tracking-wide">Powered by IEEE Computer Society</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Welcome to</span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300",
                  pacifico.className
                )}
              >
                ICCSAI 2025
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              The International Conference on AI, Security, and Communication (ICCSAI 2025) brings together leading
              researchers, industry experts, and academics to discuss groundbreaking advancements in artificial
              intelligence, cybersecurity, and modern communication technologies.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#about"
              className="px-6 py-3 rounded-3xl bg-cyan-300 text-emerald-950 font-semibold transition-all duration-200 shadow-[inset_20px_20px_30px_#234d91,inset_-20px_-20px_30px_#53b7ff]"
            >
              Learn More
            </a>
            <a
              href="#register"
              className="px-6 py-3 rounded-3xl bg-purple-300 text-pink-950 font-semibold transition-all duration-200 shadow-[inset_20px_20px_30px_#633292,inset_-20px_-20px_30px_#ed78ff]"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}