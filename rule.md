我有一個網站專案名為 `Kodea Studio`，主打品牌形象網站設計與 AI 導入整合服務。目標客戶為中小企業老闆，網站風格極簡、富創意、具有專業感與設計層次，配色為黑白主調，留白充足，搭配大標題與有呼吸感的區塊式設計。

目前我已從產出了一系列 HTML 頁面，分別為：

- `index.html`：首頁（品牌主視覺、介紹、服務簡介、精選作品、客戶推薦、CTA）
- `about.html`：關於我們（團隊介紹、願景理念、公司簡介）
- `service.html`：服務介紹（UI/UX設計、全端開發、品牌策略）
- `work.html`：精選作品（展示作品內容與客戶案例）
- `contact.html`：聯絡我們（聯絡表單、地址、社群連結）

這些 HTML 放在 `html/` 資料夾中，請根據它們幫我完成以下任務：

---

### 任務 1：轉換為 React 專案結構（使用 Tailwind CSS）

請將每個 HTML 頁面轉換為一個 React 元件放在：
src/pages/
├── Home.jsx
├── About.jsx
├── Services.jsx
├── Work.jsx
└── Contact.jsx
### 任務 2：抽出共用元件

從每個頁面中抽出以下重複區塊，並放在：
src/components/
├── Header.jsx
└── Footer.jsx

這些元件需使用語意化 HTML 並結合 Tailwind CSS，可重複使用於每個頁面中。

---

### 任務 3：建立基本路由與入口檔案

使用 `react-router-dom` 建立頁面切換功能，並在 `App.jsx` 中整合所有頁面。目錄結構如下：
src/
├── App.jsx
├── main.jsx
├── pages/
├── components/
└── assets/
└── images/（可先放空或用 placeholder）

---

### 任務 4：優化與組織

- 清除冗餘 HTML、inline style，統一改為 Tailwind class
- 所有圖片與影片使用 placeholder 或 `/assets/images/xxx.png`
- 所有 icon、按鈕、CTA 使用統一 class 命名，易於後續維護
- 表單需具備可提交的 HTML 結構（但動作可為 placeholder）

---

### 輸出格式與目標

請以完整 React + Tailwind 專案結構建立，並提供每個頁面的代碼與說明。我希望每一頁能清楚、模組化、好維護，且具設計感。請先從 `Home.jsx` 開始，確認風格與結構後我再請你處理下一頁。
