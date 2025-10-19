'use client';
import React from 'react';

const CennikPage = () => {
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
            Cennik Usług
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Poniżej znajdziesz szczegółowy cennik naszych usług serwisowych. Wszystkie prace wykonywane są profesjonalnie, a wycena może zostać dopasowana indywidualnie po diagnozie sprzętu.
          </p>
        </div>

        {/* Tabela cennika */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Naprawa sprzętu */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">Naprawa sprzętu</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Diagnostyka sprzętu – 80 zł</li>
              <li>Naprawa laptopów/PC – od 150 zł</li>
              <li>Wymiana podzespołów (RAM, dysk, GPU) – od 100 zł</li>
              <li>Naprawa urządzeń peryferyjnych – od 80 zł</li>
            </ul>
          </div>

          {/* Konserwacja i optymalizacja */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">Konserwacja i optymalizacja</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Czyszczenie i konserwacja sprzętu – od 100 zł</li>
              <li>Optymalizacja systemu operacyjnego – od 80 zł</li>
              <li>Instalacja i konfiguracja oprogramowania – od 50 zł</li>
              <li>Modernizacja sprzętu – indywidualna wycena</li>
            </ul>
          </div>

          {/* Sieci i konfiguracja */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">Sieci i konfiguracja</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Projektowanie sieci LAN/Wi-Fi – od 150 zł</li>
              <li>Konfiguracja routerów i urządzeń peryferyjnych – od 80 zł</li>
              <li>Diagnostyka połączeń sieciowych – od 50 zł</li>
            </ul>
          </div>

          {/* Odzyskiwanie danych i doradztwo */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">Odzyskiwanie danych i doradztwo</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Odzyskiwanie danych z HDD/SSD – od 150 zł</li>
              <li>Odzyskiwanie danych logicznych – od 100 zł</li>
              <li>Doradztwo techniczne i zakup sprzętu – indywidualnie</li>
            </ul>
          </div>
        </div>

        {/* Uwagi */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-gray-300 space-y-4">
          <h3 className="text-xl font-semibold mb-2">Uwagi:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Podane ceny są orientacyjne i mogą ulec zmianie po indywidualnej diagnozie sprzętu.</li>
            <li>Wszystkie prace wykonywane są wyłącznie po akceptacji kosztorysu przez Klienta.</li>
            <li>Nie obejmują kosztów części zamiennych, chyba że zaznaczono inaczej w kosztorysie.</li>
            <li>W przypadku sprzętu dostarczonego z własnymi częściami Klienta, montaż odbywa się na jego odpowiedzialność.</li>
            <li>Usługi realizujemy wyłącznie po wcześniejszej rezerwacji terminu.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CennikPage;
