"use client"

import { useLanguage } from "@/contexts/language-context"

export function StructuredData() {
  const { language } = useLanguage()
  const baseUrl = "https://newgen-insurance.com" // Replace with your actual domain

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: language === "en" ? "NewGen Insurance Agency" : "新睿保險集團",
    url: baseUrl,
    logo: `${baseUrl}/images/NewGen_Logo_Dark.png`,
    description:
      language === "en"
        ? "NewGen Insurance Agency provides comprehensive life insurance solutions with living benefits."
        : "新睿保險集團提供全面的人壽保險解決方案，具有生前福利。",
    address: {
      "@type": "PostalAddress",
      streetAddress: "851 Burlway Rd Room 608",
      addressLocality: "Burlingame",
      addressRegion: "CA",
      postalCode: "94010",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-650-755-1668",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.facebook.com/newgeninsurance",
      "https://twitter.com/newgeninsurance",
      "https://www.linkedin.com/company/newgeninsurance",
    ],
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: language === "en" ? "Life Insurance with Living Benefits" : "具有生前福利的人壽保險",
    provider: {
      "@type": "Organization",
      name: language === "en" ? "NewGen Insurance Agency" : "新睿保險集團",
      url: baseUrl,
    },
    description:
      language === "en"
        ? "Comprehensive life insurance solutions with living benefits for critical, chronic, and terminal illnesses."
        : "全面的人壽保險解決方案，具有重大疾病、慢性疾病和末期疾病的生前福利。",
    areaServed: "United States",
    serviceType: "Insurance",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
    </>
  )
}
