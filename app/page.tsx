"use client"

import { useState, useEffect } from "react"

export default function ProjectEpochCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const targetDate = new Date("2025-07-26T18:00:00+02:00")

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4">PROJECT</h1>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-red-500">EPOCH</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 md:gap-8 mb-16">
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HRS", value: timeLeft.hours },
          { label: "MIN", value: timeLeft.minutes },
          { label: "SEC", value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="bg-white text-black text-4xl md:text-7xl font-black p-4 md:p-8 mb-2 font-mono">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg font-bold tracking-widest">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="text-2xl md:text-4xl font-black mb-2">JULY 26, 2025</div>
        <div className="text-xl md:text-3xl font-black text-red-500">18:00 CET</div>
      </div>
    </div>
  )
}
