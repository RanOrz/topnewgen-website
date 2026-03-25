import type { Metadata } from "next"
import { GuaranteedIncomeContent } from "./content"

export const metadata: Metadata = {
  title: "Guaranteed Income & Annuities | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency offers fixed and indexed annuity solutions that provide guaranteed lifetime income for your retirement — stable and predictable regardless of market conditions.",
}

export default function GuaranteedIncomePage() {
  return <GuaranteedIncomeContent />
}
