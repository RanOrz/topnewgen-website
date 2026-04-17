"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { ArrowRight, CheckCircle, BookOpen, Smartphone, HeartHandshake, Award, ChevronRight } from "lucide-react"

export default function TrainingPage() {
  const { language } = useLanguage()

  const phases = language === "en"
    ? [
        {
          step: "01",
          title: "Pre-Licensing Support",
          desc: "Not licensed yet? No problem. We guide you through the exam prep process, connect you with approved study resources, and support you every step of the way to passing your state license.",
          points: ["Study material recommendations", "Mock exams and practice tests", "Licensing process walkthrough"],
        },
        {
          step: "02",
          title: "New Agent Onboarding",
          desc: "Once licensed, you'll go through our structured onboarding program — learning the products, the tools, and how to have your first client conversations with confidence.",
          points: ["Product knowledge training (life & annuity)", "Sales script and conversation frameworks", "CRM and quoting tool setup"],
        },
        {
          step: "03",
          title: "Field Training & Mentorship",
          desc: "Pair with an experienced mentor for live client meetings and ride-alongs. Learn by doing — with real cases, real feedback, and real results.",
          points: ["1-on-1 mentor assignment", "Joint client appointments", "Weekly debrief and coaching sessions"],
        },
        {
          step: "04",
          title: "Advanced & Leadership Development",
          desc: "As you grow, so does your training. Advanced product training, marketing strategies, and a leadership development track to help you build and manage your own team.",
          points: ["Advanced product certifications", "Team building and recruitment skills", "Management and override income training"],
        },
      ]
    : [
        {
          step: "01",
          title: "考照輔導",
          desc: "還沒有執照？沒關係。我們引導您完成考試準備，提供認可的學習資源，並全程支持您通過州立執照考試。",
          points: ["學習資料推薦", "模擬考試與練習題", "考照流程全程解說"],
        },
        {
          step: "02",
          title: "新顧問入職培訓",
          desc: "取得執照後，您將參加我們結構化的入職培訓計劃，學習產品知識、使用工具，並自信地展開第一次客戶對話。",
          points: ["產品知識培訓（人壽與年金）", "銷售話術與對話框架", "CRM與報價工具設置"],
        },
        {
          step: "03",
          title: "現場培訓與導師指導",
          desc: "與資深導師配對，參與真實客戶會議與陪同拜訪。在真實案例中學習，獲得即時反饋，取得真實成果。",
          points: ["1對1導師配對", "聯合客戶拜訪", "每週覆盤與教練輔導"],
        },
        {
          step: "04",
          title: "進階培訓與領導力發展",
          desc: "隨著您的成長，培訓也同步升級。進階產品培訓、市場行銷策略，以及幫助您建立並管理自己團隊的領導力發展課程。",
          points: ["進階產品認證", "團隊建立與招募技巧", "管理與管理佣金培訓"],
        },
      ]

  const tools = language === "en"
    ? [
        { icon: Smartphone, title: "Agent Dashboard", desc: "A dedicated platform to manage clients, track policies, and run illustrations — all in one place." },
        { icon: BookOpen, title: "Resource Library", desc: "Scripts, presentation decks, product guides, and marketing materials ready to use." },
        { icon: HeartHandshake, title: "Back-Office Support", desc: "Our operations team handles underwriting follow-ups and carrier communication so you can focus on clients." },
        { icon: Award, title: "20+ Carrier Access", desc: "Quote and compare products from over 20 top-rated carriers instantly." },
      ]
    : [
        { icon: Smartphone, title: "顧問專屬平台", desc: "專屬平台管理客戶、追蹤保單並製作建議書，一站式完成所有工作。" },
        { icon: BookOpen, title: "資源庫", desc: "話術、簡報、產品指南和行銷材料，隨時可用。" },
        { icon: HeartHandshake, title: "後台支援", desc: "我們的運營團隊負責保險核保跟進和與保險公司溝通，讓您專注於服務客戶。" },
        { icon: Award, title: "20家以上保險公司", desc: "即時查詢並比較20家以上頂級保險公司的產品報價。" },
      ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              {language === "en" ? "Training System" : "培訓體系"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {language === "en"
                ? "From Day One to Top Producer"
                : "從第一天到頂尖顧問"}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {language === "en"
                ? "NewGen's training system is built to turn beginners into confident professionals — and experienced agents into leaders."
                : "新睿的培訓體系旨在將新人培育成自信的專業顧問，並將資深顧問培養成領導者。"}
            </p>
          </div>
        </div>
      </section>

      {/* Training phases */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {language === "en" ? "The 4-Phase Training Path" : "四階段培訓路徑"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "en" ? "A clear, structured journey from license to leadership." : "從考照到領導，清晰而有結構的成長路徑。"}
            </p>
          </div>

          <div className="space-y-6">
            {phases.map(({ step, title, desc, points }, i) => (
              <div key={step} className="relative bg-background rounded-2xl p-8 border border-border shadow-sm flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-black text-accent/20 leading-none">{step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-1.5">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Support */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">
              {language === "en" ? "Tools We Give You" : "我們提供的工具"}
            </h2>
            <p className="text-white/70 text-lg">
              {language === "en" ? "You focus on clients — we handle the rest." : "您專注於客戶，其餘的我們來處理。"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {language === "en" ? "Ready to Start Your Training?" : "準備好開始培訓了嗎？"}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {language === "en"
              ? "Reach out and we'll walk you through the next steps."
              : "聯繫我們，我們將帶您了解後續步驟。"}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 rounded-full text-lg">
              {language === "en" ? "Contact Us" : "聯絡我們"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
