
import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* 背景裝飾元素 - 增加浮動動畫 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-gray-50/30 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl pointer-events-none animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-100/30 rounded-full blur-3xl pointer-events-none animate-[floatReverse_8s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-200/10 rounded-full blur-2xl pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* 主要內容區域 */}
          <div className="text-center space-y-8">
            {/* 問候語 - 增加懸停效果 */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 opacity-0 animate-[fadeIn_1s_ease-out_forwards] hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-default">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              歡迎來到 Kodea Studio！
            </div>
            
            {/* 主標題 - 增加字母動畫 */}
            <div className="space-y-4 opacity-0 animate-[slideUp_1s_ease-out_0.2s_forwards]">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 tracking-tight hover:text-blue-700 transition-colors duration-500">
                Kodea Studio
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full animate-[expand_2s_ease-out_1s_forwards] origin-center"></div>
            </div>
            
            {/* 職業描述 */}
            <div className="space-y-6 opacity-0 animate-[slideUp_1s_ease-out_0.4s_forwards]">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 tracking-wide hover:text-gray-800 transition-colors duration-300">
                Code + Idea = 無限可能
              </h2>
              
              {/* 技能標籤 - 增加波浪動畫 */}
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                  'React', 'Next.js', 'TypeScript',
                  'Flutter', 'Node.js', 'Python', 
                  'AI/ML', 'PyTorch', 'Edge AI', 
                ].map((skill, index) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-100 hover:shadow-lg hover:scale-110 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-300 opacity-0 animate-[bounceIn_0.8s_ease-out_forwards] cursor-default"
                    style={{ 
                      animationDelay: `${0.6 + index * 0.15}s`,
                      transform: `translateY(${Math.sin(index * 0.5) * 3}px)`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* 描述文字 - 增加打字機效果樣式 */}
            <div className="max-w-3xl mx-auto py-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Kodea Studio 是一家專注於將創意與技術結合的數位工作室，
                <br className="hidden md:block" />
                我們專精於 <span className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">AI 模型整合應用</span> 與全端開發，
                <br />
                無論是品牌網站、應用程式開發，還是 AI 功能導入，
                <br />
                我們都能提供從 <span className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">概念設計到完整實現的一站式服務</span>。
              </p>
            </div>
            
            {/* 行動按鈕 - 增強動畫效果 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
              <a
                href="#portfolio"
                className="group inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95"
              >
                <span className="group-hover:animate-bounce">查看精選專案</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:animate-pulse transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 text-base font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md hover:-translate-y-1 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 active:scale-95"
              >
                <span className="group-hover:animate-pulse">聯繫合作</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 