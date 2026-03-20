import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Shield, Heart, TrendingUp, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "人壽保險 | 新睿保險集團",
  description:
    "新睿保險集團提供含生前福利的人壽保險方案，身故理賠保護家人財務安全，重大疾病、慢性疾病及末期疾病可提前領取保險金，同時累積免稅現金價值。",
}

export default function LifeInsurancePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              保障方案
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              人壽保險
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              現代人壽保險不只是死後才有用。透過含生前福利（Living Benefits）的人壽保險，您在世時就能享有多重保障，讓一份保單發揮最大價值，全面守護您與家人的財務安全。
            </p>
          </div>
        </div>
      </section>

      {/* What is Life Insurance */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">什麼是含生前福利的人壽保險？</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  傳統人壽保險的主要功能是在被保人身故後，向受益人支付免稅的死亡理賠金，讓家人能夠維持生活水準、償還房屋貸款、支付子女的教育費用。然而，現代的人壽保險已大幅進化，增加了「生前福利」（Living Benefits）條款。
                </p>
                <p>
                  生前福利讓您在特定情況下，於在世時就能提前領取部分保險金。這意味著當您遭遇重大健康危機時，不必動用退休儲蓄、抵押房屋或向親友借款，就能獲得必要的財務支援，度過人生中最艱難的時刻。
                </p>
                <p>
                  此外，許多永久型壽險（如整付終身壽險、萬能壽險及指數型萬能壽險）還能累積現金價值，這筆現金價值可以作為緊急備用金、退休補充收入或子女教育基金，提供額外的財務靈活性。
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="p-6 bg-secondary border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-accent-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-2">身故理賠保障</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">被保人身故時，受益人可獲得免所得稅的理賠金，保障家人的財務未來，維持生活品質。</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-secondary border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-accent-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-2">生前福利加速領取</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">罹患重大疾病、慢性疾病或末期疾病時，可提前領取保險金，用於醫療費用、生活開銷及照護費用。</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-secondary border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-accent-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-2">現金價值累積</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">永久型壽險的現金價值以稅收遞延方式成長，可借貸或提領用於退休、教育或緊急備用。</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Living Benefits Detail */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">生前福利詳細說明</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              生前福利通常涵蓋以下三種主要情況，讓您在健康危機時獲得財務支援：
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "末期疾病（Terminal Illness）",
                desc: "若被診斷為預期壽命少於12至24個月的末期疾病，可提前領取大部分保險金（通常為保額的50%至90%），用於醫療費用、完成心願或安排家人生活。",
                color: "bg-accent",
              },
              {
                title: "重大疾病（Critical Illness）",
                desc: "罹患心臟病發作、中風、癌症、腎臟衰竭等重大疾病時，可提前領取部分保險金。這筆資金可用於支付高額醫療費用、彌補停工期間的收入損失，讓您專注於康復。",
                color: "bg-accent",
              },
              {
                title: "慢性疾病（Chronic Illness）",
                desc: "若因疾病或傷害導致無法獨立完成6項日常生活活動（ADL）中的2項以上，或需要實質性監督，可提前領取保險金，用於支付長期護理費用或居家看護費用。",
                color: "bg-accent",
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-card h-full">
                <div className={`w-12 h-1 ${item.color} rounded-full mb-4`} />
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">人壽保險的核心優勢</h2>
              <ul className="space-y-4">
                {[
                  "身故理賠金免所得稅，受益人可完整領取",
                  "生前福利提供活著時的財務保障，無需等到身故",
                  "重大疾病確診後可提前領取保險金，應對醫療費用",
                  "慢性疾病導致行動不便時，可獲得長期護理費用補助",
                  "末期疾病確診後可提前領取大額保險金",
                  "永久型壽險現金價值以稅收遞延方式穩健成長",
                  "現金價值可借貸，用於緊急情況或退休補充收入",
                  "保險金可免稅轉移給下一代，有效進行遺產規劃",
                  "保費固定，不受年齡增長或健康變化影響（終身壽險）",
                  "可作為企業主的商業保障，保護公司的持續運營",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6">適合人壽保險的族群</h3>
              <div className="space-y-5">
                {[
                  { group: "有撫養家人責任者", desc: "有子女、配偶或年邁父母需要供養，擔心萬一發生意外，家人無法維持生活水準。" },
                  { group: "房貸持有者", desc: "希望萬一不幸身故時，家人不必承擔房屋貸款壓力，確保居家安全。" },
                  { group: "事業高峰期的專業人士", desc: "收入是家庭財務支柱，希望收入保障延伸至健康危機期間。" },
                  { group: "考慮退休規劃者", desc: "希望在退休時有額外的免稅收入來源，補充社安金和401(k)。" },
                  { group: "遺產規劃需求者", desc: "希望將財富完整傳承給下一代，並有效應對遺產稅問題。" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary">{item.group}：</span>
                      <span className="text-muted-foreground text-sm"> {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Life Insurance */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">壽險種類介紹</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "定期壽險（Term Life Insurance）",
                desc: "提供固定期間（如10、20或30年）的保障，保費相對低廉。適合需要大額保障但預算有限的年輕家庭，保障期間內身故可獲理賠，期滿後保障終止。",
                suitFor: "預算有限、短期保障需求、收入替代",
              },
              {
                title: "終身壽險（Whole Life Insurance）",
                desc: "提供終身保障，保費固定不變，現金價值以保證利率穩定增長。是最傳統的永久壽險，適合追求穩定保證、希望留有現金價值的保戶。",
                suitFor: "穩健保守、遺產規劃、長期儲蓄",
              },
              {
                title: "萬能壽險（Universal Life Insurance）",
                desc: "提供終身保障，同時具有靈活的保費繳納選項，現金價值按當前利率成長。保戶可在一定範圍內調整保費金額和繳費時間，靈活度高於終身壽險。",
                suitFor: "需要靈活保費、長期保障、現金累積",
              },
              {
                title: "指數型萬能壽險（IUL）",
                desc: "現金價值連結股票市場指數（如S&P 500），享有市場上漲時的成長潛力，但設有下跌保護機制，市場下跌時本金不受損失，是目前最受歡迎的退休規劃工具之一。",
                suitFor: "免稅退休規劃、平衡風險與成長、長期財富累積",
              },
            ].map((type, i) => (
              <Card key={i} className="p-6 bg-card">
                <h3 className="text-lg font-bold text-primary mb-3">{type.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{type.desc}</p>
                <div className="bg-accent/10 rounded-lg px-4 py-2 text-sm">
                  <span className="font-semibold text-primary">適合族群：</span>
                  <span className="text-muted-foreground"> {type.suitFor}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">了解最適合您的人壽保險方案</h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            每個家庭的狀況不同，適合的保障也不同。我們的專業顧問將根據您的年齡、健康狀況、家庭需求和財務目標，為您量身規劃最佳方案。立即預約免費諮詢，開始保障您的家人。
          </p>
          <Link href="/company/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg rounded-full">
              預約免費諮詢
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
