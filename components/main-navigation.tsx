"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { BookOpen, Newspaper, Video, Download, ShieldPlus, HandCoins, Wallet, Users, GraduationCap } from "lucide-react"

export function MainNavigation() {
  const pathname = usePathname()
  const { language } = useLanguage()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <NavigationMenu className="hidden md:flex" viewport={false}>
      <NavigationMenuList className="gap-2">

        {/* Join Our Team */}
        <NavigationMenuItem>
          <Link
            href="/join"
            className={`text-sm font-medium transition-colors px-4 py-2 inline-flex items-center hover:text-primary ${
              isActive("/join") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {language === "en" ? "Join Our Team" : "加入我們"}
          </Link>
        </NavigationMenuItem>

        {/* About Newgen */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`bg-transparent hover:bg-transparent text-sm font-medium transition-colors ${
              isActive("/company") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {language === "en" ? "About Newgen" : "關於我們"}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company/team"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">{language === "en" ? "Our Team" : "成員介紹"}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company/why-choose-us"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <GraduationCap className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">{language === "en" ? "Training System" : "培訓體系"}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Resources */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`bg-transparent hover:bg-transparent text-sm font-medium transition-colors ${
              isActive("/resources") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {language === "en" ? "Resources" : "資源"}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[180px] gap-2 p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources/blog"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">Blog</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources/webinars"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Video className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">Webinars</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources/downloads"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Download className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">Downloads</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Insurance Solutions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`bg-transparent hover:bg-transparent text-sm font-medium transition-colors ${
              isActive("/solutions") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {language === "en" ? "Insurance Solutions" : "保險方案"}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/tax-free-retirement"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Wallet className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">IUL</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/guaranteed-income"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <HandCoins className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">{language === "en" ? "Annuity" : "年金"}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/life-insurance"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <ShieldPlus className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">Term</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}
