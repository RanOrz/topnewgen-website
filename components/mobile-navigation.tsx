"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileNavigation() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="flex flex-col gap-6 py-6">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        {t.nav.home}
      </Link>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="solutions">
          <AccordionTrigger className="text-sm font-medium">{t.nav.solutions}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 pl-4">
              <Link
                href="/solutions"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/solutions" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.solutions.overview}
              </Link>
              <Link
                href="/solutions/life-insurance"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/solutions/life-insurance" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.solutions.lifeInsurance}
              </Link>
              <Link
                href="/solutions/tax-free-retirement"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/solutions/tax-free-retirement" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.solutions.taxFreeRetirement}
              </Link>
              <Link
                href="/solutions/annuity"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/solutions/annuity" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.solutions.annuity}
              </Link>
              <Link
                href="/solutions/long-term-care"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/solutions/long-term-care" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.solutions.longTermCare}
              </Link>
              <Link
                href="/solutions/estate-planning"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/solutions/estate-planning" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.solutions.estatePlanning}
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="resources">
          <AccordionTrigger className="text-sm font-medium">{t.nav.resources}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 pl-4">
              <Link
                href="/resources/blog"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/resources/blog" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.resources.blog}
              </Link>
              <Link
                href="/resources/news"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/resources/news" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.resources.news}
              </Link>
              <Link
                href="/resources/calculators"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/resources/calculators" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.resources.calculators}
              </Link>
              <Link
                href="/resources/webinars"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/resources/webinars" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.resources.webinars}
              </Link>
              <Link
                href="/resources/downloads"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/resources/downloads" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.resources.downloads}
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="company">
          <AccordionTrigger className="text-sm font-medium">{t.nav.company}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 pl-4">
              <Link
                href="/company/about"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/company/about" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.company.about}
              </Link>
              <Link
                href="/company/team"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/company/team" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.company.team}
              </Link>
              <Link
                href="/company/careers"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/company/careers" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.company.careers}
              </Link>
              <Link
                href="/company/why-choose-us"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/company/why-choose-us" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.company.whyChooseUs}
              </Link>
              <Link
                href="/company/contact"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/company/contact" ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.company.contact}
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
