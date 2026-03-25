"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const copy = {
  en: {
    hero: {
      title: "Privacy Policy",
      subtitle:
        "NewGen Insurance Agency values and respects your privacy. This policy explains how we collect, use, store, and protect your personal information.",
    },
    effectiveDate: "Effective Date: January 1, 2025",
    sections: [
      {
        heading: "1. Overview",
        paragraphs: [
          `NewGen Insurance Agency (hereinafter "the Company," "we") is committed to protecting the privacy of users (hereinafter "you") who visit this website (topnewgen.com). This Privacy Policy explains what information we collect, how we use it, and what measures we take to protect your personal data.`,
          `By using this website, you consent to the data collection and use practices described in this Privacy Policy. If you do not agree with any provision of this policy, please do not use this website.`,
        ],
        list: null,
        listType: null,
      },
      {
        heading: "2. Information We Collect",
        paragraphs: ["We may collect the following types of personal information:"],
        list: [
          {
            label: "Personal Identification Information:",
            text: "Contact information you voluntarily provide, such as your name, email address, phone number, and mailing address — typically collected through our consultation booking forms, contact forms, or email communications.",
          },
          {
            label: "Financial-Related Information:",
            text: "In the course of providing insurance consulting services, you may provide your age, health status, income overview, family member information, etc., used to evaluate suitable insurance plans for you.",
          },
          {
            label: "Browsing Data:",
            text: "Technical information automatically collected when you visit this website, including IP address, browser type, operating system, pages visited, visit times, and referring pages — used to improve website functionality and user experience.",
          },
          {
            label: "Cookie Information:",
            text: "This website uses cookies and similar technologies to track your browsing preferences. See Section 7 of this policy for details.",
          },
        ],
        listType: "labeled",
      },
      {
        heading: "3. How We Use Your Information",
        paragraphs: ["We use the information collected for the following purposes:"],
        list: [
          "Respond to your consultation requests and provide insurance-related advice",
          "Schedule and confirm advisor meeting times",
          "Send information, guides, or reports you have requested",
          "Send you periodic newsletters and educational content (you may unsubscribe at any time)",
          "Improve this website's functionality, content, and user experience",
          "Comply with applicable laws, regulations, and regulatory requirements",
          "Prevent fraud and protect the legitimate interests of the Company and users",
          "Conduct anonymized statistical analysis and business research",
        ],
        listType: "bullet",
      },
      {
        heading: "4. Data Security",
        paragraphs: [
          "We take reasonable technical and organizational measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. These measures include:",
        ],
        list: [
          "Using SSL/TLS encryption technology to protect data transmission on the website",
          "Limiting the number of employees with access to personal information",
          "Regularly reviewing data security policies and procedures",
          "Partnering with third-party service providers that adopt equivalent security standards",
        ],
        listType: "bullet",
        trailingParagraph:
          "Although we strive to protect your information, please note that data transmission over the internet is not absolutely secure. We cannot guarantee that information transmitted through this website is completely secure, and you assume the risk of data transmission.",
      },
      {
        heading: "5. Sharing Information with Third Parties",
        paragraphs: [
          "We do not sell, rent, or share your personal information for commercial purposes. We may share your information with third parties in the following circumstances:",
        ],
        list: [
          { label: "Insurance Company Partners:", text: "With your consent, information sharing necessary to obtain insurance quotes or process applications." },
          { label: "Service Providers:", text: "Technology vendors who help us operate the website and provide services (such as email services, website analytics tools). These vendors are contractually bound not to use the information for other purposes." },
          { label: "Legal Requirements:", text: "When required by law, government order, or necessary to protect the Company's legitimate interests." },
          { label: "Business Transfers:", text: "If the Company undergoes a merger, acquisition, or asset sale, relevant personal information may be transferred as part of the transaction. We will notify you in advance." },
        ],
        listType: "labeled",
      },
      {
        heading: "6. Data Retention",
        paragraphs: [
          "We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law (whichever is longer). Insurance-related business records may be retained for specific periods as required by California insurance regulations. When personal information is no longer needed, we will securely delete or anonymize it.",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "7. Cookie Policy",
        paragraphs: [
          "This website uses cookies and similar technologies (such as web beacons and pixel tags) to improve your browsing experience. Cookies are small text files stored on your device that help us:",
        ],
        list: [
          "Remember your preference settings to provide a personalized experience",
          "Analyze website traffic and user behavior to continuously improve website content",
          "Measure the effectiveness of marketing campaigns",
        ],
        listType: "bullet",
        trailingParagraph:
          "You can manage or refuse cookies through your browser settings. Please note that disabling cookies may affect the normal operation of some features of this website.",
      },
      {
        heading: "8. Your Privacy Rights",
        paragraphs: [
          "Under the California Consumer Privacy Act (CCPA) and other applicable laws, California residents have the following privacy rights:",
        ],
        list: [
          { label: "Right to Know:", text: "Understand what personal information we collect and how it is used." },
          { label: "Right to Access:", text: "Request a copy of the personal information we hold about you." },
          { label: "Right to Deletion:", text: "In certain circumstances, request deletion of your personal information." },
          { label: "Right to Correction:", text: "Request correction of inaccurate personal information." },
          { label: "Right to Opt-Out:", text: "Opt out of the sale of personal information or certain types of information sharing (the Company does not sell personal information)." },
          { label: "Right to Non-Discrimination:", text: "Exercise the above privacy rights without receiving discriminatory treatment." },
        ],
        listType: "labeled",
        trailingParagraph:
          "To exercise any of the above rights, please contact us using the contact information listed in Section 9 of this policy. We will respond to your request within the timeframe required by applicable law.",
      },
      {
        heading: "9. Contact Us",
        paragraphs: [
          "If you have any questions, comments, or wish to exercise your privacy rights regarding this Privacy Policy, please contact our Privacy Officer through the following:",
        ],
        list: null,
        listType: null,
        contactBlock: true,
      },
      {
        heading: "10. Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time to reflect changes in business practices, technology, or legal requirements. Material changes will be communicated via website announcements or email. We recommend checking this page periodically for the latest privacy protection measures. Continued use of this website constitutes your acceptance of the updated Privacy Policy.",
        ],
        list: null,
        listType: null,
      },
    ],
    contact: {
      company: "NewGen Insurance Agency",
      email: "Email:",
      phone: "Phone:",
      address: "Address:",
    },
  },
  zh: {
    hero: {
      title: "隱私政策",
      subtitle:
        "新睿保險集團重視並尊重您的隱私。本政策說明我們如何收集、使用、儲存及保護您的個人資訊。",
    },
    effectiveDate: "生效日期：2025年1月1日",
    sections: [
      {
        heading: "一、概述",
        paragraphs: [
          `新睿保險集團（以下簡稱「本公司」、「我們」）致力於保護訪問本網站（topnewgen.com）的用戶（以下簡稱「您」）的個人隱私。本隱私政策說明我們收集哪些資訊、如何使用這些資訊，以及我們採取何種措施保護您的個人資料。`,
          `使用本網站即表示您同意本隱私政策所述的資料收集與使用方式。若您不同意本政策的任何條款，請勿使用本網站。`,
        ],
        list: null,
        listType: null,
      },
      {
        heading: "二、我們收集的資訊",
        paragraphs: ["我們可能收集以下類型的個人資訊："],
        list: [
          {
            label: "個人識別資訊：",
            text: "您主動提供的姓名、電子郵件地址、電話號碼、郵寄地址等聯絡資訊，通常透過我們的諮詢預約表單、聯絡表單或電子郵件通訊收集。",
          },
          {
            label: "財務相關資訊：",
            text: "在提供保險諮詢服務過程中，您可能提供的年齡、健康狀況、收入概況、家庭成員資訊等，用於評估適合您的保險方案。",
          },
          {
            label: "瀏覽資料：",
            text: "您訪問本網站時自動收集的技術資訊，包括IP位址、瀏覽器類型、作業系統、訪問頁面、訪問時間及來源頁面等，用於改善網站功能與用戶體驗。",
          },
          {
            label: "Cookie資訊：",
            text: "本網站使用Cookie及類似技術追蹤您的瀏覽偏好，詳情請見本政策第七條。",
          },
        ],
        listType: "labeled",
      },
      {
        heading: "三、資訊的使用方式",
        paragraphs: ["我們將收集到的資訊用於以下目的："],
        list: [
          "回應您的諮詢請求並提供保險相關建議",
          "預約及確認顧問會面時間",
          "發送您請求的資訊、指南或報告",
          "向您發送定期電子報及教育性內容（您可隨時取消訂閱）",
          "改善本網站的功能、內容及用戶體驗",
          "遵守適用的法律法規及監管要求",
          "防止欺詐及保護本公司與用戶的合法利益",
          "進行匿名化的統計分析與業務研究",
        ],
        listType: "bullet",
      },
      {
        heading: "四、資料安全",
        paragraphs: [
          "我們採取合理的技術與組織措施保護您的個人資訊，防止未經授權的訪問、使用、披露、更改或銷毀。這些措施包括：",
        ],
        list: [
          "使用SSL/TLS加密技術保護網站資料傳輸",
          "限制有權訪問個人資訊的員工數量",
          "定期審查資料安全政策與程序",
          "與採用同等安全標準的第三方服務商合作",
        ],
        listType: "bullet",
        trailingParagraph:
          "儘管我們盡力保護您的資訊，但請注意，透過網際網路傳輸資料並非絕對安全。我們無法保證透過本網站傳輸的資訊完全安全，資料傳輸的風險由您自行承擔。",
      },
      {
        heading: "五、與第三方分享資訊",
        paragraphs: [
          "我們不會出售、出租或以其他商業方式分享您的個人資訊。在以下情況下，我們可能與第三方分享您的資訊：",
        ],
        list: [
          { label: "保險公司合作夥伴：", text: "在您同意的前提下，為取得保險報價或辦理投保所必要的資訊分享。" },
          { label: "服務提供商：", text: "協助我們運營網站及提供服務的技術供應商（如電子郵件服務、網站分析工具），這些供應商受合約約束，不得將資訊用於其他目的。" },
          { label: "法律要求：", text: "依法律規定、政府機關命令或保護本公司合法權益所必要時。" },
          { label: "業務轉讓：", text: "若本公司發生合併、收購或資產出售，相關個人資訊可能作為轉讓資產的一部分，我們將提前通知您。" },
        ],
        listType: "labeled",
      },
      {
        heading: "六、資料保留",
        paragraphs: [
          "我們將在達成收集目的所必要的期間內保留您的個人資訊，或依適用法律規定的保留期限保存（以較長者為準）。保險相關業務記錄可能依加州保險法規的要求保留特定年限。當個人資訊不再需要保留時，我們將以安全方式將其刪除或匿名化處理。",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "七、Cookie政策",
        paragraphs: [
          "本網站使用Cookie及類似技術（如網頁信標、像素標籤）來改善您的瀏覽體驗。Cookie是儲存於您裝置上的小型文字檔案，幫助我們：",
        ],
        list: [
          "記住您的偏好設定，提供個性化體驗",
          "分析網站流量與用戶行為，持續改善網站內容",
          "衡量行銷活動的效果",
        ],
        listType: "bullet",
        trailingParagraph:
          "您可以透過瀏覽器設定管理或拒絕Cookie。請注意，停用Cookie可能影響本網站部分功能的正常運作。",
      },
      {
        heading: "八、您的隱私權利",
        paragraphs: [
          "依據加州消費者隱私法（CCPA）及其他適用法律，加州居民享有以下隱私權利：",
        ],
        list: [
          { label: "知情權：", text: "了解我們收集哪些個人資訊及其使用方式。" },
          { label: "訪問權：", text: "請求獲取我們持有的關於您的個人資訊副本。" },
          { label: "刪除權：", text: "在特定情況下，請求刪除您的個人資訊。" },
          { label: "更正權：", text: "要求更正不準確的個人資訊。" },
          { label: "退出權：", text: "選擇退出個人資訊的出售或特定類型的資訊分享（本公司不出售個人資訊）。" },
          { label: "不受歧視權：", text: "行使上述隱私權利不會受到歧視性對待。" },
        ],
        listType: "labeled",
        trailingParagraph:
          "如需行使上述任何權利，請透過本政策第九條所列的聯絡方式與我們聯繫。我們將在適用法律規定的期限內回應您的請求。",
      },
      {
        heading: "九、聯繫我們",
        paragraphs: [
          "如對本隱私政策有任何疑問、意見或欲行使您的隱私權利，請透過以下方式聯繫我們的隱私專員：",
        ],
        list: null,
        listType: null,
        contactBlock: true,
      },
      {
        heading: "十、本政策的變更",
        paragraphs: [
          "我們可能不定期更新本隱私政策，以反映業務實踐、技術或法律要求的變化。重大變更將透過網站公告或電子郵件通知您。建議您定期查閱本頁面，了解最新的隱私保護措施。繼續使用本網站即表示您接受更新後的隱私政策。",
        ],
        list: null,
        listType: null,
      },
    ],
    contact: {
      company: "新睿保險集團",
      email: "電子郵件：",
      phone: "電話：",
      address: "地址：",
    },
  },
}

export function PrivacyContent() {
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

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <p className="text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
            {t.effectiveDate}
          </p>

          <div className="space-y-10">
            {t.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-primary mb-4">{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.listType === "bullet" && section.list && (
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                    {(section.list as string[]).map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.listType === "labeled" && section.list && (
                  <ul className="space-y-3 text-muted-foreground">
                    {(section.list as { label: string; text: string }[]).map((item, k) => (
                      <li key={k} className="flex gap-3">
                        <span className="font-semibold text-primary/80 flex-shrink-0">{item.label}</span>
                        <span className="leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {"trailingParagraph" in section && section.trailingParagraph && (
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {section.trailingParagraph}
                  </p>
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
