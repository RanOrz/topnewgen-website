"use client"

import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const copy = {
  en: {
    hero: {
      title: "Disclaimer",
      subtitle:
        "Please read the following important statements carefully. This disclaimer covers NewGen Insurance Agency's scope of services, regulatory qualifications, and insurance product applicability.",
    },
    importantNotice:
      "Important Notice: The information provided on this website is for general educational and informational purposes only and does not constitute legal, tax, financial, or insurance advice. Before making any insurance or financial decisions, please consult a qualified professional.",
    sections: [
      {
        heading: "1. Non-Solicitation Statement",
        paragraphs: [
          "The content on this website does not constitute an offer or solicitation to any individual to purchase insurance products, nor does it constitute an offer to provide insurance services in any particular state or jurisdiction. NewGen Insurance Agency only provides insurance services in states where it holds a valid insurance license.",
          "The availability of insurance products, plans, and services displayed on this website varies by state. This website makes no representation or warranty regarding the availability of any specific product or service in your state. To learn about the applicability of a specific insurance product in your state, please contact our advisors directly.",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "2. State-Specific Differences in Insurance Products",
        paragraphs: [
          "Insurance products and their terms, rates, benefits, exclusions, and limitations vary significantly due to different state insurance regulatory requirements. The insurance product features, benefits, and costs described on this website are general descriptions only; specific terms are governed by the official policy documents of each insurance company.",
          "The following factors may affect the applicability and specific terms of insurance products in your state:",
        ],
        list: [
          "Differences in state insurance laws and regulatory requirements",
          "The licenses and approved product ranges of insurance companies in each state",
          "Minimum coverage requirements and premium limitations in each state",
          "Special disclosure requirements for specific states",
          "Applicant's age, health status, and financial qualifications",
        ],
        listType: "bullet",
        trailingParagraph:
          "The availability and conditions of Living Benefits, premium waivers, accelerated death benefit riders, and other supplementary benefits also vary by insurance company, product type, and state.",
      },
      {
        heading: "3. Seek Professional Advice",
        paragraphs: [
          "Insurance planning is an important component of personal financial planning, and everyone's situation is different. The information provided on this website cannot replace personalized advice from a licensed insurance advisor, financial planner, tax advisor, or legal counsel with appropriate qualifications.",
          "Before purchasing any insurance product, we strongly recommend that you:",
        ],
        list: [
          "Conduct a detailed needs analysis with a licensed insurance advisor",
          "Read and understand all policy terms, conditions, exclusions, and limitations thoroughly",
          "Compare different insurance companies and products to understand the pros and cons of each option",
          "Consult a tax advisor to understand the impact of insurance on your personal tax situation",
          "Consider your overall financial situation, risk tolerance, and long-term financial goals",
        ],
        listType: "bullet",
        trailingParagraph:
          "Any financial projections, simulation data, or case studies mentioned on this website are for illustrative purposes only. Actual results may vary due to individual circumstances, market conditions, and other factors, and similar future results are not guaranteed.",
      },
      {
        heading: "4. California Insurance Regulatory Disclosure",
        paragraphs: [
          "NewGen Insurance Agency holds a valid insurance agent license issued by the California Department of Insurance (CDI) and is subject to California insurance regulations. All of our agents hold individual insurance licenses and comply with all applicable regulations of the California Department of Insurance.",
          "As required by California insurance regulations, we disclose the following important information to you:",
        ],
        list: [
          "We operate as insurance agents and may represent products from multiple insurance companies.",
          "We may receive commissions or other forms of compensation from insurance companies for transactions we facilitate.",
          "As an independent insurance agency, we do not exclusively represent the full product line of any single insurance company.",
          "The suitability assessment of insurance products is based on the information you provide; we are not responsible for consequences arising from inaccurate information.",
          "If you have any complaints about our services, you have the right to file a complaint with the California Department of Insurance: Phone: 1-800-927-4357, Website: www.insurance.ca.gov.",
        ],
        listType: "bullet",
      },
      {
        heading: "5. Special Disclosure for Index-Linked Products",
        paragraphs: [
          "Indexed Universal Life (IUL) and Fixed Indexed Annuity (FIA) and other index-linked insurance products are not securities investments and do not directly invest in stock market indices. The cash value growth of these products is subject to participation rates, cap rates, and specific fees. Actual performance may differ from descriptions.",
        ],
        list: [
          "Past index performance does not guarantee future returns",
          "The method of calculating index-linked interest varies by insurance company and product",
          "Policy fees (including premium charges, policy administration fees, and cost of insurance) will affect the accumulation of cash value",
          "Early policy termination may incur surrender charges",
          "Policy loans and withdrawals may reduce the death benefit amount",
        ],
        listType: "bullet",
      },
      {
        heading: "6. Tax Disclaimer",
        paragraphs: [
          "Tax-related information on this website, including but not limited to tax-free retirement income and tax-deferred growth, is for general informational purposes only and does not constitute tax advice. The tax treatment of insurance products depends on specific circumstances, including policy structure, withdrawal methods, and applicable federal and state tax laws. Tax laws may change; we recommend consulting a qualified tax advisor or accountant before making any tax planning decisions.",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "7. Contact Us",
        paragraphs: [
          "If you have any questions about this disclaimer or our scope of services, please contact us through the following:",
        ],
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
      title: "免責聲明",
      subtitle:
        "請仔細閱讀以下重要聲明。本聲明涉及新睿保險集團的服務範圍、監管資質及保險產品適用性等重要事項。",
    },
    importantNotice:
      "重要提示：本網站提供的資訊僅供一般教育和資訊參考用途，不構成法律、稅務、財務或保險建議。在做出任何保險或財務決策之前，請諮詢具備相關資質的專業人士。",
    sections: [
      {
        heading: "一、非招攬聲明",
        paragraphs: [
          "本網站的內容不構成對任何個人購買保險產品的要約或招攬，亦不構成在任何特定州或司法管轄區提供保險服務的要約。新睿保險集團僅在其持有有效保險執照的州份提供保險服務。",
          "本網站上展示的保險產品、方案及服務的可用性依州別而異。本網站對任何特定產品或服務在您所在州別的可用性不作任何陳述或保證。如需了解特定保險產品在您所在州份的適用性，請直接聯繫我們的顧問。",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "二、保險產品的州別差異",
        paragraphs: [
          "保險產品及其條款、費率、福利、除外責任及限制因各州保險監管要求不同而存在顯著差異。本網站上描述的保險產品特性、福利及費用僅為一般性說明，具體條款以各保險公司正式保單文件為準。",
          "以下因素可能影響保險產品在您所在州份的適用性及具體條款：",
        ],
        list: [
          "各州保險法規及監管要求的差異",
          "保險公司在各州的執照及核准產品範圍",
          "各州最低保障要求及保費限制",
          "特定州份的特殊披露要求",
          "申請人的年齡、健康狀況及財務資格",
        ],
        listType: "bullet",
        trailingParagraph:
          "生前福利（Living Benefits）、保費豁免、死亡理賠加速給付等附約或特別條款的可用性及條件亦因保險公司、產品類型及所在州份而有所不同。",
      },
      {
        heading: "三、尋求專業建議",
        paragraphs: [
          "保險規劃是個人財務規劃的重要組成部分，每個人的情況各有不同。本網站提供的資訊不能替代來自具備相應資質的持牌保險顧問、財務規劃師、稅務顧問或法律顧問的個人化建議。",
          "在購買任何保險產品之前，我們強烈建議您：",
        ],
        list: [
          "與持牌保險顧問進行詳細的需求分析",
          "詳細閱讀並理解保單的所有條款、條件、除外責任及限制",
          "比較不同保險公司和產品，了解各項選擇的優缺點",
          "諮詢稅務顧問，了解保險在您個人稅務情況下的影響",
          "考慮您的整體財務狀況、風險承受能力及長期財務目標",
        ],
        listType: "bullet",
        trailingParagraph:
          "本網站上提及的任何財務預測、模擬數據或案例研究均為說明目的，實際結果可能因個人情況、市場條件及其他因素而有所不同，且不保證未來的類似結果。",
      },
      {
        heading: "四、加州保險監管披露",
        paragraphs: [
          "新睿保險集團依法持有加利福尼亞州保險局（California Department of Insurance, CDI）頒發的保險執照，受加州保險法規的約束與監管。我們的代理人均持有相應的個人保險執照，並遵守加州保險局的所有適用規定。",
          "依加州保險法規要求，我們向您披露以下重要資訊：",
        ],
        list: [
          "我們以保險代理人身份運營，可能代表多家保險公司的產品。",
          "我們可能就促成的保險交易從保險公司獲得佣金或其他形式的報酬。",
          "作為獨立保險代理機構，我們不為任何單一保險公司的全部產品提供獨家代理。",
          "保險產品的適用性評估基於您提供的資訊，我們不對資訊不準確所導致的後果負責。",
          "如對我們的服務有任何投訴，您有權向加州保險局投訴，電話：1-800-927-4357，網址：www.insurance.ca.gov。",
        ],
        listType: "bullet",
      },
      {
        heading: "五、指數型產品特別聲明",
        paragraphs: [
          "指數型萬能壽險（Indexed Universal Life, IUL）及指數型年金（Fixed Indexed Annuity, FIA）等指數型保險產品並非證券投資，不直接投資於股市指數。這些產品的現金價值增長受參與率、利率上限（Cap Rate）及特定費用的影響，實際表現可能與描述有所差異。",
        ],
        list: [
          "過去的指數表現不保證未來收益",
          "指數連結利息的計算方式因保險公司和產品而有所不同",
          "保單費用（包括保費費用、保單管理費及死亡保障成本）將影響現金價值的累積",
          "提前終止保單可能面臨退保費用（Surrender Charges）",
          "保單貸款及提領可能減少死亡理賠金額",
        ],
        listType: "bullet",
      },
      {
        heading: "六、稅務聲明",
        paragraphs: [
          "本網站涉及的稅務相關資訊，包括但不限於免稅退休收入、稅務遞延增長等內容，僅為一般性說明，不構成稅務建議。保險產品的稅務處理取決於具體情況，包括保單結構、提領方式及適用的聯邦和州稅法。稅法可能發生變化，建議在做出任何稅務規劃決策前，諮詢具備資質的稅務顧問或會計師。",
        ],
        list: null,
        listType: null,
      },
      {
        heading: "七、聯繫我們",
        paragraphs: [
          "如對本免責聲明或我們的服務範圍有任何疑問，請透過以下方式聯繫我們：",
        ],
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

export function DisclaimerContent() {
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

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <p className="text-amber-800 text-sm leading-relaxed font-medium">
              {t.importantNotice}
            </p>
          </div>

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
