"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguage()

  const points = [t.about.point1, t.about.point2, t.about.point3, t.about.point4]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ik.imagekit.io/lucalink/NewGen/Assets/hero.webp"
          alt="新睿保險集團"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-white leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>

          <div className="mb-8 space-y-4">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              {t.about.description}
            </p>
            <ul className="space-y-3 text-base md:text-lg text-white/90">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-2xl">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed font-medium">
            {t.about.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/company/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-transparent transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.hero.cta1}
              </Button>
            </Link>
            <Link href="/solutions">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-primary text-lg px-8 py-6 bg-transparent transition-all duration-300"
              >
                {t.hero.cta2}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
