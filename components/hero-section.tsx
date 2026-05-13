"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

const BG_IMAGES = [
  "/hero.png",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80&fit=crop",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80&fit=crop",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&fit=crop",
]

export function HeroSection() {
  const { language } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState<number | null>(null)
  const [nextVisible, setNextVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % BG_IMAGES.length
      // Step 1: mount next image at opacity 0
      setNext(nextIndex)
      setNextVisible(false)
      // Step 2: next frame, fade it in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNextVisible(true)
        })
      })
      // Step 3: after transition completes, swap and clean up
      setTimeout(() => {
        setCurrent(nextIndex)
        setNext(null)
        setNextVisible(false)
      }, 1500)
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Current background */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGES[current]}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{background: "linear-gradient(to right, hsl(215 45% 32% / 0.80), hsl(215 45% 32% / 0.60), hsl(215 45% 32% / 0.25))"}} />
      </div>

      {/* Next background (fading in) */}
      {next !== null && (
        <div
          className="absolute inset-0 z-0 transition-opacity duration-1500"
          style={{ opacity: nextVisible ? 1 : 0, transitionDuration: "1500ms" }}
        >
          <img
            src={BG_IMAGES[next]}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{background: "linear-gradient(to right, hsl(215 45% 32% / 0.80), hsl(215 45% 32% / 0.60), hsl(215 45% 32% / 0.25))"}} />
        </div>
      )}

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-accent w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl">

          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">
            {language === "en" ? "NewGen Insurance Agency · Bay Area, CA" : "新睿保險集團 · 灣區，加州"}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            {language === "en"
              ? <>Protecting Families.<br />Building Futures.</>
              : <>守護家庭。<br />成就未來。</>}
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-16 leading-relaxed max-w-xl font-light tracking-wide">
            {language === "en"
              ? "Independent advisors. Top-rated carriers. Personalized coverage for every stage of life."
              : "獨立保險顧問，頂級保險公司，為人生每個階段量身定制保障。"}
          </p>

        </div>
      </div>
    </section>
  )
}
