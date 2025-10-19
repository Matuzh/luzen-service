"use client";

import React from "react";

const sections = [
  {
    id: "administrator",
    title: "Administrator danych",
    content:
      "Administratorem Twoich danych osobowych jest LuzeN – serwis komputerowy działający na terenie Polski. Wszelkie pytania dotyczące danych możesz kierować na adres kontakt@luzen.pl.",
  },
  {
    id: "zakres",
    title: "Zakres zbieranych danych",
    content:
      "Zbieramy dane niezbędne do realizacji usług serwisowych, takie jak imię, nazwisko, numer telefonu, adres e-mail, opis problemu sprzętu oraz informacje podane podczas rezerwacji wizyty.",
  },
  {
    id: "cel",
    title: "Cel przetwarzania danych",
    content:
      "Twoje dane wykorzystujemy wyłącznie w celu realizacji usług serwisowych, kontaktu w sprawie rezerwacji wizyty oraz poprawy jakości obsługi.",
  },
  {
    id: "udostepnianie",
    title: "Udostępnianie danych",
    content:
      "Nie udostępniamy danych osobom trzecim poza sytuacjami przewidzianymi prawem, np. w celu realizacji zleceń serwisowych przez partnerów lub w przypadku żądań organów ścigania.",
  },
  {
    id: "okres",
    title: "Okres przechowywania danych",
    content:
      "Dane przechowujemy tylko tak długo, jak jest to niezbędne do realizacji usług oraz wypełnienia obowiązków prawnych.",
  },
  {
    id: "prawa",
    title: "Twoje prawa",
    content:
      "Masz prawo dostępu do swoich danych, ich poprawiania, usunięcia oraz ograniczenia przetwarzania. Możesz także wnieść sprzeciw wobec przetwarzania danych oraz złożyć skargę do organu nadzorczego.",
  },
  {
    id: "kontakt",
    title: "Kontakt w sprawach prywatności",
    content:
      'W razie pytań lub wątpliwości dotyczących przetwarzania danych osobowych prosimy o kontakt pod adresem: <a href="mailto:kontakt@luzen.pl" class="text-violet-400 underline">kontakt@luzen.pl</a>.',
  },
];

const PrivacyPolicyPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden text-white">
      {/* Animowane bloby */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Polityka Prywatności</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            W LuzeN dbamy o prywatność naszych klientów. Poniżej znajdziesz informacje, jak zbieramy, przetwarzamy i chronimy Twoje dane.
          </p>
        </div>

        {/* Sekcje */}
        <div className="grid gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p
                className="text-gray-400 text-sm"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}

          {/* PDF */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <iframe
              src="/polityka-prywatnosci.pdf"
              className="w-full h-[80vh]"
              title="Polityka Prywatności PDF"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
