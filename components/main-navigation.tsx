"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  ShieldCheck,
  BookOpen,
  Building2,
  Wallet,
  FileText,
  Newspaper,
  Calculator,
  Video,
  Download,
  Info,
  Users,
  Briefcase,
  UserPlus,
  ShieldPlus,
  HandCoins,
  Stethoscope,
  GraduationCap,
} from "lucide-react"

export function MainNavigation() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <NavigationMenu className="hidden md:flex" viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="bg-transparent hover:bg-accent hover:text-accent-foreground"
          >
            <ShieldCheck className="mr-2 h-5 w-5 text-info" />
            {t.nav.solutions}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-fit">
            <ul className="grid w-[200px] gap-2 p-2 md:w-[200px] lg:w-[200px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/life-insurance"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <ShieldPlus className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.solutions.lifeInsurance}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/college-funding"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <GraduationCap className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.solutions.collegeFunding}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/guaranteed-income"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <HandCoins className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.solutions.annuity}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/tax-free-retirement"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Wallet className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.solutions.taxFreeRetirement}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/long-term-care"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Stethoscope className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.solutions.longTermCare}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/solutions/estate-planning"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.solutions.estatePlanning}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground">
            <div className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-info" />
              {t.nav.resources}
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-fit">
            <ul className="grid w-[200px] gap-2 p-2 md:w-[200px] lg:w-[200px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources/blog"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.resources.blog}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources/news"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Newspaper className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.resources.news}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources/calculators"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Calculator className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.resources.calculators}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources/webinars"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Video className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.resources.webinars}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources/downloads"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Download className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.resources.downloads}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground">
            <div className="flex items-center">
              <Building2 className="mr-2 h-5 w-5 text-info" />
              {t.nav.company}
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-fit">
            <ul className="grid w-[200px] gap-2 p-2 md:w-[200px] lg:w-[200px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company/about"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Info className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.company.about}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company/team"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.company.team}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company/careers"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <Briefcase className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.company.careers}</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/join"
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center">
                      <UserPlus className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium leading-none">{t.company.joinUs}</span>
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
