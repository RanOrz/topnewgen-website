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
  title: "NewGen 新睿保險集團 - 保護您最重要的家人",
  description:
    "用創新壽險方案守護最重要的家人。提供全面的人壽保險保障，不僅在您離世時提供保障，更在您面臨生活中的重大挑戰時提供支持。",
  keywords: "人壽保險, 生前福利, 重大疾病保險, 保障家人, 新睿保險, 保險規劃",
  authors: [{ name: "NewGen Insurance" }],
  creator: "NewGen Insurance",
  publisher: "NewGen Insurance",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://newgen-insurance.com",
    siteName: "NewGen Insurance",
    title: "NewGen 新睿保險集團 - 保護您最重要的家人",
    description: "用創新壽險方案守護最重要的家人。",
    images: [
      {
        url: "https://newgen-insurance.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NewGen Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NewGen 新睿保險集團 - 保護您最重要的家人",
    description: "用創新壽險方案守護最重要的家人。",
    images: ["https://newgen-insurance.com/twitter-image.jpg"],
    creator: "@newgeninsurance",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://newgen-insurance.com",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
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
