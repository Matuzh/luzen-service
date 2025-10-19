'use client';
import React from 'react';
import { Cpu, Wrench, Wifi, Database } from 'lucide-react';

const UslugiPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden text-white">
      {/* Animowane bloby */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Tytuł */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Nasze Usługi
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Oferujemy kompleksowy zakres usług serwisowych dla komputerów i urządzeń peryferyjnych. Profesjonalizm, szybka realizacja i bezpieczeństwo danych to nasz priorytet.
          </p>
        </div>

        {/* Sekcje usług */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Naprawy sprzętu */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg mb-4">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Naprawy sprzętu</h3>
            <p className="text-gray-400 text-sm">
              Diagnozujemy i naprawiamy laptopy, komputery stacjonarne i urządzenia peryferyjne. Wymiana podzespołów, naprawa usterek mechanicznych i elektronicznych.
            </p>
          </div>

          {/* Konserwacja i optymalizacja */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-4">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Konserwacja i optymalizacja</h3>
            <p className="text-gray-400 text-sm">
              Czyszczenie sprzętu, optymalizacja systemu operacyjnego i instalacja oprogramowania. Przywracamy sprawność i wydajność komputerów.
            </p>
          </div>

          {/* Sieci i konfiguracja */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sieci i konfiguracja</h3>
            <p className="text-gray-400 text-sm">
              Projektowanie, konfiguracja i diagnostyka sieci LAN/Wi-Fi. Ustawienia routerów, punktów dostępowych i zabezpieczeń sieciowych.
            </p>
          </div>

          {/* Odzyskiwanie danych */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg mb-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Odzyskiwanie danych</h3>
            <p className="text-gray-400 text-sm">
              Profesjonalne odzyskiwanie danych z dysków HDD i SSD. Obsługujemy utratę danych z powodu awarii sprzętu lub przypadkowego usunięcia.
            </p>
          </div>
        </div>

        {/* Podsumowanie */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Wszystkie usługi realizujemy <strong>po wcześniejszej rezerwacji terminu</strong>. Dbamy o bezpieczeństwo Twojego sprzętu i gwarantujemy pełną satysfakcję z naszych prac.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UslugiPage;
