"use client"

import Head from "next/head"
import { useLanguage } from "@/contexts/language-context"
import { seoConfig } from "@/lib/seo-config"

export function SEO() {
  const { language } = useLanguage()
  const seo = seoConfig[language]
  const baseUrl = "https://newgen-insurance.com" // Replace with your actual domain

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Language Meta Tags */}
      <meta property="og:locale" content={language === "en" ? "en_US" : "zh_TW"} />
      <link rel="alternate" href={`${baseUrl}`} hrefLang="en" />
      <link rel="alternate" href={`${baseUrl}/zh`} hrefLang="zh" />
      <link rel="alternate" href={`${baseUrl}`} hrefLang="x-default" />

      {/* Canonical URL */}
      <link rel="canonical" href={baseUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:image" content={`${baseUrl}/images/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={baseUrl} />
      <meta name="twitter:title" content={seo.twitterTitle} />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:image" content={`${baseUrl}/images/twitter-image.jpg`} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
