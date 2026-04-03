"use client"

import { Button } from "@/components/ui/button"
import { Phone, Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="NewGen Insurance Group"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{background: "linear-gradient(to right, hsl(215 45% 32% / 0.80), hsl(215 45% 32% / 0.60), hsl(215 45% 32% / 0.25))"}} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-white leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>

          {/* Client CTAs */}
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

          {/* Agent / Recruiting entry */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <Link href="/join">
              <button className="group inline-flex items-center gap-3 text-white/75 hover:text-white transition-colors duration-200">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 group-hover:bg-accent/20 transition-colors duration-200">
                  <Briefcase className="w-4 h-4 text-accent" />
                </span>
                <span className="text-base font-medium">
                  {t.recruiting.navLabel} →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
