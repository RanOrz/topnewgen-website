import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "隱私政策 | 新睿保險集團",
  description:
    "新睿保險集團隱私政策，說明我們如何收集、使用及保護您的個人資訊，以及您的隱私權利。",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">隱私政策</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            新睿保險集團重視並尊重您的隱私。本政策說明我們如何收集、使用、儲存及保護您的個人資訊。
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
              <h2 className="text-2xl font-bold text-primary mb-4">一、概述</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                新睿保險集團（以下簡稱「本公司」、「我們」）致力於保護訪問本網站（topnewgen.com）的用戶（以下簡稱「您」）的個人隱私。本隱私政策說明我們收集哪些資訊、如何使用這些資訊，以及我們採取何種措施保護您的個人資料。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                使用本網站即表示您同意本隱私政策所述的資料收集與使用方式。若您不同意本政策的任何條款，請勿使用本網站。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">二、我們收集的資訊</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我們可能收集以下類型的個人資訊：
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary/80 flex-shrink-0">個人識別資訊：</span>
                  <span className="leading-relaxed">您主動提供的姓名、電子郵件地址、電話號碼、郵寄地址等聯絡資訊，通常透過我們的諮詢預約表單、聯絡表單或電子郵件通訊收集。</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary/80 flex-shrink-0">財務相關資訊：</span>
                  <span className="leading-relaxed">在提供保險諮詢服務過程中，您可能提供的年齡、健康狀況、收入概況、家庭成員資訊等，用於評估適合您的保險方案。</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary/80 flex-shrink-0">瀏覽資料：</span>
                  <span className="leading-relaxed">您訪問本網站時自動收集的技術資訊，包括IP位址、瀏覽器類型、作業系統、訪問頁面、訪問時間及來源頁面等，用於改善網站功能與用戶體驗。</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary/80 flex-shrink-0">Cookie資訊：</span>
                  <span className="leading-relaxed">本網站使用Cookie及類似技術追蹤您的瀏覽偏好，詳情請見本政策第七條。</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">三、資訊的使用方式</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我們將收集到的資訊用於以下目的：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>回應您的諮詢請求並提供保險相關建議</li>
                <li>預約及確認顧問會面時間</li>
                <li>發送您請求的資訊、指南或報告</li>
                <li>向您發送定期電子報及教育性內容（您可隨時取消訂閱）</li>
                <li>改善本網站的功能、內容及用戶體驗</li>
                <li>遵守適用的法律法規及監管要求</li>
                <li>防止欺詐及保護本公司與用戶的合法利益</li>
                <li>進行匿名化的統計分析與業務研究</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">四、資料安全</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我們採取合理的技術與組織措施保護您的個人資訊，防止未經授權的訪問、使用、披露、更改或銷毀。這些措施包括：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>使用SSL/TLS加密技術保護網站資料傳輸</li>
                <li>限制有權訪問個人資訊的員工數量</li>
                <li>定期審查資料安全政策與程序</li>
                <li>與採用同等安全標準的第三方服務商合作</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                儘管我們盡力保護您的資訊，但請注意，透過網際網路傳輸資料並非絕對安全。我們無法保證透過本網站傳輸的資訊完全安全，資料傳輸的風險由您自行承擔。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">五、與第三方分享資訊</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我們不會出售、出租或以其他商業方式分享您的個人資訊。在以下情況下，我們可能與第三方分享您的資訊：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li><strong className="text-primary/80">保險公司合作夥伴：</strong>在您同意的前提下，為取得保險報價或辦理投保所必要的資訊分享。</li>
                <li><strong className="text-primary/80">服務提供商：</strong>協助我們運營網站及提供服務的技術供應商（如電子郵件服務、網站分析工具），這些供應商受合約約束，不得將資訊用於其他目的。</li>
                <li><strong className="text-primary/80">法律要求：</strong>依法律規定、政府機關命令或保護本公司合法權益所必要時。</li>
                <li><strong className="text-primary/80">業務轉讓：</strong>若本公司發生合併、收購或資產出售，相關個人資訊可能作為轉讓資產的一部分，我們將提前通知您。</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">六、資料保留</h2>
              <p className="text-muted-foreground leading-relaxed">
                我們將在達成收集目的所必要的期間內保留您的個人資訊，或依適用法律規定的保留期限保存（以較長者為準）。保險相關業務記錄可能依加州保險法規的要求保留特定年限。當個人資訊不再需要保留時，我們將以安全方式將其刪除或匿名化處理。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">七、Cookie政策</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                本網站使用Cookie及類似技術（如網頁信標、像素標籤）來改善您的瀏覽體驗。Cookie是儲存於您裝置上的小型文字檔案，幫助我們：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li>記住您的偏好設定，提供個性化體驗</li>
                <li>分析網站流量與用戶行為，持續改善網站內容</li>
                <li>衡量行銷活動的效果</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                您可以透過瀏覽器設定管理或拒絕Cookie。請注意，停用Cookie可能影響本網站部分功能的正常運作。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">八、您的隱私權利</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                依據加州消費者隱私法（CCPA）及其他適用法律，加州居民享有以下隱私權利：
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                <li><strong className="text-primary/80">知情權：</strong>了解我們收集哪些個人資訊及其使用方式。</li>
                <li><strong className="text-primary/80">訪問權：</strong>請求獲取我們持有的關於您的個人資訊副本。</li>
                <li><strong className="text-primary/80">刪除權：</strong>在特定情況下，請求刪除您的個人資訊。</li>
                <li><strong className="text-primary/80">更正權：</strong>要求更正不準確的個人資訊。</li>
                <li><strong className="text-primary/80">退出權：</strong>選擇退出個人資訊的出售或特定類型的資訊分享（本公司不出售個人資訊）。</li>
                <li><strong className="text-primary/80">不受歧視權：</strong>行使上述隱私權利不會受到歧視性對待。</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                如需行使上述任何權利，請透過本政策第九條所列的聯絡方式與我們聯繫。我們將在適用法律規定的期限內回應您的請求。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">九、聯繫我們</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如對本隱私政策有任何疑問、意見或欲行使您的隱私權利，請透過以下方式聯繫我們的隱私專員：
              </p>
              <div className="bg-secondary rounded-xl p-6 space-y-2">
                <p className="text-foreground font-semibold">新睿保險集團</p>
                <p className="text-muted-foreground">電子郵件：<a href="mailto:info@topnewgen.com" className="text-primary hover:underline">info@topnewgen.com</a></p>
                <p className="text-muted-foreground">電話：(650) 755-1668</p>
                <p className="text-muted-foreground">地址：851 Burlway Road, #608, Burlingame, CA 94010</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">十、本政策的變更</h2>
              <p className="text-muted-foreground leading-relaxed">
                我們可能不定期更新本隱私政策，以反映業務實踐、技術或法律要求的變化。重大變更將透過網站公告或電子郵件通知您。建議您定期查閱本頁面，了解最新的隱私保護措施。繼續使用本網站即表示您接受更新後的隱私政策。
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
