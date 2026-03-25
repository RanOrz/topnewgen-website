import type { Metadata } from "next"
import { BlogContent } from "./content"

export const metadata: Metadata = {
  title: "Insurance Blog | NewGen Insurance Agency",
  description:
    "NewGen Insurance Agency's insurance knowledge blog featuring in-depth articles on living benefits, retirement planning, tax-free income, education funding, and more.",
}

export default function BlogPage() {
  return <BlogContent />
}
