import type { Metadata } from "next"
import { TeamContent } from "./content"

export const metadata: Metadata = {
  title: "Our Team | NewGen Insurance Agency",
  description:
    "Meet the professional advisors at NewGen Insurance Agency. Our independent insurance advisors hold top industry certifications and are dedicated to providing the highest quality, most personalized coverage for every family.",
}

export default function TeamPage() {
  return <TeamContent />
}
