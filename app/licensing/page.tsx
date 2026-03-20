import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShieldCheck, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "許可信息 | 新睿保險集團",
  description:
    "新睿保險集團許可信息，包含加州保險執照資訊、合規聲明及監管機構聯繫方式。",
}

export default function LicensingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">許可信息</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            新睿保險集團依法持有相應保險執照，並嚴格遵守加利福尼亞州及其他適用州份的保險法規，為客戶提供合規、可信賴的保險服務。
          </p>
        </div>
      </section>

      {/* License Badge */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-card rounded-2xl p-8 shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-10 h-10 text-accent-foreground" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">加州保險執照持有機構</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                新睿保險集團受加利福尼亞州保險局（California Department of Insurance）監管，依法持有有效保險代理執照，合法從事人壽保險及年金產品的行銷、銷售及服務業務。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">一、加州保險執照</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                新睿保險集團（NewGen Insurance Agency）依加利福尼亞州保險法規持有有效的保險代理執照，由加利福尼亞州保險局（California Department of Insurance, CDI）頒發及監管。我們的業務範圍包括：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>人壽保險（Life Insurance）</li>
                <li>年金產品（Annuity Products）</li>
                <li>意外與健康保險（Accident &amp; Health Insurance，視代理人執照而定）</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                我們的所有保險代理人均持有個人保險執照，並完成加州保險局要求的繼續教育課程，以確保具備最新的保險知識和合規能力。如需驗證特定代理人的執照狀態，您可透過加州保險局的執照查詢系統進行核實。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">二、合規承諾</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                新睿保險集團嚴格遵守加利福尼亞州保險法（California Insurance Code）及加州保險法規的所有適用條款，並持續落實以下合規措施：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li><strong className="text-primary/80">適合性評估：</strong>在推薦任何保險產品前，對客戶進行全面的需求分析和適合性評估，確保推薦方案符合客戶的保障需求和財務狀況。</li>
                <li><strong className="text-primary/80">透明度：</strong>充分披露保費、費用、佣金、保單條款及任何可能影響客戶決策的重要資訊。</li>
                <li><strong className="text-primary/80">持續教育：</strong>所有代理人定期完成加州保險局規定的繼續教育要求，保持專業知識的更新。</li>
                <li><strong className="text-primary/80">反欺詐：</strong>嚴格遵守反保險欺詐法規，保護客戶免受欺詐行為的侵害。</li>
                <li><strong className="text-primary/80">客戶隱私：</strong>依加州消費者隱私法（CCPA）及保格雷奇-比利-李奇法案（Gramm-Leach-Bliley Act）的要求保護客戶個人資訊。</li>
                <li><strong className="text-primary/80">投訴處理：</strong>設有正式的投訴處理程序，確保客戶的合理投訴得到及時、公平的處理。</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">三、合作保險公司</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                作為獨立保險代理機構，新睿保險集團與多家加州保險局核准的保險公司合作，為客戶提供多元化的保險產品選擇。我們的所有合作保險公司均：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>依法持有在加州銷售保險產品的有效執照</li>
                <li>受加州保險局的持續監管</li>
                <li>參加加州壽險保障協會（California Life and Health Insurance Guarantee Association）提供的保單持有人保護計劃（適用範圍及限額請參閱具體保單）</li>
                <li>保持符合加州保險局要求的財務償付能力標準</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                如需了解具體合作保險公司的名稱及其執照資訊，請聯繫我們的顧問。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">四、執照披露聲明</h2>
              <div className="bg-secondary rounded-xl p-6 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  本公司依加州保險法第1724條及相關法規的要求，向客戶作出以下書面披露：
                </p>
                <p>
                  新睿保險集團以保險代理人身份運營，可能就促成的保險交易從保險公司獲得佣金。佣金的具體比例及構成因保險公司、產品類型及交易規模而有所不同。佣金由保險公司支付，不直接向客戶收取。
                </p>
                <p>
                  在特定情況下，本公司可能就達成的業績目標從保險公司獲得額外的非佣金形式補償（如獎金、旅遊或其他形式的激勵），這可能對我們推薦特定保險公司或產品的行為產生影響。我們承諾，無論報酬結構如何，我們的首要義務是為客戶推薦最符合其保障需求的方案。
                </p>
                <p>
                  如您希望獲取關於我們報酬結構的更多資訊，請隨時提出，我們將盡力提供透明的說明。
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">五、監管機構聯繫資訊</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如您對本公司的執照狀態有疑問，或希望就我們的服務提出投訴，可直接聯繫加利福尼亞州保險局：
              </p>
              <div className="bg-secondary rounded-xl p-6 space-y-3 text-sm">
                <p className="text-foreground font-semibold text-base">加利福尼亞州保險局</p>
                <p className="text-muted-foreground">California Department of Insurance (CDI)</p>
                <p className="text-muted-foreground">
                  消費者服務電話：
                  <a href="tel:18009274357" className="text-primary hover:underline ml-1">1-800-927-4357</a>
                </p>
                <p className="text-muted-foreground flex items-center gap-1.5">
                  官方網站：
                  <a
                    href="https://www.insurance.ca.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    www.insurance.ca.gov
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
                <p className="text-muted-foreground">辦公時間：週一至週五，上午8時至下午5時（太平洋時間）</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">六、聯繫我們</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如對本公司的許可信息或合規事項有任何疑問，請透過以下方式聯繫我們：
              </p>
              <div className="bg-secondary rounded-xl p-6 space-y-2">
                <p className="text-foreground font-semibold">新睿保險集團</p>
                <p className="text-muted-foreground">電子郵件：<a href="mailto:info@topnewgen.com" className="text-primary hover:underline">info@topnewgen.com</a></p>
                <p className="text-muted-foreground">電話：(650) 755-1668</p>
                <p className="text-muted-foreground">地址：851 Burlway Road, #608, Burlingame, CA 94010</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
