import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ik.imagekit.io/lucalink/NewGen/Assets/hero.webp"
          alt="新睿保險集團"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-white leading-tight">
            保護您最重要的家人
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed font-medium">
            幫您安心度過人生中最重要及困難時刻。為您的家人提供更全面的人壽保險保障。
          </p>

          <div className="mb-8 space-y-4">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              在新睿保險經紀公司，我們是一支由獨立、充滿熱情且值得信賴的代理人組成的團隊：
            </p>
            <ul className="space-y-3 text-base md:text-lg text-white/90">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-2xl">•</span>
                <span>
                  <strong className="text-white">通過免稅人壽保險理賠，</strong>替代損失的收入並償還房屋貸款
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-2xl">•</span>
                <span>
                  <strong className="text-white">生前福利提前獲取資金，</strong>用於重大疾病、慢性疾病或末期疾病
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-2xl">•</span>
                <span>
                  <strong className="text-white">為退休、緊急情況或大學教育</strong>設立稅收遞延的現金價值
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-2xl">•</span>
                <span>
                  <strong className="text-white">與頂級保險公司合作，</strong>定制個性化的保障解決方案
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed font-medium">
            20年來,我們已經累積幫助了數千個家庭。擁有超過20年的業務經驗，幫助3000多個家庭得到保護，五星級的客戶評價。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-transparent transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              立即預約免費諮詢
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary text-lg px-8 py-6 bg-transparent transition-all duration-300"
            >
              了解更多保障方案
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
