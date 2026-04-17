"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, GraduationCap, TrendingUp, Shield, ArrowRight } from "lucide-react"

const copy = {
  en: {
    badge: "Solutions",
    heroTitle: "College Funding",
    heroDesc:
      "Planning ahead for your children's college education is one of the most important financial goals for any parent. Using life insurance cash value as an education savings tool offers tax advantages and simultaneously protects your family's financial security if the unexpected happens — making your education plan truly bulletproof.",
    challengeTitle: "The Real Challenge of College Costs",
    challengeP1:
      "According to statistics, the average cost of a four-year U.S. college (tuition, room and board, living expenses) rises at approximately 5%–7% per year. A child born today could face annual college costs of $80,000–$150,000 by the time they enroll, with a four-year total potentially exceeding $500,000.",
    challengeP2:
      "Faced with such enormous education costs, many families rely on 529 Education Savings Plans. However, 529 plans have limitations: they can only be used for education-related expenses, account assets are counted in the FAFSA financial aid assessment (reducing scholarship eligibility), and if the child ultimately doesn't attend college, withdrawing funds triggers taxes and penalties.",
    challengeP3:
      "Life insurance cash value offers a flexible, tax-friendly complement. Policy cash value is generally not counted in the FAFSA assessment, withdrawals and loans are more flexible, and the policy itself continues to provide family protection — making it a multi-purpose financial tool.",
    projectionTitle: "Projected Education Costs (at 4% inflation)",
    projectionItems: [
      { year: "Today", cost: "$200,000 – $400,000", note: "Current 4-year private college total cost" },
      { year: "In 10 years", cost: "$296,000 – $592,000", note: "Estimated cost when a child turns 8 today" },
      { year: "In 18 years", cost: "$405,000 – $810,000", note: "Estimated cost for a child born today" },
    ],
    projectionNote: "* The above are estimates; actual costs vary by school and location.",
    howTitle: "How Does Life Insurance Help with Education Savings?",
    howDesc:
      "Through a permanent life insurance policy (especially Indexed Universal Life / IUL), you can build an education fund that combines protection and savings:",
    steps: [
      {
        step: "Step 1",
        title: "Purchase a Policy & Start Funding",
        desc: "Buy life insurance for the parent while the child is young, locking in a low premium when health is good and beginning to build cash value inside the policy.",
      },
      {
        step: "Step 2",
        title: "Cash Value Grows Steadily",
        desc: "Policy cash value grows on a tax-deferred basis. With an indexed policy, growth is linked to indexes like the S&P 500, capturing market upside while a floor protects against losses.",
      },
      {
        step: "Step 3",
        title: "Evaluate FAFSA Before College",
        desc: "Life insurance cash value is generally not counted as a parent asset in the FAFSA financial aid assessment, helping maximize the child's scholarship and grant eligibility.",
      },
      {
        step: "Step 4",
        title: "Fund Tuition with Tax-Free Loans",
        desc: "During college, parents can borrow against the policy's cash value to pay tuition at low interest rates — and since it's a loan, it does not trigger an income tax event.",
      },
    ],
    benefitsTitle: "Advantages of Using Life Insurance for Education Savings",
    benefits: [
      "Cash value grows on a tax-deferred basis with no annual taxation",
      "Access funds via policy loans with no income tax triggered",
      "Policy assets generally not counted in FAFSA, preserving more scholarship eligibility",
      "Indexed policies offer market upside potential with a 0% downside floor",
      "If the child chooses not to attend college, cash value can be used for other purposes (business, home purchase, etc.)",
      "Parents simultaneously have life insurance protection — if they pass away, children receive the death benefit",
      "No mandatory annual contribution limit (unlike the gift tax restrictions of 529 plans) — you can fund aggressively",
      "Cash value can serve as an emergency fund, not restricted to education use",
      "Policy can be adjusted or converted to adapt to changing family financial circumstances",
      "The policy passed to children can continue to serve as their own life insurance and wealth tool",
    ],
    comparisonTitle: "Comparison with 529 Plans",
    comparisonRows: [
      { feature: "Use Flexibility", ins: "Not limited to education", plan529: "Primarily for education costs" },
      { feature: "FAFSA Impact", ins: "Generally not counted", plan529: "Counted as parent assets" },
      { feature: "Tax Advantages", ins: "Tax-deferred growth, tax-free access", plan529: "Tax-deferred growth, tax-free for qualified expenses" },
      { feature: "Family Protection", ins: "Includes life insurance coverage", plan529: "No protection feature" },
      { feature: "Withdrawal Flexibility", ins: "Loans with no restrictions", plan529: "Non-education use triggers taxes and penalties" },
    ],
    comparisonLabelIns: "Life Insurance",
    comparisonLabel529: "529 Plan",
    dualProtectionTitle: "The Importance of Dual Protection",
    dualProtectionDesc:
      "If a parent passes away before the child starts college, a traditional 529 plan cannot replace the lost income. Life insurance is different — the death benefit ensures the child's education costs are covered, and the accumulated cash value remains available.",
    whoTitle: "Who Is This Strategy Best For?",
    whoItems: [
      {
        icon: TrendingUp,
        title: "Parents with Young Children",
        desc: "The younger the child, the more time cash value has to compound. Ideally, start planning before the child turns 5 to let compound growth work its magic.",
      },
      {
        icon: Shield,
        title: "High-Income Families",
        desc: "529 plans have gift tax limits, but life insurance cash value allows for higher funding (subject to premium reasonableness tests). Ideal for high-income families looking to save aggressively for education.",
      },
      {
        icon: GraduationCap,
        title: "Families Concerned About Financial Aid Eligibility",
        desc: "If a family wants to maximize FAFSA financial aid eligibility, the fact that life insurance cash value is not counted as a parent asset is a significant advantage worth incorporating into the overall plan.",
      },
    ],
    ctaTitle: "Start Preparing for Your Child's Future Today",
    ctaDesc:
      "The earlier you start an education fund, the better. Our advisors will design the optimal savings strategy based on your child's age, family income, and education goals — so your child has the best possible start, whatever path they choose.",
    ctaButton: "Schedule a Free Consultation",
  },
  zh: {
    badge: "保障方案",
    heroTitle: "大學教育基金",
    heroDesc:
      "為子女的大學教育提前規劃是每位父母最重要的財務目標之一。利用人壽保險的現金價值作為教育儲蓄工具，不僅享有稅收優惠，更能同時保護家庭在意外發生時的財務安全，讓您的教育規劃萬無一失。",
    challengeTitle: "大學教育費用的現實挑戰",
    challengeP1:
      "根據統計，美國四年制大學的平均費用（學費、住宿、生活費）每年以約5%至7%的速度遞增。一個今天出生的孩子，到大學入學時，每年的大學費用可能高達8萬至15萬美元，四年合計可能超過50萬美元。",
    challengeP2:
      "面對如此龐大的教育費用，許多家庭依賴529教育儲蓄計劃。然而529計劃有其局限性：只能用於教育相關費用、帳戶資產會被計入FAFSA財務援助評估（降低獎學金資格）、若孩子最終不讀大學則取用資金需繳稅及罰款。",
    challengeP3:
      "人壽保險的現金價值提供了一個靈活且稅收友好的補充方案。保單現金價值在FAFSA評估中通常不被計入，提款和借貸也更為彈性，同時保單本身持續提供家庭保障，是一個多功能的財務工具。",
    projectionTitle: "教育費用預估（以4%通膨計算）",
    projectionItems: [
      { year: "現在", cost: "$200,000 - $400,000", note: "目前四年制私立大學總費用" },
      { year: "10年後", cost: "$296,000 - $592,000", note: "孩子8歲時的預估費用" },
      { year: "18年後", cost: "$405,000 - $810,000", note: "孩子今天出生的預估費用" },
    ],
    projectionNote: "* 以上為估算數字，實際費用因學校和地區而異。",
    howTitle: "人壽保險如何幫助教育儲蓄？",
    howDesc:
      "透過永久型壽險（尤其是指數型萬能壽險IUL），您可以建立一個兼具保障與儲蓄功能的教育基金：",
    steps: [
      {
        step: "第一步",
        title: "購買保單、開始繳費",
        desc: "趁孩子年幼時為父母購買人壽保險，在健康良好時鎖定低保費，並開始向保單注入現金價值。",
      },
      {
        step: "第二步",
        title: "現金價值穩健成長",
        desc: "保單現金價值以稅收遞延方式成長，指數型保單還能連結S&P 500等市場指數，享有市場上漲紅利，同時設有下跌保護。",
      },
      {
        step: "第三步",
        title: "大學入學前評估FAFSA",
        desc: "保單現金價值通常不計入FAFSA財務援助評估資產，有助於最大化孩子的獎學金和助學金資格。",
      },
      {
        step: "第四步",
        title: "以無稅貸款支付學費",
        desc: "孩子大學期間，父母可向保單借貸現金價值支付學費，利率低廉，且借貸不觸發所得稅事件。",
      },
    ],
    benefitsTitle: "以壽險儲備教育基金的優勢",
    benefits: [
      "現金價值以稅收遞延方式成長，無年度課稅問題",
      "以保單貸款方式取用現金，無需繳納所得稅",
      "保單資產通常不計入FAFSA，有助保留更多獎學金資格",
      "指數型保單享有市場上漲潛力，同時設有0%下跌保護底限",
      "若孩子最終選擇不讀大學，現金價值可用於其他目的（創業、購屋等）",
      "父母同時享有人壽保險保障，萬一意外身故，子女可獲理賠",
      "無強制年繳上限（不同於529計劃的禮物稅限制），可大量注資",
      "現金價值可作為緊急備用金，不限於教育用途",
      "保單可轉換或調整，彈性因應家庭財務狀況變化",
      "遺留給子女的保單可繼續作為其人壽保障和財富工具",
    ],
    comparisonTitle: "與529計劃的比較",
    comparisonRows: [
      { feature: "用途靈活性", ins: "不限教育用途", plan529: "主要限教育費用" },
      { feature: "FAFSA影響", ins: "通常不計入", plan529: "計入家長資產" },
      { feature: "稅收優惠", ins: "成長免稅、取用免稅", plan529: "成長免稅、合格費用免稅" },
      { feature: "家庭保障", ins: "同時提供壽險保障", plan529: "無保障功能" },
      { feature: "提款靈活性", ins: "借貸無限制", plan529: "非教育用途需繳稅罰款" },
    ],
    comparisonLabelIns: "人壽保險",
    comparisonLabel529: "529計劃",
    dualProtectionTitle: "雙重保障的重要性",
    dualProtectionDesc:
      "萬一父母在子女大學就讀前不幸身故，傳統的529計劃無法補充失去的收入。人壽保險則不同，身故理賠金可確保子女的教育費用無憂，同時累積的現金價值也能繼續使用。",
    whoTitle: "誰最適合這個策略？",
    whoItems: [
      {
        icon: TrendingUp,
        title: "有年幼子女的父母",
        desc: "子女年齡越小，可累積的時間越長，現金價值成長潛力越大。理想情況下在孩子5歲前開始規劃，讓複利發揮最大效果。",
      },
      {
        icon: Shield,
        title: "高收入家庭",
        desc: "529計劃有禮物稅限制，而壽險現金價值的注資上限更高（需符合保費合理性測試）。適合希望大量儲備教育基金的高收入家庭。",
      },
      {
        icon: GraduationCap,
        title: "擔心子女獎學金資格者",
        desc: "若家庭希望最大化子女的FAFSA財務援助資格，壽險現金價值不計入家長資產是一個重要優勢，值得納入整體規劃。",
      },
    ],
    ctaTitle: "現在就為孩子的未來做準備",
    ctaDesc:
      "教育基金的規劃越早開始越好。我們的顧問將根據您孩子的年齡、家庭收入和教育目標，為您設計最佳的儲蓄策略，讓您的孩子無論未來選擇哪條路，都能獲得最好的起點。",
    ctaButton: "預約免費諮詢",
  },
}

export function CollegeFundingContent() {
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
              <GraduationCap className="w-4 h-4" />
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

      {/* The Challenge */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">{t.challengeTitle}</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>{t.challengeP1}</p>
                <p>{t.challengeP2}</p>
                <p>{t.challengeP3}</p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6">{t.projectionTitle}</h3>
              <div className="space-y-4">
                {t.projectionItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl">
                    <div className="text-center min-w-[60px]">
                      <div className="text-sm font-bold text-accent-foreground">{item.year}</div>
                    </div>
                    <div>
                      <div className="font-bold text-primary">{item.cost}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.note}</div>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-4 italic">{t.projectionNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Life Insurance Works for Education */}
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

      {/* Key Benefits */}
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
                      <div className="text-accent-foreground font-medium">{row.ins}</div>
                      <div className="text-muted-foreground">{row.plan529}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                    <div />
                    <div className="font-semibold">{t.comparisonLabelIns}</div>
                    <div className="font-semibold">{t.comparisonLabel529}</div>
                  </div>
                </div>
              </div>
              <Card className="p-6 bg-accent/10 border-accent">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-accent-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">{t.dualProtectionTitle}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t.dualProtectionDesc}
                    </p>
                  </div>
                </div>
              </Card>
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
