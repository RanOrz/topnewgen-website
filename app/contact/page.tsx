import type { Metadata } from "next"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Contact NewGen Insurance Agency | (650) 755-1668",
  description:
    "Contact NewGen Insurance Agency. Phone: (650) 755-1668, Email: info@topnewgen.com. Address: 851 Burlway Rd Room 608, Burlingame, CA 94010. Monday–Friday 9am–6pm PST.",
}

export default function ContactPage() {
  return <ContactContent />
}
