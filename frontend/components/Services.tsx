"use client";

import React from 'react';
import Link from 'next/link';
import { Monitor, Laptop, HardDrive, Shield, Cpu, Cloud, CheckCircle, ArrowRight, Sparkles } from '../lib/icons';

const ServicesSection = () => {
  const services = [
    {
      title: 'Naprawa komputerów',
      icon: Monitor,
      description: 'Diagnostyka i naprawa PC, wymiana podzespołów, modernizacja',
      features: ['Diagnostyka gratis', 'Gwarancja 6 miesięcy', 'Części oryginalne'],
      price: 'od 50 zł',
      popular: true
    },
    {
      title: 'Serwis laptopów',
      icon: Laptop,
      description: 'Wymiana matryc, naprawa zawiasów, czyszczenie, wymiana past',
      features: ['Wszystkie marki', 'Express 24h', 'Laptop zastępczy'],
      price: 'od 80 zł',
      popular: false
    },
    {
      title: 'Odzyskiwanie danych',
      icon: HardDrive,
      description: 'Profesjonalne odzyskiwanie danych z dysków, kart pamięci, pendrive',
      features: ['Skuteczność 95%', 'Bez danych bez opłat', 'Poufność danych'],
      price: 'od 200 zł',
      popular: false
    },
    {
      title: 'Usuwanie wirusów',
      icon: Shield,
      description: 'Czyszczenie systemu, instalacja antywirusa, zabezpieczenie',
      features: ['Skan głęboki', 'Ochrona real-time', 'Backup danych'],
      price: 'od 100 zł',
      popular: false
    },
    {
      title: 'Instalacja systemów i oprogramowania',
      icon: Cpu,
      description: 'Windows, Linux, macOS – instalacja, konfiguracja i optymalizacja',
      features: ['Sterowniki w cenie', 'Aktywacja legalna', 'Optymalizacja systemu'],
      price: 'od 150 zł',
      popular: true
    },
    {
      title: 'Pomoc zdalna',
      icon: Cloud,
      description: 'Szybka pomoc online przez TeamViewer lub AnyDesk',
      features: ['Natychmiastowa pomoc', 'Bezpieczne połączenie', 'Płatność po usłudze'],
      price: 'od 30 zł',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Sekcja tytułowa */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nasze usługi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kompleksowa obsługa informatyczna dla firm i klientów indywidualnych.
            Gwarancja jakości i konkurencyjne ceny.
          </p>
        </div>

        {/* Siatka usług */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs px-3 py-1 rounded-bl-lg">
                  POPULARNE
                </div>
              )}

              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    href="/rezerwacja"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
                    aria-label={`Zamów usługę ${service.title}`}
                  >
                    Zamów
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sekcja AdSense */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl bg-gray-100 border border-gray-300 rounded-xl p-6 text-center text-gray-500">
            {/* Wklej kod AdSense w to miejsce */}
            <p className="text-sm italic">Miejsce na reklamę (AdSense)</p>
          </div>
        </div>

        {/* Zapowiedź Marketplace */}
        <div className="mt-16 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl p-8 text-center text-white">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Marketplace IT – Wkrótce!</h3>
          <p className="text-white/90 mb-4 max-w-2xl mx-auto">
            Już niedługo uruchomimy platformę łączącą specjalistów IT z firmami.
            Dołącz do listy oczekujących i otrzymaj 20% zniżki na start!
          </p>
          <button className="px-6 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Zapisz się na listę
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
