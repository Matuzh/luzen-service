"use client";

import React from 'react';
import { Cpu, Shield, Phone, Mail } from '../lib/icons';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-7 h-7 text-white">
                  <Image 
                    src="/images/logo.png" 
                    alt="LuzeN" 
                    width={1024}
                    height={1024}
                    className={"filter invert"}
                  /> 
                </div>
              </div>
              <span className="text-xl font-bold text-white">LuzeN</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Profesjonalny serwis komputerowy. Naprawiamy, modernizujemy, doradzamy.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm">Autoryzowany serwis</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li><a href="uslugi" className="text-sm hover:text-white transition-colors">Usługi</a></li>
              <li><a href="cennik" className="text-sm hover:text-white transition-colors">Cennik</a></li>
              <li><a href="o-nas" className="text-sm hover:text-white transition-colors">O nas</a></li>
              <li><a href="kontakt" className="text-sm hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          {/* Popularne usługi */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popularne usługi</h3>
            <ul className="space-y-2">
              <li className="text-sm">Naprawa komputerów</li>
              <li className="text-sm">Serwis laptopów</li>
              <li className="text-sm">Odzyskiwanie danych</li>
              <li className="text-sm">Pomoc zdalna</li>
            </ul>
          </div>
          
          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                +48 789 710 406
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                kontakt@luzen.pl
              </li>
              <li className="text-sm">
                Działamy na rezerwacje – umów wizytę telefonicznie lub przez formularz.
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social Media</h3>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/luzen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/luzen_it" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@luzen_it" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <SiTiktok className="w-5 h-5" /> 
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 LuzeN. Wszystkie prawa zastrzeżone.
          </div>
          <div className="flex items-center gap-6">
            <a href="/polityka-prywatnosci" className="text-sm hover:text-white transition-colors">Polityka prywatności</a>
            <a href="/regulamin" className="text-sm hover:text-white transition-colors">Regulamin</a>
            <a href="/cookies" className="text-sm hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
