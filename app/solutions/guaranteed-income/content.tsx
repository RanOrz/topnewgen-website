"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Percent, Shield, TrendingUp } from "lucide-react"

const copy = {
  en: {
    badge: "Solutions",
    heroTitle: "Guaranteed Income (Annuities)",
    heroDesc:
      "The greatest financial risk in retirement is longevity risk — outliving your money. An annuity is the only financial product that can guarantee lifetime income. Whether you live to 80 or 100, the insurance company will keep paying, giving you true peace of mind in your golden years.",
    whatTitle: "What Is a Retirement Annuity?",
    whatP1:
      "An annuity is a financial contract provided by an insurance company. After you deposit a sum of money, the insurer agrees to make regular payments to you according to agreed-upon terms — either for a specific period or for the rest of your life.",
    whatP2:
      "The core value of an annuity lies in its \"guarantee.\" Unlike stocks, mutual funds, or other investment vehicles, qualifying annuity products carry the insurer's contractual guarantee that your income will not be interrupted by a market crash or unexpectedly long life.",
    whatP3:
      "In retirement planning, annuities are often referred to as a \"personal pension,\" supplementing Social Security and employer retirement plans (401k, 403b) to form the \"three-legged stool\" of retirement income — giving you a truly worry-free retirement.",
    card1Title: "Eliminate Longevity Risk",
    card1Desc:
      "A lifetime annuity ensures your income never stops, no matter how long you live. It is the only effective protection against outliving your money.",
    card2Title: "Predictable, Stable Income",
    card2Desc:
      "Fixed annuities provide fully predictable monthly income, letting you plan your retirement expenses precisely without worrying about market fluctuations affecting your cash flow.",
    card3Title: "Tax-Deferred Growth",
    card3Desc:
      "Funds inside an annuity contract grow on a tax-deferred basis. No income tax is owed until withdrawals begin, helping accelerate asset accumulation.",
    typesTitle: "Types of Annuities",
    typesDesc:
      "Different annuities suit different retirement needs. Understanding each type helps you choose the right fit:",
    annuityTypes: [
      {
        title: "Fixed Annuity",
        tag: "Safe & Stable",
        desc: "The insurer provides guaranteed growth at a fixed rate (typically higher than bank CDs) and pays a fixed amount during the income phase. Both principal and interest are guaranteed by the insurer — the most conservative and stable annuity option.",
        pros: ["Guaranteed fixed rate of growth", "Principal is protected from loss", "Predictable income amount", "Ideal for conservative retirees"],
        suitFor: "Near or already retired, low risk tolerance, seeking certainty",
      },
      {
        title: "Fixed Indexed Annuity (FIA)",
        tag: "Balanced Growth",
        desc: "Growth potential is linked to a stock market index (such as the S&P 500), capturing a portion of market gains while a 0% floor prevents principal loss when markets decline. Balances protection with growth — one of the most popular annuity types today.",
        pros: ["Linked to market index for growth potential", "Principal protected when markets fall", "Can add a lifetime income rider", "Higher potential return than fixed annuity"],
        suitFor: "Seeking both protection and growth, 10–20 years from retirement, moderate risk tolerance",
      },
      {
        title: "Single Premium Immediate Annuity (SPIA)",
        tag: "Immediate Income",
        desc: "After a single lump-sum premium payment, the insurer begins paying income immediately (typically within 30 days to 12 months). Ideal for retirees who want to convert assets into a stable income stream right away.",
        pros: ["Income starts immediately", "Choose lifetime or fixed-period payments", "Can include a joint-life option to cover a spouse", "Simple and easy — no ongoing management needed"],
        suitFor: "Already retired, holding a large lump sum, need immediate income",
      },
      {
        title: "Deferred Income Annuity (DIA)",
        tag: "Deferred Payments",
        desc: "You deposit money today and agree to start receiving income at a future age (e.g., 75 or 80). Ideal for retirees who want to lock in income protection for advanced age — acting as longevity insurance.",
        pros: ["Lock in future income to address longevity risk", "Same premium buys more future income", "Certainty of income in later years", "Acts as a longevity protection layer in retirement planning"],
        suitFor: "Concerned about longevity risk, want to ensure uninterrupted income after age 80",
      },
    ],
    suitForLabel: "Best for:",
    coreTitle: "Core Advantages of Annuities",
    coreBenefits: [
      "Guaranteed lifetime income — you can never outlive it",
      "Eliminates the greatest retirement risks: longevity risk and market risk",
      "Tax-deferred growth accelerates asset accumulation",
      "Fixed or index-linked growth — no active investment management required",
      "Can include a joint-life option to protect a spouse's lifetime income",
      "Can add a death benefit to pass remaining value to heirs",
      "Indexed annuities protect principal when markets decline",
      "Flexible payout options: lump sum, monthly, quarterly, or annual",
      "Some annuities allow early withdrawal of a percentage for emergencies",
      "Provides a stable income foundation in retirement, supplementing Social Security and 401(k)",
    ],
    exampleTitle: "Retirement Income Planning Example",
    exampleDesc:
      "Consider a 60-year-old pre-retiree who puts $300,000 into a Fixed Indexed Annuity with a Guaranteed Lifetime Withdrawal Benefit (GLWB) rider and begins withdrawals at age 65:",
    exampleItems: [
      { label: "Monthly Guaranteed Income", value: "$1,800 – $2,500", note: "Varies by insurer and rider terms" },
      { label: "Annual Guaranteed Income", value: "$21,600 – $30,000", note: "Continues for life, unaffected by markets" },
      { label: "Income Guarantee Period", value: "Lifetime (age 100+)", note: "Even if account balance runs to zero" },
      { label: "Spouse Protection", value: "Joint income option available", note: "Continues after spouse's passing" },
    ],
    exampleNote: "* The above is an illustrative estimate; actual amounts vary by insurer product and individual circumstances.",
    sourcesTitle: "Building Multiple Retirement Income Streams",
    sources: [
      {
        title: "Social Security",
        desc: "The government-provided basic retirement income, calculated based on work history and tax contributions. A strategic approach is to delay claiming until age 70 to maximize lifetime benefits.",
        note: "Government guaranteed, inflation-adjusted",
      },
      {
        title: "Retirement Savings (401k / IRA)",
        desc: "Employer-sponsored retirement plans and individual retirement accounts offering tax-deferred growth. Requires self-directed investment management; market volatility may affect available balance.",
        note: "Self-managed, subject to market risk",
      },
      {
        title: "Annuity Income",
        desc: "A guaranteed income stream provided by an insurance company, supplementing the uncertainty of Social Security and retirement accounts. Ensures basic living expenses are covered reliably, freeing other assets for growth and enjoyment.",
        note: "Insurance company guaranteed, lifetime payments",
      },
    ],
    sourcesFooter:
      "An ideal retirement plan combines all three income sources. The guaranteed income layer from an annuity ensures stable coverage for day-to-day expenses, while the remaining assets can be allocated for growth, enjoyment, and legacy — achieving true financial freedom in retirement.",
    ctaTitle: "Build a Guaranteed Foundation for Your Retirement Income",
    ctaDesc:
      "Annuity products and rider options vary enormously and require expert analysis to find the right fit. Our retirement planning advisors will design the optimal annuity strategy tailored to your age, assets, income needs, and risk tolerance.",
    ctaButton: "Schedule a Free Consultation",
  },
  zh: {
    badge: "保障方案",
    heroTitle: "保證收入（退休年金）",
    heroDesc:
      "退休後最大的財務風險是「長壽風險」—活得比錢還久。年金（Annuity）是唯一能夠保證您終身領取收入的金融產品，無論您活到80歲還是100歲，保險公司都會持續支付，讓您的退休生活真正無後顧之憂。",
    whatTitle: "什麼是退休年金？",
    whatP1:
      "年金（Annuity）是一種由保險公司提供的金融合約。您將一筆資金交付給保險公司後，保險公司承諾按照約定的條件，定期支付您一筆固定或變動金額的收入，這個收入可以持續一段特定期間，或者直到您終老為止。",
    whatP2:
      "年金的核心價值在於它的「保證」二字。與股票、共同基金或其他投資工具不同，符合資格的年金產品提供保險公司的契約保證，確保您的收入不會因市場崩潰或個人壽命超預期而中斷。",
    whatP3:
      "在退休規劃中，年金通常被視為「個人養老金」，補充社會安全福利金（Social Security）和企業退休計劃（401k、403b），共同構成退休收入的「三腳凳」，讓退休生活財務無憂。",
    card1Title: "消除長壽風險",
    card1Desc:
      "終身年金確保無論您活多久，收入都不會中斷。這是應對「活得比錢還久」唯一有效的保障工具。",
    card2Title: "可預期的穩定收入",
    card2Desc:
      "固定年金提供完全可預期的月收入，讓您能夠精確規劃退休生活開銷，不必擔心市場波動影響收入。",
    card3Title: "稅收遞延成長",
    card3Desc:
      "年金帳戶內的資金以稅收遞延方式成長，在取款前無需繳納所得稅，有助於加速資產累積。",
    typesTitle: "年金種類介紹",
    typesDesc:
      "不同種類的年金適合不同的退休需求，了解各類年金的特點，有助於選擇最適合您的方案：",
    annuityTypes: [
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
    ],
    suitForLabel: "適合族群：",
    coreTitle: "年金的核心優勢",
    coreBenefits: [
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
    ],
    exampleTitle: "退休收入規劃示例",
    exampleDesc:
      "以一位60歲準退休人士為例，投入$300,000至指數型年金，附加終身收入附約（GLWB），在65歲開始領取：",
    exampleItems: [
      { label: "每月保證收入", value: "$1,800 - $2,500", note: "視保險公司和附約條款" },
      { label: "每年保證收入", value: "$21,600 - $30,000", note: "終身持續，不受市場影響" },
      { label: "收入保障期間", value: "終身（至百歲以上）", note: "無論帳戶餘額是否用盡" },
      { label: "配偶保障", value: "可加入聯合收入選項", note: "配偶身故後繼續領取" },
    ],
    exampleNote: "* 以上為示例估算，實際金額依保險公司產品和個人情況而異。",
    sourcesTitle: "建立多元退休收入來源",
    sources: [
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
    ],
    sourcesFooter:
      "理想的退休規劃應結合以上三種收入來源。年金提供的保證收入層，讓您的日常生活費用有穩定保障，其餘資產則可用於成長、享受和傳承，實現財務自由的退休生活。",
    ctaTitle: "讓退休收入有保障的基礎",
    ctaDesc:
      "不同的年金產品和附約選項差異極大，需要專業分析才能找到最適合您的方案。我們的退休規劃顧問將根據您的年齡、資產、收入需求和風險承受度，為您量身設計最佳的年金策略。",
    ctaButton: "預約免費諮詢",
  },
}

export function GuaranteedIncomeContent() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Percent className="w-4 h-4" />
              {t.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* What is Annuity */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">{t.whatTitle}</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>{t.whatP1}</p>
                <p>{t.whatP2}</p>
                <p>{t.whatP3}</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: t.card1Title, desc: t.card1Desc, Icon: Shield },
                { title: t.card2Title, desc: t.card2Desc, Icon: TrendingUp },
                { title: t.card3Title, desc: t.card3Desc, Icon: Percent },
              ].map((item, i) => {
                const Icon = item.Icon
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
            <h2 className="text-3xl font-bold text-primary mb-4">{t.typesTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.typesDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.annuityTypes.map((type, i) => (
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
                  <span className="font-semibold text-primary">{t.suitForLabel}</span>
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
              <h2 className="text-3xl font-bold text-primary mb-6">{t.coreTitle}</h2>
              <ul className="space-y-4">
                {t.coreBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6">{t.exampleTitle}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {t.exampleDesc}
              </p>
              <div className="space-y-4">
                {t.exampleItems.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
                    <div>
                      <div className="font-medium text-primary text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.note}</div>
                    </div>
                    <div className="font-bold text-accent-foreground text-sm text-right">{item.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">{t.exampleNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Income Sources */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">{t.sourcesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.sources.map((source, i) => (
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
              {t.sourcesFooter}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">{t.ctaTitle}</h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg rounded-full">
              {t.ctaButton}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
