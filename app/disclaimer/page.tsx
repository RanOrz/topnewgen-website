import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "免責聲明 | 新睿保險集團",
  description:
    "新睿保險集團免責聲明，包含保險產品的州別適用聲明、加州保險監管披露及相關重要注意事項。",
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">免責聲明</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            請仔細閱讀以下重要聲明。本聲明涉及新睿保險集團的服務範圍、監管資質及保險產品適用性等重要事項。
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <p className="text-amber-800 text-sm leading-relaxed font-medium">
              重要提示：本網站提供的資訊僅供一般教育和資訊參考用途，不構成法律、稅務、財務或保險建議。在做出任何保險或財務決策之前，請諮詢具備相關資質的專業人士。
            </p>
          </div>

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">一、非招攬聲明</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                本網站的內容不構成對任何個人購買保險產品的要約或招攬，亦不構成在任何特定州或司法管轄區提供保險服務的要約。新睿保險集團僅在其持有有效保險執照的州份提供保險服務。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                本網站上展示的保險產品、方案及服務的可用性依州別而異。本網站對任何特定產品或服務在您所在州別的可用性不作任何陳述或保證。如需了解特定保險產品在您所在州份的適用性，請直接聯繫我們的顧問。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">二、保險產品的州別差異</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                保險產品及其條款、費率、福利、除外責任及限制因各州保險監管要求不同而存在顯著差異。本網站上描述的保險產品特性、福利及費用僅為一般性說明，具體條款以各保險公司正式保單文件為準。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                以下因素可能影響保險產品在您所在州份的適用性及具體條款：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>各州保險法規及監管要求的差異</li>
                <li>保險公司在各州的執照及核准產品範圍</li>
                <li>各州最低保障要求及保費限制</li>
                <li>特定州份的特殊披露要求</li>
                <li>申請人的年齡、健康狀況及財務資格</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                生前福利（Living Benefits）、保費豁免、死亡理賠加速給付等附約或特別條款的可用性及條件亦因保險公司、產品類型及所在州份而有所不同。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">三、尋求專業建議</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                保險規劃是個人財務規劃的重要組成部分，每個人的情況各有不同。本網站提供的資訊不能替代來自具備相應資質的持牌保險顧問、財務規劃師、稅務顧問或法律顧問的個人化建議。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                在購買任何保險產品之前，我們強烈建議您：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>與持牌保險顧問進行詳細的需求分析</li>
                <li>詳細閱讀並理解保單的所有條款、條件、除外責任及限制</li>
                <li>比較不同保險公司和產品，了解各項選擇的優缺點</li>
                <li>諮詢稅務顧問，了解保險在您個人稅務情況下的影響</li>
                <li>考慮您的整體財務狀況、風險承受能力及長期財務目標</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                本網站上提及的任何財務預測、模擬數據或案例研究均為說明目的，實際結果可能因個人情況、市場條件及其他因素而有所不同，且不保證未來的類似結果。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">四、加州保險監管披露</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                新睿保險集團依法持有加利福尼亞州保險局（California Department of Insurance, CDI）頒發的保險執照，受加州保險法規的約束與監管。我們的代理人均持有相應的個人保險執照，並遵守加州保險局的所有適用規定。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                依加州保險法規要求，我們向您披露以下重要資訊：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>我們以保險代理人身份運營，可能代表多家保險公司的產品。</li>
                <li>我們可能就促成的保險交易從保險公司獲得佣金或其他形式的報酬。</li>
                <li>作為獨立保險代理機構，我們不為任何單一保險公司的全部產品提供獨家代理。</li>
                <li>保險產品的適用性評估基於您提供的資訊，我們不對資訊不準確所導致的後果負責。</li>
                <li>如對我們的服務有任何投訴，您有權向加州保險局投訴，電話：1-800-927-4357，網址：www.insurance.ca.gov。</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">五、指數型產品特別聲明</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                指數型萬能壽險（Indexed Universal Life, IUL）及指數型年金（Fixed Indexed Annuity, FIA）等指數型保險產品並非證券投資，不直接投資於股市指數。這些產品的現金價值增長受參與率、利率上限（Cap Rate）及特定費用的影響，實際表現可能與描述有所差異。
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>過去的指數表現不保證未來收益</li>
                <li>指數連結利息的計算方式因保險公司和產品而有所不同</li>
                <li>保單費用（包括保費費用、保單管理費及死亡保障成本）將影響現金價值的累積</li>
                <li>提前終止保單可能面臨退保費用（Surrender Charges）</li>
                <li>保單貸款及提領可能減少死亡理賠金額</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">六、稅務聲明</h2>
              <p className="text-muted-foreground leading-relaxed">
                本網站涉及的稅務相關資訊，包括但不限於免稅退休收入、稅務遞延增長等內容，僅為一般性說明，不構成稅務建議。保險產品的稅務處理取決於具體情況，包括保單結構、提領方式及適用的聯邦和州稅法。稅法可能發生變化，建議在做出任何稅務規劃決策前，諮詢具備資質的稅務顧問或會計師。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">七、聯繫我們</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如對本免責聲明或我們的服務範圍有任何疑問，請透過以下方式聯繫我們：
              </p>
              <div className="bg-secondary rounded-xl p-6 space-y-2">
                <p className="text-foreground font-semibold">新睿保險集團</p>
                <p className="text-muted-foreground">電子郵件：<a href="mailto:info@topnewgen.com" className="text-primary hover:underline">info@topnewgen.com</a></p>
                <p className="text-muted-foreground">電話：(650) 755-1668</p>
                <p className="text-muted-foreground">地址：851 Burlway Road, #608, Burlingame, CA 94010</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
