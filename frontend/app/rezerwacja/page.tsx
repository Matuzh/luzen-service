"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, AlertCircle } from '../../lib/icons';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const contactInfo = [
    { icon: Phone, label: 'Telefon', value: '+48 789 710 406', link: 'tel:+48789710406' },
    { icon: Mail, label: 'Email', value: 'kontakt@luzen.pl', link: 'mailto:kontakt@luzen.pl' },
    { icon: MapPin, label: 'Adres', value: 'ul. Topolowa 74, 43-227 Góra', link: null }
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Podaj imię i nazwisko';
    if (!formData.email.trim()) newErrors.email = 'Podaj email';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Niepoprawny format email';
    if (!formData.service) newErrors.service = 'Wybierz usługę';
    if (!formData.date) newErrors.date = 'Wybierz datę';
    if (!formData.time) newErrors.time = 'Wybierz godzinę';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // tutaj wysyłka do backendu
    console.log('Dane formularza:', formData);
    alert('Twoja rezerwacja została wysłana!');
    setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
    setErrors({});
  };

  // minimalna data: dzisiejszy dzień
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 overflow-hidden">
      {/* Animowane bloby */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Rezerwacja usług
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Wybierz usługę, termin i opisz swój problem. Skontaktujemy się w ciągu 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formularz rezerwacji */}
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Zamów usługę online</h2>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Imię i nazwisko *</label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Jan Kowalski"
                className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-500 ring-red-500' : 'border-white/20 ring-purple-500'
                }`}
              />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email *</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="email@przykład.pl"
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 ring-red-500' : 'border-white/20 ring-purple-500'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Telefon</label>
                <input 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="123-456-789"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Rodzaj usługi *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white focus:outline-none focus:ring-2 ${
                  errors.service ? 'border-red-500 ring-red-500' : 'border-white/20 ring-purple-500'
                }`}
              >
                <option value="" disabled>Wybierz usługę...</option>
                <option value="repair" className="text-black">Naprawa komputera</option>
                <option value="laptop" className="text-black">Serwis laptopa</option>
                <option value="data" className="text-black">Odzyskiwanie danych</option>
                <option value="virus" className="text-black">Usuwanie wirusów</option>
                <option value="remote" className="text-black">Pomoc zdalna</option>
                <option value="other" className="text-black">Inne</option>
              </select>
              {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Data rezerwacji *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  min={today}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white focus:outline-none focus:ring-2 ${
                    errors.date ? 'border-red-500 ring-red-500' : 'border-white/20 ring-purple-500'
                  }`}
                />
                {errors.date && <p className="text-xs text-red-400 mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Godzina *</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  min="09:00"
                  max="19:00"
                  step={900} // 15-minuty
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white focus:outline-none focus:ring-2 ${
                    errors.time ? 'border-red-500 ring-red-500' : 'border-white/20 ring-purple-500'
                  }`}
                />
                <p className="text-xs text-gray-400 mt-1">Dostępne godziny: 09:00 - 19:00</p>
                {errors.time && <p className="text-xs text-red-400 mt-1">{errors.time}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Wiadomość</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Opisz swój problem..."
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Zarezerwuj usługę
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              * Pola wymagane. Skontaktujemy się w ciągu 24h.
            </p>
          </form>

          {/* Kontakt i informacje */}
          <div className="space-y-8">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                  {info.link ? (
                    <a href={info.link} className="text-white hover:text-purple-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white">{info.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Odwiedź nas osobiście</h3>
              <p className="text-sm text-gray-400 mb-4">
                Nasz serwis znajduje się w Górze, łatwy dojazd komunikacją miejską.
              </p>
              <a href="https://www.google.com/maps" target="_blank" className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-block">
                Otwórz w mapach
              </a>
            </div>

            <div className="mt-6 bg-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-center gap-2">
                <AlertCircle className="w-5 h-5 text-purple-400" />
                Rezerwacja online
              </h3>
              <p className="text-sm text-gray-300">
                Nie posiadamy numeru awaryjnego. Wszystkie rezerwacje odbywają się online poprzez formularz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;
