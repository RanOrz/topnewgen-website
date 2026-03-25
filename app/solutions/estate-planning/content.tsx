"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, FileText, Shield, TrendingUp, ArrowRight } from "lucide-react"

const copy = {
  en: {
    badge: "Solutions",
    heroTitle: "Estate Planning",
    heroDesc:
      "Can the wealth you've spent a lifetime building be passed on completely to the people you care about most? Estate planning isn't just for the wealthy — anyone with assets and a family needs to think seriously about it. Life insurance is one of the most powerful tools in estate planning, helping you transfer wealth to the next generation in the most efficient way possible.",
    whyTitle: "Why Is Estate Planning So Important?",
    whyP1:
      "Many people mistakenly believe \"estate planning\" is as simple as writing a will, or that it's only relevant for those with millions in assets. In reality, estate planning covers far more than a will — including how to protect assets while you're alive, how to efficiently transfer wealth after you're gone, how to minimize the tax burden, and how to ensure your family is financially protected.",
    whyP2:
      "In the United States, even with a will, estates that haven't been properly planned often go through a lengthy probate process, which can take months or even years, with legal fees potentially reaching 3%–7% of the total estate value. Meanwhile, assets exceeding the federal estate tax exemption may face a federal estate tax rate as high as 40%.",
    whyP3:
      "Life insurance plays a unique role in estate planning: insurance proceeds can bypass the probate process and be paid directly and quickly to named beneficiaries, generally completely free of income tax. This makes life insurance one of the most efficient wealth transfer tools available.",
    questionsTitle: "Core Estate Planning Questions",
    questions: [
      { q: "How will your assets be distributed?", a: "Without a will, state law will determine the distribution — which may not align with your wishes." },
      { q: "How much will estate taxes take?", a: "Amounts exceeding the exemption threshold may face a 40% federal estate tax — advance planning is essential." },
      { q: "How long before your family accesses your assets?", a: "Probate can take 6 months to 2 years, during which your family may face financial hardship." },
      { q: "How do you ensure wealth goes to the right people?", a: "Clear beneficiary designations and trust arrangements ensure assets are distributed as you intend." },
      { q: "How do business assets continue operating?", a: "Business succession planning ensures a partnership transitions smoothly if the unexpected happens." },
    ],
    rolesTitle: "The Role of Life Insurance in Estate Planning",
    rolesDesc:
      "Life insurance has several unique functions in estate planning that other financial tools cannot fully replicate:",
    roles: [
      {
        icon: Shield,
        title: "Tax-Free Wealth Transfer",
        desc: "Life insurance proceeds are free of income tax when received by beneficiaries (IRC §101(a)). This means you can create a large, tax-free inheritance for your children or grandchildren at a controllable premium cost — far more efficient than directly transferring other taxable assets.",
      },
      {
        icon: FileText,
        title: "Estate Tax Liquidity",
        desc: "Heirs of illiquid assets such as real estate, art, or business interests are often forced to sell at a loss to pay estate taxes. Life insurance provides immediate cash liquidity, allowing your family to retain assets with sentimental or long-term value.",
      },
      {
        icon: TrendingUp,
        title: "Estate Equalization",
        desc: "If your primary asset is something that can't easily be divided (such as a family business or specific property), life insurance can serve as a \"compensation\" tool. For example, one child inherits the business while the others receive equivalent compensation from the life insurance death benefit — achieving fair distribution.",
      },
      {
        icon: CheckCircle2,
        title: "Charitable Legacy Planning",
        desc: "You can name a charitable organization as the beneficiary of your life insurance policy, creating a lasting philanthropic legacy. With relatively modest premiums, you can leave a gift to your chosen cause far exceeding what you could donate during your lifetime.",
      },
      {
        icon: ArrowRight,
        title: "Multi-Generational Wealth Transfer",
        desc: "By holding a life insurance policy inside an Irrevocable Life Insurance Trust (ILIT), the death benefit can be passed directly to grandchildren or further generations outside the policyholder's taxable estate — achieving multi-generational wealth transfer while avoiding estate taxes and generation-skipping transfer taxes.",
      },
      {
        icon: FileText,
        title: "Business Succession Planning",
        desc: "Business owners can use life insurance to fund a Buy-Sell Agreement, ensuring that if a partner or shareholder passes away, the insurance proceeds are used to purchase their shares — enabling a smooth ownership transition without disrupting normal business operations.",
      },
    ],
    benefitsTitle: "Core Advantages of Estate Planning",
    benefits: [
      "Life insurance proceeds paid to beneficiaries free of income tax",
      "Bypasses probate for fast payment — typically within 30–60 days of filing",
      "Beneficiary designations are flexible and can be updated at any time (except irrevocable beneficiaries)",
      "ILIT trust structure can remove insurance proceeds from the taxable estate",
      "Provides immediate cash liquidity for estate tax obligations on illiquid assets",
      "Enables family business succession planning for a smooth transition",
      "Can serve as an equalization tool for distributing wealth among multiple beneficiaries",
      "Amplifies charitable giving impact through structured donation frameworks",
      "Provides a tax-efficient solution for multi-generational wealth transfer",
      "Policy cash value serves as a financial planning tool during your lifetime",
    ],
    efficiencyTitle: "Estate Transfer Efficiency Comparison",
    efficiencyItems: [
      {
        method: "Directly Inherited Cash / Investment Accounts",
        tax: "Capital gains on appreciated assets; estate tax on amounts exceeding the exemption",
        time: "Requires probate: 6 months to 2 years",
        efficiency: "60% – 70%",
      },
      {
        method: "Real Estate Inheritance",
        tax: "Appreciation taxed; estate tax; may require forced sale",
        time: "Probate process; difficult to liquidate",
        efficiency: "50% – 65%",
      },
      {
        method: "Life Insurance Death Benefit",
        tax: "Income-tax-free when received by beneficiaries (under proper structure)",
        time: "30–60 days direct payment; no probate required",
        efficiency: "95% – 100%",
      },
    ],
    taxLabel: "Tax:",
    timeLabel: "Timeline:",
    efficiencyLabel: "Transfer Efficiency:",
    efficiencyNote: "* Efficiency estimates vary by individual circumstances, tax law, and structure design.",
    strategiesTitle: "Common Estate Planning Strategies",
    strategies: [
      {
        title: "Irrevocable Life Insurance Trust (ILIT)",
        desc: "Placing a life insurance policy inside an irrevocable trust removes the death benefit from the policyholder's taxable estate, avoiding estate taxes while ensuring the proceeds are distributed to beneficiaries per trust terms. Ideal for high-net-worth individuals.",
        steps: ["Establish an ILIT trust", "Trust purchases the life insurance policy", "Fund premiums annually using the gift tax annual exclusion", "At death, proceeds enter the trust and are distributed per terms"],
      },
      {
        title: "Spousal Lifetime Access Trust (SLAT)",
        desc: "A trust from which the spouse can benefit during their lifetime, while using life insurance to maximize the legacy to future generations. The spouse can access trust assets while living, and remaining assets transfer to children tax-free.",
        steps: ["Establish a SLAT trust", "Spouse can benefit during their lifetime", "Life insurance provides liquidity", "After death, assets transfer to descendants"],
      },
      {
        title: "Estate Equalization",
        desc: "When the estate includes assets that can't be split equally (such as a family business), life insurance proceeds serve as a \"make-up\" to other heirs, ensuring all children benefit fairly from the parents' wealth.",
        steps: ["Assess the value of illiquid assets", "Calculate the compensation gap", "Purchase sufficient life insurance to fill the gap", "Ensure fair inheritance for all children"],
      },
      {
        title: "Business Buy-Sell Agreement",
        desc: "Business owners and partners cross-insure each other. When one partner passes away, the insurance proceeds are used to purchase their ownership interest — allowing the surviving partners to retain control while the deceased's family receives fair cash compensation.",
        steps: ["Execute a legally binding buy-sell agreement", "Each partner cross-insures the other", "At death, proceeds are used to purchase the deceased's ownership interest", "Business transitions smoothly; family receives cash compensation"],
      },
    ],
    whoTitle: "Who Needs Estate Planning?",
    whoGroups: [
      {
        title: "People with Children or Family",
        points: [
          "Ensure children receive proper financial protection after your passing",
          "Designate a guardian for minor children",
          "Avoid probate delays that could affect urgently needed financial support for children",
          "Establish trusts to protect children's education and future",
        ],
      },
      {
        title: "People with Assets",
        points: [
          "Succession planning for real estate, retirement accounts, investment portfolios, and other assets",
          "Minimize estate tax and income tax burdens",
          "Ensure assets are distributed as you intend — not as state law dictates",
          "Protect assets from potential creditors or lawsuits",
        ],
      },
      {
        title: "Business Owners and Partners",
        points: [
          "Ensure the business transitions smoothly or is sold if the unexpected happens",
          "Protect family from being forced to assume business debts or liabilities",
          "Provide liquidity for share transfers among partners",
          "Separately plan for personal assets and business asset succession",
        ],
      },
    ],
    ctaTitle: "Pass Your Wealth on Intact",
    ctaDesc:
      "Estate planning requires expertise across insurance, legal, and tax domains. Our advisors will collaborate with your attorney and accountant to provide the most optimized insurance strategy for your estate plan. Schedule a consultation today and start protecting the wealth you treasure most.",
    ctaButton: "Schedule a Free Consultation",
  },
  zh: {
    badge: "保障方案",
    heroTitle: "遺產規劃",
    heroDesc:
      "您辛苦一生積累的財富，是否能夠完整傳承給您最在乎的人？遺產規劃不只是富人的專利，每一個有資產、有家人的人都需要認真考慮。人壽保險是遺產規劃中最強大的工具之一，幫助您以最高效的方式將財富傳遞給下一代。",
    whyTitle: "為什麼遺產規劃如此重要？",
    whyP1:
      "許多人誤以為「遺產規劃」只是擬定一份遺囑那麼簡單，或者認為只有擁有數百萬資產的人才需要考慮。事實上，遺產規劃涵蓋的範圍遠比一份遺囑廣泛，包括如何在您在世時保護資產、如何在您身後有效轉移財富、如何最小化稅務負擔，以及如何確保您的家人在財務上有所保障。",
    whyP2:
      "在美國，即使有遺囑，未經妥善規劃的遺產往往需要經過冗長的遺產認證（Probate）程序，可能耗時數月甚至數年，且所產生的法律費用可高達遺產總值的3%至7%。與此同時，超過聯邦遺產稅豁免額度的資產，可能面臨高達40%的聯邦遺產稅。",
    whyP3:
      "人壽保險在遺產規劃中扮演獨特的角色：保險理賠金可繞過遺產認證程序，直接快速支付給指定受益人，且在大多數情況下完全免所得稅。這使人壽保險成為最高效的財富傳承工具之一。",
    questionsTitle: "遺產規劃的核心問題",
    questions: [
      { q: "您的資產會怎樣分配？", a: "沒有遺囑，州法律將決定分配方式，可能不符合您的意願。" },
      { q: "遺產稅會吃掉多少？", a: "超過豁免額度的部分可能面臨40%的聯邦遺產稅，需要提前規劃。" },
      { q: "家人要等多久才能獲得資產？", a: "遺產認證可能需要6個月至2年，期間家人可能面臨財務困難。" },
      { q: "如何確保財富傳給對的人？", a: "明確的受益人指定和信託安排，確保資產按您意願分配。" },
      { q: "商業資產如何繼續運營？", a: "企業繼承規劃確保合夥企業在意外發生時平穩過渡。" },
    ],
    rolesTitle: "人壽保險在遺產規劃中的角色",
    rolesDesc:
      "人壽保險在遺產規劃中具有多種獨特功能，是其他財務工具無法完全替代的：",
    roles: [
      {
        icon: Shield,
        title: "免稅財富轉移",
        desc: "人壽保險理賠金在受益人收到時免所得稅（IRC §101(a)）。這意味著您可以以一個可控的保費成本，創造一筆大額的免稅遺產給您的子女或孫子女，效率遠高於直接轉移其他應稅資產。",
      },
      {
        icon: FileText,
        title: "遺產稅流動性",
        desc: "房地產、藝術品、企業股份等非流動性資產的繼承人，往往因為需要繳納遺產稅而被迫低價出售資產。人壽保險可以提供即時的現金流動性，讓家人保留那些有情感或長期價值的資產。",
      },
      {
        icon: TrendingUp,
        title: "遺產均等分配",
        desc: "若您的主要資產是一筆無法平均分配的財產（如家族企業）時，人壽保險可以作為「補償」工具。例如讓一個子女繼承企業，同時以壽險理賠金補償其他子女，實現公平分配。",
      },
      {
        icon: CheckCircle2,
        title: "慈善遺產規劃",
        desc: "您可以將慈善機構列為人壽保險的受益人，創建持久的慈善遺產。以相對少量的保費，可以向您支持的慈善事業留下遠超過您生前能捐贈金額的遺贈。",
      },
      {
        icon: ArrowRight,
        title: "跨代財富傳承",
        desc: "透過不可撤銷人壽保險信託（ILIT）持有壽險保單，理賠金可在保單持有人的遺產之外，直接傳承給孫輩或更遠的後代，實現跨代財富傳承，同時規避遺產稅和代際跳越稅。",
      },
      {
        icon: FileText,
        title: "企業繼承規劃",
        desc: "企業主可利用人壽保險為「買賣協議」（Buy-Sell Agreement）提供資金，確保在合夥人或股東身故時，保險理賠金可用於購買其股份，實現平穩的所有權轉移，不影響企業正常運營。",
      },
    ],
    benefitsTitle: "遺產規劃的核心優勢",
    benefits: [
      "人壽保險理賠金免所得稅直接支付給受益人",
      "繞過遺產認證（Probate）程序，快速支付，通常在申請後30-60天內",
      "受益人指定靈活，可隨時更改（不可撤銷受益人除外）",
      "ILIT信託結構可將保險金移出應稅遺產範圍",
      "為非流動性資產的遺產稅提供即時現金流動性",
      "實現家族企業繼承規劃，確保平穩過渡",
      "可作為多個受益人之間的遺產均等分配工具",
      "透過慈善捐贈架構放大慈善貢獻影響力",
      "為跨代財富傳承提供稅務高效的解決方案",
      "保單現金價值可在生前作為財務規劃工具使用",
    ],
    efficiencyTitle: "遺產傳承效率比較",
    efficiencyItems: [
      {
        method: "直接遺留現金/投資帳戶",
        tax: "資產增益需繳資本利得稅，超額部分繳遺產稅",
        time: "需經過遺產認證，6個月至2年",
        efficiency: "60% - 70%",
      },
      {
        method: "房地產遺產",
        tax: "評估增值需繳稅，遺產稅，可能需強制出售",
        time: "遺產認證，變現困難",
        efficiency: "50% - 65%",
      },
      {
        method: "人壽保險理賠金",
        tax: "收益人收到時免所得稅（正確架構下）",
        time: "30-60天直接支付，無需認證",
        efficiency: "95% - 100%",
      },
    ],
    taxLabel: "稅務：",
    timeLabel: "時間：",
    efficiencyLabel: "傳承效率：",
    efficiencyNote: "* 效率估算依個人情況、稅法和架構設計而異。",
    strategiesTitle: "常見遺產規劃策略",
    strategies: [
      {
        title: "不可撤銷人壽保險信託（ILIT）",
        desc: "將壽險保單置於不可撤銷信託中，使保險理賠金不計入保單持有人的遺產，避免遺產稅，同時確保理賠金按信託條款分配給受益人，適合高資產人士。",
        steps: ["設立ILIT信託", "信託購買壽險保單", "每年以禮物稅排除贈款支付保費", "身故後理賠金進入信託，依條款分配"],
      },
      {
        title: "生存配偶信託（Spousal Lifetime Access Trust）",
        desc: "配偶生前可受益的信託，同時利用壽險最大化遺產給後代。讓配偶在生前仍能享用信託資產，同時確保剩餘資產免稅傳承給子女。",
        steps: ["設立SLAT信託", "配偶可在生前受益", "壽險提供流動性", "身故後資產傳承給子孫"],
      },
      {
        title: "等值置換策略（Estate Equalization）",
        desc: "當遺產包含無法平均分配的資產（如家族企業）時，以壽險理賠金「補差額」給其他繼承人，確保所有子女都能公平地受益於父母的財富。",
        steps: ["評估非流動性資產價值", "計算補償金缺口", "購買足額壽險填補差距", "確保各子女公平繼承"],
      },
      {
        title: "企業繼承買賣協議（Buy-Sell Agreement）",
        desc: "企業主和合夥人互相購買對方壽險，當一方身故時，理賠金用於購買其在企業中的股份，讓倖存合夥人保持對企業的控制，身故方家屬則獲得公平的現金補償。",
        steps: ["訂立法律上的買賣協議", "各合夥人互相投保", "身故時理賠金用於購買股份", "企業順利過渡，家屬獲現金補償"],
      },
    ],
    whoTitle: "誰需要遺產規劃？",
    whoGroups: [
      {
        title: "有子女或家庭的人",
        points: [
          "確保子女在您身故後獲得妥善的財務保障",
          "指定未成年子女監護人",
          "避免遺產認證延誤子女急需的財務支援",
          "為子女的教育和未來設立信託保護",
        ],
      },
      {
        title: "擁有資產的人",
        points: [
          "房地產、退休帳戶、投資組合等資產的傳承規劃",
          "最小化遺產稅和所得稅負擔",
          "確保資產按您意願分配，而非由州法律決定",
          "保護資產免受可能的債權人或訴訟侵害",
        ],
      },
      {
        title: "企業主和合夥人",
        points: [
          "確保企業在意外發生時平穩過渡或出售",
          "保護家人不被迫承擔企業債務或責任",
          "為合夥人之間的股份轉移提供流動性",
          "區分個人資產和企業資產的傳承規劃",
        ],
      },
    ],
    ctaTitle: "讓您的財富完整傳承",
    ctaDesc:
      "遺產規劃需要保險、法律和稅務等多方面的專業知識。我們的顧問將與您的律師和會計師協作，從保險角度為您的遺產規劃提供最優化的方案。立即預約，開始保護您最珍視的財富。",
    ctaButton: "預約免費諮詢",
  },
}

export function EstatePlanningContent() {
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
              <FileText className="w-4 h-4" />
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

      {/* Why Estate Planning Matters */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">{t.whyTitle}</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>{t.whyP1}</p>
                <p>{t.whyP2}</p>
                <p>{t.whyP3}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">{t.questionsTitle}</h3>
              {t.questions.map((item, i) => (
                <div key={i} className="p-4 bg-secondary rounded-xl">
                  <div className="font-semibold text-primary text-sm mb-1">{item.q}</div>
                  <div className="text-muted-foreground text-sm">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life Insurance in Estate Planning */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{t.rolesTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.rolesDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.roles.map((item, i) => {
              const Icon = item.icon
              return (
                <Card key={i} className="p-6 bg-card h-full">
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
                <h3 className="text-xl font-bold text-primary mb-6">{t.efficiencyTitle}</h3>
                <div className="space-y-4">
                  {t.efficiencyItems.map((item, i) => (
                    <div key={i} className="p-4 bg-card rounded-xl">
                      <div className="font-semibold text-primary text-sm mb-2">{item.method}</div>
                      <div className="text-xs text-muted-foreground mb-1">{t.taxLabel}{item.tax}</div>
                      <div className="text-xs text-muted-foreground mb-2">{t.timeLabel}{item.time}</div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-bold text-accent-foreground">{t.efficiencyLabel}</div>
                        <div className={`text-xs font-bold ${i === 2 ? "text-green-600" : "text-muted-foreground"}`}>{item.efficiency}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">{t.efficiencyNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Strategies */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">{t.strategiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.strategies.map((strategy, i) => (
              <Card key={i} className="p-6 bg-card">
                <h3 className="font-bold text-primary text-lg mb-3">{strategy.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{strategy.desc}</p>
                <div className="space-y-2">
                  {strategy.steps.map((step, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent-foreground text-xs font-bold">{j + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs Estate Planning */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">{t.whoTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.whoGroups.map((group, i) => (
              <Card key={i} className="p-6 bg-secondary">
                <h3 className="font-bold text-primary mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
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
