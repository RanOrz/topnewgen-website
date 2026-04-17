import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { StructuredData } from "@/components/structured-data"
import { ChatWidget } from "@/components/chat-widget"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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
      <head>
        {/* GTM */}
        <Script id="gtm-head" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-59HV4J2X');
        `}</Script>
        {/* Clarity */}
        <Script id="clarity-init" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","wd9uc546no");
        `}</Script>
        {/* GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6NGMCDC0CT" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6NGMCDC0CT');
        `}</Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59HV4J2X"
            height="0" width="0" style={{display:"none",visibility:"hidden"}} />
        </noscript>
        <LanguageProvider>
          <StructuredData />
          {children}
          <ChatWidget />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
