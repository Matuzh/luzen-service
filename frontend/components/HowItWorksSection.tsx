"use client";

import React from 'react';
import { FileCheck, Users, Award, Shield, Lock, MessageSquare, CheckCircle, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Opisz swój projekt',
      description: 'Wypełnij formularz z wymaganiami, budżetem i terminem realizacji',
      icon: FileCheck,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Otrzymaj oferty',
      description: 'Zweryfikowani specjaliści składają propozycje w ciągu 24h',
      icon: Users,
      color: 'from-purple-500 to-violet-500'
    },
    {
      number: '03',
      title: 'Wybierz najlepszego',
      description: 'Porównaj portfolio, opinie i ceny. Wybierz idealnego wykonawcę',
      icon: Award,
      color: 'from-pink-500 to-rose-500'
    },
    {
      number: '04',
      title: 'Bezpieczna realizacja',
      description: 'Płatności w systemie escrow. Pieniądze uwalniane po akceptacji pracy',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    { icon: Lock, title: 'Bezpieczne płatności', description: 'System escrow chroni Twoje środki' },
    { icon: MessageSquare, title: 'Wsparcie 24/7', description: 'Pomoc na każdym etapie projektu' },
    { icon: CheckCircle, title: 'Gwarancja jakości', description: '30-dniowa gwarancja na wykonane prace' },
    { icon: Zap, title: 'Szybka realizacja', description: 'Średni czas odpowiedzi: 2 godziny' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Jak to działa?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Prosty proces od zlecenia do realizacji. Bez ukrytych kosztów i zobowiązań.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
              )}
              
              <div className="text-center">
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold text-white/10 mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
