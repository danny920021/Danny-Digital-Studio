'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    { title: '關於我們', href: '#about' },
    { title: '服務項目', href: '#services' },
    { title: '精選專案', href: '#portfolio' },
    { title: '聯絡我們', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md ${hasScrolled ? 'bg-white/95 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        <Link href="#hero" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="relative h-20 w-60">
            <Image
              src="/kodeaLogo.svg"
              alt="Kodea Studio Logo"
              fill
              className="object-contain object-left"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 