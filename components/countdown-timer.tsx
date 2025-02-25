"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const circleRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (circleRef.current && textRef.current) {
        const rect = circleRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const rotateX = y / 20
        const rotateY = -x / 20

        circleRef.current.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `

        textRef.current.style.transform = `
          translateX(${-x / 50}px)
          translateY(${-y / 50}px)
        `
      }
    }

    const handleMouseLeave = () => {
      if (circleRef.current && textRef.current) {
        circleRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
        textRef.current.style.transform = "translateX(0px) translateY(0px)"
      }
    }

    const circle = circleRef.current
    if (circle) {
      circle.addEventListener("mousemove", handleMouseMove)
      circle.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (circle) {
        circle.removeEventListener("mousemove", handleMouseMove)
        circle.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  const progress =
    100 - ((+targetDate - +new Date()) / (+targetDate - +new Date(targetDate).setHours(0, 0, 0, 0))) * 100

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 overflow-hidden">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
        ></div>
      </div>

      <div className="w-full max-w-md space-y-12 relative z-10">
        {/* Countdown display */}
        <div
          ref={circleRef}
          className="relative aspect-square w-full bg-white/10 backdrop-blur-sm rounded-full shadow-lg transition-transform duration-200 ease-out cursor-pointer hover:shadow-cyan-500/50"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle className="text-white/5 stroke-current" strokeWidth="4" cx="50" cy="50" r="48" fill="transparent" />
            <circle
              className="text-cyan-500 stroke-current"
              strokeWidth="4"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="48"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 48}`}
              strokeDashoffset={`${2 * Math.PI * 48 * (1 - progress / 100)}`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div
            ref={textRef}
            className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-200 ease-out"
          >
            <div className="text-6xl font-bold tracking-tight text-white font-mono">{formatNumber(timeLeft.days)}</div>
            <div className="text-2xl font-light tracking-tight text-cyan-300">days</div>
            <div className="text-4xl font-light tracking-tight text-white font-mono mt-2">
              {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer

