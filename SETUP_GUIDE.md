# 聯絡表單設置指南

## 方法 1: Formspree (推薦 - 最簡單)

### 步驟：
1. 訪問 [formspree.io](https://formspree.io/)
2. 註冊免費帳號
3. 點擊 "New Form"
4. 輸入你的Email地址
5. 複製提供的表單ID (格式: `xvoeqw12`)
6. 在 Contact.jsx 中替換 `YOUR_FORM_ID`

### 優點：
- ✅ 完全免費 (每月50次提交)
- ✅ 無需後端設置
- ✅ 自動垃圾郵件過濾
- ✅ 表單資料直接發送到你的Email

---

## 方法 2: EmailJS

### 步驟：
1. 訪問 [emailjs.com](https://emailjs.com/)
2. 註冊帳號並連接你的Email服務
3. 創建Email模板
4. 安裝: `npm install @emailjs/browser`
5. 在代碼中配置EmailJS

### 優點：
- ✅ 更多自定義選項
- ✅ 支援多種Email服務
- ✅ 可以發送確認郵件給客戶

---

## 方法 3: 自建後端API

### 如果需要更複雜的功能：
- 資料庫儲存
- 客戶管理
- 自動回覆系統
- 詳細分析

可以使用：
- **Node.js + Express**
- **Next.js API Routes**
- **Firebase Functions**
- **Netlify Functions**

---

## 推薦流程：

1. **開發測試**: 先用 Formspree 快速測試
2. **生產環境**: 根據需求選擇合適方案
3. **企業級**: 考慮自建後端API

---

## 安全注意事項：

- ✅ 表單驗證 (已實現)
- ✅ 速率限制
- ✅ 垃圾郵件防護
- ✅ HTTPS 加密 