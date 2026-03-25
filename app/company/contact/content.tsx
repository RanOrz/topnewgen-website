"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, CalendarDays, MessageSquare } from "lucide-react"

const contactIconMap = [Phone, Mail, MapPin, Clock]

const copy = {
  en: {
    heroEyebrow: "Here for You Anytime",
    heroHeading: "Contact NewGen Insurance Agency",
    heroSubtext:
      "Whether you have questions about insurance or want to learn about protection plans suited to your family, our professional advisory team is always ready to provide free, no-pressure consultations.",
    contactInfo: [
      {
        title: "Phone",
        lines: ["(650) 755-1668"],
        action: { label: "Call Now", href: "tel:+16507551668" },
      },
      {
        title: "Email",
        lines: ["info@topnewgen.com"],
        action: { label: "Send Email", href: "mailto:info@topnewgen.com" },
      },
      {
        title: "Office Address",
        lines: ["851 Burlway Rd Room 608", "Burlingame, CA 94010"],
        action: {
          label: "View Map",
          href: "https://maps.google.com/?q=851+Burlway+Rd+Room+608+Burlingame+CA+94010",
        },
      },
      {
        title: "Office Hours",
        lines: ["Monday – Friday", "9:00 AM — 6:00 PM PST"],
        action: null,
      },
    ],
    formEyebrow: "Send a Message",
    formHeading: "Tell Us What You Need",
    formSubtext:
      "Fill out the form below and we will get back to you within one business day to arrange a free protection consultation.",
    labelName: "Name",
    labelPhone: "Phone Number",
    labelEmail: "Email",
    labelTopic: "Consultation Topic",
    labelMessage: "Message",
    placeholderName: "Your name",
    placeholderMessage: "Tell us about your needs or questions and we will get back to you with expert advice as soon as possible...",
    topicPlaceholder: "Select a consultation topic",
    topicOptions: [
      { value: "life-insurance", label: "Life Insurance Planning" },
      { value: "retirement", label: "Retirement Planning" },
      { value: "tax-free", label: "Tax-Free Cash Value Planning" },
      { value: "college", label: "Education Fund Planning" },
      { value: "ltc", label: "Long-Term Care Insurance" },
      { value: "estate", label: "Estate Planning" },
      { value: "other", label: "Other Questions" },
    ],
    consentText: "I agree that NewGen Insurance Agency may collect and use the personal information I provide in accordance with its",
    consentPrivacyLink: "Privacy Policy",
    consentSuffix: "to contact me and provide insurance-related services.",
    submitBtn: "Send Message",
    scheduleHeading: "Book a Consultation Directly",
    scheduleSubtext:
      "Don't want to wait? Use our online booking system now to choose a time that works for you and have a one-on-one video or phone consultation with an advisor.",
    scheduleBtn: "Go to Online Booking",
    officeHoursHeading: "Office Hours",
    officeHours: [
      { day: "Monday", hours: "9:00 AM – 6:00 PM PST" },
      { day: "Tuesday", hours: "9:00 AM – 6:00 PM PST" },
      { day: "Wednesday", hours: "9:00 AM – 6:00 PM PST" },
      { day: "Thursday", hours: "9:00 AM – 6:00 PM PST" },
      { day: "Friday", hours: "9:00 AM – 6:00 PM PST" },
      { day: "Saturday", hours: "By appointment if needed" },
      { day: "Sunday", hours: "Closed" },
    ],
    officeLocationHeading: "Office Location",
    officeCompanyName: "NewGen Insurance Agency",
    viewOnMaps: "View on Google Maps",
    quickContactHeading: "Quick Contact",
  },
  zh: {
    heroEyebrow: "隨時為您服務",
    heroHeading: "聯繫新睿保險集團",
    heroSubtext:
      "無論您有任何保險問題，或是想了解適合您家庭的保障方案，我們的專業顧問團隊隨時準備好為您提供免費、無壓力的諮詢服務。",
    contactInfo: [
      {
        title: "電話",
        lines: ["(650) 755-1668"],
        action: { label: "立即致電", href: "tel:+16507551668" },
      },
      {
        title: "電子郵件",
        lines: ["info@topnewgen.com"],
        action: { label: "發送郵件", href: "mailto:info@topnewgen.com" },
      },
      {
        title: "辦公地址",
        lines: ["851 Burlway Rd Room 608", "Burlingame, CA 94010"],
        action: {
          label: "查看地圖",
          href: "https://maps.google.com/?q=851+Burlway+Rd+Room+608+Burlingame+CA+94010",
        },
      },
      {
        title: "辦公時間",
        lines: ["週一至週五", "上午9:00 — 下午6:00 PST"],
        action: null,
      },
    ],
    formEyebrow: "發送訊息",
    formHeading: "告訴我們您的需求",
    formSubtext:
      "填寫以下表單，我們將在一個工作日內與您聯繫，為您安排免費的保障諮詢。",
    labelName: "姓名",
    labelPhone: "電話號碼",
    labelEmail: "電子郵件",
    labelTopic: "諮詢主題",
    labelMessage: "訊息內容",
    placeholderName: "您的姓名",
    placeholderMessage: "請告訴我們您的需求或問題，我們將盡快為您提供專業的回覆...",
    topicPlaceholder: "請選擇諮詢主題",
    topicOptions: [
      { value: "life-insurance", label: "人壽保險規劃" },
      { value: "retirement", label: "退休金規劃" },
      { value: "tax-free", label: "免稅現金值規劃" },
      { value: "college", label: "教育基金規劃" },
      { value: "ltc", label: "長期護理保險" },
      { value: "estate", label: "遺產規劃" },
      { value: "other", label: "其他問題" },
    ],
    consentText: "我同意新睿保險集團根據其",
    consentPrivacyLink: "隱私政策",
    consentSuffix: "收集並使用我提供的個人資料，以便聯繫我並提供保險相關服務。",
    submitBtn: "發送訊息",
    scheduleHeading: "直接預約諮詢",
    scheduleSubtext:
      "不想等待？立即透過我們的線上預約系統，選擇您方便的時間，與顧問進行一對一視訊或電話諮詢。",
    scheduleBtn: "前往線上預約系統",
    officeHoursHeading: "辦公時間",
    officeHours: [
      { day: "週一", hours: "9:00 AM – 6:00 PM PST" },
      { day: "週二", hours: "9:00 AM – 6:00 PM PST" },
      { day: "週三", hours: "9:00 AM – 6:00 PM PST" },
      { day: "週四", hours: "9:00 AM – 6:00 PM PST" },
      { day: "週五", hours: "9:00 AM – 6:00 PM PST" },
      { day: "週六", hours: "如有需要，可預約安排" },
      { day: "週日", hours: "休息" },
    ],
    officeLocationHeading: "辦公室位置",
    officeCompanyName: "新睿保險集團",
    viewOnMaps: "在 Google Maps 上查看",
    quickContactHeading: "立即聯繫",
  },
}

export function ContactContent() {
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

      {/* Contact Info Cards */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.contactInfo.map((item, index) => {
              const Icon = contactIconMap[index]
              return (
                <div
                  key={item.title}
                  className="bg-background rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{item.title}</h3>
                  <div className="space-y-1 mb-4">
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                  {item.action && (
                    <a
                      href={item.action.href}
                      target={item.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center text-sm font-semibold text-primary hover:text-info transition-colors underline-offset-2 hover:underline"
                    >
                      {item.action.label}
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Details */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <p className="text-info font-semibold text-sm uppercase tracking-widest mb-3">{t.formEyebrow}</p>
              <h2 className="text-3xl font-bold text-primary mb-2">{t.formHeading}</h2>
              <p className="text-muted-foreground mb-8">
                {t.formSubtext}
              </p>
              <form className="space-y-5" action="mailto:info@topnewgen.com" method="post">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      {t.labelName} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={t.placeholderName}
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      {t.labelPhone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(XXX) XXX-XXXX"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    {t.labelEmail} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="topic" className="block text-sm font-semibold text-foreground mb-2">
                    {t.labelTopic}
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
                  >
                    <option value="">{t.topicPlaceholder}</option>
                    {t.topicOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    {t.labelMessage} <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t.placeholderMessage}
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm resize-none"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/30"
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                    {t.consentText}
                    <a href="/privacy" className="text-info hover:underline mx-1">{t.consentPrivacyLink}</a>
                    {t.consentSuffix}
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-colors text-lg"
                >
                  {t.submitBtn}
                </button>
              </form>
            </div>

            {/* Right Side Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Schedule Appointment */}
              <div className="bg-primary rounded-2xl p-7 text-primary-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarDays className="w-6 h-6 text-accent" />
                  <h3 className="font-bold text-lg">{t.scheduleHeading}</h3>
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">
                  {t.scheduleSubtext}
                </p>
                <a
                  href="https://app.topnewgen.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                >
                  {t.scheduleBtn}
                </a>
              </div>

              {/* Office Hours */}
              <div className="bg-secondary rounded-2xl p-7 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-primary text-lg">{t.officeHoursHeading}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  {t.officeHours.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span className="font-semibold text-foreground">{item.day}</span>
                      <span className="text-muted-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-secondary rounded-2xl p-7 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-primary text-lg">{t.officeLocationHeading}</h3>
                </div>
                <p className="text-foreground font-semibold mb-1">{t.officeCompanyName}</p>
                <p className="text-muted-foreground text-sm mb-1">851 Burlway Rd Room 608</p>
                <p className="text-muted-foreground text-sm mb-4">Burlingame, CA 94010</p>
                <a
                  href="https://maps.google.com/?q=851+Burlway+Rd+Room+608+Burlingame+CA+94010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-info transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {t.viewOnMaps}
                </a>
              </div>

              {/* Quick Contact */}
              <div className="bg-secondary rounded-2xl p-7 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-primary text-lg">{t.quickContactHeading}</h3>
                </div>
                <div className="space-y-3">
                  <a
                    href="tel:+16507551668"
                    className="flex items-center gap-3 text-sm text-foreground hover:text-info transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>(650) 755-1668</span>
                  </a>
                  <a
                    href="mailto:info@topnewgen.com"
                    className="flex items-center gap-3 text-sm text-foreground hover:text-info transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>info@topnewgen.com</span>
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
