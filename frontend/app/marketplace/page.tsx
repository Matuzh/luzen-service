"use client";

import React from 'react';
import { Construction } from 'lucide-react';

const MarketplacePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden text-white">
      {/* Animowane bloby */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6">Marketplace IT</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Projekt Marketplace LuzeN jest obecnie w fazie tworzenia. Naszym celem jest połączenie
            ambitnych firm z najlepszymi specjalistami IT w jednym miejscu.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg mb-4">
              <Construction className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Wkrótce dostępne</h3>
            <p className="text-gray-400 text-sm text-center">
              Aktualnie pracujemy nad funkcjonalnościami platformy. Bądź na bieżąco i sprawdzaj
              postępy!
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-4">
              <Construction className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bądź pierwszym użytkownikiem</h3>
            <p className="text-gray-400 text-sm text-center">
              Już wkrótce będzie możliwość zapisania się do newslettera i otrzymywania informacji
              o premierze Marketplace.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-4">Co planujemy</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-center">
            W Marketplace LuzeN będziesz mógł zamawiać mikro-usługi IT od sprawdzonych specjalistów,
            śledzić status zleceń i mieć pełną kontrolę nad projektem w jednym miejscu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
