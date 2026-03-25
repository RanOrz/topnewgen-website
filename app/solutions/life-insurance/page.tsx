import type { Metadata } from "next"
import { LifeInsuranceContent } from "./content"

export const metadata: Metadata = {
  title: "Life Insurance with Living Benefits | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency offers life insurance plans with Living Benefits — protecting your family with a tax-free death benefit and allowing early access to funds for critical, chronic, or terminal illness, while accumulating tax-free cash value.",
}

export default function LifeInsurancePage() {
  return <LifeInsuranceContent />
}
