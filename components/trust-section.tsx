"use client"

import Image from "next/image"
import { CheckCircle2, Clock, Users, Star } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/contexts/language-context"

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

export function TrustSection() {
  const { t } = useLanguage()

  const achievements = [t.about.point1, t.about.point2, t.about.point3, t.about.point4]
  const stats = [
    { icon: Clock, text: t.about.stat1 },
    { icon: Users, text: t.about.stat2 },
    { icon: Star, text: t.about.stat3 },
  ]

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
              {t.about.title}
            </h2>

            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            <h3 className="text-2xl font-bold text-accent mb-6">{t.about.subheading}</h3>

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

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {carriers.map((carrier, index) => (
                <div key={carrier.id} className="aspect-[3/2]">
                  <ScrollAnimation animation="scaleIn" delay={index * 100} className="h-full">
                    <CarrierLogo src={carrier.src} alt={carrier.alt} />
                  </ScrollAnimation>
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
