"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { ArrowRight, Shield, Briefcase } from "lucide-react"
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

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            {language === "en" ? "Welcome to Newgen" : "歡迎來到新睿"}
          </h1>
          <p className="text-xl md:text-2xl text-white/85 mb-16 leading-relaxed max-w-2xl">
            {language === "en"
              ? "Whether you're protecting your family or building your career — you're in the right place."
              : "無論您是想保護家人，還是建立事業，您都來對了地方。"}
          </p>

          {/* Two cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">

            {/* Card 1: Consumer */}
            <Link href="/solutions" className="group">
              <div className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 hover:border-white/60 rounded-2xl p-8 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {language === "en" ? "Protect My Family" : "保護我的家人"}
                  </h2>
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  {language === "en"
                    ? "Explore insurance solutions designed for your family's financial future."
                    : "探索為您家人財務未來設計的保險方案。"}
                </p>
                <span className="inline-flex items-center text-accent font-semibold text-sm gap-2 group-hover:gap-3 transition-all duration-200">
                  {language === "en" ? "View Solutions" : "查看方案"}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Card 2: Agent */}
            <Link href="/join" className="group">
              <div className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 hover:border-white/60 rounded-2xl p-8 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {language === "en" ? "Join Our Team" : "加入我們的團隊"}
                  </h2>
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  {language === "en"
                    ? "Build your insurance business with training, tools, and real support."
                    : "通過培訓、工具和真實支持建立您的保險事業。"}
                </p>
                <span className="inline-flex items-center text-accent font-semibold text-sm gap-2 group-hover:gap-3 transition-all duration-200">
                  {language === "en" ? "Learn More" : "了解更多"}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
