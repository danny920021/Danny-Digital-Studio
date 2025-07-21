import React from 'react';

const About = () => {
  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-cold-gray-dark via-black to-misty-purple-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              關於
              <span className="block text-misty-purple">Kodea Studio</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              專注於品牌形象網站設計與開發的專業團隊
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cold-gray-dark mb-6">
                融合設計美學與科技創新的品牌夥伴
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Kodea Studio 成立於 2022 年，是一間專做形象網站的設計與技術工作室。
                  我們擅長用簡潔、有節奏的方式，呈現企業想說的事，並在技術上完整落地。
                </p>
                <p>
                  我們的合作對象多為中小企業與新創團隊，重視品牌感、也重視使用者體驗。
                  我們的網站設計風格不浮誇、不流於模板，而是根據品牌本身建立視覺語言。
                </p>
                <p>
                  從需求分析到專案交付，我們提供完整的服務流程，確保每個專案都能達到客戶的期望。
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cold-gray-dark mb-6">我們的價值</h3>
              <div className="space-y-4">
                {[
                  "專注於品牌形象與使用者體驗",
                  "技術與設計的完美結合",
                  "客製化解決方案",
                  "持續的技術支援與維護"
                ].map((value, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-misty-purple rounded-full mr-4"></div>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cold-gray-dark mb-4">
              我們的團隊
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              由經驗豐富的設計師與工程師組成的專業團隊
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "設計總監",
                role: "UI/UX Design",
                description: "負責整體視覺設計與使用者體驗規劃"
              },
              {
                name: "技術總監", 
                role: "Full Stack Development",
                description: "負責前端與後端技術架構與開發"
              },
              {
                name: "專案經理",
                role: "Project Management",
                description: "負責專案規劃、溝通與時程管理"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-misty-purple-light rounded-full flex items-center justify-center mb-6 text-2xl">
                  👨‍💼
                </div>
                <h3 className="text-xl font-bold text-cold-gray-dark mb-2">{member.name}</h3>
                <p className="text-misty-purple font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 