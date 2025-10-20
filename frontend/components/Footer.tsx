"use client";

import React from 'react';
import { Shield, Phone, Mail, MapPin } from '../lib/icons';
import { Facebook, Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Image from "next/image";
import Link from 'next/link';
import { CONTACT_INFO, SOCIAL_LINKS } from '../lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Usługi', href: '#uslugi' },
    { label: 'Cennik', href: '#cennik' },
    { label: 'O nas', href: '#o-nas' },
    { label: 'Kontakt', href: '#kontakt' }
  ];

  const popularServices = [
    'Naprawa komputerów',
    'Serwis laptopów',
    'Odzyskiwanie danych',
    'Pomoc zdalna'
  ];

  const legalLinks = [
    { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    { label: 'Regulamin', href: '/regulamin' },
    { label: 'Cookies', href: '/cookies' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
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
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Profesjonalny serwis komputerowy. Naprawiamy, modernizujemy, doradzamy.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Autoryzowany serwis</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Popular Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popularne usługi</h3>
            <ul className="space-y-2">
              {popularServices.map((service) => (
                <li key={service} className="text-sm">{service}</li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {CONTACT_INFO.address.street}<br />
                  {CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social Media</h3>
            <div className="flex items-center gap-4 mb-4">
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                aria-label="TikTok"
              >
                <SiTiktok className="w-5 h-5 group-hover:text-white transition-colors" /> 
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Śledź nas, aby być na bieżąco z nowościami i promocjami!
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} LuzeN. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              {legalLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;