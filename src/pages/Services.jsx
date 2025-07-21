import React, { useState, useEffect } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor"/>
          <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor"/>
          <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"/>
          <circle cx="6.5" cy="15.5" r="1.5" fill="currentColor"/>
          <circle cx="10.5" cy="17.5" r="1.5" fill="currentColor"/>
          <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "網站設計",
      description: "現代化設計語言與實用導向的UI/UX，打造兼具品牌感與效能的網站。從架構規劃到前後端開發，建立穩定且能持續運營的專屬品牌網站。"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="2" width="12" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 6H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="14" r="1" fill="currentColor"/>
        </svg>
      ),
      title: "應用程式開發",
      description: "跨平台 App 與 Web 系統開發，支援完整業務邏輯與功能串接。注重使用者體驗與後台效能，滿足企業客製需求與產品化目標。"
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 20V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4.22 4.22L6.34 6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17.66 17.66L19.78 19.78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M1 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20 12H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6.34 17.66L4.22 19.78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M19.78 4.22L17.66 6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "客製系統開發",
      description: "依據業務流程打造專屬功能模組，強化內部營運效率。整合會員、訂單、庫存等系統，支援資料串接與長期維護。"
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3H19C20.1046 3 21 3.89543 21 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21H19C20.1046 21 21 20.1046 21 19V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21H5C3.89543 21 3 20.1046 3 19V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 1V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 21V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M1 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M21 12H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "系統整合服務",
      description: "協助企業整合現有系統與新建模組，實現數位流程自動化。涵蓋資料流整合、API串接、後台建構，提升營運效率與資料即時性。"
    }
  ];

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Services Section */}
      <section className="pt-20 pb-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Introduction */}
            <div className="space-y-8">
              {/* Small Tag */}
              <div className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                我們的服務
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cold-gray-dark leading-tight">
                為您的品牌提供
                <span className="block text-misty-purple-dark text-5xl sm:text-6xl lg:text-7xl">
                  全方位數位解決方案
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                從策略到設計，打造品牌的數位存在。
              </p>
            </div>

            {/* Right Column - Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-misty-purple-light rounded-full flex items-center justify-center mb-4 text-misty-purple-dark">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-cold-gray-dark mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="inline-flex items-center text-misty-purple-dark font-semibold hover:text-misty-purple transition-colors duration-300 group">
                    了解更多
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 