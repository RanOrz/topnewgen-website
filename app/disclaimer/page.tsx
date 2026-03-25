import type { Metadata } from "next"
import { DisclaimerContent } from "./content"

export const metadata: Metadata = {
  title: "Disclaimer | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency's disclaimer, including state-specific applicability notices, California insurance regulatory disclosures, and important notes.",
}

export default function DisclaimerPage() {
  return <DisclaimerContent />
}
