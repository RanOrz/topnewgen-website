import type { Metadata } from "next"
import { TaxFreeRetirementContent } from "./content"

export const metadata: Metadata = {
  title: "Tax-Free Retirement Planning | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency helps you build a tax-free retirement income stream through Indexed Universal Life Insurance (IUL) — index-linked cash value growth with downside protection and tax-free access in retirement.",
}

export default function TaxFreeRetirementPage() {
  return <TaxFreeRetirementContent />
}
