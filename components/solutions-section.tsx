"use client"

import { Button } from "@/components/ui/button"
import { Shield, Percent, TrendingUp, GraduationCap, HeartPulse, ScrollText, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function SolutionsSection() {
  const { t, language } = useLanguage()

  const featured = [
    {
      icon: Shield,
      href: "/solutions/life-insurance",
      title: t.solutions.lifeInsurance,
      description: t.solutions.lifeInsuranceDesc,
      bullets: [
        t.solutions.lifeInsuranceBenefit1,
        t.solutions.lifeInsuranceBenefit2,
        t.solutions.lifeInsuranceBenefit3,
      ],
    },
    {
      icon: Percent,
      href: "/solutions/guaranteed-income",
      title: t.solutions.annuity,
      description: t.solutions.annuityDesc,
      bullets: [
        language === "en" ? "Guaranteed income you cannot outlive" : "終身保證收入，不怕活太久",
        language === "en" ? "Protection from market volatility" : "資產不受市場波動影響",
        language === "en" ? "Tax-deferred growth potential" : "稅務遞延增值空間",
      ],
    },
  ]

  const secondary = [
    { icon: TrendingUp, title: t.solutions.taxFreeRetirement, description: t.solutions.taxFreeRetirementDesc },
    { icon: GraduationCap, title: t.solutions.collegeFunding, description: t.solutions.collegeFundingDesc },
    { icon: HeartPulse, title: t.solutions.longTermCare, description: t.solutions.longTermCareDesc },
    { icon: ScrollText, title: t.solutions.estatePlanning, description: t.solutions.estatePlanningDesc },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-primary mb-4">{t.solutions.pageTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.solutions.pageDescription}</p>
        </div>

        {/* Featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.href} className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-accent-foreground" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{s.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5 mt-4">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={s.href}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    {t.solutions.learnMore}
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Secondary tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {secondary.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-primary text-sm mb-1.5">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
