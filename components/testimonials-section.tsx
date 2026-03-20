"use client"

import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    { quote: t.testimonials.testimonial1.quote, author: t.testimonials.testimonial1.author, stars: 5 },
    { quote: t.testimonials.testimonial2.quote, author: t.testimonials.testimonial2.author, stars: 5 },
    { quote: t.testimonials.testimonial3.quote, author: t.testimonials.testimonial3.author, stars: 5 },
    { quote: t.testimonials.testimonial4.quote, author: t.testimonials.testimonial4.author, stars: 5 },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Quote className="w-16 h-16 text-primary" strokeWidth={2} />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-primary">{t.testimonials.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.testimonials.subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow h-full">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed text-sm">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold text-primary mt-auto">{testimonial.author}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
