"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X } from "lucide-react"
import { MainNavigation } from "@/components/main-navigation"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://ik.imagekit.io/lucalink/NewGen/NewGen_Icon_128.png"
              alt="NewGen"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">NewGen</span>
              <span className="text-sm text-muted-foreground">新睿保險集團</span>
            </div>
          </Link>

          <MainNavigation />

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* NewGen Community and Agent Dashboard buttons */}
            <a
              href="https://member.topnewgen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-foreground hover:text-info transition-colors text-sm font-medium px-4 py-2"
            >
              NewGen社群
            </a>
            <a
              href="https://app.topnewgen.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-foreground hover:text-info transition-colors text-sm font-medium px-4 py-2"
            >
              代理人工作臺
            </a>
            {/* End of new buttons */}

            <button className="hidden items-center gap-2 text-foreground hover:text-info transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">English</span>
            </button>
            <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 rounded-full">
              預約諮詢
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu">
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="mt-8">
                  <MobileNavigation />
                  <div className="mt-6 space-y-4">
                    <a
                      href="https://member.topnewgen.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm font-medium px-4 py-2 text-foreground hover:text-info transition-colors"
                    >
                      NewGen社群
                    </a>
                    <a
                      href="https://app.topnewgen.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm font-medium px-4 py-2 text-foreground hover:text-info transition-colors"
                    >
                      代理人工作臺
                    </a>
                    {/* End of new buttons */}
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full">
                      預約諮詢
                    </Button>
                    
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
