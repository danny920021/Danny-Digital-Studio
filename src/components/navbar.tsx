'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: '關於我', href: '#about' },
    { title: '服務項目', href: '#services' },
    { title: '精選專案', href: '#portfolio' },
    { title: '聯絡我', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="#hero" className="flex items-center space-x-2">
          <span className="font-bold text-lg text-gray-800">Danny Wu</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 