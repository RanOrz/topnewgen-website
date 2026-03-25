"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Wallet, TrendingUp, Shield, ArrowRight } from "lucide-react"

const copy = {
  en: {
    badge: "Solutions",
    heroTitle: "Tax-Free Retirement Planning",
    heroDesc:
      "Most people are familiar with 401(k)s and IRAs for retirement savings — but these accounts create a significant future tax liability. Indexed Universal Life Insurance (IUL) offers a powerful alternative: build a substantial, tax-free retirement income stream that grows linked to market indexes, with built-in downside protection.",
    whatTitle: "What Is Tax-Free Retirement Planning with IUL?",
    whatP1:
      "Indexed Universal Life Insurance (IUL) is a type of permanent life insurance whose cash value growth is linked to the performance of a stock market index (such as the S&P 500). Unlike investing directly in the market, IUL provides a \"floor\" (typically 0%) that protects your principal when the market falls, while still allowing you to benefit when the market rises.",
    whatP2:
      "The key to tax-free retirement planning is using the policy's cash value strategically. Because IUL cash value grows tax-deferred and policy loans are generally not considered taxable income, you can access your accumulated wealth in retirement without triggering income taxes — a fundamentally different and potentially more efficient structure than traditional retirement accounts.",
    whatP3:
      "When structured correctly by an experienced advisor, an IUL policy can provide decades of tax-deferred accumulation followed by years or even decades of tax-free income in retirement — all while maintaining a death benefit that protects your family.",
    card1Title: "Tax-Free Income in Retirement",
    card1Desc:
      "Policy loans from IUL cash value are generally not subject to income tax, allowing you to create a retirement income stream that doesn't increase your tax bracket or affect Social Security taxation.",
    card2Title: "Index-Linked Growth with Downside Protection",
    card2Desc:
      "Cash value growth is linked to a market index, capturing upside potential. A 0% floor ensures your account never loses value due to market downturns — you participate in gains, not losses.",
    card3Title: "Flexible Access and Control",
    card3Desc:
      "Unlike 401(k)s and IRAs, IUL has no required minimum distributions (RMDs), no contribution limits based on income, and no penalties for accessing funds before age 59½ (when structured properly).",
    howTitle: "How Does IUL Tax-Free Retirement Work?",
    howDesc:
      "Building a tax-free retirement income stream through IUL follows a clear multi-phase strategy:",
    steps: [
      {
        step: "Phase 1",
        title: "Design & Fund the Policy",
        desc: "Work with an advisor to design an IUL policy optimized for cash value accumulation (not just the death benefit). Fund it consistently with after-tax premium dollars over the accumulation years.",
      },
      {
        step: "Phase 2",
        title: "Tax-Deferred Growth",
        desc: "Cash value grows linked to a market index. In positive years, your account is credited based on index performance (subject to caps and participation rates). In negative market years, your floor of 0% means no loss — gains are locked in annually.",
      },
      {
        step: "Phase 3",
        title: "Access Cash Value Tax-Free",
        desc: "In retirement, take systematic policy loans against the cash value. Since these are loans (not withdrawals), they are generally not taxable income. The policy's internal returns continue to work for you even on borrowed amounts.",
      },
      {
        step: "Phase 4",
        title: "Legacy & Protection",
        desc: "The death benefit continues to protect your family throughout. When you pass away, any outstanding loan balance is settled against the death benefit, and remaining proceeds pass to your beneficiaries income-tax-free.",
      },
    ],
    comparisonTitle: "IUL vs. Traditional Retirement Accounts",
    comparisonRows: [
      { feature: "Tax on Contributions", iul: "After-tax (no deduction)", traditional: "Pre-tax (401k) / After-tax (Roth)" },
      { feature: "Tax on Growth", iul: "Tax-deferred", traditional: "Tax-deferred" },
      { feature: "Tax on Withdrawals", iul: "Tax-free (via policy loans)", traditional: "Taxed as ordinary income (401k/IRA)" },
      { feature: "Required Minimum Distributions", iul: "None", traditional: "Required starting at age 73" },
      { feature: "Contribution Limits", iul: "No income-based limits (subject to MEC rules)", traditional: "Annual IRS limits apply" },
      { feature: "Market Downside Risk", iul: "Protected by 0% floor", traditional: "Full market risk" },
      { feature: "Death Benefit", iul: "Yes — tax-free to beneficiaries", traditional: "None" },
    ],
    comparisonLabelIUL: "IUL",
    comparisonLabelTraditional: "401k / IRA",
    benefitsTitle: "Core Advantages of IUL Tax-Free Retirement",
    benefits: [
      "Retirement income accessed as policy loans is generally not subject to income tax",
      "No required minimum distributions (RMDs) — you control when and how much to take",
      "Cash value protected from market losses by a 0% annual floor",
      "Upside growth potential linked to S&P 500 or other indexes",
      "Gains are typically locked in annually — you don't give back gains when the market drops",
      "Death benefit provides family protection throughout the policy's life",
      "No income limits on contributions (unlike Roth IRAs)",
      "Cash value can be accessed at any age without early withdrawal penalties (when structured properly)",
      "Can serve as a supplement or alternative to 401(k) for high earners who have maxed out other accounts",
      "Policy can include Living Benefits riders for critical, chronic, or terminal illness coverage",
    ],
    whoTitle: "Who Is IUL Tax-Free Retirement Best For?",
    whoItems: [
      {
        icon: TrendingUp,
        title: "High Earners Who Have Maxed Out Other Accounts",
        desc: "Once your 401(k) and IRA contributions are maxed out, IUL provides an additional tax-advantaged bucket with no income-based contribution limits.",
      },
      {
        icon: Shield,
        title: "Those Concerned About Future Tax Rates",
        desc: "If you believe income tax rates will be higher when you retire, having a source of tax-free retirement income provides valuable diversification from tax-deferred accounts.",
      },
      {
        icon: Wallet,
        title: "Business Owners and Self-Employed Individuals",
        desc: "Entrepreneurs who don't have access to employer-sponsored plans or want additional tax-efficient strategies beyond SEP-IRA can use IUL as a flexible, tax-advantaged savings vehicle.",
      },
    ],
    importantTitle: "Important Considerations",
    importantNote:
      "IUL is a complex financial product that must be designed and funded properly to achieve optimal results. Underfunding, excessive insurance charges, or early termination can significantly reduce effectiveness. Work with an experienced independent advisor to ensure the policy is structured correctly for your specific goals.",
    importantLabel: "Important:",
    exampleTitle: "IUL Retirement Income Example",
    exampleDesc:
      "Consider a 40-year-old who funds an IUL policy with $2,000/month ($24,000/year) for 20 years, then begins taking tax-free income at age 65:",
    exampleItems: [
      { label: "Total Premiums Paid", value: "$480,000", note: "Over 20 years of consistent funding" },
      { label: "Estimated Cash Value at 65", value: "$900,000 – $1,200,000", note: "Based on historical index performance (not guaranteed)" },
      { label: "Annual Tax-Free Income", value: "$50,000 – $80,000", note: "Via policy loans, may continue for 20–30+ years" },
      { label: "Death Benefit Throughout", value: "Protected", note: "Family coverage maintained throughout the policy" },
    ],
    exampleNote: "* Illustration purposes only. Actual results depend on policy design, index performance, interest rates, and individual circumstances. Consult an advisor for personalized projections.",
    ctaTitle: "Build Your Tax-Free Retirement Income Strategy",
    ctaDesc:
      "A tax-free retirement strategy using IUL requires careful design and expert guidance. Our advisors will analyze your current savings, income, tax situation, and retirement goals to design an IUL strategy that maximizes your tax-free income in retirement.",
    ctaButton: "Schedule a Free Consultation",
  },
  zh: {
    badge: "保障方案",
    heroTitle: "免稅退休規劃",
    heroDesc:
      "大多數人熟悉401(k)和IRA作為退休儲蓄工具，但這些帳戶在未來退休時會產生大量的稅務負擔。指數型萬能壽險（IUL）提供了一個強大的替代方案：建立豐厚的免稅退休收入來源，現金價值連結市場指數成長，同時設有下跌保護機制。",
    whatTitle: "什麼是透過IUL的免稅退休規劃？",
    whatP1:
      "指數型萬能壽險（IUL）是一種永久型壽險，其現金價值的成長連結股票市場指數（如S&P 500）的表現。與直接投資市場不同，IUL設有「底限」（通常為0%），在市場下跌時保護您的本金，同時讓您在市場上漲時享有收益。",
    whatP2:
      "免稅退休規劃的核心在於策略性地運用保單的現金價值。由於IUL現金價值以稅收遞延方式成長，且保單貸款通常不被視為應稅收入，您可以在退休時提取累積的財富而不觸發所得稅——這是一種與傳統退休帳戶根本不同、且潛在更高效的架構。",
    whatP3:
      "在有經驗的顧問正確規劃下，IUL保單可以提供數十年的稅收遞延累積，再加上退休後數年甚至數十年的免稅收入——同時保持為家人提供保障的身故理賠金。",
    card1Title: "退休時的免稅收入",
    card1Desc:
      "從IUL現金價值的保單貸款通常不需繳納所得稅，讓您建立不會提高稅率等級或影響社安金課稅的退休收入來源。",
    card2Title: "指數連結成長並設有下跌保護",
    card2Desc:
      "現金價值的成長連結市場指數，享有上漲潛力。0%的底限確保您的帳戶永遠不會因市場下跌而虧損——參與收益，不承擔損失。",
    card3Title: "靈活存取與掌控",
    card3Desc:
      "與401(k)和IRA不同，IUL沒有強制最低提款（RMD）要求，沒有基於收入的繳費上限，且在正確架構下可在59½歲前提取資金而無罰款。",
    howTitle: "IUL免稅退休如何運作？",
    howDesc:
      "透過IUL建立免稅退休收入流遵循清晰的多階段策略：",
    steps: [
      {
        step: "第一階段",
        title: "設計與注資保單",
        desc: "與顧問合作設計一份優化現金價值累積（而非單純追求身故理賠金）的IUL保單。在累積期間，用稅後保費持續注資。",
      },
      {
        step: "第二階段",
        title: "稅收遞延成長",
        desc: "現金價值連結市場指數成長。在指數上漲的年份，您的帳戶按指數表現計算收益（受上限和參與率限制）。在市場下跌的年份，0%底限意味著沒有損失——每年的收益被鎖定。",
      },
      {
        step: "第三階段",
        title: "免稅提取現金價值",
        desc: "退休後，針對現金價值進行系統性保單貸款。由於這些是貸款（而非提款），通常不需繳納所得稅。即使在借貸金額上，保單內部仍持續為您工作。",
      },
      {
        step: "第四階段",
        title: "遺產傳承與保障",
        desc: "身故理賠金在整個保單期間持續保護您的家人。當您離世時，任何未償還的貸款餘額從理賠金中扣除，剩餘款項免所得稅地傳給受益人。",
      },
    ],
    comparisonTitle: "IUL與傳統退休帳戶比較",
    comparisonRows: [
      { feature: "繳費稅務", iul: "稅後（不可扣抵）", traditional: "稅前（401k）/ 稅後（Roth）" },
      { feature: "成長稅務", iul: "稅收遞延", traditional: "稅收遞延" },
      { feature: "提款稅務", iul: "免稅（透過保單貸款）", traditional: "按普通收入課稅（401k/IRA）" },
      { feature: "強制最低提款（RMD）", iul: "無", traditional: "73歲起須強制提款" },
      { feature: "繳費上限", iul: "無收入限制（需符合MEC規定）", traditional: "受IRS年度限制" },
      { feature: "市場下跌風險", iul: "受0%底限保護", traditional: "承擔完整市場風險" },
      { feature: "身故理賠金", iul: "有——受益人免稅領取", traditional: "無" },
    ],
    comparisonLabelIUL: "IUL",
    comparisonLabelTraditional: "401k / IRA",
    benefitsTitle: "IUL免稅退休的核心優勢",
    benefits: [
      "透過保單貸款的退休收入通常無需繳納所得稅",
      "無強制最低提款（RMD）——您掌控提款時機和金額",
      "現金價值受每年0%底限保護，免於市場損失",
      "連結S&P 500或其他指數的上漲成長潛力",
      "收益通常每年鎖定——市場下跌時不返還已獲收益",
      "身故理賠金在整個保單期間為家人提供保障",
      "繳費無收入上限（不同於Roth IRA的收入限制）",
      "在正確架構下，任何年齡均可提取現金價值而無提前取用罰款",
      "可作為已達最高繳費額的高收入者的額外稅收優惠儲蓄桶",
      "保單可附加生前福利附約，涵蓋重大疾病、慢性疾病或末期疾病",
    ],
    whoTitle: "誰最適合IUL免稅退休規劃？",
    whoItems: [
      {
        icon: TrendingUp,
        title: "已達其他帳戶最高繳費額的高收入者",
        desc: "一旦您的401(k)和IRA繳費達到上限，IUL提供了一個額外的稅收優惠儲蓄渠道，且沒有收入限制。",
      },
      {
        icon: Shield,
        title: "擔心未來稅率提高者",
        desc: "如果您認為退休時所得稅率會更高，擁有免稅退休收入來源可提供寶貴的稅務多元化，補充稅收遞延帳戶。",
      },
      {
        icon: Wallet,
        title: "企業主和自雇人士",
        desc: "無法享有雇主退休計劃或希望在SEP-IRA之外有更多稅收高效策略的企業家，可將IUL作為靈活的稅收優惠儲蓄工具。",
      },
    ],
    importantTitle: "重要注意事項",
    importantNote:
      "IUL是一種複雜的金融產品，必須經過正確設計和充足注資才能達到最佳效果。注資不足、過高的保險費用或提前終止都可能大幅降低其效果。請與有經驗的獨立顧問合作，確保保單按照您的具體目標正確架構。",
    importantLabel: "重要提示：",
    exampleTitle: "IUL退休收入示例",
    exampleDesc:
      "以一位40歲人士為例，每月注資$2,000（每年$24,000）至IUL保單，持續20年，然後在65歲開始領取免稅收入：",
    exampleItems: [
      { label: "已繳保費總額", value: "$480,000", note: "20年持續注資" },
      { label: "65歲時估計現金價值", value: "$900,000 – $1,200,000", note: "基於歷史指數表現（非保證）" },
      { label: "每年免稅收入", value: "$50,000 – $80,000", note: "透過保單貸款，可持續20至30年以上" },
      { label: "全程身故理賠保障", value: "持續保障", note: "整個保單期間維持家庭保障" },
    ],
    exampleNote: "* 僅供示例說明。實際結果取決於保單設計、指數表現、利率和個人情況。請諮詢顧問獲取個人化的規劃分析。",
    ctaTitle: "建立您的免稅退休收入策略",
    ctaDesc:
      "利用IUL的免稅退休策略需要精心設計和專業指導。我們的顧問將分析您目前的儲蓄、收入、稅務狀況和退休目標，為您設計一個最大化退休免稅收入的IUL策略。",
    ctaButton: "預約免費諮詢",
  },
}

export function TaxFreeRetirementContent() {
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
              <Wallet className="w-4 h-4" />
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

      {/* What is IUL Tax-Free Retirement */}
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
              <Card className="p-6 bg-secondary border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <Wallet className="w-8 h-8 text-accent-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-2">{t.card1Title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.card1Desc}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-secondary border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-accent-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-2">{t.card2Title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.card2Desc}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-secondary border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-accent-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-2">{t.card3Title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.card3Desc}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{t.howTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.howDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((item, i) => (
              <div key={i} className="relative">
                <Card className="p-6 bg-card h-full">
                  <div className="text-xs font-bold text-accent-foreground bg-accent/10 inline-block px-3 py-1 rounded-full mb-4">{item.step}</div>
                  <h3 className="font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </Card>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-accent-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IUL vs Traditional */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">{t.benefitsTitle}</h2>
              <ul className="space-y-4">
                {t.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-4">{t.comparisonTitle}</h3>
                <div className="space-y-3">
                  {t.comparisonRows.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 text-sm">
                      <div className="font-medium text-primary">{row.feature}</div>
                      <div className="text-accent-foreground font-medium">{row.iul}</div>
                      <div className="text-muted-foreground">{row.traditional}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                    <div />
                    <div className="font-semibold">{t.comparisonLabelIUL}</div>
                    <div className="font-semibold">{t.comparisonLabelTraditional}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">{t.whoTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.whoItems.map((item, i) => {
              const Icon = item.icon
              return (
                <Card key={i} className="p-6 bg-card">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Example + Important Note */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">{t.importantTitle}</h2>
              <Card className="p-6 bg-accent/10 border-accent">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="font-semibold text-primary">{t.importantLabel}</span> {t.importantNote}
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
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">{t.ctaTitle}</h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <Link href="/company/contact">
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
