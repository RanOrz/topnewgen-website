"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { useLanguage } from "@/contexts/language-context"

export function AboutContent() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              {language === "en" ? "About NewGen Insurance Agency" : "關於新睿保險集團"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              {language === "en"
                ? "Twenty Years of Dedication, Protecting the Families You Love"
                : "二十年如一日，守護您最珍貴的家人"}
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              {language === "en"
                ? "Since our founding, NewGen Insurance Agency has upheld the core principles of integrity, expertise, and genuine care. Leveraging the advantages of an independent brokerage, we have provided comprehensive, tailored protection solutions to over 3,000 families."
                : "自成立以來，新睿保險集團始終以「誠信、專業、用心」為核心，透過獨立顧問的優勢，為超過3,000個家庭提供最全面、最適切的保障解決方案。"}
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </main>
  )
}
