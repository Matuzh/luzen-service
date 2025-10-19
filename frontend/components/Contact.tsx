"use client";

import React, { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin, Info, CalendarCheck } from '../lib/icons';

type FormField = 'name' | 'email' | 'phone' | 'service' | 'message';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactInfoItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  link?: string | null;
}

interface QuickTip {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});

  const contactInfo: ContactInfoItem[] = [
    { icon: Mail, label: 'Email', value: 'kontakt@luzen.pl', link: 'mailto:kontakt@luzen.pl' },
    { icon: MapPin, label: 'Lokalizacja', value: 'Góra, woj. Śląskie (działalność domowa)', link: 'https://www.google.com/maps/search/?api=1&query=Góra,+Śląskie' },
    { icon: CalendarCheck, label: 'Rezerwacja', value: 'Umów wizytę online lub telefonicznie' }
  ];

  const quickTips: QuickTip[] = [
    { icon: Info, text: 'Regularnie wykonuj kopie zapasowe danych – unikniesz utraty plików.' },
    { icon: Info, text: 'Nie wyłączaj sprzętu podczas aktualizacji – może to powodować problemy.' },
    { icon: Info, text: 'Skontaktuj się z nami przed próbą samodzielnej naprawy poważnych usterek.' }
  ];

  const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

  const validateField = (field: FormField, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'Imię i nazwisko jest wymagane';
      case 'email':
        if (!value.trim()) return 'Email jest wymagany';
        return validateEmail(value) ? '' : 'Niepoprawny format email';
      case 'message':
        return value.trim() ? '' : 'Wiadomość jest wymagana';
      case 'service':
        return value ? '' : 'Wybór kategorii jest wymagany';
      default:
        return '';
    }
  };

  const handleChange = (field: FormField) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleBlur = (field: FormField) => (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const error = validateField(field, formData[field]);
    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Partial<Record<FormField, string>> = {};
    (['name', 'email', 'message', 'service'] as FormField[]).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Tutaj dodaj obsługę wysyłki formularza np. fetch/axios
      console.log('Formularz poprawny', formData);
      alert('Wiadomość została wysłana!');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Masz pytania lub potrzebujesz pomocy? Wybierz wygodny dla siebie sposób kontaktu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formularz kontaktowy */}
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-10 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 space-y-5">
            <h3 className="text-2xl font-bold text-white mb-6">Wyślij zapytanie</h3>

            {/* Imię i nazwisko */}
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="Twoje imię i nazwisko *"
                className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                  errors.name ? 'border-red-500' : 'border-white/20'
                }`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email i telefon */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Adres email *"
                  className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  placeholder="Telefon (opcjonalnie)"
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Wybór usługi */}
            <div>
              <select
                value={formData.service}
                onChange={handleChange('service')}
                onBlur={handleBlur('service')}
                className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border rounded-xl text-white focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                  errors.service ? 'border-red-500' : 'border-white/20'
                }`}
              >
                <option value="" disabled>Wybierz usługę...</option>
                <option value="repair">Naprawa komputera</option>
                <option value="laptop">Serwis laptopa</option>
                <option value="data">Odzyskiwanie danych</option>
                <option value="virus">Usuwanie wirusów</option>
                <option value="remote">Pomoc zdalna</option>
                <option value="other">Inne</option>
              </select>
              {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
            </div>

            {/* Wiadomość */}
            <div>
              <textarea
                value={formData.message}
                onChange={handleChange('message')}
                onBlur={handleBlur('message')}
                placeholder="Opisz swój problem lub pytanie *"
                className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 h-36 focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                  errors.message ? 'border-red-500' : 'border-white/20'
                }`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Wyślij wiadomość
            </button>
            <p className="text-xs text-gray-400 text-center">
              * Pola wymagane. Odpowiadamy w ciągu 24h.
            </p>
          </form>

          {/* Informacje kontaktowe + mapy + szybkie porady */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map / Location */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 text-center shadow-md hover:shadow-purple-500/20 transition-shadow duration-300">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Lokalizacja</h3>
              <p className="text-sm text-gray-400 mb-4">
                Nasz serwis działa w formie działalności domowej w miejscowości Góra, woj. Śląskie. 
                Wizyty możliwe wyłącznie po wcześniejszym kontakcie.
              </p>
              <button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Góra,+Śląskie', '_blank')}
                className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Zobacz lokalizację
              </button>
            </div>

            {/* Quick Tips */}
            <div className="bg-purple-500/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 shadow-md hover:shadow-purple-500/25 transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-purple-400" />
                Kilka szybkich porad
              </h3>
              <ul className="space-y-3">
                {quickTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 group transition-all duration-200 hover:translate-x-1">
                    <tip.icon className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0 group-hover:text-white transition-colors duration-200" />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">{tip.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
