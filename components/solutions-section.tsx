"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Percent, Stethoscope, GraduationCap, Wallet, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

const solutionMeta = [
  { icon: Shield, href: "/solutions/life-insurance", key: "lifeInsurance" as const },
  { icon: Percent, href: "/solutions/guaranteed-income", key: "annuity" as const },
  { icon: Stethoscope, href: "/solutions/long-term-care", key: "longTermCare" as const },
  { icon: GraduationCap, href: "/solutions/college-funding", key: "collegeFunding" as const },
  { icon: Wallet, href: "/solutions/tax-free-retirement", key: "taxFreeRetirement" as const },
  { icon: FileText, href: "/solutions/estate-planning", key: "estatePlanning" as const },
]

export function SolutionsSection() {
  const { t } = useLanguage()

  const solutions = solutionMeta.map(({ icon, href, key }) => ({
    icon,
    href,
    title: t.solutions[key] as string,
    description: t.solutions[`${key}Desc` as keyof typeof t.solutions] as string,
  }))

  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-primary bg-primary">
            <Shield className="w-10 h-10 text-success-foreground" strokeWidth={2.5} />
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">{t.solutions.pageTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.solutions.pageDescription}</p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Card key={solution.href} className="p-8 bg-card hover:shadow-lg transition-shadow h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent-foreground" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  <Link href={solution.href} className="w-full mt-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      {t.solutions.learnMore}
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
