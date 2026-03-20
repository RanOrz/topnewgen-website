import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Wallet, TrendingUp, Shield, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "免稅退休規劃 | 新睿保險集團",
  description:
    "新睿保險集團以指數型萬能壽險（IUL）為核心，幫助您建立免稅退休收入來源。享有市場指數連結成長、0%下跌保護、稅收優惠提款，打造真正的免稅退休生活。",
}

export default function TaxFreeRetirementPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Wallet className="w-4 h-4" />
              保障方案
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              免稅退休規劃
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              大多數退休人士都沒有意識到，從401(k)或傳統IRA提款時需要繳納所得稅，而未來的稅率可能比現在更高。透過指數型萬能壽險（IUL）建立的退休策略，讓您的退休收入真正免稅，保留更多辛苦積累的財富。
            </p>
          </div>
        </div>
      </section>

      {/* The Tax Problem */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">退休稅務問題：一個被忽視的風險</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  許多人努力存入401(k)和傳統IRA，卻沒有充分考慮到退休提款時的稅務影響。這些帳戶提供「稅收遞延」的好處，意思是存入時不課稅，但提取時按當年所得稅率全額課稅。
                </p>
                <p>
                  問題在於，沒有人能預測未來的稅率。歷史上美國的最高所得稅率曾高達90%，如今的稅率在歷史上已算相當低。隨著聯邦債務增加、社安金和醫療保險面臨資金壓力，未來稅率上升的可能性不可忽視。
                </p>
                <p>
                  更重要的是，70歲半後，傳統退休帳戶強制最低提款（RMD）將迫使您提取資金並繳稅，即使您不需要那筆錢。加上社安金可能的課稅問題，高收入退休人士的稅務負擔可能遠超預期。
                </p>
                <p>
                  指數型萬能壽險（IUL）提供了一個不同的路徑：現金價值在保單內以稅收遞延方式成長，通過「保單貸款」方式取用時不觸發所得稅，讓您享有真正的免稅退休收入。
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary mb-4">退休稅務比較</h3>
                <div className="space-y-3">
                  {[
                    { type: "傳統401(k)/IRA", tax: "提款時按普通所得稅率全額課稅", color: "text-red-500" },
                    { type: "Roth IRA", tax: "提款免稅，但年繳上限低（2024年為$7,000）", color: "text-yellow-600" },
                    { type: "IUL保單貸款", tax: "以貸款方式提取，不觸發所得稅", color: "text-green-600" },
                    { type: "社安金", tax: "高收入者最多85%需課稅", color: "text-red-500" },
                    { type: "Roth 401(k)", tax: "提款免稅，但雇主匹配部分仍課稅", color: "text-yellow-600" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-card rounded-lg">
                      <div className="min-w-[140px] font-medium text-sm text-primary">{item.type}</div>
                      <div className={`text-sm ${item.color}`}>{item.tax}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is IUL */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">什麼是指數型萬能壽險（IUL）？</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              指數型萬能壽險（Indexed Universal Life, IUL）是一種永久型壽險，同時具備保障和儲蓄功能，被越來越多財務顧問視為免稅退休規劃的核心工具：
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "終身壽險保障",
                desc: "提供終身的死亡保障，身故時受益人可獲得免所得稅的理賠金，同時含生前福利條款。",
              },
              {
                icon: TrendingUp,
                title: "指數連結成長",
                desc: "現金價值成長連結S&P 500、納斯達克等市場指數，享有市場上漲時的部分收益（上限通常為8%-14%）。",
              },
              {
                icon: Wallet,
                title: "0%下跌保護",
                desc: "市場下跌時，現金價值的下跌底限（Floor）通常為0%，確保本金不因市場崩潰而受損。",
              },
              {
                icon: CheckCircle2,
                title: "稅收優惠提款",
                desc: "以保單貸款方式取用現金價值，不觸發所得稅。退休期間每年借貸，即可獲得免稅收入。",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Card key={i} className="p-6 bg-card text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How IUL Works for Retirement */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">IUL免稅退休策略運作方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                phase: "累積期（工作期間）",
                steps: [
                  "購買IUL保單，設計以最大化現金價值為目標",
                  "定期繳入保費，超過保費的部分注入現金價值",
                  "現金價值連結指數成長，享有稅收遞延複利效果",
                  "市場下跌年度，現金價值保持不變（0%底限保護）",
                  "累積20至30年後，現金價值達到可觀規模",
                ],
              },
              {
                phase: "領取期（退休期間）",
                steps: [
                  "向保險公司申請保單貸款，取用現金價值",
                  "借貸所得不計入應稅所得，無需申報所得稅",
                  "每年借貸金額由您控制，靈活調整退休收入",
                  "貸款利率通常與帳戶成長率相抵，形成實質免費借貸",
                  "身故時，理賠金扣除未償還貸款後免稅移交受益人",
                ],
              },
            ].map((phase, i) => (
              <Card key={i} className="p-6 bg-secondary">
                <h3 className="font-bold text-primary text-lg mb-4">{phase.phase}</h3>
                <ul className="space-y-3">
                  {phase.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent-foreground text-xs font-bold">{j + 1}</span>
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Example */}
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">免稅退休規劃示例</h3>
            <p className="text-muted-foreground text-sm mb-6 text-center leading-relaxed">
              以一位35歲健康男性為例，每年注入$12,000保費，持續20年至55歲，65歲開始取用現金價值：
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "總繳保費", value: "$240,000", note: "20年 × $12,000" },
                { label: "65歲預估現金價值", value: "$650,000 - $900,000", note: "依市場指數表現" },
                { label: "每年可借貸金額", value: "$40,000 - $60,000", note: "終身可持續" },
                { label: "所得稅", value: "$0", note: "保單貸款不課稅" },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-lg font-bold text-primary">{item.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.note}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center italic">
              * 以上為示例估算，實際結果依保險公司產品、市場表現和個人健康狀況而異。
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">IUL免稅退休規劃的優勢</h2>
              <ul className="space-y-4">
                {[
                  "退休收入以保單貸款方式取用，不計入應稅所得",
                  "現金價值在保單內以稅收遞延方式累積",
                  "連結市場指數，享有市場上漲的成長潛力",
                  "0%下跌底限保護，市場崩潰時本金不受損",
                  "無強制最低提款（RMD）規定，取款完全自主",
                  "不影響社安金課稅的門檻計算",
                  "可同時享有壽險保障和生前福利",
                  "身故理賠金免所得稅移交受益人",
                  "補充401(k)和Roth IRA，建立多元免稅收入層",
                  "保費繳交靈活，可因應收入變化調整",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6">
                <h3 className="font-bold text-primary mb-4">IUL vs Roth IRA 比較</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { feature: "年繳上限", iul: "相對較高（視保費設計）", roth: "$7,000（2024年，50歲以下）" },
                    { feature: "收入限制", iul: "無收入限制", roth: "高收入者受限" },
                    { feature: "提款課稅", iul: "以貸款方式免稅", roth: "合格提款免稅" },
                    { feature: "身故保障", iul: "同時提供壽險保障", roth: "無保障功能" },
                    { feature: "市場保護", iul: "0%下跌底限", roth: "無下跌保護" },
                    { feature: "生前福利", iul: "含重大疾病保障", roth: "無生前福利" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 py-2 border-b border-border last:border-0">
                      <div className="font-medium text-primary text-xs">{row.feature}</div>
                      <div className="text-accent-foreground text-xs">{row.iul}</div>
                      <div className="text-muted-foreground text-xs">{row.roth}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground font-semibold pt-1">
                    <div />
                    <div>IUL</div>
                    <div>Roth IRA</div>
                  </div>
                </div>
              </div>
              <Card className="p-6 bg-accent/10 border-accent">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="font-semibold text-primary">最佳策略：</span>IUL並非要取代401(k)或Roth IRA，而是作為有力補充。建立多層次的免稅收入來源，才能最大化退休時的稅後收入。
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">開始打造您的免稅退休策略</h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            免稅退休規劃越早開始，複利效果越顯著。我們的顧問將根據您的年齡、收入、現有退休帳戶和稅務情況，為您設計最優化的IUL策略，讓退休後的每一分錢都盡可能屬於您。
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
