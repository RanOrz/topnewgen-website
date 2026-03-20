import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "使用條款 | 新睿保險集團",
  description:
    "新睿保險集團網站使用條款，說明使用本網站的相關規定、智慧財產權、免責聲明及適用法律等重要事項。",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">使用條款</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            請詳細閱讀以下條款。使用本網站即表示您同意受本使用條款約束。
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <p className="text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
            生效日期：2025年1月1日
          </p>

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">一、條款的接受</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                歡迎訪問新睿保險集團（以下簡稱「本公司」）網站（topnewgen.com，以下簡稱「本網站」）。本使用條款（以下簡稱「本條款」）構成您與本公司之間具有法律約束力的協議，規範您對本網站的訪問與使用。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                訪問或使用本網站，即表示您已閱讀、理解並同意受本條款及本公司隱私政策的約束。若您不同意本條款的任何部分，請立即停止使用本網站。本公司保留隨時修改本條款的權利，修改後的條款在發布於網站後即時生效。您繼續使用本網站即表示接受修改後的條款。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">二、網站使用規範</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                您同意僅以合法目的使用本網站，且不得進行以下行為：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>以任何方式侵犯適用法律法規或第三方權利</li>
                <li>傳播任何虛假、具誤導性、欺詐性或非法內容</li>
                <li>在未獲授權的情況下，嘗試訪問本公司的系統、伺服器或資料庫</li>
                <li>上傳或傳播任何病毒、惡意軟體或其他有害程式碼</li>
                <li>以自動化工具爬取、抓取或批量下載本網站內容</li>
                <li>干擾或破壞本網站的正常運行</li>
                <li>冒充本公司員工、代理人或其他用戶</li>
                <li>收集或儲存其他用戶的個人資訊</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                本公司保留在未事先通知的情況下，因您違反本條款而終止或限制您訪問本網站的權利。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">三、智慧財產權</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                本網站上的所有內容，包括但不限於文字、圖片、圖形、標誌、音頻、視頻、軟體及網站整體設計（以下統稱「內容」），均為新睿保險集團或其授權方的財產，受美國及國際著作權、商標及其他智慧財產權法律的保護。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                在遵守本條款的前提下，我們授予您有限、非排他性、不可轉讓的個人非商業用途許可，允許您瀏覽並打印本網站內容的合理副本，但不得：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>修改、改編或創作本網站內容的衍生作品</li>
                <li>以商業目的複製、分發或公開展示網站內容</li>
                <li>移除或修改任何著作權、商標或其他所有權聲明</li>
                <li>將網站內容用於可能損害本公司聲譽的目的</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">四、資訊的準確性</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                本網站上的內容僅供一般教育和資訊參考用途。雖然我們盡力確保所提供資訊的準確性和時效性，但我們不對以下事項作出任何明示或默示的保證：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>網站內容的準確性、完整性或時效性</li>
                <li>網站將持續可用或不受中斷</li>
                <li>網站不含任何錯誤或技術問題</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                保險產品的具體條款、費率及可用性因個人情況及州別而異。本網站內容不構成保險建議或報價，在做出任何保險決策前，請咨詢我們的持牌保險顧問。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">五、免責聲明</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                在適用法律允許的最大範圍內，本公司明確聲明不作任何類型的保證，無論是明示、默示、法定或其他類型，包括但不限於：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>對特定用途的適用性的默示保證</li>
                <li>對可銷售性的默示保證</li>
                <li>對不侵犯第三方權利的默示保證</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                本網站「按現狀」及「按可用狀態」提供。您使用本網站的風險完全由您自行承擔。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">六、責任限制</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                在適用法律允許的最大範圍內，新睿保險集團及其董事、員工、代理人、合作夥伴及授權方在任何情況下均不對以下損失承擔責任，無論損失是否基於保證、合同、侵權（包括疏忽）或任何其他法律理論，且無論本公司是否已被告知此類損失的可能性：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>間接、附帶、特殊、後果性或懲罰性損失</li>
                <li>利潤損失、收入損失、業務損失或數據損失</li>
                <li>因使用或無法使用本網站而導致的損失</li>
                <li>因依賴本網站資訊而做出的任何決策所導致的損失</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">七、第三方連結</h2>
              <p className="text-muted-foreground leading-relaxed">
                本網站可能包含指向第三方網站的連結，這些連結僅為方便用戶而提供。本公司對第三方網站的內容、隱私政策或實踐不作任何背書或保證，對訪問這些網站所產生的任何損失或損害不承擔責任。訪問第三方網站的風險完全由您自行承擔。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">八、適用法律與爭議解決</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                本條款受加利福尼亞州法律管轄並依其解釋，不考慮其法律衝突條款。任何因本條款或您使用本網站而產生的爭議，雙方同意首先嘗試通過友好協商解決。若協商無果，爭議應提交至加利福尼亞州聖馬刁縣（San Mateo County）具有管轄權的法院解決，雙方均接受該法院的屬人管轄權。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                若本條款的任何條款被認定為無效或不可執行，其餘條款仍完全有效。本公司對本條款任何條款的放棄不構成對其他條款或未來違反同一條款的放棄。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">九、聯繫方式</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如對本使用條款有任何疑問，請透過以下方式聯繫我們：
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
