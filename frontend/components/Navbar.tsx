"use client";

import React, { useState, useEffect } from 'react';
import { Phone, X, Menu } from '../lib/icons';
import Link from 'next/link';
import Image from "next/image";
import { CONTACT_INFO } from '../lib/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { label: 'Usługi', href: '#uslugi' },
    { label: 'Cennik', href: '#cennik' },
    { label: 'O nas', href: '#o-nas' },
    { label: 'Kontakt', href: '#kontakt' },
    { label: 'Marketplace', href: '#marketplace', badge: 'Wkrótce', disabled: true }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, disabled?: boolean) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 80; // navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-7 h-7 text-white">
                  <Image 
                    src="/images/logo.png" 
                    alt="LuzeN" 
                    width={28}
                    height={28}
                    className="filter invert"
                  /> 
                </div> 
              </div>
              <span className="text-xl font-bold text-white">LuzeN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.disabled)}
                className={`relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium group ${
                  link.disabled ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="absolute -top-2 -right-10 px-1.5 py-0.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs rounded-full whitespace-nowrap">
                    {link.badge}
                  </span>
                )}
                {!link.disabled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>
            <Link href="/rezerwacja">
              <button className="px-5 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Umów wizytę
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="md:hidden text-white p-2 z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-slate-900/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-3 max-w-md mx-auto">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.disabled)}
                  className={`block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 ${
                    link.disabled ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  {link.label}
                  {link.badge && <span className="ml-2 text-xs text-purple-400">({link.badge})</span>}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/10">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  {CONTACT_INFO.phoneFormatted}
                </a>
                <Link href="/rezerwacja" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-5 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium">
                    Umów wizytę
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;