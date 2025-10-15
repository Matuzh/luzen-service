import React from 'react';
import { Shield, Clock, ThumbsUp, Users, Package, FileCheck, Heart } from '../lib/icons';

const AboutSection = () => {
  const benefits = [
    { icon: Shield, title: 'Gwarancja jakości', description: '6 miesięcy gwarancji na wszystkie naprawy' },
    { icon: Clock, title: 'Szybka realizacja', description: 'Większość napraw w ciągu 24-48 godzin' },
    { icon: ThumbsUp, title: 'Uczciwe ceny', description: 'Przejrzysta wycena, bez ukrytych kosztów' },
    { icon: Users, title: 'Doświadczenie', description: 'Ponad 15 lat w branży IT' }
  ];

  const certifications = [
    'Microsoft Certified', 'CompTIA A+', 'Cisco CCNA', 'Apple Certified'
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Dlaczego warto nam zaufać?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Jesteśmy lokalnym serwisem komputerowym z wieloletnim doświadczeniem. 
              Specjalizujemy się w kompleksowej obsłudze IT dla firm i klientów indywidualnych.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Nasze certyfikaty:</h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span key={cert} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Statystyki serwisu</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Naprawione urządzenia</span>
                  <span className="text-2xl font-bold">5000+</span>
                </div>
                <div className="h-px bg-white/20" />
                <div className="flex justify-between items-center">
                  <span>Zadowoleni klienci</span>
                  <span className="text-2xl font-bold">98%</span>
                </div>
                <div className="h-px bg-white/20" />
                <div className="flex justify-between items-center">
                  <span>Średni czas naprawy</span>
                  <span className="text-2xl font-bold">24h</span>
                </div>
                <div className="h-px bg-white/20" />
                <div className="flex justify-between items-center">
                  <span>Lata doświadczenia</span>
                  <span className="text-2xl font-bold">15+</span>
                </div>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <Package className="w-8 h-8 text-purple-600 mx-auto mb-1" />
                <span className="text-xs text-gray-600">Części oryginalne</span>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <FileCheck className="w-8 h-8 text-purple-600 mx-auto mb-1" />
                <span className="text-xs text-gray-600">Faktura VAT</span>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <Heart className="w-8 h-8 text-purple-600 mx-auto mb-1" />
                <span className="text-xs text-gray-600">Ekologicznie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;