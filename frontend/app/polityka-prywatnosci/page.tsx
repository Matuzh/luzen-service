"use client";

import React, { useState } from 'react';
import { Shield, Mail, Phone, MapPin, ChevronDown, ChevronUp, FileText, Lock, Eye, UserCheck, Clock, AlertCircle } from '../../lib/icons';
import { CONTACT_INFO } from '../../lib/constants';
import Link from 'next/link';

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
}

const PrivacyPolicyPage = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['general']);

  const toggleSection = (id: string) => {
    setExpandedSections(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const sections: Section[] = [
    {
      id: 'general',
      title: '1. Informacje ogólne',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            Niniejsze Zasady Ochrony Prywatności określają sposób, w jaki firma <strong>Mateusz Szuper – LuzeN</strong> przetwarza i chroni dane osobowe swoich klientów oraz użytkowników usług.
          </p>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-2">Administratorem danych osobowych jest:</h4>
            <p className="text-gray-300">
              <strong>Mateusz Szuper – LuzeN</strong><br />
              z siedzibą w Górze<br />
              E-mail: {CONTACT_INFO.email}
            </p>
          </div>
          <p>
            Administrator dokłada wszelkich starań, aby zapewnić właściwą ochronę danych osobowych, w szczególności zgodnie z obowiązującymi przepisami prawa, w tym:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO)</li>
            <li>Ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych</li>
            <li>Innymi obowiązującymi przepisami prawa krajowego i unijnego w zakresie ochrony danych</li>
          </ul>
        </div>
      )
    },
    {
      id: 'administrator',
      title: '2. Administrator danych osobowych',
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p>Administratorem danych osobowych jest:</p>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-white/10">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Mateusz Szuper – LuzeN</div>
                  <div className="text-gray-400 text-sm">Właściciel serwisu</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white">{CONTACT_INFO.address.street}</div>
                  <div className="text-gray-400 text-sm">{CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-purple-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white hover:text-purple-400 transition-colors">
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
          <p>
            Administrator odpowiada za prawidłowe i bezpieczne przetwarzanie danych osobowych zgodnie z obowiązującymi przepisami prawa, w tym z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
          </p>
        </div>
      )
    },
    {
      id: 'scope',
      title: '3. Zakres i cel przetwarzania danych',
      icon: Eye,
      content: (
        <div className="space-y-4">
          <p>Firma Mateusz Szuper – LuzeN przetwarza dane osobowe w następujących celach:</p>
          <div className="grid gap-3">
            {[
              {
                title: 'Realizacja usług serwisowych',
                desc: 'Naprawa komputerów, diagnostyka, montaż sprzętu oraz inne czynności związane z wykonywaną usługą'
              },
              {
                title: 'Kontakt z klientem',
                desc: 'W sprawie zlecenia, wyceny, terminu realizacji lub odbioru sprzętu'
              },
              {
                title: 'Wystawienie faktur',
                desc: 'Prowadzenie dokumentacji księgowej, dane niezbędne do rozliczeń podatkowych i finansowych'
              },
              {
                title: 'Dochodzenie roszczeń',
                desc: 'Obrona przed roszczeniami w razie ewentualnych sporów związanych z realizacją usług'
              },
              {
                title: 'Bezpieczeństwo danych',
                desc: 'Zapewnienie bezpieczeństwa danych przekazanych w trakcie naprawy'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <h5 className="font-semibold text-white mb-2">Zakres przetwarzanych danych może obejmować:</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>Imię i nazwisko</li>
              <li>Adres zamieszkania lub siedziby firmy</li>
              <li>Numer telefonu</li>
              <li>Adres e-mail</li>
              <li>Dane sprzętu komputerowego (numer seryjny, model, konfiguracja)</li>
              <li>Dane niezbędne do rozliczeń finansowych i księgowych</li>
            </ul>
          </div>
          <p className="text-sm text-gray-400">
            Dane są przetwarzane wyłącznie w celu niezbędnym do świadczenia usług przez firmę LuzeN i nie są wykorzystywane w innych celach bez zgody klienta.
          </p>
        </div>
      )
    },
    {
      id: 'legal-basis',
      title: '4. Podstawa prawna przetwarzania danych',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>Dane osobowe przetwarzane są przez firmę Mateusz Szuper – LuzeN na podstawie przepisów RODO, w szczególności:</p>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Art. 6 ust. 1 lit. b RODO</h5>
              <p className="text-gray-300 text-sm">
                Przetwarzanie jest niezbędne do wykonania umowy, której stroną jest osoba, której dane dotyczą (np. realizacja zlecenia naprawy lub diagnostyki sprzętu).
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Art. 6 ust. 1 lit. c RODO</h5>
              <p className="text-gray-300 text-sm">
                Przetwarzanie jest niezbędne w celu wypełnienia obowiązku prawnego ciążącego na administratorze (np. wystawienie faktury, prowadzenie dokumentacji księgowej).
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Art. 6 ust. 1 lit. f RODO</h5>
              <p className="text-gray-300 text-sm">
                Przetwarzanie jest niezbędne w celu realizacji prawnie uzasadnionych interesów administratora, takich jak zabezpieczenie roszczeń, kontakt z klientem oraz zapewnienie bezpieczeństwa danych.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Dane osobowe są przetwarzane wyłącznie w zakresie niezbędnym do realizacji wskazanych celów, z zachowaniem zasad minimalizacji danych i bezpieczeństwa informacji.
          </p>
        </div>
      )
    },
    {
      id: 'storage',
      title: '5. Przechowywanie danych',
      icon: Clock,
      content: (
        <div className="space-y-4">
          <p>Dane osobowe klientów i użytkowników usług firmy Mateusz Szuper – LuzeN będą przechowywane zgodnie z zasadami minimalizacji danych i bezpieczeństwa informacji:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
              <Clock className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-white mb-1">Przez czas trwania współpracy</h5>
                <p className="text-gray-400 text-sm">
                  W celu realizacji usług serwisowych, kontaktu z klientem oraz obsługi zleceń
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
              <FileText className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-white mb-1">Po zakończeniu współpracy</h5>
                <p className="text-gray-400 text-sm">
                  Przez okres 5 lat dla dokumentacji księgowej, zgodnie z obowiązkami podatkowymi i rachunkowymi
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
              <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-white mb-1">Do momentu przedawnienia roszczeń</h5>
                <p className="text-gray-400 text-sm">
                  W celu zabezpieczenia praw administratora w sytuacjach spornych lub reklamacyjnych
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Po upływie wskazanych okresów dane osobowe są bezpiecznie usuwane lub anonimizowane, aby uniemożliwić ich dalsze wykorzystanie.
          </p>
        </div>
      )
    },
    {
      id: 'sharing',
      title: '6. Udostępnianie danych',
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p>Dane osobowe klientów mogą być przekazywane wyłącznie podmiotom niezbędnym do prawidłowego świadczenia usług lub wypełnienia obowiązków prawnych, w tym:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span className="text-gray-300">Podmiotom świadczącym usługi księgowe, prawne lub serwisowe na rzecz firmy LuzeN</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span className="text-gray-300">Dostawcom usług IT, takim jak hosting, poczta elektroniczna czy systemy wspierające działalność firmy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span className="text-gray-300">Instytucjom uprawnionym na mocy prawa, np. organom podatkowym i innym organom państwowym</span>
            </li>
          </ul>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <strong>Dane osobowe nie są przekazywane poza obszar Europejskiego Obszaru Gospodarczego (EOG)</strong>, chyba że zostanie zapewniony odpowiedni poziom ochrony danych zgodny z przepisami RODO.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'rights',
      title: '7. Prawa osoby, której dane dotyczą',
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p>Każda osoba, której dane osobowe są przetwarzane przez firmę Mateusz Szuper – LuzeN, posiada następujące prawa:</p>
          <div className="grid gap-3">
            {[
              { title: 'Prawo dostępu do danych', desc: 'Możliwość uzyskania informacji, jakie dane są przetwarzane' },
              { title: 'Prawo do sprostowania danych', desc: 'Poprawienie nieprawidłowych lub niepełnych danych' },
              { title: 'Prawo do usunięcia danych', desc: 'Żądanie usunięcia danych w określonych przypadkach ("prawo do bycia zapomnianym")' },
              { title: 'Prawo do ograniczenia przetwarzania', desc: 'Czasowe wstrzymanie przetwarzania danych w określonych sytuacjach' },
              { title: 'Prawo do przenoszenia danych', desc: 'Otrzymania danych w ustrukturyzowanym formacie i ich przekazania innemu administratorowi' },
              { title: 'Prawo wniesienia sprzeciwu', desc: 'Możliwość sprzeciwu wobec przetwarzania danych w celach marketingowych' },
              { title: 'Prawo do cofnięcia zgody', desc: 'W dowolnym momencie, jeżeli przetwarzanie odbywa się na podstawie zgody' }
            ].map((right, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all">
                <h5 className="font-semibold text-white mb-1">{right.title}</h5>
                <p className="text-gray-400 text-sm">{right.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <h5 className="font-semibold text-white mb-2">Jak skorzystać z praw?</h5>
            <p className="text-gray-300 text-sm mb-3">
              W celu realizacji powyższych praw należy kontaktować się z Administratorem:
            </p>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {CONTACT_INFO.phoneFormatted}
              </a>
            </div>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <AlertCircle className="w-4 h-4 inline mr-2 text-red-400" />
              Każda osoba ma również prawo wniesienia skargi do <strong>Prezesa Urzędu Ochrony Danych Osobowych (UODO)</strong>, jeśli uzna, że przetwarzanie jej danych narusza przepisy prawa.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'security',
      title: '8. Zabezpieczenie danych',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>Firma Mateusz Szuper – LuzeN stosuje odpowiednie środki techniczne i organizacyjne, aby zapewnić bezpieczeństwo przetwarzanych danych osobowych:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: Lock, title: 'Szyfrowanie danych i haseł', desc: 'Zabezpieczenie informacji przechowywanych w systemach' },
              { icon: Eye, title: 'Kontrola dostępu', desc: 'Ograniczenie dostępu tylko dla upoważnionych osób' },
              { icon: Shield, title: 'Kopie zapasowe', desc: 'Regularne wykonywanie backupów w celu minimalizacji ryzyka utraty danych' },
              { icon: Lock, title: 'Ochrona danych klientów', desc: 'Bezpieczne przechowywanie danych na nośnikach serwisowych' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1 text-sm">{item.title}</h5>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'client-data',
      title: '9. Zasady dotyczące danych na sprzęcie klientów',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>W ramach świadczenia usług serwisowych firma może mieć dostęp do danych znajdujących się na urządzeniach klientów:</p>
          <div className="space-y-3">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                Dane te <strong>nie są kopiowane ani przetwarzane</strong>, chyba że jest to niezbędne do wykonania usługi (np. odzyskiwanie danych, diagnostyka).
              </p>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                Po zakończeniu naprawy wszelkie dane tymczasowo zapisane w systemach serwisowych są <strong>niezwłocznie usuwane</strong>.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Firma LuzeN stosuje wszystkie niezbędne procedury, aby chronić dane klientów przed nieuprawnionym dostępem i zapewnić pełne bezpieczeństwo informacji podczas wykonywania usług serwisowych.
          </p>
        </div>
      )
    },
    {
      id: 'changes',
      title: '10. Zmiany w zasadach prywatności',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>Firma Mateusz Szuper – LuzeN zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności.</p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-white mb-2">O wszelkich zmianach użytkownicy będą informowani poprzez:</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                Publikację zaktualizowanej wersji dokumentu na stronie internetowej firmy
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                Lub w inny przyjęty i dostępny sposób
              </li>
            </ul>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <p className="text-white text-sm">
              <strong>Data ostatniej aktualizacji:</strong> 20 października 2025 r.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm mb-4">
            Polityka Prywatności
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Zasady Ochrony
            <span className="block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Prywatności
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Firma Mateusz Szuper – LuzeN z siedzibą w Górze
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Data wejścia w życie: <strong>20 października 2025 r.</strong>
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-400" />
            Spis treści
          </h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  toggleSection(section.id);
                  const element = document.getElementById(`section-${section.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-left text-sm text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => {
            const isExpanded = expandedSections.includes(section.id);
            const Icon = section.icon;

            return (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden scroll-mt-24"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white text-left">
                      {section.title}
                    </h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Masz pytania dotyczące prywatności?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            W sprawach związanych z ochroną danych osobowych prosimy o kontakt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${CONTACT_INFO.email}`}>
              <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Wyślij email
              </button>
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`}>
              <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Zadzwoń
              </button>
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link href="/">
            <button className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 mx-auto">
              ← Powrót do strony głównej
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;