import React, { useState, useEffect, useRef } from 'react';

// WorkCard Component
const WorkCard = ({ work, size = 'medium' }) => {
  const sizeClasses = {
    large: 'h-64',
    small: 'h-64'  // 小的高度跟大的一樣
  };

  const textClasses = {
    large: 'text-2xl',
    small: 'text-lg'
  };

  const paddingClasses = {
    large: 'p-8',
    small: 'p-4'
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className={`relative overflow-hidden ${sizeClasses[size]}`}>
        <img 
          src={work.image} 
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="text-white">
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                {work.category}
              </div>
              <h3 className={`font-bold mb-4 ${textClasses[size]}`}>
                {work.title}
              </h3>
              <a 
                href={work.link}
                className="inline-flex items-center text-white font-medium hover:text-misty-purple-light transition-colors duration-300"
              >
                查看案例
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content (visible on mobile) */}
      <div className={`${paddingClasses[size]} md:hidden`}>
        <div className="inline-block px-3 py-1 bg-misty-purple-light text-misty-purple-dark text-xs font-medium rounded-full mb-3">
          {work.category}
        </div>
        <h3 className={`font-bold text-cold-gray-dark mb-2 ${textClasses[size]}`}>
          {work.title}
        </h3>
        <a 
          href={work.link}
          className="inline-flex items-center text-misty-purple-dark font-medium hover:text-misty-purple transition-colors duration-300"
        >
          查看案例
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Home = ({ footerRef }) => {
  const [counts, setCounts] = useState({ years: 0, projects: 0, satisfaction: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [heroRef, aboutRef, servicesRef, worksRef, contactRef];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    // 觀察所有 section
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `section-${index}`;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // 監聽滾動，當About區塊進入視窗時開始動畫
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 簡單的數字動畫 - 實務上最常用的方法
            const duration = 2000; // 2秒完成
            const steps = 60; // 60步
            const stepDuration = duration / steps;
            
            let step = 0;
            
            const animate = () => {
              step++;
              const progress = step / steps;
              
              setCounts({
                years: Math.round(5 * progress),
                projects: Math.round(40 * progress),
                satisfaction: Math.round(98 * progress)
              });
              
              if (step < steps) {
                setTimeout(animate, stepDuration);
              }
            };
            
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: window.innerWidth <= 768 ? 0.3 : 0.7,
        rootMargin: window.innerWidth <= 768 ? '0px 0px -100px 0px' : '0px'
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className={`relative h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cold-gray-dark via-black to-misty-purple-dark opacity-95 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none z-15">
          <div className="absolute top-20 left-20 w-2 h-2 bg-misty-purple rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-misty-purple-light rounded-full animate-bounce opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-80" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-misty-purple rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Main Content - Centered */}
        <div className="container mx-auto px-8 relative z-20 text-center">
          {/* Enhanced Super Large Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-8 tracking-tight">
            <span className={`block transform transition-all duration-1000 ease-out ${
              visibleSections.has('section-0') ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 -rotate-3'
            }`}>
              打造
            </span>
            <span className={`block text-misty-purple transform transition-all duration-1000 ease-out ${
              visibleSections.has('section-0') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
            }`} style={{transitionDelay: '0.3s'}}>
              讓人記住
            </span>
            <span className={`block transform transition-all duration-1000 ease-out ${
              visibleSections.has('section-0') ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-2'
            }`} style={{transitionDelay: '0.6s'}}>
              的品牌
            </span>
          </h1>
          
          {/* Enhanced Subtitle with Creative Typography */}
          <p className={`text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-normal tracking-wide transform transition-all duration-1000 ease-out ${
            visibleSections.has('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{transitionDelay: '0.9s'}}>
            我們專做<span className="text-misty-purple font-semibold">形象網站</span>，從設計、技術到細節，<br />
            協助企業建立有質感、有目的的<span className="text-misty-purple font-semibold">數位門面</span>
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30">
          <div className="animate-float-fade">
            <svg 
              className="w-10 h-10 text-white/80" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 13l5 5 5-5"
              />
            </svg>
          </div>
        </div>
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-20"></div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef} 
        className={`py-32 bg-white relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Floating Elements Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-8 w-4 h-4 bg-misty-purple-light rounded-full animate-bounce opacity-80" style={{animationDelay: '0s', animationDuration: '2.5s', transform: 'translateY(-8px)'}}></div>
          <div className="absolute top-1/3 right-12 w-4 h-4 bg-misty-purple-light rounded-full animate-bounce opacity-70" style={{animationDelay: '1s', animationDuration: '3s', transform: 'translateY(-8px)'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-misty-purple-light rounded-full animate-bounce opacity-75" style={{animationDelay: '2s', animationDuration: '2.8s', transform: 'translateY(-8px)'}}></div>
          <div className="absolute bottom-24 right-1/4 w-4 h-4 bg-misty-purple-light rounded-full animate-bounce opacity-65" style={{animationDelay: '0.5s', animationDuration: '3.2s', transform: 'translateY(-8px)'}}></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-misty-purple-light rounded-full animate-bounce opacity-60" style={{animationDelay: '1.5s', animationDuration: '2.6s', transform: 'translateY(-8px)'}}></div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              {/* Enhanced Animated Label */}
              <div className="inline-block px-4 py-1 bg-misty-purple-light text-misty-purple-dark text-sm font-medium mb-4 rounded-full border border-misty-purple-light/50 hover:border-misty-purple/50 transition-all duration-300 hover:bg-misty-purple hover:text-white hover:scale-105 hover:shadow-md">
                關於 Kodea Studio
              </div>
              
              {/* Enhanced Animated Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cold-gray-dark mb-6 leading-tight">
                融合設計美學與<br />
                <span className="text-misty-purple-dark text-4xl sm:text-5xl lg:text-6xl relative">
                  科技創新的品牌夥伴
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-misty-purple-dark group-hover:w-full transition-all duration-700"></div>
                </span>
              </h2>
              
              {/* Enhanced Animated Paragraphs */}
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg hover:text-cold-gray-dark/80 transition-colors duration-300 cursor-default">
                  Kodea Studio 成立於 2022 年，是一間專做形象網站的設計與技術工作室。<br />
                  我們擅長用簡潔、有節奏的方式，呈現企業想說的事，並在技術上完整落地。
                </p>
                <p className="text-gray-600 leading-relaxed text-lg hover:text-cold-gray-dark/80 transition-colors duration-300 cursor-default">
                  我們的合作對象多為中小企業與新創團隊，重視品牌感、也重視使用者體驗。<br />
                  我們的網站設計風格不浮誇、不流於模板，而是根據品牌本身建立視覺語言。
                </p>
              </div>
              
              {/* Statistical Metrics with Animation */}
              <div className="flex gap-20" style={{ marginTop: '4rem' }}>
                <div className="group hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-misty-purple-dark mb-3 group-hover:scale-110 transition-transform duration-300">{counts.years}+</div>
                  <div className="text-cold-gray-medium text-base">年設計經驗</div>
                </div>
                <div className="group hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-misty-purple-dark mb-3 group-hover:scale-110 transition-transform duration-300">{counts.projects}+</div>
                  <div className="text-cold-gray-medium text-base">成功案例</div>
                </div>
                <div className="group hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-misty-purple-dark mb-3 group-hover:scale-110 transition-transform duration-300">{counts.satisfaction}%</div>
                  <div className="text-cold-gray-medium text-base">客戶滿意度</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-misty-purple-light rounded-full z-0"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-cold-gray-light rounded-full z-0"></div>
                <div className="relative z-10 rounded-xl overflow-hidden border-2 border-gray-300 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                  <img 
                    className="w-full h-auto" 
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5808f3f0fb-989f4091efb379249fe9.png" 
                    alt="minimalist modern office space with designers working on computers, cool gray and misty purple color scheme, creative studio environment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef} 
        className={`py-32 bg-white relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* 原本的 Services 內容 */}
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Introduction */}
            <div className="space-y-6">
              {/* Small Tag */}
              <div className="inline-block px-4 py-1 bg-misty-purple-light text-misty-purple-dark text-sm font-medium rounded-full">
                我們的服務
              </div>
              
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cold-gray-dark leading-tight">
                為您的品牌提供
                <span className="block text-misty-purple-dark text-4xl sm:text-5xl lg:text-6xl">
                  全方位數位解決方案
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                從策略到設計，打造品牌的數位存在。
              </p>
            </div>

            {/* Right Column - Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
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
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
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

      {/* Works Section */}
      <section 
        ref={worksRef} 
        className={`py-32 bg-white relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-20 pt-20">
            <div className="inline-block px-4 py-1 bg-misty-purple-light text-misty-purple-dark text-sm font-medium mb-4 rounded-full">
              精選作品
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cold-gray-dark mb-4">
              精選作品
            </h2>
            <p className="text-cold-gray-medium text-lg tracking-wider uppercase">
              SELECTED WORKS
            </p>
          </div>
          
          {/* Masonry Grid - 4 Works */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Work 1 - Large (Top Left) */}
              <div className="md:col-span-8">
                <WorkCard
                  work={{
                    title: "LUXE 香氛品牌官網",
                    category: "品牌官網設計",
                    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/12020865f7-4be5347d113f5acbd0a8.png",
                    link: "#"
                  }}
                  size="large"
                />
              </div>
              
              {/* Work 2 - Small (Top Right) */}
              <div className="md:col-span-4">
                <WorkCard
                  work={{
                    title: "Tempo 生產力應用",
                    category: "App 開發 / UI 設計",
                    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/fef394be14-9fcaa16c4e6a3812b3f7.png",
                    link: "#"
                  }}
                  size="small"
                />
              </div>
              
              {/* Work 3 - Small (Bottom Left) */}
              <div className="md:col-span-4">
                <WorkCard
                  work={{
                    title: "Serene 電商平台",
                    category: "電商網站 / 品牌策略",
                    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/241bbad627-fe7d41914d0323e0b9ed.png",
                    link: "#"
                  }}
                  size="small"
                />
              </div>
              
              {/* Work 4 - Large (Bottom Right) */}
              <div className="md:col-span-8">
                <WorkCard
                  work={{
                    title: "Echo 創意工作室",
                    category: "創意網站設計",
                    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    link: "#"
                  }}
                  size="large"
                />
              </div>
            </div>
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-16">
            <a 
              href="#"
              className="inline-flex items-center px-8 py-4 bg-misty-purple text-white rounded-full font-medium hover:bg-misty-purple-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              查看更多作品
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef} 
        className={`py-32 bg-gradient-to-r from-misty-purple to-misty-purple-dark relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">準備好開始您的專案了嗎？</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            讓我們一起討論您的需求，為您的品牌打造專屬的數位解決方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-misty-purple-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              立即諮詢
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-misty-purple-dark transition-colors duration-300">
              查看作品
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 