"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Users } from "lucide-react"
import { useState } from "react"

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbwnC4YOk1dkV6qzSaWml2D37x0KzlLTKbVIwXjsbvGgc-Im9FFUX58dZPLLc0hsXqQM/exec"

export function ContactSection() {
  const { language } = useLanguage()
  const [intent, setIntent] = useState<"client" | "agent" | "">("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [note, setNote] = useState("")

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
        body: JSON.stringify({ type: intent, name, email, phone, note }),
      })
    } catch (_) {}
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === "en" ? "Get in Touch" : "聯絡我們"}
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            {language === "en"
              ? "Tell us a bit about yourself and we'll get back to you within 1 business day."
              : "告訴我們您的需求，我們將在1個工作日內回覆。"}
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {language === "en" ? "Thank you!" : "謝謝您！"}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {language === "en" ? "We'll be in touch within 1 business day." : "我們將在1個工作日內與您聯繫。"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Intent toggle */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">
                    {language === "en" ? "I'm here because... *" : "我想要... *"}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => { setIntent("client"); setErrors(p => ({ ...p, intent: "" })) }}
                      className={`flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 transition-all duration-200 ${
                        intent === "client"
                          ? "border-primary bg-primary/5 text-primary shadow-sm"
                          : errors.intent ? "border-destructive/50 text-muted-foreground bg-secondary/30" : "border-border text-muted-foreground bg-secondary/30 hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <Shield className={`w-6 h-6 ${intent === "client" ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-xs font-semibold text-center leading-snug">
                        {language === "en" ? "I'm interested in insurance" : "我想了解保險服務"}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setIntent("agent"); setErrors(p => ({ ...p, intent: "" })) }}
                      className={`flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 transition-all duration-200 ${
                        intent === "agent"
                          ? "border-primary bg-primary/5 text-primary shadow-sm"
                          : errors.intent ? "border-destructive/50 text-muted-foreground bg-secondary/30" : "border-border text-muted-foreground bg-secondary/30 hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <Users className={`w-6 h-6 ${intent === "agent" ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-xs font-semibold text-center leading-snug">
                        {language === "en" ? "I want to join the team" : "我想加入團隊"}
                      </span>
                    </button>
                  </div>
                  {errors.intent && <p className="text-xs text-destructive">{errors.intent}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-foreground">
                      {language === "en" ? "Name *" : "姓名 *"}
                    </label>
                    <input
                      name="name" type="text"
                      value={name}
                      onChange={e => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: validateField("name", e.target.value) })) }}
                      onBlur={e => setErrors(p => ({ ...p, name: validateField("name", e.target.value) }))}
                      placeholder={language === "en" ? "Your full name" : "您的姓名"}
                      className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-secondary/30 transition-colors ${errors.name ? "border-destructive" : "border-border focus:border-primary"}`}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-foreground">
                      {language === "en" ? "Phone *" : "電話 *"}
                    </label>
                    <input
                      name="phone" type="tel"
                      value={phone}
                      onChange={e => { const v = formatPhone(e.target.value); setPhone(v); if (errors.phone) setErrors(p => ({ ...p, phone: validateField("phone", v) })) }}
                      onBlur={e => setErrors(p => ({ ...p, phone: validateField("phone", e.target.value) }))}
                      placeholder="(XXX) XXX-XXXX"
                      className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-secondary/30 transition-colors ${errors.phone ? "border-destructive" : "border-border focus:border-primary"}`}
                    />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground">
                    {language === "en" ? "Email *" : "電子郵件 *"}
                  </label>
                  <input
                    name="email" type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: validateField("email", e.target.value) })) }}
                    onBlur={e => setErrors(p => ({ ...p, email: validateField("email", e.target.value) }))}
                    placeholder="your@email.com"
                    className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-secondary/30 transition-colors ${errors.email ? "border-destructive" : "border-border focus:border-primary"}`}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground">
                    {language === "en" ? "Notes (optional)" : "備注（選填）"}
                  </label>
                  <textarea
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder={language === "en" ? "Anything you'd like us to know..." : "有什麼想讓我們提前了解的..."}
                    rows={3}
                    className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-secondary/30 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base py-6 rounded-full disabled:opacity-50 mt-2"
                >
                  {submitting
                    ? (language === "en" ? "Submitting..." : "提交中...")
                    : (language === "en" ? "Send Message" : "發送訊息")}
                  {!submitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
