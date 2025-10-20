"use client";

import React, { useState } from 'react';
import { Check, Star, ArrowRight } from '../lib/icons';
import Link from 'next/link';
import { PRICING_TIERS } from '../lib/constants';

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>('standard');

  return (
    <section id="cennik" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm mb-4">
            Cennik
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Przejrzyste ceny
            <span className="block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              bez ukrytych kosztów
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wybierz pakiet odpowiedni dla Twoich potrzeb. Każda naprawa wyceniana jest indywidualnie.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            const isPopular = tier.popular;

            return (
              <div
                key={tier.id}
                onMouseEnter={() => setSelectedTier(tier.id)}
                onMouseLeave={() => setSelectedTier(isPopular ? 'standard' : null)}
                className={`relative bg-gradient-to-br backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 ${
                  isPopular
                    ? 'from-violet-900/30 to-purple-900/30 border-2 border-purple-500 shadow-xl shadow-purple-500/20 md:-translate-y-4 md:scale-105'
                    : isSelected
                    ? 'from-slate-800/50 to-slate-900/50 border-2 border-purple-500/50 transform -translate-y-2'
                    : 'from-slate-800/30 to-slate-900/30 border border-white/10'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      Najpopularniejszy
                    </div>
                  </div>
                )}

                {/* Tier Name */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isPopular ? 'text-purple-300' : 'text-white'
                  }`}>
                    {tier.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className={`text-4xl font-bold ${
                    isPopular ? 'text-white' : 'text-gray-100'
                  }`}>
                    {tier.price}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    {tier.id === 'basic' ? 'jednorazowo' : 'w zależności od usterki'}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isPopular ? 'bg-purple-500' : 'bg-white/10'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          isPopular ? 'text-white' : 'text-purple-400'
                        }`} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/rezerwacja">
                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-purple-500/30'
                  }`}>
                    Wybierz pakiet
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>

                {/* Glow effect for selected */}
                {(isSelected || isPopular) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5 rounded-2xl -z-10 blur-xl"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: 'Gwarancja na naprawy',
              desc: '30-90 dni gwarancji w zależności od pakietu',
              icon: '✓'
            },
            {
              title: 'Oryginalne części',
              desc: 'Używamy tylko certyfikowanych podzespołów',
              icon: '★'
            },
            {
              title: 'Elastyczna płatność',
              desc: 'Gotówka, karta, przelew lub BLIK',
              icon: '💳'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Masz pytania dotyczące cen?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Każda naprawa jest wyceniana indywidualnie po diagnostyce. 
            Skontaktuj się z nami, aby uzyskać dokładną wycenę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#kontakt">
              <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Zapytaj o wycenę
              </button>
            </Link>
            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE || '+48789710406'}`}>
              <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Zadzwoń: 789-710-406
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;