import type { Metadata } from "next"
import { CollegeFundingContent } from "./content"

export const metadata: Metadata = {
  title: "College Funding with Life Insurance | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency offers life insurance-based college funding strategies with tax-advantaged growth, preserved financial aid eligibility, and flexible access — an ideal complement to traditional 529 plans.",
}

export default function CollegeFundingPage() {
  return <CollegeFundingContent />
}
