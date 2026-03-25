"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, TrendingUp, GraduationCap, Users, CheckCircle, Mail, Star, Briefcase } from "lucide-react"

const benefitIcons = [Clock, TrendingUp, GraduationCap, Users, Star, Briefcase]

const copy = {
  en: {
    heroEyebrow: "Career Opportunities",
    heroHeading: "Join the NewGen Family and Build a Career That Is Truly Yours",
    heroSubtext:
      "We are looking for mission-driven, passionate individuals to help more families build lasting financial security. At NewGen, your hard work is genuinely rewarded and your growth is fully supported.",
    whyJoinEyebrow: "Why Join NewGen",
    whyJoinHeading: "Why Choose NewGen Insurance Agency?",
    whyJoinSubtext:
      "We offer more than a job — we offer a career platform where you can achieve personal financial freedom while making a real difference in people's lives.",
    benefits: [
      {
        title: "Flexible Work Arrangement",
        description:
          "As an independent agent, you have the freedom to set your own schedule — building your business while maintaining work-life balance. Whether you want to start full-time or part-time, we accommodate your needs.",
      },
      {
        title: "Unlimited Income Potential",
        description:
          "Your income directly reflects your efforts and results. Top advisors earn six-figure annual incomes. With performance bonuses, team override commissions, and passive income streams, your financial growth is limitless.",
      },
      {
        title: "Comprehensive Training Resources",
        description:
          "We provide systematic onboarding training, ongoing product knowledge updates, sales skills workshops, and one-on-one mentorship programs. Even if you are new to insurance, we have everything you need to grow quickly.",
      },
      {
        title: "Supportive Team Culture",
        description:
          "Join a team full of positive energy and mutual support. We believe cooperation beats competition — every member's success is a win for the whole team. Regular team events and sharing sessions ensure you never feel alone.",
      },
      {
        title: "Access to Top Carrier Products",
        description:
          "Through NewGen's independent agent platform, you can represent products from more than 10 top U.S. insurance carriers. A rich product portfolio lets you meet diverse client needs, boosting close rates and client loyalty.",
      },
      {
        title: "Professional Brand Backing",
        description:
          "Leverage NewGen Insurance Agency's 20+ years of brand reputation and word-of-mouth. Our marketing resources, client referral system, and brand materials are powerful assets for growing your business.",
      },
    ],
    testimonialQuote:
      "Joining NewGen was one of the best decisions of my career. There are excellent training resources, a genuinely supportive team culture, and the flexibility to care for my own family while helping clients. In just three years my income doubled — and more importantly, I found real meaning in my work.",
    testimonialAuthor: "— NewGen Insurance Advisor, 3 Years with the Team",
    requirementsEyebrow: "Requirements",
    requirementsHeading: "What Kind of Partner Are We Looking For?",
    requirementsSubtext:
      "We welcome talent from all backgrounds — whether you are a seasoned insurance professional or someone entering the industry for the first time. What matters most is your passion for serving others and your integrity.",
    requirements: [
      "Hold or be willing to obtain a California Life & Health Insurance License (we provide exam prep support)",
      "Strong communication skills in English and/or Chinese (Cantonese and Mandarin both welcome)",
      "Genuine passion for helping others and solving problems",
      "An existing network or the motivation to actively develop new client relationships",
      "Integrity, law-abiding conduct, and strong professional ethics",
      "Ability to work independently while also being a collaborative team player",
    ],
    supportEyebrow: "What We Provide",
    supportHeading: "New Advisor Fast-Start Support",
    supportItems: [
      { title: "License Exam Preparation Support", desc: "Study materials, practice exams, and exam coaching to help you successfully obtain your life insurance license" },
      { title: "Mentor Matching Program", desc: "One-on-one guidance from senior advisors sharing real-world experience and client development strategies" },
      { title: "Product Knowledge Training", desc: "Systematic learning of insurance product features to master accurate and confident product presentations" },
      { title: "Marketing Materials Support", desc: "Professional presentations, social media assets, and client education resources to help you prospect with ease" },
      { title: "Regular Team Meetings", desc: "Weekly market updates, performance sharing, and best-practice case studies to continuously sharpen your skills" },
    ],
    stepsEyebrow: "Application Process",
    stepsHeading: "Four Steps to Start Your NewGen Journey",
    steps: [
      { step: "01", title: "Send Your Resume", description: "Email your resume and a brief self-introduction to info@topnewgen.com and tell us about your interest in the insurance industry and your goals." },
      { step: "02", title: "Initial Phone Screen", description: "Our recruiting manager will schedule a 30-minute phone or video call to learn about your background and career goals and walk you through the advisor role in detail." },
      { step: "03", title: "In-Person Meeting", description: "Invited to our Burlingame office for an in-depth conversation, a tour of our workspace, and a chance to meet the team." },
      { step: "04", title: "Join the Training Program", description: "Once you join, you immediately begin our multi-week structured onboarding program — quickly mastering product knowledge and business skills on your path to success." },
    ],
    ctaHeading: "Ready to Take the First Step?",
    ctaSubtext:
      "Send your resume to our recruiting inbox or reach out directly to learn more. We look forward to connecting with you and exploring what we can build together.",
    recruiterLabel: "Recruiting Email",
    emailInstructions:
      "Please include \"Applying for Insurance Advisor\" in the subject line along with your resume and a brief self-introduction. We typically respond within 3 business days.",
    ctaEmailBtn: "Send Your Application Now",
  },
  zh: {
    heroEyebrow: "職業發展機會",
    heroHeading: "加入新睿大家庭，開創屬於您的事業",
    heroSubtext:
      "我們正在尋找有使命感、有熱情的夥伴，一起幫助更多家庭建立穩固的財務保障。在新睿，您的努力將獲得真正的回報，您的成長將受到全力支持。",
    whyJoinEyebrow: "加入新睿的理由",
    whyJoinHeading: "為什麼選擇新睿保險集團？",
    whyJoinSubtext:
      "我們提供的不只是一份工作，而是一個讓您在幫助他人的同時，也能實現個人財務自由的事業平台。",
    benefits: [
      {
        title: "彈性工作安排",
        description:
          "作為獨立代理人，您可以自由安排工作時間，在兼顧家庭生活的同時建立自己的事業。無論是全職投入還是兼職起步，我們都能配合您的需求。",
      },
      {
        title: "無上限收入潛力",
        description:
          "您的收入完全反映您的努力與成果。頂尖顧問年收入可突破六位數。加上業績獎金、團隊超車獎勵及被動收入，您的財務成長空間無可限量。",
      },
      {
        title: "完整培訓資源",
        description:
          "我們提供系統性的入職培訓、持續的產品知識更新、銷售技巧工作坊以及一對一導師指導計劃。即使您是保險新手，我們也有完整的資源帶您快速成長。",
      },
      {
        title: "支持性團隊文化",
        description:
          "加入一個充滿正能量、互相扶持的團隊。我們相信合作勝於競爭，每位成員的成功都是整個團隊的榮耀。定期的團隊活動與分享會讓您不孤單。",
      },
      {
        title: "優質保險公司資源",
        description:
          "透過新睿的獨立代理人平台，您可以代理超過10家全美頂級保險公司的產品，擁有豐富的產品線，能夠滿足不同客戶的多元需求，提升成交率與客戶忠誠度。",
      },
      {
        title: "專業品牌背書",
        description:
          "借助新睿保險集團20年以上的品牌信譽與口碑，您的客戶開發更加事半功倍。我們的市場行銷資源、客戶轉介紹系統及品牌素材，都是您業務拓展的強大後盾。",
      },
    ],
    testimonialQuote:
      "加入新睿是我職業生涯中最正確的決定之一。這裡有完善的培訓資源、真誠互助的團隊文化，以及讓我在幫助客戶的同時也能照顧自己家庭的彈性安排。短短三年，我的收入翻倍，更重要的是，我找到了工作的意義。",
    testimonialAuthor: "— 新睿保險顧問，加入三年",
    requirementsEyebrow: "加入條件",
    requirementsHeading: "我們在尋找怎樣的夥伴？",
    requirementsSubtext:
      "我們歡迎不同背景的人才——無論您是保險業老手，還是初次踏入這個行業的新人，最重要的是您對服務他人的熱情與誠信待人的態度。",
    requirements: [
      "持有或願意取得加州壽險與健康險執照（我們提供備考支持）",
      "具備良好的中英文溝通能力（粵語、國語均歡迎）",
      "對幫助他人、解決問題有真誠的熱情",
      "具備基本的人際關係網絡或積極拓展客戶的意願",
      "誠信守法，具備良好的職業操守",
      "有獨立工作能力，同時也能融入團隊",
    ],
    supportEyebrow: "我們提供",
    supportHeading: "新人快速起步支持",
    supportItems: [
      { title: "執照備考支持", desc: "提供學習資料、模擬題庫及備考指導，助您順利取得壽險執照" },
      { title: "導師配對計劃", desc: "由資深顧問一對一指導，分享實戰經驗與客戶拓展技巧" },
      { title: "產品知識培訓", desc: "系統化學習各類保險產品特性，掌握準確、自信的產品說明能力" },
      { title: "行銷素材支持", desc: "提供專業簡報、社群媒體素材及客戶教育資源，助您輕鬆開發客戶" },
      { title: "定期團隊會議", desc: "每週市場更新、業績分享與最佳案例學習，持續精進您的業務能力" },
    ],
    stepsEyebrow: "申請流程",
    stepsHeading: "四步驟，開啟您的新睿旅程",
    steps: [
      { step: "01", title: "發送履歷", description: "將您的履歷及簡短自我介紹發送至 info@topnewgen.com，告訴我們您對保險行業的興趣與期望。" },
      { step: "02", title: "初步電話溝通", description: "我們的招募主任將與您進行30分鐘的電話或視訊面談，了解您的背景與職業目標，並詳細介紹顧問職位。" },
      { step: "03", title: "面對面交流", description: "受邀至我們位於Burlingame的辦公室進行深入交流，參觀工作環境並與團隊成員見面。" },
      { step: "04", title: "加入培訓計劃", description: "確認加入後，立即開始我們為期數週的系統性入職培訓，快速掌握產品知識與業務技能，踏上成功之路。" },
    ],
    ctaHeading: "準備好邁出第一步了嗎？",
    ctaSubtext:
      "立即發送您的履歷至我們的招募信箱，或直接與我們聯繫了解更多詳情。我們期待與您進一步交流，一起探索合作的可能性。",
    recruiterLabel: "招募信箱",
    emailInstructions:
      "請在郵件主旨標明「應徵保險顧問」，並附上您的履歷及簡短自我介紹。我們通常在3個工作日內回覆。",
    ctaEmailBtn: "立即發送應徵郵件",
  },
}

export function CareersContent() {
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

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.whyJoinEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.whyJoinHeading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.whyJoinSubtext}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index]
              return (
                <div
                  key={benefit.title}
                  className="bg-secondary rounded-2xl p-7 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-primary/20 font-serif mb-6">"</div>
          <p className="text-xl text-foreground leading-relaxed mb-6 italic">
            {t.testimonialQuote}
          </p>
          <p className="text-primary font-bold">{t.testimonialAuthor}</p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.requirementsEyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t.requirementsHeading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.requirementsSubtext}
              </p>
              <ul className="space-y-4">
                {t.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.supportEyebrow}</p>
              <h3 className="text-2xl font-bold text-primary mb-6">{t.supportHeading}</h3>
              <div className="space-y-5">
                {t.supportItems.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.stepsEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.stepsHeading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-background rounded-2xl p-6 border border-border h-full">
                  <div className="text-4xl font-black text-primary/10 mb-3">{item.step}</div>
                  <h3 className="font-bold text-primary mb-3 text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < t.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/30 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                {t.ctaHeading}
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                {t.ctaSubtext}
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-8 border border-primary-foreground/20">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-primary-foreground/60 text-sm">{t.recruiterLabel}</p>
                  <a
                    href="mailto:info@topnewgen.com"
                    className="text-primary-foreground font-bold text-lg hover:text-accent transition-colors"
                  >
                    info@topnewgen.com
                  </a>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm mb-6">
                {t.emailInstructions}
              </p>
              <a
                href="mailto:info@topnewgen.com?subject=應徵保險顧問"
                className="inline-flex items-center justify-center w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full transition-colors text-lg"
              >
                {t.ctaEmailBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
