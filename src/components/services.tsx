import React from 'react';
import { FiCode, FiSmartphone, FiServer, FiUsers, FiTrendingUp, FiSettings } from 'react-icons/fi';

const services = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: '網頁開發',
    description: '使用現代技術棧打造響應式、高效能的網站，從簡單的形象網站到複雜的 Web 應用程式。'
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: 'App 開發',
    description: '基於 Flutter 框架開發跨平台應用程式，一次開發同時支援 iOS 和 Android 平台。'
  },
  {
    icon: <FiServer className="w-8 h-8" />,
    title: 'AI 模型整合',
    description: '將先進的 AI 模型整合到您的應用中，提供智能化功能與用戶體驗。'
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: '平台型專案開發',
    description: '開發可擴展的平台解決方案，支援多用戶、多租戶架構與完整的管理系統。'
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: 'UI/UX 設計',
    description: '設計直覺易用的使用者介面，注重用戶體驗與視覺美感的完美平衡。'
  },
  {
    icon: <FiSettings className="w-8 h-8" />,
    title: '技術顧問',
    description: '提供技術架構規劃、代碼審查、性能優化等專業諮詢服務。'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
            我的服務項目
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
            提供全方位的技術開發服務，從前端到後端，從設計到部署
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-blue-200 opacity-0 animate-[slideInUp_0.8s_ease-out_forwards] hover:transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* 懸停時的裝飾元素 */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 