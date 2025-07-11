import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danny Wu - 全端開發者 & UI/UX 設計師",
  description: "Danny Wu 的個人作品集網站，展示網頁開發、App開發與UI/UX設計專案。",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
