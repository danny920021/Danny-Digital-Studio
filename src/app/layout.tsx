import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kodea Studio - 將創意與技術結合的數位工作室",
  description: "Kodea Studio 專注將創意與技術結合，打造實用且有感的數位體驗。提供網頁開發、App開發、AI模型整合與UI/UX設計服務。Kodea = Code + Idea.",
  keywords: "Kodea Studio, 網頁開發, App開發, AI整合, UI/UX設計, 全端開發, 數位工作室",
  authors: [{ name: "Danny Wu", url: "https://kodea-studio.com" }],
  creator: "Kodea Studio",
  publisher: "Kodea Studio",
  icons: {
    icon: '/favicon.svg?v=2',
  },
  openGraph: {
    title: "Kodea Studio - 將創意與技術結合的數位工作室",
    description: "專注將創意與技術結合，打造實用且有感的數位體驗。Kodea = Code + Idea.",
    url: "https://kodea-studio.com",
    siteName: "Kodea Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.variable} ${notoSansTC.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
