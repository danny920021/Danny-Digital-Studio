import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const location = useLocation();
  
  // 判斷當前頁面的 Hero 背景類型
  const isLightHeroPage = location.pathname === '/about';
  const isDarkHeroPage = location.pathname === '/' || location.pathname === '/work' || location.pathname === '/services' || location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Services 頁面使用較小的 Hero，調整判斷邏輯
      if (location.pathname === '/services') {
        // Services 頁面的 Hero 較小，從 20% 開始過渡，35% 完全變色
        const startTransition = windowHeight * 0.2;
        const endTransition = windowHeight * 0.35;
        
        if (scrollY < startTransition) {
          setScrollOpacity(0);
        } else if (scrollY > endTransition) {
          setScrollOpacity(1);
        } else {
          const progress = (scrollY - startTransition) / (endTransition - startTransition);
          setScrollOpacity(progress);
        }
      } else {
        // 其他頁面從 Hero 區塊 70% 的位置開始過渡，90% 位置完全變色
        const startTransition = windowHeight * 0.7;
        const endTransition = windowHeight * 0.9;
        
        if (scrollY < startTransition) {
          setScrollOpacity(0);
        } else if (scrollY > endTransition) {
          setScrollOpacity(1);
        } else {
          // 在過渡區間內計算透明度
          const progress = (scrollY - startTransition) / (endTransition - startTransition);
          setScrollOpacity(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首頁', path: '/' },
    { name: '關於', path: '/about' },
    { name: '服務', path: '/services' },
    { name: '作品', path: '/work' },
    { name: '聯絡', path: '/contact' }
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={{
        backgroundColor: isLightHeroPage && scrollOpacity < 0.1
          ? 'rgba(255, 255, 255, 0.1)' // 淺色頁面給予輕微白色背景
          : `rgba(255, 255, 255, ${Math.max(scrollOpacity * 0.95, isLightHeroPage ? 0.1 : 0)})`,
        backdropFilter: (scrollOpacity > 0 || isLightHeroPage) ? 'blur(12px)' : 'none',
        boxShadow: scrollOpacity > 0.5 ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold hover:text-misty-purple transition-colors duration-300"
            style={{
              color: scrollOpacity > 0.3 
                ? '#775C91' // 滾動後始終使用品牌色
                : isLightHeroPage 
                  ? '#775C91' // 淺色頁面使用品牌色
                  : '#FFFFFF' // 深色頁面使用白色
            }}
          >
            Kodea Studio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium transition-colors duration-500"
                style={{
                  color: location.pathname === item.path
                    ? '#775C91' // 當前頁面始終使用品牌色
                    : scrollOpacity > 0.3
                      ? '#374151' // 滾動後使用深灰色
                      : isLightHeroPage
                        ? '#374151' // 淺色頁面使用深灰色
                        : '#FFFFFF' // 深色頁面使用白色
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-misty-purple-dark text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-misty-purple transition-colors duration-300"
            >
              開始專案
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-5 h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
                style={{
                  color: scrollOpacity > 0.3
                    ? '#374151' // 滾動後使用深灰色
                    : isLightHeroPage
                      ? '#374151' // 淺色頁面使用深灰色
                      : '#FFFFFF' // 深色頁面使用白色
                }}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-current transition-all duration-500 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}
                style={{
                  color: scrollOpacity > 0.3
                    ? '#374151' // 滾動後使用深灰色
                    : isLightHeroPage
                      ? '#374151' // 淺色頁面使用深灰色
                      : '#FFFFFF' // 深色頁面使用白色
                }}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-current transition-all duration-500 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
                style={{
                  color: scrollOpacity > 0.3
                    ? '#374151' // 滾動後使用深灰色
                    : isLightHeroPage
                      ? '#374151' // 淺色頁面使用深灰色
                      : '#FFFFFF' // 深色頁面使用白色
                }}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
            <nav className="py-6 px-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-lg font-medium transition-colors duration-300"
                                 style={{
                   color: location.pathname === item.path
                     ? '#775C91' // misty-purple-dark
                     : '#374151' // gray-700 (手機版選單始終使用深色)
                 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="block w-full bg-misty-purple-dark text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-misty-purple transition-colors duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              開始專案
            </Link>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 