import Image from "next/image"
import { CheckCircle2, Clock, Users, Star } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const achievements = [
  "通過免稅人壽保險理賠, 替代損失的收入並償還房屋貸款",
  "生前福利提前獲取資金,用於重大疾病、慢性疾病或末期疾病",
  "為退休、緊急情況或大學教育設立稅收遞延的現金價值",
  "與頂級保險公司合作，定制個性化的保障解決方案",
]

interface Carrier {
  id: string
  src: string
  alt: string
}

const carriers: Carrier[] = [
  { id: "allianz", src: "https://ik.imagekit.io/lucalink/NewGen/Carrier/Allianz.png", alt: "Allianz" },
  { id: "aig", src: "https://ik.imagekit.io/lucalink/NewGen/Carrier/AIG.png", alt: "AIG" },
  { id: "ameritas", src: "https://ik.imagekit.io/lucalink/NewGen/Carrier/Ameritas.png", alt: "Ameritas" },
  { id: "nlg", src: "https://ik.imagekit.io/lucalink/NewGen/Carrier/NLG.png", alt: "National Life Group" },
  { id: "nationwide", src: "https://ik.imagekit.io/lucalink/NewGen/Carrier/Nationwide.png", alt: "Nationwide" },
  { id: "fg", src: "https://ik.imagekit.io/lucalink/NewGen/Carrier/FG.png", alt: "FG" },
  { id: "pacificlife", src: "https://ik.imagekit.io/lucalink/NewGen/Carrier/PacificLife.png", alt: "Pacific Life" },
  { id: "johnhancock", src: "https://ik.imagekit.io/lucalink/NewGen/Carrier/JohnHancock.png", alt: "John Hancock" },
  { id: "symetra", src: "https://ik.imagekit.io/lucalink/NewGen/Carrier/Symetra.png", alt: "Symetra" },
]

const stats = [
  { icon: Clock, text: "擁有超過20年的業務經驗" },
  { icon: Users, text: "幫助3000多個家庭得到保護" },
  { icon: Star, text: "五星級的客戶評價" },
]

function CarrierLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-full bg-card rounded-2xl p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={200}
        height={100}
        className="w-full h-auto object-contain"
      />
    </div>
  )
}

function renderCarrier(carrier: Carrier, index: number) {
  return (
    <ScrollAnimation key={carrier.id} animation="scaleIn" delay={index * 100}>
      <CarrierLogo src={carrier.src} alt={carrier.alt} />
    </ScrollAnimation>
  )
}

export function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Trust Content */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="https://ik.imagekit.io/lucalink/NewGen/NewGen_Original_White.png"
                alt="NewGen"
                width={400}
                height={100}
                className="h-20 w-auto"
              />
            </div>

            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Why You Can <span className="text-accent">Trust Us</span>
            </h2>

            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              在新睿保險經紀公司，我們是一支由獨立、充滿熱情且值得信賴的代理人組成的團隊，與業界領先的保險公司合作，致力於幫助家庭守護所愛之人。
            </p>

            <h3 className="text-2xl font-bold text-accent mb-6">20年來,我們已經累積幫助了數千個家庭:</h3>

            <div className="space-y-4 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0 bg-accent">
                    <CheckCircle2 className="w-5 h-5 text-success-foreground" />
                  </div>
                  <p className="text-primary-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Carrier Partners */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gradient-gold">Our Trusted Carrier Partners</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[1fr]">
              {carriers.map((carrier, index) => (
                <div key={carrier.id} className="aspect-[3/2]">
                  <CarrierLogo src={carrier.src} alt={carrier.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex items-center justify-center gap-3 text-primary-foreground">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8 text-accent-foreground" strokeWidth={2} />
                </div>
                <p className="text-lg font-semibold">{stat.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
