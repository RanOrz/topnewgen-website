"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FileText, BookOpen, ClipboardList, BarChart2, Clock, ArrowRight, Download } from "lucide-react"

const copy = {
  en: {
    hero: {
      title: "Downloads",
      subtitle:
        "Our carefully crafted insurance knowledge materials let you read offline at any time. From introductory guides to in-depth white papers, meeting the learning needs of readers at every level.",
    },
    section: {
      title: "Downloadable Resources",
      subtitle:
        "The following resources are being prepared and will be available for download soon. Stay tuned for updates, or contact an advisor to get the information directly.",
    },
    comingSoonBadge: "Coming Soon",
    comingSoonButton: "Download Coming Soon",
    formatLabel: "Format:",
    cta: {
      title: "Want Early Access to These Resources?",
      body: "Before the resources officially launch, feel free to contact our advisors directly — we can provide relevant materials and personalized recommendations based on your needs.",
      button: "Contact an Advisor for Materials",
    },
    downloads: [
      {
        type: "Guide",
        title: "Complete Beginner's Guide to Life Insurance",
        description:
          "From basic concepts to advanced strategies, this guide covers a comprehensive comparison of term life, whole life, and Indexed Universal Life (IUL) insurance, helping beginners quickly build a solid understanding of insurance. Ideal for families considering their first life insurance policy.",
        pages: "Approx. 24 pages",
        format: "PDF",
      },
      {
        type: "White Paper",
        title: "IUL Tax-Free Retirement Income Strategy White Paper",
        description:
          "An in-depth analysis of how Indexed Universal Life (IUL) can serve as a retirement planning tool, covering tax advantages, cash value accumulation mechanics, index strategy selection, and retirement withdrawal planning — with actual case study simulation data. Ideal for readers with a solid financial foundation.",
        pages: "Approx. 36 pages",
        format: "PDF",
      },
      {
        type: "Checklist",
        title: "Family Protection Needs Assessment Checklist",
        description:
          "A systematic self-assessment checklist to help you identify your family's coverage gaps, covering income protection, debt coverage, children's education, and retirement savings. After completing this checklist, you'll have a much clearer picture of your own protection needs.",
        pages: "Approx. 8 pages",
        format: "PDF",
      },
      {
        type: "Comparison Chart",
        title: "Comprehensive Life Insurance Product Type Comparison Chart",
        description:
          "An at-a-glance comparison chart clearly showing the differences and similarities in premiums, coverage, cash value, and flexibility among term life, single-premium whole life, universal life, Indexed Universal Life (IUL), and Variable Universal Life (VUL) insurance — helping you make an informed choice.",
        pages: "Approx. 4 pages",
        format: "PDF",
      },
    ],
  },
  zh: {
    hero: {
      title: "下載資源",
      subtitle:
        "我們精心製作的保險知識資料，讓您可以隨時離線閱讀。從入門指南到深度白皮書，滿足不同程度讀者的學習需求。",
    },
    section: {
      title: "可下載資源",
      subtitle:
        "以下資源正在製作中，即將開放下載。請持續關注我們的更新，或聯繫顧問直接獲取相關資訊。",
    },
    comingSoonBadge: "即將推出",
    comingSoonButton: "即將開放下載",
    formatLabel: "格式：",
    cta: {
      title: "想提前獲取這些資源？",
      body: "在資源正式上線前，歡迎直接聯繫我們的顧問，我們可以根據您的需求提供相關資料及個人化建議。",
      button: "聯繫顧問索取資料",
    },
    downloads: [
      {
        type: "指南",
        title: "人壽保險完整入門指南",
        description:
          "從基本概念到進階策略，本指南涵蓋定期壽險、終身壽險與指數型萬能壽險（IUL）的完整比較，幫助初學者快速建立正確的保險觀念。適合正在考慮第一張壽險保單的家庭。",
        pages: "約 24 頁",
        format: "PDF",
      },
      {
        type: "白皮書",
        title: "IUL免稅退休收入策略白皮書",
        description:
          "深度解析指數型萬能壽險（IUL）如何作為退休規劃工具，包括稅務優勢、現金價值累積機制、指數策略選擇及退休提領規劃，附實際案例模擬數據，適合有一定理財基礎的讀者。",
        pages: "約 36 頁",
        format: "PDF",
      },
      {
        type: "規劃清單",
        title: "家庭保障需求評估清單",
        description:
          "一份系統化的自我評估清單，幫助您梳理家庭的保障缺口，包括收入保障、負債覆蓋、子女教育及退休儲蓄等面向。完成此清單後，您將對自身保障需求有更清晰的認識。",
        pages: "約 8 頁",
        format: "PDF",
      },
      {
        type: "比較表",
        title: "壽險產品類型全方位比較表",
        description:
          "一目了然的比較表，清楚呈現定期壽險、整付終身壽險、萬能壽險、指數型萬能壽險（IUL）及變額萬能壽險（VUL）在保費、保障、現金價值及靈活性等方面的異同，協助您做出明智選擇。",
        pages: "約 4 頁",
        format: "PDF",
      },
    ],
  },
}

const downloadIcons = [BookOpen, FileText, ClipboardList, BarChart2]

export function DownloadsContent() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">{t.hero.title}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.section.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.section.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {t.downloads.map((item, index) => {
              const Icon = downloadIcons[index]
              return (
                <Card key={index} className="bg-card flex flex-col overflow-hidden">
                  <div className="p-6 flex flex-col flex-1">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary/50" strokeWidth={2} />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-accent-foreground/70 uppercase tracking-wider">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-background border border-border px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        <Clock className="w-3 h-3" />
                        {t.comingSoonBadge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-primary mb-3 leading-snug">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.description}</p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                      <span>{item.pages}</span>
                      <span>{t.formatLabel}{item.format}</span>
                    </div>

                    {/* Disabled download button */}
                    <div className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-border bg-secondary text-muted-foreground text-sm font-medium cursor-not-allowed select-none">
                      <Download className="w-4 h-4" />
                      {t.comingSoonButton}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t.cta.title}</h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {t.cta.body}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-full text-base transition-colors duration-200"
          >
            {t.cta.button}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
