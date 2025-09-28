"use client";
import React from "react";

const MainSection = () => {
  return (
    <main className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* Lewa kolumna */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">
          Znajdź specjalistę IT w kilka minut - mikro-usługi, szybkie zlecenia, proste rozliczenia.
        </h2>

        {/* Panel wyszukiwania */}
        <input
          type="text"
          placeholder="Czego potrzebujesz?"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Sekcje przykładowe */}
        <div className="flex flex-wrap gap-2">
          {["Programowanie", "Grafika", "AI", "Administracja"].map((cat) => (
            <span key={cat} className="bg-gray-200 px-3 py-1 rounded">
              {cat}
            </span>
          ))}
        </div>

        {/* Polecane usługi */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Polecane usługi</h3>
          <ul className="space-y-1">
            {["Strona internetowa", "Logo i grafika", "AI Chatbot"].map((service) => (
              <li key={service} className="text-blue-600 hover:underline cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Środkowa kolumna */}
      <div className="md:col-span-1 space-y-6">
        <h3 className="text-xl font-semibold">Jak to działa?</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Klient publikuje zlecenie</li>
          <li>Wykonawca podejmuje zlecenie</li>
          <li>Rozliczanie i feedback po zakończeniu</li>
        </ol>
      </div>

      {/* Prawa kolumna */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Kategorie usług</h3>
        <ul className="space-y-1">
          {["Web", "Grafika", "AI", "Administracja"].map((cat) => (
            <li key={cat} className="text-gray-700 hover:text-blue-600 cursor-pointer">
              {cat}
            </li>
          ))}
        </ul>
        <button className="text-blue-600 hover:underline mt-2">Więcej kategorii</button>
      </div>

    </main>
  );
};

export default MainSection;