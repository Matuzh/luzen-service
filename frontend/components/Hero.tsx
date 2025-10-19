"use client";

import React, { useState, useEffect } from 'react';
import { Zap, Star, Clock, CheckCircle, Calendar, Phone } from '../lib/icons.js'; // pamiętaj o .js dla Node16/Next

const HeroSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [fade, setFade] = useState(true);

  const services = [
    'Naprawa komputerów – szybko i bezpiecznie', 
    'Serwis i czyszczenie laptopów – pełna optymalizacja', 
    'Odzyskiwanie danych – bez utraty informacji', 
    'Instalacja oprogramowania – profesjonalnie', 
    'Czyszczenie wirusów i optymalizacja – pełna ochrona'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveService((prev) => (prev + 1) % services.length);
        setFade(true);
      }, 300); // fade-out duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: 'Wsparcie zdalne', label: 'Dostępność online', icon: Clock },
    { value: 'Uczciwe ceny', label: 'Rzetelność', icon: CheckCircle },
    { value: 'Bezpieczne naprawy', label: 'Profesjonalizm', icon: Star }
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
            {/* Trust / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" aria-hidden="true" />
              <span className="text-sm text-gray-300">Ekspresowy i bezpieczny serwis komputerowy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Profesjonalny serwis komputerowy
              <span
                className={`block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mt-2 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
              >
                {services[activeService]}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Szybka i rzetelna naprawa sprzętu komputerowego i laptopów. 
              Pomoc zdalna, instalacja oprogramowania, czyszczenie wirusów. 
              Gwarancja uczciwych cen i bezpiecznych napraw.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-12">
              <a
                href="tel:+48789710406"
                aria-label="Zadzwoń do serwisu komputerowego"
                className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Zadzwoń teraz
              </a>
              <a
                href="rezerwacja"
                aria-label="Umów wizytę online w serwisie komputerowym"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Umów wizytę online
              </a>
            </div>

            {/* Professional Trust Section */}
            <div className="bg-purple-700/10 backdrop-blur-sm border border-purple-700/20 rounded-xl p-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-purple-400" aria-hidden="true" />
                <div>
                  <div className="text-white font-semibold">Szybka odpowiedź</div>
                  <div className="text-sm text-gray-300">Odpowiadamy w ciągu 30 minut w godzinach pracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Zgłoś usterkę online</h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="deviceType" className="block text-sm text-gray-400 mb-2">Rodzaj urządzenia</label>
                <select
                  id="deviceType"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="pc" className="text-black">Komputer stacjonarny</option>
                  <option value="laptop" className="text-black">Laptop</option>
                  <option value="server" className="text-black">Serwer</option>
                  <option value="other" className="text-black">Inne</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="problemDescription" className="block text-sm text-gray-400 mb-2">Opis problemu</label>
                <textarea
                  id="problemDescription"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 h-24 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Opisz problem..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm text-gray-400 mb-2">Imię i nazwisko</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm text-gray-400 mb-2">Telefon</label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="123-456-789"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500"
                aria-label="Wyślij zgłoszenie usterki"
              >
                Wyślij zgłoszenie
              </button>
              
              <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 text-gray-400" aria-hidden="true" /> Odpowiemy w ciągu 30 minut w godzinach pracy
              </p>
            </form>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 mb-3 transition-transform duration-300 group-hover:scale-110" aria-describedby={`stat-${stat.label}`}>
                <stat.icon className="w-6 h-6 text-purple-400 transition-transform duration-300 group-hover:rotate-12" role="img" aria-label={stat.label} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300" id={`stat-${stat.label}`} title={stat.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
