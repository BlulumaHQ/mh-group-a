/**
 * Traditional Chinese (zh-Hant) copy — client-approved.
 * Images, layout and structure are shared with the English site.
 */

export const zhSite = {
  nav: [
    { label: "首頁", to: "/zh" },
    { label: "精選專案", to: "/zh/projects" },
    { label: "服務範疇", to: "/zh/services" },
    { label: "品牌理念", to: "/zh/our-philosophy" },
    { label: "聯絡我們", to: "/zh/contact" },
  ],
  footerIntro:
    "簽約是合作的里程碑；而持續的物業與資產管理，才是一份真正長遠的承諾。您的資產，值得一個願意為目標全力以赴、始終與您並肩向前的團隊。",
  footerServices: [
    "物件選購與交易策略",
    "物業與資產管理",
    "翻新與專案管理",
    "家具配置、入住服務",
  ],
  labels: {
    navigation: "網站導覽",
    services: "服務範疇",
    contact: "聯絡資訊",
    phone: "電話",
    email: "電子郵件",
    location: "地點",
  },
  location: "紐約州紐約市",
  copyright: "© 2026 MH Group LLC. 保留所有權利。",
  privacy: "隱私權政策",
  terms: "使用條款",
};

export const zhHome = {
  heroEyebrow: "統籌管理你的資產的每個階段。",
  heroTitle: "您的曼哈頓物業，一套完整策略。",
  heroCopy:
    "從物件買進與出售、裝潢專案管理，到家具配置、招租準備、持續代管與持有策略，MH Group 統籌每一個關鍵環節，讓每項決策皆回應資產的長期目標。",
  btn1: "服務項目",
  btn2: "競選案例",
  servicesEyebrow: "清楚判讀。精準統籌。持續管理。",
  servicesHeading: "從物件策略到長期持有，由一個團隊統籌。",
  services: [
    {
      title: "物件選購與策略訂制",
      blurb:
        "曼哈頓住宅市場的在地判讀，協助客戶評估物件條件、使用目標、資本配置與下一步策略。",
      icon: "house" as const,
    },
    {
      title: "物業與資產管理",
      blurb:
        "從招租協調、租客入住、大樓溝通到日常維護與績效檢視，讓物業持續回應您的持有目標。",
      icon: "building" as const,
    },
    {
      title: "裝潢與專案管理",
      blurb:
        "由專責團隊統籌大樓審批、文件、承包團隊、預算掌控，讓複雜流程有一個清楚對口。",
      icon: "drafting" as const,
    },
    {
      title: "家具配置、入住所需服務與招租準備",
      blurb:
        "依自住或出租策略規劃家具、空間呈現及入住前所需協調，讓住宅以適合的狀態迎接下一階段。",
      icon: "armchair" as const,
    },
  ],
  projectsEyebrow: "代表案例",
  projectsHeading: "從物件潛力到可視的成果",
  projectsCta: "查看精選案例",
  processEyebrow: "專案流程",
  processHeading: "從開始到持續管理，讓每一步相互連貫",
  steps: [
    {
      num: "01",
      label: "探索",
      copy: "我們先理解您的資產目標、生活方式、使用需求與持有計畫。",
      icon: "discover" as const,
    },
    {
      num: "02",
      label: "規劃",
      copy: "依物件條件與目標，建立清楚的購入、改善、配置或管理策略。",
      icon: "plan" as const,
    },
    {
      num: "03",
      label: "統籌",
      copy: "以一個專責團隊整合文件、時程、現場執行與日常溝通。",
      icon: "manage" as const,
    },
    {
      num: "04",
      label: "持續表現",
      copy: "在入住、出租或持有後，持續檢視並推進物業的下一步。",
      icon: "enjoy" as const,
    },
  ],
  philosophyEyebrow: "品牌理念",
  philosophyHeading: "以信任為本，以長期價值為目標。",
  philosophyCopy:
    "買進、出售或完成簽約，是合作的重要里程碑；而持續的物業與資產管理，才是一份真正長遠的承諾。您的資產，值得一個願意為目標全力以赴、始終與您並肩向前的團隊。",
  values: [
    { label: "誠信", icon: "integrity" },
    { label: "專業", icon: "expertise" },
    { label: "卓越", icon: "excellence" },
  ],
  partnershipEyebrow: "合作夥伴",
  partnershipHeading: "與 The Maggie Huang Team 協同服務物件買賣",
  partnershipCopy:
    "MH Group 與 The Maggie Huang Team 協作，串聯曼哈頓市場洞察先機、物件代理與持有後管理資源，讓客戶在每一階段都擁有清楚且一致的策略。",
  ctaHeading: "準備開始你的曼哈專案了嗎？",
  ctaCopy: "讓我們統籌細節，讓您看見更多可能。",
  ctaButton: "聯絡我們",
};

export const zhServices = {
  eyebrow: "整合執行。清楚對口。持續表現。",
  h1: "曼哈頓住宅的全方位專案與持有管理團隊",
  intro:
    "從物件選購、持有管理、翻新專案到家具配置與入住準備，MH Group 以一個團隊串聯每個階段，讓決策、執行與長期目標保持一致。",
  items: [
    {
      title: "物件選購與交易策略",
      blurb: "為曼哈頓住宅的買進、出售與投資決策提供在地市場判讀與策略協調。",
    },
    {
      title: "物業與資產管理",
      blurb:
        "以完整的日常管理、招租協調與績效檢視，協助業主維持物業品質並推進長期目標。",
    },
    {
      title: "翻新與專案管理",
      blurb: "由值得信賴的合作團隊與專責窗口，統籌翻新流程、文件、現場品質與大樓溝通。",
    },
    {
      title: "家具配置、入住所需服務與招租準備",
      blurb:
        "以物件定位為前提，完成家具挑選、空間呈現、入住前協調與出租市場準備，讓住宅在正確時點呈現最佳狀態。",
    },
  ],
  renovationDetail: [
    {
      heading: "現場統籌與品質管理",
      copy: "專責人員掌握現場進度與關鍵節點，於交付前完成細緻檢視，讓每個細節符合專案標準。",
    },
    {
      heading: "材料策略與選擇",
      copy: "與業主共同判讀材質、耐用性、日常機能與預算邊界，讓每一筆投入都回應使用與長期目標。",
    },
    {
      heading: "大樓審批與物業溝通",
      copy: "統籌 Alteration Agreement、保險證明與所需文件，協助與大樓物業管理團隊進行清楚、有序的協調。",
    },
    {
      heading: "承包團隊資格與文件管理",
      copy: "協調承包商、供應商的執照、保險與相關文件，讓進場與執行符合大樓規範及專案節奏。",
    },
    {
      heading: "大樓管理與現場物流協調",
      copy: "作為業主與大樓之間的主要對口，協調施工時段、運送、進場及現場流程，讓執行更順暢。",
    },
  ],
  processHeading: "從判讀到執行，讓每一步保持一致。",
  steps: [
    { num: "01", label: "理解", copy: "理解資產目標、生活方式與持有需求。", icon: "discover" as const },
    {
      num: "02",
      label: "規劃",
      copy: "建立符合物件條件、資金安排與時間線的策略。",
      icon: "plan" as const,
    },
    {
      num: "03",
      label: "統籌",
      copy: "整合大樓文件、合作團隊、時程與現場執行。",
      icon: "manage" as const,
    },
    {
      num: "04",
      label: "持續表現",
      copy: "完成入住、出租準備或後續管理，並定期檢視下一步。",
      icon: "enjoy" as const,
    },
  ],
  ctaHeading: "從一場專屬的物業策略對話開始。",
  ctaButton: "聯絡我們",
};

export const zhProjectsIndex = {
  eyebrow: "代表案例",
  h1: "讓策略，落實為可感受的成果。",
  intro:
    "每一個住宅都有不同的條件與目標。MH Group 從物件判讀、大樓協調、專案統籌到交付準備，以清楚的策略與細緻執行，回應每一個專案的獨特需求。",
  cardCta: "查看案例詳情",
};

const sharedHighlights = [
  { title: "現場統籌", copy: "全程掌握現場節奏，並於交付前進行細緻品質檢視。", icon: "oversight" as const },
  { title: "材料策略", copy: "與業主共同選擇兼顧美感、耐用性與預算邊界的材料。", icon: "material" as const },
  {
    title: "大樓審批",
    copy: "協調裝修協議、保險證明及所需文件，完成與大樓物業管理團隊的溝通。",
    icon: "approvals" as const,
  },
  {
    title: "現場物流",
    copy: "協調大樓管理員、施工時間與運送安排，讓所有執行符合大樓規範。",
    icon: "logistics" as const,
  },
];

export const zhProjectShared = {
  back: "返回代表案例",
  serviceLabel: "翻新與專案管理",
  subtitle: "全案翻新與專案管理",
  locationLabel: "地點",
  scopeLabel: "服務範圍",
  scope: "全案翻新與專案管理",
  stats: [
    { num: "100%", l1: "由 MH Group", l2: "統籌專案管理" },
    { num: "1 個", l1: "從啟動到交付", l2: "的專責團隊" },
  ],
  highlightsHeading: "專案重點",
  highlightsIntro:
    "從大樓規範、團隊管理、材料策略到現場物流，MH Group 以一個清楚對口統籌每個環節。",
  highlights: sharedHighlights,
  beforeLabel: "改造前",
  beforeCopy: "首次勘查時的物件現況。",
  ctaHeading: "讓您的構想，以清楚策略被妥善執行。",
  ctaButton: "開始規劃您的專案",
};

export const zhProjects: Record<
  string,
  { name: string; location: string; intro: string }
> = {
  "upper-east-side": {
    name: "上東區住宅",
    location: "上東區，曼哈頓",
    intro:
      "這個上東區住宅的全案翻新，由 MH Group 自始至終統籌執行。我們完成大樓審批與文件協調、承包團隊篩選、材料策略及現場監督，並在交付前完成品質檢視，讓住宅以完整、整潔且可立即入住的狀態交回業主。",
  },
  "sutton-place": {
    name: "Sutton Place 住宅",
    location: "Sutton Place，曼哈頓",
    intro:
      "這個 Sutton Place 住宅的全面翻新，由 MH Group 以整合式管理推進。從裝修協議與保險文件、大樓進場規範、運送與施工時段協調，到與業主共同確認材料及完成品質檢視，每個環節皆由同一團隊清楚統籌。",
  },
  "upper-west-side": {
    name: "上西區住宅",
    location: "上西區，曼哈頓",
    intro:
      "這個上西區住宅的全面翻新，以一個專責團隊統籌完成。MH Group 管理承包團隊與大樓所需流程，協助確立材料方向，並完成家具配置與入住準備，讓業主能以從容、完整的狀態展開下一個居住階段。",
  },
  "midtown-east": {
    name: "Midtown East 住宅",
    location: "Midtown East，曼哈頓",
    intro:
      "這個 Midtown East 住宅按空間逐步重整，由 MH Group 統籌現場所有工種。從施工時程、合規文件與大樓規範，到品質檢視與交付安排，皆以一致的專案節奏推進，讓住宅的改善更貼近使用目標與持有計畫。",
  },
};

export const zhPhilosophy = {
  eyebrow: "品牌理念",
  h1: "以信任為本，以長期價值為目標。",
  intro:
    "MH Group 相信，住宅不只是生活發生的空間，也是需要被清楚規劃與持續管理的資產。我們以完整的專案統籌、在地經驗與一致溝通，協助客戶在每個持有階段作出更從容的決策。",
  values: [
    {
      label: "誠信",
      icon: "integrity",
      copy: "從初次勘查到最終交付，清楚溝通預算、時程與執行內容，讓每一項決策都有依據。",
    },
    {
      label: "專業",
      icon: "expertise",
      copy: "曼哈頓大樓的規範、董事會流程與現場工種，需要熟悉市場與細節的團隊預先掌握。我們在問題出現之前，先完成準備與協調。",
    },
    {
      label: "卓越",
      icon: "excellence",
      copy: "每個專案皆以 MH Group 的品質標準檢視；從現場細節到交付狀態，讓成果回應業主真正的使用與持有目標。",
    },
  ],
  partnershipEyebrow: "合作夥伴",
  partnershipHeading: "與 The Maggie Huang Team 協同服務",
  partnershipCopy:
    "MH Group 與 The Maggie Huang Team 串聯物件代理、曼哈頓市場情報與持有後管理資源，為客戶建立更完整的物業策略。",
  ctaHeading: "準備開始您的下一步嗎？",
  ctaCopy: "讓我們統籌細節，讓您看見更多可能。",
  ctaButton: "聯絡我們",
};

export const zhContact = {
  eyebrow: "聯絡我們",
  h1: "從一場專屬對話開始。",
  formHeading: "告訴我們您的需求",
  labels: {
    name: "姓名",
    email: "電子郵件",
    phone: "電話",
    service: "感興趣的服務",
    message: "訊息",
  },
  options: [
    "物件選購與交易策略",
    "物業與資產管理",
    "翻新與專案管理",
    "家具配置、入住所需服務與招租準備",
  ],
  submit: "送出諮詢",
  errors: {
    name: "請輸入您的姓名。",
    email: "請輸入有效的電子郵件地址。",
    message: "請簡述您的需求。",
  },
  thanksTitle: "謝謝您的來信，",
  thanksCopy: "您的資訊已準備好寄出。請點選下方按鈕以電子郵件寄給我們，或直接來信",
  thanksButton: "以電子郵件寄出",
  rightHeading: "直接與我們聯繫",
  location: "紐約州紐約市",
};

export const zhLegalNote =
  "此中文版本為便利閱讀稿；正式法律效力與適用範圍，應由最終上線之英文法律條款及法律顧問意見為準。";

export const zhPrivacy = {
  eyebrow: "法律資訊",
  h1: "隱私權政策",
  sections: [
    {
      h: "我們蒐集的資訊",
      p: "我們僅蒐集您主動提供的資訊，包括：透過聯絡表單提交的姓名、電子郵件地址、電話、所選服務與訊息；或您透過電子郵件、電話主動提供給我們的資料。",
    },
    {
      h: "我們如何使用您的資訊",
      p: "您的資訊僅用於回覆您的諮詢，以及提供您所詢問的物件代理、物業管理、翻新與家具配置等服務。我們不會出售、出租或交易您的個人資訊。",
    },
    {
      h: "資訊分享",
      p: "僅在提供您委託的服務所必要時，例如與承包商、供應商或大樓物業管理團隊協調，或依法有必要時，我們才會分享相關資訊。",
    },
    {
      h: "Cookies 與網站分析",
      p: "本網站不使用廣告 Cookie 或第三方追蹤工具。網站主機服務所蒐集的技術性資料，僅用於維持網站的安全與正常運作。",
    },
    {
      h: "資料保存與安全",
      p: "我們僅在達成蒐集目的所必要的期間內保存諮詢紀錄，並採取合理的行政與技術措施保護資料。",
    },
    {
      h: "您的選擇",
      p: "您可隨時來信 James.huang@mhgroupny.com，要求更正或刪除我們所持有的您的資訊。",
    },
  ],
};

export const zhTerms = {
  eyebrow: "法律資訊",
  h1: "使用條款",
  sections: [
    {
      h: "接受本條款",
      p: "使用本網站即表示您同意本條款；如您不同意，請勿使用本網站。",
    },
    {
      h: "網站使用",
      p: "本網站提供 MH Group LLC 及其服務之一般資訊。您不得將本網站用於任何非法目的、干擾其運作，或未經書面同意將網站內容作商業用途複製或使用。",
    },
    {
      h: "智慧財產權",
      p: "本網站上的文字、照片、商標與設計元素，均為 MH Group LLC 所有或經合法授權使用。案例照片為 MH Group 已完成的專案成果，未經同意不得重製或使用。",
    },
    {
      h: "非專業建議",
      p: "本網站內容僅供一般資訊參考，並不構成針對任何特定交易的法律、財務、工程或不動產專業建議。實際服務內容以 MH Group LLC 與客戶簽訂的書面合約為準。",
    },
    {
      h: "責任限制",
      p: "本網站以現況提供。在法律允許的最大範圍內，MH Group LLC 不對因使用或依賴本網站資訊所造成的任何損失負責。",
    },
    {
      h: "聯絡我們",
      p: "如對本使用條款有任何疑問，請來信 James.huang@mhgroupny.com。",
    },
  ],
};

export const zhMeta = {
  home: {
    title: "首頁 | MH Group LLC",
    description:
      "MH Group 為曼哈頓住宅提供物件選購、物業與資產管理、翻新專案、家具配置、入住準備與持有策略的一站式整合服務。",
  },
  projects: {
    title: "精選專案 | MH Group LLC",
    description:
      "探索 MH Group 在曼哈頓完成的住宅翻新與專案管理案例，從物件判讀、大樓協調到完整交付。",
  },
  services: {
    title: "服務範疇 | MH Group LLC",
    description:
      "MH Group 為曼哈頓住宅提供物件選購與交易策略、物業管理、翻新專案管理、家具配置與入住準備服務。",
  },
  philosophy: {
    title: "品牌理念 | MH Group LLC",
    description:
      "了解 MH Group 如何以誠信、專業與卓越為核心，為曼哈頓住宅建立清楚而長期的物業策略。",
  },
  contact: {
    title: "聯絡我們 | MH Group LLC",
    description: "聯絡 MH Group，開始討論您的曼哈頓住宅、物業管理、翻新專案與持有策略。",
  },
  privacy: {
    title: "隱私權政策 | MH Group LLC",
    description: "MH Group LLC 如何蒐集、使用並保護您透過本網站提供的資訊。",
  },
  terms: {
    title: "使用條款 | MH Group LLC",
    description: "使用 MH Group LLC 網站所適用的條款，包含內容所有權與責任限制。",
  },
};
