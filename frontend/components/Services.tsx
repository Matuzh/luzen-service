"use client";

import React, { useState } from 'react';
import { Laptop, Monitor, HardDrive, Settings, Wifi, Users, Check, Clock, DollarSign } from '../lib/icons';
import Link from 'next/link';
import { SERVICES } from '../lib/constants';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Laptop,
    Monitor,
    HardDrive,
    Settings,
    Wifi,
    Users
  };

  return (
    <section id="uslugi" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm mb-4">
            Nasze usługi
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Kompleksowy serwis
            <span className="block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              dla Twojego sprzętu
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferujemy pełen zakres usług serwisowych. Od diagnostyki, przez naprawy, 
            po kompleksowe doradztwo IT.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon];
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 ${
                  isHovered ? 'transform -translate-y-2' : ''
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  isHovered
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg shadow-purple-500/30'
                    : 'bg-white/5'
                }`}>
                  {IconComponent && <IconComponent className={`w-7 h-7 transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-purple-400'
                  }`} />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price and Duration */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-green-400">
                    <DollarSign className="w-4 h-4" />
                    <span>{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-400">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/rezerwacja">
                  <button className={`w-full py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                    isHovered
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/5 text-gray-300 border border-white/10'
                  }`}>
                    Umów naprawę
                  </button>
                </Link>

                {/* Hover glow effect */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5 rounded-2xl -z-10 blur-xl"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Nie widzisz swojej usługi?
              </h3>
              <p className="text-gray-300">
                Skontaktuj się z nami – doradzimy najlepsze rozwiązanie
              </p>
            </div>
            <Link href="#kontakt">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold whitespace-nowrap hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Skontaktuj się
              </button>
            </Link>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Jak to działa?
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Umów wizytę', desc: 'Rezerwacja online lub telefoniczna' },
              { step: '02', title: 'Diagnostyka', desc: 'Dokładne sprawdzenie usterki' },
              { step: '03', title: 'Naprawa', desc: 'Szybka i profesjonalna realizacja' },
              { step: '04', title: 'Odbiór', desc: 'Sprawny sprzęt gotowy do użycia' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-purple-500/20 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;