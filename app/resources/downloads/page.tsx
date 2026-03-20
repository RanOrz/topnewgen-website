import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { FileText, BookOpen, ClipboardList, BarChart2, Clock, ArrowRight, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "下載資源 | 新睿保險集團",
  description:
    "下載新睿保險集團精心製作的保險指南、白皮書、規劃清單及比較表，幫助您深入了解保險規劃策略。",
}

const downloads = [
  {
    icon: BookOpen,
    type: "指南",
    title: "人壽保險完整入門指南",
    description:
      "從基本概念到進階策略，本指南涵蓋定期壽險、終身壽險與指數型萬能壽險（IUL）的完整比較，幫助初學者快速建立正確的保險觀念。適合正在考慮第一張壽險保單的家庭。",
    pages: "約 24 頁",
    format: "PDF",
  },
  {
    icon: FileText,
    type: "白皮書",
    title: "IUL免稅退休收入策略白皮書",
    description:
      "深度解析指數型萬能壽險（IUL）如何作為退休規劃工具，包括稅務優勢、現金價值累積機制、指數策略選擇及退休提領規劃，附實際案例模擬數據，適合有一定理財基礎的讀者。",
    pages: "約 36 頁",
    format: "PDF",
  },
  {
    icon: ClipboardList,
    type: "規劃清單",
    title: "家庭保障需求評估清單",
    description:
      "一份系統化的自我評估清單，幫助您梳理家庭的保障缺口，包括收入保障、負債覆蓋、子女教育及退休儲蓄等面向。完成此清單後，您將對自身保障需求有更清晰的認識。",
    pages: "約 8 頁",
    format: "PDF",
  },
  {
    icon: BarChart2,
    type: "比較表",
    title: "壽險產品類型全方位比較表",
    description:
      "一目了然的比較表，清楚呈現定期壽險、整付終身壽險、萬能壽險、指數型萬能壽險（IUL）及變額萬能壽險（VUL）在保費、保障、現金價值及靈活性等方面的異同，協助您做出明智選擇。",
    pages: "約 4 頁",
    format: "PDF",
  },
]

export default function DownloadsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">下載資源</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              我們精心製作的保險知識資料，讓您可以隨時離線閱讀。從入門指南到深度白皮書，滿足不同程度讀者的學習需求。
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">可下載資源</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              以下資源正在製作中，即將開放下載。請持續關注我們的更新，或聯繫顧問直接獲取相關資訊。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {downloads.map((item, index) => {
              const Icon = item.icon
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
                        即將推出
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-primary mb-3 leading-snug">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.description}</p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                      <span>{item.pages}</span>
                      <span>格式：{item.format}</span>
                    </div>

                    {/* Disabled download button */}
                    <div className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-border bg-secondary text-muted-foreground text-sm font-medium cursor-not-allowed select-none">
                      <Download className="w-4 h-4" />
                      即將開放下載
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">想提前獲取這些資源？</h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            在資源正式上線前，歡迎直接聯繫我們的顧問，我們可以根據您的需求提供相關資料及個人化建議。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-full text-base transition-colors duration-200"
          >
            聯繫顧問索取資料
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
