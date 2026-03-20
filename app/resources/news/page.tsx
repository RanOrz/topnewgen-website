import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { CalendarDays, ArrowRight, Megaphone } from "lucide-react"

export const metadata: Metadata = {
  title: "最新消息 | 新睿保險集團",
  description:
    "新睿保險集團最新消息，包含公司公告、服務更新、行業動態及重要通知，幫助您隨時掌握最新資訊。",
}

const newsItems = [
  {
    title: "新睿保險集團正式推出全新客戶服務平台",
    date: "2025年12月1日",
    category: "公司公告",
    body: `新睿保險集團欣然宣布，全新客戶服務平台「NewGen社群」正式上線。此平台為現有客戶提供保單查詢、理賠追蹤、保障回顧預約及教育資源等一站式服務，讓客戶可以隨時隨地輕鬆管理自身的保障計劃。

我們的目標是透過科技提升客戶體驗，讓保險管理變得更加透明、便捷。現有客戶可前往 member.topnewgen.com 登入使用，新客戶在完成投保程序後將收到登入邀請。`,
  },
  {
    title: "新睿保險榮獲2025年度客戶信任獎",
    date: "2025年10月18日",
    category: "公司榮譽",
    body: `我們非常榮幸地宣布，新睿保險集團榮獲2025年度「傑出客戶信任獎」，表彰我們多年來對灣區華人社區在保險服務及財務教育方面的持續貢獻。

此獎項由業界機構根據客戶滿意度、服務透明度及社區參與度等指標評選。新睿保險將持續秉持「以客戶利益為先」的核心理念，提供專業、誠信的保障服務。`,
  },
  {
    title: "2026年度年金利率更新通知",
    date: "2025年9月5日",
    category: "產品更新",
    body: `隨著市場利率環境持續變化，多家合作保險公司已更新2026年度年金產品的保證利率。部分固定型年金產品的年化保證利率有所調整，現為申請此類產品的有利時機。

如您有興趣了解最新年金利率及適合您的退休收入方案，歡迎聯繫我們的專業顧問進行免費諮詢。我們將根據您的退休目標、風險承受度及時間規劃，為您推薦最合適的年金產品。`,
  },
]

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">最新消息</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              掌握新睿保險集團的最新動態、公司公告及行業資訊，讓我們一起與時俱進，共同守護您的家庭財務安全。
            </p>
          </div>
        </div>
      </section>

      {/* News Items */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Left accent bar */}
                  <div className="w-full md:w-1.5 h-1.5 md:h-auto bg-accent flex-shrink-0" />
                  <div className="p-8 flex-1">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-foreground bg-accent/10 px-3 py-1 rounded-full">
                        <Megaphone className="w-3 h-3" />
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-primary mb-4 leading-snug">{item.title}</h2>

                    {item.body.split("\n\n").map((para, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">有任何問題？</h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            如對上述消息有任何疑問，或希望進一步了解相關服務與產品，歡迎隨時與我們聯繫。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-full text-base transition-colors duration-200"
          >
            聯繫我們
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
