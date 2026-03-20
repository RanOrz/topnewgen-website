import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Stethoscope, Shield, Home, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "長期護理 | 新睿保險集團",
  description:
    "新睿保險集團提供長期護理保險方案，保護您辛苦積累的資產免受高額護理費用侵蝕，涵蓋居家護理、輔助生活機構及護理之家費用，維護您的財務獨立性。",
}

export default function LongTermCarePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4" />
              保障方案
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              長期護理保障
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              隨著醫療技術進步，人們壽命越來越長，但長壽也帶來了需要長期護理的風險。美國人中有70%在生命的某個階段需要某種形式的長期護理服務，而護理費用之高往往令許多家庭始料未及。提前規劃，才能保護您辛苦積累的資產與家人的生活品質。
            </p>
          </div>
        </div>
      </section>

      {/* The Reality of LTC */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">長期護理的現實：數字說話</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  長期護理（Long-Term Care）是指因慢性疾病、身體殘疾、認知障礙（如失智症）或正常老化，導致需要他人協助完成日常生活活動（ADL）的持續性照護服務，包括洗澡、穿衣、進食、如廁、移動和大小便控制等基本能力。
                </p>
                <p>
                  根據Genworth的2023年長期護理費用調查，美國的護理費用已達驚人水準。加州護理之家的私人房間費用每月高達$13,000至$15,000，即使是居家護理，每月也需要$5,000至$8,000。如需數年的護理，這筆費用可能完全耗盡大多數家庭數十年的積蓄。
                </p>
                <p>
                  許多人錯誤地以為Medicare（聯邦醫療保險）會涵蓋長期護理費用。事實上，Medicare只涵蓋短期技術性護理（最多100天），而非長期的個人生活協助護理。Medicaid（醫療補助）雖然涵蓋長期護理，但申請資格需要耗盡大部分資產，意味著您必須先「變窮」才能獲得補助。
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">長期護理費用現況（2023年加州）</h3>
              {[
                { type: "護理之家（私人房間）", cost: "$13,000 - $15,000/月", annual: "約$156,000 - $180,000/年" },
                { type: "護理之家（半私人房間）", cost: "$10,000 - $12,000/月", annual: "約$120,000 - $144,000/年" },
                { type: "輔助生活機構", cost: "$5,500 - $8,000/月", annual: "約$66,000 - $96,000/年" },
                { type: "居家護理（全職）", cost: "$5,000 - $8,000/月", annual: "約$60,000 - $96,000/年" },
                { type: "成人日間照護中心", cost: "$1,500 - $3,000/月", annual: "約$18,000 - $36,000/年" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-secondary rounded-xl">
                  <div className="font-medium text-primary text-sm">{item.type}</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-accent-foreground font-bold">{item.cost}</span>
                    <span className="text-xs text-muted-foreground">{item.annual}</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground italic">* 費用因地區、機構品質和護理需求而異，且每年持續上漲約3%-5%。</p>
            </div>
          </div>
        </div>
      </section>

      {/* LTC Insurance Options */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">長期護理保障方案選擇</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              市場上提供多種應對長期護理費用風險的保障工具，適合不同的財務狀況和規劃需求：
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Stethoscope,
                title: "傳統長期護理保險",
                desc: "專門設計的長期護理保險，每月繳交保費，當需要護理時保險公司直接支付護理費用。每日或每月給付金額、給付期間和消除期均可自訂，提供最全面的護理保障。",
                pros: ["保費相對較低", "保障金額高", "彈性設計選項", "可加通膨保護附約"],
                cons: "保費可能隨年齡調漲；未使用的保費不退還",
              },
              {
                icon: Shield,
                title: "壽險附加長期護理附約",
                desc: "在人壽保險保單上附加長期護理福利附約（LTC Rider）。需要護理時，可提前領取部分或全部死亡保額用於護理費用，身故理賠金相應減少，確保保費不「浪費」。",
                pros: ["未使用時身故仍有理賠", "保費固定不調漲", "同時享有壽險保障", "簡化申請流程"],
                cons: "相同保費下，護理保障金額通常低於傳統LTC保險",
              },
              {
                icon: Home,
                title: "混合型長期護理保險",
                desc: "結合壽險或年金與長期護理保障的混合型產品。一次性繳入大額保費後，可獲得數倍的長期護理保障額度，同時保留死亡給付或現金退還選項，是目前最受歡迎的選擇。",
                pros: ["一次繳費，終身保障", "未使用保障可作現金或遺產", "保費完全保證不調漲", "對健康要求相對寬鬆"],
                cons: "需要較大的初始資金投入（通常$50,000以上）",
              },
            ].map((option, i) => {
              const Icon = option.icon
              return (
                <Card key={i} className="p-6 bg-card h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{option.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{option.desc}</p>
                  <div className="space-y-2 mb-4">
                    {option.pros.map((pro, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent-foreground flex-shrink-0" />
                        <span className="text-muted-foreground">{pro}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-secondary rounded-lg p-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">注意：</span> {option.cons}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What LTC Covers */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">長期護理保險涵蓋範圍</h2>
              <ul className="space-y-4">
                {[
                  "居家護理：專業護士或護理助理到府提供個人照護",
                  "成人日間照護：白天在社區中心接受照護服務",
                  "輔助生活機構（Assisted Living）：提供部分護理支援的居住設施",
                  "護理之家（Nursing Home）：提供全天候醫療護理的機構",
                  "記憶護理（Memory Care）：專門針對失智症患者的護理設施",
                  "臨時喘息護理（Respite Care）：給家庭照護者短暫休息的臨時護理",
                  "居家改裝費用：用於輪椅坡道、浴室扶手等無障礙改裝",
                  "協調護理服務的個案管理費用",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">何時應該購買長期護理保險？</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold text-xs">45</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">45-55歲（最佳時機）</div>
                      <p className="text-muted-foreground mt-1">健康狀況良好、保費最低。這個年齡段購買可以鎖定最優惠的費率，並有充足時間累積保障價值。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold text-xs">60</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">60-70歲（仍值得考慮）</div>
                      <p className="text-muted-foreground mt-1">仍可購買，但保費較高，健康核保也較嚴格。混合型產品在這個年齡段通常是較好的選擇。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary border-2 border-border flex items-center justify-center flex-shrink-0">
                      <span className="text-muted-foreground font-bold text-xs">75+</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">75歲以上（難度增加）</div>
                      <p className="text-muted-foreground mt-1">健康核保嚴格，許多人可能無法通過資格審查。如有需要，應考慮已有資金的混合型產品或其他替代方案。</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-6 bg-accent/10 border-accent">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="font-semibold text-primary">重要提示：</span>長期護理保險的核保需要評估健康狀況。一旦健康出現問題（如糖尿病、心臟病、認知障礙），可能無法申請或保費大幅提高。趁健康良好時提前規劃是最明智的選擇。
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Protection */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">長期護理保險保護您的資產</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "保護退休儲蓄", desc: "避免護理費用耗盡401(k)、IRA等退休帳戶，讓退休生活維持原有水準。" },
              { title: "保留家庭遺產", desc: "防止護理費用侵蝕計劃留給子女的遺產，確保財富順利傳承。" },
              { title: "維護個人尊嚴", desc: "選擇護理環境和方式的自主權，不必因財務限制而就讀品質較差的機構。" },
              { title: "減輕家人負擔", desc: "避免讓子女或配偶成為主要照護者，或承擔巨額護理費用的財務壓力。" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">保護您的資產，維護您的尊嚴</h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            長期護理規劃是退休規劃中最常被忽視的一環，卻可能是影響最深遠的一個決定。趁現在健康良好，讓我們為您評估最適合的長期護理保障方案，守護您和家人的未來。
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
