"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import {
  TrendingUp,
  GraduationCap,
  Clock,
  Building2,
  Megaphone,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

export default function JoinPage() {
  const { t } = useLanguage()
  const r = t.recruiting
  const [licensed, setLicensed] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const whyItems = [
    { icon: TrendingUp, title: r.why1Title, desc: r.why1Desc },
    { icon: GraduationCap, title: r.why2Title, desc: r.why2Desc },
    { icon: Clock, title: r.why3Title, desc: r.why3Desc },
    { icon: Building2, title: r.why4Title, desc: r.why4Desc },
    { icon: Megaphone, title: r.why5Title, desc: r.why5Desc },
    { icon: Users, title: r.why6Title, desc: r.why6Desc },
  ]

  const processSteps = [
    { step: "01", title: r.process1Title, desc: r.process1Desc },
    { step: "02", title: r.process2Title, desc: r.process2Desc },
    { step: "03", title: r.process3Title, desc: r.process3Desc },
    { step: "04", title: r.process4Title, desc: r.process4Desc },
  ]

  const whoItems = [r.who1, r.who2, r.who3, r.who4, r.who5]

  const stats = [
    { value: "500+", label: r.statsAgents },
    { value: "20+", label: r.statsCarriers },
    { value: "20+", label: r.statsExperience },
    { value: "3,000+", label: r.statsFamilies },
  ]

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://ik.imagekit.io/lucalink/NewGen/Assets/hero.webp"
            alt="Join NewGen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/97 via-primary/85 to-primary/50" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              {r.heroBadge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {r.heroTitle}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              {r.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#apply">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg"
                >
                  {r.heroCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#why">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/60 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent rounded-full transition-all duration-300"
                >
                  {r.heroCtaSecondary}
                </Button>
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl">
            {stats.map((s) => (
              <div key={s.label} className="text-white">
                <p className="text-3xl font-bold text-accent">{s.value}</p>
                <p className="text-sm text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why NewGen ── */}
      <section id="why" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-primary border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Benefits
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">{r.whyTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{r.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We're Looking For ── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                Ideal Candidates
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">{r.whoTitle}</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-10">{r.whoSubtitle}</p>
              <a href="#apply">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-6 rounded-full text-lg"
                >
                  {r.heroCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <ul className="space-y-4">
              {whoItems.map((item) => (
                <li key={item} className="flex items-start gap-4 bg-white/5 rounded-xl px-6 py-5">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-primary border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              How It Works
            </span>
            <h2 className="text-4xl font-bold text-primary">{r.processTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ step, title, desc }, i) => (
              <div key={step} className="relative">
                {i < processSteps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-4 top-6 w-8 h-8 text-accent/40 z-10" />
                )}
                <div className="bg-secondary/40 rounded-2xl p-8 h-full">
                  <span className="text-5xl font-black text-accent/30 leading-none">{step}</span>
                  <h3 className="text-xl font-bold text-primary mt-3 mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-accent/10 text-primary border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                Apply
              </span>
              <h2 className="text-4xl font-bold text-primary mb-4">{r.formTitle}</h2>
              <p className="text-muted-foreground text-lg">{r.ctaSubtitle}</p>
            </div>

            {submitted ? (
              <div className="bg-background rounded-2xl p-12 text-center shadow-sm border border-border">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <p className="text-xl font-semibold text-primary">{r.formSuccess}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary">{r.formName}</label>
                    <input
                      required
                      type="text"
                      placeholder={r.formNamePlaceholder}
                      className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary">{r.formPhone}</label>
                    <input
                      type="tel"
                      placeholder={r.formPhonePlaceholder}
                      className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">{r.formEmail}</label>
                  <input
                    required
                    type="email"
                    placeholder={r.formEmailPlaceholder}
                    className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">{r.formLicensed}</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {[
                      { value: "yes", label: r.formLicensedYes },
                      { value: "no", label: r.formLicensedNo },
                    ].map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setLicensed(value)}
                        className={`flex-1 border rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          licensed === value
                            ? "border-accent bg-accent/10 text-primary"
                            : "border-border text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">{r.formMessage}</label>
                  <textarea
                    rows={4}
                    placeholder={r.formMessagePlaceholder}
                    className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-bold text-lg py-6 rounded-full transition-all duration-300"
                >
                  {r.formSubmit}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  {r.ctaSecondary}?{" "}
                  <Link href="/contact" className="text-primary font-semibold hover:underline">
                    {r.ctaSecondary} →
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
