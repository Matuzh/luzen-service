"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Shield, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Dla firm', href: '/for-business', badge: null },
    { label: 'Dla freelancerów', href: '/for-freelancers', badge: null },
    { label: 'Usługi', href: '/services', badge: 'Nowe' },
    { label: 'Jak to działa', href: '/how-it-works', badge: null },
    { label: 'Cennik', href: '/pricing', badge: null },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LuzeN</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium group"
              >
                {link.label}
                {link.badge && (
                  <span className="absolute -top-2 -right-8 px-1.5 py-0.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs rounded-full">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Zaloguj się
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Rozpocznij teraz
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <div className="px-4 py-6 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/10">
                <button className="w-full px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200">
                  Zaloguj się
                </button>
                <button className="w-full px-5 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium">
                  Rozpocznij teraz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
