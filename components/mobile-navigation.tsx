"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileNavigation() {
  const pathname = usePathname()
  const { language } = useLanguage()

  return (
    <div className="flex flex-col gap-1 py-2">

      <Link
        href="/"
        className="text-base font-medium transition-colors px-2 py-3 rounded-xl text-foreground hover:text-primary"
      >
        {language === "en" ? "About Newgen" : "關於我們"}
      </Link>

      <Accordion type="single" collapsible className="w-full">

        <AccordionItem value="insurance" className="border-none">
          <AccordionTrigger className="text-base font-medium px-2 py-3 hover:no-underline">
            {language === "en" ? "Insurance" : "產品介紹"}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1 pl-4 pb-2">
              <Link
                href="/solutions/life-insurance"
                className={cn(
                  "text-sm font-medium transition-colors px-2 py-2.5 rounded-lg",
                  pathname === "/solutions/life-insurance" ? "text-primary bg-accent/10" : "text-muted-foreground hover:text-primary"
                )}
              >
                Life Insurance
              </Link>
              <Link
                href="/solutions/guaranteed-income"
                className={cn(
                  "text-sm font-medium transition-colors px-2 py-2.5 rounded-lg",
                  pathname === "/solutions/guaranteed-income" ? "text-primary bg-accent/10" : "text-muted-foreground hover:text-primary"
                )}
              >
                {language === "en" ? "Annuity" : "年金"}
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="join" className="border-none">
          <AccordionTrigger className="text-base font-medium px-2 py-3 hover:no-underline">
            {language === "en" ? "Join Us" : "加入我們"}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1 pl-4 pb-2">
              <a
                href="https://member.topnewgen.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors px-2 py-2.5 rounded-lg text-muted-foreground hover:text-primary"
              >
                {language === "en" ? "NewGen Community" : "新睿社群"}
              </a>
              <a
                href="https://app.topnewgen.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors px-2 py-2.5 rounded-lg text-muted-foreground hover:text-primary"
              >
                {language === "en" ? "Agent Dashboard" : "顧問後台"}
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  )
}
