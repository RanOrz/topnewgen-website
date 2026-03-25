"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const copy = {
  en: {
    hero: {
      title: "Terms of Service",
      subtitle:
        "Please read the following terms carefully. By using this website, you agree to be bound by these Terms of Service.",
    },
    effectiveDate: "Effective Date: January 1, 2025",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        paragraphs: [
          `Welcome to the NewGen Insurance Agency (hereinafter "the Company") website (topnewgen.com, hereinafter "the Website"). These Terms of Service (hereinafter "the Terms") constitute a legally binding agreement between you and the Company governing your access to and use of this Website.`,
          `By accessing or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and the Company's Privacy Policy. If you do not agree with any part of these Terms, please immediately stop using this Website. The Company reserves the right to modify these Terms at any time, and modifications take effect immediately upon posting to the website. Your continued use of the Website constitutes acceptance of the modified Terms.`,
        ],
        list: null,
        listType: null,
      },
      {
        heading: "2. Website Use Guidelines",
        paragraphs: [
          "You agree to use this Website only for lawful purposes and must not:",
        ],
        list: [
          "Violate applicable laws, regulations, or third-party rights in any way",
          "Transmit any false, misleading, fraudulent, or illegal content",
          "Attempt to access the Company's systems, servers, or databases without authorization",
          "Upload or transmit any viruses, malware, or other harmful code",
          "Use automated tools to crawl, scrape, or bulk-download website content",
          "Interfere with or disrupt the normal operation of this Website",
          "Impersonate Company employees, agents, or other users",
          "Collect or store personal information of other users",
        ],
        listType: "bullet",
        trailingParagraph:
          "The Company reserves the right to terminate or restrict your access to this Website without prior notice if you violate these Terms.",
      },
      {
        heading: "3. Intellectual Property",
        paragraphs: [
          `All content on this Website, including but not limited to text, images, graphics, logos, audio, video, software, and the overall website design (collectively "Content"), is the property of NewGen Insurance Agency or its licensors and is protected by U.S. and international copyright, trademark, and other intellectual property laws.`,
          `Subject to compliance with these Terms, we grant you a limited, non-exclusive, non-transferable license for personal, non-commercial use to browse and print reasonable copies of the website content, but you may not:`,
        ],
        list: [
          "Modify, adapt, or create derivative works based on the website content",
          "Reproduce, distribute, or publicly display website content for commercial purposes",
          "Remove or alter any copyright, trademark, or other proprietary notices",
          "Use website content for purposes that could damage the Company's reputation",
        ],
        listType: "bullet",
      },
      {
        heading: "4. Accuracy of Information",
        paragraphs: [
          "The content on this Website is provided for general educational and informational purposes only. While we strive to ensure the accuracy and timeliness of the information provided, we make no express or implied warranties regarding:",
        ],
        list: [
          "The accuracy, completeness, or timeliness of the website content",
          "That the website will remain continuously available or uninterrupted",
          "That the website contains no errors or technical problems",
        ],
        listType: "bullet",
        trailingParagraph:
          "The specific terms, rates, and availability of insurance products vary by individual circumstances and state. The content on this Website does not constitute insurance advice or a quote. Please consult our licensed insurance advisors before making any insurance decisions.",
      },
      {
        heading: "5. Disclaimer",
        paragraphs: [
          "To the maximum extent permitted by applicable law, the Company expressly disclaims all warranties of any kind, whether express, implied, statutory, or otherwise, including but not limited to:",
        ],
        list: [
          "Implied warranties of fitness for a particular purpose",
          "Implied warranties of merchantability",
          "Implied warranties of non-infringement of third-party rights",
        ],
        listType: "bullet",
        trailingParagraph:
          "This Website is provided \"as is\" and \"as available.\" Your use of this Website is entirely at your own risk.",
      },
      {
        heading: "6. Limitation of Liability",
        paragraphs: [
          "To the maximum extent permitted by applicable law, NewGen Insurance Agency and its directors, employees, agents, partners, and licensors shall not be liable under any circumstances for the following losses, whether based on warranty, contract, tort (including negligence), or any other legal theory, and whether or not the Company has been advised of the possibility of such losses:",
        ],
        list: [
          "Indirect, incidental, special, consequential, or punitive damages",
          "Loss of profits, revenue, business, or data",
          "Losses arising from the use of or inability to use this Website",
          "Losses resulting from any decisions made in reliance on information from this Website",
        ],
        listType: "bullet",
      },
      {
        heading: "7. Third-Party Links",
        paragraphs: [
          "This Website may contain links to third-party websites provided for user convenience only. The Company makes no endorsement or warranty regarding the content, privacy policies, or practices of third-party websites and assumes no responsibility for any losses or damages arising from accessing such websites. Accessing third-party websites is entirely at your own risk.",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "8. Governing Law and Dispute Resolution",
        paragraphs: [
          "These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of this Website shall first be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to a court of competent jurisdiction in San Mateo County, California, and both parties accept the personal jurisdiction of that court.",
          "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The Company's waiver of any provision of these Terms does not constitute a waiver of other provisions or future violations of the same provision.",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "9. Contact Information",
        paragraphs: ["If you have any questions about these Terms of Service, please contact us through the following:"],
        list: null,
        listType: null,
        contactBlock: true,
      },
    ],
    contact: {
      company: "NewGen Insurance Agency",
      email: "Email: ",
      phone: "Phone: ",
      address: "Address: ",
    },
  },
  zh: {
    hero: {
      title: "使用條款",
      subtitle:
        "請詳細閱讀以下條款。使用本網站即表示您同意受本使用條款約束。",
    },
    effectiveDate: "生效日期：2025年1月1日",
    sections: [
      {
        heading: "一、條款的接受",
        paragraphs: [
          `歡迎訪問新睿保險集團（以下簡稱「本公司」）網站（topnewgen.com，以下簡稱「本網站」）。本使用條款（以下簡稱「本條款」）構成您與本公司之間具有法律約束力的協議，規範您對本網站的訪問與使用。`,
          `訪問或使用本網站，即表示您已閱讀、理解並同意受本條款及本公司隱私政策的約束。若您不同意本條款的任何部分，請立即停止使用本網站。本公司保留隨時修改本條款的權利，修改後的條款在發布於網站後即時生效。您繼續使用本網站即表示接受修改後的條款。`,
        ],
        list: null,
        listType: null,
      },
      {
        heading: "二、網站使用規範",
        paragraphs: [
          "您同意僅以合法目的使用本網站，且不得進行以下行為：",
        ],
        list: [
          "以任何方式侵犯適用法律法規或第三方權利",
          "傳播任何虛假、具誤導性、欺詐性或非法內容",
          "在未獲授權的情況下，嘗試訪問本公司的系統、伺服器或資料庫",
          "上傳或傳播任何病毒、惡意軟體或其他有害程式碼",
          "以自動化工具爬取、抓取或批量下載本網站內容",
          "干擾或破壞本網站的正常運行",
          "冒充本公司員工、代理人或其他用戶",
          "收集或儲存其他用戶的個人資訊",
        ],
        listType: "bullet",
        trailingParagraph:
          "本公司保留在未事先通知的情況下，因您違反本條款而終止或限制您訪問本網站的權利。",
      },
      {
        heading: "三、智慧財產權",
        paragraphs: [
          `本網站上的所有內容，包括但不限於文字、圖片、圖形、標誌、音頻、視頻、軟體及網站整體設計（以下統稱「內容」），均為新睿保險集團或其授權方的財產，受美國及國際著作權、商標及其他智慧財產權法律的保護。`,
          `在遵守本條款的前提下，我們授予您有限、非排他性、不可轉讓的個人非商業用途許可，允許您瀏覽並打印本網站內容的合理副本，但不得：`,
        ],
        list: [
          "修改、改編或創作本網站內容的衍生作品",
          "以商業目的複製、分發或公開展示網站內容",
          "移除或修改任何著作權、商標或其他所有權聲明",
          "將網站內容用於可能損害本公司聲譽的目的",
        ],
        listType: "bullet",
      },
      {
        heading: "四、資訊的準確性",
        paragraphs: [
          "本網站上的內容僅供一般教育和資訊參考用途。雖然我們盡力確保所提供資訊的準確性和時效性，但我們不對以下事項作出任何明示或默示的保證：",
        ],
        list: [
          "網站內容的準確性、完整性或時效性",
          "網站將持續可用或不受中斷",
          "網站不含任何錯誤或技術問題",
        ],
        listType: "bullet",
        trailingParagraph:
          "保險產品的具體條款、費率及可用性因個人情況及州別而異。本網站內容不構成保險建議或報價，在做出任何保險決策前，請咨詢我們的持牌保險顧問。",
      },
      {
        heading: "五、免責聲明",
        paragraphs: [
          "在適用法律允許的最大範圍內，本公司明確聲明不作任何類型的保證，無論是明示、默示、法定或其他類型，包括但不限於：",
        ],
        list: [
          "對特定用途的適用性的默示保證",
          "對可銷售性的默示保證",
          "對不侵犯第三方權利的默示保證",
        ],
        listType: "bullet",
        trailingParagraph:
          "本網站「按現狀」及「按可用狀態」提供。您使用本網站的風險完全由您自行承擔。",
      },
      {
        heading: "六、責任限制",
        paragraphs: [
          "在適用法律允許的最大範圍內，新睿保險集團及其董事、員工、代理人、合作夥伴及授權方在任何情況下均不對以下損失承擔責任，無論損失是否基於保證、合同、侵權（包括疏忽）或任何其他法律理論，且無論本公司是否已被告知此類損失的可能性：",
        ],
        list: [
          "間接、附帶、特殊、後果性或懲罰性損失",
          "利潤損失、收入損失、業務損失或數據損失",
          "因使用或無法使用本網站而導致的損失",
          "因依賴本網站資訊而做出的任何決策所導致的損失",
        ],
        listType: "bullet",
      },
      {
        heading: "七、第三方連結",
        paragraphs: [
          "本網站可能包含指向第三方網站的連結，這些連結僅為方便用戶而提供。本公司對第三方網站的內容、隱私政策或實踐不作任何背書或保證，對訪問這些網站所產生的任何損失或損害不承擔責任。訪問第三方網站的風險完全由您自行承擔。",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "八、適用法律與爭議解決",
        paragraphs: [
          "本條款受加利福尼亞州法律管轄並依其解釋，不考慮其法律衝突條款。任何因本條款或您使用本網站而產生的爭議，雙方同意首先嘗試通過友好協商解決。若協商無果，爭議應提交至加利福尼亞州聖馬刁縣（San Mateo County）具有管轄權的法院解決，雙方均接受該法院的屬人管轄權。",
          "若本條款的任何條款被認定為無效或不可執行，其餘條款仍完全有效。本公司對本條款任何條款的放棄不構成對其他條款或未來違反同一條款的放棄。",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "九、聯繫方式",
        paragraphs: ["如對本使用條款有任何疑問，請透過以下方式聯繫我們："],
        list: null,
        listType: null,
        contactBlock: true,
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

export function TermsContent() {
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
