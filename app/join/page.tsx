"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { Star, GraduationCap, CheckCircle, ArrowRight } from "lucide-react"

export default function JoinPage() {
  const { language } = useLanguage()

  const stats = [
    { value: "500+", label: language === "en" ? "Active Agents" : "在職顧問" },
    { value: "20+", label: language === "en" ? "Carrier Partners" : "合作保險公司" },
    { value: "20+", label: language === "en" ? "Years in Business" : "行業經驗" },
    { value: "3,000+", label: language === "en" ? "Families Served" : "服務家庭" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero.png" alt="Join NewGen" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(215 45% 32% / 0.85), hsl(215 45% 32% / 0.60), hsl(215 45% 32% / 0.20))" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {language === "en" ? "Build Your Career with NewGen" : "與新睿一起建立您的事業"}
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              {language === "en"
                ? "Whether you're new to insurance or an experienced agent looking to grow — NewGen gives you the training, tools, and support to succeed."
                : "無論您是保險新人還是資深顧問，新睿都能提供培訓、工具與支持，助您邁向成功。"}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-6 rounded-full text-lg">
                {language === "en" ? "Get In Touch" : "立即聯繫"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-accent">{s.value}</p>
                <p className="text-sm text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two path cards */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {language === "en" ? "Learn More About Joining Us" : "深入了解加入我們"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "en"
                ? "Discover why agents choose NewGen and how we develop successful careers."
                : "了解為什麼顧問選擇新睿，以及我們如何培育成功的事業。"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Why NewGen */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {language === "en" ? "Why NewGen" : "為什麼選擇新睿"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {language === "en"
                  ? "Competitive commissions, flexible hours, bilingual market advantage, and a leadership team that invests in your growth."
                  : "具競爭力的佣金結構、彈性工作時間、雙語市場優勢，以及真正投資於您成長的領導團隊。"}
              </p>
              <ul className="space-y-2 mb-8">
                {(language === "en"
                  ? ["Unlimited income potential", "Work full-time or part-time", "No cold calling required"]
                  : ["無上限收入潛力", "可全職或兼職", "無需陌生開發"]
                ).map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/join/why-newgen">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold group">
                  {language === "en" ? "Learn More" : "了解更多"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Training System */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {language === "en" ? "Training System" : "培訓體系"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {language === "en"
                  ? "From licensing to leadership — our structured training program gives you the skills and confidence to build a lasting insurance business."
                  : "從考取執照到晉升管理，我們結構化的培訓計劃賦予您建立保險事業所需的技能與信心。"}
              </p>
              <ul className="space-y-2 mb-8">
                {(language === "en"
                  ? ["Pre-licensing support", "Product & sales training", "Ongoing mentorship"]
                  : ["考照輔導支持", "產品與銷售培訓", "持續導師指導"]
                ).map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/join/training">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold group">
                  {language === "en" ? "Learn More" : "了解更多"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === "en" ? "Ready to Get Started?" : "準備好開始了嗎？"}
          </h2>
          <p className="text-white/70 text-lg mb-8">
            {language === "en"
              ? "Reach out and a NewGen team member will connect with you within 1 business day."
              : "聯繫我們，新睿團隊將在1個工作日內與您聯繫。"}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-10 py-6 rounded-full text-lg">
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
