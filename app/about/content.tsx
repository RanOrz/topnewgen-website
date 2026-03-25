"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Users, Award, Heart, CheckCircle } from "lucide-react"

const carriers = [
  "Allianz",
  "AIG",
  "Nationwide",
  "Pacific Life",
  "John Hancock",
  "Mutual of Omaha",
  "Transamerica",
  "North American",
  "Global Atlantic",
  "F&G",
]

const valueIcons = [Shield, Award, Heart, Users]

const copy = {
  en: {
    heroEyebrow: "About NewGen Insurance Agency",
    heroHeading: "Twenty Years of Dedication, Protecting the Families You Love",
    heroSubtext:
      "Since our founding, NewGen Insurance Agency has upheld the core principles of integrity, expertise, and genuine care. Leveraging the advantages of an independent brokerage, we have provided comprehensive, tailored protection solutions to over 3,000 families.",
    stats: [
      { number: "20+", label: "Years of Service" },
      { number: "3,000+", label: "Families Served" },
      { number: "10+", label: "Top Carrier Partners" },
      { number: "5★", label: "Client Satisfaction" },
    ],
    storyEyebrow: "Our Story",
    storyHeading: "Starting from the Bay Area, Protecting Every Family",
    storyParagraphs: [
      "NewGen Insurance Agency was founded in the Bay Area after our founder witnessed firsthand how many Chinese-American families made costly insurance decisions — or went without coverage altogether — due to language barriers and a lack of accessible information in the complex U.S. insurance landscape.",
      "Driven by the mission to change this, we started as a small insurance firm and built our reputation through honesty and expertise. Over twenty years, we have never lost sight of our founding purpose: to ensure every family receives fair, transparent coverage that truly fits their needs.",
      "As independent insurance agents, we are not bound by any single insurance company. We partner with more than 10 of the nation's top carriers, allowing us to objectively compare products and identify the most affordable and comprehensive plan for you. This is the clear advantage we have over captive agents.",
      "Today, NewGen serves over 3,000 families across multiple U.S. states. Our clients include young couples just starting their families, mid-career professionals planning for retirement, and seniors seeking to leave a legacy. Every family's story is our motivation to keep growing.",
    ],
    missionEyebrow: "Our Mission",
    missionHeading: "Giving Every Family a Secure Tomorrow",
    missionText:
      "Our mission is to help every family navigate life's unpredictable risks with confidence and financial security through comprehensive, integrity-driven insurance advisory services. Insurance is more than a contract — it is the deepest promise you can make to the people you love.",
    missionPoints: [
      "Client's best interests first — no carrier quota restrictions",
      "Bilingual EN/ZH service to break down language barriers",
      "Compare across 10+ top carriers to find the best plan",
      "Long-term follow-up with regular policy reviews after enrollment",
      "Full transparency so you make decisions fully informed",
    ],
    valuesEyebrow: "Core Values",
    valuesHeading: "The Principles We Stand By",
    values: [
      {
        title: "Integrity First",
        description:
          "Integrity is the foundation of everything we do. Every recommendation and every policy is guided by the client's best interest — never influenced by commissions or short-term gains.",
      },
      {
        title: "Professional Excellence",
        description:
          "Our advisors hold top industry certifications and pursue ongoing education to stay current with insurance regulations and product innovations, ensuring you receive the most accurate and timely guidance.",
      },
      {
        title: "Personalized Service",
        description:
          "Every family's needs are unique. We take the time to understand your financial goals, family situation, and risk tolerance to design a protection plan tailored specifically to you — not a one-size-fits-all package.",
      },
      {
        title: "Long-Term Partnership",
        description:
          "We are not just selling insurance — we are your long-term financial protection partner. From claims assistance after enrollment to policy reviews at every stage of life, we are always by your side.",
      },
    ],
    carriersEyebrow: "Our Carrier Partners",
    carriersHeading: "Partnered with Top Insurance Carriers",
    carriersSubtext:
      "As an independent insurance agency, we work with more than 10 of the most trusted insurance companies in the country, ensuring we can compare and identify the best protection plan for you.",
    ctaHeading: "Ready to Protect Your Family?",
    ctaSubtext:
      "Schedule a free consultation with one of our professional advisors today and let us design the ideal protection plan for your family.",
    ctaBook: "Book a Free Consultation",
    ctaContact: "Contact Us",
  },
  zh: {
    heroEyebrow: "關於新睿保險集團",
    heroHeading: "二十年如一日，守護您最珍貴的家人",
    heroSubtext:
      "自成立以來，新睿保險集團始終以「誠信、專業、用心」為核心，透過獨立顧問的優勢，為超過3,000個家庭提供最全面、最適切的保障解決方案。",
    stats: [
      { number: "20+", label: "年服務經驗" },
      { number: "3,000+", label: "服務家庭數" },
      { number: "10+", label: "合作頂級保險公司" },
      { number: "5★", label: "客戶滿意評價" },
    ],
    storyEyebrow: "我們的故事",
    storyHeading: "從灣區出發，守護每一個家庭",
    storyParagraphs: [
      "新睿保險集團成立於灣區，創辦人深刻體會到許多華人家庭在面對複雜的美國保險體系時，往往因為語言障礙、資訊不足而做出不利於自身的決定，或是完全缺乏應有的保障。",
      "帶著改變這一現狀的使命，我們從一家小型保險服務機構起步，以真誠、專業的態度逐步建立口碑。二十多年來，我們從未忘記這份初心——讓每一個家庭都能獲得公平、透明且真正適合自己的保障。",
      "作為獨立保險代理人，我們不受任何單一保險公司的限制。我們與超過10家全美頂級保險公司合作，能夠客觀比較不同產品，為您篩選出保費最合理、保障最全面的方案。這正是我們與一般專屬代理人最大的差異。",
      "如今，新睿保險集團已服務超過3,000個家庭，業務遍及全美多個州份。我們的客戶中，有剛成家的年輕夫婦，有正在規劃退休的中年人士，也有希望為後代留下財富的長者。每一個家庭的故事，都是我們前進的動力。",
    ],
    missionEyebrow: "我們的使命",
    missionHeading: "讓每個家庭擁有安心的明天",
    missionText:
      "我們的使命是透過全面、誠信的保險諮詢服務，幫助每一個家庭在面對人生中不可預期的風險時，能夠從容應對、生活無虞。保險不只是一份合約，更是對家人最深切的承諾。",
    missionPoints: [
      "以客戶最大利益為先，不受任何保險公司配額限制",
      "提供中英雙語服務，打破語言障礙",
      "跨越10家以上頂級保險公司，比較最優質方案",
      "投保後長期跟進，定期檢視保單保障是否到位",
      "全程透明，讓您在充分了解的前提下做決定",
    ],
    valuesEyebrow: "核心價值觀",
    valuesHeading: "我們堅守的原則",
    values: [
      {
        title: "誠信為本",
        description:
          "我們以誠信作為一切業務的基石。每一個建議、每一份保單，都以客戶的最大利益為出發點，絕不因佣金或短期利益而影響對客戶的建議。",
      },
      {
        title: "專業卓越",
        description:
          "我們的顧問團隊持有業界頂尖認證，並持續進行專業教育，緊跟保險法規與產品創新動態，確保為您提供最精準、最具時效性的保障建議。",
      },
      {
        title: "個性化服務",
        description:
          "每個家庭的需求都是獨一無二的。我們深入了解您的財務目標、家庭狀況與風險承受能力，量身定制最適合您的保障方案，而非千篇一律的套裝產品。",
      },
      {
        title: "長期夥伴",
        description:
          "我們不只是賣保險，更是您的長期財務保障夥伴。從投保後的理賠協助，到人生各階段的保障檢視與調整，我們始終陪伴在您身邊。",
      },
    ],
    carriersEyebrow: "合作保險公司",
    carriersHeading: "與頂級保險公司合作",
    carriersSubtext:
      "作為獨立保險代理人，我們與超過10家全美最受信賴的保險公司合作，確保能為您比較、篩選出最優質的保障方案。",
    ctaHeading: "準備好保障您的家人了嗎？",
    ctaSubtext:
      "立即與我們的專業顧問預約免費諮詢，讓我們為您的家庭量身打造最適合的保障計劃。",
    ctaBook: "立即預約免費諮詢",
    ctaContact: "聯繫我們",
  },
}

export function AboutContent() {
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

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.storyEyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t.storyHeading}</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                {t.storyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.missionEyebrow}</p>
              <h3 className="text-2xl font-bold text-primary mb-5">{t.missionHeading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.missionText}
              </p>
              <div className="space-y-3">
                {t.missionPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.valuesEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.valuesHeading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.values.map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <div
                  key={value.title}
                  className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Carriers */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.carriersEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.carriersHeading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.carriersSubtext}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {carriers.map((carrier) => (
              <div
                key={carrier}
                className="bg-secondary border border-border rounded-xl py-4 px-3 text-center font-semibold text-primary/80 hover:border-primary/40 hover:text-primary transition-colors text-sm"
              >
                {carrier}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t.ctaHeading}</h2>
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
