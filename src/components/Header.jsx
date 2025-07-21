import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // 從 Hero 區塊 70% 的位置開始過渡，90% 位置完全變色
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
        backgroundColor: `rgba(255, 255, 255, ${scrollOpacity * 0.95})`,
        backdropFilter: scrollOpacity > 0 ? 'blur(12px)' : 'none',
        boxShadow: scrollOpacity > 0.5 ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-misty-purple-dark hover:text-misty-purple transition-colors duration-300">
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
                     ? '#775C91' // misty-purple-dark
                     : `rgb(${255 - (255 - 55) * scrollOpacity}, ${255 - (255 - 65) * scrollOpacity}, ${255 - (255 - 81) * scrollOpacity})` // white to gray-700
                 }}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-misty-purple-dark text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-misty-purple transition-colors duration-300">
              開始專案
            </button>
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
                  color: `rgb(${255 - (255 - 55) * scrollOpacity}, ${255 - (255 - 65) * scrollOpacity}, ${255 - (255 - 81) * scrollOpacity})`
                }}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-current transition-all duration-500 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}
                style={{
                  color: `rgb(${255 - (255 - 55) * scrollOpacity}, ${255 - (255 - 65) * scrollOpacity}, ${255 - (255 - 81) * scrollOpacity})`
                }}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-current transition-all duration-500 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
                style={{
                  color: `rgb(${255 - (255 - 55) * scrollOpacity}, ${255 - (255 - 65) * scrollOpacity}, ${255 - (255 - 81) * scrollOpacity})`
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
            <button className="w-full bg-misty-purple-dark text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-misty-purple transition-colors duration-300">
              開始專案
            </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 