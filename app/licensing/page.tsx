import type { Metadata } from "next"
import { LicensingContent } from "./content"

export const metadata: Metadata = {
  title: "Licensing Information | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency licensing information, including California insurance license details, compliance statements, and regulatory contact information.",
}

export default function LicensingPage() {
  return <LicensingContent />
}
