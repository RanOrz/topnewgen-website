"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Facebook, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { label: t.footer.home, href: "/" },
    { label: t.footer.solutions, href: "/solutions" },
    { label: t.footer.resources, href: "/resources" },
    { label: t.footer.aboutUs, href: "/about" },
    { label: t.footer.contactUs, href: "/contact" },
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
            <div className="flex items-center gap-3">
              <Link href="#" className="text-muted-foreground hover:text-info">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-info">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-info">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-info">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
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
                <span>info@topnewgen.com</span>
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
