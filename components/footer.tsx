"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t, language } = useLanguage()

  const quickLinks = [
    { label: language === "en" ? "About NewGen" : "關於我們", href: "/company/about" },
    { label: language === "en" ? "Life Insurance" : "人壽保險", href: "/solutions/life-insurance" },
    { label: language === "en" ? "Annuity" : "年金", href: "/solutions/guaranteed-income" },
    { label: language === "en" ? "Why NewGen" : "為什麼選擇我們", href: "/join/why-newgen" },
    { label: language === "en" ? "Training System" : "培訓體系", href: "/join/training" },
    { label: language === "en" ? "Contact Us" : "聯絡我們", href: "/contact" },
  ]

  const legalLinks = [
    { label: t.footer.privacyPolicy, href: "/privacy" },
    { label: t.footer.termsOfUse, href: "/terms" },
    { label: t.footer.disclaimer, href: "/disclaimer" },
    { label: t.footer.licensing, href: "/licensing" },
  ]

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://ik.imagekit.io/lucalink/NewGen/NewGen_Original.png"
                alt="NewGen"
                width={200}
                height={80}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-info text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-primary font-bold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-info text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-bold mb-4">{t.footer.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>(650) 755-1668</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>marketing@topnewgen.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  851 Burlway Road, #608
                  <br />
                  Burlingame, CA 94010
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
