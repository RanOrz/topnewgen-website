import type { Metadata } from "next"
import { LongTermCareContent } from "./content"

export const metadata: Metadata = {
  title: "Long-Term Care Insurance | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency offers long-term care insurance solutions to protect your hard-earned assets from high care costs — covering home care, assisted living, and nursing home expenses to preserve your financial independence.",
}

export default function LongTermCarePage() {
  return <LongTermCareContent />
}
