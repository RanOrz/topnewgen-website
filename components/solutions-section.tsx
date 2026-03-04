"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Percent, Stethoscope, GraduationCap, Wallet, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const solutions = [
  {
    icon: Shield,
    title: "人壽保險",
    description: "通過全面的人壽保險理賠保障您愛的家人的財務未來。",
  },
  {
    icon: Percent,
    title: "退休年金",
    description: "確保在整個退休期間持續的可預測收入流。",
  },
  {
    icon: Stethoscope,
    title: "長期護理",
    description: "通過全面的長期護理規劃保護您的資產和獨立性。",
  },
  {
    icon: GraduationCap,
    title: "大學教育基金",
    description: "幫助您在平衡其他財務優先事項的同時為子女的教育提供資金的策略性解決方案。",
  },
  {
    icon: Wallet,
    title: "免稅退休",
    description: "建立一個最小化稅收並最大化收入的退休策略。",
  },
  {
    icon: FileText,
    title: "遺產規劃",
    description: "保留您的遺產並確保您的資產按照您的意願分配。",
  },
]

export function SolutionsSection() {
  const { t } = useLanguage()

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
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent-foreground" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2">
                    了解更多
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
