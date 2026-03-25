import type { Metadata } from "next"
import { DownloadsContent } from "./content"

export const metadata: Metadata = {
  title: "Free Downloads & Guides | NewGen Insurance Agency",
  description:
    "Download NewGen Insurance Agency's carefully crafted insurance guides, white papers, planning checklists, and comparison charts to help you understand insurance planning strategies.",
}

export default function DownloadsPage() {
  return <DownloadsContent />
}
