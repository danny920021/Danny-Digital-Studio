import React, { useState } from 'react';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'website', name: '網站設計' },
    { id: 'app', name: '應用程式' },
    { id: 'branding', name: '品牌設計' }
  ];

  const works = [
    {
      id: 1,
      title: "精品咖啡品牌網站",
      category: "website",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "為精品咖啡品牌打造的響應式網站，展現品牌質感與產品特色。"
    },
    {
      id: 2,
      title: "新創科技公司官網",
      category: "website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "現代化的企業官網設計，突出技術實力與創新精神。"
    },
    {
      id: 3,
      title: "設計工作室作品集",
      category: "website",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "簡潔優雅的作品集網站，完美呈現設計作品與品牌形象。"
    },
    {
      id: 4,
      title: "電商平台 App",
      category: "app",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "跨平台電商應用程式，提供流暢的購物體驗。"
    },
    {
      id: 5,
      title: "企業管理系統",
      category: "app",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "客製化企業管理系統，提升營運效率與數據管理。"
    },
    {
      id: 6,
      title: "品牌視覺識別設計",
      category: "branding",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "完整的品牌視覺識別系統設計，建立獨特的品牌形象。"
    }
  ];

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-cold-gray-dark via-black to-misty-purple-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              精選
              <span className="block text-misty-purple">作品集</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              看看我們如何為客戶打造獨特的數位體驗
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-misty-purple text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div key={work.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-misty-purple font-medium mb-2">
                    {categories.find(cat => cat.id === work.category)?.name}
                  </div>
                  <h3 className="text-xl font-bold text-cold-gray-dark mb-3">{work.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{work.description}</p>
                  <button className="inline-flex items-center text-misty-purple font-semibold hover:text-misty-purple-dark transition-colors duration-300 group">
                    查看詳情
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-misty-purple to-misty-purple-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            準備好開始您的專案了嗎？
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            讓我們一起討論您的需求，為您的品牌打造專屬的數位解決方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-misty-purple-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              立即諮詢
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-misty-purple-dark transition-colors duration-300">
              了解更多
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work; 