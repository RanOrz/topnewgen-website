import type { Metadata } from "next"
import { NewsContent } from "./content"

export const metadata: Metadata = {
  title: "News & Announcements | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency's latest news, including company announcements, service updates, industry trends, and important notices to keep you informed.",
}

export default function NewsPage() {
  return <NewsContent />
}
