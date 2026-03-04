import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary/90 to-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Phone Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent mb-8">
          <Phone className="w-12 h-12 text-accent-foreground" strokeWidth={2.5} />
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          準備好保護您最重要的家人了嗎?
        </h2>

        {/* Description */}
        <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
          立即安排您的免費諮詢，邁出保障家庭未來的第一步。
        </p>

        {/* CTA Button */}
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full">
          立即安排您的通話
        </Button>
      </div>
    </section>
  )
}
