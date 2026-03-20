import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Calculator, ShieldCheck, GraduationCap, Wallet, ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "保險計算器 | 新睿保險集團",
  description:
    "新睿保險集團提供壽險需求計算器、退休儲蓄計算器及大學教育基金計算器，幫助您評估個人保障需求，制定最合適的財務規劃。",
}

const calculators = [
  {
    icon: ShieldCheck,
    title: "壽險需求計算器",
    description:
      "根據您的家庭收入、負債、生活費用及子女年齡等因素，計算出您所需的人壽保險保障金額。確保在您離開後，家人的生活品質不受影響。",
    features: ["考量家庭月支出", "納入現有負債", "計算教育費用預備金", "評估收入替代需求"],
  },
  {
    icon: Wallet,
    title: "退休儲蓄計算器",
    description:
      "設定您的退休年齡、預期月支出及退休年限，計算需要累積多少退休金，並了解透過指數型萬能壽險（IUL）實現免稅退休收入的可行性。",
    features: ["設定退休目標年齡", "預估退休後月支出", "比較不同儲蓄策略", "模擬免稅提領效益"],
  },
  {
    icon: GraduationCap,
    title: "大學教育基金計算器",
    description:
      "根據子女年齡及目標大學的預估學費，計算每月應儲蓄的金額，並比較529計劃與壽險現金價值兩種方式的長期效益與靈活性。",
    features: ["子女年齡與目標時程", "預估大學四年總費用", "比較529與壽險方案", "計算每月儲蓄金額"],
  },
]

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">保險計算器</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              數字說明一切。使用我們的互動式計算工具，快速評估您的保障需求，為家庭財務安全做出有據可依的規劃決策。
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">規劃工具</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我們的計算器正在開發中，即將推出。在此之前，歡迎聯繫我們的顧問進行一對一的個人化評估。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc, index) => {
              const Icon = calc.icon
              return (
                <Card key={index} className="p-8 bg-card flex flex-col h-full">
                  {/* Coming Soon Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary/50" strokeWidth={2} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-secondary border border-border px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      即將推出
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3">{calc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{calc.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {calc.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calculator className="w-3.5 h-3.5 text-accent-foreground/60 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="w-full text-center py-3 px-4 rounded-lg border border-border bg-secondary text-muted-foreground text-sm font-medium cursor-not-allowed select-none">
                      計算器即將推出
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interim CTA */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              計算器上線前，讓我們親自為您評估
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              我們的專業顧問可以根據您的具體情況進行全面的保障需求分析，提供比線上計算器更精確、更個人化的建議。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-full text-base transition-colors duration-200"
            >
              預約免費需求評估
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
