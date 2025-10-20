"use client";

import React, { useEffect, useState } from 'react';
import { Laptop, Monitor, HardDrive, Wrench, Phone, ChevronDown } from '../lib/icons';
import Link from 'next/link';
import { CONTACT_INFO } from '../lib/constants';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    { icon: Laptop, text: 'Naprawa laptopów' },
    { icon: Monitor, text: 'Serwis komputerów' },
    { icon: HardDrive, text: 'Odzyskiwanie danych' },
    { icon: Wrench, text: 'Instalacja systemów' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Profesjonalny serwis komputerowy
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Naprawiamy
              <span className="block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Twój sprzęt
              </span>
              szybko i profesjonalnie
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed">
              Kompleksowy serwis komputerów, laptopów i sprzętu IT. 
              Działamy wyłącznie na rezerwacje – bez kolejek, z pełnym profesjonalizmem.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-500 ${
                    currentFeature === idx
                      ? 'bg-gradient-to-r from-violet-500/20 to-purple-600/20 border border-purple-500/30 scale-105'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <feature.icon className={`w-6 h-6 ${currentFeature === idx ? 'text-purple-400' : 'text-gray-400'}`} />
                  <span className={`text-sm font-medium ${currentFeature === idx ? 'text-white' : 'text-gray-300'}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/rezerwacja">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  Umów wizytę online
                </button>
              </Link>
              <a href={`tel:${CONTACT_INFO.phone}`}>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Zadzwoń teraz
                </button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">12+</div>
                <div className="text-sm text-gray-400">Napraw</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24-48h</div>
                <div className="text-sm text-gray-400">Realizacji</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Zadowolonych</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center">
                  <Laptop className="w-32 h-32 text-purple-400" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl p-4 shadow-lg animate-bounce">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 shadow-lg animate-pulse">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Online</span>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/10 to-purple-600/10 rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('uslugi')}>
          <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span className="text-sm">Przewiń w dół</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;