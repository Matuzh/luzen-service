"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertCircle } from '../lib/icons';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    { icon: Phone, label: 'Telefon', value: '+48 789 710 406', link: 'tel:+48789710406' },
    { icon: Mail, label: 'Email', value: 'kontakt@luzen.pl', link: 'mailto:kontakt@luzen.pl' },
    { icon: MapPin, label: 'Adres', value: 'ul. Topolowa 74, 43-227 Góra', link: null },
    { icon: Clock, label: 'Godziny', value: 'Pon-Pt: 9:00-18:00, Sob: 10:00-14:00', link: null }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Masz pytania? Potrzebujesz pomocy? Jesteśmy dostępni dla Ciebie!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Wyślij zapytanie</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Imię i nazwisko *</label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500"
                  placeholder="Jan Kowalski"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500"
                    placeholder="email@przykład.pl"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Telefon</label>
                  <input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500"
                    placeholder="123-456-789"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Rodzaj usługi</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white"
                >
                  <option value="">Wybierz usługę...</option>
                  <option value="repair">Naprawa komputera</option>
                  <option value="laptop">Serwis laptopa</option>
                  <option value="data">Odzyskiwanie danych</option>
                  <option value="virus">Usuwanie wirusów</option>
                  <option value="remote">Pomoc zdalna</option>
                  <option value="other">Inne</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Wiadomość *</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 h-32"
                  placeholder="Opisz swój problem..."
                />
              </div>
              
              <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Wyślij wiadomość
              </button>
              
              <p className="text-xs text-gray-400 text-center">
                * Pola wymagane. Odpowiadamy w ciągu 24h.
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
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
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Odwiedź nas osobiście</h3>
              <p className="text-sm text-gray-400 mb-4">
                Nasz serwis znajduje się w Górze, łatwy dojazd komunikacją miejską.
              </p>
              <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Otwórz w mapach
              </button>
            </div>
            
            {/* Emergency CTA */}
            <div className="mt-6 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                Awaria? Potrzebujesz natychmiastowej pomocy?
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Zadzwoń na nasz numer alarmowy - jesteśmy dostępni 24/7
              </p>
              <a href="tel:+48123456789" className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors">
                <Phone className="w-5 h-5" />
                Telefon awaryjny: 123-456-789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;