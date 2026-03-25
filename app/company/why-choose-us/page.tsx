import type { Metadata } from "next"
import { WhyChooseUsContent } from "./content"

export const metadata: Metadata = {
  title: "Why Choose NewGen Insurance Agency",
  description:
    "Discover why over 3,000 families choose NewGen Insurance Agency. Independent brokerage, 20+ years of experience, bilingual EN/ZH service, and partnerships with 10+ top carriers — delivering the most objective, comprehensive coverage solutions.",
}

export default function WhyChooseUsPage() {
  return <WhyChooseUsContent />
}
