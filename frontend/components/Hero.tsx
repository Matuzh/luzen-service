"use client";

import React, { useState, useEffect } from 'react';
import { Zap, Shield, Star, Clock, CheckCircle, Calendar, AlertCircle, Phone } from '../lib/icons';

const HeroSection = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    'Naprawa komputerów', 'Serwis laptopów', 'Odzyskiwanie danych', 
    'Instalacja oprogramowania', 'Czyszczenie wirusów'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '15+', label: 'Lat doświadczenia', icon: Shield },
    { value: '24h', label: 'Pomoc zdalna', icon: Clock },
    { value: '5000+', label: 'Naprawionych urządzeń', icon: CheckCircle },
    { value: '4.9/5', label: 'Ocena klientów', icon: Star }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Ekspresowy serwis w Twojej okolicy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Profesjonalny serwis komputerowy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mt-2">
                {services[activeService]}
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              Szybka naprawa, uczciwe ceny, gwarancja na usługi. 
              Serwis stacjonarny i zdalna pomoc online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Zadzwoń teraz
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Umów wizytę online
              </button>
            </div>

            {/* Emergency Service */}
            <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 mb-8">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <div>
                  <div className="text-white font-semibold">Awaria? Pomoc ekspresowa!</div>
                  <div className="text-sm text-gray-300">Dojazd w ciągu 2h • Tel: 123-456-789</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Form Preview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Zgłoś usterkę online</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Rodzaj urządzenia</label>
                <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white">
                  <option>Komputer stacjonarny</option>
                  <option>Laptop</option>
                  <option>Serwer</option>
                  <option>Inne</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Opis problemu</label>
                <textarea 
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 h-24"
                  placeholder="Opisz problem..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Imię i nazwisko</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Telefon</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500"
                    placeholder="123-456-789"
                  />
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Wyślij zgłoszenie
              </button>
              
              <p className="text-xs text-gray-400 text-center">
                Odpowiemy w ciągu 30 minut w godzinach pracy
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 mb-3">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
