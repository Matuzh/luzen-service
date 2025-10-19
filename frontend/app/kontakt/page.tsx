"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Calendar, FileText } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    contactMethod: "email",
    message: "",
  });
  const [submitted, setSubmitted] = useState<null | { ref: string }>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // frontend-only: show confirmation and reset form
    const ref = `R-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setSubmitted({ ref });
    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      contactMethod: "email",
      message: "",
    });
    // In production: send to API / e-mail / webhook
    console.log("Rezerwacja wysłana", { ref, ...form });
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden text-white">
      {/* Animowane bloby (zgodnie z resztą serwisu) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Nagłówek */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Skontaktuj się z nami w sprawie naprawy, diagnostyki lub odzyskiwania danych. 
            Pracujemy na zasadzie rezerwacji — zaproponuj termin, a potwierdzimy go mailowo lub telefonicznie.
          </p>
        </div>

        {/* Główna siatka: dane + formularze */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Lewy: dane kontaktowe i krótkie info */}
          <div className="space-y-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-inner">
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Telefon</h3>
                <a className="text-gray-400 text-sm block hover:text-white" href="tel:+48600123456">+48 789 710 406</a>
                <p className="text-gray-400 text-xs mt-1">Możliwość umówienia terminu telefonicznie — najlepiej podaj proponowany termin.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">E-mail</h3>
                <a className="text-gray-400 text-sm block hover:text-white" href="mailto:kontakt@twojserwis.pl">kontakt@luzen.pl</a>
                <p className="text-gray-400 text-xs mt-1">W wiadomości podaj krótki opis problemu i proponowany termin — odpowiadamy w ciągu 24–48h.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Adres (do odbioru / wysyłki)</h3>
                <p className="text-gray-400 text-sm">ul. Topolowa 74, 43-227 Góra</p>
                <p className="text-gray-400 text-xs mt-1">Sprzęt przyjmujemy wyłącznie po wcześniejszej rezerwacji lub umówionym odbiorze.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-sm text-gray-300 space-y-2">
              <p><strong>Jak działamy (krótko):</strong></p>
              <ol className="list-decimal list-inside text-gray-400 text-sm space-y-1">
                <li>Wyślij rezerwację formularzem / e-mailem / telefonicznie.</li>
                <li>Potwierdzimy termin i przygotujemy dowód przyjęcia z numerem zlecenia.</li>
                <li>Po wykonaniu usługi odbierasz sprzęt lub umawiamy wysyłkę.</li>
              </ol>
              <p className="text-xs text-gray-400 mt-2">
                Uwaga: nie prowadzimy stałych godzin otwarcia — działamy na rezerwacje. Informacje o polityce prywatności i regulaminie dostępne są na stronie.
              </p>
              <div className="flex gap-3 mt-3">
                <a href="/regulamin" className="px-3 py-2 bg-white/6 rounded-lg text-sm hover:bg-white/10">Regulamin</a>
                <a href="/polityka-prywatnosci" className="px-3 py-2 bg-white/6 rounded-lg text-sm hover:bg-white/10">Polityka prywatności</a>
              </div>
            </div>
          </div>

          {/* Prawy: rezerwacja + szybki kontakt */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-inner">
            <h3 className="text-2xl font-semibold mb-4">Umów termin / Rezerwacja</h3>

            {submitted ? (
              <div className="p-4 bg-emerald-900/40 rounded-lg border border-emerald-700">
                <p className="font-semibold text-white">Twoja rezerwacja została przyjęta.</p>
                <p className="text-gray-300 text-sm mt-1">Numer zgłoszenia: <span className="font-medium">{submitted.ref}</span></p>
                <p className="text-gray-300 text-sm mt-2">Potwierdzenie wysłane na podany adres e-mail lub skontaktujemy się telefonicznie.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Imię i nazwisko</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">E-mail</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="adres@email.pl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Telefon</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="+48 600 123 456"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Preferowana data</label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Preferowana godzina (przybliżona)</label>
                    <input
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">Usługa / krótki opis</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="">Wybierz usługę (opcjonalnie)</option>
                    <option value="diagnostyka">Diagnostyka</option>
                    <option value="naprawa">Naprawa (sprzęt/soft)</option>
                    <option value="odzyskiwanie-danych">Odzyskiwanie danych</option>
                    <option value="konserwacja">Konserwacja / czyszczenie</option>
                    <option value="doradztwo">Doradztwo / zakup sprzętu</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">Preferowana forma kontaktu</label>
                  <select
                    name="contactMethod"
                    value={form.contactMethod}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="email">E-mail</option>
                    <option value="phone">Telefon</option>
                    <option value="sms">SMS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">Szczegóły / opis problemu</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Opisz objawy, model sprzętu, ewentualne wcześniejsze naprawy..."
                  />
                </div>

                <div className="flex gap-3 items-center">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Wyślij rezerwację
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        date: "",
                        time: "",
                        service: "",
                        contactMethod: "email",
                        message: "",
                      })
                    }
                    className="px-4 py-2 bg-white/6 rounded-lg hover:bg-white/10 transition text-sm"
                  >
                    Wyczyść
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Po otrzymaniu zgłoszenia potwierdzimy termin w ciągu 24–48 godzin. Rezerwacja zostanie zarejestrowana i otrzymasz numer zlecenia.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Mapa + dodatkowe sekcje */}
        <div className="space-y-8">
          {/* Mapa */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 shadow-inner">
            <h3 className="text-2xl font-semibold mb-3">Lokalizacja / Mapa</h3>
            <p className="text-gray-300 text-sm mb-4">Adres do odbioru/wysyłki: ul. Topolowa 74, 43-227 Góra. Odbiory tylko po wcześniejszej rezerwacji.</p>
            <div className="rounded-xl overflow-hidden border border-white/6">
              <iframe
                title="Mapa serwisu LuzeN"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d912.633264194069!2d19.09710645751427!3d49.9862832080569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716bd803ac38a91%3A0x9647475484482827!2sLuzeN%20-%20Serwis%20Komputerowy%20%7C%20G%C3%B3ra%2C%20Mied%C5%BAna!5e1!3m2!1spl!2spl!4v1760878088807!5m2!1spl!2spl"
                width="100%"
                height="420"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>

          {/* Co naprawiamy / FAQ */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-inner">
              <h4 className="text-xl font-semibold mb-3">Zakres usług</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Naprawa laptopów i komputerów stacjonarnych</li>
                <li>Diagnostyka systemowa i sprzętowa</li>
                <li>Odzyskiwanie danych z HDD / SSD / pendrive</li>
                <li>Konserwacja, czyszczenie i modernizacje</li>
                <li>Instalacja i konfiguracja systemów oraz oprogramowania</li>
                <li>Serwis sieci domowych i małych biur (Wi-Fi, routery)</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-inner">
              <h4 className="text-xl font-semibold mb-3">FAQ – ważne informacje</h4>
              <div className="text-gray-300 space-y-2 text-sm">
                <p><strong>Dowód przyjęcia:</strong> Sprzęt wydajemy tylko po okazaniu dowodu przyjęcia z numerem zlecenia lub po potwierdzeniu tożsamości/upoważnienia.</p>
                <p><strong>Dane i kopie zapasowe:</strong> Serwis nie gwarantuje przywrócenia utraconych danych, chyba że zamówiono usługę odzyskiwania danych. Zrób kopię zapasową przed przyjęciem sprzętu, jeśli to możliwe.</p>
                <p><strong>Części dostarczone przez klienta:</strong> Montujemy części dostarczone przez klienta na jego odpowiedzialność.</p>
                <p><strong>Opłata magazynowa:</strong> Nieodebrany sprzęt może podlegać opłacie magazynowej zgodnie z regulaminem — odbiory organizujemy po wcześniejszym kontakcie.</p>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="/regulamin" className="px-3 py-2 bg-white/6 rounded-lg hover:bg-white/10 text-sm">Przeczytaj regulamin</a>
                <a href="/polityka-prywatnosci" className="px-3 py-2 bg-white/6 rounded-lg hover:bg-white/10 text-sm">Polityka prywatności</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
