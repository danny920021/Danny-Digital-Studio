import React, { useState, useEffect, useRef } from 'react';
import DannyPhoto from '../assets/images/Danny.jpg';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [titleAnimated, setTitleAnimated] = useState(false);

  const heroRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const workflowRef = useRef(null);
  const ctaRef = useRef(null);

  const sections = [heroRef, whoWeAreRef, valuesRef, teamRef, workflowRef, ctaRef];

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

  // Hero title animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white font-sans">
      {/* Hero Quote Section */}
      <section 
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Enhanced animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-misty-purple-light rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-misty-purple-dark rounded-full opacity-10 blur-2xl animate-bounce" style={{animationDuration: '4s'}}></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none z-5">
          <div className="absolute top-20 left-20 w-2 h-2 bg-misty-purple rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-misty-purple-light rounded-full animate-bounce opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-misty-purple-dark rounded-full animate-pulse opacity-80" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-misty-purple rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Quote with split animation */}
            <blockquote className="text-4xl md:text-6xl lg:text-7xl font-light text-cold-gray-dark leading-tight mb-12">
              <span className={`block transform transition-all duration-1000 ease-out ${
                titleAnimated ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 -rotate-2'
              }`}>
                讓技術，
              </span>
              <br />
              <span className={`inline-block font-medium text-misty-purple-dark transform transition-all duration-1000 ease-out ${
                titleAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`} style={{transitionDelay: '0.3s'}}>
                承載設計背後的
              </span>
              <span className={`inline-block font-bold text-misty-purple-dark transform transition-all duration-1000 ease-out ${
                titleAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-110'
              }`} style={{transitionDelay: '0.6s'}}>
                體驗價值。
              </span>
            </blockquote>
             
                         {/* Enhanced Attribution */}
            <div className={`flex items-center justify-center space-x-4 text-gray-500 transform transition-all duration-1000 ease-out ${
              titleAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: '0.9s'}}>
              <div className={`w-12 h-0.5 bg-misty-purple-dark transform transition-all duration-500 ${
                titleAnimated ? 'scale-x-100' : 'scale-x-0'
              }`} style={{transitionDelay: '1.2s'}}></div>
              <span className="text-lg font-medium animate-fade-in-up">We build the invisible systems that make user experience possible.</span>
              <div className={`w-12 h-0.5 bg-misty-purple-dark transform transition-all duration-500 ${
                titleAnimated ? 'scale-x-100' : 'scale-x-0'
              }`} style={{transitionDelay: '1.2s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30">
          <div className="animate-float-fade">
            <svg 
              className="w-10 h-10 text-gray-400" 
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
      </section>

      {/* Who We Are Section */}
      <section 
        ref={whoWeAreRef}
        className={`py-32 relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        {/* Enhanced Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-misty-purple rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-misty-purple-light rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/4 right-1/6 w-1 h-1 bg-misty-purple-dark rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          {/* Header - Centered */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-misty-purple-light text-misty-purple-dark text-sm font-medium rounded-full mb-8">
              Who we are
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-cold-gray-dark leading-tight max-w-4xl mx-auto">
              年輕的創意工作室，專注
              <span className="text-misty-purple-dark block lg:inline"> 品牌數位化</span>
            </h2>
          </div>

          {/* Content in Cards Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Story Card */}
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-misty-purple-light rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-misty-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cold-gray-dark mb-4">我們的故事</h3>
                <p className="text-gray-600 leading-relaxed">
                  我們是一群對設計充滿熱忱的年輕創作者，相信每個品牌都有其獨特的故事值得被精緻地呈現。
                  成立於 2022 年的 Kodea Studio，專精於為中小企業與新創團隊打造具有質感與目的性的品牌形象網站。
                </p>
              </div>

              {/* Philosophy Card */}
              <div className="bg-misty-purple-light rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-misty-purple-dark rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cold-gray-dark mb-4">設計哲學</h3>
                <p className="text-gray-600 leading-relaxed">
                  我們不追求花俏的視覺效果，而是透過簡潔有力的設計語言，讓使用者能夠直觀地理解品牌價值。
                  每個專案都是量身打造，因為我們深信，最好的設計來自於對品牌本質的深度理解。
                </p>
              </div>
            </div>

            {/* Mission Statement - Full Width */}
            <div className="bg-gradient-to-r from-cold-gray-dark to-misty-purple-dark rounded-3xl p-12 text-center text-white mb-16">
              <h3 className="text-3xl font-bold mb-6">我們的使命</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                從概念發想到技術實現，我們提供完整的數位品牌解決方案，
                協助企業建立有質感、有目的的數位門面，讓品牌在數位世界中發光。
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section 
        ref={valuesRef}
        className={`py-32 bg-gray-50 relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        {/* Enhanced Background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-12 w-2 h-2 bg-misty-purple rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/2 right-24 w-3 h-3 bg-misty-purple-light rounded-full opacity-40 animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-misty-purple-dark rounded-full opacity-80 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white text-misty-purple-dark text-sm font-medium rounded-full mb-6 shadow-sm">
              Our Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-cold-gray-dark mb-6">
              我們的品牌信念
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              這些核心價值指引著我們的每一個設計決策與專案執行
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "簡約而有力",
                description: "我們相信最好的設計是無形的，讓使用者專注於內容本身，而非被複雜的介面分散注意力。"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                ),
                title: "創新思維",
                description: "持續探索新的設計趨勢與技術可能性，為每個品牌找到最適合的數位表達方式。"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "用戶至上",
                description: "每個設計決策都以使用者體驗為出發點，確保網站不僅美觀，更要好用且有意義。"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "品質專注",
                description: "我們不追求數量，而是專注於每個專案的品質，確保交付的作品能夠經得起時間考驗。"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "協作夥伴",
                description: "我們將客戶視為合作夥伴，透過深度溝通與協作，共同創造出最適合的品牌數位體驗。"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "持續成長",
                description: "不斷學習新技術與設計思維，確保我們能為客戶提供最前沿的數位解決方案。"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 group transform ${
                  visibleSections.has('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{transitionDelay: `${index * 0.2}s`}}
              >
                <div className="w-16 h-16 bg-misty-purple-light rounded-2xl flex items-center justify-center text-misty-purple-dark mb-6 group-hover:bg-misty-purple-dark group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-cold-gray-dark mb-4 group-hover:text-misty-purple-dark transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className={`py-32 relative bg-gray-50 transition-all duration-1000 ease-out ${
          visibleSections.has('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white text-misty-purple-dark text-sm font-medium rounded-full mb-6 shadow-sm">
              Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-cold-gray-dark mb-6">
              我們的團隊
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              用心打造每個專案的創意夥伴
            </p>
          </div>
          
          {/* Full-Photo Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Danny",
                role: "創意總監",
                bio: "擁有 8+ 年品牌設計經驗，專精於品牌識別與視覺系統建立，致力於將創意轉化為有意義的設計解決方案。",
                education: "實踐大學 媒體傳達設計學系",
                photo: DannyPhoto,
                hasPhoto: true
              },
              {
                name: "Alex",
                role: "技術總監", 
                bio: "前端與後端技術專家，致力於將設計完美轉化為數位體驗，擅長現代 web 技術與系統架構設計。",
                education: "台科大 資訊工程系",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                hasPhoto: true
              },
              {
                name: "Sarah",
                role: "體驗設計師",
                bio: "專注於使用者研究與互動設計，確保每個觸點都有意義，以人為本的設計思維創造直觀的使用體驗。",
                education: "台藝大 多媒體動畫藝術學系",
                photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                hasPhoto: true
              },
              {
                name: "Mike",
                role: "專案經理",
                bio: "負責專案規劃與客戶溝通，確保每個專案都能按時高品質交付，是團隊與客戶之間的重要橋樑。",
                education: "政大 企業管理學系",
                photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                hasPhoto: true
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer h-80"
              >
                {/* Full Photo Background */}
                <div className="absolute inset-0">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Default State - Name & Role at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>

                {/* Hover State - Detailed Info Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-center">
                  <div className="bg-white mx-3 my-6 p-6 rounded-2xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-cold-gray-dark mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-misty-purple-dark mb-4">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {member.bio}
                      </p>
                      <p className="text-xs text-gray-500">
                        {member.education}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section 
        ref={workflowRef}
        className={`py-32 bg-gray-50 transition-all duration-1000 ease-out ${
          visibleSections.has('section-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white text-misty-purple-dark text-sm font-medium rounded-full mb-6 shadow-sm">
              How we work
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-cold-gray-dark mb-6">
              我們的合作流程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              透明且有系統的工作流程，確保每個專案都能順利達成目標
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "深度探索",
                  subtitle: "Discovery & Strategy",
                  description: "了解品牌故事、目標受眾與商業需求，制定專案策略與視覺方向",
                  deliverables: ["品牌分析報告", "目標受眾研究", "競品分析", "專案策略"]
                },
                {
                  step: "02", 
                  title: "概念設計",
                  subtitle: "Concept & Design",
                  description: "根據策略發展視覺概念，設計網站架構與使用者介面",
                  deliverables: ["網站架構圖", "視覺風格指南", "頁面設計稿", "互動原型"]
                },
                {
                  step: "03",
                  title: "技術開發",
                  subtitle: "Development & Build",
                  description: "將設計轉化為功能完整的網站，確保性能與相容性",
                  deliverables: ["響應式網站", "內容管理系統", "性能優化", "跨瀏覽器測試"]
                },
                {
                  step: "04",
                  title: "測試上線",
                  subtitle: "Testing & Launch",
                  description: "全面測試網站功能，協助客戶上線並提供後續支援",
                  deliverables: ["功能測試報告", "網站上線", "操作教學", "維護文件"]
                }
              ].map((phase, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-12 transform transition-all duration-700 ease-out ${
                    visibleSections.has('section-4') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
                  }`}
                  style={{transitionDelay: `${index * 0.3}s`}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-misty-purple-dark text-white rounded-2xl flex items-center justify-center text-2xl font-bold hover:scale-110 transition-transform duration-300">
                      {phase.step}
                    </div>
                  </div>
                  
                  <div className="flex-grow bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-cold-gray-dark mb-1 group-hover:text-misty-purple-dark transition-colors duration-300">{phase.title}</h3>
                      <p className="text-misty-purple-dark font-medium">{phase.subtitle}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{phase.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((item, itemIndex) => (
                        <span key={itemIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className={`py-32 relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cold-gray-dark via-black to-misty-purple-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-misty-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              準備好讓你的品牌
              <br />
              <span className="text-misty-purple">脫穎而出</span>了嗎？
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              不論你是正在起步的新創，還是希望重新定義品牌形象的企業，
              我們都很期待與你一起創造出色的數位體驗。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-white text-misty-purple-dark font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                開始合作討論
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-misty-purple-dark transition-all duration-300">
                查看更多作品
              </button>
            </div>
            
            <div className="mt-16 flex items-center justify-center space-x-8 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">成功專案</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm">快速回應</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">客戶滿意</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 