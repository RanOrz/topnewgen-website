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
import { Shield, HandCoins, Star, GraduationCap } from "lucide-react"

export function MainNavigation() {
  const pathname = usePathname()
  const { language } = useLanguage()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <NavigationMenu className="hidden md:flex" viewport={false}>
      <NavigationMenuList className="gap-2">

        {/* About Newgen */}
        <NavigationMenuItem>
          <Link
            href="/company/about"
            className={`text-sm font-medium transition-colors px-4 py-2 inline-flex items-center hover:text-primary ${
              isActive("/company/about") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {language === "en" ? "About Newgen" : "關於我們"}
          </Link>
        </NavigationMenuItem>

        {/* Insurance */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`bg-transparent hover:bg-transparent text-sm font-medium transition-colors ${
              isActive("/solutions") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {language === "en" ? "Insurance" : "產品介紹"}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[220px] gap-2 p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/life-insurance"
                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Life Insurance</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{language === "en" ? "Protection + Living Benefits" : "保障 + 生前福利"}</div>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/guaranteed-income"
                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <HandCoins className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium">{language === "en" ? "Annuity" : "年金"}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{language === "en" ? "Guaranteed Retirement Income" : "保證退休收入"}</div>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Join */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`bg-transparent hover:bg-transparent text-sm font-medium transition-colors ${
              isActive("/join") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {language === "en" ? "Join Us" : "加入我們"}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[220px] gap-2 p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/join/why-newgen"
                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium">{language === "en" ? "Why NewGen" : "為什麼選擇我們"}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{language === "en" ? "Advantages & income model" : "優勢與收入模式"}</div>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/join/training"
                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium">{language === "en" ? "Training System" : "培訓體系"}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{language === "en" ? "How we develop agents" : "我們如何培育顧問"}</div>
                      </div>
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
