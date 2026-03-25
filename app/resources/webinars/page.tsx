import type { Metadata } from "next"
import { WebinarsContent } from "./content"

export const metadata: Metadata = {
  title: "Webinars & Events | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency webinars where professional advisors cover insurance planning, retirement strategies, and financial security knowledge to build your financial literacy.",
}

export default function WebinarsPage() {
  return <WebinarsContent />
}
