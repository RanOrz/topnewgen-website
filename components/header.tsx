"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X } from "lucide-react"
import { MainNavigation } from "@/components/main-navigation"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="NewGen Insurance Agency Networks"
              width={160}
              height={48}
              className="h-12 w-auto"
            />
          </Link>

          <MainNavigation />

          {/* Right side */}
          <div className="flex items-center gap-6">

            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="hidden md:inline-flex items-center gap-2 text-foreground hover:text-info transition-colors border border-border rounded-full px-3 py-1.5"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === "en" ? "中文" : "English"}</span>
            </button>
            <Link href="/contact" className="hidden md:inline-flex">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 rounded-full">
                {language === "en" ? "Contact Us" : "聯絡我們"}
              </Button>
            </Link>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu">
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[380px] flex flex-col">
                <div className="flex flex-col flex-1 pt-4 overflow-y-auto">
                  {/* Primary Navigation */}
                  <div className="flex-1">
                    <MobileNavigation />
                  </div>

                  {/* Bottom actions */}
                  <div className="border-t border-border pt-6 pb-4 space-y-3">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full text-base py-5">
                        {language === "en" ? "Schedule Consultation" : "預約諮詢"}
                      </Button>
                    </Link>
                    <div className="flex gap-3">
                      <a
                        href="https://member.topnewgen.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-sm font-medium px-3 py-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      >
                        {t.header.community}
                      </a>
                      <a
                        href="https://app.topnewgen.com/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-sm font-medium px-3 py-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      >
                        {t.header.agentDashboard}
                      </a>
                    </div>
                    <button
                      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                      className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">{language === "en" ? "切換至中文" : "Switch to English"}</span>
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
