import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Percent, Shield, TrendingUp, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "保證收入（退休年金）| 新睿保險集團",
  description:
    "新睿保險集團提供固定型及指數型年金方案，為您的退休生活提供終身保證收入，無論市場漲跌，都能享有穩定可預期的收入流，讓退休無後顧之憂。",
}

export default function GuaranteedIncomePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Percent className="w-4 h-4" />
              保障方案
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              保證收入（退休年金）
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              退休後最大的財務風險是「長壽風險」—活得比錢還久。年金（Annuity）是唯一能夠保證您終身領取收入的金融產品，無論您活到80歲還是100歲，保險公司都會持續支付，讓您的退休生活真正無後顧之憂。
            </p>
          </div>
        </div>
      </section>

      {/* What is Annuity */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">什麼是退休年金？</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  年金（Annuity）是一種由保險公司提供的金融合約。您將一筆資金交付給保險公司後，保險公司承諾按照約定的條件，定期支付您一筆固定或變動金額的收入，這個收入可以持續一段特定期間，或者直到您終老為止。
                </p>
                <p>
                  年金的核心價值在於它的「保證」二字。與股票、共同基金或其他投資工具不同，符合資格的年金產品提供保險公司的契約保證，確保您的收入不會因市場崩潰或個人壽命超預期而中斷。
                </p>
                <p>
                  在退休規劃中，年金通常被視為「個人養老金」，補充社會安全福利金（Social Security）和企業退休計劃（401k、403b），共同構成退休收入的「三腳凳」，讓退休生活財務無憂。
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "消除長壽風險",
                  desc: "終身年金確保無論您活多久，收入都不會中斷。這是應對「活得比錢還久」唯一有效的保障工具。",
                  icon: Shield,
                },
                {
                  title: "可預期的穩定收入",
                  desc: "固定年金提供完全可預期的月收入，讓您能夠精確規劃退休生活開銷，不必擔心市場波動影響收入。",
                  icon: TrendingUp,
                },
                {
                  title: "稅收遞延成長",
                  desc: "年金帳戶內的資金以稅收遞延方式成長，在取款前無需繳納所得稅，有助於加速資產累積。",
                  icon: Percent,
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <Card key={i} className="p-6 bg-secondary border-l-4 border-accent">
                    <div className="flex items-start gap-4">
                      <Icon className="w-8 h-8 text-accent-foreground flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Annuities */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">年金種類介紹</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              不同種類的年金適合不同的退休需求，了解各類年金的特點，有助於選擇最適合您的方案：
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "固定型年金（Fixed Annuity）",
                tag: "安全穩定",
                desc: "保險公司以固定利率（通常高於銀行定存）為您的資金提供保證成長，並在領取期間支付固定金額。本金和利息均受保險公司保障，是最保守穩健的年金選擇。",
                pros: ["保證固定利率成長", "本金受保障不虧損", "可預期的收入金額", "適合保守型退休人士"],
                suitFor: "近退休或已退休、風險承受度低、追求確定性",
              },
              {
                title: "指數型年金（Fixed Indexed Annuity, FIA）",
                tag: "平衡成長",
                desc: "成長潛力連結股票市場指數（如S&P 500），享有市場上漲時的部分收益，但設有0%的下跌底限，市場下跌時本金不受損。兼顧保護與成長，是目前最受歡迎的年金類型之一。",
                pros: ["連結市場指數享有成長潛力", "市場下跌時本金受保護", "可附加終身收入附約", "比固定年金更高的潛在回報"],
                suitFor: "希望兼顧保護與成長、距退休10至20年、中等風險承受度",
              },
              {
                title: "即期年金（Immediate Annuity, SPIA）",
                tag: "立即領取",
                desc: "一次性繳入大額保費後，保險公司立即（通常在30天至12個月內）開始定期支付收入。適合已退休、希望立即將資產轉換為穩定收入流的退休人士。",
                pros: ["立即開始領取收入", "可選擇終身領取或固定期間", "可設定聯合被保人保障配偶", "簡單易懂，無須管理"],
                suitFor: "已退休、持有大額儲蓄、需要立即收入來源",
              },
              {
                title: "遞延收入年金（Deferred Income Annuity, DIA）",
                tag: "延後領取",
                desc: "今日繳入資金，約定在未來特定年齡（如75歲或80歲）才開始領取收入。適合希望確保高齡時仍有收入保障的退休人士，作為長壽保障的「保險」。",
                pros: ["鎖定未來收入，應對長壽風險", "相同資金可換得更高的未來收入", "為晚年提供收入確定性", "作為退休規劃的長壽保障層"],
                suitFor: "擔心長壽風險、希望確保80歲以後收入不中斷",
              },
            ].map((type, i) => (
              <Card key={i} className="p-6 bg-card">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-primary">{type.title}</h3>
                  <span className="text-xs font-bold text-accent-foreground bg-accent/10 px-3 py-1 rounded-full flex-shrink-0">{type.tag}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{type.desc}</p>
                <ul className="space-y-2 mb-4">
                  {type.pros.map((pro, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{pro}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-secondary rounded-lg px-4 py-2 text-xs">
                  <span className="font-semibold text-primary">適合族群：</span>
                  <span className="text-muted-foreground"> {type.suitFor}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">年金的核心優勢</h2>
              <ul className="space-y-4">
                {[
                  "終身收入保證，無論壽命多長都不會用盡",
                  "消除退休後最大的長壽風險與市場風險",
                  "資金以稅收遞延方式成長，有效加速累積",
                  "固定或指數連結成長，無需主動管理投資",
                  "可設定聯合被保人，保障配偶終身收入",
                  "可附加身故受益人保障，讓家人繼承剩餘金額",
                  "指數型年金市場下跌時本金不受損",
                  "靈活領取選項：一次性、按月、按季或按年",
                  "部分年金允許在緊急情況下提前提取一定比例",
                  "作為退休收入的穩定基礎，補充社安金和401(k)",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6">退休收入規劃示例</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                以一位60歲準退休人士為例，投入$300,000至指數型年金，附加終身收入附約（GLWB），在65歲開始領取：
              </p>
              <div className="space-y-4">
                {[
                  { label: "每月保證收入", value: "$1,800 - $2,500", note: "視保險公司和附約條款" },
                  { label: "每年保證收入", value: "$21,600 - $30,000", note: "終身持續，不受市場影響" },
                  { label: "收入保障期間", value: "終身（至百歲以上）", note: "無論帳戶餘額是否用盡" },
                  { label: "配偶保障", value: "可加入聯合收入選項", note: "配偶身故後繼續領取" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
                    <div>
                      <div className="font-medium text-primary text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.note}</div>
                    </div>
                    <div className="font-bold text-accent-foreground text-sm text-right">{item.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">* 以上為示例估算，實際金額依保險公司產品和個人情況而異。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Income Sources */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">建立多元退休收入來源</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "社會安全福利金",
                desc: "美國政府提供的基礎退休收入，基於工作年資和繳稅記錄計算。建議策略性延遲申領至70歲以最大化終身福利。",
                note: "政府保障，通膨調整",
              },
              {
                title: "退休儲蓄帳戶（401k/IRA）",
                desc: "雇主贊助退休計劃和個人退休帳戶，提供稅收遞延成長。需自行管理投資，市場波動可能影響可用餘額。",
                note: "需自行管理，市場風險",
              },
              {
                title: "年金收入",
                desc: "保險公司提供的保證收入流，補充社安金和退休帳戶的不確定性。確保基本生活費用有穩定可靠的保障，讓其他資產更靈活配置。",
                note: "保險公司保證，終身領取",
              },
            ].map((source, i) => (
              <div key={i} className="relative">
                <Card className="p-6 bg-card h-full">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-primary mb-3">{source.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{source.desc}</p>
                  <div className="text-xs text-accent-foreground bg-accent/10 px-3 py-1 rounded-full inline-block">{source.note}</div>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              理想的退休規劃應結合以上三種收入來源。年金提供的保證收入層，讓您的日常生活費用有穩定保障，其餘資產則可用於成長、享受和傳承，實現財務自由的退休生活。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">讓退休收入有保障的基礎</h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            不同的年金產品和附約選項差異極大，需要專業分析才能找到最適合您的方案。我們的退休規劃顧問將根據您的年齡、資產、收入需求和風險承受度，為您量身設計最佳的年金策略。
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
