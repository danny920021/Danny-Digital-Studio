'use client';

import React, { useState } from 'react';
import { FiAward, FiUsers, FiCode, FiTrendingUp } from 'react-icons/fi';

const stats = [
  {
    icon: <FiCode className="w-6 h-6" />,
    number: '30+',
    label: '完成專案'
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    number: '30+',
    label: '滿意客戶'
  },
  {
    icon: <FiAward className="w-6 h-6" />,
    number: '3+',
    label: '年經驗'
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    number: '100%',
    label: '準時交付'
  }
];

const About = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gray-50 rounded-full blur-2xl opacity-40 animate-[floatReverse_6s_ease-in-out_infinite]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* 標題區塊 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              關於 Kodea Studio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              專注將創意與技術結合，打造實用且有感的數位體驗
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左側：個人介紹 */}
            <div className="space-y-6 opacity-0 animate-[slideInFromLeft_1s_ease-out_0.4s_forwards]">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                  Hello，我們是 Kodea Studio
                </h3>
                <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                  Kodea Studio 是一家專業的數位工作室，我們致力於將創意想法轉化為實用的數位解決方案。憑藉豐富的全端開發經驗和前瞻性的 AI 技術整合能力，我們為客戶提供從概念設計到完整實現的一站式服務。
                </p>
                <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                  我們不僅僅是程式開發者，更是您的數位轉型夥伴。無論是企業網站、行動應用程式、AI 功能整合，還是複雜的平台系統，我們都能以專業的技術能力和商業思維，為您打造「實用、穩定、美觀」兼具的數位產品。
                </p>
              </div>

              {/* 技能亮點 */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-800">我們的核心技術：</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    '前端開發',
                    '後端開發',
                    'AI模型開發整合',
                    'UI/UX 設計',
                    'APP開發',
                    '邊緣AI'
                  ].map((skill, index) => (
                    <div 
                      key={skill}
                      className="flex items-center space-x-2 p-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 hover:scale-105 transition-all duration-300 group opacity-0 animate-[popIn_0.6s_ease-out_forwards]"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-600"></div>
                      <span className="text-sm text-gray-700 group-hover:text-blue-700 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右側：數據統計 */}
            <div className="space-y-8 opacity-0 animate-[slideInFromRight_1s_ease-out_0.6s_forwards]">
              {/* 個人照片區域 */}
              <div className="flex justify-center">
                <div className="w-40 h-40 overflow-hidden rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  {!imageError ? (
                    <img 
                      src="/danny-profile.jpg" 
                      alt="Danny Wu" 
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-blue-700">KS</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 成就統計 */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center hover:shadow-lg hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 group opacity-0 animate-[bounceIn_0.8s_ease-out_forwards]"
                    style={{ animationDelay: `${1 + index * 0.2}s` }}
                  >
                    <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 個人理念 */}
          <div className="mt-20 text-center opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 hover:shadow-lg transition-all duration-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
                我們的服務理念
              </h3>
              <blockquote className="text-lg text-gray-600 leading-relaxed italic max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
                &ldquo;Code + Idea = 無限可能。我們相信每個創意都值得被實現，每個技術都應該服務於使用者的真實需求。讓我們成為您數位轉型路上的最佳夥伴。&rdquo;
              </blockquote>
              <div className="mt-6">
                <span className="text-blue-600 font-medium">— Kodea Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 