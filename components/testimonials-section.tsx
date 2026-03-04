import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "新睿保險使人壽保險過程變得簡單且易化。我們感到受到保護，這讓我們獲得了建立退休儲蓄！",
    author: "莫拉萊斯家庭",
    stars: 5,
  },
  {
    quote: "當我生病時，這份保單是救命稻草。我從未想過我會在活著的時候使用我的人壽保險。",
    author: "艾麗西亞 R.，三個孩子的母親",
    stars: 5,
  },
  {
    quote: "獲得現金幫助我們在我的癌症治療期間保持收支平衡。",
    author: "詹姆斯 M.，父親和小企業主",
    stars: 5,
  },
  {
    quote: "在我被診斷出癌症後，我們從新世代獲得的保險幫助了我們財務穩定，讓我們能夠專注於治療，而不是賬單。",
    author: "安吉莉亞 K.，癌症倖存者",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Quote className="w-16 h-16 text-primary" strokeWidth={2} />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-primary">客戶怎麼說</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            來自真實家庭的真實故事，他們體驗了擁有完善家庭保障的不同。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow h-full">
              <div className="flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed text-sm">"{testimonial.quote}"</p>

                {/* Author */}
                <p className="text-sm font-semibold text-primary mt-auto">{testimonial.author}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
