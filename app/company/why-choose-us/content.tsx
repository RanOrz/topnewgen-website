"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Award, Users, Star, Globe, Heart, CheckCircle } from "lucide-react"

const differentiatorIcons = [Shield, Award, Users, Star, Globe, Heart]

const copy = {
  en: {
    heroEyebrow: "Our Advantages",
    heroHeading: "Why Do Over 3,000 Families Choose NewGen?",
    heroSubtext:
      "Among the many insurance options available, NewGen Insurance Agency has become the most trusted protection partner for Bay Area Chinese-American families thanks to our objective advantage as an independent brokerage, deep professional expertise, and sincere service.",
    stats: [
      { number: "20+", label: "Years of Service" },
      { number: "3,000+", label: "Families Served" },
      { number: "10+", label: "Top Carrier Partners" },
      { number: "5.0★", label: "Client Rating" },
    ],
    differentiatorsEyebrow: "Six Core Advantages",
    differentiatorsHeading: "What Makes Us Different",
    differentiatorsSubtext:
      "These are not just slogans — they are the commitments we live out in every service interaction, and the real reasons 3,000 families have chosen us.",
    differentiators: [
      {
        number: "01",
        title: "Independent Brokerage — Objective & Unbiased",
        highlight: "An advisor who truly stands on your side",
        description:
          "NewGen advisors are independent insurance agents, free from the restrictions or quota pressures of any single insurance company. Our only job is to find the best plan for you. We compare products across multiple carriers to give you the most objective, unbiased advice — something a captive agent can never do.",
        stats: [{ label: "Top Carrier Partners", value: "10+" }],
      },
      {
        number: "02",
        title: "20+ Years of Deep Experience",
        highlight: "Expertise tested by time",
        description:
          "Since our founding, NewGen Insurance Agency has accumulated more than 20 years of insurance service experience. We have lived through market cycles, regulatory changes, and product evolution — giving us a deep understanding of the best protection strategies for every life situation. That seasoned perspective is our greatest asset for every client.",
        stats: [{ label: "Years of Insurance Service", value: "20+" }],
      },
      {
        number: "03",
        title: "Over 3,000 Families Served",
        highlight: "Our reputation speaks for itself",
        description:
          "The trust of 3,000 families is our most valuable asset. From Bay Area Chinese-American communities to clients across the country, every family represents a protection journey we have walked together. Their referrals are our best calling card and our greatest motivation to keep improving.",
        stats: [{ label: "Families Served", value: "3,000+" }],
      },
      {
        number: "04",
        title: "Five-Star Client Reviews",
        highlight: "Client satisfaction is our highest standard",
        description:
          "We consistently maintain near-perfect ratings on Google, Yelp, and other platforms. Great reviews come not just from successful policy placements, but from the patience, responsiveness, and genuine care we show throughout the entire service experience. We treat every client like our most important family member.",
        stats: [{ label: "Average Client Rating", value: "5.0★" }],
      },
      {
        number: "05",
        title: "Bilingual Professional Service",
        highlight: "Communicating in the language you know best",
        description:
          "Insurance concepts are inherently complex, and language barriers can easily lead to misunderstandings and unnecessary losses. Our advisory team is fluent in Mandarin, Cantonese, and English — able to explain policy terms in detail, clarify concerns, and ensure you make the most informed decision possible.",
        stats: [{ label: "Languages Served", value: "EN / ZH" }],
      },
      {
        number: "06",
        title: "Personalized, Tailored Solutions",
        highlight: "No one-size-fits-all coverage",
        description:
          "Every family's financial situation, protection needs, and risk tolerance is different. We refuse cookie-cutter packages and insist on thorough needs analysis to design a personalized protection combination that truly matches your life stage, budget, and goals — so every premium dollar is well spent.",
        stats: [{ label: "Service Philosophy", value: "Tailored" }],
      },
    ],
    comparisonEyebrow: "Comparative Advantage",
    comparisonHeading: "Independent Agent vs. Captive Agent",
    comparisonSubtext:
      "Choosing an independent agent means you receive truly objective advice that prioritizes your interests — not recommendations limited to a single company's products.",
    comparisonColItem: "Feature",
    comparisonColNewgen: "NewGen (Independent)",
    comparisonColExclusive: "Captive Agent",
    comparisons: [
      { item: "Objectively compare multiple insurance companies", newgen: true, exclusive: false },
      { item: "No sales quota restrictions", newgen: true, exclusive: false },
      { item: "Bilingual EN/ZH service", newgen: true, exclusive: false },
      { item: "20+ years of experience", newgen: true, exclusive: false },
      { item: "Ongoing after-sales service and policy reviews", newgen: true, exclusive: false },
      { item: "Cross-carrier product portfolio design", newgen: true, exclusive: false },
      { item: "Independent, objective claims assistance", newgen: true, exclusive: false },
    ],
    processEyebrow: "Our Service Process",
    processHeading: "With You Every Step — From Consultation to Coverage",
    processSteps: [
      { step: "1", title: "Free Consultation", desc: "Understand your family situation, financial goals, and existing coverage gaps" },
      { step: "2", title: "Needs Analysis", desc: "Deep-dive into your protection needs and design the plan that fits you best" },
      { step: "3", title: "Plan Comparison", desc: "Compare the best options across multiple top insurance carriers" },
      { step: "4", title: "Long-Term Protection", desc: "Ongoing follow-up after enrollment with regular policy reviews to keep your coverage current" },
    ],
    ctaHeading: "Experience the NewGen Difference for Yourself",
    ctaSubtext:
      "Schedule a free, no-pressure protection consultation and let us show you — through real action — why NewGen is your family's most trusted protection partner.",
    ctaBook: "Book a Free Consultation",
    ctaContact: "Contact Us",
  },
  zh: {
    heroEyebrow: "我們的優勢",
    heroHeading: "為什麼超過3,000個家庭選擇新睿？",
    heroSubtext:
      "在眾多保險選擇中，新睿保險集團憑藉獨立代理的客觀優勢、深厚的專業積累與真誠的服務態度，成為灣區華人家庭最信賴的保障夥伴。",
    stats: [
      { number: "20+", label: "年服務經驗" },
      { number: "3,000+", label: "服務家庭數" },
      { number: "10+", label: "合作頂級保險公司" },
      { number: "5.0★", label: "客戶評分" },
    ],
    differentiatorsEyebrow: "六大核心優勢",
    differentiatorsHeading: "讓我們與眾不同的關鍵",
    differentiatorsSubtext:
      "這些不只是口號，而是我們每天在服務中踐行的承諾，也是3,000個家庭選擇我們的真實原因。",
    differentiators: [
      {
        number: "01",
        title: "獨立代理，客觀無偏",
        highlight: "真正站在您這一邊的顧問",
        description:
          "新睿的顧問是獨立保險代理人，不受任何單一保險公司的限制或配額壓力。我們唯一的任務，就是為您找到最適合的方案。我們可以跨越多家保險公司進行比較，給您最客觀、最公正的建議——這是專屬代理人永遠做不到的。",
        stats: [{ label: "合作頂級保險公司", value: "10+" }],
      },
      {
        number: "02",
        title: "20年以上豐富經驗",
        highlight: "經過時間考驗的專業",
        description:
          "自成立以來，新睿保險集團累積超過20年的保險服務經驗。我們親歷了市場的起伏、法規的變化、產品的演進，深刻理解各類人生情境下最適合的保障策略。這份歷練，是我們給每位客戶最堅實的底氣。",
        stats: [{ label: "保險服務年資", value: "20+" }],
      },
      {
        number: "03",
        title: "服務超過3,000個家庭",
        highlight: "口碑見證我們的實力",
        description:
          "3,000個家庭的信任，是我們最寶貴的資產。從灣區的華人社區到全美各地的客戶，每一個家庭背後都有一段我們共同走過的保障旅程。他們的口碑相傳，是我們最好的名片，也是我們持續精進的最大動力。",
        stats: [{ label: "服務家庭數", value: "3,000+" }],
      },
      {
        number: "04",
        title: "五星級客戶評價",
        highlight: "客戶滿意度是最高標準",
        description:
          "我們在Google、Yelp等平台上持續保持近滿分的客戶評價。客戶的好評不只來自成功投保的結果，更源自整個服務過程中的耐心解說、快速回應與真誠關懷。我們把每一位客戶都當作最重要的家人來對待。",
        stats: [{ label: "平均客戶評分", value: "5.0★" }],
      },
      {
        number: "05",
        title: "中英雙語專業服務",
        highlight: "用您最熟悉的語言溝通",
        description:
          "保險概念本就複雜，語言障礙更容易造成誤解與不必要的損失。新睿的顧問團隊精通普通話、粵語及英語，能夠以您最熟悉的語言詳細說明保單條款、釐清疑慮，確保您在完全理解的前提下做出最適合的決定。",
        stats: [{ label: "服務語言", value: "中英雙語" }],
      },
      {
        number: "06",
        title: "個性化量身定制方案",
        highlight: "沒有一體適用的保障",
        description:
          "每個家庭的財務狀況、保障需求、風險承受能力都不同。我們拒絕千篇一律的套裝方案，堅持透過深入的需求分析，為每位客戶設計真正符合其人生階段、預算與目標的個性化保障組合，讓每一分保費都花在刀刃上。",
        stats: [{ label: "服務理念", value: "量身定制" }],
      },
    ],
    comparisonEyebrow: "比較優勢",
    comparisonHeading: "獨立代理 vs 專屬代理",
    comparisonSubtext:
      "選擇獨立代理人意味著您能夠獲得真正客觀、以您利益為先的建議，而非受限於單一公司產品的推介。",
    comparisonColItem: "比較項目",
    comparisonColNewgen: "新睿（獨立代理）",
    comparisonColExclusive: "專屬代理",
    comparisons: [
      { item: "客觀比較多家保險公司", newgen: true, exclusive: false },
      { item: "不受銷售配額限制", newgen: true, exclusive: false },
      { item: "中英雙語服務", newgen: true, exclusive: false },
      { item: "20年以上豐富經驗", newgen: true, exclusive: false },
      { item: "持續售後服務與保單檢視", newgen: true, exclusive: false },
      { item: "跨保險公司產品組合設計", newgen: true, exclusive: false },
      { item: "獨立客觀的理賠協助", newgen: true, exclusive: false },
    ],
    processEyebrow: "我們的服務流程",
    processHeading: "從諮詢到保障，全程陪伴",
    processSteps: [
      { step: "1", title: "免費諮詢", desc: "了解您的家庭狀況、財務目標與現有保障缺口" },
      { step: "2", title: "需求分析", desc: "深入分析您的保障需求，量身制定最適合的方案" },
      { step: "3", title: "方案比較", desc: "跨越多家頂級保險公司，比較最優質、最合理的選項" },
      { step: "4", title: "長期守護", desc: "投保後持續跟進，定期檢視保單，確保保障與時俱進" },
    ],
    ctaHeading: "親身體驗新睿的服務差異",
    ctaSubtext:
      "預約一次免費、無壓力的保障諮詢，讓我們用實際行動告訴您，為什麼新睿是您家庭最值得信賴的保障夥伴。",
    ctaBook: "立即預約免費諮詢",
    ctaContact: "聯繫我們",
  },
}

export function WhyChooseUsContent() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">{t.heroEyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              {t.heroHeading}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              {t.heroSubtext}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {t.stats.map((stat) => (
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
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.differentiatorsEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.differentiatorsHeading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.differentiatorsSubtext}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.differentiators.map((item, index) => {
              const Icon = differentiatorIcons[index]
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
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.comparisonEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.comparisonHeading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.comparisonSubtext}
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl border border-border overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-primary text-primary-foreground">
                <div className="py-4 px-6 font-semibold">{t.comparisonColItem}</div>
                <div className="py-4 px-6 font-semibold text-center text-accent">{t.comparisonColNewgen}</div>
                <div className="py-4 px-6 font-semibold text-center opacity-70">{t.comparisonColExclusive}</div>
              </div>
              {t.comparisons.map((row, index) => (
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
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.processEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.processHeading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.processSteps.map((item, index) => (
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
            {t.ctaHeading}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            {t.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.topnewgen.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full transition-colors text-lg"
            >
              {t.ctaBook}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground font-semibold px-8 py-4 rounded-full transition-colors text-lg"
            >
              {t.ctaContact}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
