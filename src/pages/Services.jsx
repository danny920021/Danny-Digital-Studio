import React, { useState, useEffect, useRef, useMemo } from 'react';

const Services = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  const coreServicesRef = useRef(null);
  const specialtiesRef = useRef(null);
  const processRef = useRef(null);
  const whyChooseRef = useRef(null);
  const ctaRef = useRef(null);

  const sections = useMemo(() => [coreServicesRef, specialtiesRef, processRef, whyChooseRef, ctaRef], []);

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

  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-cold-gray-dark via-black to-misty-purple-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              專業
              <span className="block text-misty-purple">服務</span>
            </h1>
                         <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
               無論是初創品牌，還是成長期企業，我們都能提供量身打造的數位解決方案
             </p>
          </div>
              </div>
      </section>

      {/* Core Services Section */}
             <section 
         ref={coreServicesRef}
         className={`py-24 bg-white transition-all duration-1000 ease-out ${
           visibleSections.has('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
         }`}
       >
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-misty-purple-light text-misty-purple-dark text-sm font-medium rounded-full mb-6">
              核心服務
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-cold-gray-dark leading-tight mb-6">
              三大服務領域
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們擅長打造高識別度的品牌網站，也具備完整的技術能力，處理中大型專案、整合系統與 AI／App 延伸需求
            </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                         {[
               {
                 number: "01",
                 category: "核心服務",
                 title: "品牌網站設計",
                 subtitle: "Brand Website Design",
                 description: "我們是視覺與體驗並重的專家，專精於打造高識別度的品牌形象網站。從品牌策略到視覺實現，讓您的企業在數位世界中脫穎而出。",
                 features: ["品牌視覺識別", "使用者體驗設計", "響應式開發", "SEO 優化", "品牌一致性"],
                 icon: (
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h12a2 2 0 002-2v-4a2 2 0 00-2-2H7m0-5h12a2 2 0 002-2V5a2 2 0 00-2-2H7m5 5v6" />
                   </svg>
                 )
               },
               {
                 number: "02", 
                 category: "整合應用",
                 title: "數位系統建置 & 開發",
                 subtitle: "Digital System Development",
                 description: "具備處理中大型專案的實戰開發能力，包含電商平台、企業系統、客製化 CMS 等複雜數位解決方案的完整建置與整合。",
                 features: ["電商網站建置", "企業系統開發", "客製化 CMS", "中台系統整合", "資料庫設計", "API 開發"],
                 icon: (
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                   </svg>
                 )
               },
               {
                 number: "03",
                 category: "技術延伸",
                 title: "AI 導入與 App 開發",
                 subtitle: "AI Integration & App Development", 
                 description: "根據需求提供 AI 自動化整合與移動端應用開發。我們具備深厚的技術能量，能將最新科技融入您的業務流程中。",
                 features: ["AI 流程自動化", "智能客服系統", "iOS/Android 開發", "跨平台 App", "機器學習整合", "API 系統串接"],
                 icon: (
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                   </svg>
                 )
               }
             ].map((service, index) => (
              <div 
                key={index}
                               className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 transform ${
                 visibleSections.has('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
               }`}
                style={{transitionDelay: `${index * 0.2}s`}}
              >
                                 {/* Number & Icon */}
                 <div className="flex items-center justify-between mb-6">
                   <span className="text-6xl font-bold text-gray-100 group-hover:text-misty-purple-light transition-colors duration-300">
                     {service.number}
                   </span>
                   <div className="w-16 h-16 bg-misty-purple-light rounded-2xl flex items-center justify-center text-misty-purple-dark transition-all duration-250 ease-out group-hover:bg-misty-purple-dark group-hover:text-white group-hover:scale-105">
                    {service.icon}
                   </div>
                 </div>

                 {/* Category */}
                 <div className="text-xs font-bold text-misty-purple-dark uppercase tracking-wider mb-3 opacity-70">
                   {service.category}
                  </div>
                  
                  {/* Title */}
                 <h3 className="text-2xl font-bold text-cold-gray-dark mb-2 group-hover:text-misty-purple-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                 <p className="text-sm font-medium text-misty-purple-dark mb-4 opacity-80">
                   {service.subtitle}
                 </p>
                  
                  {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-misty-purple-dark rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="text-misty-purple-dark font-medium text-sm hover:text-misty-purple transition-colors duration-300 flex items-center group">
                    了解更多
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
             <section 
         ref={specialtiesRef}
         className={`py-24 bg-gray-50 transition-all duration-1000 ease-out ${
           visibleSections.has('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
         }`}
       >
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-white text-misty-purple-dark text-sm font-medium rounded-full mb-6 shadow-sm">
                專業特色
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-cold-gray-dark mb-6">
                為什麼選擇
                <br />
                <span className="text-misty-purple-dark">Kodea Studio？</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                我們深度理解中小企業的數位轉型需求，提供兼具創意與實用性的解決方案。
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "設計思維驅動",
                    description: "我們從使用者出發，設計不只講究視覺美感，更強調品牌策略與使用邏輯，讓每個頁面都能傳達價值。"
                  },
                  {
                    title: "技術深度整合", 
                    description: "	結合前端互動與後端整合，網站具備良好的維護性與擴充性，能因應日後需求變動，不造成額外重工。"
                  },
                  {
                    title: "一站式服務",
                    description: "	提供從品牌規劃、視覺設計到網站開發的完整服務，節省溝通與管理成本，讓流程簡單、高效。"
                  },
                  {
                    title: "持續優化支援",
                    description: "專案完成後仍提供優化建議與技術協助，確保網站穩定運作、價值長期累積，而非一次性合作。"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-misty-purple-dark rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-cold-gray-dark mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                </div>
              ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* Background Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-misty-purple-light rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-misty-purple-dark rounded-full opacity-10"></div>
                
                {/* Main Image */}
                <div className="relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Kodea Studio 團隊協作" 
                    className="w-full h-auto rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  {/* Optional Overlay for branding */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
       <section 
         ref={processRef}
         className={`py-24 bg-white transition-all duration-1000 ease-out ${
           visibleSections.has('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
         }`}
       >
         <div className="container mx-auto px-8">
           <div className="text-center mb-20">
             <div className="inline-block px-4 py-2 bg-misty-purple-light text-misty-purple-dark text-sm font-medium rounded-full mb-6">
               合作流程
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold text-cold-gray-dark mb-6">
               我們的合作流程
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               透明且有系統的工作流程，確保每個專案都能順利達成目標
             </p>
           </div>
           
           {/* Workflow Grid Layout - Sequential Order */}
           <div className="max-w-7xl mx-auto">
             {/* Top Row: 1 -> 2 -> 3 -> 4 */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
               {[
                 {
                   step: "1",
                   title: "需求訪談與網站規劃",
                   subtitle: "Discovery & Strategy",
                   description: "與客戶討論網站架構與相關需求調查",
                   icon: (
                     <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                     </svg>
                   )
                 },
                 {
                   step: "2",
                   title: "報價與簽約",
                   subtitle: "Proposal & Contract",
                   description: "提供專案依需求求調查產出之網站規劃建議書",
                   icon: (
                     <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                     </svg>
                   )
                 },
                 {
                   step: "3",
                   title: "UI/UX與設計編排",
                   subtitle: "Concept & Design", 
                   description: "透過規格規劃與嚴謹的設計流程，確保品牌形象一致性",
                   icon: (
                     <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h12a2 2 0 002-2v-4a2 2 0 00-2-2H7m0-5h12a2 2 0 002-2V5a2 2 0 00-2-2H7m5 5v6" />
                     </svg>
                   )
                 },
                 {
                   step: "4",
                   title: "網站建置",
                   subtitle: "Development & Build",
                   description: "進行網頁切版、系統建置與相關功能程式撰寫",
                   icon: (
                     <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                     </svg>
                   )
                 }
               ].map((phase, index) => (
                 <div 
                   key={index}
                   className={`relative transform transition-all duration-700 ease-out ${
                     visibleSections.has('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                   }`}
                   style={{transitionDelay: `${index * 0.2}s`}}
                 >
                   {/* Connection Line (except last item) */}
                   {index < 3 && (
                     <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-misty-purple-dark to-misty-purple-light z-10"></div>
                   )}
                   
                   {/* Card */}
                   <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-150 ease-out group text-center h-full border border-gray-100">
                     {/* Icon */}
                     <div className="w-20 h-20 bg-misty-purple-light text-misty-purple-dark rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-250 ease-out group-hover:bg-misty-purple-dark group-hover:text-white group-hover:scale-105">
                       {phase.icon}
                     </div>
                     
                     {/* Step Number */}
                     <div className="text-3xl font-bold text-misty-purple-dark mb-2">{phase.step}.</div>
                     
                     {/* Title */}
                     <h3 className="text-lg font-bold text-cold-gray-dark mb-2 group-hover:text-misty-purple-dark transition-colors duration-250 ease-out">
                       {phase.title}
                     </h3>
                     
                     {/* Subtitle */}
                     <p className="text-xs text-misty-purple-dark font-medium mb-3 opacity-80">
                       {phase.subtitle}
                     </p>
                     
                     {/* Description */}
                     <p className="text-sm text-gray-600 leading-relaxed">
                       {phase.description}
                     </p>
                   </div>
                 </div>
               ))}
             </div>

             {/* Bottom Row: 5 -> 6 -> 7 */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               {[
                 {
                   step: "5",
                   title: "DEMO測試",
                   subtitle: "Testing & QA",
                   description: "網站於DEMO主機運行測試，進行上傳、校稿與效障排除",
                   icon: (
                     <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                   )
                 },
                 {
                   step: "6", 
                   title: "教育訓練",
                   subtitle: "Training & Support",
                   description: "提供專案進行網站後台操作管理教育訓練",
                   icon: (
                     <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                     </svg>
                   )
                 },
                 {
                   step: "7",
                   title: "正式上線",
                   subtitle: "Launch & Support",
                   description: "網站正式上線營運，增加品牌曝光度！",
                   icon: (
                     <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                   )
                 }
               ].map((phase, index) => (
                 <div 
                   key={index}
                   className={`relative transform transition-all duration-700 ease-out ${
                     visibleSections.has('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                   }`}
                   style={{transitionDelay: `${(index + 4) * 0.2}s`}}
                 >
                   {/* Connection Line (except last item) */}
                   {index < 2 && (
                     <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-misty-purple-light to-misty-purple-dark z-10"></div>
                   )}
                   
                   {/* Card */}
                   <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-150 ease-out group text-center h-full border border-gray-100">
                     {/* Icon */}
                     <div className="w-20 h-20 bg-misty-purple-light text-misty-purple-dark rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-250 ease-out group-hover:bg-misty-purple-dark group-hover:text-white group-hover:scale-105">
                       {phase.icon}
                     </div>
                     
                     {/* Step Number */}
                     <div className="text-3xl font-bold text-misty-purple-dark mb-2">{phase.step}.</div>
                     
                     {/* Title */}
                     <h3 className="text-lg font-bold text-cold-gray-dark mb-2 group-hover:text-misty-purple-dark transition-colors duration-250 ease-out">
                       {phase.title}
                     </h3>
                     
                     {/* Subtitle */}
                     <p className="text-xs text-misty-purple-dark font-medium mb-3 opacity-80">
                       {phase.subtitle}
                     </p>
                     
                     {/* Description */}
                     <p className="text-sm text-gray-600 leading-relaxed">
                       {phase.description}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </section>

      {/* Why Choose Us Section */}
             <section 
         ref={whyChooseRef}
         className={`py-24 bg-gray-50 transition-all duration-1000 ease-out ${
           visibleSections.has('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
         }`}
       >
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white text-misty-purple-dark text-sm font-medium rounded-full mb-6 shadow-sm">
              客戶價值
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-cold-gray-dark mb-6">
              我們的承諾
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              超越客戶期待，成為您值得信賴的數位夥伴
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "按時交付",
                description: "嚴格的專案管理確保如期完成",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                metric: "100%"
              },
              {
                title: "品質保證",
                description: "每個細節都經過反覆測試驗證",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                metric: "A+"
              },
              {
                title: "持續支援",
                description: "專案完成後提供長期技術支援",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                metric: "24/7"
              },
              {
                title: "合約保障",
                description: "所有合作皆簽訂正式合約，確保雙方權益",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                metric: "100%"
              }
            ].map((promise, index) => (
              <div 
                key={index}
                                 className={`bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group transform ${
                   visibleSections.has('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                 }`}
                style={{transitionDelay: `${index * 0.15}s`}}
              >
                <div className="text-misty-purple-dark mb-4 flex justify-center">{promise.icon}</div>
                <div className="text-3xl font-bold text-misty-purple-dark mb-2">{promise.metric}</div>
                <h3 className="font-bold text-cold-gray-dark mb-2">{promise.title}</h3>
                <p className="text-sm text-gray-600">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-misty-purple-light text-misty-purple-dark text-sm font-medium rounded-full mb-6">
                合作原則
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-cold-gray-dark leading-tight mb-6">
                我們很適合
                <span className="block text-misty-purple-dark">這樣的你</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                誠實面對合作期待，找到最適合的合作夥伴關係
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 適合的客戶 */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-cold-gray-dark">我們很適合</h3>
                </div>
                
                {[
                  "重視品牌長期經營，願意溝通交流",
                  "需要的不只是做完，而是做對", 
                  "重視使用者體驗，願意信任專業建議",
                  "理解設計與開發需要時間醞釀"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-green-200 transition-colors duration-200">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-cold-gray-dark transition-colors duration-200">{item}</p>
                  </div>
                ))}
              </div>

              {/* 不適合的客戶 */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-cold-gray-dark">可能不適合</h3>
                </div>
                
                {[
                  "想要一次到位、不經過測試調整",
                  "只想拼價格，不在意品質與結構",
                  "希望快速完成，不重視細節打磨", 
                  "期待模板化解決方案"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-red-200 transition-colors duration-200">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-cold-gray-dark transition-colors duration-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 結語 */}
            <div className="mt-16 text-center">
              <div className="bg-misty-purple-light/20 rounded-2xl p-8 border border-misty-purple-light">
                <p className="text-lg text-cold-gray-dark leading-relaxed">
                  我們相信，<span className="font-semibold text-misty-purple-dark">誠實的溝通</span>是好作品的基礎。<br/>
                  如果你也這麼認為，我們會是很好的合作夥伴。
                </p>
              </div>
            </div>
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
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cold-gray-dark via-black to-misty-purple-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-misty-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        </div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              準備開始您的
              <br />
              <span className="text-misty-purple">數位轉型之旅？</span>
          </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              讓我們一起為您的企業打造具有競爭力的數位解決方案。立即聯繫我們，開始專屬的創意之旅。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-misty-purple-dark font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                免費專案諮詢
            </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-misty-purple-dark transition-all duration-300">
                查看服務方案
            </button>
            </div>

            {/* Contact Info */}
            <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@kodea-studio.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>週一至週五 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 