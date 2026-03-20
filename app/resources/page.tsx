import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { BookOpen, Newspaper, Calculator, Video, Download, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "資源中心 | 新睿保險集團",
  description:
    "新睿保險集團資源中心提供保險知識部落格、最新消息、保險計算器、網絡研討會及可下載資源，幫助您做出明智的保障決策。",
}

const resourceCards = [
  {
    icon: BookOpen,
    title: "保險知識部落格",
    description:
      "深入淺出的保險知識文章，涵蓋生前福利、退休規劃、免稅收入策略、教育基金規劃等主題，幫助您全面了解壽險的多元用途。",
    href: "/resources/blog",
    cta: "瀏覽文章",
  },
  {
    icon: Newspaper,
    title: "最新消息",
    description:
      "了解新睿保險集團的最新動態、公司公告、行業新聞及重要政策變更，讓您隨時掌握最新資訊。",
    href: "/resources/news",
    cta: "查看消息",
  },
  {
    icon: Calculator,
    title: "保險計算器",
    description:
      "使用我們的互動式計算器評估您的壽險需求、退休儲蓄目標及大學教育基金規劃，獲得個人化的保障金額建議。",
    href: "/resources/calculators",
    cta: "使用計算器",
  },
  {
    icon: Video,
    title: "網絡研討會",
    description:
      "參加我們的線上研討會，由專業顧問深入講解保險規劃策略、市場趨勢及財務安全知識，提升您的理財素養。",
    href: "/resources/webinars",
    cta: "查看研討會",
  },
  {
    icon: Download,
    title: "下載資源",
    description:
      "下載我們精心製作的保險指南、白皮書、規劃清單及比較表，隨時隨地查閱重要的保險知識與規劃工具。",
    href: "/resources/downloads",
    cta: "下載資源",
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">資源中心</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              知識是保障您家庭最好的工具。我們提供豐富的教育資源、實用計算器及最新資訊，幫助您在保險規劃上做出最明智的決策。
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">探索我們的資源</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              從入門知識到深度分析，我們的資源庫涵蓋您在保險規劃旅程中所需的一切。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-5 flex-shrink-0">
                    <Icon className="w-8 h-8 text-accent-foreground" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{card.description}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-accent-foreground font-semibold hover:gap-3 transition-all duration-200"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Highlight */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">需要個人化的保障建議？</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              我們的資源能幫助您了解保險的基本概念，但每個家庭的情況都是獨特的。預約免費諮詢，讓我們的專業顧問為您量身規劃最合適的保障方案。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-full text-lg transition-colors duration-200"
            >
              預約免費諮詢
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
