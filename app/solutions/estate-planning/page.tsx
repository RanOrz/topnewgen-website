import type { Metadata } from "next"
import { EstatePlanningContent } from "./content"

export const metadata: Metadata = {
  title: "Estate Planning with Life Insurance | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency uses life insurance as the core tool for estate planning — enabling tax-free wealth transfer, addressing estate tax burdens, and ensuring your assets are passed on exactly as you intend.",
}

export default function EstatePlanningPage() {
  return <EstatePlanningContent />
}
