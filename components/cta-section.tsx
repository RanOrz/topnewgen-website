"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary/90 to-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent mb-8">
          <Phone className="w-12 h-12 text-accent-foreground" strokeWidth={2.5} />
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          {t.cta.title}
        </h2>

        <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
          {t.cta.subtitle}
        </p>

        <Link href="/company/contact">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full">
            {t.cta.button}
          </Button>
        </Link>
      </div>
    </section>
  )
}
