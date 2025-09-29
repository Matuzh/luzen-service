"use client";

import React from 'react';
import { Zap, Building2, Code, Check } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <Zap className="w-4 h-4 text-yellow-300" />
          <span className="text-sm text-white">Dołącz do 2500+ specjalistów</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Gotowy, aby rozpocząć?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Dołącz do platformy, która łączy najlepszych specjalistów IT z ambitnymi firmami. 
          Bez opłat wstępnych, bez zobowiązań.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-purple-700 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <Building2 className="w-5 h-5" />
            Jestem firmą
          </button>
          <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
            <Code className="w-5 h-5" />
            Jestem freelancerem
          </button>
        </div>
        
        <p className="text-sm text-white/70 mt-8">
          <Check className="inline w-4 h-4 mr-1" />
          Darmowa rejestracja • Bez ukrytych opłat • Anuluj w każdej chwili
        </p>
      </div>
    </section>
  );
};

export default CTASection;
