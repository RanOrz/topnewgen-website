"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, HandCoins, CheckCircle, ArrowRight, Users, Clock, Globe, Award } from "lucide-react"

export function SolutionsContent() {
  const { language } = useLanguage()

  const why = language === "en"
    ? [
        { icon: Award, title: "Independent Agency", desc: "We work with 20+ top-rated carriers to find the best plan for you — not just one company's products." },
        { icon: Clock, title: "20+ Years Experience", desc: "Serving over 3,000 families with deep expertise in life insurance and retirement planning." },
        { icon: Globe, title: "Bilingual Service", desc: "Full service in English and Chinese — so you understand every detail of your policy." },
        { icon: Users, title: "Personalized Advice", desc: "We analyze your family's needs and budget to recommend the right coverage combination." },
      ]
    : [
        { icon: Award, title: "獨立代理", desc: "與20家以上頂級保險公司合作，為您比較最優方案，不受單一公司限制。" },
        { icon: Clock, title: "20年以上經驗", desc: "服務超過3,000個家庭，在人壽保險與退休規劃領域擁有深厚專業知識。" },
        { icon: Globe, title: "中英雙語服務", desc: "全程中英文溝通，讓您清楚了解保單每一個細節，無語言障礙。" },
        { icon: Users, title: "個人化建議", desc: "根據您的家庭需求與預算，量身推薦最合適的保障組合。" },
      ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === "en" ? "Protect Your Family's Future" : "保障您家人的未來"}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "NewGen offers independent, bilingual insurance advice — so you get the right coverage at the right price."
              : "新睿提供獨立、中英雙語的保險諮詢，確保您以合理價格獲得最適合的保障。"}
          </p>
        </div>
      </section>

      {/* Two product cards */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {language === "en" ? "Our Insurance Solutions" : "我們的保險方案"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "en" ? "Two core products to protect and grow your family's wealth." : "兩大核心產品，保障並增長您家庭的財富。"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Life Insurance */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Life Insurance</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {language === "en"
                  ? "Protect your family with a tax-free death benefit — plus living benefits that let you access funds early if you face a critical illness. Builds cash value over time."
                  : "為家人提供免稅身故保障，並附帶生前福利，在罹患重大疾病時可提前領取保險金。同時累積現金價值，靈活應對未來需求。"}
              </p>
              <ul className="space-y-2 mb-8">
                {(language === "en"
                  ? ["Tax-free death benefit", "Living benefits for critical illness", "Cash value accumulation"]
                  : ["免稅身故理賠", "重大疾病生前福利", "現金價值累積"]
                ).map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/solutions/life-insurance">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold group">
                  {language === "en" ? "Learn More" : "了解更多"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Annuity */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-6">
                <HandCoins className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {language === "en" ? "Annuity" : "年金"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {language === "en"
                  ? "Secure a stable, guaranteed income stream for your retirement. Regardless of market conditions, you receive predictable payments — true peace of mind in your golden years."
                  : "為退休生活確保穩定、有保證的收入來源。無論市場漲跌，您都能獲得可預期的定期給付，退休生活無後顧之憂。"}
              </p>
              <ul className="space-y-2 mb-8">
                {(language === "en"
                  ? ["Guaranteed lifetime income", "Market downside protection", "Tax-deferred growth"]
                  : ["終身收入保證", "市場下跌保護", "稅收遞延成長"]
                ).map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/solutions/guaranteed-income">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold group">
                  {language === "en" ? "Learn More" : "了解更多"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Why NewGen */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {language === "en" ? "Why Choose NewGen?" : "為什麼選擇新睿？"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "en"
                ? "As an independent agency, we work for you — not for any single insurance company."
                : "作為獨立代理機構，我們為您服務，而非為任何單一保險公司服務。"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-secondary/40 border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === "en" ? "Ready to Get Protected?" : "準備好開始保障了嗎？"}
          </h2>
          <p className="text-white/70 text-lg mb-8">
            {language === "en"
              ? "Schedule a free consultation with one of our advisors — no pressure, no obligation."
              : "預約與我們顧問的免費諮詢，無壓力、無義務。"}
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
