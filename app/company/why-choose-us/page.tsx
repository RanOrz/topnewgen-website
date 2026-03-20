import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Award, Users, Star, Globe, Heart, CheckCircle, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "為什麼選擇我們 | 新睿保險集團",
  description:
    "了解為何超過3,000個家庭選擇新睿保險集團。獨立代理、20年經驗、中英雙語服務、10+頂級保險公司合作，為您提供最客觀、最全面的保障方案。",
}

const differentiators = [
  {
    icon: Shield,
    number: "01",
    title: "獨立代理，客觀無偏",
    highlight: "真正站在您這一邊的顧問",
    description:
      "新睿的顧問是獨立保險代理人，不受任何單一保險公司的限制或配額壓力。我們唯一的任務，就是為您找到最適合的方案。我們可以跨越多家保險公司進行比較，給您最客觀、最公正的建議——這是專屬代理人永遠做不到的。",
    stats: [{ label: "合作頂級保險公司", value: "10+" }],
  },
  {
    icon: Award,
    number: "02",
    title: "20年以上豐富經驗",
    highlight: "經過時間考驗的專業",
    description:
      "自成立以來，新睿保險集團累積超過20年的保險服務經驗。我們親歷了市場的起伏、法規的變化、產品的演進，深刻理解各類人生情境下最適合的保障策略。這份歷練，是我們給每位客戶最堅實的底氣。",
    stats: [{ label: "保險服務年資", value: "20+" }],
  },
  {
    icon: Users,
    number: "03",
    title: "服務超過3,000個家庭",
    highlight: "口碑見證我們的實力",
    description:
      "3,000個家庭的信任，是我們最寶貴的資產。從灣區的華人社區到全美各地的客戶，每一個家庭背後都有一段我們共同走過的保障旅程。他們的口碑相傳，是我們最好的名片，也是我們持續精進的最大動力。",
    stats: [{ label: "服務家庭數", value: "3,000+" }],
  },
  {
    icon: Star,
    number: "04",
    title: "五星級客戶評價",
    highlight: "客戶滿意度是最高標準",
    description:
      "我們在Google、Yelp等平台上持續保持近滿分的客戶評價。客戶的好評不只來自成功投保的結果，更源自整個服務過程中的耐心解說、快速回應與真誠關懷。我們把每一位客戶都當作最重要的家人來對待。",
    stats: [{ label: "平均客戶評分", value: "5.0★" }],
  },
  {
    icon: Globe,
    number: "05",
    title: "中英雙語專業服務",
    highlight: "用您最熟悉的語言溝通",
    description:
      "保險概念本就複雜，語言障礙更容易造成誤解與不必要的損失。新睿的顧問團隊精通普通話、粵語及英語，能夠以您最熟悉的語言詳細說明保單條款、釐清疑慮，確保您在完全理解的前提下做出最適合的決定。",
    stats: [{ label: "服務語言", value: "中英雙語" }],
  },
  {
    icon: Heart,
    number: "06",
    title: "個性化量身定制方案",
    highlight: "沒有一體適用的保障",
    description:
      "每個家庭的財務狀況、保障需求、風險承受能力都不同。我們拒絕千篇一律的套裝方案，堅持透過深入的需求分析，為每位客戶設計真正符合其人生階段、預算與目標的個性化保障組合，讓每一分保費都花在刀刃上。",
    stats: [{ label: "服務理念", value: "量身定制" }],
  },
]

const comparisons = [
  { item: "客觀比較多家保險公司", newgen: true, exclusive: false },
  { item: "不受銷售配額限制", newgen: true, exclusive: false },
  { item: "中英雙語服務", newgen: true, exclusive: false },
  { item: "20年以上豐富經驗", newgen: true, exclusive: false },
  { item: "持續售後服務與保單檢視", newgen: true, exclusive: false },
  { item: "跨保險公司產品組合設計", newgen: true, exclusive: false },
  { item: "獨立客觀的理賠協助", newgen: true, exclusive: false },
]

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">我們的優勢</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              為什麼超過3,000個家庭選擇新睿？
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              在眾多保險選擇中，新睿保險集團憑藉獨立代理的客觀優勢、深厚的專業積累與真誠的服務態度，成為灣區華人家庭最信賴的保障夥伴。
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "年服務經驗" },
              { number: "3,000+", label: "服務家庭數" },
              { number: "10+", label: "合作頂級保險公司" },
              { number: "5.0★", label: "客戶評分" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-primary/70 font-medium mt-1 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">六大核心優勢</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">讓我們與眾不同的關鍵</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              這些不只是口號，而是我們每天在服務中踐行的承諾，也是3,000個家庭選擇我們的真實原因。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.number}
                  className="bg-secondary rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-5 mb-4">
                    <div className="flex-shrink-0">
                      <div className="text-4xl font-black text-primary/10 leading-none mb-2">{item.number}</div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                      <span className="inline-block text-sm font-semibold text-info bg-info/10 px-3 py-1 rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  <div className="mt-5 pt-5 border-t border-border flex gap-6">
                    {item.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">比較優勢</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">獨立代理 vs 專屬代理</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              選擇獨立代理人意味著您能夠獲得真正客觀、以您利益為先的建議，而非受限於單一公司產品的推介。
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl border border-border overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-primary text-primary-foreground">
                <div className="py-4 px-6 font-semibold">比較項目</div>
                <div className="py-4 px-6 font-semibold text-center text-accent">新睿（獨立代理）</div>
                <div className="py-4 px-6 font-semibold text-center opacity-70">專屬代理</div>
              </div>
              {comparisons.map((row, index) => (
                <div
                  key={row.item}
                  className={`grid grid-cols-3 border-t border-border ${index % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}
                >
                  <div className="py-4 px-6 text-sm text-foreground">{row.item}</div>
                  <div className="py-4 px-6 text-center">
                    {row.newgen ? (
                      <CheckCircle className="w-5 h-5 text-success mx-auto" />
                    ) : (
                      <span className="text-muted-foreground text-lg">✗</span>
                    )}
                  </div>
                  <div className="py-4 px-6 text-center">
                    {row.exclusive ? (
                      <CheckCircle className="w-5 h-5 text-success mx-auto" />
                    ) : (
                      <span className="text-muted-foreground text-lg">✗</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">我們的服務流程</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">從諮詢到保障，全程陪伴</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "免費諮詢", desc: "了解您的家庭狀況、財務目標與現有保障缺口" },
              { step: "2", title: "需求分析", desc: "深入分析您的保障需求，量身制定最適合的方案" },
              { step: "3", title: "方案比較", desc: "跨越多家頂級保險公司，比較最優質、最合理的選項" },
              { step: "4", title: "長期守護", desc: "投保後持續跟進，定期檢視保單，確保保障與時俱進" },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-primary mb-2 text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-3/4 w-1/2 h-0.5 bg-border transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            親身體驗新睿的服務差異
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            預約一次免費、無壓力的保障諮詢，讓我們用實際行動告訴您，為什麼新睿是您家庭最值得信賴的保障夥伴。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.topnewgen.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full transition-colors text-lg"
            >
              立即預約免費諮詢
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground font-semibold px-8 py-4 rounded-full transition-colors text-lg"
            >
              聯繫我們
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
