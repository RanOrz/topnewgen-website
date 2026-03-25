"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, BookOpen, Users, CheckCircle } from "lucide-react"

const teamValueIcons = [Award, BookOpen, Users, CheckCircle]

const copy = {
  en: {
    heroEyebrow: "Meet Our Team",
    heroHeading: "A Professional, Caring Advisory Team",
    heroSubtext:
      "Every advisor at NewGen Insurance Agency is a trusted protection partner you can rely on. We safeguard your most important financial security through deep expertise, continuous learning, and sincere service.",
    teamValuesEyebrow: "Team Spirit",
    teamValuesHeading: "Our Commitment to Excellence",
    teamValuesSubtext:
      "Every NewGen advisor is rigorously selected and trained, united by the same service philosophy — always putting the client's best interests first.",
    teamValues: [
      {
        title: "Continuous Professional Development",
        description:
          "Our advisors complete more than the required continuing education hours each year, ensuring they always stay current with the latest insurance regulations, product innovations, and financial planning strategies.",
      },
      {
        title: "Top Industry Certifications",
        description:
          "Team members hold multiple top-tier industry certifications including CLU, CFP, and CLTC, reflecting our high standards of professional knowledge and ethical conduct.",
      },
      {
        title: "Bilingual Service Capability",
        description:
          "Our advisory team is fluent in both English and Chinese, allowing us to communicate with you in the language you are most comfortable with so you fully understand every coverage option.",
      },
      {
        title: "Client-First Culture",
        description:
          "Every advisor adheres to the core principle of prioritizing the client's interests. All recommendations are guided by the client's long-term financial wellbeing — not short-term sales targets.",
      },
    ],
    membersEyebrow: "Meet Our Advisors",
    membersHeading: "Get to Know Our Experts",
    specialtyLabel: "Specialty",
    certificationsLabel: "Certifications",
    teamMembers: [
      {
        name: "陳志遠",
        title: "Senior Insurance Advisor",
        subtitle: "Senior Insurance Advisor",
        experience: "15+ Years of Insurance Planning Experience",
        certifications: ["Life Underwriting Training Council Fellow (LUTCF)", "Chartered Life Underwriter (CLU)", "Certified Financial Planner (CFP)"],
        specialty: "Specializes in life insurance, living benefits, and retirement planning",
        bio: "With extensive experience in financial protection planning, our advisor has served hundreds of Bay Area families. He makes complex insurance concepts easy to understand and designs tailored protection plans based on each family's unique needs.",
        initial: "陳",
      },
      {
        name: "林美玲",
        title: "Financial Planner",
        subtitle: "Financial Planner",
        experience: "12+ Years of Financial Planning Experience",
        certifications: ["Certified Financial Planner (CFP)", "Chartered Advisor for Senior Living (CASL)", "Chartered Retirement Planning Counselor (CRPC)"],
        specialty: "Specializes in retirement planning, tax optimization, and education fund planning",
        bio: "Our financial planner excels at integrating insurance and investment strategies to help clients build comprehensive financial safety nets. She pays particular attention to the financial independence and protection needs of female clients, earning their deep trust through empathy and expertise.",
        initial: "林",
      },
      {
        name: "張偉強",
        title: "Senior Insurance Advisor",
        subtitle: "Senior Insurance Advisor",
        experience: "10+ Years of Insurance Service Experience",
        certifications: ["Life Underwriting Training Council Fellow (LUTCF)", "Certified in Long-Term Care (CLTC)", "Business Ethics Certification"],
        specialty: "Specializes in long-term care insurance, estate planning, and business owner protection",
        bio: "With extensive experience serving business owners and high-net-worth families, our advisor excels at designing comprehensive protection plans encompassing long-term care, life insurance, and estate transfer — helping clients navigate every stage of life with confidence.",
        initial: "張",
      },
      {
        name: "王曉雯",
        title: "Insurance Advisor",
        subtitle: "Insurance Advisor",
        experience: "7+ Years of Insurance Consulting Experience",
        certifications: ["Associate Life Management Institute (ALMI)", "Annuity Product Specialist Certification", "Continuing Education: Health Insurance Planning"],
        specialty: "Specializes in family protection planning, term life insurance, and indexed universal life",
        bio: "Known for her attentiveness and patience, our advisor excels at guiding first-time insurance buyers through understanding their protection needs from scratch. Her warm service and clear product explanations help clients make the most informed decisions for their circumstances.",
        initial: "王",
      },
    ],
    ctaHeading: "Interested in Joining Our Team?",
    ctaSubtext:
      "We are looking for passionate, mission-driven insurance advisors. Join NewGen and help us protect more families' futures.",
    ctaCareers: "Explore Career Opportunities",
    ctaContact: "Contact Us",
  },
  zh: {
    heroEyebrow: "認識我們的團隊",
    heroHeading: "專業、用心的顧問團隊",
    heroSubtext:
      "新睿保險集團的每位顧問都是您值得信賴的保障夥伴。我們以專業知識、持續學習和真誠服務，守護您和家人最重要的財務安全。",
    teamValuesEyebrow: "團隊精神",
    teamValuesHeading: "我們對卓越服務的承諾",
    teamValuesSubtext:
      "每位新睿顧問都經過嚴格篩選與培訓，共同秉持相同的服務理念——以客戶的最大利益為依歸。",
    teamValues: [
      {
        title: "持續專業發展",
        description:
          "我們的顧問每年完成超過規定時數的持續教育課程，確保始終掌握最新的保險法規、產品創新與財務規劃策略。",
      },
      {
        title: "業界頂尖認證",
        description:
          "團隊成員持有CLU、CFP、CLTC等多項業界頂尖認證，代表我們對專業知識與職業道德的高標準承諾。",
      },
      {
        title: "雙語服務能力",
        description:
          "我們的顧問團隊精通中英雙語，能夠以您最熟悉的語言深入溝通，確保您完全理解每個保障選項的細節與意義。",
      },
      {
        title: "客戶優先文化",
        description:
          "每位顧問都秉持「客戶利益優先」的核心原則，所有建議均以客戶的長遠財務健康為最高考量，而非短期銷售指標。",
      },
    ],
    membersEyebrow: "專業顧問介紹",
    membersHeading: "認識我們的專家",
    specialtyLabel: "專業領域",
    certificationsLabel: "專業認證",
    teamMembers: [
      {
        name: "陳志遠",
        title: "資深保險顧問",
        subtitle: "Senior Insurance Advisor",
        experience: "15年+ 保險規劃經驗",
        certifications: ["壽險核保師認證 (ALMI)", "特許壽險核保師 (CLU)", "財務規劃師 (CFP)"],
        specialty: "專精人壽保險、活利益保障與退休規劃",
        bio: "陳顧問擁有豐富的財務保障規劃經驗，曾服務數百個灣區家庭。他以深入淺出的方式協助客戶理解複雜的保險概念，並根據每個家庭的獨特需求量身打造最適切的保障方案。",
        initial: "陳",
      },
      {
        name: "林美玲",
        title: "財務規劃師",
        subtitle: "Financial Planner",
        experience: "12年+ 財務規劃經驗",
        certifications: ["認證財務規劃師 (CFP)", "壽險與年金專家 (CASL)", "退休規劃顧問 (CRPC)"],
        specialty: "專精退休規劃、稅務優化與教育基金規劃",
        bio: "林規劃師擅長整合保險與投資策略，協助客戶建立全面的財務安全網。她特別關注女性客戶的財務獨立與保障需求，以同理心和專業知識贏得客戶高度信任。",
        initial: "林",
      },
      {
        name: "張偉強",
        title: "資深保險顧問",
        subtitle: "Senior Insurance Advisor",
        experience: "10年+ 保險服務經驗",
        certifications: ["壽險顧問資格 (LUTCF)", "長期護理保險專家 (CLTC)", "業務倫理認證"],
        specialty: "專精長期護理保險、遺產規劃與企業主保障",
        bio: "張顧問在服務企業主及高淨值家庭方面積累了豐富經驗，尤其擅長設計涵蓋長期護理、人壽保障與遺產傳承的綜合保障方案，幫助客戶在人生各階段都能從容應對。",
        initial: "張",
      },
      {
        name: "王曉雯",
        title: "保險顧問",
        subtitle: "Insurance Advisor",
        experience: "7年+ 保險諮詢經驗",
        certifications: ["壽險核保認證 (ALMI)", "年金產品專家認證", "持續進修：健康保險規劃"],
        specialty: "專精家庭保障規劃、定期壽險與指數型萬能壽險",
        bio: "王顧問以細心、耐心著稱，擅長陪伴初次購買保險的家庭從零開始理解保障需求。她以親切的服務態度和清晰的產品說明，幫助客戶做出最適合自身情況的明智決策。",
        initial: "王",
      },
    ],
    ctaHeading: "有興趣加入我們的團隊？",
    ctaSubtext:
      "我們正在尋找有熱情、有使命感的保險顧問。加入新睿，與我們一起守護更多家庭的未來。",
    ctaCareers: "了解職業機會",
    ctaContact: "聯繫我們",
  },
}

export function TeamContent() {
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

      {/* Team Values */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.teamValuesEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.teamValuesHeading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.teamValuesSubtext}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.teamValues.map((item, index) => {
              const Icon = teamValueIcons[index]
              return (
                <div
                  key={item.title}
                  className="bg-background rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.membersEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.membersHeading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-secondary rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-5 mb-5">
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">{member.initial}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-foreground font-semibold">{member.title}</p>
                    <p className="text-muted-foreground text-sm">{member.subtitle}</p>
                    <span className="inline-block mt-1 text-xs font-medium text-info bg-info/10 px-2 py-0.5 rounded-full">
                      {member.experience}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{member.bio}</p>
                <div className="mb-4">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">{t.specialtyLabel}</p>
                  <p className="text-sm text-foreground">{member.specialty}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">{t.certificationsLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t.ctaHeading}</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            {t.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/company/careers"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full transition-colors text-lg"
            >
              {t.ctaCareers}
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
