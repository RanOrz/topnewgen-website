import type { Metadata } from "next"
import { PrivacyContent } from "./content"

export const metadata: Metadata = {
  title: "Privacy Policy | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency's privacy policy explaining how we collect, use, and protect your personal information, and your privacy rights.",
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
