import type { Metadata } from "next"
import { CalculatorsContent } from "./content"

export const metadata: Metadata = {
  title: "Insurance Calculators | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency provides life insurance needs calculators, retirement savings calculators, and college education funding calculators to help you assess your personal protection needs.",
}

export default function CalculatorsPage() {
  return <CalculatorsContent />
}
