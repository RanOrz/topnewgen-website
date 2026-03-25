import type { Metadata } from "next"
import { SolutionsContent } from "./content"

export const metadata: Metadata = {
  title: "Insurance Solutions | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency offers comprehensive insurance solutions including life insurance, college funding, guaranteed income annuities, tax-free retirement planning, long-term care, and estate planning to help your family achieve financial security.",
}

export default function SolutionsPage() {
  return <SolutionsContent />
}
