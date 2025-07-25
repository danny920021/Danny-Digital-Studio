import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 導入圖片
import luxaryblockImg from '../assets/images/luxaryblock.jpg';
import naviverseImg from '../assets/images/naviverse.jpg';
import nftotalImg from '../assets/images/nftotal.jpg';
import ticketgoImg from '../assets/images/ticketgo.jpg';
import coveImg from '../assets/images/cove.jpg';
import ieltsImg from '../assets/images/ielts.jpg';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'ecommerce', name: '電商網站' },
    { id: 'community', name: '社群經營 / BD' },
    { id: 'education', name: '教育平台' },
    { id: 'website', name: '網站設計' }
  ];

  // 根據圖片來源決定對齊方式
  const getObjectPosition = (imageSrc) => {
    if (imageSrc === luxaryblockImg || imageSrc === ticketgoImg) {
      return 'object-top';
    }
    return 'object-center';
  };

  const works = [
    // 真實專案作品
    {
      id: 1,
      title: "Luxury Block",
      category: "ecommerce",
      image: luxaryblockImg,
      description: "高端精品電商平台，結合現代設計與頂級購物體驗，打造奢華品牌數位門面。"
    },
    {
      id: 2,
      title: "Naviverse",
      category: "community",
      image: naviverseImg,
      description: "創新社群平台設計，專注於用戶互動體驗與商業發展策略整合。"
    },
    {
      id: 3,
      title: "NFTotal",
      category: "community",
      image: nftotalImg,
      description: "NFT 社群生態平台，融合區塊鏈技術與社群經營的創新解決方案。"
    },
    {
      id: 4,
      title: "TicketGo",
      category: "ecommerce",
      image: ticketgoImg,
      description: "票務電商平台設計，提供流暢的票券購買體驗與活動管理系統。"
    },
    {
      id: 5,
      title: "Cove",
      category: "website",
      image: coveImg,
      description: "現代化企業網站設計，展現品牌專業形象與核心價值。"
    },
    {
      id: 6,
      title: "IELTS",
      category: "education",
      image: ieltsImg,
      description: "IELTS 學習平台，整合教學資源與互動學習體驗的教育網站。"
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
                    className={`w-full h-full object-cover ${getObjectPosition(work.image)} group-hover:scale-110 transition-transform duration-500`}
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
            <Link 
              to="/contact"
              className="bg-white text-misty-purple-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center"
            >
              立即諮詢
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-misty-purple-dark transition-colors duration-300 text-center"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work; 