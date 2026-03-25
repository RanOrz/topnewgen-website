import type { Metadata } from "next"
import { AboutContent } from "./content"

export const metadata: Metadata = {
  title: "About NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency has over 20 years of life insurance experience, helping more than 3,000 families secure comprehensive coverage. Learn about our mission, values, and service philosophy.",
}

export default function AboutPage() {
  return <AboutContent />
}
