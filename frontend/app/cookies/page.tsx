"use client";

import React from 'react';
import { Cookie, Shield, Eye, Settings, AlertCircle, CheckCircle } from '../../lib/icons';
import { CONTACT_INFO } from '../../lib/constants';
import Link from 'next/link';

const CookiesPolicyPage = () => {
  const cookieTypes = [
    {
      name: 'Niezbędne (Essential)',
      icon: Shield,
      color: 'green',
      required: true,
      examples: ['Identyfikator sesji', 'Preferencje językowe', 'Zgody na cookies'],
      duration: 'Do zakończenia sesji lub 12 miesięcy',
      purpose: 'Umożliwiają podstawowe funkcjonowanie strony, takie jak nawigacja i dostęp do bezpiecznych sekcji.'
    },
    {
      name: 'Analityczne (Analytics)',
      icon: Eye,
      color: 'blue',
      required: false,
      examples: ['Google Analytics', 'Dane statystyczne odwiedzin'],
      duration: 'Do 24 miesięcy',
      purpose: 'Pomagają zrozumieć, jak użytkownicy korzystają ze strony, aby móc ją ulepszyć.'
    },
    {
      name: 'Funkcjonalne (Functional)',
      icon: Settings,
      color: 'purple',
      required: false,
      examples: ['Preferencje użytkownika', 'Zapamiętane wybory'],
      duration: 'Do 12 miesięcy',
      purpose: 'Zapamiętują wybory użytkownika (np. język, region) dla lepszego doświadczenia.'
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm mb-4">
            Polityka Cookies
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Polityka
            <span className="block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Plików Cookies
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Informacje o plikach cookies używanych na stronie LuzeN
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Ostatnia aktualizacja: <strong>20 października 2025 r.</strong>
          </p>
        </div>

        {/* What are Cookies */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Czym są pliki cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Pliki cookies to małe pliki tekstowe zapisywane na Twoim urządzeniu (komputer, tablet, smartfon) podczas przeglądania stron internetowych. Pozwalają one na zapamiętanie Twoich preferencji i ułatwiają korzystanie z serwisu.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Types */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Rodzaje używanych plików cookies</h2>
          <div className="grid gap-6">
            {cookieTypes.map((type, idx) => {
              const Icon = type.icon;
              const colorClasses = {
                green: 'from-green-500/10 to-emerald-500/10 border-green-500/30',
                blue: 'from-blue-500/10 to-cyan-500/10 border-blue-500/30',
                purple: 'from-purple-500/10 to-violet-500/10 border-purple-500/30'
              };

              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-r ${colorClasses[type.color as keyof typeof colorClasses]} backdrop-blur-sm border rounded-2xl p-6`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{type.name}</h3>
                        <p className="text-sm text-gray-400">Czas przechowywania: {type.duration}</p>
                      </div>
                    </div>
                    {type.required ? (
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-semibold rounded-full">
                        Wymagane
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs font-semibold rounded-full">
                        Opcjonalne
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4">{type.purpose}</p>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Przykłady:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                          <span className="text-purple-400">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How we use cookies */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Jak używamy plików cookies?</h2>
          <div className="space-y-4 text-gray-300">
            <p>Nasza strona wykorzystuje pliki cookies w celu:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Zapewnienia prawidłowego działania strony internetowej</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Zapamiętania Twoich preferencji (np. język, ustawienia)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Analizy ruchu na stronie i poprawy jej funkcjonalności</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Dostosowania treści do Twoich potrzeb</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Managing cookies */}
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Settings className="w-8 h-8 text-purple-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Zarządzanie plikami cookies</h2>
              <p className="text-gray-300 mb-4">
                Możesz w dowolnym momencie zmienić ustawienia dotyczące plików cookies w swojej przeglądarce. Pamiętaj jednak, że wyłączenie niektórych cookies może wpłynąć na funkcjonalność strony.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { browser: 'Google Chrome', link: 'https://support.google.com/chrome/answer/95647' },
              { browser: 'Mozilla Firefox', link: 'https://support.mozilla.org/pl/kb/ciasteczka' },
              { browser: 'Safari', link: 'https://support.apple.com/pl-pl/guide/safari/sfri11471/mac' },
              { browser: 'Microsoft Edge', link: 'https://support.microsoft.com/pl-pl/windows/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi' }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all"
              >
                <div className="font-semibold text-white mb-1">{item.browser}</div>
                <div className="text-sm text-gray-400">Instrukcja zarządzania cookies</div>
              </a>
            ))}
          </div>
        </div>

        {/* Third-party cookies */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            Cookies firm trzecich
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            Nasza strona może korzystać z usług firm trzecich (np. Google Analytics), które również używają plików cookies. Te firmy mogą zbierać informacje o Twoich wizytach na naszej stronie oraz innych stronach internetowych.
          </p>
          <p className="text-gray-300 text-sm">
            Więcej informacji o zasadach prywatności tych firm znajdziesz na ich stronach internetowych.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Masz pytania dotyczące cookies?
          </h3>
          <p className="text-gray-300 mb-6">
            Jeśli masz pytania dotyczące naszej polityki cookies, skontaktuj się z nami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${CONTACT_INFO.email}`}>
              <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Wyślij email
              </button>
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link href="/">
            <button className="text-gray-400 hover:text-white transition-colors text-sm">
              ← Powrót do strony głównej
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicyPage;