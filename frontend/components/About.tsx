"use client";

import React, { useEffect, useRef } from 'react';
import { Shield, Clock, ThumbsUp, Users, Package, Heart } from '../lib/icons';

const AboutSection = () => {
  const benefits = [
    { icon: Shield, title: 'Gwarancja jakości', description: 'Naprawy wykonane rzetelnie i bezpiecznie' },
    { icon: Clock, title: 'Szybka realizacja', description: 'Większość zgłoszeń obsłużona w ciągu 24-48 godzin' },
    { icon: ThumbsUp, title: 'Uczciwe ceny', description: 'Przejrzysta wycena, bez ukrytych kosztów' },
    { icon: Users, title: 'Doświadczenie', description: 'Praktyczne doświadczenie w branży IT' }
  ];

  const stats = [
    { label: 'Zgłoszenia przyjęte', value: 12, unit: '' },
    { label: 'Zadowoleni klienci', value: 10, unit: '' },
    { label: 'Średni czas reakcji', value: 24, unit: 'h' },
    { label: 'Doświadczenie właściciela', value: 1, unit: ' rok' }
  ];

  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Animacja liczników
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    statRefs.current.forEach((el, idx) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          const entry = entries[0];
          if (!entry || !entry.isIntersecting) return;
          
          let start = 0;
          const stat = stats[idx];
          if (!stat) return;

          const end = stat.value;
          const unit = stat.unit ?? "";
          const duration = 1500;
          const increment = end / (duration / 30);

          const counter = setInterval(() => {
            start += increment;
            if (el) {
              el.textContent = `${Math.floor(start)}${unit}`;
            }
            if (start >= end) {
              if (el) {
                el.textContent = `${end}${unit}`;
              }
              clearInterval(counter);
            }
          }, 30);

          observer.unobserve(el);
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [stats]);

  return (
    <section id="o-nas" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-200 rounded-full text-purple-600 text-sm mb-4">
              O nas
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Dlaczego warto nam zaufać?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Jesteśmy lokalnym serwisem komputerowym stawiającym na profesjonalizm, szybkość i bezpieczeństwo. 
              Kompleksowa obsługa komputerów, laptopów i sprzętu biurowego – bez ukrytych kosztów.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md group bg-white border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-purple-500/20">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/rezerwacja"
                className="inline-block px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Umów naprawę online
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats Box */}
            <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Statystyki serwisu</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20"
                  >
                    <span 
                      ref={el => { statRefs.current[idx] = el; }} 
                      className="text-3xl font-bold"
                    >
                      0{stat.unit}
                    </span>
                    <span className="text-sm text-white/80 mt-1 text-center">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <Package className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <span className="text-xs text-gray-600 font-medium">Oryginalne części</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <span className="text-xs text-gray-600 font-medium">Bezpieczne naprawy</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <span className="text-xs text-gray-600 font-medium">Szybka realizacja</span>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">O firmie LuzeN</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                LuzeN to młody, dynamicznie rozwijający się serwis komputerowy. 
                Specjalizujemy się w naprawach sprzętu IT, odzyskiwaniu danych oraz doradztwie technicznym.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-600">Lokalny biznes</span>
                </div>
                <div className="w-px h-4 bg-gray-200"></div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-600">Indywidualne podejście</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;