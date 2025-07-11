import React from 'react';
import { VscGithubAlt, VscLinkExternal } from 'react-icons/vsc';

const projects = [
  {
    title: 'NaviVerse – 元宇宙社群與活動營運平台',
    description: '擔任元宇宙社群與活動平台的核心顧問，負責社群經營、Web3 活動策劃與跨平台資源整合。成功策劃多場線上任務與 NFT 活動，實現社群用戶破千與互動率的顯著提升。',
    tags: ['元宇宙', 'Web3 顧問', '社群營運', 'NFT', 'Discord 行銷'],
    imageUrl: '/naviverse.jpg',
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    title: 'TicketGo 活動票務平台',
    description: '票務平台前端專案，設計直覺的活動探索與購票流程，支援多類型活動瀏覽、條件篩選與收藏功能，強化使用者體驗。',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'React Router'],
    imageUrl: '/ticketgo.jpg',
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    title: 'Luxray Block - Web3 奢侈品二手交易平台',
    description: '為客戶打造一套基於 Web3 架構的奢侈品二手交易平台，結合 NFT 技術進行商品溯源與真偽驗證，提升交易信任與品牌價值。',
    tags: ['React', 'Tailwind CSS', 'Web3.js', 'PHP'],
    imageUrl: '/luxaryblock.jpg',
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    title: 'NFTotal - NFT 數據分析與推廣顧問',
    description: '擔任 NFT 數據分析平台顧問，負責社群營運與市場策略。成功發行限量 NFT，一小時內售罄，社群活躍度突破 80%，吸引超過 3000 名參與者。',
    tags: ['NFT', '數據分析', '市場策略', 'Discord 行銷', 'Web3 顧問'],
    imageUrl: '/nftotal.jpg',
    githubUrl: undefined,
    liveUrl: undefined,
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
          我的精選專案
        </h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-[slideInFromLeft_1s_ease-out_forwards] hover:transform hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6 overflow-hidden group-hover:shadow-lg transition-all duration-300 border-2 border-gray-200">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="rounded-md w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 border border-gray-300"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag} 
                      className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full hover:bg-blue-200 hover:scale-105 transition-all duration-300 cursor-default opacity-0 animate-[popIn_0.5s_ease-out_forwards]"
                      style={{ animationDelay: `${index * 0.2 + tagIndex * 0.1 + 0.5}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 hover:transform hover:scale-105">
                      <VscGithubAlt size={20} />
                      <span>查看原始碼</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 hover:transform hover:scale-105">
                      <VscLinkExternal size={20} />
                      <span>線上預覽</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 