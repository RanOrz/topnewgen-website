import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Video, CalendarDays, Clock, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "網絡研討會 | 新睿保險集團",
  description:
    "新睿保險集團網絡研討會，由專業顧問深入講解保險規劃、退休策略及財務安全知識，提升您的理財素養。",
}

const upcomingWebinars = [
  {
    title: "人壽保險入門：如何為家人選擇合適的保障",
    date: "即將推出",
    time: "待定",
    duration: "60 分鐘",
    description:
      "本場研討會將介紹不同類型人壽保險的特點與適用情境，包括定期壽險、終身壽險及指數型萬能壽險（IUL），幫助您了解各類產品的差異，做出符合家庭需求的保障選擇。",
    speaker: "新睿保險資深顧問團隊",
    topics: ["各類壽險產品比較", "如何評估保障金額", "常見投保問題解答"],
  },
  {
    title: "免稅退休收入策略：IUL深度解析",
    date: "即將推出",
    time: "待定",
    duration: "75 分鐘",
    description:
      "本場研討會將深入探討如何利用指數型萬能壽險（IUL）建立免稅退休收入，包含現金價值累積機制、指數連結策略、下跌保護原理及退休提領規劃，適合正在為退休做準備的中壯年族群。",
    speaker: "新睿保險資深財務規劃顧問",
    topics: ["IUL運作原理", "現金價值累積策略", "退休免稅提領規劃"],
  },
  {
    title: "生前福利實戰：當重大疾病來臨時的財務保護",
    date: "即將推出",
    time: "待定",
    duration: "60 分鐘",
    description:
      "透過實際案例，解析生前福利（Living Benefits）條款在重大疾病、慢性病及末期疾病情境下的觸發條件與理賠流程，讓您在面對人生風險時，知道如何善用保單保護家庭財務。",
    speaker: "新睿保險理賠輔導專員",
    topics: ["生前福利觸發條件", "重大疾病理賠流程", "保單規劃建議"],
  },
]

export default function WebinarsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">網絡研討會</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              從專業顧問的角度深入了解保險規劃的每個面向。我們的線上研討會讓您足不出戶，輕鬆獲取最實用的保障知識。
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">即將舉辦的研討會</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我們的研討會系列正在籌備中。請留意最新公告，或聯繫我們以獲取優先通知。
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Left icon column */}
                  <div className="md:w-20 bg-accent/10 flex items-center justify-center p-6 flex-shrink-0">
                    <Video className="w-8 h-8 text-accent-foreground/60" />
                  </div>

                  <div className="p-6 flex-1">
                    {/* Coming Soon Badge */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-bold text-primary leading-snug flex-1">{webinar.title}</h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-secondary border border-border px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        <Clock className="w-3 h-3" />
                        即將推出
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {webinar.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {webinar.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {webinar.speaker}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">{webinar.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {webinar.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="text-xs bg-secondary border border-border text-muted-foreground px-2.5 py-1 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">希望優先收到研討會通知？</h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            聯繫我們，留下您的聯絡資訊，我們將在研討會正式公布時第一時間通知您，確保您不錯過任何學習機會。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-full text-base transition-colors duration-200"
          >
            登記通知我
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
