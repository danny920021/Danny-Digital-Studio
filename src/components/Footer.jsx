import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* 主要內容區域 */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 品牌區塊 */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold mb-4 block hover:text-misty-purple transition-colors duration-300">
              Kodea Studio
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              專業數位品牌工作室，專注品牌形象網站設計，為中小企業打造專業的線上品牌形象。
            </p>
            
            {/* 聯絡資訊 */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@kodea-studio.com</span>
              </div>
            </div>
          </div>

          {/* 服務項目 */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">服務項目</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  品牌形象網站設計
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  AI 技術整合
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  應用程式開發
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  客製系統開發
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  系統整合服務
                </Link>
              </li>
            </ul>
          </div>

          {/* 快速連結 */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">快速連結</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-400 hover:text-white transition-colors duration-300">
                  作品集
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  服務內容
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          {/* 開始合作 */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">開始合作</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              準備好打造專屬的品牌網站了嗎？讓我們一起討論您的需求。
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-misty-purple-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-misty-purple transition-colors duration-300"
            >
              開始專案
            </Link>
          </div>
        </div>
      </div>

      {/* 底部版權資訊 */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-8 py-6">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © 2025 Kodea Studio. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 