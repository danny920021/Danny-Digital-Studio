import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DannyPhoto from '../assets/images/Danny.jpg';
import BrucePhoto from '../assets/images/Bruce.jpg';
import JustinPhoto from '../assets/images/Justin.jpg';
import TimPhoto from '../assets/images/Tim.jpg';
import EricPhoto from '../assets/images/Eric.jpg';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [titleAnimated, setTitleAnimated] = useState(false);

  const heroRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);

  const sections = [heroRef, whoWeAreRef, teamRef, valuesRef, ctaRef];

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
  }, [sections]);

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
        className={`py-24 relative overflow-hidden transition-all duration-1000 ease-out ${
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
              專業數位品牌工作室，專注
              <span className="text-misty-purple-dark block lg:inline"> 品牌形象網站設計</span>
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
                  我們是一群深耕數位品牌領域的專業設計師與開發者，相信優質的品牌網站能為企業帶來實質價值。
                  成立於 2025 年的 Kodea Studio，專精於為中小企業打造高品質的品牌形象網站，並提供 AI 技術整合與應用程式開發服務。
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
                  我們堅持以使用者體驗為核心，運用現代化的設計理念與前瞻技術，創造既美觀又實用的數位解決方案。
                  每個專案都經過深度策略分析，確保設計不僅提升品牌形象，更能有效達成商業目標。
                </p>
              </div>
            </div>

            {/* Mission Statement - Full Width */}
            <div className="bg-gradient-to-r from-cold-gray-dark to-misty-purple-dark rounded-3xl p-12 text-center text-white mb-16">
              <h3 className="text-3xl font-bold mb-6">我們的使命</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                從品牌策略規劃到技術實現，我們提供一站式的數位品牌服務，
                協助中小企業建立專業、高效的線上品牌形象，在競爭激烈的數位市場中脫穎而出。
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className={`py-20 relative bg-gray-50 transition-all duration-1000 ease-out ${
          visibleSections.has('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
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
              用心打造每個專案的夥伴
            </p>
          </div>
          
          {/* Full-Photo Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "Danny",
                role: "創辦人 / 全端 / PM ",
                bio: "結合技術實力與商業思維，擅長打造具品牌深度的數位產品，從策略規劃到實作皆可上手。",
                education: "雪梨科大 人工智慧學系 碩士",
                photo: DannyPhoto,
                hasPhoto: true
              },
              {
                name: "Bruce",
                role: "前端工程師", 
                bio: "擅長將設計語言轉換為前端介面，具備良好系統思維與開發邏輯，致力於打造兼具效能與體驗的數位產品。",
                education: "世新大學 資訊管理學系 碩士",
                photo: BrucePhoto,
                hasPhoto: true
              },
              {
                name: "Justin",
                role: "後端工程師",
                bio: "專注於系統架構設計與資料流程優化，擅長 API 串接與資料庫管理，致力於打造穩定、安全、可擴展的後端服務。",
                education: "世新大學 資訊管理學系 碩士",
                photo: JustinPhoto,
                hasPhoto: true
              },
              {
                  name: "Tim",
                  role: "UI/UX Designer",
                  bio: "致力於創造直覺且有美感的數位體驗，擅長使用者研究、介面設計與設計系統規劃，將使用者需求轉化為具體可用的產品。",
                  education: "世新大學 資訊管理學系 碩士",
                  photo: TimPhoto,
                  hasPhoto: true
              },
              {
                  name: "Eric",
                  role: "QA 測試工程師",
                  bio: "擅長撰寫測試案例與流程管理，具備細膩邏輯與跨部門溝通能力，致力於提升產品穩定性與用戶體驗品質。",
                  education: "世新大學 資訊管理學系 碩士",
                  photo: EricPhoto,
                  hasPhoto: true
              }
              
            ].map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out md:hover:scale-105 md:hover:-translate-y-2 md:cursor-pointer h-80"
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

                {/* Default State - Name & Role at Bottom (always visible on mobile) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>

                {/* Hover State - Full Screen Overlay (desktop only) */}
                <div className="hidden md:flex absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex-col justify-center items-center p-6">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <h3 className="text-2xl font-bold mb-3">
                      {member.name}
                    </h3>
                    <p className="text-lg font-medium text-misty-purple-light mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed mb-4 max-w-xs">
                      {member.bio}
                    </p>
                    <p className="text-xs opacity-80">
                      {member.education}
                    </p>
                  </div>
                </div>

                {/* Mobile Info Panel - Always visible on mobile */}
                <div className="md:hidden absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm p-4 rounded-b-2xl">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-cold-gray-dark mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-misty-purple-dark mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {member.education}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section 
        ref={valuesRef}
        className={`py-24 bg-gray-50 relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
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
                className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-150 ease-out group transform ${
                  visibleSections.has('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  transition: 'box-shadow 0.15s ease-out, opacity 1s ease-out, transform 1s ease-out'
                }}
              >
                <div className="w-16 h-16 bg-misty-purple-light rounded-2xl flex items-center justify-center text-misty-purple-dark mb-6 transition-all duration-250 ease-out group-hover:bg-misty-purple-dark group-hover:text-white group-hover:scale-105">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-cold-gray-dark mb-4 group-hover:text-misty-purple-dark transition-colors duration-250 ease-out">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className={`py-24 relative overflow-hidden transition-all duration-1000 ease-out ${
          visibleSections.has('section-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
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
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-misty-purple-dark font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
              >
                開始合作討論
              </Link>
              <Link 
                to="/work"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-misty-purple-dark transition-all duration-300 text-center"
              >
                查看更多作品
              </Link>
            </div>
            
            <div className="mt-16 flex items-center justify-center space-x-8 text-white/60">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 