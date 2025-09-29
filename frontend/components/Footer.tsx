"use client";

import React from 'react';
import { Sparkles, Shield, HeartHandshake } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Dla firm': [
      { label: 'Jak to działa', href: '/how-it-works' },
      { label: 'Cennik', href: '/pricing' },
      { label: 'Kategorie usług', href: '/categories' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'API dla firm', href: '/api' }
    ],
    'Dla freelancerów': [
      { label: 'Zostań wykonawcą', href: '/join' },
      { label: 'Prowizje', href: '/fees' },
      { label: 'Rankingi', href: '/rankings' },
      { label: 'Certyfikaty', href: '/certificates' },
      { label: 'Program partnerski', href: '/partners' }
    ],
    'Zasoby': [
      { label: 'Blog', href: '/blog' },
      { label: 'Poradniki', href: '/guides' },
      { label: 'Webinary', href: '/webinars' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Społeczność', href: '/community' }
    ],
    'Firma': [
      { label: 'O nas', href: '/about' },
      { label: 'Kariera', href: '/careers' },
      { label: 'Kontakt', href: '/contact' },
      { label: 'Dla mediów', href: '/press' },
      { label: 'Status systemu', href: '/status' }
    ]
  };

  const socialLinks = [
    { icon: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: 'Twitter', href: 'https://twitter.com' },
    { icon: 'Facebook', href: 'https://facebook.com' },
    { icon: 'GitHub', href: 'https://github.com' }
  ];

  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LuzeN</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Marketplace mikro-usług IT łączący firmy z najlepszymi specjalistami.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm">Bezpieczne płatności</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-purple-400" />
              <span className="text-sm">100% satysfakcji</span>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Otrzymuj najnowsze informacje o trendach IT i ofertach specjalnych.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Zapisz się
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 LuzeN. Wszystkie prawa zastrzeżone.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-sm hover:text-white transition-colors duration-200">
              Polityka prywatności
            </a>
            <a href="/terms" className="text-sm hover:text-white transition-colors duration-200">
              Regulamin
            </a>
            <a href="/cookies" className="text-sm hover:text-white transition-colors duration-200">
              Cookies
            </a>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-200"
              >
                <span className="text-xs text-white">{social.icon[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
