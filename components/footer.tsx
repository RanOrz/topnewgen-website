import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Facebook, Linkedin, Youtube } from "lucide-react"

const quickLinks = [
  { label: "首頁", href: "/" },
  { label: "解決方案", href: "/solutions" },
  { label: "資源", href: "/resources" },
  { label: "關於我們", href: "/about" },
  { label: "聯繫我們", href: "/contact" },
]

const legalLinks = [
  { label: "隱私政策", href: "/privacy" },
  { label: "使用條款", href: "/terms" },
  { label: "免責聲明", href: "/disclaimer" },
  { label: "許可信息", href: "/licensing" },
]

export function Footer() {
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
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">用創新壽險方案守護最重要的家人</p>
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
            <h3 className="text-primary font-bold mb-4">快速鏈接</h3>
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
            <h3 className="text-primary font-bold mb-4">法律信息</h3>
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
            <h3 className="text-primary font-bold mb-4">聯繫我們</h3>
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
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} 新睿保險集團。保留所有權利。</p>
        </div>
      </div>
    </footer>
  )
}
