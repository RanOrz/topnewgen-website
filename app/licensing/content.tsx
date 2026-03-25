"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShieldCheck, ExternalLink } from "lucide-react"

const copy = {
  en: {
    hero: {
      title: "Licensing Information",
      subtitle:
        "NewGen Insurance Agency holds the required insurance licenses in accordance with the law and strictly complies with the insurance regulations of California and other applicable states, providing clients with compliant and trustworthy insurance services.",
    },
    licenseBadge: {
      title: "California Licensed Insurance Entity",
      description:
        "NewGen Insurance Agency is regulated by the California Department of Insurance and holds a valid insurance agent license, legally engaged in the marketing, sales, and servicing of life insurance and annuity products.",
    },
    sections: [
      {
        heading: "1. California Insurance License",
        paragraphs: [
          "NewGen Insurance Agency holds a valid insurance agent license under California insurance regulations, issued and regulated by the California Department of Insurance (CDI). Our business scope includes:",
        ],
        list: [
          "Life Insurance",
          "Annuity Products",
          "Accident & Health Insurance (subject to individual agent licenses)",
        ],
        listType: "bullet",
        trailingParagraph:
          "All of our insurance agents hold individual insurance licenses and complete the continuing education courses required by the California Department of Insurance to ensure up-to-date insurance knowledge and compliance capabilities. To verify the license status of a specific agent, you can do so through the California Department of Insurance's license verification system.",
      },
      {
        heading: "2. Compliance Commitment",
        paragraphs: [
          "NewGen Insurance Agency strictly complies with all applicable provisions of the California Insurance Code and California insurance regulations, and continuously implements the following compliance measures:",
        ],
        list: [
          { label: "Suitability Assessment:", text: "Before recommending any insurance product, we conduct a comprehensive needs analysis and suitability assessment of clients to ensure recommended plans meet clients' coverage needs and financial situation." },
          { label: "Transparency:", text: "Full disclosure of premiums, fees, commissions, policy terms, and any material information that may affect client decisions." },
          { label: "Continuing Education:", text: "All agents regularly complete continuing education requirements set by the California Department of Insurance to keep professional knowledge current." },
          { label: "Anti-Fraud:", text: "Strict compliance with anti-insurance fraud regulations to protect clients from fraudulent activities." },
          { label: "Client Privacy:", text: "Protection of client personal information as required by the California Consumer Privacy Act (CCPA) and the Gramm-Leach-Bliley Act." },
          { label: "Complaint Handling:", text: "Formal complaint handling procedures in place to ensure client complaints are addressed promptly and fairly." },
        ],
        listType: "labeled",
      },
      {
        heading: "3. Partner Insurance Companies",
        paragraphs: [
          "As an independent insurance agency, NewGen Insurance Agency partners with multiple insurance companies approved by the California Department of Insurance, providing clients with a diverse range of insurance product options. All of our partner insurance companies:",
        ],
        list: [
          "Hold valid licenses to sell insurance products in California as required by law",
          "Are subject to ongoing oversight by the California Department of Insurance",
          "Participate in the policyholder protection program provided by the California Life and Health Insurance Guarantee Association (coverage scope and limits per specific policy)",
          "Maintain financial solvency standards required by the California Department of Insurance",
        ],
        listType: "bullet",
        trailingParagraph:
          "To learn about the names of specific partner insurance companies and their license information, please contact our advisors.",
      },
      {
        heading: "4. License Disclosure Statement",
        disclosure: [
          "As required by California Insurance Code Section 1724 and related regulations, we make the following written disclosure to clients:",
          "NewGen Insurance Agency operates as an insurance agent and may receive commissions from insurance companies for transactions we facilitate. The specific percentage and composition of commissions vary by insurance company, product type, and transaction size. Commissions are paid by the insurance company and are not directly charged to clients.",
          "In certain circumstances, the Company may receive additional non-commission compensation from insurance companies for performance targets achieved (such as bonuses, travel, or other incentives), which may influence our recommendation of specific insurance companies or products. We commit that, regardless of the compensation structure, our primary obligation is to recommend plans that best meet the client's coverage needs.",
          "If you wish to obtain more information about our compensation structure, please feel free to ask and we will provide transparent explanations to the best of our ability.",
        ],
      },
      {
        heading: "5. Regulatory Contact Information",
        paragraphs: [
          "If you have questions about the Company's license status, or wish to file a complaint about our services, you may contact the California Department of Insurance directly:",
        ],
        regulatoryBlock: true,
      },
      {
        heading: "6. Contact Us",
        paragraphs: [
          "If you have any questions about the Company's licensing information or compliance matters, please contact us through the following:",
        ],
        contactBlock: true,
      },
    ],
    regulatory: {
      title: "California Department of Insurance",
      subtitle: "California Department of Insurance (CDI)",
      phone: "Consumer Services Phone:",
      website: "Official Website:",
      hours: "Office Hours: Monday – Friday, 8:00 AM – 5:00 PM (Pacific Time)",
    },
    contact: {
      company: "NewGen Insurance Agency",
      email: "Email: ",
      phone: "Phone: ",
      address: "Address: ",
    },
  },
  zh: {
    hero: {
      title: "許可信息",
      subtitle:
        "新睿保險集團依法持有相應保險執照，並嚴格遵守加利福尼亞州及其他適用州份的保險法規，為客戶提供合規、可信賴的保險服務。",
    },
    licenseBadge: {
      title: "加州保險執照持有機構",
      description:
        "新睿保險集團受加利福尼亞州保險局（California Department of Insurance）監管，依法持有有效保險代理執照，合法從事人壽保險及年金產品的行銷、銷售及服務業務。",
    },
    sections: [
      {
        heading: "一、加州保險執照",
        paragraphs: [
          "新睿保險集團（NewGen Insurance Agency）依加利福尼亞州保險法規持有有效的保險代理執照，由加利福尼亞州保險局（California Department of Insurance, CDI）頒發及監管。我們的業務範圍包括：",
        ],
        list: [
          "人壽保險（Life Insurance）",
          "年金產品（Annuity Products）",
          "意外與健康保險（Accident & Health Insurance，視代理人執照而定）",
        ],
        listType: "bullet",
        trailingParagraph:
          "我們的所有保險代理人均持有個人保險執照，並完成加州保險局要求的繼續教育課程，以確保具備最新的保險知識和合規能力。如需驗證特定代理人的執照狀態，您可透過加州保險局的執照查詢系統進行核實。",
      },
      {
        heading: "二、合規承諾",
        paragraphs: [
          "新睿保險集團嚴格遵守加利福尼亞州保險法（California Insurance Code）及加州保險法規的所有適用條款，並持續落實以下合規措施：",
        ],
        list: [
          { label: "適合性評估：", text: "在推薦任何保險產品前，對客戶進行全面的需求分析和適合性評估，確保推薦方案符合客戶的保障需求和財務狀況。" },
          { label: "透明度：", text: "充分披露保費、費用、佣金、保單條款及任何可能影響客戶決策的重要資訊。" },
          { label: "持續教育：", text: "所有代理人定期完成加州保險局規定的繼續教育要求，保持專業知識的更新。" },
          { label: "反欺詐：", text: "嚴格遵守反保險欺詐法規，保護客戶免受欺詐行為的侵害。" },
          { label: "客戶隱私：", text: "依加州消費者隱私法（CCPA）及保格雷奇-比利-李奇法案（Gramm-Leach-Bliley Act）的要求保護客戶個人資訊。" },
          { label: "投訴處理：", text: "設有正式的投訴處理程序，確保客戶的合理投訴得到及時、公平的處理。" },
        ],
        listType: "labeled",
      },
      {
        heading: "三、合作保險公司",
        paragraphs: [
          "作為獨立保險代理機構，新睿保險集團與多家加州保險局核准的保險公司合作，為客戶提供多元化的保險產品選擇。我們的所有合作保險公司均：",
        ],
        list: [
          "依法持有在加州銷售保險產品的有效執照",
          "受加州保險局的持續監管",
          "參加加州壽險保障協會（California Life and Health Insurance Guarantee Association）提供的保單持有人保護計劃（適用範圍及限額請參閱具體保單）",
          "保持符合加州保險局要求的財務償付能力標準",
        ],
        listType: "bullet",
        trailingParagraph:
          "如需了解具體合作保險公司的名稱及其執照資訊，請聯繫我們的顧問。",
      },
      {
        heading: "四、執照披露聲明",
        disclosure: [
          "本公司依加州保險法第1724條及相關法規的要求，向客戶作出以下書面披露：",
          "新睿保險集團以保險代理人身份運營，可能就促成的保險交易從保險公司獲得佣金。佣金的具體比例及構成因保險公司、產品類型及交易規模而有所不同。佣金由保險公司支付，不直接向客戶收取。",
          "在特定情況下，本公司可能就達成的業績目標從保險公司獲得額外的非佣金形式補償（如獎金、旅遊或其他形式的激勵），這可能對我們推薦特定保險公司或產品的行為產生影響。我們承諾，無論報酬結構如何，我們的首要義務是為客戶推薦最符合其保障需求的方案。",
          "如您希望獲取關於我們報酬結構的更多資訊，請隨時提出，我們將盡力提供透明的說明。",
        ],
      },
      {
        heading: "五、監管機構聯繫資訊",
        paragraphs: [
          "如您對本公司的執照狀態有疑問，或希望就我們的服務提出投訴，可直接聯繫加利福尼亞州保險局：",
        ],
        regulatoryBlock: true,
      },
      {
        heading: "六、聯繫我們",
        paragraphs: [
          "如對本公司的許可信息或合規事項有任何疑問，請透過以下方式聯繫我們：",
        ],
        contactBlock: true,
      },
    ],
    regulatory: {
      title: "加利福尼亞州保險局",
      subtitle: "California Department of Insurance (CDI)",
      phone: "消費者服務電話：",
      website: "官方網站：",
      hours: "辦公時間：週一至週五，上午8時至下午5時（太平洋時間）",
    },
    contact: {
      company: "新睿保險集團",
      email: "電子郵件：",
      phone: "電話：",
      address: "地址：",
    },
  },
}

export function LicensingContent() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">{t.hero.title}</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* License Badge */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-card rounded-2xl p-8 shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-10 h-10 text-accent-foreground" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">{t.licenseBadge.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.licenseBadge.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="space-y-10">
            {t.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-primary mb-4">{section.heading}</h2>
                {"paragraphs" in section && section.paragraphs && section.paragraphs.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {"listType" in section && section.listType === "bullet" && section.list && (
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                    {(section.list as string[]).map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                )}
                {"listType" in section && section.listType === "labeled" && section.list && (
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                    {(section.list as { label: string; text: string }[]).map((item, k) => (
                      <li key={k}>
                        <strong className="text-primary/80">{item.label}</strong>{item.text}
                      </li>
                    ))}
                  </ul>
                )}
                {"trailingParagraph" in section && section.trailingParagraph && (
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {section.trailingParagraph}
                  </p>
                )}
                {"disclosure" in section && section.disclosure && (
                  <div className="bg-secondary rounded-xl p-6 text-sm text-muted-foreground leading-relaxed space-y-3">
                    {section.disclosure.map((para, k) => (
                      <p key={k}>{para}</p>
                    ))}
                  </div>
                )}
                {"regulatoryBlock" in section && section.regulatoryBlock && (
                  <div className="bg-secondary rounded-xl p-6 space-y-3 text-sm">
                    <p className="text-foreground font-semibold text-base">{t.regulatory.title}</p>
                    <p className="text-muted-foreground">{t.regulatory.subtitle}</p>
                    <p className="text-muted-foreground">
                      {t.regulatory.phone}
                      <a href="tel:18009274357" className="text-primary hover:underline ml-1">1-800-927-4357</a>
                    </p>
                    <p className="text-muted-foreground flex items-center gap-1.5">
                      {t.regulatory.website}
                      <a
                        href="https://www.insurance.ca.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        www.insurance.ca.gov
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                    <p className="text-muted-foreground">{t.regulatory.hours}</p>
                  </div>
                )}
                {"contactBlock" in section && section.contactBlock && (
                  <div className="bg-secondary rounded-xl p-6 space-y-2">
                    <p className="text-foreground font-semibold">{t.contact.company}</p>
                    <p className="text-muted-foreground">{t.contact.email}<a href="mailto:info@topnewgen.com" className="text-primary hover:underline">info@topnewgen.com</a></p>
                    <p className="text-muted-foreground">{t.contact.phone}(650) 755-1668</p>
                    <p className="text-muted-foreground">{t.contact.address}851 Burlway Road, #608, Burlingame, CA 94010</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
