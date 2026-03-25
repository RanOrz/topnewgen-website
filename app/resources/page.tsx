import type { Metadata } from "next"
import { ResourcesContent } from "./content"

export const metadata: Metadata = {
  title: "Insurance Resources & Guides | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency's resource center provides insurance knowledge blogs, news, insurance calculators, webinars, and downloadable resources to help you make informed protection decisions.",
}

export default function ResourcesPage() {
  return <ResourcesContent />
}
