import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_TC } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { StructuredData } from "@/components/structured-data"

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-tc",
})

export const metadata: Metadata = {
  title: "NewGen Insurance Agency | Life Insurance with Living Benefits | Burlingame, CA",
  description:
    "NewGen Insurance Agency Networks in Burlingame, CA — independent life insurance agents helping families protect what matters most. Living benefits, tax-free cash value, and personalized coverage from top-rated carriers.",
  keywords:
    "NewGen Insurance Agency, NewGen Insurance, life insurance Burlingame CA, life insurance agency California, living benefits life insurance, independent insurance agent, family life insurance, critical illness insurance, tax-free retirement",
  authors: [{ name: "NewGen Insurance Agency Networks" }],
  creator: "NewGen Insurance Agency Networks",
  publisher: "NewGen Insurance Agency Networks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://newgen-insurance.com",
    siteName: "NewGen Insurance Agency",
    title: "NewGen Insurance Agency | Life Insurance with Living Benefits",
    description:
      "Independent life insurance agency in Burlingame, CA. We help families protect their future with living benefits, tax-free cash accumulation, and personalized plans from top carriers.",
    images: [
      {
        url: "https://ik.imagekit.io/lucalink/NewGen/Assets/hero.webp",
        width: 1200,
        height: 630,
        alt: "NewGen Insurance Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NewGen Insurance Agency | Life Insurance with Living Benefits",
    description:
      "Independent life insurance agency in Burlingame, CA. Living benefits, tax-free cash value, and personalized coverage.",
    images: ["https://ik.imagekit.io/lucalink/NewGen/Assets/hero.webp"],
    creator: "@newgeninsurance",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://newgen-insurance.com",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* SEO metadata is now handled by Metadata export above */}</head>
      <body className={`${notoSansTC.variable} font-sans antialiased`}>
        <LanguageProvider>
          <StructuredData />
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
