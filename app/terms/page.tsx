import type { Metadata } from "next"
import { TermsContent } from "./content"

export const metadata: Metadata = {
  title: "Terms of Service | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency's website terms of service, covering rules for use, intellectual property, disclaimers, and applicable law.",
}

export default function TermsPage() {
  return <TermsContent />
}
