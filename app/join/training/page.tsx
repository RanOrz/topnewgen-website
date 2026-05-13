import type { Metadata } from "next"
import { TrainingContent } from "./content"

export const metadata: Metadata = {
  title: "Agent Training System | NewGen Insurance | From License to Leadership",
  description:
    "NewGen's 4-phase training program takes you from pre-licensing all the way to team leadership. Mentorship, field training, tools, and back-office support included. Start your insurance career with confidence.",
}

export default function TrainingPage() {
  return <TrainingContent />
}
