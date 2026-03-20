import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, GraduationCap, Percent, Wallet, Stethoscope, FileText, CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "保障方案 | 新睿保險集團",
  description:
    "新睿保險集團提供全面的人壽保險保障方案，包括人壽保險、大學教育基金、保證收入年金、免稅退休規劃、長期護理及遺產規劃，幫助您的家庭實現財務安全。",
}

const solutions = [
  {
    icon: Shield,
    title: "人壽保險",
    description:
      "透過含生前福利的人壽保險，不僅在身故時為家人提供免稅理賠保障，更可在罹患重大疾病、慢性病或末期疾病時提前領取保險金，同時累積現金價值以備不時之需。",
    href: "/solutions/life-insurance",
    highlights: ["身故理賠保護家人", "生前福利提前領取", "現金價值累積"],
  },
  {
    icon: GraduationCap,
    title: "大學教育基金",
    description:
      "利用人壽保險的現金價值為子女的大學教育儲蓄，享受稅收優惠成長、不影響獎學金資格，靈活提領用於教育費用，是傳統529計劃的絕佳補充方案。",
    href: "/solutions/college-funding",
    highlights: ["稅收優惠成長", "不影響獎學金申請", "靈活提領使用"],
  },
  {
    icon: Percent,
    title: "保證收入（退休年金）",
    description:
      "透過固定型或指數型年金，確保退休後享有穩定可預期的終身收入流，無論市場漲跌，都能獲得保證支付，讓退休生活無後顧之憂。",
    href: "/solutions/guaranteed-income",
    highlights: ["終身收入保證", "市場下跌保護", "靈活領取選項"],
  },
  {
    icon: Wallet,
    title: "免稅退休規劃",
    description:
      "透過指數型萬能壽險（IUL）建立免稅退休收入來源，現金價值享有市場指數連結成長潛力，同時設有下跌保護，提款時享有稅收優惠。",
    href: "/solutions/tax-free-retirement",
    highlights: ["免稅提領策略", "指數連結成長", "市場下跌保護"],
  },
  {
    icon: Stethoscope,
    title: "長期護理",
    description:
      "長期護理費用逐年攀升，透過長期護理保險保護您辛苦累積的資產，涵蓋居家護理、輔助生活機構及護理之家等費用，維護您的財務獨立性。",
    href: "/solutions/long-term-care",
    highlights: ["居家護理保障", "機構照護費用", "資產保護規劃"],
  },
  {
    icon: FileText,
    title: "遺產規劃",
    description:
      "利用人壽保險作為遺產規劃的核心工具，免稅轉移財富給下一代，應對遺產稅負擔，確保您辛苦建立的財富能夠按照您的意願完整傳承。",
    href: "/solutions/estate-planning",
    highlights: ["免稅財富轉移", "遺產稅規劃", "跨代財富傳承"],
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              全面的保險保障方案
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              新睿保險集團提供量身定制的全方位保障解決方案。無論是保護家人的財務安全、為退休生活做準備，還是規劃子女的教育基金與財富傳承，我們都能為您的每一個人生階段提供最適合的保障策略。
            </p>
            <p className="mt-4 text-lg text-primary-foreground/70 leading-relaxed">
              我們的獨立代理人團隊擁有超過20年的業務經驗，與多家頂級保險公司合作，為您比較最優方案，確保您獲得最符合需求的保障。
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">選擇適合您的保障方案</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              每個家庭的需求都不同，我們提供六大核心保障方案，涵蓋人生各個重要面向。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-accent-foreground" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent-foreground flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={solution.href} className="mt-2">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group">
                        了解更多
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why NewGen Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">為什麼選擇新睿保險集團？</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              作為獨立保險代理機構，我們的首要任務是為您找到最好的方案，而非侷限於單一保險公司的產品。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "獨立代理", desc: "與多家頂級保險公司合作，為您比較最優惠的方案和費率。" },
              { title: "20年經驗", desc: "擁有超過20年業務經驗，服務超過3,000個家庭，值得信賴。" },
              { title: "中文服務", desc: "全程中文溝通，讓您清晰了解保單條款，無語言障礙。" },
              { title: "量身定制", desc: "根據您的家庭狀況、財務目標與預算，提供個人化的保障建議。" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-secondary">
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">立即開始您的保障規劃</h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            不確定哪種方案最適合您？我們的專業顧問將為您進行免費諮詢，分析您的需求並推薦最合適的保障組合。
          </p>
          <Link href="/company/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg rounded-full">
              預約免費諮詢
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
