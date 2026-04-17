"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Shield, Users } from "lucide-react"
import { useState } from "react"

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbx6ekusan9wCBnjkJOt10oUS7ch1nuK97MlQticsNdmq2AZc9xXLkLoHiCllqlAjJIt/exec"

export function ContactContent() {
  const { language } = useLanguage()
  const [intent, setIntent] = useState<"client" | "agent" | "">("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  function formatPhone(raw: string) {
    const digits = raw.replace(/\D/g, "").slice(0, 10)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }

  function validateField(field: string, value: string) {
    if (field === "name") {
      if (value.trim().length < 2) return language === "en" ? "Please enter your full name." : "請輸入您的姓名。"
    }
    if (field === "phone") {
      const digits = value.replace(/\D/g, "")
      if (digits.length !== 10) return language === "en" ? "Please enter a valid 10-digit US phone number." : "請輸入有效的10位美國電話號碼。"
    }
    if (field === "email") {
      if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(value.trim())) return language === "en" ? "Please enter a valid email address." : "請輸入有效的電子郵件地址。"
    }
    return ""
  }

  function validate() {
    const errs: Record<string, string> = {}
    if (!intent) errs.intent = language === "en" ? "Please select an option." : "請選擇一個選項。"
    const nameErr = validateField("name", name)
    if (nameErr) errs.name = nameErr
    const phoneErr = validateField("phone", phone)
    if (phoneErr) errs.phone = phoneErr
    const emailErr = validateField("email", email)
    if (emailErr) errs.email = emailErr
    return errs
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitting(true)
    try {
      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: intent, name, email, phone }),
      })
    } catch (_) {}
    setSubmitting(false)
    setSubmitted(true)
  }

  const officeHours = language === "en"
    ? [
        { day: "Monday", hours: "9:00 AM – 6:00 PM PST" },
        { day: "Tuesday", hours: "9:00 AM – 6:00 PM PST" },
        { day: "Wednesday", hours: "9:00 AM – 6:00 PM PST" },
        { day: "Thursday", hours: "9:00 AM – 6:00 PM PST" },
        { day: "Friday", hours: "9:00 AM – 6:00 PM PST" },
        { day: "Saturday", hours: "By appointment" },
        { day: "Sunday", hours: "Closed" },
      ]
    : [
        { day: "週一", hours: "9:00 AM – 6:00 PM PST" },
        { day: "週二", hours: "9:00 AM – 6:00 PM PST" },
        { day: "週三", hours: "9:00 AM – 6:00 PM PST" },
        { day: "週四", hours: "9:00 AM – 6:00 PM PST" },
        { day: "週五", hours: "9:00 AM – 6:00 PM PST" },
        { day: "週六", hours: "預約制" },
        { day: "週日", hours: "休息" },
      ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              {language === "en" ? "Contact Us" : "聯絡我們"}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {language === "en"
                ? "Whether you're exploring insurance options or interested in joining our team — we're here to help. Reach out and we'll get back to you within 1 business day."
                : "無論您是想了解保險方案，還是有意加入我們的團隊，我們都在這裡為您服務。聯繫我們，我們將在1個工作日內回覆您。"}
            </p>
          </div>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-10 bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Phone,
                label: language === "en" ? "Phone" : "電話",
                value: "(650) 755-1668",
                href: "tel:+16507551668",
                cta: language === "en" ? "Call Now" : "立即致電",
              },
              {
                icon: Mail,
                label: language === "en" ? "Email" : "電子郵件",
                value: "marketing@topnewgen.com",
                href: "mailto:marketing@topnewgen.com",
                cta: language === "en" ? "Send Email" : "發送郵件",
              },
              {
                icon: MapPin,
                label: language === "en" ? "Office" : "辦公室",
                value: "851 Burlway Rd Rm 608\nBurlingame, CA 94010",
                href: "https://maps.google.com/?q=851+Burlway+Rd+Room+608+Burlingame+CA+94010",
                cta: language === "en" ? "View Map" : "查看地圖",
              },
              {
                icon: Clock,
                label: language === "en" ? "Hours" : "辦公時間",
                value: language === "en" ? "Mon–Fri\n9:00 AM – 6:00 PM PST" : "週一至週五\n9:00 AM – 6:00 PM PST",
                href: null,
                cta: null,
              },
            ].map(({ icon: Icon, label, value, href, cta }) => (
              <div key={label} className="bg-background rounded-2xl p-6 border border-border text-center">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{label}</p>
                <p className="text-sm text-foreground font-medium leading-snug whitespace-pre-line mb-3">{value}</p>
                {href && cta && (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    {cta} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main: Form + Sidebar */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-primary mb-2">
                {language === "en" ? "Send Us a Message" : "發送訊息給我們"}
              </h2>
              <p className="text-muted-foreground mb-8">
                {language === "en"
                  ? "Fill in the form and we'll get back to you within 1 business day."
                  : "填寫表單，我們將在1個工作日內回覆您。"}
              </p>

              {submitted ? (
                <div className="bg-secondary/50 rounded-2xl p-16 text-center border border-border">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {language === "en" ? "Thank you!" : "謝謝您！"}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {language === "en" ? "We'll be in touch within 1 business day." : "我們將在1個工作日內與您聯繫。"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Intent toggle */}
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-semibold text-primary">
                      {language === "en" ? "I'm here because... *" : "我想要... *"}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => { setIntent("client"); setErrors(p => ({ ...p, intent: "" })) }}
                        className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 ${
                          intent === "client"
                            ? "border-primary bg-primary/5 text-primary"
                            : errors.intent ? "border-destructive text-muted-foreground" : "border-border text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        <Shield className={`w-7 h-7 ${intent === "client" ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="text-sm font-semibold text-center leading-snug">
                          {language === "en" ? "I'm interested in insurance" : "我想了解保險服務"}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => { setIntent("agent"); setErrors(p => ({ ...p, intent: "" })) }}
                        className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 ${
                          intent === "agent"
                            ? "border-primary bg-primary/5 text-primary"
                            : errors.intent ? "border-destructive text-muted-foreground" : "border-border text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        <Users className={`w-7 h-7 ${intent === "agent" ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="text-sm font-semibold text-center leading-snug">
                          {language === "en" ? "I want to join the team" : "我想加入團隊"}
                        </span>
                      </button>
                    </div>
                    {errors.intent && <p className="text-xs text-destructive mt-1">{errors.intent}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">
                        {language === "en" ? "Name *" : "姓名 *"}
                      </label>
                      <input
                        name="name" type="text"
                        value={name}
                        onChange={e => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: validateField("name", e.target.value) })) }}
                        onBlur={e => setErrors(p => ({ ...p, name: validateField("name", e.target.value) }))}
                        placeholder={language === "en" ? "Your full name" : "您的姓名"}
                        className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-secondary/40 ${errors.name ? "border-destructive" : "border-border"}`}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">
                        {language === "en" ? "Phone *" : "電話 *"}
                      </label>
                      <input
                        name="phone" type="tel"
                        value={phone}
                        onChange={e => { const v = formatPhone(e.target.value); setPhone(v); if (errors.phone) setErrors(p => ({ ...p, phone: validateField("phone", v) })) }}
                        onBlur={e => setErrors(p => ({ ...p, phone: validateField("phone", e.target.value) }))}
                        placeholder="(XXX) XXX-XXXX"
                        className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-secondary/40 ${errors.phone ? "border-destructive" : "border-border"}`}
                      />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary">
                      {language === "en" ? "Email *" : "電子郵件 *"}
                    </label>
                    <input
                      name="email" type="email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: validateField("email", e.target.value) })) }}
                      onBlur={e => setErrors(p => ({ ...p, email: validateField("email", e.target.value) }))}
                      placeholder="your@email.com"
                      className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-secondary/40 ${errors.email ? "border-destructive" : "border-border"}`}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 rounded-full disabled:opacity-50"
                  >
                    {submitting
                      ? (language === "en" ? "Submitting..." : "提交中...")
                      : (language === "en" ? "Send Message" : "發送訊息")}
                    {!submitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* Office hours */}
              <div className="bg-secondary rounded-2xl p-7 border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary text-lg">
                    {language === "en" ? "Office Hours" : "辦公時間"}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {officeHours.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="font-semibold text-foreground">{day}</span>
                      <span className="text-muted-foreground">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-secondary rounded-2xl p-7 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary text-lg">
                    {language === "en" ? "Our Office" : "辦公室位置"}
                  </h3>
                </div>
                <p className="font-semibold text-foreground mb-1">NewGen Insurance Agency</p>
                <p className="text-muted-foreground text-sm mb-1">851 Burlway Rd Room 608</p>
                <p className="text-muted-foreground text-sm mb-4">Burlingame, CA 94010</p>
                <a
                  href="https://maps.google.com/?q=851+Burlway+Rd+Room+608+Burlingame+CA+94010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  {language === "en" ? "View on Google Maps" : "在 Google Maps 查看"}
                </a>
              </div>

              {/* Quick contact */}
              <div className="bg-secondary rounded-2xl p-7 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary text-lg">
                    {language === "en" ? "Quick Contact" : "快速聯繫"}
                  </h3>
                </div>
                <div className="space-y-3">
                  <a href="tel:+16507551668" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    (650) 755-1668
                  </a>
                  <a href="mailto:marketing@topnewgen.com" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    marketing@topnewgen.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
