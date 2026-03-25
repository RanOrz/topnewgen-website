import type { Metadata } from "next"
import { CareersContent } from "./content"

export const metadata: Metadata = {
  title: "Careers | Join NewGen Insurance Agency",
  description:
    "Join NewGen Insurance Agency as an independent insurance advisor. Enjoy flexible hours, unlimited income potential, and comprehensive training support. We welcome passionate individuals to help protect more families.",
}

export default function CareersPage() {
  return <CareersContent />
}
