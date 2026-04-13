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
  ChevronDown,
  Smartphone,
  Globe,
  Star,
  Shield,
  HeartHandshake,
  Briefcase,
} from "lucide-react"
import { useState } from "react"

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbwNbYflVKS0z0XH20pdHbjXaf0lYrQnJYRlQ997e5xCN76ldRO25BbSkzyB9ryOuBYD/exec"

export default function JoinPage() {
  const { t } = useLanguage()
  const r = t.recruiting

  // Form state
  const [licensed, setLicensed] = useState("")
  const [agentType, setAgentType] = useState("")
  const [workType, setWorkType] = useState("")
  const [language, setLanguage] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const whyItems = [
    { icon: GraduationCap, title: r.why1Title, desc: r.why1Desc },
    { icon: Smartphone, title: r.why2Title, desc: r.why2Desc },
    { icon: Globe, title: r.why3Title, desc: r.why3Desc },
    { icon: Building2, title: r.why4Title, desc: r.why4Desc },
    { icon: Briefcase, title: r.why5Title, desc: r.why5Desc },
    { icon: Users, title: r.why6Title, desc: r.why6Desc },
  ]

  const personas = [
    {
      badge: r.persona1Badge,
      title: r.persona1Title,
      desc: r.persona1Desc,
      points: [r.persona1Point1, r.persona1Point2, r.persona1Point3],
      cta: r.persona1Cta,
      color: "from-blue-50 to-indigo-50 border-blue-200",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      badge: r.persona2Badge,
      title: r.persona2Title,
      desc: r.persona2Desc,
      points: [r.persona2Point1, r.persona2Point2, r.persona2Point3],
      cta: r.persona2Cta,
      color: "from-emerald-50 to-teal-50 border-emerald-200",
      badgeColor: "bg-emerald-100 text-emerald-700",
    },
    {
      badge: r.persona3Badge,
      title: r.persona3Title,
      desc: r.persona3Desc,
      points: [r.persona3Point1, r.persona3Point2, r.persona3Point3],
      cta: r.persona3Cta,
      color: "from-violet-50 to-purple-50 border-violet-200",
      badgeColor: "bg-violet-100 text-violet-700",
    },
  ]

  const supports = [
    { icon: Shield, title: r.support1Title, desc: r.support1Desc },
    { icon: GraduationCap, title: r.support2Title, desc: r.support2Desc },
    { icon: Smartphone, title: r.support3Title, desc: r.support3Desc },
    { icon: HeartHandshake, title: r.support4Title, desc: r.support4Desc },
    { icon: Briefcase, title: r.support5Title, desc: r.support5Desc },
    { icon: Users, title: r.support6Title, desc: r.support6Desc },
  ]

  const growthSteps = [
    { step: r.growth1Step, title: r.growth1Title, desc: r.growth1Desc },
    { step: r.growth2Step, title: r.growth2Title, desc: r.growth2Desc },
    { step: r.growth3Step, title: r.growth3Title, desc: r.growth3Desc },
    { step: r.growth4Step, title: r.growth4Title, desc: r.growth4Desc },
    { step: r.growth5Step, title: r.growth5Title, desc: r.growth5Desc },
    { step: r.growth6Step, title: r.growth6Title, desc: r.growth6Desc },
  ]

  const diffs = [
    { icon: Megaphone, title: r.diff1Title, desc: r.diff1Desc },
    { icon: Globe, title: r.diff2Title, desc: r.diff2Desc },
    { icon: TrendingUp, title: r.diff3Title, desc: r.diff3Desc },
  ]

  const faqs = [
    { q: r.faq1Q, a: r.faq1A },
    { q: r.faq2Q, a: r.faq2A },
    { q: r.faq3Q, a: r.faq3A },
    { q: r.faq4Q, a: r.faq4A },
    { q: r.faq5Q, a: r.faq5A },
    { q: r.faq6Q, a: r.faq6A },
    { q: r.faq7Q, a: r.faq7A },
    { q: r.faq8Q, a: r.faq8A },
    { q: r.faq9Q, a: r.faq9A },
  ]

  const interestOptions = [
    r.formInterest1,
    r.formInterest2,
    r.formInterest3,
    r.formInterest4,
    r.formInterest5,
  ]

  function toggleInterest(item: string) {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      state: (form.elements.namedItem("state") as HTMLInputElement).value,
      language,
      agentType,
      workType,
      licensed,
      interests: interests.join(", "),
      challenge: (form.elements.namedItem("challenge") as HTMLTextAreaElement).value,
    }
    try {
      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
    } catch (_) {
      // no-cors always throws, treat as success
    }
    setSubmitting(false)
    setSubmitted(true)
  }

  const stats = [
    { value: "500+", label: r.statsAgents },
    { value: "20+", label: r.statsCarriers },
    { value: "20+", label: r.statsExperience },
    { value: "3,000+", label: r.statsFamilies },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Join NewGen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{background: "linear-gradient(to right, hsl(215 45% 32% / 0.80), hsl(215 45% 32% / 0.60), hsl(215 45% 32% / 0.25))"}} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-40 pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-10">
              {r.heroBadge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white leading-tight">
              {r.heroTitle}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-14 leading-relaxed max-w-2xl">
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
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/60 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent rounded-full transition-all duration-300"
                >
                  {r.heroCtaBook}
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-3xl">
            {stats.map((s) => (
              <div key={s.label} className="text-white">
                <p className="text-3xl font-bold text-accent">{s.value}</p>
                <p className="text-sm text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join Newgen ── */}
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

      {/* ── Who It's For ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-primary border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Who It's For
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">{r.whoTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{r.whoSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl p-8 border bg-gradient-to-br ${p.color} flex flex-col`}
              >
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit ${p.badgeColor}`}>
                  {p.badge}
                </span>
                <h3 className="text-xl font-bold text-primary mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-primary/80">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a href="#apply">
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                  >
                    {p.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Support You Get ── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Support
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">{r.supportTitle}</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">{r.supportSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supports.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-white/65 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#apply">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold px-10 py-6 rounded-full text-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── How You Grow ── */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-primary border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Growth Path
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">{r.growthTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{r.growthSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthSteps.map(({ step, title, desc }, i) => (
              <div key={step} className="relative bg-background rounded-2xl p-8 border border-border shadow-sm">
                <span className="text-5xl font-black text-accent/25 leading-none">{step}</span>
                <h3 className="text-xl font-bold text-primary mt-3 mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                {i < growthSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-accent/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why We're Different ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-primary border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Our Difference
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">{r.diffTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{r.diffSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diffs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center px-6 py-10 rounded-2xl border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-primary border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">{r.faqTitle}</h2>
            <p className="text-lg text-muted-foreground">{r.faqSubtitle}</p>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                >
                  <span className="font-semibold text-primary pr-4">{q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 text-muted-foreground leading-relaxed text-sm">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#apply">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold px-10 py-6 rounded-full text-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-accent/10 text-primary border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                Apply
              </span>
              <h2 className="text-4xl font-bold text-primary mb-4">{r.formTitle}</h2>
              <p className="text-muted-foreground text-lg">{r.formSubtitle}</p>
            </div>

            {submitted ? (
              <div className="bg-secondary/40 rounded-2xl p-12 text-center border border-border">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-3">{r.formSuccess}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{r.formSuccessDesc}</p>
                <a href="#why" className="text-primary font-semibold hover:underline">
                  {r.formSuccessLink}
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-secondary/30 rounded-2xl p-8 md:p-12 border border-border space-y-7"
              >
                {/* Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary">{r.formName} *</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder={r.formNamePlaceholder}
                      className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary">{r.formPhone}</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder={r.formPhonePlaceholder}
                      className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary">{r.formEmail} *</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder={r.formEmailPlaceholder}
                      className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary">{r.formState}</label>
                    <input
                      name="state"
                      type="text"
                      placeholder={r.formStatePlaceholder}
                      className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                    />
                  </div>
                </div>

                {/* Preferred Language */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">{r.formLanguage}</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {[
                      { value: "english", label: r.formLanguageEn },
                      { value: "chinese", label: r.formLanguageZh },
                      { value: "bilingual", label: r.formLanguageBoth },
                    ].map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setLanguage(value)}
                        className={`flex-1 border rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          language === value
                            ? "border-accent bg-accent/10 text-primary"
                            : "border-border text-muted-foreground hover:border-accent/50 bg-background"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Agent Type */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">{r.formAgentType}</label>
                  <div className="flex flex-col gap-3">
                    {[
                      { value: "new", label: r.formAgentTypeNew },
                      { value: "experienced", label: r.formAgentTypeExp },
                      { value: "builder", label: r.formAgentTypeBuilder },
                    ].map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setAgentType(value)}
                        className={`border rounded-xl px-4 py-3 text-sm font-medium text-left transition-all ${
                          agentType === value
                            ? "border-accent bg-accent/10 text-primary"
                            : "border-border text-muted-foreground hover:border-accent/50 bg-background"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Work Type */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">{r.formWorkType}</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {[
                      { value: "part-time", label: r.formWorkPartTime },
                      { value: "full-time", label: r.formWorkFullTime },
                      { value: "flexible", label: r.formWorkFlexible },
                    ].map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setWorkType(value)}
                        className={`flex-1 border rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          workType === value
                            ? "border-accent bg-accent/10 text-primary"
                            : "border-border text-muted-foreground hover:border-accent/50 bg-background"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Licensed */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">{r.formLicensed}</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {[
                      { value: "yes", label: r.formLicensedYes },
                      { value: "in-progress", label: r.formLicensedInProgress },
                      { value: "no", label: r.formLicensedNo },
                    ].map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setLicensed(value)}
                        className={`flex-1 border rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          licensed === value
                            ? "border-accent bg-accent/10 text-primary"
                            : "border-border text-muted-foreground hover:border-accent/50 bg-background"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-semibold text-primary">{r.formInterests}</label>
                  <div className="flex flex-col gap-2">
                    {interestOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleInterest(item)}
                        className={`border rounded-xl px-4 py-3 text-sm font-medium text-left transition-all flex items-center gap-3 ${
                          interests.includes(item)
                            ? "border-accent bg-accent/10 text-primary"
                            : "border-border text-muted-foreground hover:border-accent/50 bg-background"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                            interests.includes(item) ? "bg-accent border-accent" : "border-border"
                          }`}
                        >
                          {interests.includes(item) && (
                            <CheckCircle className="w-3 h-3 text-primary" />
                          )}
                        </div>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">{r.formChallenge}</label>
                  <textarea
                    name="challenge"
                    rows={3}
                    placeholder={r.formChallengePlaceholder}
                    className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-bold text-lg py-6 rounded-full transition-all duration-300"
                >
                  {submitting ? "Submitting..." : r.formSubmit}
                  {!submitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Prefer to talk first?{" "}
                  <Link href="/contact" className="text-primary font-semibold hover:underline">
                    Book a discovery call →
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
