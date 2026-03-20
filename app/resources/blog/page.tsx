import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { CalendarDays, ArrowRight, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "保險知識部落格 | 新睿保險集團",
  description:
    "新睿保險集團保險知識部落格，提供生前福利、退休規劃、免稅收入、教育基金等深度文章，幫助您全面了解人壽保險的多元功能。",
}

const blogPosts = [
  {
    title: "什麼是生前福利？",
    date: "2025年11月15日",
    category: "人壽保險基礎",
    excerpt:
      "許多人認為人壽保險只有在被保人身故後才能發揮作用，但現代壽險產品中的「生前福利」（Living Benefits）條款已徹底改變這一認知。本文將深入解析生前福利的種類、觸發條件以及如何在罹患重大疾病時提前領取保險金，讓您在最需要的時刻獲得財務支援。",
    href: "#",
  },
  {
    title: "如何為退休規劃免稅收入",
    date: "2025年10月28日",
    category: "退休規劃",
    excerpt:
      "退休後的收入來源是否需要繳稅，直接影響您的實際生活品質。透過指數型萬能壽險（IUL）建立的現金價值，可以在退休後以保單貸款方式提領，實現真正的免稅收入。本文將帶您了解這一策略的運作原理、優勢與注意事項。",
    href: "#",
  },
  {
    title: "人壽保險的6大誤解",
    date: "2025年9月10日",
    category: "保險觀念",
    excerpt:
      "「我還年輕，不需要壽險」、「壽險太貴買不起」、「雇主提供的保險已經夠用」……這些常見的誤解讓許多家庭在關鍵時刻失去應有的保障。本文將逐一破解六大人壽保險迷思，幫助您重新評估自身的保障缺口。",
    href: "#",
  },
  {
    title: "大學教育基金規劃指南",
    date: "2025年8月5日",
    category: "教育基金",
    excerpt:
      "大學學費逐年攀升，越早開始規劃子女的教育基金，所需的每月儲蓄金額就越少。除了傳統的529計劃，人壽保險的現金價值也是一種靈活且具稅務優惠的教育儲蓄工具。本文將比較兩種方式的優缺點，協助您做出最適合的選擇。",
    href: "#",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">保險知識部落格</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              深入淺出的保險知識，涵蓋人壽保險、退休規劃、教育基金及財富傳承等主題，幫助您做出明智的財務決策。
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                {/* Card color bar */}
                <div className="h-1.5 bg-accent w-full" />
                <div className="p-8 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-foreground bg-accent/10 px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarDays className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-primary mb-3 leading-snug">{post.title}</h2>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{post.excerpt}</p>

                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-accent-foreground font-semibold hover:gap-3 transition-all duration-200 mt-auto"
                  >
                    閱讀更多
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">獲取最新保險知識</h2>
          <p className="text-muted-foreground text-lg mb-2 leading-relaxed">
            想了解更多關於人壽保險的知識，或有具體的保障問題需要解答？歡迎聯繫我們的專業顧問，獲得個人化的諮詢服務。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-full text-base mt-6 transition-colors duration-200"
          >
            預約免費諮詢
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
