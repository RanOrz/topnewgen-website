"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { ArrowRight, CheckCircle, DollarSign, Clock, Globe, Users, Shield, TrendingUp } from "lucide-react"

export default function WhyNewgenPage() {
  const { language } = useLanguage()

  const advantages = language === "en"
    ? [
        {
          icon: DollarSign,
          title: "Unlimited Income Potential",
          desc: "Your earnings are tied to your effort, not a salary cap. Top agents at NewGen earn six figures annually — and build passive income through team overrides.",
        },
        {
          icon: Clock,
          title: "Flexible Schedule",
          desc: "Work full-time or part-time — on your terms. NewGen fits around your life, whether you're transitioning careers or building a side income.",
        },
        {
          icon: Globe,
          title: "Bilingual Market Advantage",
          desc: "Serve both English and Chinese-speaking communities. NewGen's bilingual platform gives you access to an underserved market with enormous growth potential.",
        },
        {
          icon: Users,
          title: "Community & Culture",
          desc: "Join a team that celebrates your wins. Weekly meetings, team events, and a culture of mutual support — you're never building alone.",
        },
        {
          icon: Shield,
          title: "20+ Carrier Partners",
          desc: "Access products from 20+ top-rated insurance carriers. You're not tied to one company — you find the best solution for every client.",
        },
        {
          icon: TrendingUp,
          title: "Leadership Path",
          desc: "Build your own team and earn override commissions. NewGen has a clear promotion system — from agent to manager to regional director.",
        },
      ]
    : [
        {
          icon: DollarSign,
          title: "無上限收入潛力",
          desc: "您的收入與您的努力掛鉤，沒有薪資上限。新睿頂尖顧問年收入達六位數，並通過團隊管理佣金建立被動收入。",
        },
        {
          icon: Clock,
          title: "彈性工作時間",
          desc: "可選擇全職或兼職，完全根據您的生活安排。無論是轉換職業還是建立副業收入，新睿都能配合您的節奏。",
        },
        {
          icon: Globe,
          title: "雙語市場優勢",
          desc: "同時服務英語和中文社群。新睿的雙語平台讓您進入一個需求旺盛、競爭相對較少的市場。",
        },
        {
          icon: Users,
          title: "社群與文化",
          desc: "加入一個慶祝您成就的團隊。每週例會、團隊活動和互助文化，讓您在創業路上不孤單。",
        },
        {
          icon: Shield,
          title: "20家以上合作保險公司",
          desc: "取得20家以上頂級保險公司的產品。您不受限於單一公司，能為每位客戶找到最適合的方案。",
        },
        {
          icon: TrendingUp,
          title: "晉升管理路徑",
          desc: "建立自己的團隊並賺取管理佣金。新睿有清晰的晉升制度，從顧問到經理到區域總監。",
        },
      ]

  const whoFor = language === "en"
    ? [
        "New to insurance — we'll get you licensed and trained from scratch",
        "Experienced agents looking for better commission and more carrier options",
        "Professionals seeking a career change into financial services",
        "Part-time earners wanting to supplement their income",
        "Entrepreneurs ready to build and lead their own team",
      ]
    : [
        "保險新人 — 我們從零開始輔導您考照與培訓",
        "尋求更高佣金和更多保險公司選擇的資深顧問",
        "希望轉型進入金融服務業的專業人士",
        "想增加副業收入的兼職者",
        "準備好建立並領導自己團隊的創業者",
      ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              {language === "en" ? "Why NewGen" : "為什麼選擇新睿"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {language === "en"
                ? "More Than a Job — A Business You Own"
                : "不只是工作，而是屬於您的事業"}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {language === "en"
                ? "NewGen gives independent agents the platform, support, and community to build a business that grows with them."
                : "新睿為獨立顧問提供平台、支持與社群，幫助您建立一個與您一同成長的事業。"}
            </p>
          </div>
        </div>
      </section>

      {/* Advantages grid */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {language === "en" ? "Why Agents Choose NewGen" : "顧問選擇新睿的原因"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "en" ? "6 reasons our agents stay and grow." : "我們的顧問留下並持續成長的6個原因。"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {language === "en" ? "Who This Is For" : "適合哪些人"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "en" ? "NewGen welcomes agents at every stage." : "新睿歡迎各個階段的顧問。"}
            </p>
          </div>
          <div className="space-y-3">
            {whoFor.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-secondary/40 rounded-xl px-6 py-4 border border-border">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === "en" ? "Interested? Let's Talk." : "有興趣？讓我們聊聊。"}
          </h2>
          <p className="text-white/70 text-lg mb-8">
            {language === "en"
              ? "A NewGen team member will reach out within 1 business day."
              : "新睿團隊成員將在1個工作日內與您聯繫。"}
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
