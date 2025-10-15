"use client";

import React from 'react';
import { CheckCircle } from '../lib/icons';

const PricingSection = () => {
  const packages = [
    {
      name: 'Podstawowy',
      price: '199',
      period: 'jednorazowo',
      description: 'Dla użytkowników domowych',
      features: [
        'Diagnostyka komputera',
        'Usunięcie wirusów',
        'Optymalizacja systemu',
        'Instalacja 5 programów',
        'Wsparcie przez 7 dni'
      ],
      highlighted: false
    },
    {
      name: 'Biznes',
      price: '499',
      period: '/miesiąc',
      description: 'Dla małych firm',
      features: [
        'Obsługa do 10 komputerów',
        'Priorytetowe wsparcie 24/7',
        'Backup danych w chmurze',
        'Monitoring bezpieczeństwa',
        'Konsultacje IT',
        'Czas reakcji: 2h'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Indywidualnie',
      period: '',
      description: 'Dla dużych firm',
      features: [
        'Nieograniczona liczba urządzeń',
        'Dedykowany opiekun',
        'SLA 99.9%',
        'Audyty bezpieczeństwa',
        'Szkolenia pracowników',
        'Rozwój oprogramowania'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cennik usług
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Przejrzyste ceny bez ukrytych kosztów. Wybierz pakiet dostosowany do Twoich potrzeb.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative rounded-2xl p-8 ${
                pkg.highlighted 
                  ? 'bg-gradient-to-br from-violet-600 to-purple-700 text-white scale-105' 
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full">
                  REKOMENDOWANE
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm opacity-80">{pkg.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{pkg.price}</span>
                {pkg.period && <span className="text-sm opacity-80"> {pkg.period}</span>}
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                pkg.highlighted
                  ? 'bg-white text-purple-700 hover:shadow-xl'
                  : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
              }`}>
                Wybierz pakiet
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;