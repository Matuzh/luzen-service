"use client";

import React, { useState } from 'react';
import { Search, Shield, Briefcase, Users, Star, Clock, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('client');
  
  const stats = [
    { value: '2,500+', label: 'Zweryfikowanych specjalistów', icon: Shield },
    { value: '98%', label: 'Zadowolonych klientów', icon: Star },
    { value: '24h', label: 'Średni czas realizacji', icon: Clock },
    { value: '10M+', label: 'Wartość zrealizowanych projektów', icon: TrendingUp }
  ];

  const popularSearches = [
    'Strona internetowa', 'Logo firmy', 'Aplikacja mobilna', 'SEO optymalizacja', 'Chatbot AI'
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
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Zaufało nam ponad 500 firm</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Znajdź najlepszych specjalistów IT
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mt-2">
              dla Twojej firmy
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Zweryfikowani freelancerzy, bezpieczne płatności i gwarancja jakości. 
            Realizuj projekty IT szybko i profesjonalnie.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Czego potrzebujesz? np. strona internetowa, aplikacja..."
                className="w-full pl-12 pr-32 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Szukaj
              </button>
            </div>
            
            {/* Popular Searches */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span className="text-sm text-gray-400">Popularne:</span>
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => setSearchQuery(search)}
                  className="text-sm px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              Dodaj zlecenie
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Zobacz specjalistów
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default HeroSection;
