import React from 'react';
import { FiMail } from 'react-icons/fi';

const Cta = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 mb-6">
            準備好開始您的數位轉型之旅了嗎？
          </h2>
          <p className="text-lg text-gray-500 mb-12">
            Kodea Studio 對新的合作機會與創新專案挑戰永遠抱持開放態度。無論您有天馬行空的創意想法，或是需要具體的技術解決方案，我們都很樂意與您討論。
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <FiMail className="w-5 h-5 text-gray-600" />
              <a 
                href="mailto:contact@kodea-studio.com" 
                className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
              >
                contact@kodea-studio.com
              </a>
            </div>
            
            <p className="text-sm text-gray-400 pt-6">
              通常在 24 小時內回覆 • 歡迎中文或英文聯繫
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta; 