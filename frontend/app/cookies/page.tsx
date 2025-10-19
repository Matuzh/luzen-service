"use client";

import React from "react";
import { Cookie, Settings, Info, ChartPie } from 'lucide-react';

const CookiesPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden text-white">
      {/* Animowane bloby */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Polityka Cookies
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Dowiedz się, jak serwis LuzeN wykorzystuje pliki cookies, aby zapewnić Ci najlepsze doświadczenia i bezpieczeństwo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Cookie className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold">Czym są pliki cookies?</h2>
            </div>
            <p className="text-gray-300 text-sm">
              Pliki cookies to niewielkie pliki tekstowe, które pozwalają stronie zapamiętać preferencje użytkownika, analizować ruch i poprawiać komfort korzystania z usług.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <ChartPie className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold">Rodzaje cookies</h2>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li><strong>Niezbędne:</strong> wymagane do działania strony i usług.</li>
              <li><strong>Analityczne:</strong> pomagają w optymalizacji strony i analityce ruchu.</li>
              <li><strong>Funkcjonalne:</strong> zapamiętują preferencje użytkownika.</li>
              <li><strong>Marketingowe:</strong> umożliwiają personalizację treści i reklam.</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Info className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold">Cel stosowania cookies</h2>
            </div>
            <p className="text-gray-300 text-sm">
              Cookies są wykorzystywane do:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Utrzymania sesji i prawidłowego działania strony.</li>
              <li>Zbierania anonimowych danych statystycznych.</li>
              <li>Personalizacji treści i reklam.</li>
              <li>Poprawy komfortu korzystania z usług.</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold">Zarządzanie cookies</h2>
            </div>
            <p className="text-gray-300 text-sm">
              Możesz w każdej chwili zmienić ustawienia plików cookies w swojej przeglądarce. Blokowanie niektórych lub wszystkich plików cookies może wpłynąć na funkcjonalność strony.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Więcej informacji lub wątpliwości dotyczących cookies można uzyskać, kontaktując się z Administratorem: 
            <br />
            📧 kontakt@luzen.pl
            <br />
            📞 +48 789 710 406
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
