"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { CheckCircle } from "../lib/icons";

const PricingSection = () => {
  const packages = [
    {
      name: "Diagnoza i naprawa",
      price: "od 80 zł",
      period: "za usługę",
      description: "Najczęściej wybierany pakiet serwisowy",
      features: [
        "Pełna diagnostyka sprzętu i oprogramowania",
        "Naprawa usterek sprzętowych i systemowych",
        "Czyszczenie i konserwacja komputera",
        "Wymiana dysków, pamięci RAM, zasilaczy itp.",
        "Aktualizacje systemu i oprogramowania",
      ],
      highlighted: true,
    },
    {
      name: "Instalacja systemów i oprogramowania",
      price: "od 150 zł",
      period: "za instalację",
      description: "Kompleksowa konfiguracja systemu i programów",
      features: [
        "Instalacja systemu Windows / Linux",
        "Konfiguracja sterowników i zabezpieczeń",
        "Instalacja pakietów biurowych i narzędzi",
        "Ustawienia prywatności i wydajności",
        "Optymalizacja działania systemu",
      ],
      highlighted: false,
    },
    {
      name: "Obsługa firm i stała opieka IT",
      price: "Indywidualna wycena",
      period: "",
      description: "Dla małych firm — wkrótce dostępne",
      features: [
        "Zdalna pomoc techniczna i doradztwo IT",
        "Monitoring komputerów i systemów",
        "Tworzenie kopii zapasowych danych",
        "Audyt i zabezpieczenie sieci firmowej",
        "Priorytetowy czas reakcji",
        "Faktury VAT (w przygotowaniu)",
      ],
      highlighted: false,
    },
  ];

  useEffect(() => {
  // Upewnij się, że kod wykona się dopiero po załadowaniu przeglądarki
  const timeout = setTimeout(() => {
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({});
      }
    } catch (e) {
      console.warn("AdSense init failed:", e);
    }
  }, 1000); // małe opóźnienie daje czas na załadowanie skryptu

  return () => clearTimeout(timeout);
}, []);

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nagłówek */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cennik usług serwisowych
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Uczciwe i przejrzyste ceny – wycena przed rozpoczęciem naprawy.
          </p>
        </div>

        {/* Karty */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                pkg.highlighted
                  ? "bg-gradient-to-br from-violet-600/90 via-purple-700/80 to-indigo-700/80 text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] border border-violet-500/40"
                  : "bg-white/5 backdrop-blur-lg border border-white/10 text-white hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/10 to-violet-600/10 blur-2xl -z-10"></div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-300/90">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{pkg.price}</span>
                {pkg.period && (
                  <span className="text-sm opacity-80"> {pkg.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/rezerwacja">
                <button
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    pkg.highlighted
                      ? "bg-white text-purple-700 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-[1.02] animate-[pulse_3s_infinite]"
                      : "bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  }`}
                >
                  Umów wizytę
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* AdSense */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-3xl bg-white/5 border border-white/10 rounded-xl py-6 px-4 text-gray-400 text-sm">
            <ins
              className="adsbygoogle"
              style={{ display: "block", textAlign: "center" }}
              data-ad-client="ca-pub-4664379142833849"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
